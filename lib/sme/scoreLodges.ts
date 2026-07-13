// lib/sme/scoreLodges.ts
// Swafaris Matching Engine (SME): scores every lodge against a traveler's
// profile. SERVER-ONLY logic — the raw `score` this produces must never
// reach a component. Only lib/sre/ should consume CompatibilityScore.

import type { TravelerProfile } from "@/types/stm";
import type { Lodge } from "@/types/edf";
import type { CompatibilityScore, CompatibilityTier } from "@/types/sme";
import type { BudgetTier, TravelFatigue } from "@/types/common";

const BUDGET_ORDER: BudgetTier[] = ["Value", "Mid-range", "Premium", "Luxury", "Ultra Luxury"];
const FATIGUE_ORDER: TravelFatigue[] = ["Very Low", "Low", "Medium", "High", "Very High"];
const MAX_FATIGUE_BY_DURATION: Record<string, number> = {
  "3-5 Days": 1, // Low
  "6-8 Days": 2, // Medium
  "9-12 Days": 3, // High
  "13+ Days": 4, // Very High
};

function closeness(a: number, b: number): number {
  // returns 0-1, 1 = identical
  return Math.max(0, 1 - Math.abs(a - b) / 100);
}

function tierFromScore(score: number): CompatibilityTier {
  if (score >= 90) return "exceptional";
  if (score >= 75) return "strong";
  if (score >= 60) return "supporting";
  return "excluded";
}

export function scoreLodges(profile: TravelerProfile, lodges: Lodge[]): CompatibilityScore[] {
  return lodges.map((lodge) => {
    const dna = lodge.experienceDNA;
    const d = profile.dimensions;

    // --- Category 1: STM Alignment (40%) ---
    const intentionMatch = closeness(d.travelIntention, dna.intensityScore * 10) * 10;
    const transformationMatch =
      closeness(d.transformationGoal, (dna.relaxationScore + dna.authenticityScore) * 5) * 10;
    const energyMatch = closeness(d.energyLevel, dna.intensityScore * 10) * 5;
    const paceScale: Record<string, number> = { Slow: 15, Balanced: 50, Fast: 90 };
    const paceMatch = closeness(d.journeyPace, paceScale[dna.experiencePace]) * 5;
    const socialScale: Record<string, number> = { Private: 10, Balanced: 50, Social: 90, "Community-Based": 80 };
    const socialMatch = closeness(d.socialPreference, socialScale[dna.socialDynamic]) * 5;
    const recoveryMatch = closeness(d.recoveryNeed, dna.relaxationScore * 10) * 5;

    const stmAlignment =
      intentionMatch + transformationMatch + energyMatch + paceMatch + socialMatch + recoveryMatch;

    // --- Category 2: EDF Match (35%) ---
    const comfortMatch = dna.comfortPhilosophy.includes(profile.comfortPhilosophy) ? 15 : 6;
    const archetypeOverlap =
      dna.idealTravelers.primary.includes(profile.archetypes.primary) ? 15 :
      dna.idealTravelers.secondary.includes(profile.archetypes.primary) ||
      dna.idealTravelers.primary.includes(profile.archetypes.secondary) ? 9 : 3;
    const authenticityMatch = closeness(d.authenticityAppetite, dna.authenticityScore * 10) * 5;
    const edfMatch = comfortMatch + archetypeOverlap + authenticityMatch;

    // --- Category 3: Journey Role Fit (15%) ---
    let roleFit = 8; // baseline
    if (dna.journeyRole === "Recovery Reset" && d.recoveryNeed > 65) roleFit = 15;
    if (dna.journeyRole === "Safari Climax" && d.travelIntention > 60) roleFit = 15;
    if (
      (dna.journeyRole === "Romantic Finale" || dna.journeyRole === "Coastal Decompression") &&
      (profile.archetypes.primary === "Honeymooners" || profile.archetypes.primary === "Burned-Out Executives")
    ) {
      roleFit = 15;
    }

    // --- Category 4: Budget Compatibility (5%) ---
    const budgetDiff = Math.abs(BUDGET_ORDER.indexOf(profile.budgetTier) - BUDGET_ORDER.indexOf(lodge.budgetTier));
    const budgetScore = budgetDiff === 0 ? 5 : budgetDiff === 1 ? 3 : budgetDiff === 2 ? 1 : 0;

    // --- Category 5: Logistics Compatibility (5%) ---
    const allowedFatigue = MAX_FATIGUE_BY_DURATION[profile.tripDuration] ?? 4;
    const lodgeFatigue = FATIGUE_ORDER.indexOf(dna.travelFatigue);
    const logisticsScore = lodgeFatigue <= allowedFatigue ? 5 : 2;

    const total = Math.round(stmAlignment + edfMatch + roleFit + budgetScore + logisticsScore);
    const score = Math.min(100, Math.max(0, total));
    const tier = tierFromScore(score);

    const strengths: string[] = [];
    if (comfortMatch >= 15) strengths.push(`Matches your ${profile.comfortPhilosophy.toLowerCase()} sensibility`);
    if (archetypeOverlap >= 15) strengths.push(`Strongly aligned with the ${profile.archetypes.primary} traveler profile`);
    if (recoveryMatch >= 4) strengths.push("Supports the recovery your journey calls for");
    if (intentionMatch >= 8) strengths.push("Fits the emotional intention behind your journey");
    if (strengths.length === 0) strengths.push("Offers a solid, well-rounded experience");

    const potentialMismatch =
      budgetScore < 3
        ? "Sits outside your preferred comfort and budget range"
        : socialMatch < 3
        ? "May not match your preferred social atmosphere"
        : undefined;

    return { lodgeId: lodge.id, score, tier, strengths: strengths.slice(0, 3), potentialMismatch };
  });
}