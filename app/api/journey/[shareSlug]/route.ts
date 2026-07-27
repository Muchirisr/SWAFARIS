import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";
import { ACT_TITLES } from "@/lib/sre/buildBlueprint";
import type {
  JourneyBlueprint,
  JourneyArchitectureStage,
  ExperienceCard,
  JourneyChapter,
} from "@/types/journey";
import type { JourneyAct } from "@/types/jse";

// Reverse of ACT_TITLES: "Safari Peak" -> "climax", etc.
const TITLE_TO_ACT = Object.fromEntries(
  Object.entries(ACT_TITLES).map(([act, title]) => [title, act as JourneyAct])
);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ shareSlug: string }> }
) {
  const { shareSlug } = await params;

  const row = await prisma.journeyBlueprint.findUnique({
    where: { shareSlug },
    include: {
      chapters: { orderBy: { order: "asc" }, include: { lodge: true } },
      cards: {
        orderBy: { order: "asc" },
        include: { lodge: { include: { experienceDna: true } } },
      },
    },
  });

  if (!row) {
    return NextResponse.json({ error: "Journey not found." }, { status: 404 });
  }

  const timeline: JourneyChapter[] = row.chapters.map((chapter) => ({
    dayRange: chapter.dayRange,
    title: chapter.title,
    region: chapter.region,
    purpose: chapter.purpose,
    lodgeId: chapter.lodgeId,
    highlights: chapter.highlights,
  }));

  const architecture: JourneyArchitectureStage[] = row.chapters.map((chapter) => ({
    act: TITLE_TO_ACT[chapter.title],
    title: chapter.title,
    purpose: chapter.purpose,
    lodgeId: chapter.lodgeId,
  }));

  const experienceCards: ExperienceCard[] = row.cards.map((card) => ({
    lodgeId: card.lodgeId,
    name: card.lodge.name,
    region: card.lodge.region,
    journeyRole: card.lodge.experienceDna!.journeyRole as ExperienceCard["journeyRole"],
    tags: card.tags,
    emotionalDescription: card.emotionalDescription,
    whySelected: card.whySelected,
    tier: card.tier as ExperienceCard["tier"],
  }));

  const blueprint: JourneyBlueprint = {
    identityTitle: row.identityTitle,
    journeyTheme: row.journeyTheme,
    journeyPhilosophy: row.journeyPhilosophy,
    compass: row.compass as unknown as JourneyBlueprint["compass"],
    whyThisFits: row.whyThisFits,
    architecture,
    experienceCards,
    timeline,
    summary: row.summary as unknown as JourneyBlueprint["summary"],
  };

  return NextResponse.json(blueprint);
}