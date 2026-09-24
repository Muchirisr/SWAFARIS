// lib/validation/onboardingAnswers.ts
// Runtime validation for the raw onboarding answers submitted to
// POST /api/journey/generate. TypeScript types vanish at runtime, so this
// is what actually protects the pipeline and the database from bad input.

import { z } from "zod";
import {
  BUDGET_TIERS,
  COMFORT_PHILOSOPHIES,
  TRIP_DURATIONS,
} from "@/types/common";

// A select-style answer: present, non-empty after trimming, sensible length.
const choice = z.string().trim().min(1, "Required").max(100, "Too long");

export const onboardingAnswersSchema = z.object({
  travelIntention: choice,
  transformationGoal: choice,
  recoveryState: choice,
  desiredEnergyLevel: choice,
  journeyPace: choice,
  natureConnection: choice,
  comfortPhilosophy: z.enum(COMFORT_PHILOSOPHIES),
  socialPreference: choice,
  authenticityAppetite: choice,
  // Free text, genuinely optional ("Anything else we should know?").
  hiddenIntent: z.string().trim().max(1000, "Too long").default(""),
  budgetTier: z.enum(BUDGET_TIERS),
  tripDuration: z.enum(TRIP_DURATIONS),
});