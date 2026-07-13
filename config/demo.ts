// config/demo.ts
// Showcase fallback mode. This sample blueprint is generated through the
// REAL pipeline (not hand-written), so it can never drift out of sync with
// how the actual engine behaves.

import type { OnboardingAnswers } from "@/types/stm";
import { buildJourneyBlueprint } from "@/lib/sre/buildBlueprint";

export const sampleAnswers: OnboardingAnswers = {
  travelIntention: "Recovery",
  transformationGoal: "Feel refreshed",
  recoveryState: "Burned out",
  desiredEnergyLevel: "Restorative",
  journeyPace: "Slow Immersion",
  natureConnection: "Conservation Connection",
  comfortPhilosophy: "Quiet Luxury",
  socialPreference: "Private Escape",
  authenticityAppetite: "Hidden Gem Seeker",
  hiddenIntent: "Celebrating finishing a difficult year at work.",
  budgetTier: "Ultra Luxury",
  tripDuration: "9-12 Days",
};

export const sampleBlueprint = buildJourneyBlueprint(sampleAnswers);