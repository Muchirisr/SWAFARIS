import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db/client";
import { buildJourneyBlueprint } from "@/lib/sre/buildBlueprint";
import type { OnboardingAnswers } from "@/types/stm";

function toShareSlug(identityTitle: string): string {
  const base = identityTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const suffix = randomBytes(3).toString("hex"); // e.g. "a1b2c3"
  return `${base}-${suffix}`;
}

export async function POST(request: Request) {
  const answers: OnboardingAnswers = await request.json();

  // Critical path: if this fails, the traveler genuinely gets nothing,
  // so it fails loudly with a real error response.
  let blueprint;
  try {
    blueprint = await buildJourneyBlueprint(answers);
  } catch (error) {
    console.error("Journey generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate journey blueprint." },
      { status: 500 }
    );
  }

  // Best-effort side path: saving is a bonus, not the point. A failure
  // here is logged, but the traveler still gets their blueprint.
  try {
    const session = await prisma.onboardingSession.create({
      data: { answers: answers as unknown as Prisma.InputJsonValue, completedAt: new Date() },
    });

    await prisma.journeyBlueprint.create({
      data: {
        sessionId: session.id,
        identityTitle: blueprint.identityTitle,
        journeyTheme: blueprint.journeyTheme,
        journeyPhilosophy: blueprint.journeyPhilosophy,
        compass: JSON.stringify(blueprint.compass),
        whyThisFits: blueprint.whyThisFits,
        summary: JSON.stringify(blueprint.summary),
        shareSlug: toShareSlug(blueprint.identityTitle),
        chapters: {
          create: blueprint.timeline.map((chapter, index) => ({
            lodgeId: chapter.lodgeId,
            dayRange: chapter.dayRange,
            title: chapter.title,
            region: chapter.region,
            purpose: chapter.purpose,
            highlights: chapter.highlights,
            order: index,
          })),
        },
        cards: {
          create: blueprint.experienceCards.map((card, index) => ({
            lodgeId: card.lodgeId,
            tags: card.tags,
            emotionalDescription: card.emotionalDescription,
            whySelected: card.whySelected,
            tier: card.tier,
            order: index,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Failed to persist journey blueprint:", error);
  }

  return NextResponse.json(blueprint);
}