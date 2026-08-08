// data/knowledge-base/naivasha/hotel-chambai-safari.ts
export const hotelChambaiSafari = {
  id: "hotel-chambai-safari", // NEW lodge, no existing DB record
  name: "Hotel Chambai Safari",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Karagita Zone, Moi South Lake Road Axis",
  ecosystem: "Great Rift Valley / Lake Naivasha Acacia Woodlands / South Lake Corridor",
  propertyType: "Economy Business & Expedition Base Hotel",
  accommodationStyle: "Modern multi-story masonry hotel block featuring functional guest rooms and self-catering apartments with private balconies.",
  locationDetail: "Karagita zone, direct tarmac frontage along Moi South Lake Road.",
  nearestGate: "Elsa Gate (Hell's Gate National Park) / Crescent Island Sanctuary Entry",
  nearestAirstrips: ["Naivasha Airstrip"],
  accessibilityNotes: "Accessible year-round via fully paved tarmac along Moi South Lake Road. Internal vertical transit across upper floors and multi-bedroom apartments relies entirely on central staircases (no elevator infrastructure).",
  priceRangeMinUsd: 45,
  priceRangeMaxUsd: 85,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — $65 midpoint folds into Value per governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara National Reserve or Lake Elementaita (ecosystem contrast pairing)",
    "Aberdare High-Altitude Forest or Laikipia Conservancies (regional pairing)",
    "Lenchada Tourist Camp (experience contrast pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Social", "Adventurous", "Peaceful"], // corrected from source doc's "Attentive | Functional | Urban-Suburban" — none valid vocabulary
    energyType: ["Adventure", "Transit Convenience"], // corrected from source doc's "Corporate Networking | High-Transit Expeditionary"; corporate-networking dimension dropped per standing gap, already covered by the Deep-Work Sovereign archetype below
    experiencePace: "Fast", // normalized from source doc's "Fast-paced"
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort", // source doc's "Budget Business" is not valid vocabulary; mapped per founder confirmation, same pattern as Hillcourt and Buraha Zenoni
    journeyRole: "Opening Immersion", // resolved directly — source doc's "Opening Immersion (Activity-Focused Base)" is already canonical; the alternate "Economy Link / Gateway Stopover" is not. FLAG: this makes Naivasha 2 of 2 Opening Immersion so far (Avian Court Hotel was also Opening Immersion) — an emerging concentration pattern worth watching closely on lodge #3.
    idealTravelersPrimary: ["Bleisure Explorers", "Students", "Families", "Solo Explorers"],
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 5, authenticityScore: 3, premiumScore: 2,
    adventureScore: 7, privacyScore: 4, wildlifeExperienceScore: 2,
    culturalImmersionScore: 3, familySuitabilityScore: 6, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "1.5–2 hours overland from Nairobi (90 km); 15–20 minutes road transfer from Naivasha Airstrip.",
    seasonalAccessibility: "Fully accessible year-round without wet-season vehicle access issues due to tarmac frontage.",
    rainySeasonImpact: "None reported — tarmac frontage avoids wet-season access issues.",
    electricitySystem: "24/7 continuous municipal grid power backed up by an on-site diesel generator system.",
    powerReliability: "Standard in-room electrical outlets for continuous device charging.",
    waterReliability: "High-pressure hot water delivered via dedicated electric/solar boiler units serving private en-suite tiled bathrooms.",
    internetAvailability: "High-speed Wi-Fi throughout all guest rooms, dining areas, and conference spaces. Strong 4G/LTE cellular signal across Safaricom and Airtel networks.",
    mobileNetwork: "Strong Safaricom and Airtel 4G/LTE coverage.",
    medicalAccess: "On-site basic first aid. Emergency medical care available at private clinics and Naivasha Sub-County Hospital in Naivasha CBD (10–15 minutes drive).",
    childFriendly: true, // "Moderate" per source — self-catering apartments family-friendly, but stairs require supervision
    mobilityFriendly: false, // "Low" per source — multi-story masonry layout lacks elevator infrastructure
    operationalLimitations: [
      "Lack of direct waterfront/lake frontage",
      "Absence of an on-site leisure swimming pool or large gardens",
      "No elevator access for mobility-impaired guests",
      "Ambient suburban/roadside traffic audio during peak daytime hours",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Deep-Work Sovereign", matchStrength: "Strong",
      reasoning: "High-speed Wi-Fi, continuous power, business desk setups, and clean, predictable environments allow seamless remote work between quick adventure outings.",
      supportingSignals: ["High-speed Wi-Fi and business desk setups", "Predictable, clean environment"],
      mismatchConditions: ["Absence of premium executive lounges or spa facilities for evening leisure"] },
    { fitType: "ideal", category: "Students", archetype: "The Bonded Cohort", matchStrength: "Strong",
      reasoning: "Highly economical price bracket ($45–$85/night) combined with 2-Bedroom Self-Catering Apartments allows budget splitting while retaining fast access to Hell's Gate cycling and Mount Longonot hikes.",
      supportingSignals: ["Budget-splitting self-catering apartments", "Fast access to Hell's Gate and Mount Longonot"],
      mismatchConditions: ["Lack of sprawling communal lawns or pool social areas"] },
    { fitType: "ideal", category: "Solo Explorers", archetype: "The Autonomous Hunter", matchStrength: "Strong",
      reasoning: "Provides a safe, secure, cost-effective, and logistically simple base camp for active day trips without paying excessive single-occupancy safari lodge supplements.",
      supportingSignals: ["Cost-effective single-occupancy base camp", "Simple, secure logistics"],
      mismatchConditions: ["Urban-suburban atmosphere lacks romantic or wild bush ambiance"] },
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "Strong",
      reasoning: "Self-catering multi-room apartments allow price-sensitive families to manage their own meal prep and accommodate children safely in a town-edge setting.",
      supportingSignals: ["Self-catering multi-room apartments", "Price-sensitive family framework"],
      mismatchConditions: ["Staircases require vigilant monitoring of toddlers, and there is no on-site swimming pool"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Concrete multi-story town hotel structure, lack of direct lake access, absence of private plunge pools, and proximity to road traffic completely destroy romantic safari expectations.",
      supportingSignals: [], mismatchConditions: ["Total failure to deliver romantic wilderness isolation, aesthetic elegance, or luxury pampering"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "Utilitarian budget infrastructure, simple hotel dining, lack of private safari vehicle fleets, and town-edge positioning fall far below luxury operational standards.",
      supportingSignals: [], mismatchConditions: ["Severe expectation mismatch regarding room finishes, culinary execution, and personalized concierge services"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "No on-site wildlife movement, hides, or natural safari backdrops; requires packing up gear and commuting off-site for every photographic opportunity.",
      supportingSignals: [], mismatchConditions: ["Zero spontaneous photography windows from guest balconies or room perimeters"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "Source doc's 'Opening Immersion (Activity-Focused Base)' is already canonical; the alternate 'Economy Link / Gateway Stopover' is not, so this resolves directly without a founder judgment call. This is lodge #2 of the Naivasha batch and the second consecutive Opening Immersion (Avian Court Hotel was #1) — flagged as an emerging concentration pattern to watch on lodge #3, similar in shape to the earlier Amboseli pattern.",
    whatShouldComeBefore: "Overland arrival from Nairobi (1.5–2 hours) or long-haul flight arrival. Serves as a low-cost, high-efficiency staging anchor at the start of a circuit.",
    whatShouldComeAfter: "Transition into deep bush canvas camps (e.g., Maasai Mara, Samburu) or higher-tier wilderness lodges as the itinerary progresses.",
    emotionalTransitionRationale: "Focuses initial travel energy into high-exertion active adventures (cycling, trekking) while keeping budget overhead minimal.",
  },

  narrative: {
    whyChosen: "Hotel Chambai Safari is the reference example for a low-cost, high-efficiency multi-sport staging base: an economy hotel block that trades resort leisure infrastructure for unmatched cost-per-key value and fast connectivity.",
    bestUsedFor: "The client is an active adventure traveler, student group, bleisure worker, or price-sensitive family needing a clean, safe, and highly affordable base camp ($45–$85/night) with strong Wi-Fi and fast access to Naivasha's national parks.",
    lessSuitableFor: "The client is a honeymooner, high-net-worth safari traveler, or wilderness purist who demands open-canvas living, direct lake frontage, swimming pools, or wild animals on-site.",
    journeyPositionNote: "Opening Immersion — a low-cost, high-efficiency staging anchor that focuses initial travel energy into high-exertion active adventures before escalating to higher-tier wilderness lodges.",
    overview: "Hotel Chambai Safari is an ultra-functional, high-value 23-room economy property positioned along Moi South Lake Road in Naivasha's Karagita zone. Built as a multi-story concrete hotel block with self-catering apartments, it trades canvas romance and waterfront grounds for low-cost operational efficiency, pristine cleanliness, and fast digital connectivity.",
    emotionalFeel: "Predictable, secure, and low-stress functionality. The atmosphere mirrors a clean, suburban business-and-transit hotel where returning from dusty, high-intensity outdoor activities is met with white linens, high-pressure hot water, and fast internet.",
    sensorySignature: {
      visual: ["Clean, multi-story masonry structure with large windows overlooking local acacia woodlands and the active South Lake road corridor"],
      auditory: ["Quiet interior guest rooms shielded from main road movement", "Distant local traffic", "Morning garden bird calls"],
      olfactory: ["Freshly brewed Kenyan coffee", "Toasted bread", "Rich breakfast stews from the ground-floor restaurant"],
    },
    positiveSignals: [
      "Outstanding price-to-quality ratio: spotless, modern rooms and apartments at an unbeatable budget price point ($45–$85/night)",
      "Highly rated breakfast execution: consistently praised for generous, fresh, and high-quality morning meal service",
      "Excellent digital connectivity: dependable, fast Wi-Fi across all guest units",
      "Strategic multi-sport staging: immediate, low-friction road access to Hell's Gate National Park, Crescent Island, and Lake Naivasha boat launches",
    ],
    negativeSignals: [
      "Lack of direct lake/wilderness frontage: located off the water line without direct lake views or wildlife grazing on grounds",
      "Absence of leisure pool/spa: no swimming pool or expansive resort gardens for midday lounging",
      "No elevator access: multi-story building layout requires climbing internal stairs to reach upper rooms and apartments",
      "Suburban town sounds: proximity to the South Lake corridor introduces occasional localized traffic or municipal audio",
    ],
    hiddenGems: [
      "Securing the Two-Bedroom Self-Catering Apartments with private balconies provides an exceptionally affordable, spacious base for small families, friend groups, or research teams — allowing private meal preparation and group lodging while maintaining immediate access to Naivasha's adventure hubs.",
    ],
    signatureMemory: "Completing a 20 km bicycle safari through Hell's Gate Gorge and returning to a high-pressure hot shower, followed by a hearty dinner and seamless video uploads over high-speed Wi-Fi.",
    expectationManagement: "Travelers must understand this is an urban-suburban budget hotel, not a luxury safari resort or waterfront lodge. It has no swimming pool, no direct lake frontage, and no elevator.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is an active adventure traveler, student group, bleisure worker, or price-sensitive family needing a clean, safe, and highly affordable base camp ($45–$85/night) with strong Wi-Fi and fast access to Naivasha's national parks.",
    ],
    doNotRecommendConditions: [
      "The client is a honeymooner, high-net-worth safari traveler, or wilderness purist who demands open-canvas living, direct lake frontage, swimming pools, or wild animals on-site.",
    ],
    confidenceLevel: "High", // per source — "High Confidence (for budget, transit, and corporate/adventure frameworks)"
    competitiveAdvantage: "Lowest cost-per-key for clean, modern room and apartment accommodation along the Moi South Lake Road corridor.",
    mainLimitation: "Complete lack of resort leisure infrastructure (no pool, no direct lake edge, no elevator).",
    positioningSummary: "A clean, exceptionally affordable modern town-edge hotel along Naivasha's South Lake corridor, offering reliable room comforts and fast connectivity for adventure-focused and business travelers.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara National Reserve or Lake Elementaita", pairingCategory: "ecosystem", rationale: "Transitioning from an active multi-sport valley base into open predator savannahs builds a dynamic narrative progression." },
    { pairedEntity: "Aberdare High-Altitude Forest or Laikipia Conservancies", pairingCategory: "regional", rationale: "Balances urban-suburban valley adventure with high-wilderness conservation landscapes." },
    { pairedEntity: "Lenchada Tourist Camp", pairingCategory: "experience", rationale: "Gives travelers both town-edge convenience and authentic bush camping." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator technical filings", "Field geographic surveys", "Regional hospitality registries", "Traveler audit reports"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Year of initial property construction — explicitly flagged REQUIRES_VERIFICATION in source",
      "Exact decimal GPS coordinates — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};