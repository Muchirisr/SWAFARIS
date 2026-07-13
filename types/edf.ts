// types/edf.ts
// Types for the Experience DNA Framework (EDF).
// EDF answers: "What emotional and practical experience does this property provide?"

import type {
  BudgetTier,
  ComfortPhilosophy,
  EmotionalTone,
  EnergyType,
  ExperiencePace,
  JourneyRole,
  SocialDynamic,
  TravelerArchetype,
  TravelFatigue,
} from "./common";

/**
 * The 12 EDF scoring dimensions for a single property.
 * Numeric scores here are internal matching inputs for lib/sme/ —
 * never rendered directly to the traveler.
 */
export interface ExperienceDNA {
  emotionalTone: EmotionalTone[];
  energyType: EnergyType[];
  experiencePace: ExperiencePace;
  comfortPhilosophy: ComfortPhilosophy[]; // some properties carry two tags
  journeyRole: JourneyRole;
  idealTravelers: {
    primary: TravelerArchetype[];
    secondary: TravelerArchetype[];
  };
  intensityScore: number;    // 1–10
  relaxationScore: number;   // 1–10
  authenticityScore: number; // 1–10
  premiumScore: number;      // 1–10
  socialDynamic: SocialDynamic;
  travelFatigue: TravelFatigue;
}

/**
 * A complete property profile — identity + EDF + editorial content.
 * This is the shape every object in data/lodges/ must satisfy.
 */
export interface Lodge {
  id: string;              // stable slug, e.g. "entim-mara-camp"
  name: string;
  region: string;
  ecosystem: string;
  budgetTier: BudgetTier;
  experienceDNA: ExperienceDNA;
  whyChosen: string;
  bestUsedFor: string;
  lessSuitableFor: string;
  pairsWellWith: string[];       // array of other Lodge ids
  journeyPositionNote: string;
}