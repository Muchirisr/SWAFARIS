// types/stm.ts
// Types for the Swafaris Traveler Model (STM).
// STM answers: "Who is this traveler, and what do they need?"

import type { BudgetTier, ComfortPhilosophy, TravelerArchetype, TripDuration } from "./common";

/**
 * Raw answers submitted during onboarding (Screen 2).
 * These are user input — unscored, uncomputed. This is what
 * components/onboarding/ components produce and pass to lib/stm/.
 */
export interface OnboardingAnswers {
  travelIntention: string;       // e.g. "Recovery", "Adventure", "Celebration"
  transformationGoal: string;    // e.g. "Feel refreshed", "Rediscover yourself"
  recoveryState: string;         // e.g. "Burned out", "Energized"
  desiredEnergyLevel: string;    // e.g. "Restorative", "Balanced", "High Energy"
  journeyPace: string;           // e.g. "Slow Immersion", "Fast Expedition"
  natureConnection: string;      // e.g. "Wildlife Interest", "Conservation Connection"
  comfortPhilosophy: ComfortPhilosophy;
  socialPreference: string;      // e.g. "Private Escape", "Social Exploration"
  authenticityAppetite: string;  // e.g. "Classic Experience", "Hidden Gem Seeker"
  hiddenIntent: string;          // free text, optional — "Anything else we should know?"
  budgetTier: BudgetTier;
  tripDuration: TripDuration;
}

/**
 * Computed numeric dimension scores (0–100 scale).
 *
 * SERVER-ONLY. These numbers are the exact data the "no raw scores to the
 * traveler" rule exists to protect. Only lib/stm/ and lib/sre/ should ever
 * import this type. If you find yourself importing STMDimensionScores into
 * a component, stop — you likely want JourneyCompass from types/journey.ts
 * instead.
 */
export interface STMDimensionScores {
  travelIntention: number;
  transformationGoal: number;
  recoveryNeed: number;
  energyLevel: number;       // 0 = fully restorative, 100 = fully high-energy
  journeyPace: number;       // 0 = slow immersion, 100 = fast expedition
  natureConnection: number;
  socialPreference: number;  // 0 = private escape, 100 = social exploration
  authenticityAppetite: number;
}

/**
 * The complete STM output. This is what flows into SME as "Traveler DNA."
 */
export interface TravelerProfile {
  archetypes: {
    primary: TravelerArchetype;
    secondary: TravelerArchetype;
  };
  dimensions: STMDimensionScores; // SERVER-ONLY, see above
  comfortPhilosophy: ComfortPhilosophy;
  hiddenIntent: string;
  budgetTier: BudgetTier;
  tripDuration: TripDuration;
}
/** A single selectable option on an onboarding question screen. */
export interface QuestionOption {
  label: string; // shown to the traveler, e.g. "Feel refreshed"
  value: string; // stored value, matches the corresponding OnboardingAnswers field
}

/**
 * One onboarding question. The `id` matches a field on OnboardingAnswers,
 * so the onboarding flow can write answers directly: answers[question.id] = value.
 */
export interface OnboardingQuestion {
  id: keyof OnboardingAnswers;
  prompt: string;
  type: "select" | "freeText";
  options?: QuestionOption[]; // present when type === "select"
  optional?: boolean; // true only for hiddenIntent
}