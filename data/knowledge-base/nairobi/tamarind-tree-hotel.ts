export const tamarindTreeHotel = {
  id: "tamarind-tree-hotel-nairobi",
  name: "Tamarind Tree Hotel",
  country: "Kenya",
  region: "Nairobi",
  subRegion: "Nairobi (Langata / Karen Periphery)",
  ecosystem: "Urban hub with immediate proximity to an urban wildlife ecotone — bordering the western edge of Nairobi National Park and adjacent to the historic Carnivore grounds",
  propertyType: "Urban Lifestyle Hotel / Contemporary Safari Transit Hub",
  accommodationStyle: "Contemporary safari-lifestyle luxury featuring clean modern lines, bright open-plan interiors, soundproof floor-to-ceiling glass, and local artistic accents",
  locationDetail: "Tamarind Group; 160 modern guest rooms and suites (standard rooms, junior suites, executive suites); established 2018",
  nearestAirstrips: ["Wilson Airport (WIL) — primary, 1.5km/3-5min", "Jomo Kenyatta International Airport (JKIA) — secondary, 18km/20-30min via Southern Bypass"],
  nearestGate: "Nairobi National Park Main Gate (approx. 4km/8 minutes)",
  accessibilityNotes: "Perfectly situated along the Langata Road corridor with direct, low-friction access to the Southern Bypass and Wilson Airport. Features fully paved internal access roads and flat, accessible ground-level entryways.",
  priceRangeMinUsd: 170,
  priceRangeMaxUsd: 280,

  // Per-person pricing ($170-280), doubled per the Manda Bay/Argyle Grand precedent → $340-560,
  // midpoint $450, matching self-stated "Mid" cleanly (Mid-Range: $300-499). No override needed.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Angama Mara", "Sasaab", "Segera House"],

  rawSourceJson: {
    officialBrandName: "Tamarind Tree Hotel",
    yearEstablished: "2018",
    unitBreakdown: "160 modern guest rooms and suites: standard rooms, junior suites, executive suites",
    priceRange: "$170-280 USD per person per night, Full Board / Bed & Breakfast options available.",
  },

  experienceDna: {
    // "Elegant," "Peaceful," "Social" are all canonical as-stated.
    emotionalTone: ["Elegant", "Peaceful", "Social"],

    // Source states "Decompression Retreat | High-Energy Safari." High-Energy Safari is canonical
    // but doesn't fit at all (Adventure score 2/10, Wildlife score 3/10, zero on-site wildlife —
    // this is an urban transit hotel). Founder confirmed applying the same resolution as Argyle
    // Grand Hotel instead: Transit Convenience + Wellness, leading with the property's actual
    // defining trait (Wilson Airport proximity) rather than keeping a canonical-but-mismatched term.
    energyType: ["Transit Convenience", "Wellness"],

    experiencePace: "Balanced", // canonical as-stated

    // "Contemporary Luxury" matches directly and cleanly, same as Argyle Grand Hotel.
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // "Opening Immersion (The Safari Airlock) or Recovery/Reset (The Transit Bridge)" — identical
    // two-term hedge structure to Argyle Grand Hotel. Founder confirmed the same resolution:
    // Opening Immersion as primary. This closes the Nairobi sub-phase and the entire knowledge-base
    // build: Nairobi (2: Opening Immersion x2 — Argyle Grand Hotel, Tamarind Tree Hotel).
    journeyRole: "Opening Immersion",

    // idealTravelersPrimary: clean one-to-one match — all four doc-listed categories align exactly
    // with the four ideal archetypes below, no drops or additions needed.
    idealTravelersPrimary: ["Burned-out Executives", "Families", "First-Time Safari Travelers", "Luxury Adventurers"],
    idealTravelersSecondary: [],

    intensityScore: 4,
    relaxationScore: 8,
    authenticityScore: 7,
    premiumScore: 7,
    adventureScore: 2,
    privacyScore: 5,
    wildlifeExperienceScore: 3,
    culturalImmersionScore: 6,
    familySuitabilityScore: 8,
    comfortScore: 9,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3-5 minutes from Wilson Airport (WIL); 20-30 minutes from Jomo Kenyatta International Airport (JKIA) via Southern Bypass",
    seasonalAccessibility: "100% accessible year-round without seasonal weather constraints due to paved highway connectivity and well-engineered urban infrastructure",
    electricitySystem: "24/7 uninterrupted municipal power supply backed by heavy-duty commercial auto-switch diesel backup generators",
    powerReliability: "High",
    waterReliability: "High — municipal supply augmented by on-site deep-well filtration systems and commercial-grade solar/electric central water heating infrastructure",
    internetAvailability: "Enterprise-grade high-speed Wi-Fi throughout all guest rooms, public lounges, poolside areas, and meeting rooms",
    mobileNetwork: "Full 4G/5G cellular coverage via Safaricom and Airtel networks",
    medicalAccess: "Rapid emergency access to leading private hospitals including The Karen Hospital (10 minutes) and The Nairobi Hospital Outpatient Centre (Galleria/Capital Centre); on-site first aid resources",
    childFriendly: true, // "High"
    mobilityFriendly: true, // "High"
    operationalLimitations: [
      "Early standard check-out time (10:00 AM) can create friction for clients with late-night international flights",
      "Potential noise/bass bleed in rear ground-floor rooms during weekend events at the adjacent Carnivore grounds",
      "Occasional lobby congestion from local corporate conferences",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "High",
      reasoning: "Unbeatable 3-minute proximity to Wilson Airport removes all fear of missing early morning bush flights. Modern, predictable 4-star-plus amenities offer a comfortable, reassuring landing in Kenya.",
      supportingSignals: ["Premium score 7/10", "3-minute Wilson Airport proximity", "Predictable 4-star-plus amenities"],
      mismatchConditions: ["Lacks traditional \"colonial romance\" or raw canvas bush aesthetics"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Family Steward," not canonical. 5th recurrence
    // of this exact correction — remaps to The Multi-Generational Legacy Family under Families.
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "High",
      reasoning: "Heated outdoor swimming pool, spacious suite configurations, early breakfast service, and high perimeter security make it a stress-free launchpad for family safari itineraries.",
      supportingSignals: ["Family suitability score 8/10", "Heated outdoor pool", "High perimeter security"],
      mismatchConditions: ["Early 10:00 AM check-out timing requires planning day-room extensions for late-night flights"],
    },
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "High-speed Wi-Fi, pin-drop quiet soundproofed suites, power showers, and rapid transit via the Southern Bypass facilitate efficient work and deep biological rest.",
      supportingSignals: ["Comfort score 9/10", "Pin-drop quiet soundproofed suites", "High-speed Wi-Fi"],
      mismatchConditions: ["Main public spaces can be busy during corporate conference hours"],
    },
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Moderate",
      reasoning: "Serves as a crisp, highly functional \"airlock\" hotel between long international flights and high-end bush charter connections (e.g., Angama Mara or Sasaab).",
      supportingSignals: ["Direct Wilson Airport bush-charter access", "Airlock positioning for high-end camps"],
      mismatchConditions: ["Does not provide private butler service or hyper-exclusive estate isolation"],
    },
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "Modern lifestyle atmosphere, corporate event traffic, and active central pool areas lack the secluded, romantic, and intimate isolation sought by honeymoon couples.",
      supportingSignals: [],
      mismatchConditions: ["Feels too energetic, social, and corporate rather than romantic and private"],
    },
    // REMAPPED: source doc listed "The Solo Wilderness Purist (Solo Explorers)," not canonical.
    // Same remap as Argyle Grand Hotel — The Solitary Ascetic (The Silence Seeker) under Solo
    // Explorers.
    {
      fitType: "poorFit",
      category: "Solo Explorers",
      archetype: "The Solitary Ascetic",
      matchStrength: "Low",
      reasoning: "Urban multi-story hotel layout and proximity to traffic corridors conflict directly with desires for immediate immersion in remote, low-impact natural environments.",
      supportingSignals: [],
      mismatchConditions: ["Disconnected from raw nature and surrounded by modern urban infrastructure"],
    },
    // DROPPED: incompatible archetype "The Culture & Heritage Collector" — no canonical equivalent,
    // per Argyle Grand Hotel precedent.
  ],

  journeyIntelligence: {
    idealStayDuration: "1 night (or day-room use)",
    recommendedPositionNote: "\"Opening Immersion (The Safari Airlock) or Recovery/Reset (The Transit Bridge)\" hedge contained two literal canonical terms — identical structure to Argyle Grand Hotel. Founder confirmed Opening Immersion as primary. This closes the entire Nairobi sub-phase and the full knowledge-base build: Nairobi (2: Opening Immersion x2 — Argyle Grand Hotel, Tamarind Tree Hotel).",
    whatShouldComeBefore: "Long-haul international flight arrival into JKIA, or returning from a dusty bush safari circuit in the Maasai Mara, Samburu, or Laikipia",
    whatShouldComeAfter: "Early morning bush charter flight out of Wilson Airport (WIL) to deep-wilderness camps, or evening international flight transfer to JKIA via the Southern Bypass",
    emotionalTransitionRationale: "Converts international travel anxiety into grounded, organized excitement upon arrival. On return from the bush, it bridges the transition from raw wilderness back to modern comfort before long-haul flights.",
  },

  narrative: {
    whyChosen: "A vibrant, contemporary lifestyle transit hotel located next to Wilson Airport, offering seamless logistics, soundproof comfort, and heated pool relaxation for safari travelers navigating their Nairobi entry and exit windows.",
    bestUsedFor: "Any itinerary relying on flights originating from Wilson Airport; travelers prioritizing logistical certainty, soundproof comfort, fast Wi-Fi, and heated pool relaxation.",
    lessSuitableFor: "Travelers seeking an old-world colonial fantasy (steer toward Fairmont The Norfolk or Hemingways Nairobi); ultra-luxury VIPs requiring private butler service and complete estate isolation; a multi-day base for exploring downtown business hubs or UN facilities in Gigiri.",
    overview: "The Tamarind Tree Hotel functions as the ultimate logistical and psychological \"airlock\" of the Swafaris travel ecosystem. Located in the leafy Langata/Karen periphery, its emotional identity is defined by seamless efficiency wrapped in vibrant, modern African hospitality. The atmosphere is upscale, energetic, and highly ordered. Visually, the property features a striking contemporary design focused around a protected central courtyard pool. The sensory experience is characterized by the aroma of freshly brewed Kenyan espresso from the Tamambo coffee bar, the crisp click of soundproof glass sealing out the city, and the comforting radiance of its expansive heated swimming pool. It is engineered specifically to eliminate the standard anxieties of urban African transit — traffic delays, spotty connectivity, and layout confusion — replacing them with effortless modern comfort.",
    emotionalFeel: "The psychological feel at Tamarind Tree is one of profound relief and grounding. For an arriving traveler, stepping into the bright, open-plan lobby after a grueling 15-hour international flight provides instant sensory decompression. For the returning traveler, arriving from a dusty bush circuit, the hotel feels like an emotional homecoming to first-world amenities. The air feels secure, the rhythm is highly organized, and the background ambient energy is cheerful and cosmopolitan. It acts as a transitional space that honors the traveler's need for functional rest while keeping them visually connected to Kenya's creative urban culture.",
    sensorySignature: {
      visual: ["Vibrant contemporary African architecture", "Bright open-plan lobbies", "Colorful artwork", "Glittering heated outdoor pool framed by lush courtyard landscaping"],
      auditory: ["Silent acoustic-sealed guest suites", "Ambient laughter around the pool bar", "Gentle espresso machine hums from the lobby lounge"],
      olfactory: ["Rich, freshly ground Kenyan espresso at Tamambo Coffee Bar", "Subtle floral garden scents", "Sizzling grilled meats from the neighboring Carnivore grounds"],
    },
    positiveSignals: [
      "The Wilson Airport Logistical Advantage — unrivaled proximity allows guests to wake at 6:30 AM for a 7:30 AM safari flight without risking traffic-induced delays",
      "Superior Soundproofing and Bedding — absolute quietness, premium mattresses, luxury linens, and walk-in power showers for restorative sleep",
      "The Outdoor Heated Pool Hub — actively heated swimming pool offers guests physical recovery and relaxation after long flights",
      "Vibrant, Fresh Breakfast Buffets — an expansive, highly energetic breakfast spread opens exceptionally early to accommodate early safari flight departures",
    ],
    negativeSignals: [
      "Early Check-Out Pressure — standard 10:00 AM check-out creates friction for guests with late-evening departures",
      "Corporate Event Spatial Crowding — popularity for local corporate seminars and weekend buffets can make main pathways and restaurants feel crowded",
      "Carnivore Noise/Proximity Misconceptions — rear ground-floor rooms near the property boundary can catch distant ambient bass bleed during weekend party events at Carnivore",
    ],
    hiddenGems: [
      "Geographic positioning allows planners to schedule a crack-of-dawn morning game drive into Nairobi National Park via the nearby Langata Gate before checking out; secure, direct pedestrian access onto the Carnivore estate gives guests a famous dining experience without street taxi transfers",
    ],
    signatureMemory: "Sipping a fresh Kenyan single-origin espresso by the sunlit heated pool, knowing your flight out of Wilson Airport is just three minutes away.",
    expectationManagement: "Travelers must understand this is a vibrant, modern 4-star-plus urban lifestyle transit hotel, not an old-world colonial estate or a quiet wilderness lodge.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Any itinerary relying on flights originating from Wilson Airport",
      "Travelers prioritizing logistical certainty, soundproof comfort, fast Wi-Fi, and heated pool relaxation",
    ],
    doNotRecommendConditions: [
      "Travelers seeking an old-world colonial fantasy (steer toward Fairmont The Norfolk or Hemingways Nairobi)",
      "Ultra-luxury VIPs requiring private butler service and complete estate isolation",
      "A multi-day base for exploring downtown business hubs or UN facilities in Gigiri",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Unmatched 3-minute access to Wilson Airport combined with modern 2018 infrastructure, an actively heated outdoor pool, and strong corporate management.",
    mainLimitation: "Standard 10:00 AM check-out timing and potential corporate event foot traffic in central areas.",
    positioningSummary: "A vibrant, contemporary lifestyle transit hotel located next to Wilson Airport, offering seamless logistics, soundproof comfort, and heated pool relaxation for safari travelers navigating their Nairobi entry and exit windows.",
  },

  pairings: [
    {
      pairedEntity: "Angama Mara / Sasaab / Segera House (Maasai Mara, Samburu, Laikipia)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "The sleek, functional urban luxury of Tamarind Tree creates a dynamic contrast with raw canvas luxury in the deep bush, flying out of Wilson Airport.",
    },
    {
      pairedEntity: "Maasai Mara National Reserve, Samburu National Reserve, or Laikipia Plateau",
      pairingCategory: "Complementary Region",
      rationale: "Via Wilson Airport flight connections.",
    },
    {
      pairedEntity: "High-intensity game viewing or active walking safaris in the bush",
      pairingCategory: "Complementary Experience",
      rationale: "Using Tamarind Tree as the smooth, stress-free urban buffer on arrival and departure.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Swafaris destination assessments", "Operational property audits", "Guest transit diaries", "Regional airport logistical records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [],
  },
};