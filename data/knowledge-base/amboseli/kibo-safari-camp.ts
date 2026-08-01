// data/knowledge-base/amboseli/kibo-safari-camp.ts
export const kiboSafariCampEnrichment = {
  id: "kibo-safari-camp", // REUSED — existing lodge, not a new one
  name: "Kibo Safari Camp",
  country: "Kenya",
  region: "Amboseli Ecosystem",
  subRegion: "Kimana Gate Buffer Zone, Eastern Boundary",
  ecosystem: "Savannah scrubland & acacia woodland at the foothills of Mount Kilimanjaro",
  propertyType: "Mid-tier Tented Safari Resort / Canvas Lodge Sanctuary",
  accommodationStyle: "Custom-built canvas tents on permanent stone bases under thatched or canvas fly-roofs, featuring en-suite stone bathrooms and solid bush-log furniture.",
  locationDetail: "2 km from Amboseli's Kimana Gate, stone-built public spaces centered around a large pool and communal campfire.",
  nearestGate: "Kimana Gate (2 km / 5 minutes drive)",
  nearestAirstrips: ["Amboseli Airstrip"],
  accessibilityNotes: "Accessible year-round by 2WD and 4x4 via paved highway to a short 2 km all-weather dirt access road. Internal pathways flat, level, and well-stepped across manicured grounds.",
  priceRangeMinUsd: 350,
  priceRangeMaxUsd: 600,
  rawMarketTier: "Mid", // as stated in source doc, matches price-guide midpoint — no conflict
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-range", // unchanged, clean match with existing DB value
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Kilaguni Serena or Ol Donyo Lodge, Tsavo West / Chyulu Hills (ecosystem pairing)",
    "Mara Plains or Angama Mara, Maasai Mara private conservancies (regional pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Social", "Rustic", "Grounded"], // "Cinematic" substituted; "Rustic"/"Grounded" preserved from existing DB per founder decision
    energyType: ["Nature Immersion", "Wildlife Focus"], // confirmed normalization
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Comfort Luxury"], // unchanged, matches existing DB
    comfortPhilosophyDetailed: "Modern Luxury",
    journeyRole: "Opening Immersion", // resolved, overrides non-canonical DB value "Adventure Transition"
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Students"], // "Students" preserved per founder decision, new doc's types added
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 6, authenticityScore: 6, premiumScore: 7,
    adventureScore: 5, privacyScore: 3, wildlifeExperienceScore: 7,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–4.5 hours overland from Nairobi (250 km) via Emali–Loitokitok highway + 2 km access track; 45 min flight Wilson→Amboseli Airstrip + 40–45 min drive.",
    seasonalAccessibility: "Open year-round; all-weather road connections guarantee access even during rainy seasons (April–May), though heavy rains can make internal park tracks muddy.",
    rainySeasonImpact: "Heavy rains can make internal park tracks muddy, though the main access road remains all-weather passable.",
    electricitySystem: "100% solar-powered system backed by an on-site generator.",
    powerReliability: "Standard charging outlets available in all tents.",
    waterReliability: "Dedicated solar water heaters provide reliable hot water to all en-suite tent bathrooms.",
    internetAvailability: "Complimentary Wi-Fi strictly confined to the main public lounge and bar areas, prone to bottlenecking during high occupancy.",
    mobileNetwork: "Strong Safaricom/Airtel cellular signal across the property.",
    medicalAccess: "First aid facilities on-site with trained personnel; medical clinics in nearby Kimana town; emergency air evacuation via Amboseli Airstrip.",
    childFriendly: true, // "Outstanding" per source
    mobilityFriendly: true, // High for a canvas camp per source
    operationalLimitations: [
      "Large-scale guest footprint (73 tents); high-density buffet lines during peak tour-group arrivals",
      "Outside park boundary location requires a brief 2 km drive to reach Kimana Gate",
      "Wi-Fi restricted to public zones",
      "Curio vendors outside main gate can create minor hustle friction",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Flat, easy-to-navigate terrain, multi-bed tent configurations, a large swimming pool, and live cooking stations accommodate diverse age groups without logistical stress.",
      supportingSignals: ["Flat, easy-to-navigate terrain", "Live cooking stations"],
      mismatchConditions: ["Must navigate high-density buffet lines during peak tour group meal times"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Delivers the classic 'canvas safari' look while retaining high-reliability resort infrastructure (swimming pool, hot showers, solar power, attentive service), lowering introductory safari anxiety.",
      supportingSignals: ["Classic canvas safari look", "High-reliability resort infrastructure"],
      mismatchConditions: ["Does not provide deep-bush isolation or private concession game drives"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Biophilic Restorer", matchStrength: "Moderate",
      reasoning: "Thoughtfully aligned pathways and tent verandas frame Mount Kilimanjaro on clear mornings, complemented by an on-site organic vegetable garden and shaded acacia grounds.",
      supportingSignals: ["Kilimanjaro-framed tent alignments", "On-site organic vegetable garden"],
      mismatchConditions: ["High guest volume in public areas during peak hours can interrupt quiet contemplation"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "The 73-tent footprint, shared pool area, and high-density buffet hall lack the intimate, secluded romance required for a private retreat.",
      supportingSignals: [], mismatchConditions: ["High tour-group volume breaks romantic isolation"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High guest density, shared public zones, and lack of in-tent Wi-Fi fail to deliver an ultra-exclusive, single-key personal detox environment.",
      supportingSignals: [], mismatchConditions: ["Dissatisfaction with high social traffic, communal dining, and internet access bottlenecks"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Vehicle-bound safari format within national park rules, combined with a comfortable mid-tier resort setup, does not suit guests seeking rugged walking safaris or off-road tracking.",
      supportingSignals: [], mismatchConditions: ["Impatience with structured park hours and moderate activity pace"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion or Adventure Transition'; canonical journeyRole resolved to Opening Immersion per founder decision, overriding the non-canonical existing DB value 'Adventure Transition.'",
    whatShouldComeBefore: "Overland drive or flight from Nairobi (NBO/WIL). Serves as an easy 'soft landing' to acclimate to Kenya's climate and timezone without wilderness shock.",
    whatShouldComeAfter: "Transition to ultra-exclusive, low-density private conservancy camps in the Maasai Mara, Laikipia, or the volcanic landscapes of Tsavo West / Chyulu Hills.",
    emotionalTransitionRationale: "Eases travel fatigue through comfortable canvas living, swimming pool downtime, and iconic Kilimanjaro views, establishing a solid visual baseline before entering higher-exclusivity zones.",
  },

  narrative: {
    whyChosen: "Kibo Safari Camp is the reference example for a reliable, high-value 'soft landing': classic canvas tent romance paired with resort-scale reliability, positioned 2 km from Kimana Gate as an easy acclimation stop before higher-exclusivity legs.",
    bestUsedFor: "Families, first-time safari travelers, or groups seeking a high-value, reliable tented camp with direct Kilimanjaro views, a swimming pool, and quick access to Kimana Gate.",
    lessSuitableFor: "Clients demanding absolute privacy, in-tent Wi-Fi, à la carte fine dining, private plunge pools, or an exclusive boutique footprint (under 10 tents).",
    journeyPositionNote: "Opening Immersion — a soft landing satisfying immediate visual desire for classic tented living and Kilimanjaro views before escalating to high-exclusivity, deep-wilderness lodges.",
    overview: "Kibo Safari Camp is a high-capacity tented safari resort 2 km from Amboseli's Kimana Gate, balancing canvas tent romance with large-scale resort reliability, centered around stone-built public spaces, a large swimming pool, and a communal evening campfire.",
    emotionalFeel: "The mood shifts with the time of day — clear mornings bring awe as Kilimanjaro emerges beyond the tent verandas, middays relax by the pool, and evenings around the live chef stations and campfire carry a lively, social energy.",
    sensorySignature: {
      visual: ["Crisp canvas tents under acacia canopies", "Mount Kilimanjaro's snow peak rising in the background on clear mornings"],
      auditory: ["Morning bird calls across the gardens", "Lively social banter around the campfire", "The sizzle of live cooking stations"],
      olfactory: ["Woodsmoke from the evening bonfire", "Fresh wood-fired pizzas", "Warm acacia dust"],
    },
    positiveSignals: [
      "Tent alignments maximize Kilimanjaro view angles on clear mornings",
      "Local staff consistently deliver warm, personal service despite the property's scale",
      "Fresh, customized live pizza and omelet cooking stations elevate the buffet experience",
      "2 km Kimana Gate proximity minimizes pre-safari transfer time",
    ],
    negativeSignals: [
      "Dinner can feel busy during peak season when multiple tour groups coincide",
      "Local curio sellers lingering near outer property gates can create minor hustle friction",
      "Internet access restricted to public lounges and slows down during high-occupancy hours",
    ],
    hiddenGems: [
      "An on-site organic vegetable garden supplies fresh greens for daily salads, and the flat, level ground layout makes the camp an effective solution for guests with mobility preferences.",
    ],
    signatureMemory: "Enjoying a freshly baked pizza at the outdoor dining terrace at dusk, followed by drinks around the campfire while discussing elephant encounters under a clear starlit sky.",
    expectationManagement: "Guests should expect a vibrant, mid-tier tented resort with 73 tents rather than a secluded boutique camp. Dining follows a structured buffet model, Wi-Fi is limited to public spaces, and the camp sits just outside the national park boundary.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family, first-time safari traveler, or group seeking a high-value, reliable tented camp with direct Kilimanjaro views, a swimming pool, and quick access to Kimana Gate.",
    ],
    doNotRecommendConditions: [
      "Client demands absolute privacy, in-tent Wi-Fi, à la carte fine dining",
      "Private plunge pools",
      "Exclusive boutique footprint (under 10 tents)",
    ],
    confidenceLevel: "Medium", // per source — requires clear positioning regarding resort scale and buffet format
    competitiveAdvantage: "Excellent price-to-value ratio for canvas accommodations paired with a 2-minute drive to Kimana Gate and an on-site organic garden.",
    mainLimitation: "High tent count (73 units) and high-density buffet dining hall dynamics during peak season.",
    positioningSummary: "A lively, logistically seamless safari resort blending classic canvas accommodations with robust amenities, making it a reliable, high-value opening immersion for families and first-time travelers targeting Amboseli's iconic views.",
  },

  pairings: [
    { pairedEntity: "Kilaguni Serena or Ol Donyo Lodge, Tsavo West / Chyulu Hills", pairingCategory: "ecosystem", rationale: "Strong geological contrast from volcanic lava flows and subterranean springs." },
    { pairedEntity: "Mara Plains or Angama Mara, Maasai Mara", pairingCategory: "regional", rationale: "Transitions from Amboseli's elephant plains into high-density predator territory." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Kibo Safari Camp corporate documentation", "Kenya Wildlife Service (KWS) gate access logs", "Regional tour operator feedback", "Field inspection reports"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar power battery backup duration during extended wet-season overcast periods — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
      "'Students' ideal traveler category preserved from existing DB — not corroborated by this source, worth re-verifying in a future research pass",
    ],
  },
};