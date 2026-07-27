import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { lodges } from "../data/lodges/lodges";
import { onboardingQuestions } from "../data/questions/questions";

const prisma = new PrismaClient();

async function seedLodges() {
  for (const lodge of lodges) {
    const experienceDnaData = {
      emotionalTone: lodge.experienceDNA.emotionalTone,
      energyType: lodge.experienceDNA.energyType,
      experiencePace: lodge.experienceDNA.experiencePace,
      comfortPhilosophy: lodge.experienceDNA.comfortPhilosophy,
      journeyRole: lodge.experienceDNA.journeyRole,
      idealTravelersPrimary: lodge.experienceDNA.idealTravelers.primary,
      idealTravelersSecondary: lodge.experienceDNA.idealTravelers.secondary,
      intensityScore: lodge.experienceDNA.intensityScore,
      relaxationScore: lodge.experienceDNA.relaxationScore,
      authenticityScore: lodge.experienceDNA.authenticityScore,
      premiumScore: lodge.experienceDNA.premiumScore,
      socialDynamic: lodge.experienceDNA.socialDynamic,
      travelFatigue: lodge.experienceDNA.travelFatigue,
    };

    const narrativeData = {
      whyChosen: lodge.whyChosen,
      bestUsedFor: lodge.bestUsedFor,
      lessSuitableFor: lodge.lessSuitableFor,
      journeyPositionNote: lodge.journeyPositionNote,
    };

    await prisma.lodge.upsert({
      where: { id: lodge.id },
      create: {
        id: lodge.id,
        name: lodge.name,
        region: lodge.region,
        ecosystem: lodge.ecosystem,
        budgetTier: lodge.budgetTier,
        pairsWellWith: lodge.pairsWellWith,
        experienceDna: { create: experienceDnaData },
        narrative: { create: narrativeData },
      },
      update: {
        name: lodge.name,
        region: lodge.region,
        ecosystem: lodge.ecosystem,
        budgetTier: lodge.budgetTier,
        pairsWellWith: lodge.pairsWellWith,
        experienceDna: { upsert: { create: experienceDnaData, update: experienceDnaData } },
        narrative: { upsert: { create: narrativeData, update: narrativeData } },
      },
    });
  }

  console.log(`Upserted ${lodges.length} lodges.`);
}

async function seedQuestions() {
  await prisma.onboardingQuestionOption.deleteMany();
  await prisma.onboardingQuestion.deleteMany();

  for (const [index, question] of onboardingQuestions.entries()) {
    await prisma.onboardingQuestion.create({
      data: {
        id: question.id,
        prompt: question.prompt,
        type: question.type,
        optional: question.optional ?? false,
        sortOrder: index,
        options: question.options
          ? {
              create: question.options.map((option, optionIndex) => ({
                label: option.label,
                value: option.value,
                sortOrder: optionIndex,
              })),
            }
          : undefined,
      },
    });
  }

  console.log(`Seeded ${onboardingQuestions.length} questions.`);
}

async function main() {
  await seedLodges();
  await seedQuestions();
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });