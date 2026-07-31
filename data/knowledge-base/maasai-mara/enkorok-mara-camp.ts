// data/knowledge-base/enkorok-mara-camp.ts
export const enkorokMaraCamp = {
  id: "enkorok-mara-camp", // NEW lodge, no existing DB record
  name: "Enkorok Mara Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Siana Borderlands / Oloolaimutia Sector",
  ecosystem: "Savannah / Riverine Woodland along the Oloirignyisho River",
  propertyType: "Mid-Tier Eco-Tented Safari Camp",
  accommodationStyle: "Classic eco-canvas safari tents on heavy mahogany wooden decks under thatched roofing, with open-air sky-showers and private verandas.",
  locationDetail: "30-acre private site along the Oloirignyisho River, 2.5 km from the Maasai Mara's Oloolaimutia Gate.",
  nearestGate: "Oloolaimutia Gate (approx. 2.5 km / 6-minute drive)",
  nearestAirstrips: ["Keekorok Airstrip"],
  accessibilityNotes: "Ground-level mahogany platforms and level dirt pathways offer easy walking access; slight incline near the riverbank.",
  priceRangeMinUsd: 250,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Mid-Tier", // as stated in source doc
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-range", // normalized spelling; price midpoint and stated tier agree
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Lake Naivasha Sopa Resort or Lake Nakuru Lodge (Rift Valley overland circuit)",
    "Mara North or Olare Motorogi private conservancy (progression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Peaceful", "Rustic"], // all approved, no change needed
    energyType: ["Nature Immersion", "Wellness"], // confirmed normalization
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Authentic Luxury"], // confirmed
    comfortPhilosophyDetailed: "Authentic Wilderness Simplicity", // my lean given eco/rustic framing — flag if incorrect
    journeyRole: "Opening Immersion", // resolved from doc's dual "Adventure Transition / Opening Immersion"
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 7, authenticityScore: 7, premiumScore: 6,
    adventureScore: 7, privacyScore: 6, wildlifeExperienceScore: 8,
    culturalImmersionScore: 6, familySuitabilityScore: 9, comfortScore: 7,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5–6 hours overland from Nairobi (~265 km); 45 min flight Wilson→Keekorok + 35 min transfer drive.",
    seasonalAccessibility: "Open year-round; rainy season (April–May) can soften dirt approach tracks, requiring experienced drivers.",
    rainySeasonImpact: "Softened dirt approach tracks during April–May rains.",
    electricitySystem: "Hybrid solar power supported by generator during peak morning/evening hours.",
    powerReliability: "Continuous tent lighting and charging stations.",
    waterReliability: "Localized instant gas-water heaters supplying high-pressure hot water directly to en-suite sky-showers.",
    internetAvailability: "Wi-Fi around main restaurant, lounge, and pool deck; degrades toward outer tent lines.",
    mobileNetwork: "Safaricom mobile signal accessible across camp.",
    medicalAccess: "First aid on site; local health centers nearby in Oloolaimutia/Sekenani; Flying Doctors (AMREF) via Keekorok Airstrip.",
    childFriendly: true,
    mobilityFriendly: true, // High per source — flat pathways, minimal stair obstacles
    operationalLimitations: [
      "In-tent Wi-Fi drops away from central public areas",
      "Proximity to community buffer zone means pastoral livestock occasionally visible on surrounding hills",
      "Soft canvas bathroom entryways offer only basic visual/acoustic privacy",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Central swimming pool, flat walkable terrain, spacious mahogany deck tents, and welcoming staff.",
      supportingSignals: ["Central swimming pool", "Flat walkable terrain"],
      mismatchConditions: ["In-tent Wi-Fi connectivity limited outside the main lounge area"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\"); mapped to closest valid match — delivers an authentic canvas tented safari with premium touches at a mid-tier price point, paired with 6-minute gate access.",
      supportingSignals: ["Sky-showers", "6-minute access to Oloolaimutia Gate"],
      mismatchConditions: ["Located on a conservancy border near local pastoral settlements rather than deep reserve isolation"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Wilderness Minimalist / Deep-Bush Purists\"); mapped directly per founder confirmation — presence of a central pool, cocktail bar, and occasional views of community livestock conflicts with expectations for raw, deep-interior bush isolation.",
      supportingSignals: [], mismatchConditions: ["Dissatisfaction regarding proximity to human settlement buffer zones"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Moderate",
      reasoning: "Lacks private plunge pools, fine-dining menus, or butler service found in high-tier private conservancies.",
      supportingSignals: [], mismatchConditions: ["Expectation mismatch if expecting ultra-exclusive glamping luxuries"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source frames this as dual 'Adventure Transition / Opening Immersion'; canonical Journey Role resolved to Opening Immersion per founder decision.",
    whatShouldComeBefore: "An introductory Great Rift Valley stopover (e.g., Lake Naivasha Sopa Lodge or Lake Nakuru) to break up the drive from Nairobi.",
    whatShouldComeAfter: "Transition into a high-tier private conservancy camp (e.g., Mara North or Olare Motorogi) or fly to a coastal decompression resort (e.g., Diani or Watamu).",
    emotionalTransitionRationale: "Captures initial enthusiasm for a canvas safari before moving into deeper wilderness isolation or beach relaxation.",
  },

  narrative: {
    whyChosen: "Enkorok Mara Camp is the reference example for high-value Opening Immersion: authentic canvas tented lodging with real premium touches (sky-showers, mahogany decks) at a genuinely mid-tier price, 6 minutes from the gate.",
    bestUsedFor: "Mid-tier budget travelers, families, or groups seeking an authentic canvas experience with a pool and quick gate access, especially as a journey's opening stage.",
    lessSuitableFor: "Ultra-luxury travelers, honeymooners seeking complete isolation, or clients expecting high-speed Wi-Fi across all tents.",
    journeyPositionNote: "Opening Immersion — ideally the first safari stage before transitioning into a higher-tier private conservancy or coastal decompression.",
    overview: "Enkorok Mara Camp sits on a 30-acre private site along the Oloirignyisho River in the Siana borderlands, 2.5 km from the Maasai Mara's Oloolaimutia Gate — 22 canvas tents on mahogany platforms blending classic eco-tented style with a swimming pool and open-air sky-showers.",
    emotionalFeel: "Relaxing, grounded, and exploratory — early morning game drives transition into calm afternoons by the pool or riverbank.",
    sensorySignature: {
      visual: ["Shaded mahogany verandas overlooking green foliage", "Sunlit outdoor sky-showers against canvas walls"],
      auditory: ["Gentle flow of the Oloirignyisho River", "Rustling tree canopy", "Morning birdsong"],
      olfactory: ["Fresh riverine forest air mixed with dry savannah warmth", "Wood-decking aromas"],
    },
    positiveSignals: [
      "Popular outdoor sky-showers providing a refreshing open-air bathing experience",
      "Exceptional mid-tier value combining quality canvas architecture and mahogany decks",
      "6-minute drive to Oloolaimutia Gate enables fast access to reserve game loops at dawn",
      "Warm family hospitality with attentive service for children and groups",
    ],
    negativeSignals: [
      "Nearby hillsides show signs of local pastoral life, may not suit travelers seeking complete wilderness isolation",
      "Wi-Fi centered around restaurant/pool deck, weakening at outer tents",
      "Soft canvas bathroom entryways offer only basic visual/acoustic privacy",
    ],
    hiddenGems: [
      "Localized gas water heating preserves the surrounding woodland canopy, creating a cool micro-climate that shelters guests from midday heat.",
    ],
    signatureMemory: "Showering under the open blue sky in your private en-suite bathroom after an early morning game drive in the Mara.",
    expectationManagement: "Enkorok sits on a riverine wildlife corridor near the park boundary — fast gate access and authentic canvas lodging, but adjacent to community lands rather than deep inside a private reserve core.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Booking mid-tier budget travelers, families, or groups seeking an authentic canvas experience with a pool and quick gate access.",
    ],
    doNotRecommendConditions: [
      "Booking ultra-luxury travelers",
      "Honeymooners seeking complete isolation",
      "Clients expecting high-speed Wi-Fi across all tents",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Excellent price-to-quality ratio combining mahogany-decked canvas tents, sky-showers, a swimming pool, and rapid access to Oloolaimutia Gate.",
    mainLimitation: "Located on a borderland buffer zone with Wi-Fi restricted mainly to public areas.",
    positioningSummary: "A charming, eco-conscious riverbank tented camp blending traditional canvas aesthetics with a relaxing pool and outdoor sky-showers, offering excellent value and rapid gate access to the Maasai Mara.",
  },

  pairings: [
    { pairedEntity: "Lake Naivasha Sopa Resort or Lake Nakuru Lodge", pairingCategory: "ecosystem", rationale: "Builds a classic overland circuit through the Great Rift Valley." },
    { pairedEntity: "Mara North or a Laikipia private conservancy lodge", pairingCategory: "regional", rationale: "Progression from high-value gate access to crowd-free wilderness." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field audits", "Property specifications", "Mapping records", "Guest log evaluations"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "comfortPhilosophyDetailed — 'Authentic Wilderness Simplicity' is my inference, not explicit in source; confirm or correct",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};