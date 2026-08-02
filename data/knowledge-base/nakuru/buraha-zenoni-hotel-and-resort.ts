// data/knowledge-base/nakuru/buraha-zenoni-hotel-and-resort.ts
export const burahaZenoniHotelAndResort = {
  id: "buraha-zenoni-hotel-and-resort", // NEW lodge, no existing DB record
  name: "Buraha Zenoni Hotel & Resort",
  country: "Kenya",
  region: "Nakuru",
  subRegion: "Barnabas District",
  ecosystem: "Rift Valley Lake / Urban Edge / Lake Nakuru Buffer Zone",
  propertyType: "Upscale Urban Boutique Hotel / Road-Trip Transit Base",
  accommodationStyle: "Contemporary concrete boutique hotel rooms and suites featuring modern furnishings, private en-suite bathrooms, and pool or garden views.",
  locationDetail: "Barnabas suburban commercial node, along the primary A104 highway artery.",
  nearestGate: "Lanet Gate, Lake Nakuru National Park (4 km / 10–15 minutes drive)",
  nearestAirstrips: ["Naishi Airstrip (inside Lake Nakuru National Park)", "Nakuru Airport (Lanet)"],
  accessibilityNotes: "Fully accessible year-round via the paved A104 main highway artery. Multi-story concrete layout with stairs and paved central courtyard; easy access for all standard 2WD and 4WD vehicles.",
  priceRangeMinUsd: 35,
  priceRangeMaxUsd: 70,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — $52.5 midpoint folds into Value per governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara tented camp or Soysambu/Elmenteita private conservancy (ecosystem contrast pairing)",
    "Aberdares forest retreat or Lake Naivasha sanctuary (regional decompression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Social", "Playful", "Adventurous"], // corrected from source doc's "Energetic | Vibrant | Social | Urban-Accessible" — only Social was valid vocabulary
    // GOVERNANCE UPDATE: "Transit Convenience" newly accepted as a formal SWA-DATA-002 Energy
    // Type value (alongside the existing 10 canonical values), for lodges whose primary
    // functional driver is logistical/road-trip convenience rather than a wilderness or
    // wellness experience. First applied here. Corrected from source doc's non-canonical
    // "High-Energy | Urban Transit | Connected".
    energyType: ["Family Connection", "Transit Convenience"],
    experiencePace: "Fast", // confirmed
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort", // source doc's "Contemporary Luxury (Budget Tier)" is not valid vocabulary; mapped per founder confirmation
    journeyRole: "Recovery", // resolved from source doc's non-canonical "Adventure Transition / Logistical Waypoint" — doc's own "soft landing," "operational launchpad before entering deep nature" language mirrors Hillcourt's Recovery framing; property has zero on-site wildlife experience
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Bleisure Explorers"], // "Digital Nomads / Bleisure Travelers" and "Overland Road-Trippers" are non-canonical categories, folded into Bleisure Explorers
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 3, authenticityScore: 4, premiumScore: 4,
    adventureScore: 4, privacyScore: 2, wildlifeExperienceScore: 5,
    culturalImmersionScore: 4, familySuitabilityScore: 8, comfortScore: 6,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2.5–3 hours overland from Nairobi via the A104 highway (~150 km); 10–15 minutes road transfer to Lanet Gate.",
    seasonalAccessibility: "Fully open year-round with no road weather constraints due to paved highway positioning.",
    rainySeasonImpact: "None reported — paved highway positioning avoids seasonal road degradation.",
    electricitySystem: "24/7 continuous grid power supply backed up by a central automatic diesel generator.",
    powerReliability: "Uninterrupted electricity across all units.",
    waterReliability: "Continuous municipal and borehole water supply equipped with electric and solar water heating systems for hot showers.",
    internetAvailability: "Excellent 4G/LTE cellular coverage across all major networks (Safaricom/Airtel) plus property-wide complimentary high-speed Wi-Fi.",
    mobileNetwork: "Excellent Safaricom and Airtel 4G/LTE coverage.",
    medicalAccess: "On-site basic first aid. Immediate access to major tertiary hospitals in Nakuru City (e.g., Nakuru Level 5 Hospital, Mediheal Hospital, 10–15 minutes drive).",
    childFriendly: true, // "High" per source
    mobilityFriendly: false, // "Moderate to Low" per source — multi-story room blocks lack elevator infrastructure
    operationalLimitations: [
      "Lack of in-room air conditioning (relies on natural ventilation)",
      "Severe nocturnal noise bleed from on-site bar/nightclub",
      "Acoustic echo through corridors",
      "Non-traditional room layouts in select units",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Seeks maximum logistical utility and quick early-morning access to Lake Nakuru National Park without paying premium park-lodge prices.",
      supportingSignals: ["10-15 minute proximity to Lanet Gate", "Budget-tier pricing"],
      mismatchConditions: ["Must accept urban town noises and lack of wilderness bush atmosphere"] },
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed the real archetype name \"The Bonded Cohort\" under an invented category (\"Families & Groups\") — but Bonded Cohort actually belongs to Students, and the fit description doesn't match a Students use case. Remapped to The Multi-Generational Legacy Family per founder confirmation, supported by highly affordable multi-bed setups, secure gated parking, a children's play area, and a swimming pool providing an effortless 1-night family transit hub.",
      supportingSignals: ["Multi-bed family setups", "Gated play area and pool"],
      mismatchConditions: ["On-site nightclub audio can interfere with early bedtimes for young children"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Deep-Work Sovereign", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Connected Nomad\"); mapped to The Deep-Work Sovereign per founder confirmation, supported by high-speed Wi-Fi, crisp corporate dining areas, and reliable power making it an ideal digital pit-stop to work and recharge on a Rift Valley driving loop.",
      supportingSignals: ["High-speed Wi-Fi", "Reliable power and corporate dining areas"],
      mismatchConditions: ["Evening leisure noise prevents early-to-bed quiet hours"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Urban suburban backdrop, multi-story courtyard exposure, thin walls, and high-volume late-night lounge music completely destroy romantic isolation.",
      supportingSignals: [], mismatchConditions: ["Guest dissatisfaction due to noise pollution, lack of private plunge pools, and total absence of bush romance"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "Budget urban construction, basic self-service/boutique amenities, and lack of luxury safari branding fall far below high-end expectations.",
      supportingSignals: [], mismatchConditions: ["Mismatch between luxury safari expectations and an urban town hotel experience"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Constant ambient activity, thin concrete acoustics, late-night DJ music, and family courtyard chatter impede psychological decompression.",
      supportingSignals: [], mismatchConditions: ["Complete failure to deliver mental recovery or quiet sleep"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 Night",
    recommendedPositionNote: "Source frames this as non-canonical 'Adventure Transition / Logistical Waypoint'; resolved to Recovery per founder confirmation — same journeyRole as Hillcourt Resort and Spa (also Nakuru). This is lodge #4 of the Nakuru batch (Opening Immersion, Recovery, Reflection, Recovery) — Recovery now appears twice. Two of four lodges sharing a value is not yet a strong concentration signal, but worth tracking if a third Recovery lodge appears in this region.",
    whatShouldComeBefore: "Overland transit from Nairobi (2.5–3 hours) or a drive from the Western Highlands. Serves as a soft landing to wash off road dust and check emails.",
    whatShouldComeAfter: "An immersive, quiet wilderness camp (e.g., Maasai Mara tented camp or a private Lake Naivasha/Soysambu conservancy sanctuary).",
    emotionalTransitionRationale: "Shifts travelers from urban road transit to pre-safari readiness, serving as an operational launchpad before entering deep nature.",
  },

  narrative: {
    whyChosen: "Buraha Zenoni is the reference example for a high-utility urban transit base: hyper-functional, socially energetic, and positioned minutes from Lanet Gate without any pretense of bush isolation.",
    bestUsedFor: "Budget travelers, road trippers, domestic families, or corporate/bleisure travelers needing a clean, safe, 1-night transit base with fast Wi-Fi and quick 10-minute access to Lake Nakuru National Park.",
    lessSuitableFor: "The client is a honeymooner, luxury purist, sensitive sleeper, or executive seeking silent, star-lit wilderness seclusion.",
    journeyPositionNote: "Recovery — an operational launchpad for travelers to recharge devices, wash off road dust, and access the park early, reserving deep emotional decompression for subsequent quiet bush lodges.",
    overview: "Buraha Zenoni Hotel & Resort strips away any illusion of isolated African bush romance and replaces it with hyper-functional, modern urban hospitality. Located in the Barnabas district of Nakuru along the primary highway artery, it is a contemporary boutique town hotel structured around a multi-story layout with a compact central courtyard, pool, and children's play area.",
    emotionalFeel: "Lively, accessible, corporate-efficient by day, and festive/social by night. It feels like an energetic Kenyan crossroads rather than a quiet nature sanctuary.",
    sensorySignature: {
      visual: ["Clean architectural lines, multi-story guest wings surrounding a courtyard pool, and sweeping panoramic views of the Rift Valley from the rooftop terrace"],
      auditory: ["Daytime corporate chatter and children playing on the trampoline", "High-volume bass and DJ music from the lounge/bar in the evening"],
      olfactory: ["Aromatic international and traditional Kenyan cuisine rising from the rooftop kitchen", "Crisp suburban air"],
    },
    positiveSignals: [
      "Exceptional customer service culture: staff repeatedly commended for proactive friendliness and efficiency",
      "Rooftop dining asset with excellent panoramic views, fresh breezes, and high-quality food options",
      "Flawless cleanliness: spotless rooms, pristine bathrooms, and fresh linens well above standard budget-tier expectations",
      "Logistical proximity to Lake Nakuru: 10–15 minutes (~4 km) from Lanet Gate, eliminating morning drive friction",
    ],
    negativeSignals: [
      "Severe late-night noise: on-site lounge and nightclub operations generate loud music and bass late into the night",
      "Acoustic echoes: concrete and tile corridors transmit hallway conversations and poolside noise directly into rooms",
      "No climate control: rooms lack air conditioning, which can lead to stuffiness during hotter months",
      "Bizarre layout anomalies: certain rooms feature odd space utilization, such as dual plumbing fixtures dividing living space",
    ],
    hiddenGems: [
      "Combines high-security gated parking, genuinely high-speed Wi-Fi, spotless cleanliness, and a panoramic rooftop restaurant at an accessible price point ($35–$70/night), making it a high-utility hub for modern digital nomads or road-trippers.",
    ],
    signatureMemory: "Sipping a cold drink on the breezy rooftop terrace at sundown while gazing across the Rift Valley hills after a successful day of rhino tracking in Lake Nakuru National Park.",
    expectationManagement: "Guests must recognize this is a bustling, modern urban town hotel on a major highway, NOT an isolated safari bush lodge. Expect evening entertainment noise and standard town ambient activity.",
    idealNights: "1",
  },

  recommendationNotes: {
    recommendConditions: [
      "Budget traveler, road tripper, domestic family, or corporate/bleisure traveler needing a clean, safe, 1-night transit base with fast Wi-Fi and quick 10-minute access to Lake Nakuru National Park.",
    ],
    doNotRecommendConditions: [
      "Honeymooner, luxury purist, sensitive sleeper, or executive seeking silent, star-lit wilderness seclusion.",
    ],
    confidenceLevel: "High", // per source — "High (With Strict Caveats)"
    competitiveAdvantage: "Superior cleanliness, fast Wi-Fi, and a rooftop restaurant at a low budget price point within 10–15 minutes of Lanet Gate.",
    mainLimitation: "On-site late-night entertainment noise and thin-wall corridor acoustics.",
    positioningSummary: "A clean, contemporary urban boutique hotel offering exceptional service, vibrant rooftop dining, and immediate access to Lake Nakuru National Park, serving as an ideal high-utility transit stop for families and budget-conscious road trippers.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara tented camp or a private conservancy like Soysambu/Elmenteita", pairingCategory: "ecosystem", rationale: "Creates a striking 'town-to-country' contrast." },
    { pairedEntity: "Aberdares forest retreat or Lake Naivasha sanctuary", pairingCategory: "regional", rationale: "Balances urban energy with nature decompression." },
    { pairedEntity: "Off-grid wilderness lodges after a Lake Nakuru day drive", pairingCategory: "experience", rationale: "Pairs an active, fast-paced day drive in Lake Nakuru National Park with an evening rooftop dinner before moving on to quieter properties." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Property operational profiles", "Guest sentiment logs", "Regional geographical access maps", "Swafaris itinerary mapping"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Room count exact breakdown across room categories — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};