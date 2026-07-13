// lib/stm/scoreProfile.ts
// Swafaris Traveler Model (STM): converts raw onboarding answers into a
// scored TravelerProfile — the traveler's identity + emotional profile.

import type { OnboardingAnswers, STMDimensionScores, TravelerProfile } from "@/types/stm";
import type { TravelerArchetype } from "@/types/common";

const TRAVEL_INTENTION_SCALE: Record<string, number> = {
  Discovery: 55, Adventure: 90, Connection: 40, Recovery: 15,
  Celebration: 60, Learning: 45, Transformation: 65,
};
const TRANSFORMATION_GOAL_SCALE: Record<string, number> = {
  "Feel refreshed": 80, "Reconnect with someone": 50, "Create memories": 55,
  "Rediscover yourself": 70, "Gain perspective": 65, "Celebrate a milestone": 60,
  "Experience something unforgettable": 85,
};
const RECOVERY_STATE_SCALE: Record<string, number> = {
  Energized: 10, Curious: 20, Inspired: 15, "Burned out": 95,
  Overwhelmed: 90, "Seeking clarity": 75, "Need to disconnect": 85,
};
const ENERGY_LEVEL_SCALE: Record<string, number> = { Restorative: 15, Balanced: 50, "High Energy": 90 };
const PACE_SCALE: Record<string, number> = { "Slow Immersion": 15, "Balanced Exploration": 50, "Fast Expedition": 90 };
const NATURE_SCALE: Record<string, number> = {
  "Scenic Appreciation": 30, "Wildlife Interest": 55, "Nature Immersion": 80, "Conservation Connection": 95,
};
const SOCIAL_SCALE: Record<string, number> = { "Private Escape": 10, "Balanced Connection": 50, "Social Exploration": 90 };
const AUTHENTICITY_SCALE: Record<string, number> = {
  "Classic Experience": 20, "Curious Explorer": 45, "Hidden Gem Seeker": 75, "Deep Cultural Immersion": 95,
};

// Point-based archetype signal table. Each answer contributes points toward
// one or more archetypes. Top two by total points become primary/secondary.
type ArchetypePoints = Partial<Record<TravelerArchetype, number>>;
const SIGNALS: Record<string, ArchetypePoints> = {
  "travelIntention:Discovery": { "First-Time Safari Travelers": 2, "Solo Explorers": 1 },
  "travelIntention:Adventure": { "Luxury Adventurers": 2, "Solo Explorers": 1 },
  "travelIntention:Connection": { Families: 2, "Social Explorers": 1 },
  "travelIntention:Recovery": { "Burned-Out Executives": 3 },
  "travelIntention:Celebration": { Honeymooners: 2, Families: 1 },
  "travelIntention:Learning": { Students: 2, "Nature Photographers": 1 },
  "travelIntention:Transformation": { "Slow Travelers": 2, "Burned-Out Executives": 1 },

  "transformationGoal:Feel refreshed": { "Burned-Out Executives": 2 },
  "transformationGoal:Reconnect with someone": { Honeymooners: 2, Families: 1 },
  "transformationGoal:Create memories": { Families: 2 },
  "transformationGoal:Rediscover yourself": { "Solo Explorers": 2, "Slow Travelers": 1 },
  "transformationGoal:Gain perspective": { "Nature Photographers": 1, "Slow Travelers": 1 },
  "transformationGoal:Celebrate a milestone": { Honeymooners: 2 },
  "transformationGoal:Experience something unforgettable": { "Luxury Adventurers": 2, "First-Time Safari Travelers": 1 },

  "recoveryState:Burned out": { "Burned-Out Executives": 3 },
  "recoveryState:Overwhelmed": { "Burned-Out Executives": 2 },
  "recoveryState:Seeking clarity": { "Slow Travelers": 1, "Solo Explorers": 1 },
  "recoveryState:Need to disconnect": { "Burned-Out Executives": 1, "Solo Explorers": 1 },
  "recoveryState:Energized": { "Luxury Adventurers": 1 },
  "recoveryState:Curious": { "First-Time Safari Travelers": 1 },
  "recoveryState:Inspired": { "Nature Photographers": 1 },

  "desiredEnergyLevel:High Energy": { "Luxury Adventurers": 2 },
  "desiredEnergyLevel:Restorative": { "Burned-Out Executives": 1, "Slow Travelers": 1 },
  "desiredEnergyLevel:Balanced": { Families: 1 },

  "journeyPace:Slow Immersion": { "Slow Travelers": 2 },
  "journeyPace:Fast Expedition": { "Luxury Adventurers": 1, "First-Time Safari Travelers": 1 },
  "journeyPace:Balanced Exploration": { "Bleisure Explorers": 1 },

  "natureConnection:Conservation Connection": { "Nature Photographers": 2 },
  "natureConnection:Nature Immersion": { "Slow Travelers": 1, "Nature Photographers": 1 },
  "natureConnection:Wildlife Interest": { "First-Time Safari Travelers": 1 },
  "natureConnection:Scenic Appreciation": { Families: 1 },

  "comfortPhilosophy:Exclusive Luxury": { "Luxury Adventurers": 1, Honeymooners: 1 },
  "comfortPhilosophy:Quiet Luxury": { "Burned-Out Executives": 1, Honeymooners: 1 },
  "comfortPhilosophy:Adventure Luxury": { "Luxury Adventurers": 1 },
  "comfortPhilosophy:Authentic Luxury": { "Slow Travelers": 1 },
  "comfortPhilosophy:Comfort Luxury": { Families: 1, "Bleisure Explorers": 1 },

  "socialPreference:Private Escape": { Honeymooners: 2, "Solo Explorers": 1, "Burned-Out Executives": 1 },
  "socialPreference:Social Exploration": { "Social Explorers": 2, Students: 1 },
  "socialPreference:Balanced Connection": { Families: 1 },

  "authenticityAppetite:Deep Cultural Immersion": { "Slow Travelers": 1, "Nature Photographers": 1 },
  "authenticityAppetite:Hidden Gem Seeker": { "Solo Explorers": 1, "Slow Travelers": 1 },
  "authenticityAppetite:Curious Explorer": { "First-Time Safari Travelers": 1 },
  "authenticityAppetite:Classic Experience": { Families: 1 },

  "budgetTier:Value": { Students: 2 },
  "budgetTier:Ultra Luxury": { "Luxury Adventurers": 1, Honeymooners: 1 },
};

