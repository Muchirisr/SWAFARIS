export const severinSeaLodge = {
  id: "severin-sea-lodge-mombasa",
  name: "Severin Sea Lodge",
  country: "Kenya",
  region: "Coast",
  subRegion: "Mombasa North Coast (Bamburi Beach, Kilifi/Mombasa County)",
  ecosystem: "Coastal, Marine Ecosystem — Coral Reef Coastline",
  propertyType: "Traditional Swahili-Style Beach Resort & Palm Sanctuary",
  accommodationStyle: "Traditional African-Swahili architecture featuring soaring makuti (palm-thatch) roofs, circular stone bungalows, deep mvule and Lamu timber finishes, and modernized interiors with walk-in showers and full climate control",
  locationDetail: "Independently owned and managed (Severin Touristik); ~188 units (Karibu rooms, deluxe bungalow units, high-end suites including the Kitani and Royal Suites); established 1972, continuously upgraded and modernized",
  nearestAirstrips: ["Moi International Airport (MBA) — primary", "Vipingo Airstrip / Bamburi Airstrip"],
  nearestGate: "N/A (Coastal Property; direct frontage on Bamburi Beach)",
  accessibilityNotes: "Highly accessible year-round via paved tarmac roads directly from Mombasa city center, airport, and SGR station. Single-level ground floor public areas with flat, paved stone pathways across manicured lawns; ground-floor suites offer easy mobility access.",
  priceRangeMinUsd: 200,
  priceRangeMaxUsd: 450,

  // Self-stated "Mid" tier confirmed as-is: midpoint of $200-450 = $325, which lands cleanly in
  // Mid-Range ($300-499) per the price guide. No override needed.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Satao Camp", "Ashnil Aruba Camp", "Ol Tukai Lodge", "Tortilis Camp"],

  rawSourceJson: {
    officialBrandName: "Severin Sea Lodge",
    yearEstablished: "1972 (continuously upgraded and modernized)",
    unitBreakdown: "~188 units: Karibu rooms, deluxe bungalow units, Kitani and Royal Suites",
    priceRange: "$200-450 USD per room/night, Half Board / Full Board options available.",
  },

  experienceDna: {
    // "Elegant," "Peaceful," "Social" are all canonical — no correction needed.
    emotionalTone: ["Elegant", "Peaceful", "Social"],

    // Source states "Quiet luxury | Restorative" — neither is canonical (11 Energy Types).
    // Founder confirmed Wellness + Luxury Escape, matching the relaxation/comfort/premium score
    // profile (relaxation 8/10, comfort 9/10, premium 8/10).
    energyType: ["Wellness", "Luxury Escape"],

    experiencePace: "Slow", // matches canonical set directly

    // Source states "Contemporary Luxury | Heritage Luxury" — neither is canonical. This property
    // explicitly documents NO wear ("continuously upgraded and modernized," "newly renovated
    // deluxe suite hardware"), so the heritage-exception question doesn't apply here at all — it's
    // simply a clean Mid-Range-tier resolution, matching the Diani Sea Resort / Baobab precedent.
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // "Opening Shock-Absorber / Post-Safari Decompression" doesn't literally contain any of the 7
    // canonical Journey Roles, so it doesn't auto-resolve via the standard hedge rule. Founder
    // confirmed Recovery — the emotional-transition language (converting safari fatigue or
    // long-haul travel fatigue into low-stress coastal relaxation) matches Recovery's definition
    // (general decompression/wellness stop) directly.
    // Mombasa sub-phase running tally: Opening Immersion x1, Recovery x1.
    journeyRole: "Recovery",

    // idealTravelersPrimary decisions: "Slow Travelers & Recovery/Reset Guests" dropped (no
    // archetype support at all). "First-Time Safari Travelers" dropped (its only candidate
    // archetype, "The Cultural Explorer," was remapped to Social Explorers below, leaving no
    // support). "Burned-out Executives" added (not in the doc's own summary line, but The Incognito
    // Ascetic is a confirmed ideal-fit archetype, per the idealTravelersPrimary-tracks-archetype-
    // support precedent set at Papillon).
    idealTravelersPrimary: ["Families", "Burned-out Executives", "Social Explorers", "Honeymooners"],
    idealTravelersSecondary: [],

    intensityScore: 3,
    relaxationScore: 8,
    authenticityScore: 7,
    premiumScore: 8,
    adventureScore: 4,
    privacyScore: 7,
    wildlifeExperienceScore: 5,
    culturalImmersionScore: 7,
    familySuitabilityScore: 9,
    comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "30-45 minutes road transfer from Moi International Airport (MBA); 20-30 minutes road transfer from Mombasa SGR Railway Terminal (Miritini)",
    seasonalAccessibility: "Open year-round; ocean swimming is tide-dependent — low tide exposes the inner reef flat, high tide brings full shore swimming",
    electricitySystem: "Reliable 24-hour mains grid connection backed by heavy-duty silent generators, ensuring continuous power for high-spec air conditioning and lighting",
    powerReliability: "High",
    waterReliability: "High — high-capacity municipal supply supported by internal water treatment, filtration, and solar/electric heating systems providing strong, consistent shower pressure",
    internetAvailability: "Complimentary high-speed Wi-Fi across all public areas, rooms, and pool decks",
    mobileNetwork: "Excellent 4G/5G cellular coverage via Safaricom and Airtel",
    medicalAccess: "Direct 10-15 minute access to top private hospitals in Mombasa (Aga Khan Hospital Mombasa, Mombasa Hospital)",
    childFriendly: true, // stated "Highly Child-Friendly"
    mobilityFriendly: true, // stated "High"
    operationalLimitations: [
      "Public beach boundary friction — curio vendors/beach operators along Bamburi Beach",
      "Resident Sykes monkeys requiring alert outdoor dining",
      "Basic fitness/gym infrastructure — limited to basic cardio equipment and simple weights",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "High",
      reasoning: "Smooth tarmac transfers, ground-floor accessibility, predictable food hygiene, multiple pools, and spacious family bungalows provide a stress-free environment for all age groups.",
      supportingSignals: ["Family suitability score 9/10", "Ground-floor accessibility", "Multiple pools"],
      mismatchConditions: ["Must manage children's outdoor snacks around resident Sykes monkeys"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Post-Safari Recovery Guests" —
    // corrects to canonical Burned-out Executives (archetype name itself is an exact match).
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Offers reliable climate control, quiet palm-shaded lawns, and high-quality a la carte dining to lower cortisol levels after early-morning bush game drives.",
      supportingSignals: ["Relaxation score 8/10", "Intensity score only 3/10", "Private Kitani/Royal Suites available"],
      mismatchConditions: ["Guests seeking complete wilderness isolation should book the private Kitani or Royal Suites to avoid central pool crowds"],
    },
    // REMAPPED: source doc listed "The Cultural Explorer (First-Time Kenya Visitors)," neither of
    // which is canonical. Founder confirmed remapping to The Cultural Immersionist (The
    // Deep-Humanity Seeker) under Social Explorers — its Fort Jesus/Old Town/Swahili-market framing
    // matches the stated fit rationale directly.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Cultural Immersionist",
      matchStrength: "Moderate",
      reasoning: "Serves as a comfortable coastal base with easy road access to Mombasa's historic UNESCO site Fort Jesus, Swahili markets, and Old Town guided tours.",
      supportingSignals: ["Cultural immersion score 7/10", "Direct road access to Fort Jesus and Old Town"],
      mismatchConditions: ["Public beach area has active curio vendors beyond the lodge's lawn boundary"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Booking the Kitani or Royal Suites grants access to private, walled beachfront gardens and dedicated loungers while keeping full resort amenities nearby.",
      supportingSignals: ["Privacy score 7/10", "Private walled beachfront gardens in Kitani/Royal Suites"],
      mismatchConditions: ["Main pool areas carry a social, family-friendly energy during peak holiday seasons"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Remote Wilderness Purist," not canonical. Founder
    // confirmed remapping to The Low-Impact Purist (The Off-Grid Minimalist) under Luxury Adventurers.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The Low-Impact Purist",
      matchStrength: "Low",
      reasoning: "Located on Bamburi Beach within a developed resort corridor, which contrasts with untouched, unpopulated wilderness.",
      supportingSignals: [],
      mismatchConditions: ["Dissatisfaction with neighboring coastal infrastructure and public beach vendor presence"],
    },
    // DROPPED: idealTravelersPrimary item "Slow Travelers & Recovery/Reset Guests" — not a canonical
    // category and had no distinct archetype support.
    // DROPPED: idealTravelersPrimary item "First-Time Safari Travelers" — its only candidate
    // archetype ("The Cultural Explorer") was remapped to Social Explorers above, leaving no support.
    // DROPPED: incompatible archetype "The Avant-Garde Minimalist" — no canonical equivalent
    // (aesthetic-mismatch framing doesn't map onto any of the 38 archetypes).
    // DROPPED: incompatible archetype "The High-Intensity Athletic/Fitness Traveler" — no canonical
    // equivalent; fitness/gym specificity isn't covered by the taxonomy.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    recommendedPositionNote: "\"Opening Shock-Absorber / Post-Safari Decompression\" resolved to Recovery per founder confirmation. Mombasa sub-phase running tally: Opening Immersion x1, Recovery x1.",
    whatShouldComeBefore: "High-intensity bush tracking in Tsavo East, Tsavo West, or Amboseli National Park; or long-haul flight arrival at Mombasa (MBA)",
    whatShouldComeAfter: "Direct SGR Train transfer from Mombasa to Nairobi for homeward flights, or direct transfer to Moi International Airport (MBA)",
    emotionalTransitionRationale: "Converts early-morning safari schedules or long-haul travel fatigue into easy, low-stress coastal relaxation surrounded by manicured gardens and ocean breezes.",
  },

  narrative: {
    whyChosen: "A beautifully manicured, traditional Swahili-style beach sanctuary on the North Coast, offering exceptional culinary consistency and lush palm privacy, perfect for families and safari-weary travelers seeking seamless comfort and reliable coastal relaxation.",
    bestUsedFor: "Families, older or mobility-limited travelers, safari-weary travelers wanting reliable post-safari decompression, and couples booking the private Kitani/Royal Suites for a quieter honeymoon experience.",
    lessSuitableFor: "Ultra-exclusive travelers demanding complete wilderness isolation, private plunge pools, or empty, unpopulated private beaches; travelers wanting full-scale sports/fitness facilities.",
    overview: "Severin Sea Lodge is a classic, highly refined Swahili-style beach resort situated along the palm-lined shores of Bamburi Beach on Mombasa's North Coast. Set within a manicured palm grove, the property combines traditional African architecture — soaring makuti roofs, circular stone bungalows, and hand-carved mvule timber — with modern room amenities. It offers a predictable, comfortable coastal haven with wide lawns sloping down to an elevated beach wall, shielding guests from public beach activity.",
    emotionalFeel: "Reassuring, warm, and restorative. The atmosphere is defined by long-standing staff hospitality, steady ocean breezes, and a slow-paced daily rhythm. Free from forced entertainment activities, days flow naturally from oceanfront buffet breakfasts to quiet afternoons under palm shade, creating a low-stress environment for recovery after a bush safari.",
    sensorySignature: {
      visual: ["Vibrant green lawns dotted with coconut palms", "Dark timber architectural finishes", "Traditional thatch roofs", "Blue expanse of the Indian Ocean"],
      auditory: ["Gentle ocean waves hitting the reef", "Wind through palm fronds", "Soft ambient music", "Sykes monkeys in the canopy"],
      olfactory: ["Fresh ocean salt spray", "Tropical floral blooms", "Fresh grilled seafood"],
    },
    positiveSignals: [
      "Immaculate Lawn & Garden Grounds — expansive, park-like lawns maintained right to the beach edge, offering a clean, bug-free area for sun loungers",
      "High Culinary Consistency — fresh, varied buffet options and specialized a la carte seafood dining that consistently exceed standard resort expectations",
      "Upgraded Heritage Bungalows — deluxe rooms combine rustic thatched exteriors with high-spec walk-in showers, crisp bedding, and powerful air conditioning",
      "Attentive Operational Touches — early 6:00 AM coffee stations for morning beach walks and ambiently lit pools open until 9:00 PM",
    ],
    negativeSignals: [
      "Public Beach Vendor Solicitations — stepping onto the public sand past the resort's security boundary brings immediate approaches from local curio vendors",
      "Active Monkey Population — resident Sykes monkeys will scavenge unattended food on outdoor dining tables and balconies",
      "Basic Gym Infrastructure — on-site fitness room offers only basic cardio machines and limited weights",
    ],
    hiddenGems: [
      "The Kitani & Royal Suites — tucked away from the main guest blocks, these suites feature authentic hand-crafted Lamu furnishings, antique Swahili finishes, and private, walled beachfront gardens with dedicated sun loungers, offering boutique villa privacy while retaining full access to the lodge's broader amenities",
    ],
    signatureMemory: "Enjoying fresh seafood under a traditional makuti roof, followed by an evening stroll along private, palm-shaded lawns as ambient lights illuminate the ocean shoreline.",
    expectationManagement: "Inform guests about the public nature of Bamburi Beach beyond the resort boundary, the active monkey population in outdoor dining areas, and the tide-dependent nature of direct shore ocean swimming.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Families, first-time Kenya travelers, older guests, or safari travelers wanting an accessible, comfortable beach stay with high food safety and reliable AC",
      "Travelers wanting classic Swahili aesthetics without a luxury boutique price tag",
      "Couples booking the private Kitani or Royal Suites for a quieter honeymoon experience",
    ],
    doNotRecommendConditions: [
      "Ultra-exclusive travelers demanding complete wilderness isolation, private plunge pools, or empty, unpopulated private beaches",
      "Travelers expecting a full-scale sports conditioning facility",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Outstanding lawn landscaping, high culinary standards, proximity to Mombasa/SGR transit links, and private garden suite options.",
    mainLimitation: "Public vendor activity along Bamburi Beach and lack of high-end fitness facilities.",
    positioningSummary: "A beautifully manicured, traditional Swahili-style beach sanctuary on the North Coast, offering exceptional culinary consistency and lush palm privacy, perfect for families and safari-weary travelers seeking seamless comfort and reliable coastal relaxation.",
  },

  pairings: [
    {
      pairedEntity: "Satao Camp / Ashnil Aruba Camp (Tsavo East National Park)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Transitioning from dry red-earth game viewing in Tsavo East via a 3-to-4-hour road/rail connection to the palm groves of Bamburi Beach provides a classic \"Bush & Beach\" experience.",
    },
    {
      pairedEntity: "Ol Tukai Lodge / Tortilis Camp (Amboseli National Park)",
      pairingCategory: "Complementary Region",
      rationale: "Pairing Amboseli's Kilimanjaro-shadowed plains with Severin Sea Lodge offers a balanced contrast in landscapes and pacing.",
    },
    {
      pairedEntity: "Fort Jesus, Mombasa Old Town, and Akamba Woodcarvers",
      pairingCategory: "Complementary Experience",
      rationale: "Combine relaxed beach days with a private guided historical excursion to Fort Jesus, Mombasa Old Town, and Akamba Woodcarvers.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: [
      "Field surveys",
      "Operator specifications",
      "Regional geographical surveys",
      "Road/rail transit logs",
      "Property operational records",
    ],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Specific dates for annual minor soft-renovations require ongoing seasonal verification",
    ],
  },
};