// scripts/import-knowledge-base.ts
import 'dotenv/config';
import { prisma } from '../lib/db/client';
import { knowledgeBaseLodges } from '../data/knowledge-base';

async function importLodge(lodge: (typeof knowledgeBaseLodges)[number]) {
  const baseFields = {
    name: lodge.name, country: lodge.country, region: lodge.region, subRegion: lodge.subRegion,
    ecosystem: lodge.ecosystem, locationDetail: lodge.locationDetail, nearestGate: lodge.nearestGate,
    nearestAirstrips: lodge.nearestAirstrips, accessibilityNotes: lodge.accessibilityNotes,
    priceRangeMinUsd: lodge.priceRangeMinUsd, priceRangeMaxUsd: lodge.priceRangeMaxUsd,
    rawMarketTier: lodge.rawMarketTier, swafarisExperienceTier: lodge.swafarisExperienceTier,
    budgetTier: lodge.budgetTier, experienceIdentity: lodge.experienceIdentity,
    pairsWellWith: lodge.pairsWellWith, rawSourceJson: lodge.rawSourceJson,
  };

  await prisma.$transaction(async (tx) => {
    await tx.lodge.upsert({
      where: { id: lodge.id },
      create: {
        id: lodge.id, ...baseFields,
        experienceDna: { create: lodge.experienceDna },
        operationalIntelligence: { create: lodge.operationalIntelligence },
        journeyIntelligence: { create: lodge.journeyIntelligence },
        narrative: { create: lodge.narrative },
        recommendationNotes: { create: lodge.recommendationNotes },
        dataQuality: { create: lodge.dataQuality },
      },
      update: {
        ...baseFields,
        experienceDna: { upsert: { create: lodge.experienceDna, update: lodge.experienceDna } },
        operationalIntelligence: { upsert: { create: lodge.operationalIntelligence, update: lodge.operationalIntelligence } },
        journeyIntelligence: { upsert: { create: lodge.journeyIntelligence, update: lodge.journeyIntelligence } },
        narrative: { upsert: { create: lodge.narrative, update: lodge.narrative } },
        recommendationNotes: { upsert: { create: lodge.recommendationNotes, update: lodge.recommendationNotes } },
        dataQuality: { upsert: { create: lodge.dataQuality, update: lodge.dataQuality } },
      },
    });

    await tx.lodgeTravelerMatch.deleteMany({ where: { lodgeId: lodge.id } });
    await tx.lodgeTravelerMatch.createMany({ data: lodge.travelerMatches.map((m) => ({ ...m, lodgeId: lodge.id })) });
    await tx.lodgePairing.deleteMany({ where: { lodgeId: lodge.id } });
    await tx.lodgePairing.createMany({ data: lodge.pairings.map((p) => ({ ...p, lodgeId: lodge.id })) });
  }, { timeout: 20000, maxWait: 10000 });
}

async function main() {
  const results: { id: string; status: "ok" | "failed"; error?: string }[] = [];

  for (const lodge of knowledgeBaseLodges) {
    try {
      await importLodge(lodge);
      results.push({ id: lodge.id, status: "ok" });
      console.log(`✔ ${lodge.id}`);
    } catch (error) {
      results.push({ id: lodge.id, status: "failed", error: String(error) });
      console.error(`✘ ${lodge.id}:`, error);
      // Deliberately continue to the next lodge rather than aborting the
      // whole batch — one bad record shouldn't block everyone else's import.
    }
  }

  console.log("\n--- Import summary ---");
  console.table(results.map((r) => ({ id: r.id, status: r.status })));
  const failed = results.filter((r) => r.status === "failed");
  if (failed.length) {
    console.log(`\n${failed.length} lodge(s) failed — see errors above.`);
    process.exitCode = 1;
  }
}

main().finally(async () => { await prisma.$disconnect(); });