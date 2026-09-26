// lib/stm/subArchetypes.ts
// Sub-archetype layer for the Swafaris Traveler Model (STM).
//
// Scope (confirmed 2026-09-26): traveler-side only. Lodges are NOT tagged
// with sub-archetypes, so a sub-archetype cannot be compared against
// anything on the lodge side yet (that would require re-tagging all
// ingested lodges — deferred, on the horizon). Instead, each sub-archetype
// carries a small "nudge": adjustments applied to the already-computed
// STMDimensionScores before they reach lib/sme/scoreLodges.ts. This is
// the actual scoring effect.
//
// Classification uses ONLY the dimensions/answers scoreProfile.ts already
// computes — no new onboarding questions. Every primary archetype has
// exactly one designated fallback sub-archetype (the smallest-magnitude
// nudge in that category), used when no stronger pattern matches, so the
// classifier never has a gap.

import type { OnboardingAnswers, STMDimensionScores } from "@/types/stm";
import type { TravelerArchetype, TravelerSubArchetype } from "@/types/common";

type DimensionNudge = Partial<STMDimensionScores>;

// --- Nudge table: one entry per sub-archetype, all 38 -----------------

const NUDGES: Record<TravelerSubArchetype, DimensionNudge> = {
  // Families
  "The Multi-Generational Legacy Family": { socialPreference: 8 }, // fallback
  "The Early-Stage Nurturers": { energyLevel: -15, journeyPace: -15 },
  "The Digital Teen Disconnectors": { natureConnection: 15, energyLevel: 5 },
  "The Milestone Celebrators": { transformationGoal: 15 },

  // Honeymooners
  "The Burnout Decompressors (The Cortisol Crashers)": { recoveryNeed: 15, energyLevel: -10 },
  "The Second-Chapter Sophisticates (Mature/Encore Marriages)": { authenticityAppetite: 10, energyLevel: -5 },
  "The Kinetic Bonders (The Shared-Adrenaline Couple)": { energyLevel: 15, journeyPace: 10 },
  "The Sanctuary Seekers (The Off-Grid Introverts)": { socialPreference: -20 },
  "The Narrative Curators (The Aesthetic Storytellers)": { authenticityAppetite: 5 }, // fallback

  // First-Time Safari Travelers
  "The Protege Traditionalist (The Romantic Neophyte)": { transformationGoal: 8 }, // fallback
  "The Checklist Maximalist (The Efficiency-Driven Optimizer)": { journeyPace: 15, energyLevel: 5 },
  "The Sensory Overwhelmed (The Controlled-Environment Seeker)": { energyLevel: -15, socialPreference: -10 },

  // Bleisure Explorers
  "The Deal-Closing Celebrationist (The High-Stakes Unwinder)": { recoveryNeed: 8 }, // fallback
  "The Deep-Work Sovereign (The Asynchronous Executive)": { socialPreference: -15, energyLevel: -10 },
  "The Corporate Catalyst (The Culture Alchemist)": { socialPreference: 15 },

  // Social Explorers
  "The Affectionate Host (The Collective Unwinder)": { socialPreference: 8 }, // fallback
  "The Status-Network Curator (The High-Profile Connector)": { socialPreference: 10, authenticityAppetite: -10 },
  "The Cultural Immersionist (The Deep-Humanity Seeker)": { authenticityAppetite: 15 },

  // Slow Travelers
  "The Generational Anchor (The Legacy Cultivator)": { authenticityAppetite: 8 }, // fallback
  "The Creative Resident (The Artistic Archivist)": { journeyPace: -10, authenticityAppetite: 10 },
  "The Conservation Guardian (The Purpose-Driven Stakeholder)": { natureConnection: 20 },
  "The Biophilic Restorer (The Nervous-System Reset)": { recoveryNeed: 15, natureConnection: 10 },

  // Solo Explorers
  "The Social Catalyst (The Collective Seeker)": { socialPreference: 15 }, // fallback
  "The Solitary Ascetic (The Silence Seeker)": { socialPreference: -15, recoveryNeed: 10 },
  "The Autonomous Hunter (The Sovereignty Collector)": { energyLevel: 10, journeyPace: 10 },
  "The Radical Rebooter (The Cathartic Pilgrim)": { recoveryNeed: 15, transformationGoal: 10 },

  // Nature Photographers
  "The Wilderness Minimalist (The Atmospheric Purist)": { socialPreference: -8 }, // fallback
  "The Apex Trophy Hunter (The Portfolio Completionist)": { journeyPace: 15, energyLevel: 5 },
  "The Fine-Art Ethologist (The Patient Storyteller)": { journeyPace: -15, authenticityAppetite: 10 },

  // Luxury Adventurers
  "The Low-Impact Purist (The Off-Grid Minimalist)": { natureConnection: 8 }, // fallback
  "The High-Octane Collector (The Adrenaline Purist)": { energyLevel: 15, journeyPace: 10 },
  "The Anthropological Explorer (The Cultural Participator)": { authenticityAppetite: 15 },

  // Burned-Out Executives
  "The Cathartic Challenger (The Kinetic Decompressor)": { energyLevel: 15 }, // fallback
  "The Incognito Ascetic (The Decision-Fatigued Minimizer)": { recoveryNeed: 15, socialPreference: -15 },
  "The Re-Wilding Visionary (The Creative Re-Booter)": { natureConnection: 15, transformationGoal: 10 },

  // Students
  "The Solitary Resetter (The Introverted Academic)": { socialPreference: -10 }, // fallback
  "The Impact Activist (The Purpose-Driven Scholar)": { natureConnection: 15, transformationGoal: 5 },
  "The Bonded Cohort (The High-Energy Collective)": { socialPreference: 15, energyLevel: 5 },
};