function resolveArchetypes(answers: OnboardingAnswers): { primary: TravelerArchetype; secondary: TravelerArchetype } {
  const points: ArchetypePoints = {};
  const fields: (keyof OnboardingAnswers)[] = [
    "travelIntention", "transformationGoal", "recoveryState", "desiredEnergyLevel",
    "journeyPace", "natureConnection", "comfortPhilosophy", "socialPreference",
    "authenticityAppetite", "budgetTier",
  ];
  for (const field of fields) {
    const key = `${field}:${answers[field]}`;
    const signal = SIGNALS[key];
    if (!signal) continue;
    for (const [archetype, value] of Object.entries(signal)) {
      points[archetype as TravelerArchetype] = (points[archetype as TravelerArchetype] ?? 0) + value;
    }
  }
  const ranked = Object.entries(points).sort((a, b) => b[1] - a[1]) as [TravelerArchetype, number][];
  const primary = ranked[0]?.[0] ?? "First-Time Safari Travelers";
  const secondary = ranked[1]?.[0] ?? "Slow Travelers";
  return { primary, secondary };
}

export function scoreProfile(answers: OnboardingAnswers): TravelerProfile {
  const dimensions: STMDimensionScores = {
    travelIntention: TRAVEL_INTENTION_SCALE[answers.travelIntention] ?? 50,
    transformationGoal: TRANSFORMATION_GOAL_SCALE[answers.transformationGoal] ?? 50,
    recoveryNeed: RECOVERY_STATE_SCALE[answers.recoveryState] ?? 50,
    energyLevel: ENERGY_LEVEL_SCALE[answers.desiredEnergyLevel] ?? 50,
    journeyPace: PACE_SCALE[answers.journeyPace] ?? 50,
    natureConnection: NATURE_SCALE[answers.natureConnection] ?? 50,
    socialPreference: SOCIAL_SCALE[answers.socialPreference] ?? 50,
    authenticityAppetite: AUTHENTICITY_SCALE[answers.authenticityAppetite] ?? 50,
  };

  return {
    archetypes: resolveArchetypes(answers),
    dimensions,
    comfortPhilosophy: answers.comfortPhilosophy,
    hiddenIntent: answers.hiddenIntent,
    budgetTier: answers.budgetTier,
    tripDuration: answers.tripDuration,
  };
}