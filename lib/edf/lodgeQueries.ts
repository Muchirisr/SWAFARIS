// lib/edf/lodgeQueries.ts
// Experience DNA Framework (EDF) layer. Property data now lives in
// Postgres (see prisma/schema.prisma), but EDF still owns the job of
// handing that data to the rest of the pipeline in the exact Lodge shape
// it has always expected — nothing above this file should know or care
// that the data used to live in a TypeScript array.

import type { Lodge } from "@/types/edf";
import { prisma } from "@/lib/db/client";

type LodgeRow = {
  id: string;
  name: string;
  region: string;
  ecosystem: string;
  budgetTier: string;
  pairsWellWith: string[];
  experienceDna: {
    emotionalTone: string[];
    energyType: string[];
    experiencePace: string;
    comfortPhilosophy: string[];
    journeyRole: string;
    idealTravelersPrimary: string[];
    idealTravelersSecondary: string[];
    intensityScore: number;
    relaxationScore: number;
    authenticityScore: number;
    premiumScore: number;
    socialDynamic: string;
    travelFatigue: string;
  } | null;
  narrative: {
    whyChosen: string;
    bestUsedFor: string;
    lessSuitableFor: string;
    journeyPositionNote: string;
  } | null;
};

// The one place that translates a flat database row back into the
// nested Lodge shape scoreLodges/sequenceJourney have always expected.
function toLodge(row: LodgeRow): Lodge {
  if (!row.experienceDna || !row.narrative) {
    throw new Error(`Lodge "${row.id}" is missing its experienceDna or narrative row.`);
  }

  return {
    id: row.id,
    name: row.name,
    region: row.region,
    ecosystem: row.ecosystem,
    budgetTier: row.budgetTier as Lodge["budgetTier"],
    experienceDNA: {
      emotionalTone: row.experienceDna.emotionalTone as Lodge["experienceDNA"]["emotionalTone"],
      energyType: row.experienceDna.energyType as Lodge["experienceDNA"]["energyType"],
      experiencePace: row.experienceDna.experiencePace as Lodge["experienceDNA"]["experiencePace"],
      comfortPhilosophy: row.experienceDna.comfortPhilosophy as Lodge["experienceDNA"]["comfortPhilosophy"],
      journeyRole: row.experienceDna.journeyRole as Lodge["experienceDNA"]["journeyRole"],
      idealTravelers: {
        primary: row.experienceDna.idealTravelersPrimary as Lodge["experienceDNA"]["idealTravelers"]["primary"],
        secondary: row.experienceDna.idealTravelersSecondary as Lodge["experienceDNA"]["idealTravelers"]["secondary"],
      },
      intensityScore: row.experienceDna.intensityScore,
      relaxationScore: row.experienceDna.relaxationScore,
      authenticityScore: row.experienceDna.authenticityScore,
      premiumScore: row.experienceDna.premiumScore,
      socialDynamic: row.experienceDna.socialDynamic as Lodge["experienceDNA"]["socialDynamic"],
      travelFatigue: row.experienceDna.travelFatigue as Lodge["experienceDNA"]["travelFatigue"],
    },
    whyChosen: row.narrative.whyChosen,
    bestUsedFor: row.narrative.bestUsedFor,
    lessSuitableFor: row.narrative.lessSuitableFor,
    pairsWellWith: row.pairsWellWith,
    journeyPositionNote: row.narrative.journeyPositionNote,
  };
}

export async function getAllLodges(): Promise<Lodge[]> {
  const rows = await prisma.lodge.findMany({
    include: { experienceDna: true, narrative: true },
  });
  return rows.map(toLodge);
}

export async function getLodgeById(id: string): Promise<Lodge | undefined> {
  const row = await prisma.lodge.findUnique({
    where: { id },
    include: { experienceDna: true, narrative: true },
  });
  return row ? toLodge(row) : undefined;
}

// Confirms a lodge has every mandatory EDF field populated (per EDF Database
// Rule: incomplete profiles cannot enter the recommendation engine).
export function isCompleteLodge(lodge: Lodge): boolean {
  const dna = lodge.experienceDNA;
  return Boolean(
    dna.emotionalTone.length &&
      dna.energyType.length &&
      dna.experiencePace &&
      dna.comfortPhilosophy.length &&
      dna.journeyRole &&
      dna.idealTravelers.primary.length &&
      dna.intensityScore &&
      dna.relaxationScore &&
      dna.authenticityScore &&
      dna.premiumScore &&
      dna.socialDynamic &&
      dna.travelFatigue
  );
}