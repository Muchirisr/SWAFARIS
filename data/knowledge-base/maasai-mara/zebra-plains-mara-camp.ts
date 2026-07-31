// data/knowledge-base/zebra-plains-mara-camp.ts
export const zebraPlainsMaraCampEnrichment = {
  id: "zebra-plains-mara-camp", // REUSED — existing lodge, not a new one
  name: "Zebra Plains Mara Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Talek / Olare Orok Border",
  ecosystem: "Savannah / Protected Migration Corridor below Oldonyo Oloip Ridge",
  propertyType: "Action-Oriented Tented Resort / High-Energy Safari Camp",
  accommodationStyle: "Premium heavy-canvas tents on permanent stone foundations with hardwood floors, tiled en-suite bathrooms, and broad shade-covered verandas.",
  locationDetail: "Located directly beneath Oldonyo Oloip Ridge near the Talek sector, overlooking an active waterhole.",
  nearestGate: "Talek Gate (approx. 10 km / 15-minute drive)",
  nearestAirstrips: ["Ol Kiombo Airstrip"],
  accessibilityNotes: "Stone foundations with wide dirt pathways; significant distances between peripheral tents and central hubs; steep inclines to Hillside Tents require good mobility.",
  priceRangeMinUsd: 400,
  priceRangeMaxUsd: 850,
  rawMarketTier: "Premium",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium", // OVERRIDES stale DB value "Mid-range"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Zebra River Camp (sister property, Talek River)",
    "Borana Lodge or Lengishu (Laikipia walking sanctuary pairing)",
    "Alama Camp Mara (secluded finish pairing)",
  ],
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Social", "Wild"],
    energyType: ["Adventure", "Wildlife Focus"],
    experiencePace: "Fast",
    comfortPhilosophy: ["Adventure Luxury"], // OVERRIDES stale DB value "Authentic Luxury"
    comfortPhilosophyDetailed: "REQUIRES_VERIFICATION", // 7-value bridge table not yet available
    journeyRole: "Adventure Peak",
    idealTravelersPrimary: ["First-Time Safari Travelers", "Nature Photographers", "Families"], // CONFIRMED expansion
    idealTravelersSecondary: ["Social Explorers"],
    intensityScore: 8, relaxationScore: 5, authenticityScore: 8, premiumScore: 7,
    adventureScore: 9, privacyScore: 4, wildlifeExperienceScore: 9,
    culturalImmersionScore: 7, familySuitabilityScore: 8, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "High",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5.5–6 hours overland from Nairobi (~280 km); 25–45 min flight Wilson→Ol Kiombo + 25 min transfer drive.",
    seasonalAccessibility: "Open year-round; 100% capacity during peak Great Migration (July–October), high social density in dining/lounge hubs.",
    rainySeasonImpact: "REQUIRES_VERIFICATION",
    electricitySystem: "220V continuous generator-backed electricity with dedicated charging points in central lounges.",
    powerReliability: "Occasional drops in outer tent perimeters during off-peak hours.",
    waterReliability: "Continuous piped hot water system supplying tiled en-suite bathrooms.",
    internetAvailability: "Complimentary Wi-Fi centered on five public lounges and pool area; degrades at outer tent perimeter.",
    mobileNetwork: "Reliable Safaricom cellular coverage across camp grounds.",
    medicalAccess: "First aid on site; emergency evacuation via Flying Doctors (AMREF) through Ol Kiombo Airstrip.",
    childFriendly: true,
    mobilityFriendly: false,
    operationalLimitations: [
      "High-density social footprint at full capacity (up to 100 guests)",
      "Significant quality/view disparity between Savannah-facing and Hillside-facing tents",
      "Outer tents require long walks to central dining areas",
      "Wi-Fi and power reliability drop toward outer tent boundaries",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Nature Photographers", archetype: "Apex Trophy Hunter", matchStrength: "Strong",
      reasoning: "Photographer-focused guiding, custom vehicle setups, and direct dual-direction access into high-density predator zones deliver high wildlife yields.",
      supportingSignals: ["Photographer-grade guiding team", "Custom vehicle positioning for optimal light"],
      mismatchConditions: ["Hillside tents require steep walks and lack direct waterhole views"] },
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Interconnected multi-room Family Villas, central swimming pool, twin campfire lounges, and high-energy atmosphere keep group morale high.",
      supportingSignals: ["Multi-room Family Villas", "Central swimming pool"],
      mismatchConditions: ["High guest capacity during peak migration season can feel busy in dining areas"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Seeking silent dining, private plunge pools, and secluded isolation, which conflicts with the camp's 46-tent footprint and social campfire environment.",
      supportingSignals: [], mismatchConditions: ["Expectation mismatch regarding social noise and communal spaces"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Expects hyper-manicured quiet, private vehicles as standard, and consistent high-speed Wi-Fi; camp operates as a lively, high-activity tracking hub.",
      supportingSignals: [], mismatchConditions: ["Frustration with perimeter Wi-Fi drops and central hub activity"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion / Mid-Journey Peak'; canonical Journey Role resolved to Adventure Peak per SWA-DATA-002 vocabulary and property profile (max exploration intensity, high energy, precedes restorative phase).",
    whatShouldComeBefore: "A quiet, slow-paced Rift Valley lake property (e.g., Lake Naivasha Sopa Resort) or traditional safari starting point to build anticipation.",
    whatShouldComeAfter: "A low-density, secluded boutique sanctuary (e.g., Alama Camp Mara) or coastal decompression stay (Diani) to unwind after intense game drives.",
    emotionalTransitionRationale: "Immediately immerses travelers in action-packed wildlife tracking before transitioning into restorative relaxation.",
  },

  narrative: {
    whyChosen: "Zebra Plains is the reference example for what an Adventure Peak should deliver at an accessible price point: dual-direction launchpad access into high-density predator territory near Talek and Olare Orok, paired with photographer-grade guiding that produces consistently high wildlife yields. It's the chapter built to front-load excitement early in a journey.",
    bestUsedFor: "Photographers, first-time safari travelers, social groups, and active families seeking high predator exposure and expert guiding — provided the itinerary explicitly requests Savannah-facing rooms.",
    lessSuitableFor: "Honeymooners seeking silent seclusion, introverted travelers, guests with mobility restrictions, or clients expecting ultra-exclusive private conservancy rules.",
    journeyPositionNote: "Adventure Peak, positioned early-to-mid journey. Should be followed by a lower-density, restorative property to resolve the high travel fatigue this stage produces.",
    overview: "Zebra Plains Mara Camp is a dynamic, action-oriented 46-tent safari resort located directly beneath Oldonyo Oloip Ridge near the Talek sector, combining stone-anchored canvas suites with resort amenities including five social lounges, a pool, and twin campfires.",
    emotionalFeel: "High-energy, social, and immersive — an active tracking base where guests share wildlife sightings over evening campfires.",
    sensorySignature: {
      visual: ["Elephants and zebras at the front waterhole", "Oldonyo Oloip Ridge backdrop"],
      auditory: ["Nocturnal lion calls from the Moniko pride", "Night crackle of twin firepits", "Lively dinner conversation"],
      olfactory: ["Dry acacia breeze", "Woodsmoke from evening bonfires", "Fresh morning earth"],
    },
    positiveSignals: [
      "Photographer-grade guiding team skilled in optimal vehicle positioning",
      "Active waterhole proximity with continuous wildlife arrivals",
      "Strategic dual launchpad near Talek for smooth transit into multiple Mara sectors",
      "Warm, collaborative social atmosphere",
    ],
    negativeSignals: [
      "Hillside-facing tents require steep uphill walks and lack direct views",
      "Large 46-tent footprint means long walks for peripheral tents",
      "Peak season social density in public lounges/dining",
      "Wi-Fi/power reliability drops toward outer tent boundaries",
    ],
    hiddenGems: [
      "High-caliber photographic guiding and strategic access to the Oldonyo Oloip migration corridor at a competitive mid-range luxury price point.",
    ],
    signatureMemory: "Returning from a long game drive to sit by the twin campfires under the stars, listening to lion calls echo off the ridge while sharing stories with fellow travelers.",
    expectationManagement: "Guests should explicitly request Savannah-facing tents to avoid steep walks and limited views of the Hillside category. Travelers seeking quiet, isolated dining should note the camp's 46-tent footprint and social environment.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "Booking photographers, first-time safari goers, social groups, or active families seeking high predator exposure and expert guiding.",
      "Guest is willing to explicitly request Savannah-facing rooms.",
    ],
    doNotRecommendConditions: [
      "Booking honeymooners seeking silent seclusion",
      "Introverted travelers or guests with mobility restrictions",
      "Clients expecting ultra-exclusive private conservancy rules",
    ],
    confidenceLevel: "High", // conditional on Savannah-facing room enforcement per source
    competitiveAdvantage: "Excellent guiding quality, photogenic waterhole location, and dual-direction park access at an accessible price.",
    mainLimitation: "Large 46-tent layout with steep walks and view limitations in Hillside tents.",
    positioningSummary: "A high-energy, photogenic classic safari camp positioned in a critical predator corridor, offering premier wildlife tracking and a vibrant social atmosphere for adventure-focused travelers.",
  },

  pairings: [
    { pairedEntity: "Borana Lodge or Lengishu (Laikipia)", pairingCategory: "ecosystem", rationale: "Balances fast-paced predator tracking with peaceful walking-sanctuary landscapes." },
    { pairedEntity: "Zebra River Camp (sister property, Talek River)", pairingCategory: "regional", rationale: "Smooth upgrade into a quieter, private riverine setting." },
    { pairedEntity: "Alama Camp Mara", pairingCategory: "experience", rationale: "Secluded finish after Zebra Plains' Adventure Peak phase." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property field audits", "Room classification guides", "Mapping records", "Guest log evaluations"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "rainySeasonImpact — not specified in source",
      "comfortPhilosophyDetailed — 7-value bridge table not yet available",
      "Paired lodge entities (Zebra River Camp, Borana Lodge, Alama Camp Mara) — names only, not reconciled against existing lodge IDs",
    ],
  },
};