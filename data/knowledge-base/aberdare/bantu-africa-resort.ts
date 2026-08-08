// data/knowledge-base/aberdare/bantu-africa-resort.ts
export const bantuAfricaResort = {
  id: "bantu-africa-resort", // NEW lodge, no existing DB record
  name: "Bantu Africa Resort",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Mount Kenya Transition, Central Highlands",
  ecosystem: "Highland foothills / Great Northern Bypass edge (transition zone at the foot of Mount Kenya)",
  propertyType: "Contemporary Highway-Adjacent Family & Conference Resort Complex",
  accommodationStyle: "Contemporary hotel guest rooms, studio/superior rooms, deluxe rooms, and multi-bed family triple rooms.",
  locationDetail: "Off the Marua–Nanyuki highway corridor (Great Northern Bypass), Nyeri area.",
  nearestGate: "Solio Game Reserve Gate (~41 km / 45 minutes); Aberdare National Park Gates (Treetops Gate ~25 km); Mount Kenya National Park Gate",
  nearestAirstrips: ["Nyeri Airstrip (Nyaribo)", "Nanyuki Airstrip (NYK)"],
  accessibilityNotes: "Accessible year-round directly off the paved Marua-Nanyuki highway corridor (Great Northern Bypass). Zero-friction paved driveway access directly into central reception, conference halls, and pool grounds.",
  priceRangeMinUsd: 80,
  priceRangeMaxUsd: 150,
  rawMarketTier: "Budget", // as stated in source doc — retired governance value, folds to Value
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price midpoint ($115) falls below the Value ceiling; also consistent with "Budget" retirement mapping
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Solio Game Reserve (Day Trips)",
    "Chaka Ranch",
    "Ol Pejeta Conservancy (Budget Entry)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Adventurous", "Social"], // both valid canonical values, no correction needed
    energyType: ["Adventure", "Family Connection", "Transit Convenience"], // "High-energy safari" and "Sensory-rich" both non-canonical; replaced per founder decision — Transit Convenience justified by doc's repeated emphasis on frictionless highway positioning as a road-trip breakpoint
    experiencePace: "Fast",
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // founder-confirmed
    journeyRole: "Opening Immersion", // resolved directly — "Adventure Transition / Tactical Base Camp" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Families", "Bleisure Explorers"], // CORRECTED: Slow Travelers dropped (no real archetype supports it here — Biophilic Restorer is a poor fit for this high-stimulus, social profile); Domestic Weekend Leisure Travelers dropped (not a real category); Corporate Conference & Team-Building Groups resolved to Bleisure Explorers
    idealTravelersSecondary: [],
    intensityScore: 8, relaxationScore: 4, authenticityScore: 4, premiumScore: 5,
    adventureScore: 6, privacyScore: 2, wildlifeExperienceScore: 2,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 6,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2–2.5 hours overland from Nairobi (130–150 km); 15–20 minutes road transfer from Nyeri Airstrip.",
    seasonalAccessibility: "Open year-round; completely paved tarmac access prevents seasonal mud issues.",
    rainySeasonImpact: "None on access; high local traffic occurs during Kenyan national holidays and weekend leisure periods instead.",
    electricitySystem: "24-hour continuous primary grid electricity supplemented by high-capacity commercial backup generators.",
    powerReliability: "High",
    waterReliability: "Central municipal/borehole water system providing en-suite hot showers across all room categories.",
    internetAvailability: "Free high-speed Wi-Fi (25+ Mbps) across guest rooms, lounges, and event spaces.",
    mobileNetwork: "Strong 4G/LTE coverage across all cellular networks (Safaricom/Airtel).",
    medicalAccess: "On-site basic first aid; major regional medical centers in Nyeri Town (including Outspan Hospital and Nyeri County Referral Hospital) 10–15 minutes drive.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "High" per source — paved walkways, flat lawn access, ground-floor units, wide event-hall entrances
    operationalLimitations: [
      "Severe acoustic bleed from the on-site youth club/sports bar and nearby highway",
      "Unrefined bathroom layouts in standard categories — tight spaces and awkward formatting",
      "Direct proximity to commercial poultry processing facilities eliminates wilderness atmosphere",
      "High local traffic during Kenyan national holidays and weekend leisure periods",
      "Rooms require structural touch-ups and minor maintenance in finishes",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Unrivaled children's amusement park, safe fenced grounds, Olympic pool, and affordable family triple room configurations keep kids fully engaged.",
      supportingSignals: ["Arabica Theme Park with amusement rides", "Olympic-sized swimming pool", "Multi-bed family triple rooms"],
      mismatchConditions: ["Must accept noisy weekend crowds and non-safari resort aesthetics"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Corporate Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source used an invented archetype (\"The Active Event Strategist\") under an invented category (\"Corporate & Large Social Groups\") — no real archetype by that name exists. Remapped to The Corporate Catalyst, the real Bleisure Explorers archetype, consistent with the same resolution applied to Penety Amboseli Resort's near-identical conference-hall case. Fit: structural capability to host up to 1,200 conference delegates with an on-site helipad, multiple executive boardrooms, and expansive team-building lawns.",
      supportingSignals: ["1,200-delegate conference capacity", "On-site helipad", "Multiple executive boardrooms and team-building lawns"],
      mismatchConditions: ["Lacks high-end executive luxury finishings"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "High-volume youth clubs, thumping bass, conference groups, and family amusement park noise eliminate all romantic wilderness intimacy.",
      supportingSignals: [], mismatchConditions: ["Immediate disappointment with highway noise, commercial crowds, and lack of exclusivity"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "Budget-tier finishes, tight room bathrooms, highway proximity, and commercial resort infrastructure mismatch luxury expectations.",
      supportingSignals: [], mismatchConditions: ["Severe luxury narrative crash if sequenced alongside premium safari lodges"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "Positioned next to an industrial poultry facility and major highway; zero roaming game or wilderness views from rooms.",
      supportingSignals: [], mismatchConditions: ["Commercial noise, high guest density, and lack of peaceful nature prevent mental recovery"] },
    // DROPPED: "The Budget Highway Navigator" under invented category "Slow Travelers / Self-Drive Road-Trippers" — not a real archetype; no real Slow Travelers archetype fits this high-stimulus, social profile; underlying "frictionless highway" concern captured at Energy Type layer via Transit Convenience instead
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion (Adventure Transition / Tactical Base Camp)\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x3 (Treetops Lodge, Rhino Watch Safari Lodge, this lodge), Recovery x1 (Outspan Hotel Nyeri).",
    whatShouldComeBefore: "Direct overland highway arrival from Nairobi (2 hours) following international flight arrival or long highway transits.",
    whatShouldComeAfter: "High-intensity wilderness conservancies in Laikipia (e.g., Ol Pejeta, Lewa) or Samburu National Reserve.",
    emotionalTransitionRationale: "Shifts the traveler from urban transit into a lively, social, high-energy state before they transition into silent deep-bush isolation.",
  },

  narrative: {
    whyChosen: "A high-capacity, highway-adjacent family and conference resort offering a frictionless 1-night road-trip breakpoint with unmatched family entertainment infrastructure for the Central Highlands corridor.",
    bestUsedFor: "Families with young children needing high-energy entertainment, large corporate conference/team-building groups, and value-conscious domestic road-trippers making a highway breakpoint before Laikipia or Samburu.",
    lessSuitableFor: "Luxury honeymooners, burned-out executives, nature photographers, or international safari purists seeking quiet, authentic wilderness connection.",
    journeyPositionNote: "Opening Immersion — strictly a front-end itinerary stopover, never a mid-trip or final destination; sequencing it after an authentic wilderness experience risks a severe luxury-narrative crash.",
    overview: "Bantu Africa Resort behaves not as a secluded wildlife sanctuary, but as a sprawling, high-stimulus contemporary hospitality complex situated on the bustling Marua-Nanyuki highway corridor. The psychological feel is closer to a lively suburban country club than an intimate safari camp.",
    emotionalFeel: "Grounded in entertainment, social accessibility, and high-tempo distraction. The energetic rhythm peaks heavily between Friday and Sunday, feeling protective and familiar to urbanites not yet comfortable with deep-bush silence.",
    sensorySignature: {
      visual: ["Brightly painted amusement rides", "Expansive Olympic swimming pool", "Sprawling multi-building concrete layout", "Distant views of Mount Kenya across highway corridors"],
      auditory: ["Cheerful screams from kids' play zones", "Splashing at the pool", "Thumping bass from the youth club lounge", "Highway traffic along the bypass"],
      olfactory: ["Fresh poolside chlorine", "Roasted coffee beans from the on-site coffee farm tour", "Grilled meats from the sports bar kitchen"],
    },
    positiveSignals: [
      "Exceptionally warm, helpful, highly rated front-line hospitality staff despite the large, busy format",
      "Unrivaled family infrastructure — paid amusement park rides, separate kids' play zones, multi-bed family rooms",
      "Highly accessible highway positioning off the Great Northern Bypass, frictionless tarmac drop-in",
      "Capability to handle up to 1,200 seated guests with multiple executive boardrooms",
    ],
    negativeSignals: [
      "Rooms in need of structural touch-ups, with minor maintenance issues in finishes",
      "Unrefined bathroom architecture in standard/deluxe categories — tight spaces and awkward formatting",
      "Acoustic bleed from the on-site youth club and sports bar into nearby guest rooms",
      "Adjacent industrial poultry facilities and primary highway prevent an untamed safari illusion",
    ],
    hiddenGems: [
      "High-volume family insurance and event scale — capable of hosting large multi-generational family reunions or corporate incentive retreats requiring specialized infrastructure (salon/barber for event prep, Olympic pool for team activities, reliable smart-TV connectivity) that standard boutique safari lodges cannot physically house.",
    ],
    signatureMemory: "Watching children splash in the Olympic pool while sipping locally grown, freshly roasted coffee from the resort's own agri-tourism coffee farm after a smooth drive from Nairobi.",
    expectationManagement: "Travelers must understand that Bantu Africa Resort is a high-energy, contemporary highway-adjacent leisure and conference resort rather than a secluded wilderness safari lodge. Standard rooms retain minor cosmetic touch-up needs, noise levels elevate on weekends due to on-site entertainment venues, and wildlife viewing requires traveling outside the property to nearby parks and reserves.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Domestic leisure travelers, large corporate conference groups, and value-conscious road-trippers",
      "Multi-generational families with young children who specifically demand modern amenities, pools, and high-energy playground entertainment",
    ],
    doNotRecommendConditions: [
      "Luxury honeymooners, burned-out executives, nature photographers, or international safari purists",
      "Anyone seeking quiet luxury, romantic isolation, high-end architectural aesthetics, or an authentic connection with the uncompromised wild",
    ],
    confidenceLevel: "Low", // per source — high risk of dissatisfaction if pitched to premium experiential travelers
    competitiveAdvantage: "Massive bed capacity, Olympic pool, Arabica Theme Park, and helipad right on the main highway corridor at accessible price points.",
    mainLimitation: "High commercial noise, unrefined standard bathroom layouts, room maintenance touch-up needs, and lack of deep-bush atmosphere.",
    positioningSummary: "A high-energy, contemporary highway-adjacent leisure and conference resort built for family entertainment and social networking, serving as a functional, amenity-rich base camp rather than a secluded wilderness retreat.",
  },

  pairings: [
    { pairedEntity: "Solio Game Reserve", pairingCategory: "ecosystem (day trips)", rationale: "A highly logical tactical pairing for cost-conscious or domestic groups — massive, affordable bed capacity and family amenities while remaining positioned for quick vehicle access to elite rhino tracking at Solio during the day." },
    { pairedEntity: "Chaka Ranch", pairingCategory: "regional", rationale: "Allows for a continuous high-adrenaline, family-centric, and adventure-sport-heavy itinerary progression through the Central Highlands." },
    { pairedEntity: "Ol Pejeta Conservancy", pairingCategory: "experience (budget entry)", rationale: "A more affordable base camp for day excursions into Ol Pejeta for travelers who want to see chimpanzees and rhinos but cannot afford premium in-conservancy camp rates." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Regional geographical surveys", "Highway corridor mapping", "Verified guest operational feedback", "Swafaris intelligence database"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Scheduled timeline for soft-goods room maintenance and bathroom architectural updates — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};