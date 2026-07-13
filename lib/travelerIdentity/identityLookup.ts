// lib/travelerIdentity/identityLookup.ts
// Deterministic Identity Title lookup — never AI-generated.

import type { TravelerArchetype } from "@/types/common";

const BASE_TITLES: Record<TravelerArchetype, string> = {
  Families: "The Connected Wanderer",
  Honeymooners: "The Romantic Voyager",
  "First-Time Safari Travelers": "The Awakening Explorer",
  "Bleisure Explorers": "The Balanced Nomad",
  "Social Explorers": "The Kindred Traveler",
  "Slow Travelers": "The Conscious Explorer",
  "Solo Explorers": "The Solitary Wanderer",
  "Nature Photographers": "The Patient Observer",
  "Luxury Adventurers": "The Bold Adventurer",
  "Burned-Out Executives": "The Restored Explorer",
  Students: "The Curious Wayfarer",
};

// Combination overrides refine the title when a specific primary+secondary
// pairing has a stronger, more specific identity than the primary alone.
const COMBO_OVERRIDES: Partial<Record<string, string>> = {
  "Burned-Out Executives|Slow Travelers": "The Restored Explorer",
  "Slow Travelers|Burned-Out Executives": "The Restored Explorer",
  "Honeymooners|Luxury Adventurers": "The Intimate Adventurer",
  "Luxury Adventurers|Nature Photographers": "The Bold Observer",
};

export function resolveIdentityTitle(
  primary: TravelerArchetype,
  secondary: TravelerArchetype
): string {
  const comboKey = `${primary}|${secondary}`;
  return COMBO_OVERRIDES[comboKey] ?? BASE_TITLES[primary];
}