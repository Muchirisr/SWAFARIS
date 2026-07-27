import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";
import type { OnboardingAnswers } from "@/types/stm";

export async function POST(request: Request) {
  const answers: OnboardingAnswers = await request.json();

  const session = await prisma.onboardingSession.create({
    data: {
      answers,
      completedAt: new Date(),
    },
  });

  return NextResponse.json({ sessionId: session.id });
}