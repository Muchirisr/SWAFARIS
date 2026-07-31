// data/knowledge-base/mara-intrepids.ts
export const maraIntrepids = {
  id: "mara-intrepids", // REUSED — existing lodge, not a new one
  name: "Mara Intrepids Tented Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Talek River Sector / Reserve Core",
  ecosystem: "Savannah, positioned on the banks of the Talek River at the intersection of the reserve's four primary game-viewing zones",
  propertyType: "Classic Heritage Canvas Safari Camp",
  accommodationStyle: "Traditional classic canvas safari tents on elevated wooden platforms with private verandas, shaded by mature riverine forest canopy, overlooking the Talek River or savannah.",
  locationDetail: "Banks of the Talek River, at the central confluence of four major reserve game-viewing sectors.",
  nearestGate: "Sekenani Gate / Talek Gate (inside the Reserve core)",
  nearestAirstrips: ["Ol Kiombo Airstrip"],
  accessibilityNotes: "Flat to gently sloped riverine terrain with well-maintained timber boardwalks and ground-level pathways; easy access across main public areas.",
  priceRangeMinUsd: 450,
  priceRangeMaxUsd: 850,
  rawMarketTier: "Premium", // as stated in source doc
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium", // OVERRIDES existing DB value "Luxury" per price-guide midpoint rule
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Sawela Lodges or Lake Elmenteita Serena Camp (Rift Valley ecosystem pairing)",
    "Tamarind Tree Hotel, Nairobi (city-to-bush transit pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Cinematic", "Social", "Wild"], // all approved, no change needed
    energyType: ["Adventure", "Wildlife Focus"], // normalized from "High-Energy Safari" / "Immersive Nature"
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Comfort Luxury", "Authentic Luxury"], // KEPT unchanged, both values retained per founder decision
    comfortPhilosophyDetailed: "Classic Safari Elegance", // bridges toward Authentic Luxury component, given heritage/decades framing
    journeyRole: "Safari Climax", // KEPT unchanged — pipeline-facing, single value; multi-role nuance captured in prose only for now
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Nature Photographers"], // expanded per founder decision
    idealTravelersSecondary: [],
    intensityScore: 8, relaxationScore: 7, authenticityScore: 8, premiumScore: 8,
    adventureScore: 8, privacyScore: 6, wildlifeExperienceScore: 10,
    culturalImmersionScore: 8, familySuitabilityScore: 10, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "45 min bush flight Wilson→Ol Kiombo + 15 min game drive transfer; 5.5–6.5 hours overland from Nairobi (~270 km).",
    seasonalAccessibility: "Open year-round; Great Migration season (July–October) offers optimal proximity to Talek River crossing points.",
    rainySeasonImpact: "REQUIRES_VERIFICATION — not specified in source.",
    electricitySystem: "Generator and solar power backup providing 24/7 power for lighting and in-tent charging stations.",
    powerReliability: "Continuous, 24/7 per source.",
    waterReliability: "En-suite bathrooms equipped with reliable solar and boiler-heated hot water showers.",
    internetAvailability: "Wi-Fi in public lounge, bar, and reception areas; does not extend into individual tents.",
    mobileNetwork: "Safaricom cellular coverage accessible across the property.",
    medicalAccess: "On-site first-aid trained staff; Flying Doctors (AMREF) evacuation via Ol Kiombo Airstrip.",
    childFriendly: true, // "Very High" per source — Adventurers' Club
    mobilityFriendly: true, // High per source
    operationalLimitations: [
      "Wi-Fi limited to main guest lounges, does not extend into individual tents",
      "Open-air dining decks can feel cold during evening hours",
      "Unheated outdoor swimming pool",
      "Extra charges apply for beverages",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Outstanding Adventurers' Club programming engages children in Maasai culture and nature studies; central, secure location minimizes long transit times.",
      supportingSignals: ["Adventurers' Club programming", "Central secure location"],
      mismatchConditions: ["Unheated pool water may feel cool during chilly weather"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\"); mapped to closest valid match, consistent with the same substitution used for Enkorok Mara Camp — unbeatable core reserve location delivers maximum wildlife sightings per game drive, eliminating gate queues and transit friction.",
      supportingSignals: ["Core reserve location", "No gate queues or transit friction"],
      mismatchConditions: ["Extra fees for non-inclusive drinks", "Limited in-tent Wi-Fi connectivity"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Unscripted Culturist\"); mapped per founder confirmation — front-row positioning along the Talek River and experienced naturalist guides provide exceptional big cat and migration photography opportunities, framed around patient, guided observation rather than trophy-yield pursuit.",
      supportingSignals: ["Front-row Talek River positioning", "Experienced naturalist guides"],
      mismatchConditions: ["Classic heritage camp rather than a private conservancy with off-road driving privileges"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "30-tent size, social dining environment, and lack of private in-tent Wi-Fi conflict with requirements for absolute seclusion and digital connectivity.",
      supportingSignals: [], mismatchConditions: ["Guest feels camp is too social and lacks private, contemporary digital amenities"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Does not offer private plunge pools, butler-serviced suites, or total architectural isolation found in high-tier private conservancy camps.",
      supportingSignals: [], mismatchConditions: ["Expectation mismatch regarding material luxury and exclusivity"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source frames this as a triple 'Mid-Journey Peak / Opening Immersion / Safari Climax'; canonical journeyRole kept as Safari Climax (unchanged, matches existing DB value) as the single pipeline-facing value. Founder has flagged that this lodge genuinely can serve multiple journey roles depending on itinerary — worth revisiting as a structured multi-role field in a future schema pass, but captured here as descriptive framing only for now.",
    whatShouldComeBefore: "A softer, scenic introductory segment (e.g., Lake Naivasha, Lake Elmenteita, or Amboseli) to build excitement before hitting the Mara core.",
    whatShouldComeAfter: "Direct air transfer from Ol Kiombo Airstrip to a coastal beach property (e.g., Diani or Watamu) for post-safari relaxation.",
    emotionalTransitionRationale: "Shifts travelers from scenic transit into intense, high-density wildlife exploration and rewarding evening campfire camaraderie.",
  },

  narrative: {
    whyChosen: "Mara Intrepids is the reference example for central-position heritage luxury: positioned at the literal confluence of four reserve sectors, it delivers the highest Wildlife Experience Score in the database (10/10) alongside decades of proven family-safari operations.",
    bestUsedFor: "Families with children, first-time safari travelers, and wildlife photographers who prioritize prime game-viewing geography, expert guiding, and structured family programming inside the reserve.",
    lessSuitableFor: "UHNW travelers seeking ultra-exclusive private conservancy isolation, private plunge pools, or seamless in-tent Wi-Fi connectivity.",
    journeyPositionNote: "Safari Climax, though the property is versatile enough to also function as an Opening Immersion or Mid-Journey Peak depending on itinerary design — flagged for future structured support.",
    overview: "Mara Intrepids Tented Camp is a classic heritage safari camp on the banks of the Talek River at the central confluence of four major game-viewing sectors inside the Maasai Mara National Reserve, offering 30 elevated canvas tents with prime access to big cat territories and Great Migration river crossings.",
    emotionalFeel: "Grounded, adventurous, and celebratory — energetic pre-dawn safari preparations give way to relaxed midday lounging, concluding with social campfire gatherings under the stars.",
    sensorySignature: {
      visual: ["Shaded green canvas tents beneath ancient river trees", "Open views across the Talek River where hippo pods gather"],
      auditory: ["Deep coughing grunts of hippos in the riverbed at night", "Morning birdsong echoing through the canopy"],
      olfactory: ["Fresh woodsmoke from the campfire", "Damp riverbank earth", "Morning coffee"],
    },
    positiveSignals: [
      "Central location along the Talek River minimizes transit time to primary wildlife hotspots",
      "Highly praised naturalist guide team known for expert tracking abilities",
      "Industry-leading 'Adventurers' Club' provides engaging cultural and wilderness edutainment for children",
      "Close proximity to hippos and river wildlife enriches the authentic safari experience",
    ],
    negativeSignals: [
      "Open-air dining terraces can feel drafty at night",
      "Wi-Fi localized to public lounges, does not reach individual tents",
      "Drinks outside basic allocations billed separately",
      "Swimming pool can feel cold during overcast or cooler months",
    ],
    hiddenGems: [
      "An elevated watchtower deck offers an overlooked vantage point for private evening sundowners or twilight predator-watching along the Talek riverbank.",
    ],
    signatureMemory: "Listening to the reverberating grunts of hippos in the Talek River from your private deck as the morning sun breaks over the forest canopy.",
    expectationManagement: "Mara Intrepids offers comfortable heritage luxury inside the reserve core, but Wi-Fi is confined to central lounges, beverages are billed separately, and evening dining areas can get chilly.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "Booking families with children, first-time safari travelers, or wildlife photographers who prioritize prime game-viewing geography and structured family programming inside the reserve.",
    ],
    doNotRecommendConditions: [
      "UHNW traveler seeking ultra-exclusive private conservancy isolation",
      "Guests requiring private plunge pools",
      "Guests requiring seamless in-tent Wi-Fi connectivity",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Premier central position inside the Maasai Mara Reserve combined with Heritage Hotels' proven operational consistency and kids' club programming.",
    mainLimitation: "Lack of in-tent Wi-Fi and extra charges for beverages.",
    positioningSummary: "A legendary classic tented safari camp positioned at the absolute center of the Maasai Mara's wildlife action, combining a thrilling river soundscape with world-class guiding and family programming.",
  },

  pairings: [
    { pairedEntity: "Sawela Lodges or Lake Elmenteita Serena Camp", pairingCategory: "ecosystem", rationale: "Balances serene Rift Valley lake landscapes with high-intensity Mara predator drives." },
    { pairedEntity: "Tamarind Tree Hotel, Nairobi", pairingCategory: "regional", rationale: "Seamless city-to-bush transit, followed by a beach stay in Diani or Watamu." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator documentation", "Field site audits", "Regional airstrip guides", "Guest feedback records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "rainySeasonImpact — not specified in source",
      "comfortPhilosophyDetailed — 'Classic Safari Elegance' is inferred, not explicit in source; confirm or correct",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
      "journeyRole multi-value support — flagged as a future schema conversation, not resolved here",
    ],
  },
};