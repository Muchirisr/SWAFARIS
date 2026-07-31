// data/knowledge-base/alama-camp-mara.ts
export const alamaCampMara = {
  id: "alama-camp-mara", // NEW lodge, no existing DB record
  name: "Alama Camp Mara",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Oloolaimutia Sector / Southeastern Border",
  ecosystem: "Savannah / Riverine Brook Bordering the Southeastern Game Reserve",
  propertyType: "Contemporary Luxury Eco-Sanctuary / Boutique Tented Camp",
  accommodationStyle: "Permanent canvas structures anchored by locally sourced sedimentary stone walls, with spacious timber viewing decks and private standalone hot tubs/jacuzzis.",
  locationDetail: "Situated on the bank of a winding stream brook just outside the Oloolaimutia sector.",
  nearestGate: "Oloolaimutia Gate (approx. 10 minutes drive)",
  nearestAirstrips: ["Keekorok Airstrip"],
  accessibilityNotes: "Natural stream-bank terrain with sloped pathways; minor inclines and unpaved drops along the river brook require careful footing at dusk.",
  priceRangeMinUsd: 350,
  priceRangeMaxUsd: 600,
  rawMarketTier: "Premium", // as stated in source doc, overridden below per price-guide rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // price-guide midpoint (~$475) governs, not doc's stated "Premium"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Zebra Plains Mara Camp (opening predator-tracking leg before this Romantic Finale)",
    "Samburu Sopa Lodge or a Laikipia walking outpost (contrast pairing)",
  ], // NOT reconciled against real lodge IDs yet — Zebra Plains is now live (lodge #4), so this pairing can likely be resolved to a real ID on a follow-up pass
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Romantic", "Peaceful"],
    energyType: ["Luxury Escape", "Wellness"],
    experiencePace: "Slow",
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed
    comfortPhilosophyDetailed: "Contemporary Comfort",
    journeyRole: "Recovery",
    idealTravelersPrimary: ["Honeymooners", "Slow Travelers", "Burned-out Executives"],
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 9, authenticityScore: 7, premiumScore: 8,
    adventureScore: 5, privacyScore: 9, wildlifeExperienceScore: 7,
    culturalImmersionScore: 6, familySuitabilityScore: 4, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION — no numeric score in source
    transferTime: "5–5.5 hours overland from Nairobi (~265 km); 45 min bush flight Wilson→Keekorok + 40 min transfer drive.",
    seasonalAccessibility: "Open year-round; peak migration months (July–October) see higher vehicle congestion at Oloolaimutia Gate.",
    rainySeasonImpact: "REQUIRES_VERIFICATION — not specified in source.",
    electricitySystem: "220V continuous electric power backed by generator systems.",
    powerReliability: "REQUIRES_VERIFICATION — reliability not detailed beyond generator backup.",
    waterReliability: "High-pressure hot water systems supplying en-suite bathrooms and private deck jacuzzis reliably.",
    internetAvailability: "Complimentary Wi-Fi throughout main public areas and guest suites.",
    mobileNetwork: "Safaricom cellular network coverage across the property.",
    medicalAccess: "First aid on site; emergency evacuation via Flying Doctors (AMREF) through Keekorok Airstrip.",
    childFriendly: true, // "Moderate" per source — welcomed but no dedicated kids' programs
    mobilityFriendly: false, // Moderate to Low per source
    operationalLimitations: [
      "Located just outside the reserve boundary rather than in a private conservancy — restricted to official national reserve rules and hours (no night drives, no off-roading)",
      "Sloped, unpaved river-brook pathways present minor navigation challenges",
      "No dedicated kids' activity programs despite welcoming children",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Private standalone jacuzzis on timber decks, highly curated farm-to-table à la carte dining, and an intimate 10-room sanctuary setting.",
      supportingSignals: ["Private deck jacuzzis", "Farm-to-table à la carte dining", "10-room cap"],
      mismatchConditions: ["Reserve gate traffic during peak season"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Restorative pace, low-density grounds, quiet infinity pool, and single-digit room service care foster rapid nervous system recovery.",
      supportingSignals: ["Low-density 10-room layout", "Quiet infinity pool"],
      mismatchConditions: ["Game drives follow fixed national reserve operating hours"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Wilderness Purist\"); mapped to closest valid match — desires 10-hour intense game tracking, off-road driving, and raw lantern-lit wilderness rather than deck jacuzzis and contemporary eco-architecture.",
      supportingSignals: [], mismatchConditions: ["Expectation mismatch regarding off-road conservancy access and rustic bush immersion"] },
    { fitType: "poorFit", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Moderate",
      reasoning: "The quiet, romantic atmosphere and sloped river-brook terrain are not tailored for lively multi-generational groups or young children seeking group entertainment.",
      supportingSignals: [], mismatchConditions: ["Potential disruption to the quiet social environment"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source frames this as dual 'Recovery/Reset / Romantic Finale'; canonical Journey Role resolved to Recovery per founder decision — low intensity score (3/10) and positioning immediately before international departure both favor Recovery over Grand Finale.",
    whatShouldComeBefore: "A high-intensity predator tracking segment (e.g., Zebra Plains Mara Camp) or a rugged overland journey from Amboseli or Samburu.",
    whatShouldComeAfter: "Direct flight to Nairobi for international departure, or a coastal beach stay in Diani or Watamu.",
    emotionalTransitionRationale: "Shifts the traveler from active wildlife tracking into quiet wellness, private deck relaxation, and romantic reflection.",
  },

  narrative: {
    whyChosen: "Alama Camp Mara is the reference example for what a Recovery stage should deliver: a strictly capped 10-room sanctuary where private deck jacuzzis and farm-to-table dining replace the density and pace of an active safari camp, at a genuinely mid-tier price point.",
    bestUsedFor: "Couples, honeymooners, and slow travelers closing out a journey, especially those coming off a high-intensity tracking stage and needing to decompress before flying home.",
    lessSuitableFor: "Large family groups with young children, high-energy travelers wanting 10-hour drive schedules, or clients requiring off-road tracking and night game drives.",
    journeyPositionNote: "Recovery, positioned near the end of an itinerary — ideally the stage immediately before departure or a final coastal stay.",
    overview: "Alama Camp Mara is an intimate, 10-tent boutique eco-sanctuary on the bank of a winding stream brook just outside the Oloolaimutia sector, built with local sedimentary stone walls and canvas roofing, featuring private deck jacuzzis, an infinity pool, and farm-to-table à la carte dining.",
    emotionalFeel: "Serene, romantic, and restorative — a quiet sanctuary where guests decompress privately while watching wildlife move across the Mara plains from their own deck.",
    sensorySignature: {
      visual: ["Shifting sky colors reflected in the infinity pool", "Private timber decks with standalone hot tubs facing open savannah"],
      auditory: ["Gentle trickle of the river brook", "Distant nocturnal savanna sounds", "Crackling logs from the outdoor fireplace"],
      olfactory: ["Fresh herbs from the on-site organic patch", "Crisp valley night air", "Woodsmoke"],
    },
    positiveSignals: [
      "Private deck jacuzzis on every suite allow soaking while observing wildlife",
      "Curated farm-to-table à la carte dining from an on-site organic patch",
      "Sedimentary stone architecture naturally regulates interior tent temperatures",
      "Intimate 10-room scale ensures quiet grounds and personalized service",
    ],
    negativeSignals: [
      "Gate area traffic through Oloolaimutia during peak migration months",
      "Sloped brook pathways with minor inclines require careful footing at dusk",
      "National reserve restrictions — no off-roading or night drives",
    ],
    hiddenGems: [
      "Delivers low-density boutique luxury — private deck jacuzzis and fully customized farm-to-table dining — at a mid-tier price point, a boutique feel without high luxury costs.",
    ],
    signatureMemory: "Soaking in a warm bubble bath on your private timber deck as the sun sets over the Mara plains, watching giraffes move along the horizon.",
    expectationManagement: "Alama Camp Mara operates as a slow-paced retreat near Oloolaimutia Gate. While it features private deck jacuzzis and high-end dining, game drives enter through the main reserve gate rather than a private conservancy.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Booking couples, honeymooners, or slow travelers seeking an intimate 10-tent retreat with private deck jacuzzis and farm-to-table dining.",
    ],
    doNotRecommendConditions: [
      "Booking large family groups with young children",
      "High-energy travelers wanting 10-hour drive schedules",
      "Clients requiring off-road tracking and night game drives",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Standalone deck jacuzzis and organic farm-to-table dining across a 10-room property at a mid-tier price point.",
    mainLimitation: "Located outside private conservancies, restricting activities to standard national reserve gate hours.",
    positioningSummary: "An intimate, 10-tent contemporary eco-sanctuary featuring private deck jacuzzis and tailored à la carte dining, perfect for couples seeking a quiet, restorative retreat on the edge of the Maasai Mara.",
  },

  pairings: [
    { pairedEntity: "Zebra Plains Mara Camp", pairingCategory: "regional", rationale: "Opening predator-tracking leg before moving into Alama for a romantic finale / recovery stage." },
    { pairedEntity: "Samburu Sopa Lodge or a Laikipia walking outpost", pairingCategory: "ecosystem", rationale: "Contrasts dry, rugged northern landscapes with Alama's lush river-brook deck soaks." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Official property fact sheets", "Site audits", "Mapping records", "Guest log evaluations"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "rainySeasonImpact and powerReliability detail — not specified in source",
      "Opening date for planned on-site spa space — pending local monitoring, per source",
      "Paired lodge entities — 'Zebra Plains Mara Camp' pairing can likely be resolved to a real ID now that lodge #4 is live; Samburu/Laikipia pairing remains a name-only reference",
    ],
  },
};