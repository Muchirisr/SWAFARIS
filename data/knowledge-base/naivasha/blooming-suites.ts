// data/knowledge-base/naivasha/blooming-suites.ts
export const bloomingSuites = {
  id: "blooming-suites", // NEW lodge, no existing DB record
  name: "Blooming Suites",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Moi South Lake Road, Karagita Corridor",
  ecosystem: "Rift Valley Lake Interface (Transit Corridor / Urbanizing Karagita Zone)",
  propertyType: "Contemporary Roadside Commercial & Conference Hotel",
  accommodationStyle: "Clean, minimalist, city-style block-hotel suites featuring large tiled floors, modern furnishings, and wide glass windows.",
  locationDetail: "Karagita corridor, along the primary Moi South Lake Road tourism transit artery.",
  nearestGate: "Hell's Gate National Park (Elsa Gate: ~8 km / 15 minutes); Crescent Island Sanctuary Jetty (~6 km / 12 minutes)",
  nearestAirstrips: ["Naivasha Airstrip", "Loldia Airstrip"],
  accessibilityNotes: "Fully accessible year-round via smooth, paved tarmac along the primary Moi South Lake Road. Flat, tiled interior spaces with standard hotel corridor access and paved parking.",
  priceRangeMinUsd: 65,
  priceRangeMaxUsd: 100,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — $82.5 midpoint folds into Value per governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Entumoto Safari Camp, Maasai Mara (ecosystem contrast pairing)",
    "The Watch Tower at Sanctuary Farm, Naivasha (regional/experience contrast pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Social", "Adventurous"], // corrected from source doc's "Rustic | Social" — "Rustic" is technically valid vocabulary but semantically mismatched (property is explicitly "concrete-heavy" with "zero traditional safari character"); substituted per founder confirmation
    energyType: ["Transit Convenience"], // corrected from source doc's non-canonical "High-Energy Safari (Transit Hub)" — "Safari" framing dropped as misleading given the 1/10 Wildlife Score; single value only, nothing else in the data supports a second tag
    experiencePace: "Fast", // normalized from source doc's "Fast-Paced"
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort", // source doc's "Contemporary Luxury" mapped per founder confirmation; amenities genuinely align with the Value tier here, no aspirational overshoot to correct for
    journeyRole: "Opening Immersion", // resolved from source doc's non-canonical triple framing "Adventure Transition / Low-Cost Logistic Bridge / Opening Transition" per founder confirmation. Unlike the Recovery-leaning lodges in this batch, doc's own language is explicitly "opening, low-cost transit bridge" with no wash-off-dust or post-safari framing. This is lodge #6 (final) of the Naivasha batch, bringing the tally to Opening Immersion x3, Recovery x3 — dead even.
    idealTravelersPrimary: ["First-Time Safari Travelers", "Bleisure Explorers", "Burned-out Executives"], // "Corporate Workshop & Conference Groups", "Entry-Level Budget Safari Travelers", "Business Travelers & Digital Nomads", and "Late-Arrival Overland Transit Groups" are all non-canonical categories; replaced based on the real archetypes actually used below
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 4, authenticityScore: 5, premiumScore: 5,
    adventureScore: 4, privacyScore: 4, wildlifeExperienceScore: 1,
    culturalImmersionScore: 3, familySuitabilityScore: 5, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2 to 2.5 hours overland from Nairobi via the Mai Mahiu / Naivasha Road; 20–30 minutes road transfer from local Naivasha airstrips.",
    seasonalAccessibility: "Open year-round with zero road or weather access constraints.",
    rainySeasonImpact: "None reported — fully paved tarmac access with zero road or weather access constraints.",
    electricitySystem: "Continuous 24/7 main grid power supply backed by on-site generator infrastructure.",
    powerReliability: "Continuous power supply across all rooms and conference spaces.",
    waterReliability: "Reliable central water heating delivering continuous hot water and high shower pressure across all rooms.",
    internetAvailability: "Fast, highly stable Wi-Fi throughout guest rooms and conference spaces supporting work and smart TV streaming. Strong 4G/5G mobile coverage across all major networks.",
    mobileNetwork: "Strong 4G/5G mobile coverage across all major networks.",
    medicalAccess: "On-site basic first aid. Major private medical facilities in Naivasha town located within 15 minutes; emergency medical air-evacuation access from local airstrips.",
    childFriendly: false, // "Moderate" per source, but total absence of green playgrounds or children's amenities limits recreational value
    mobilityFriendly: true, // "High" per source — paved parking, flat access, level corridor pathways
    operationalLimitations: [
      "Extreme wait times (60–90+ minutes) for à la carte dining",
      "Disconnects between third-party booking platforms and front desk databases",
      "Lack of in-room luxury amenities (missing irons, washcloths, single towel setups)",
      "No green garden space or lake views",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Delivers large, clean, hygienic rooms with hot showers and fast Wi-Fi at an accessible budget rate ($65–$100/night), serving as an affordable base for day trips to Hell's Gate and Lake Naivasha.",
      supportingSignals: ["Clean, hygienic rooms at budget rate", "Affordable base for day trips"],
      mismatchConditions: ["Must accept a commercial hotel environment without wilderness ambiance or lake views"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Corporate Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed the real archetype name \"The Bonded Cohort\" under an invented category (\"Corporate Groups & Workshop Retreats\") — but Bonded Cohort actually belongs to Students, and the fit description doesn't match a Students use case. Remapped to The Corporate Catalyst per founder confirmation, supported by modern conference facilities, reliable fiber Wi-Fi, spacious multi-room suites, and low price points allowing corporate curators to execute seamless workshops without inflating budgets.",
      supportingSignals: ["Modern conference facilities", "Reliable fiber Wi-Fi at low price points"],
      mismatchConditions: ["Slow à la carte kitchen service requires sticking to pre-arranged group buffets"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Fast, reliable digital connectivity, in-room smart TVs, paved roadside access, and functional work desks suit short, business-focused stays.",
      supportingSignals: ["Fast digital connectivity", "Functional work desks"],
      mismatchConditions: ["Complete absence of quiet green spaces or leisure resort amenities"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Concrete-heavy footprint, roadside commercial setting, absence of lake views, lack of private plunge pools, and high-volume corporate atmosphere eliminate romantic intimacy.",
      supportingSignals: [], mismatchConditions: ["Total failure to meet expectations for a scenic or romantic safari escape"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Pure Wilderness Purist\") under an invented category (\"Deep Bush Adventurers\"); mapped to The Low-Impact Purist per founder confirmation. City-style tiled hotel block, main road traffic noise, and total lack of natural flora or wildlife interaction clash with wilderness desires.",
      supportingSignals: [], mismatchConditions: ["High dissatisfaction due to the complete absence of authentic safari character or canvas living"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this archetype under an invented category (\"Luxury Safari Enthusiasts\"); its real category is Luxury Adventurers. Utilitarian budget infrastructure, simple buffet dining, slow à la carte execution, and lack of premium lodge amenities fail luxury standards.",
      supportingSignals: [], mismatchConditions: ["Severe mismatch between client luxury expectations and budget commercial realities"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 Night",
    recommendedPositionNote: "Source frames this as non-canonical triple value 'Adventure Transition / Low-Cost Logistic Bridge / Opening Transition'; resolved to Opening Immersion per founder confirmation, consistent with the doc's own 'opening, low-cost transit bridge' framing (no Recovery-style wash-off-dust language present). This is lodge #6, the final lodge of the Naivasha batch. Final Naivasha tally: Opening Immersion x3, Recovery x3 — dead even split.",
    whatShouldComeBefore: "Late-afternoon overland arrival from Nairobi (NBO/WIL) or an urban business transit segment.",
    whatShouldComeAfter: "Direct transition into a high-intensity, authentic wilderness property in the Maasai Mara (e.g., Entumoto Safari Camp) or a scenic Rift Valley conservancy.",
    emotionalTransitionRationale: "Functions as an emotionally neutral, functional sleep anchor that manages trip budgets before clients launch into atmospheric bush environments.",
  },

  narrative: {
    whyChosen: "Blooming Suites is the reference example for a clean, budget-conscious logistics anchor along the Naivasha transit corridor — reliable utilities and conferencing capability, structured as a functional bridge rather than an experiential destination.",
    bestUsedFor: "The client is a corporate workshop organizer, business traveler, or entry-level budget group needing clean rooms, hot showers, strong Wi-Fi, and paved road access for a 1-night transit stop.",
    lessSuitableFor: "The client is a honeymooner, luxury purist, nature photographer, or leisure traveler seeking lake views, wildlife interactions, or fine dining.",
    journeyPositionNote: "Opening Immersion — a low-cost, emotionally neutral transit bridge that manages trip budgets before clients launch into atmospheric bush environments.",
    overview: "Blooming Suites is a clean, modern commercial city-style hotel located along the primary tourism transit artery of Naivasha's Moi South Lake Road. Unassuming from its roadside entrance, the property functions structurally as a block-style corporate and group hospitality hub. It trades raw safari romance for high structural predictability, reliable hot water, fast Wi-Fi, and conferencing capabilities, serving as a clean budget anchor rather than an experiential destination.",
    emotionalFeel: "Functionally predictable and transitional. Lacking the mystery or sensory depth of a bush camp, the emotional tone mirrors an efficient business-travel hotel. The energy rhythm follows scheduled hotel hours — peaking during breakfast, clearing out midday, and returning to a brightly lit dining room environment at night.",
    sensorySignature: {
      visual: ["Minimalist concrete and tile architecture, wide glass windows, brightly lit corridors, and clean white linens"],
      auditory: ["Ambient main-road transit audio", "Humming mechanical utilities", "Busy dining room chatter"],
      olfactory: ["Freshly cleaned tiled surfaces", "Crisp linens", "Standard commercial kitchen aromas"],
    },
    positiveSignals: [
      "Exceptional room space and hygiene: large, spacious room layouts maintained in pristine, hygienic condition",
      "Reliable utilities: continuous hot water, high shower pressure, and stable electrical grid supply",
      "Fast digital connectivity: highly stable Wi-Fi infrastructure supporting remote work and streaming",
      "Courteous staff: friendly, professional front desk, waitstaff, and housekeeping teams",
    ],
    negativeSignals: [
      "Concrete-heavy footprint: complete lack of mature trees, green lawns, or natural safari charm",
      "Sluggish à la carte dining: extreme kitchen wait times (60–90+ minutes) for individual non-buffet orders",
      "Booking system disconnects: occasional reservation tracking friction between third-party booking platforms and the front desk database",
      "In-room amenity deficits: omission of standard hotel details like irons, washcloths, or second towels in double rooms",
    ],
    hiddenGems: [
      "Its primary strategic value lies in its exceptional price-to-space ratio for corporate workshops and budget business groups, offering modern conferencing facilities and large multi-room suites along the paved corridor at a fraction of neighboring resort rates.",
    ],
    signatureMemory: "Enjoying a powerful hot shower and fast Wi-Fi connection in a spacious, spotless room after navigating Nairobi traffic, before heading out early the next morning for Hell's Gate.",
    expectationManagement: "Travelers must understand this is a modern roadside commercial hotel, not a luxury safari lodge or lakefront resort. It lacks natural lawns, wildlife views, and fast à la carte dining, serving best as a clean, 1-night budget transit stop.",
    idealNights: "1",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a corporate workshop organizer, business traveler, or entry-level budget group needing clean rooms, hot showers, strong Wi-Fi, and paved road access for a 1-night transit stop.",
    ],
    doNotRecommendConditions: [
      "The client is a honeymooner, luxury purist, nature photographer, or leisure traveler seeking lake views, wildlife interactions, or fine dining.",
    ],
    confidenceLevel: "Medium", // per source — "Medium-Low Confidence (for leisure safari) / High Confidence (for budget business/conferencing)"; recorded conservatively given the split framing
    competitiveAdvantage: "Unbeatable room size, hygiene, and utility reliability at a low budget price point ($65–$100/night) along Moi South Lake Road.",
    mainLimitation: "Complete lack of natural scenery, green lawns, or authentic safari character.",
    positioningSummary: "A clean, minimalist, and highly spacious contemporary roadside hotel offering reliable utilities and business-friendly infrastructure, serving strictly as a functional mid-range transit anchor or corporate workshop venue along Moi South Lake Road.",
  },

  pairings: [
    { pairedEntity: "Entumoto Safari Camp, Maasai Mara", pairingCategory: "ecosystem", rationale: "Keeping initial transit costs low allows the wild, un-fenced romance of the Mara to stand out in dramatic contrast." },
    { pairedEntity: "The Watch Tower at Sanctuary Farm, Naivasha", pairingCategory: "experience", rationale: "Contrasting Blooming Suites' commercial, concrete business environment with the Watch Tower's isolated, wildlife-under-your-deck magic illustrates the power of intentional property selection." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "À la carte kitchen restructuring timelines — explicitly flagged for ongoing verification in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};