// data/knowledge-base/nakuru/sawela-capella-lodge.ts
export const sawelaCapellaLodge = {
  id: "sawela-capella-lodge", // NEW lodge, no existing DB record
  name: "Sawela Capella Lodge",
  country: "Kenya",
  region: "Nakuru",
  subRegion: "Lake Elementaita, Nakuru County (rolling acacia plains bordering Soysambu Conservancy)",
  ecosystem: "Rift Valley lake ecosystem — rolling acacia plains overlooking Lake Elementaita, bordered by the Soysambu Conservancy.",
  propertyType: "High-End Contemporary Resort & Boutique Sanctuary",
  accommodationStyle: "Oversized glass-and-stone contemporary suites and cottages with massive floor plans, premium bedding, sleek tiling, expansive indoor seating, and private verandas.",
  locationDetail: "Set back on the rolling acacia plains overlooking Lake Elementaita, off the Mbaruk exit from the Nairobi-Nakuru highway.",
  nearestGate: "Soysambu Conservancy Main Gate / Lanet Gate (Lake Nakuru National Park)",
  nearestAirstrips: ["Naivasha Airstrip", "Loldia Airstrip", "Soysambu Airstrip"],
  accessibilityNotes: "Accessible year-round via paved highway (Nairobi-Nakuru highway) with a short turn-off at Mbaruk onto maintained access tracks. Easily navigable by standard 2WD or 4WD vehicles. Paved internal walkways and gently sloped manicured lawns connect rooms to main dining and lounge facilities.",
  priceRangeMinUsd: 300,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // corrected from source doc's "Premium" — $375 midpoint falls in $300–499 Mid-Range band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara National Reserve or Laikipia (ecosystem contrast pairing)",
    "Lake Nakuru National Park or Soysambu Conservancy (regional pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Restorative"], // corrected from source doc's "Cinematic | Elegant | Peaceful" — Cinematic not valid vocabulary; substituted per founder confirmation
    energyType: ["Wellness", "Luxury Escape"], // corrected from source doc's "Decompression Retreat | Quiet Luxury"
    experiencePace: "Slow", // confirmed
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Modern Luxury", // source doc's "Contemporary Luxury" mapped to closest detailed value per founder confirmation
    // GOVERNANCE DECISION: journeyRole set to "Mid-Journey Transition", a newly accepted
    // SWA-DATA-002 value (see memory log) for lodges functioning primarily as a bridge/
    // connector between two distinct regions or ecosystems. Source doc offered a genuine
    // three-way conflict ("Opening Immersion / Recovery & Reset Anchor / Mid-Journey
    // Transition") where, unlike prior lodges, more than one reading was already valid
    // canonical vocabulary — founder chose to formally expand the ontology rather than
    // force a fit into the existing 5 values (+ Safari Climax precedent).
    journeyRole: "Mid-Journey Transition",
    idealTravelersPrimary: ["Burned-out Executives", "First-Time Safari Travelers", "Honeymooners", "Families"], // "Slow Travelers & Families" compound label dropped — no supporting archetype for Slow Travelers; the one archetype offered mapped to Families instead
    idealTravelersSecondary: [],
    intensityScore: 2, relaxationScore: 9, authenticityScore: 6, premiumScore: 8,
    adventureScore: 4, privacyScore: 8, wildlifeExperienceScore: 7,
    culturalImmersionScore: 4, familySuitabilityScore: 9, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Extremely Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "1.5 to 2 hours overland from Nairobi via the Nairobi–Nakuru highway (~127 km); 30-minute flight from Wilson Airport to Naivasha Airstrip followed by a 30-minute road transfer.",
    seasonalAccessibility: "Open year-round with zero mud/impassability issues. Manicured lawns and stone drainage keep walkways clean during rains.",
    rainySeasonImpact: "Minimal — Lake Elementaita's shoreline mudflats fluctuate season to season, requiring controlled walking access to the water's edge.",
    electricitySystem: "Continuous 24/7 grid electricity backed by automated solar and heavy-duty generators.",
    powerReliability: "In-suite charging ports, international sockets, climate control, and modern fixtures run uninterrupted.",
    waterReliability: "High-pressure hot water available 24/7, powered by solar and high-efficiency boilers feeding oversized rainfall showers.",
    internetAvailability: "Dedicated high-speed fiber Wi-Fi across all private suites, public lounges, and grounds. Strong 4G/5G Safaricom and Airtel cellular data.",
    mobileNetwork: "Strong Safaricom and Airtel 4G/5G cellular data coverage.",
    medicalAccess: "On-site first aid. Nakuru town private medical centers (e.g., Nakuru Level 5, War Memorial Hospital) and Naivasha hospitals within a 20–30 minute drive. Emergency air evacuation available via Naivasha Airstrip.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "High" per source — level ground, paved stone pathways, step-free access
    operationalLimitations: [
      "Potential atmosphere compromise during simultaneous corporate retreats or conference events on communal grounds",
      "Set back from direct stepping-stone access to the lake shore",
      "Occasional structured buffet dining during high occupancy periods",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Smooth 2-hour drive from Nairobi, fast fiber Wi-Fi, dedicated spa facilities, and manicured peaceful grounds allow immediate decompression without roughing it.",
      supportingSignals: ["Fast fiber Wi-Fi", "Dedicated spa facilities"],
      mismatchConditions: ["Must verify event schedules to avoid major corporate retreat overlap"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Provides a gentle, highly secure intro to Kenya. Allows travelers to shake off jet lag in a 5-star suite with familiar comforts before tackling rough bush tracks.",
      supportingSignals: ["5-star gentle introduction", "Secure, familiar comforts"],
      mismatchConditions: ["Does not deliver lions roaring right outside a canvas tent wall"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Oversized Capella suites with panoramic Rift Valley views, quiet garden buffer zones, and private lakeside/bush dining setups.",
      supportingSignals: ["Panoramic Rift Valley views", "Private dining setups"],
      mismatchConditions: ["Set back from the water's edge rather than sitting directly on the shoreline"] },
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"Active Senior Explorers & Multi-Generational Families\") under a compound, partly unsupported category (\"Slow Travelers & Families\"); mapped to The Multi-Generational Legacy Family per founder confirmation — level stone walkways, step-free access, reliable medical proximity, and safe enclosed grounds solve all mobility and safety concerns.",
      supportingSignals: ["Step-free access throughout", "Reliable medical proximity"],
      mismatchConditions: ["Lacks the raw, unscripted bush adventure of unfenced wilderness camps"] },
    // NOTE: source doc listed two incompatible-archetype entries — "The Heritage Purist
    // (Vintage Bush Safari Enthusiasts)" and "The High-Octane Predator Tracker" — both dropped
    // per founder confirmation, as neither the category nor the archetype exists in the
    // ontology. This lodge currently has zero poorFit entries — a genuine data gap, not
    // force-filled.
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as a genuine three-way conflict: 'Opening Immersion / Recovery & Reset Anchor / Mid-Journey Transition' — unlike prior lodges, more than one of these readings was already valid canonical vocabulary. Founder chose to formally add Mid-Journey Transition as a new SWA-DATA-002 value rather than force a fit (see governance note in experienceDna.journeyRole). Nakuru batch tally after this lodge: Opening Immersion, Recovery, Reflection, Mid-Journey Transition — four distinct values across four lodges, no concentration pattern.",
    whatShouldComeBefore: "Direct international flight arrival into Nairobi (JKIA) or a high-intensity northern overland safari (Samburu/Laikipia).",
    whatShouldComeAfter: "High-octane, predator-dense southern savannahs (e.g., Maasai Mara National Reserve) or a classic canvas wilderness camp.",
    emotionalTransitionRationale: "Shifts travelers from high-stress travel states (jet lag, bumpy overland transit) into an expansive, meditative calm, acclimatizing them to Kenya's altitude and climate.",
  },

  narrative: {
    whyChosen: "Sawela Capella is the reference example for a modern connective-tissue property: a 5-star decompression anchor that smooths the transition between high-stress arrival states and Kenya's more intense wilderness circuits.",
    bestUsedFor: "Corporate executives, honeymooners, first-time safari travelers, or families seeking modern 5-star suite comfort, smooth road logistics, fast Wi-Fi, and low travel friction near Nairobi.",
    lessSuitableFor: "The client is a purist bush adventurer seeking raw canvas living, nocturnal predator calls outside their tent, or an uncompromised rustic eco-safari.",
    journeyPositionNote: "Mid-Journey Transition — a connective-tissue property bridging high-stress arrival states and Kenya's more intense wilderness circuits, formally adopted as a new SWA-DATA-002 Journey Role value.",
    overview: "Sawela Capella Lodge represents a strategic architectural departure from traditional thatched bush camps, standing as a pristine sanctuary of contemporary luxury on the plains of Lake Elementaita. Set back against the rolling acacia landscape overlooking the lake and Soysambu Conservancy, it pairs manicured emerald lawns with the raw volcanic backdrop of the Great Rift Valley.",
    emotionalFeel: "Predictable, secure, and deeply restful. Unlike unfenced Mara camps charged with nocturnal predator tension, the night air here feels safe and tranquil. Looking out across the light shifting over Lake Elementaita induces a meditative, slow-paced stillness.",
    sensorySignature: {
      visual: ["Manicured green lawns contrasting against raw volcanic ridges, expansive glass-walled suites, and distant pink hues across Lake Elementaita"],
      auditory: ["Crisp high-altitude breezes through acacia trees", "Morning bird song", "The serene quiet of a protected lake basin"],
      olfactory: ["Freshly cut lawn grass", "Crisp lake air", "Dry acacia wood", "Subtle spa aromatics"],
    },
    positiveSignals: [
      "Oversized modern suites with massive glass-and-stone floor plans, luxury bedding, and sleek contemporary design",
      "Pristine landscaping: meticulously kept lawns creating visual buffers and quiet privacy between suites",
      "Polished service ethos — preemptive, warm, and highly intuitive hospitality matching top international boutique standards",
      "Flawless road logistics: just 1.5 to 2 hours from Nairobi on paved highways",
    ],
    negativeSignals: [
      "Dual leisure/corporate identity: risk of serene luxury being disrupted if a large corporate retreat or wedding occupies common zones simultaneously",
      "Set back from water's edge — positioned on elevated ground for panoramas rather than direct stepping-stone access to the lake shore",
      "Structured dining formats during high-occupancy periods rather than fully customized butler service",
    ],
    hiddenGems: [
      "Elementaita's absolute privacy advantage over heavily commercialized Lake Naivasha — as an uncrowded Ramsar World Heritage site, it delivers the same dramatic Rift Valley scenery with a tiny fraction of the tourist footprint.",
    ],
    signatureMemory: "Sipping fresh morning coffee on your private suite terrace as the sun rises over the volcanic ridges of Soysambu, casting a golden glow across Lake Elementaita while birds chirp in the surrounding acacias.",
    expectationManagement: "Clients must understand that the property is set back from the marshy shoreline and operates as a high-end, manicured resort sanctuary rather than an unfenced, canvas bush camp.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Corporate executive, honeymooner, first-time safari traveler, or family seeking modern 5-star suite comfort, smooth road logistics, fast Wi-Fi, and low travel friction near Nairobi.",
    ],
    doNotRecommendConditions: [
      "Purist bush adventurer seeking raw canvas living, nocturnal predator calls outside their tent, or an uncompromised rustic eco-safari",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "The newest, most spacious contemporary luxury suites in the Elementaita region, backed by flawless highway access from Nairobi.",
    mainLimitation: "Dual corporate/leisure setup and distance set back from the physical water's edge.",
    positioningSummary: "A polished, contemporary luxury sanctuary in the Great Rift Valley, offering expansive modern suites and serene panoramic views of Lake Elementaita — perfectly tailored for travelers seeking a smooth, low-fatigue recovery or transition zone near Nairobi.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara National Reserve or Laikipia", pairingCategory: "ecosystem", rationale: "The manicured, modern, ultra-secure luxury of Sawela Capella balances seamlessly with raw, predator-heavy bush tracking." },
    { pairedEntity: "Lake Nakuru National Park or Soysambu Conservancy", pairingCategory: "regional", rationale: "Keeps Sawela Capella as a restful base camp for rhino tracking or private night drives." },
    { pairedEntity: "Private Lake Elementaita guided walking tour or spa package", pairingCategory: "experience", rationale: "Maximizes the property's wellness and decompression strengths." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Sawela Lodges operational specifications", "Regional geographical surveys", "Field access logs", "Guest experience reviews"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};