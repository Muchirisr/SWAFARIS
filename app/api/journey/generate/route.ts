import { NextResponse } from "next/server";
import { buildJourneyBlueprint } from "@/lib/sre/buildBlueprint";
import type { OnboardingAnswers } from "@/types/stm";

export async function POST(request: Request) {
  const answers: OnboardingAnswers = await request.json();

  try {
    const blueprint = await buildJourneyBlueprint(answers);
    return NextResponse.json(blueprint);
  } catch (error) {
    console.error("Journey generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate journey blueprint." },
      { status: 500 }
    );
  }
}