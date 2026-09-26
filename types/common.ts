// types/common.ts
// Canonical shared enums used across STM, EDF, SME, JSE, and SRE.
// These are the single source of truth — no layer should define its own
// version of these values.

export const COMFORT_PHILOSOPHIES = [
  "Comfort Luxury",
  "Authentic Luxury",
  "Adventure Luxury",
  "Quiet Luxury",
  "Exclusive Luxury",
] as const;
export type ComfortPhilosophy = (typeof COMFORT_PHILOSOPHIES)[number];

export const BUDGET_TIERS = [
  "Value",
  "Mid-range",
  "Premium",
  "Luxury",
  "Ultra Luxury",
] as const;
export type BudgetTier = (typeof BUDGET_TIERS)[number];

export const TRAVELER_ARCHETYPES = [
  "Families",
  "Honeymooners",
  "First-Time Safari Travelers",
  "Bleisure Explorers",
  "Social Explorers",
  "Slow Travelers",
  "Solo Explorers",
  "Nature Photographers",
  "Luxury Adventurers",
  "Burned-Out Executives",
  "Students",
] as const;
export type TravelerArchetype = (typeof TRAVELER_ARCHETYPES)[number];

// The 38-sub-archetype taxonomy under the 11 canonical primary archetypes.
// LOCKED per SWA-DATA-002 — cannot be extended. Bonded Cohort stays under
// Students only (standing rule, reaffirmed 2026-09-26); do not add it
// elsewhere without an explicit governance change.
export const TRAVELER_SUB_ARCHETYPES = {
  Families: [
    "The Multi-Generational Legacy Family",
    "The Early-Stage Nurturers",
    "The Digital Teen Disconnectors",
    "The Milestone Celebrators",
  ],
  Honeymooners: [
    "The Burnout Decompressors (The Cortisol Crashers)",
    "The Second-Chapter Sophisticates (Mature/Encore Marriages)",
    "The Kinetic Bonders (The Shared-Adrenaline Couple)",
    "The Sanctuary Seekers (The Off-Grid Introverts)",
    "The Narrative Curators (The Aesthetic Storytellers)",
  ],
  "First-Time Safari Travelers": [
    "The Protege Traditionalist (The Romantic Neophyte)",
    "The Checklist Maximalist (The Efficiency-Driven Optimizer)",
    "The Sensory Overwhelmed (The Controlled-Environment Seeker)",
  ],
  "Bleisure Explorers": [
    "The Deep-Work Sovereign (The Asynchronous Executive)",
    "The Deal-Closing Celebrationist (The High-Stakes Unwinder)",
    "The Corporate Catalyst (The Culture Alchemist)",
  ],
  "Social Explorers": [
    "The Status-Network Curator (The High-Profile Connector)",
    "The Cultural Immersionist (The Deep-Humanity Seeker)",
    "The Affectionate Host (The Collective Unwinder)",
  ],
  "Slow Travelers": [
    "The Creative Resident (The Artistic Archivist)",
    "The Conservation Guardian (The Purpose-Driven Stakeholder)",
    "The Biophilic Restorer (The Nervous-System Reset)",
    "The Generational Anchor (The Legacy Cultivator)",
  ],
  "Solo Explorers": [
    "The Solitary Ascetic (The Silence Seeker)",
    "The Autonomous Hunter (The Sovereignty Collector)",
    "The Social Catalyst (The Collective Seeker)",
    "The Radical Rebooter (The Cathartic Pilgrim)",
  ],
  "Nature Photographers": [
    "The Apex Trophy Hunter (The Portfolio Completionist)",
    "The Fine-Art Ethologist (The Patient Storyteller)",
    "The Wilderness Minimalist (The Atmospheric Purist)",
  ],
  "Luxury Adventurers": [
    "The High-Octane Collector (The Adrenaline Purist)",
    "The Anthropological Explorer (The Cultural Participator)",
    "The Low-Impact Purist (The Off-Grid Minimalist)",
  ],
  "Burned-Out Executives": [
    "The Incognito Ascetic (The Decision-Fatigued Minimizer)",
    "The Cathartic Challenger (The Kinetic Decompressor)",
    "The Re-Wilding Visionary (The Creative Re-Booter)",
  ],
  Students: [
    "The Solitary Resetter (The Introverted Academic)",
    "The Impact Activist (The Purpose-Driven Scholar)",
    "The Bonded Cohort (The High-Energy Collective)",
  ],
} as const satisfies Record<TravelerArchetype, readonly string[]>;

export type TravelerSubArchetype =
  (typeof TRAVELER_SUB_ARCHETYPES)[TravelerArchetype][number];

export const EMOTIONAL_TONES = [
  "Peaceful",
  "Inspirational",
  "Wild",
  "Romantic",
  "Elegant",
  "Reflective",
  "Adventurous",
  "Rustic",
  "Social",
  "Grounded",
  "Exploratory",
  "Transformative",
  "Playful",
  "Exclusive",
  "Immersive",
  "Cultural",
] as const;
export type EmotionalTone = (typeof EMOTIONAL_TONES)[number];

export const ENERGY_TYPES = [
  "Wellness",
  "Nature Immersion",
  "Luxury Escape",
  "Wildlife Focus",
  "Adventure",
  "Family Connection",
  "Transit Convenience",
  "High-Energy Safari",
  "Cultural Discovery",
  "Photography",
  "Digital Detox",
] as const;
export type EnergyType = (typeof ENERGY_TYPES)[number];

export const EXPERIENCE_PACES = ["Slow", "Balanced", "Fast"] as const;
export type ExperiencePace = (typeof EXPERIENCE_PACES)[number];

// Post-merge (v1.1): Mid-Journey Peak has been folded into Safari Climax.
export const JOURNEY_ROLES = [
  "Opening Immersion",
  "Adventure Peak",
  "Safari Climax",
  "Mid-Journey Transition",
  "Reflection",
  "Recovery",
  "Grand Finale",
] as const;
export type JourneyRole = (typeof JOURNEY_ROLES)[number];

export const SOCIAL_DYNAMICS = [
  "Private",
  "Balanced",
  "Social",
  "Community-Based",
] as const;
export type SocialDynamic = (typeof SOCIAL_DYNAMICS)[number];

export const TRAVEL_FATIGUE_LEVELS = [
  "Extremely Low",
  "Very Low",
  "Low",
  "Medium",
  "High",
  "Very High",
] as const;
export type TravelFatigue = (typeof TRAVEL_FATIGUE_LEVELS)[number];

export const TRIP_DURATIONS = [
  "3-5 Days",
  "6-8 Days",
  "9-12 Days",
  "13+ Days",
] as const;
export type TripDuration = (typeof TRIP_DURATIONS)[number];