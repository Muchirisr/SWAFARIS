export const ecoVillasWatamu = {
  id: "eco-villas-watamu-watamu",
  name: "Eco Villas Watamu",
  country: "Kenya",
  region: "Coast",
  subRegion: "Watamu, Kilifi County",
  ecosystem: "Coastal / Tropical Forest Boundary — sheltered inland between the open ocean bay and Arabuko Sokoke Forest",
  propertyType: "Micro-Boutique Eco-Lodge / Garden Villas",
  accommodationStyle: "Independent, white-walled coastal bungalows arranged symmetrically around a central swimming pool, featuring rustic eco-luxury finishes and palm-thatched architectural accents",
  locationDetail: "Family-owned and operated (led by Agnes and Juliette); micro-boutique compound of private, independent eco-villas/bungalows; established ~2018",
  nearestAirstrips: ["Malindi Airport (MYD) — primary", "Moi International Airport, Mombasa (MBA) — secondary, 2-2.5hr road transfer"],
  nearestGate: "N/A (Inland coastal property; 5-10 minutes drive to Watamu Beach access points & Arabuko Sokoke Forest Station)",
  accessibilityNotes: "Easily accessible via paved asphalt along the main Gede-Watamu road corridor, followed by a short unpaved access lane. Ground-floor bungalow structures with flat, garden-level footpaths surrounding the central pool deck.",
  priceRangeMinUsd: 60,
  priceRangeMaxUsd: 130,

  // Self-stated "Budget" tier; midpoint of $60-130 = $95, squarely in the Budget bracket (<$150).
  // Per the Galu Ecolodge precedent, "Budget" as a distinct budgetTier is retired in favor of the
  // Value floor tier.
  rawMarketTier: "Budget",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Finch Hattons", "Satao Camp", "Hemingways Watamu"],

  rawSourceJson: {
    officialBrandName: "Eco Villas Watamu",
    yearEstablished: "~2018",
    unitBreakdown: "Micro-boutique compound of private, independent eco-villas/bungalows",
    priceRange: "$60-130 USD per room/night, Bed & Breakfast / Half Board depending on season and villa selection.",
  },

  experienceDna: {
    // "Intimate," "Peaceful," "Rustic" are all canonical as-stated — no correction needed.
       // CORRECTED 2026-09-25: "Intimate" is not a valid final value per the Intimate case-by-case
    // rule — Honeymooners is a poorFit here with no romantic narrative support, so it resolves to
    // "Reflective" (the rule's default). "Peaceful" and "Rustic" remain canonical as-stated.
    emotionalTone: ["Reflective", "Peaceful", "Rustic"],

    // Source states "Decompression retreat | Immersive Nature." "Immersive Nature" is a simple
    // word-order variant of canonical "Nature Immersion." "Decompression retreat" isn't canonical
    // either; resolved to "Wellness" given the extremely close parallel to Galu Ecolodge (also
    // Value tier, family-run, Recovery journeyRole, Wellness + Nature Immersion combo) — flagging
    // this resolution for visibility since it wasn't separately raised as a question.
    energyType: ["Wellness", "Nature Immersion"],

    experiencePace: "Slow", // canonical as-stated

    // "Eco-luxury" matches canonical detailed value "Eco Luxury" directly. Founder confirmed
    // Authentic Luxury as the broad comfortPhilosophy pairing (over the only other sighting of
    // Eco Luxury, paired with Adventure Luxury/Authentic Luxury at a fast-paced Mara camp that
    // doesn't match this property's slow, passive, authenticity-driven profile).
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Eco Luxury",

    // "Recovery/Reset or Pre-Departure Decompression Segment" hedge contained exactly one literal
    // canonical term (Recovery), qualifying for the standard single-term hedge auto-resolve.
    // Watamu sub-phase running tally: Grand Finale x1, Recovery x1.
    journeyRole: "Recovery",

    // idealTravelersPrimary: doc's "Slow Travelers" dropped (no archetype support). "Burned-out
    // Executives" and "First-Time Safari Travelers" added (confirmed ideal-fit archetypes below,
    // not in the doc's own summary line), per established precedent.
    idealTravelersPrimary: ["Solo Explorers", "Families", "Burned-out Executives", "First-Time Safari Travelers"],
    idealTravelersSecondary: [],

    intensityScore: 2,
    relaxationScore: 9,
    authenticityScore: 9,
    premiumScore: 6,
    adventureScore: 5,
    privacyScore: 8,
    wildlifeExperienceScore: 6,
    culturalImmersionScore: 8,
    familySuitabilityScore: 8,
    comfortScore: 7,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "20-25 minutes road transfer from Malindi Airport (MYD); 2 to 2.5 hours road transfer from Moi International Airport, Mombasa (MBA)",
    seasonalAccessibility: "Accessible year-round. Highly sheltered from harsh coastal salt-spray and high monsoon sea winds due to its inland garden location. Peak humidity months (January-March) can feel warm inside non-air-conditioned spaces.",
    electricitySystem: "24-hour continuous mains grid electric power supported by solar backup; high-efficiency ceiling fans and standing fans installed in all guest units",
    powerReliability: "High",
    waterReliability: "High — solar photovoltaic water heating systems providing consistent hot showers across all villa bathrooms; fresh well/municipal water supply",
    internetAvailability: "Complimentary Wi-Fi in central communal lounge and pool areas; signal can be unstable/weak inside private rooms",
    mobileNetwork: "Strong 4G/LTE cellular coverage across Safaricom and Airtel for mobile hotspot usage",
    medicalAccess: "On-site first aid kit; direct 10-15 minute road access to local dispensaries in Watamu; 25 minutes to comprehensive medical facilities and private clinics in Malindi",
    childFriendly: true, // stated "High"
    // Stated as "Moderate-to-High" — a hedge, not a clean single grade. Graded true: the
    // description leans favorable overall (ground-floor construction, flat paved garden footpaths),
    // with the veranda-footing caveat treated as a minor exception rather than the dominant
    // condition — unlike Baobab's "Low to Moderate," which leaned unfavorable and graded false.
    mobilityFriendly: true,
    operationalLimitations: [
      "Absolute lack of central air conditioning — relies entirely on ceiling fans and natural cross-ventilation",
      "Unstable room Wi-Fi for heavy video bandwidth",
      "Distance from direct beachfront sand — requires a 4-10 minute tuk-tuk ride",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Solo Explorers",
      archetype: "The Social Catalyst",
      matchStrength: "High",
      reasoning: "Provides an extraordinarily protective, warm home-base. The maternal \"Granny Agnes\" hospitality formula delivers intense psychological safety, personal driver arrangements, and genuine local guidance.",
      supportingSignals: ["Privacy score 8/10", "Personalized driver/tuk-tuk arrangements", "Family-run hospitality model"],
      mismatchConditions: ["Must rely on personal mobile data hotspots if requiring continuous high-speed internet inside private rooms"],
    },
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "Un-regimented daily rhythms, homemade small-batch food options (customizable for young children), enclosed compound safety, and affordable multi-bedroom setups remove family travel stress.",
      supportingSignals: ["Family suitability score 8/10", "Enclosed walled garden compound", "Customizable homemade meals"],
      mismatchConditions: ["Requires arranging a short 5-minute tuk-tuk ride whenever the family wants to go to the ocean beach"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Burned-out Creatives / Slow
    // Travelers" — corrects to canonical Burned-out Executives (archetype name is an exact match).
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Strips away the performative nature of commercial high-end tourism. Complete insulation from resort noise permits deep reading, contemplation, and nervous system reset.",
      supportingSignals: ["Relaxation score 9/10", "Intensity score only 2/10", "Isolated social dynamic"],
      mismatchConditions: ["Total lack of central air conditioning requires comfort with natural tropical temperatures and fan cooling"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Value-Focused Eco-Explorers" —
    // corrects to canonical First-Time Safari Travelers (archetype name is an exact match).
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "Moderate",
      reasoning: "Unbeatable strategic positioning halfway between Arabuko Sokoke Forest, Gede Ruins, and Mida Creek — allowing rapid cultural and ecological access without paying resort overhead.",
      supportingSignals: ["Cultural immersion score 8/10", "Equidistant to forest, ruins, and creek"],
      mismatchConditions: ["Must accept rustic infrastructure and an inland location away from direct sea views"],
    },
    // CORRECTED CATEGORY: invented "Ultra-Luxury Aficionados" — corrects to canonical Luxury
    // Adventurers.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Low",
      reasoning: "Rustic bungalow infrastructure, absence of central air conditioning, self-service/homestyle dining, and lack of white-glove butler service collide directly with high-net-worth material expectations.",
      supportingSignals: [],
      mismatchConditions: ["Severe perception of downgrade in physical luxury, especially if coming from $2,000+/night safari lodges"],
    },
    // CORRECTED CATEGORY: invented "Classic Oceanfront Honeymooners" — corrects to canonical
    // Honeymooners.
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "Positioned 2 to 2.5 km inland with zero direct ocean views or immediate beach stepping access.",
      supportingSignals: [],
      mismatchConditions: ["Deep disappointment for travelers who picture waking up to crashing waves and stepping directly from their room onto white beach sand"],
    },
    // REMAPPED: source doc listed "The Digital Nomad / Remote Executive," not canonical. Founder
    // confirmed remapping to The Deep-Work Sovereign (The Asynchronous Executive) under Bleisure
    // Explorers — its remote/async-work framing matches the unstable-Wi-Fi incompatibility directly.
    {
      fitType: "poorFit",
      category: "Bleisure Explorers",
      archetype: "The Deep-Work Sovereign",
      matchStrength: "Low",
      reasoning: "On-site Wi-Fi infrastructure is unstable and weak inside the private bungalow interiors, creating friction for video calls and heavy data transfers.",
      supportingSignals: [],
      mismatchConditions: ["Frustration over work disruptions unless content with operating entirely off mobile cellular data"],
    },
    // DROPPED: idealTravelersPrimary item "Slow Travelers" — no archetype support.
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 nights",
    recommendedPositionNote: "\"Recovery/Reset or Pre-Departure Decompression Segment\" hedge contained exactly one literal canonical term (Recovery), qualifying for standard single-term auto-resolve. Watamu sub-phase running tally: Grand Finale x1, Recovery x1.",
    whatShouldComeBefore: "A physically demanding, dusty overland safari circuit (e.g., Tsavo East, Tsavo West, or Amboseli) or high-intensity wilderness game drives",
    whatShouldComeAfter: "Direct transit to Malindi or Mombasa airport for homeward flights, or graduation to an oceanfront luxury resort (e.g., Hemingways Watamu) for an itinerary climax",
    emotionalTransitionRationale: "Effortlessly transitions travelers from high-exertion safari fatigue and bumpy road transit into grounding, peaceful, garden-level decompression.",
  },

  narrative: {
    whyChosen: "A serene, family-run eco-boutique sanctuary hidden within a lush tropical garden, offering deep psychological peace and authentic hospitality just a short tuk-tuk ride away from Watamu's marine attractions.",
    bestUsedFor: "Solo travelers, slow travelers, down-to-earth couples, or budget-conscious families prioritizing deep psychological peace, relational authenticity, and local forest/culture access at extraordinary value.",
    lessSuitableFor: "Ultra-luxury travelers demanding direct private beach access, central air conditioning, white-glove butler service, or high-speed streaming Wi-Fi.",
    overview: "Eco Villas Watamu is a boutique eco-sanctuary hidden slightly inland along the Gede-Watamu road corridor. Functioning as a counter-cultural antidote to mass beach resorts, this micro-property trades immediate oceanfront views for a lush, shaded tropical garden oasis. The architecture features white-walled bungalows arranged symmetrically around a sparkling central pool. It operates less like a hotel and more like a private, hyper-hospitable family compound where luxury is defined by absolute peace, psychological safety, and maternal warmth.",
    emotionalFeel: "Deeply peaceful, grounding, and familial. The psychological atmosphere is one of intense emotional safety and home-like belonging. Without the rigid structures of corporate hospitality, guests set their own unhurried rhythm — drifting from poolside sun loungers to open-air couches to read, resulting in a profound lowering of nervous system arousal.",
    sensorySignature: {
      visual: ["Symmetrical white-walled bungalows set against lush tropical greenery", "Sparkling blue pool waters", "Sun-dappled garden paths"],
      auditory: ["Birdsong", "Rustling palms", "Subtle tinkling of glass wind chimes", "Free from beach music or tourist crowds"],
      olfactory: ["Fresh tropical flora", "Clean sun-dried linen", "Wood-fired cooking aromas", "Fresh homemade mango jams"],
    },
    positiveSignals: [
      "The \"Granny Agnes\" Hospitality Formula — exceptional, deeply caring maternal service from Agnes, Juliette, and local staff who treat guests like returning family",
      "Oasis of Absolute Quietude — inland location insulates guests entirely from beach boys, nightlife noise, and high-volume tourist traffic",
      "Wholesome Culinary Identity — exceptional small-batch food preparation, featuring freshly baked homemade breads and signature artisan mango jams",
      "Impeccable Grounds Maintenance — spotless groundskeeping, sparkling clean pool waters, and immaculately maintained beds and linens despite the rustic eco-ethos",
    ],
    negativeSignals: [
      "Geographic Beach Detachment — situated 2 to 2.5 km inland (4-10 minute tuk-tuk drive to beach access points)",
      "Unstable Wi-Fi Infrastructure — weak and inconsistent connectivity inside private rooms",
      "Lack of Active Climate Control (No AC) — relies entirely on ceiling/standing fans and cross-ventilation",
    ],
    hiddenGems: [
      "Equidistant positioning between sea and forest — effortless early morning birdwatching or elephant tracking in Arabuko Sokoke Forest, afternoons at the 12th-century Gede Ruins, and late-afternoon dhow cruises on Mida Creek, all while bypassing coastal resort traffic",
    ],
    signatureMemory: "Enjoying a leisurely, late breakfast of freshly baked homemade bread and signature mango jam on the open-air veranda, surrounded by birdsong and tropical foliage, before taking a peaceful morning dip in the central pool.",
    expectationManagement: "Travelers must be explicitly briefed that this is an inland garden property (not on the beach), rooms use fan cooling rather than central air conditioning, in-room Wi-Fi is basic, and local beach transit requires a quick 5-minute tuk-tuk ride.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Solo travelers, slow travelers, down-to-earth couples, or budget-conscious families prioritizing deep psychological peace, relational authenticity, and local forest/culture access",
      "Clients wanting extraordinary value-for-money ($60-130/night)",
    ],
    doNotRecommendConditions: [
      "Ultra-luxury travelers demanding direct private beach access, central air conditioning, or white-glove butler service",
      "Remote workers/executives needing reliable high-speed Wi-Fi for video calls",
    ],
    confidenceLevel: "Medium Confidence",
    competitiveAdvantage: "Complete insulation from coastal resort noise combined with unmatched, maternal family hospitality and prime positioning for forest, ruins, and creek excursions.",
    mainLimitation: "Inland distance from the beach and lack of room air conditioning.",
    positioningSummary: "A serene, family-run eco-boutique sanctuary hidden within a lush tropical garden, offering deep psychological peace and authentic hospitality just a short tuk-tuk ride away from Watamu's marine attractions.",
  },

  pairings: [
    {
      pairedEntity: "Finch Hattons / Satao Camp (Tsavo West or Tsavo East National Parks)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "The transition from dry, red-dust savannah to this hyper-green, quiet coastal garden oasis provides an ideal sensory relief valve via an easy overland link.",
    },
    {
      pairedEntity: "Arabuko Sokoke Forest and Mida Creek",
      pairingCategory: "Complementary Region",
      rationale: "Use Eco Villas as an active base for forest birdwatching, butterfly sanctuary visits, historical exploration at Gede Ruins, and dhow sailing.",
    },
    {
      pairedEntity: "Hemingways Watamu",
      pairingCategory: "Complementary Experience",
      rationale: "Pair 2 nights at Eco Villas Watamu (deep rest, reading, forest hiking, Gede Ruins) with 3 nights at Hemingways Watamu, absorbing quiet inland culture before graduating to front-row 5-star ocean luxury.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Exact solar capacity expansion plans for potential future AC installation require seasonal verification"],
  },
};