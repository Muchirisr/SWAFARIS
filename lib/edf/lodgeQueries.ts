// lib/edf/lodgeQueries.ts
// Experience DNA Framework (EDF) layer. For the MVP, property data is
// static and typed (data/lodges), but EDF still owns the logic for
// working with that data safely.

import type { Lodge } from "@/types/edf";
import { lodges } from "@/data/lodges";

export function getAllLodges(): Lodge[] {
  return lodges;
}

export function getLodgeById(id: string): Lodge | undefined {
  return lodges.find((lodge) => lodge.id === id);
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