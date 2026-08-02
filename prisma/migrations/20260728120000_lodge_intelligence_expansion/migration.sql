-- Lodge: new additive columns
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "country" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "subRegion" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "propertyType" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "accommodationStyle" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "locationDetail" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "nearestGate" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "nearestAirstrips" TEXT[] DEFAULT '{}';
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "accessibilityNotes" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "priceRangeMinUsd" INTEGER;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "priceRangeMaxUsd" INTEGER;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "raw_market_tier" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "swafaris_experience_tier" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "experience_identity" TEXT;
ALTER TABLE "lodges" ADD COLUMN IF NOT EXISTS "rawSourceJson" JSONB;

-- LodgeExperienceDna: new additive columns
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "comfort_philosophy_detailed" TEXT;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "adventureScore" INTEGER;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "privacyScore" INTEGER;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "wildlifeExperienceScore" INTEGER;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "culturalImmersionScore" INTEGER;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "familySuitabilityScore" INTEGER;
ALTER TABLE "lodge_experience_dna" ADD COLUMN IF NOT EXISTS "comfortScore" INTEGER;

-- LodgeNarrative: new additive columns
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "overview" TEXT;
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "emotionalFeel" TEXT;
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "sensorySignature" JSONB;
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "positiveSignals" TEXT[] DEFAULT '{}';
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "negativeSignals" TEXT[] DEFAULT '{}';
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "hiddenGems" TEXT[] DEFAULT '{}';
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "signatureMemory" TEXT;
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "expectationManagement" TEXT;
ALTER TABLE "lodge_narrative" ADD COLUMN IF NOT EXISTS "idealNights" TEXT;

-- New table: lodge_operational_intelligence
CREATE TABLE IF NOT EXISTS "lodge_operational_intelligence" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL UNIQUE REFERENCES "lodges"("id") ON DELETE CASCADE,
  "accessibilityScore" INTEGER,
  "transferTime" TEXT,
  "seasonalAccessibility" TEXT,
  "rainySeasonImpact" TEXT,
  "electricitySystem" TEXT,
  "powerReliability" TEXT,
  "waterReliability" TEXT,
  "internetAvailability" TEXT,
  "mobileNetwork" TEXT,
  "medicalAccess" TEXT,
  "childFriendly" BOOLEAN,
  "mobilityFriendly" BOOLEAN,
  "operationalLimitations" TEXT[] DEFAULT '{}'
);

-- New table: lodge_traveler_matches
CREATE TABLE IF NOT EXISTS "lodge_traveler_matches" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL REFERENCES "lodges"("id") ON DELETE CASCADE,
  "fitType" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "archetype" TEXT,
  "matchStrength" TEXT,
  "reasoning" TEXT NOT NULL,
  "supportingSignals" TEXT[] DEFAULT '{}',
  "mismatchConditions" TEXT[] DEFAULT '{}'
);

-- New table: lodge_journey_intelligence
CREATE TABLE IF NOT EXISTS "lodge_journey_intelligence" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL UNIQUE REFERENCES "lodges"("id") ON DELETE CASCADE,
  "idealStayDuration" TEXT,
  "recommendedPositionNote" TEXT,
  "whatShouldComeBefore" TEXT,
  "whatShouldComeAfter" TEXT,
  "emotionalTransitionRationale" TEXT
);

-- New table: lodge_recommendation_notes
CREATE TABLE IF NOT EXISTS "lodge_recommendation_notes" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL UNIQUE REFERENCES "lodges"("id") ON DELETE CASCADE,
  "recommend_conditions" TEXT[] NOT NULL,
  "do_not_recommend_conditions" TEXT[] NOT NULL,
  "confidence_level" TEXT NOT NULL,
  "competitiveAdvantage" TEXT,
  "mainLimitation" TEXT,
  "positioningSummary" TEXT
);

-- New table: lodge_pairings
CREATE TABLE IF NOT EXISTS "lodge_pairings" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL REFERENCES "lodges"("id") ON DELETE CASCADE,
  "paired_entity" TEXT NOT NULL,
  "pairingCategory" TEXT NOT NULL,
  "pairingType" TEXT,
  "rationale" TEXT NOT NULL
);

-- New table: lodge_data_quality
CREATE TABLE IF NOT EXISTS "lodge_data_quality" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "lodge_id" TEXT NOT NULL UNIQUE REFERENCES "lodges"("id") ON DELETE CASCADE,
  "researchDate" TIMESTAMP(3),
  "sourcesConsulted" TEXT[] DEFAULT '{}',
  "confidenceLevel" TEXT,
  "verificationRequirements" TEXT[] DEFAULT '{}'
);