// --- Classifiers: one per primary archetype -----------------------------
// Each returns the matching sub-archetype, checked in priority order, with
// the fallback (smallest nudge) as the final else.

type Classifier = (dims: STMDimensionScores, answers: OnboardingAnswers) => TravelerSubArchetype;

const CLASSIFIERS: Record<TravelerArchetype, Classifier> = {
  Families: (d, a) => {
    if (a.transformationGoal === "Celebrate a milestone") return "The Milestone Celebrators";
    if (d.energyLevel < 35 && d.journeyPace < 35) return "The Early-Stage Nurturers";
    if (d.natureConnection >= 65 && d.energyLevel >= 50) return "The Digital Teen Disconnectors";
    return "The Multi-Generational Legacy Family";
  },

  Honeymooners: (d) => {
    if (d.recoveryNeed >= 65) return "The Burnout Decompressors (The Cortisol Crashers)";
    if (d.energyLevel >= 65 && d.journeyPace >= 55) return "The Kinetic Bonders (The Shared-Adrenaline Couple)";
    if (d.socialPreference <= 20) return "The Sanctuary Seekers (The Off-Grid Introverts)";
    if (d.authenticityAppetite >= 65 && d.energyLevel <= 45)
      return "The Second-Chapter Sophisticates (Mature/Encore Marriages)";
    return "The Narrative Curators (The Aesthetic Storytellers)";
  },

  "First-Time Safari Travelers": (d, a) => {
    if (a.recoveryState === "Overwhelmed" || (d.energyLevel <= 35 && d.socialPreference <= 35))
      return "The Sensory Overwhelmed (The Controlled-Environment Seeker)";
    if (d.journeyPace >= 65 && d.energyLevel >= 55)
      return "The Checklist Maximalist (The Efficiency-Driven Optimizer)";
    return "The Protege Traditionalist (The Romantic Neophyte)";
  },

  "Bleisure Explorers": (d) => {
    if (d.socialPreference <= 35 && d.energyLevel <= 40) return "The Deep-Work Sovereign (The Asynchronous Executive)";
    if (d.socialPreference >= 65) return "The Corporate Catalyst (The Culture Alchemist)";
    return "The Deal-Closing Celebrationist (The High-Stakes Unwinder)";
  },

  "Social Explorers": (d) => {
    if (d.socialPreference >= 60 && d.authenticityAppetite <= 35)
      return "The Status-Network Curator (The High-Profile Connector)";
    if (d.authenticityAppetite >= 65) return "The Cultural Immersionist (The Deep-Humanity Seeker)";
    return "The Affectionate Host (The Collective Unwinder)";
  },

  "Slow Travelers": (d, a) => {
    if (a.natureConnection === "Conservation Connection") return "The Conservation Guardian (The Purpose-Driven Stakeholder)";
    if (d.recoveryNeed >= 65 && d.natureConnection >= 55) return "The Biophilic Restorer (The Nervous-System Reset)";
    if (d.journeyPace <= 35 && d.authenticityAppetite >= 55) return "The Creative Resident (The Artistic Archivist)";
    return "The Generational Anchor (The Legacy Cultivator)";
  },

  "Solo Explorers": (d, a) => {
    if (
      (a.recoveryState === "Overwhelmed" || a.recoveryState === "Need to disconnect") &&
      d.transformationGoal >= 55
    )
      return "The Radical Rebooter (The Cathartic Pilgrim)";
    if (d.energyLevel >= 60 && d.journeyPace >= 55) return "The Autonomous Hunter (The Sovereignty Collector)";
    if (d.socialPreference <= 25 && d.recoveryNeed >= 55) return "The Solitary Ascetic (The Silence Seeker)";
    return "The Social Catalyst (The Collective Seeker)";
  },

  "Nature Photographers": (d) => {
    if (d.journeyPace >= 65 && d.energyLevel >= 55) return "The Apex Trophy Hunter (The Portfolio Completionist)";
    if (d.journeyPace <= 35 && d.authenticityAppetite >= 55) return "The Fine-Art Ethologist (The Patient Storyteller)";
    return "The Wilderness Minimalist (The Atmospheric Purist)";
  },

  "Luxury Adventurers": (d) => {
    if (d.energyLevel >= 65 && d.journeyPace >= 55) return "The High-Octane Collector (The Adrenaline Purist)";
    if (d.authenticityAppetite >= 65) return "The Anthropological Explorer (The Cultural Participator)";
    return "The Low-Impact Purist (The Off-Grid Minimalist)";
  },

  "Burned-Out Executives": (d, a) => {
    if (a.recoveryState === "Overwhelmed" && d.socialPreference <= 35)
      return "The Incognito Ascetic (The Decision-Fatigued Minimizer)";
    if (d.natureConnection >= 65 && d.transformationGoal >= 55)
      return "The Re-Wilding Visionary (The Creative Re-Booter)";
    return "The Cathartic Challenger (The Kinetic Decompressor)";
  },

  Students: (d) => {
    if (d.socialPreference >= 60 && d.energyLevel >= 55) return "The Bonded Cohort (The High-Energy Collective)";
    if (d.natureConnection >= 65 && d.transformationGoal >= 55)
      return "The Impact Activist (The Purpose-Driven Scholar)";
    return "The Solitary Resetter (The Introverted Academic)";
  },
};

/** Classifies the sub-archetype within the winning primary archetype. */
export function classifySubArchetype(
  primary: TravelerArchetype,
  dimensions: STMDimensionScores,
  answers: OnboardingAnswers
): TravelerSubArchetype {
  return CLASSIFIERS[primary](dimensions, answers);
}

function clamp(n: number): number {
  return Math.min(100, Math.max(0, n));
}

/** Applies the sub-archetype's dimension nudge, clamped to the 0-100 scale. */
export function applySubArchetypeNudge(
  dimensions: STMDimensionScores,
  subArchetype: TravelerSubArchetype
): STMDimensionScores {
  const nudge = NUDGES[subArchetype];
  const nudged = { ...dimensions };
  for (const key of Object.keys(nudge) as (keyof STMDimensionScores)[]) {
    nudged[key] = clamp(nudged[key] + (nudge[key] ?? 0));
  }
  return nudged;
}