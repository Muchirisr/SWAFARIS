export const mandaBayIslandResort = {
  id: "manda-bay-island-resort-lamu",
  name: "Manda Bay Island Resort",
  country: "Kenya",
  region: "Coast",
  subRegion: "Lamu Archipelago (Northern Peninsula of Manda Island)",
  ecosystem: "Marine Ecosystem — integrated 2,000-acre private coastal wildlife conservancy, extensive sand flats, and rich mangrove estuaries",
  propertyType: "Ultra-Exclusive Private Island & Wildlife Conservancy Resort",
  accommodationStyle: "Open-air 'barefoot luxury' bandas built with local coral stone, crushed shell floors, and high mangrove timber thatch (Makuti), explicitly built without glass windows to harness natural trade wind cooling",
  locationDetail: "Privately family-owned and managed; 22 palm-thatched cottages (16 Ocean Front/Sea View Bandas, 6 set-back Garden Rooms); established ~1990s, generational operational heritage",
  nearestAirstrips: ["Manda Bay Private Charter Airstrip (on-site) — primary", "Manda Airport / Lamu Airport (LAU) — secondary, 20-30 min speed boat transfer"],
  nearestGate: "N/A (Private peninsula compound; direct ocean jetties and internal conservancy access)",
  accessibilityNotes: "Accessible year-round via water boat transfer or private air charter. Ground-level pathways consist of deep, unpaved sand ('no shoes, no news'). Accessible for basic walking, but deep sand paths present friction for motorized wheelchair users.",
  priceRangeMinUsd: 460,
  priceRangeMaxUsd: 850,

  // First per-person-priced lodge in the Coast region (all prior lodges priced per room/night).
  // Founder confirmed doubling per-person rates before checking against the room-based price
  // guide — new precedent for any future per-person-priced lodge. Doubled range: $920-1,700,
  // midpoint $1,310, landing in Ultra-Luxury ($1,200+) — also the first lodge at this tier.
  // Founder confirmed swafarisExperienceTier caps at Tier 3 for any budgetTier above Premium
  // (i.e. Luxury, Ultra-Luxury), rather than extending the Tier 1/2/3 scale upward — new precedent.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Ultra-Luxury",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Lewa Wilderness", "Ol Jogi", "Segera House", "Mara Toto", "Sala's Camp", "Mara Expedition Camp"],

  rawSourceJson: {
    officialBrandName: "Manda Bay Island Resort",
    yearEstablished: "~1990s (generational operational heritage)",
    unitBreakdown: "22 palm-thatched cottages: 16 Ocean Front/Sea View Bandas, 6 set-back Garden Rooms",
    priceRange: "$460-850 USD per person/night, Full Board/Exclusive packages depending on season and cottage category.",
  },

  experienceDna: {
        // CORRECTED 2026-09-25: "Intimate" is not a valid final value per the Intimate case-by-case
    // rule — Honeymooners is an ideal-High fit here with explicit romantic narrative language
    // ("deeply romantic, wild-luxury atmosphere"), so it resolves to "Romantic". "Peaceful" and
    // "Wild" remain canonical as-stated.
    emotionalTone: ["Romantic", "Peaceful", "Wild"],

    // "Adventurous" is a word-form variant of canonical "Adventure." "Decompression retreat"
    // resolves to "Wellness" (4th time this pattern has appeared). Unlike prior cases, Adventure
    // is genuinely earned here (adventure score 7/10, water sports/game drives), so this doesn't
    // collapse into the usual Wellness + Luxury Escape pairing.
    energyType: ["Adventure", "Wellness"],

    experiencePace: "Slow", // canonical as-stated

    // Doc genuinely hedges between "Eco-luxury" and "Ultra-exclusive" — a real dual-fit (authentic
    // eco-construction AND ultra-private exclusivity). Founder confirmed Ultra-Exclusive Sanctuary
    // over Eco Luxury — the private-island/private-airstrip exclusivity is the more defining,
    // differentiating trait versus the merely-rustic construction.
    comfortPhilosophy: ["Exclusive Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary",

    // "Ultimate Coastal Decompression / Safari Climax" hedge contained exactly one literal
    // canonical term (Safari Climax), qualifying for the standard single-term auto-resolve.
    // Lamu sub-phase: Safari Climax x1 (sole lodge).
    journeyRole: "Safari Climax",

    // idealTravelersPrimary: first clean one-to-one match — all four doc-listed categories align
    // exactly with the four ideal archetypes below, no drops or additions needed.
    idealTravelersPrimary: ["Burned-out Executives", "Families", "Honeymooners", "Luxury Adventurers"],
    idealTravelersSecondary: [],

    intensityScore: 3,
    relaxationScore: 10,
    authenticityScore: 9,
    premiumScore: 9,
    adventureScore: 7,
    privacyScore: 9,
    wildlifeExperienceScore: 6,
    culturalImmersionScore: 6,
    familySuitabilityScore: 9,
    comfortScore: 8,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "20-30 minutes by private resort speed boat from public Manda Airport (LAU); or 0 minutes direct taxi time via Manda Bay's private charter airstrip",
    seasonalAccessibility: "Open year-round (often closes briefly during the heavy May/June monsoon period). Trade winds fluctuate: Kaskazi (Nov-April) brings calm, crystalline seas; Kusi (May-Oct) brings stronger trade breezes and higher seas.",
    electricitySystem: "Off-grid solar power matrix supported by silent backup generators; standard 220V power points in all cottages for charging and high-powered ceiling fans; no high-draw HVAC/AC compressors",
    powerReliability: "High",
    waterReliability: "High — desalination plant and fresh rain catchments paired with solar water heating systems for guest suites",
    internetAvailability: "Wi-Fi focused around the central lodge bar, open-air lounge, and dining pavilion",
    mobileNetwork: "Cellular reception (Safaricom) available across the peninsula, though digital detachment is actively encouraged",
    medicalAccess: "Qualified on-site first-aiders and emergency marine transport; medical evacuation coverage (AMREF Flying Doctors) arranged to Nairobi for acute trauma/medical crises",
    childFriendly: true, // "Highly Child-Friendly"
    mobilityFriendly: false, // "Moderate to Low" per source — deep sand paths throughout
    operationalLimitations: [
      "Absolute lack of air conditioning (eco-ventilation only)",
      "Distance and water reliance to reach Lamu Old Town (30-40 mins by boat)",
      "Compact geometry/reduced ocean views for the 6 Garden Rooms",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "The enforced \"no shoes, no news\" culture, complete absence of corporate resort noise, and expansive spatial privacy allow high-stress individuals to drop performative masks and achieve deep mental recovery.",
      supportingSignals: ["Relaxation score 10/10", "Isolated social dynamic", "2,000-acre private peninsula"],
      mismatchConditions: ["Must be comfortable sleeping in an open-air, glassless environment with natural breezes rather than sealed air-conditioned spaces"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Multi-Generational Anchor," not canonical. This
    // exact correction has now recurred three times (Severin, PrideInn, Manda Bay) — remaps to
    // The Multi-Generational Legacy Family under Families.
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "High",
      reasoning: "An ultimate playground for families — combining world-class private water sports (fishing, waterskiing, paddleboarding) with safe, shallow ocean waters and low-risk game drives on the private conservancy.",
      supportingSignals: ["Family suitability score 9/10", "Private water sports fleet", "Shallow, safe ocean waters"],
      mismatchConditions: ["Parents must manage young children around open water and open-air bandas"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Sprawling oceanfront bandas with unobstructed trade wind flow, private beach dining under the stars, open-air dhow bar cocktails, and quiet sandbank excursions offer a deeply romantic, wild-luxury atmosphere.",
      supportingSignals: ["Privacy score 9/10", "Private beach dining", "Isolated peninsula setting"],
      mismatchConditions: ["Requires accepting the natural elements of an eco-luxury coastal environment (insects, birds, sea breeze humidity)"],
    },
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "High",
      reasoning: "Access to a private, internally managed fleet of sport fishing boats, ski boats, and sea kayaks, supported by expert instruction right off the resort jetty.",
      supportingSignals: ["Adventure score 7/10", "Private water sports fleet", "Deep-sea game fishing"],
      mismatchConditions: ["Not suited for travelers seeking high-energy urban nightlife, beach clubs, or off-property shopping walkability"],
    },
    // REMAPPED: source doc listed "The Controlled-Environment / Wildlife-Averse Traveler" — its
    // invented name literally echoes the canonical subtitle of The Sensory Overwhelmed (The
    // Controlled-Environment Seeker) under First-Time Safari Travelers. Direct remap.
    {
      fitType: "poorFit",
      category: "First-Time Safari Travelers",
      archetype: "The Sensory Overwhelmed",
      matchStrength: "Low",
      reasoning: "Open thatch and glassless window frames mean ambient nature (coastal breezes, gecko activity, harmless insects, and ocean acoustics) flows directly through the living spaces.",
      supportingSignals: [],
      mismatchConditions: ["Anxiety or discomfort for guests requiring hermetically sealed glass environments"],
    },
    // DROPPED: incompatible archetype "The Modern Climate-Dependent Traveler" — no canonical
    // equivalent.
    // DROPPED: incompatible archetype "The Urban Walkability & Nightlife Explorer" — no canonical
    // equivalent.
  ],

  journeyIntelligence: {
    idealStayDuration: "4 to 6 nights",
    recommendedPositionNote: "\"Ultimate Coastal Decompression / Safari Climax\" hedge contained exactly one literal canonical term (Safari Climax), qualifying for standard single-term auto-resolve. Lamu sub-phase: Safari Climax x1 (sole lodge).",
    whatShouldComeBefore: "High-intensity, structured savanna tracking in top-tier safari destinations (e.g., game drives in the Maasai Mara, wilderness walks in Laikipia, or tracking in Samburu)",
    whatShouldComeAfter: "Direct private charter flight from Manda Bay Airstrip or boat-to-flight transfer via Manda Airport (LAU) back to Nairobi (WIL/NBO) for international homeward connections",
    emotionalTransitionRationale: "Shifts the guest from early-morning wake-up calls, dusty vehicles, and high-vibration predator tracking into absolute, unhurried barefoot freedom and deep physical rest.",
  },

  narrative: {
    whyChosen: "An ultra-exclusive, family-run private island peninsula hideaway where glassless eco-luxury bungalows and a 2,000-acre wildlife conservancy deliver the ultimate 'no shoes, no news' coastal decompression finale.",
    bestUsedFor: "Affluent, high-profile travelers, families, burned-out executives, and luxury purists seeking absolute privacy, an unplugged atmosphere, and a private water sports and conservancy estate to conclude a safari.",
    lessSuitableFor: "Ultra-modern travelers who require sealed glass insulation, continuous air conditioning, in-room televisions, or immediate walkable street access and urban nightlife.",
    overview: "Manda Bay Island Resort is a premier, family-owned private hideaway situated on the unpopulated northern tip of Manda Island in the Lamu Archipelago. Integrating a beachfront marine sanctuary with an active 2,000-acre private wildlife conservancy, it offers 22 open-air, palm-thatched bandas crafted from local coral stone and mangrove timber. Designed with no glass windows, the resort captures the Indian Ocean trade winds to deliver an authentic, high-end 'no shoes, no news' experience centered on spatial privacy, water sports, and environmental connection.",
    emotionalFeel: "Unstructured, restorative, and warmly intimate. The atmosphere mirrors an elite private family estate rather than a commercial hotel. The psychological weight of daily routine drops away instantly as guests trade shoes for fine sand, spending mornings watching receding tides and evenings enjoying lantern-lit dining and dhow bar cocktails under open night skies.",
    sensorySignature: {
      visual: ["Endless turquoise waters framing pristine sandbanks", "Rustic-chic palm thatch", "Open horizons", "Coastal wildlife roaming the dunes"],
      auditory: ["Continuous crashing and lapping of the Indian Ocean", "Trade winds rustling through Makuti thatch", "Bird calls from the mangroves", "Absence of engine or city noise"],
      olfactory: ["Crisp, salty sea spray", "Wild coastal sage", "Sun-baked mangrove wood", "Fresh grilled lobster"],
    },
    positiveSignals: [
      "Glassless Eco-Ventilation Architecture — open-air bandas with mosquito netting over plush beds provide sea breezes and ocean acoustics, driving deep restorative sleep",
      "Bush-and-Beach Dual Ecosystem — rare integration allowing afternoon game drives across dunes to spot buffalo and ancient ruins, followed by oceanfront lobster dinners",
      "In-House High-Caliber Marine Hub — family-operated water sports centre for deep-sea sport fishing, waterskiing, windsurfing, and mangrove paddleboarding",
      "Unmatched Private Airstrip Cocoon — on-site private charter runway lets high-net-worth guests bypass public airport terminals and jetties entirely",
    ],
    negativeSignals: [
      "Compact Geometry of Garden Rooms — the 6 set-back Garden Rooms are smaller and lack direct oceanfront views",
      "Absence of Sealed Air Conditioning — glassless design relies on sea winds and ceiling fans",
      "Boat Dependency for Off-Site Exploring — visiting Lamu Old Town requires a mandatory 30-to-40-minute boat transit",
    ],
    hiddenGems: [
      "Manda Bay Private Charter Airstrip — high-net-worth guests can fly direct via private charter to the property's internal 1,100m airstrip, bypassing public airport gates, baggage queues, and public boat transfers entirely",
    ],
    signatureMemory: "Landing on a private bush airstrip right by the ocean, shedding footwear for the duration of the stay, tracking buffalo across sand dunes in the afternoon, and enjoying fresh line-caught seafood at a lantern-lit table on the beach.",
    expectationManagement: "Ensure clients understand the glassless, eco-ventilated design (no AC), the layout differences of the Garden Rooms, and the 30-to-40-minute boat transfer required to reach historic Lamu Old Town.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Affluent, high-profile travelers, families, burned-out executives, and luxury purists seeking absolute privacy and an unplugged atmosphere",
      "Clients wanting a private water sports and conservancy estate to conclude a safari",
    ],
    doNotRecommendConditions: [
      "Ultra-modern travelers who require sealed glass insulation, continuous air conditioning, or in-room televisions",
      "Travelers wanting immediate walkable street access and urban nightlife",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Exclusive 2,000-acre private conservancy, private charter airstrip, family-run water sports infrastructure, and glassless coastal architectural design on an unpopulated peninsula.",
    mainLimitation: "Lack of room air conditioning and boat dependency for off-site town excursions.",
    positioningSummary: "An ultra-exclusive, family-run private island peninsula hideaway where glassless eco-luxury bungalows and a 2,000-acre wildlife conservancy deliver the ultimate 'no shoes, no news' coastal decompression finale.",
  },

  pairings: [
    {
      pairedEntity: "Lewa Wilderness / Ol Jogi / Segera House (Laikipia)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Transitioning from the high-altitude, rugged rhino conservation plains of Laikipia to the private marine conservancy of Manda Island delivers a balanced, private-conservancy bush-and-beach link.",
    },
    {
      pairedEntity: "Mara Toto / Sala's Camp / Mara Expedition Camp (Maasai Mara)",
      pairingCategory: "Complementary Region",
      rationale: "Moving from intense big-game tracking on the savanna to the open horizons and water sports of the Lamu Archipelago provides a strong emotional and visual balance.",
    },
    {
      pairedEntity: "Private sunset dhow voyage through the mangrove channels of the Lamu Archipelago",
      pairingCategory: "Complementary Experience",
      rationale: "Combine deep-sea fishing or waterskiing at Manda Bay with a private sunset dhow voyage through the mangrove channels of the Lamu Archipelago.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Marine access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Annual seasonal closure dates during May/June monsoon rains require ongoing verification"],
  },
};