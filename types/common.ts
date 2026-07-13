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

export const EMOTIONAL_TONES = [
  "Peaceful",
  "Cinematic",
  "Wild",
  "Romantic",
  "Elegant",
  "Intimate",
  "Adventurous",
  "Rustic",
  "Social",
  "Grounded",
  "Exploratory",
  "Transformative",
] as const;
export type EmotionalTone = (typeof EMOTIONAL_TONES)[number];

export const ENERGY_TYPES = [
  "Restorative",
  "Nature Immersion",
  "High-Energy Safari",
  "Quiet Luxury",
  "Cultural Immersion",
  "Coastal Escape",
] as const;
export type EnergyType = (typeof ENERGY_TYPES)[number];

export const EXPERIENCE_PACES = ["Slow", "Balanced", "Fast"] as const;
export type ExperiencePace = (typeof EXPERIENCE_PACES)[number];

// Post-merge (v1.1): Mid-Journey Peak has been folded into Safari Climax.
export const JOURNEY_ROLES = [
  "Opening Immersion",
  "Adventure Transition",
  "Safari Climax",
  "Recovery Reset",
  "Romantic Finale",
  "Coastal Decompression",
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