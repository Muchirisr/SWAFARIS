// types/journey.ts
// The canonical frontend contract, produced by the Swafaris Recommendation
// Engine (SRE). Every component in components/journey/ reads from
// JourneyBlueprint and nothing else.
//
// RULE: no field in this file may ever be a raw numeric score. Qualitative
// labels and tiers only — this is where the "never expose scores" product
// rule is enforced structurally.

import type { JourneyRole, TripDuration } from "./common";
import type { CompatibilityTier } from "./sme";
import type { JourneyAct } from "./jse";

/**
 * Journey Compass™ — five qualitative dimensions, each a descriptive label,
 * never a number or percentage.
 */
export interface JourneyCompass {
  adventure: string;          // e.g. "Balanced Exploration"
  journeyPace: string;        // e.g. "Slow Immersion"
  comfortPhilosophy: string;  // e.g. "Quiet Luxury"
  socialEnergy: string;       // e.g. "Private Escape"
  restoration: string;        // e.g. "Deep Renewal"
}

/** One property presented as an Apple-style Experience Card. */
export interface ExperienceCard {
  lodgeId: string;
  name: string;
  region: string;
  journeyRole: JourneyRole;
  tags: string[];               // e.g. ["Cinematic", "Wild", "Adventure Luxury"]
  emotionalDescription: string; // e.g. "Here your journey reaches its defining moment..."
  whySelected: string[];        // e.g. ["Matches your desire for deep nature connection"]
  tier: CompatibilityTier;      // never a numeric score
}

/** One chronological stop in the Journey Timeline (Screen 5). */
export interface JourneyChapter {
  dayRange: string;   // e.g. "Days 6-8"
  title: string;      // e.g. "The Defining Moment"
  region: string;
  purpose: string;    // e.g. "Deliver unforgettable wildlife."
  lodgeId: string;
  highlights: string[];
}

/** One stage of the Five Acts, for the Journey Architecture section. */
export interface JourneyArchitectureStage {
  act: JourneyAct;
  title: string;    // e.g. "Safari Peak"
  purpose: string;  // e.g. "The moment your journey reaches its emotional height."
  lodgeId: string;
}

/** Final closing summary (Section 7 of the Blueprint). */
export interface JourneySummary {
  journeyStyle: string;   // e.g. "Slow Luxury Safari"
  duration: TripDuration;
  regions: string[];
  philosophy: string;     // e.g. "Explore deeply. Rest intentionally. Return transformed."
}

/**
 * The complete, frontend-safe Journey Blueprint. Produced once by lib/sre/
 * and passed down through the Blueprint and Timeline screens.
 */
export interface JourneyBlueprint {
  identityTitle: string;              // e.g. "The Conscious Explorer"
  journeyTheme: string;               // e.g. "From exhaustion to wonder."
  journeyPhilosophy: string;          // narrative paragraph, Section 2
  compass: JourneyCompass;            // Section 3
  whyThisFits: string;                // narrative paragraph, Section 4
  architecture: JourneyArchitectureStage[]; // Section 5
  experienceCards: ExperienceCard[];  // Section 6
  timeline: JourneyChapter[];         // Screen 5
  summary: JourneySummary;            // Section 7
}