import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";
import type { OnboardingQuestion } from "@/types/stm";

export async function GET() {
  const rows = await prisma.onboardingQuestion.findMany({
    orderBy: { sortOrder: "asc" },
    include: { options: { orderBy: { sortOrder: "asc" } } },
  });

  const questions: OnboardingQuestion[] = rows.map((row) => ({
    id: row.id as OnboardingQuestion["id"],
    prompt: row.prompt,
    type: row.type as OnboardingQuestion["type"],
    optional: row.optional,
    options: row.options.length
      ? row.options.map((option) => ({ label: option.label, value: option.value }))
      : undefined,
  }));

  return NextResponse.json(questions);
}