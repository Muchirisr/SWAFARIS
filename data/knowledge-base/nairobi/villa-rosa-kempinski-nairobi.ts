export const villaRosaKempinskiNairobi = {
  id: "villa-rosa-kempinski-nairobi",
  name: "Villa Rosa Kempinski Nairobi",
  country: "Kenya",
  region: "Nairobi",
  subRegion: "Nairobi (Westlands District / Commercial Hub)",
  ecosystem: "Urban lifestyle and commercial hub — gateway of the Westlands district, minutes from the CBD, directly connected via the Nairobi Expressway for rapid airport transit",
  propertyType: "Urban Luxury Hotel / City Transit Landmark",
  accommodationStyle: "Classic European Grandeur featuring marble floors, heavy drapery, patterned carpets, and classical wood detailing",
  locationDetail: "Kempinski Hotels / Simba Corporation; 200 luxury rooms and suites across 10 floors; established 2013",
  nearestAirstrips: ["Jomo Kenyatta International Airport (NBO) — primary, 20-30min via Expressway", "Wilson Airport (WIL) — secondary, 15-20min"],
  nearestGate: "Nairobi National Park Main Gate (approx. 15km)",
  accessibilityNotes: "Directly adjacent to Chiromo Road at the gateway of the Westlands district with direct elevated ramp access onto the Nairobi Expressway for swift airport bypass transit. Fully accessible by standard city transfer vehicles and limousines.",
  priceRangeMinUsd: 220,
  priceRangeMaxUsd: 450,

  // Per-person pricing ($220-450), doubled per the Manda Bay/Argyle Grand precedent → $440-900,
  // midpoint $670, landing in Premium ($500-799) — NOT Ultra-Luxury as self-stated. First
  // downward-tier override at this magnitude (mirrors the upward override at Manda Bay in the
  // opposite direction). Founder confirmed.
  rawMarketTier: "Ultra-Luxury",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Mara Intrepids Camp", "Villa Napaiyan at Maiyan Resort"],

  rawSourceJson: {
    officialBrandName: "Villa Rosa Kempinski Nairobi",
    yearEstablished: "2013",
    unitBreakdown: "200 luxury rooms and suites across 10 floors",
    priceRange: "$220-450 USD per person per night, depending on room category and seasonal demand.",
  },

  experienceDna: {
    // Source states "Indulgent | Regal & Opulent | Vibrant Urban Hub" — none literally match any
    // of the 15 canonical values, a first (every prior lodge had at least one exact hit). Founder
    // confirmed Elegant (classic grandeur), Exclusive (ultra-premium positioning), Social
    // (vibrant, event-driven, busy lobby).
    emotionalTone: ["Elegant", "Exclusive", "Social"],

    // Source states "High-End Urban Hospitality | Restorative Luxury" — neither canonical. Not
    // separately raised as a question — resolved here as Wellness + Luxury Escape rather than the
    // Transit Convenience pattern used at Argyle Grand/Tamarind Tree, since the Expressway here is
    // one advantage among many (dining, spa, brand prestige), not the property's entire identity
    // the way Wilson Airport proximity was for those two. Flagging for visibility.
    energyType: ["Wellness", "Luxury Escape"],

    experiencePace: "Fast", // source stated "Fast-paced" — terminology cleanup only

    // Doesn't cleanly fit any of the 8 existing comfortPhilosophyDetailed values (not modern/
    // minimalist — doc explicitly contrasts itself against "glass-and-steel minimalist" hotels;
    // not isolated — it's explicitly "Social"; not genuinely aged heritage — built 2013, decor-only
    // classicism). Founder confirmed force-fitting an existing value rather than creating a new
    // one: Classic Safari Elegance (the "Safari" naming is irrelevant here, same acknowledged
    // mismatch as at Hemingways Watamu, but "Classic ... Elegance" matches the grandeur/opulence
    // profile better than any other of the 8), paired with Authentic Luxury broad category,
    // mirroring the Hemingways pairing.
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Classic Safari Elegance",

    // "Opening Immersion (The Flawless Launchpad) or Recovery / Grand Finale (The Urban Finale)"
    // hedge contained THREE literal canonical terms — the most hedged case yet, with the doc
    // arguing equally for both bookend roles. Founder confirmed Opening Immersion regardless. This
    // brings Nairobi to Opening Immersion x3 (100% concentration across all 3 Nairobi lodges) —
    // flagged for visibility, though a 3-lodge region is likely too small to warrant a full audit
    // the way Amboseli's 86%/7-lodge concentration did.
    journeyRole: "Opening Immersion",

    // idealTravelersPrimary: doc's own stated categories ("Corporate & Diplomatic Jet-Setters,"
    // "Food & Lifestyle Connoisseurs," "Luxury Safari Transit Travelers") are 100% non-canonical —
    // none match any of the 11 categories. Derived entirely from the four confirmed ideal
    // archetypes below instead.
    idealTravelersPrimary: ["Luxury Adventurers", "Honeymooners", "Burned-out Executives", "First-Time Safari Travelers"],
    idealTravelersSecondary: [],

    intensityScore: 4,
    relaxationScore: 9,
    authenticityScore: 6,
    premiumScore: 9,
    adventureScore: 2,
    privacyScore: 6,
    wildlifeExperienceScore: 1,
    culturalImmersionScore: 4,
    familySuitabilityScore: 6,
    comfortScore: 9,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "20-30 minutes from Jomo Kenyatta International Airport via the Nairobi Expressway; 15-20 minutes from Wilson Airport",
    seasonalAccessibility: "100% accessible year-round regardless of weather conditions due to complete urban paved infrastructure",
    electricitySystem: "Uninterrupted 24/7 municipal power backed by heavy-duty commercial auto-switch diesel generators",
    powerReliability: "High",
    waterReliability: "High — municipal supply integrated with high-capacity central water purification, filtration, and continuous high-pressure hot water systems",
    internetAvailability: "High-speed enterprise Wi-Fi throughout all public spaces, guest rooms, meeting facilities, and executive lounges",
    mobileNetwork: "Full 4G/5G mobile network coverage across Safaricom and Airtel",
    medicalAccess: "Immediate access to world-class private medical care including The Nairobi Hospital (Outpatient Westlands), MP Shah Hospital (5 minutes), and Avenue Hospital; on-site first-line emergency assistance",
    childFriendly: true, // "Moderate to High"
    mobilityFriendly: true, // "High"
    operationalLimitations: [
      "Peak hour lobby and elevator bank congestion during large political, corporate, or wedding events",
      "Strict non-resident visitor security screening at main entries",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "High",
      reasoning: "Seeks high-spec comfort, immediate Expressway transit efficiency, premium culinary variety, and flawless operational reliability before or after bush charters.",
      supportingSignals: ["Premium score 9/10", "Direct Nairobi Expressway connectivity", "Extensive culinary options"],
      mismatchConditions: ["Must accept an urban, high-density environment rather than a sprawling garden or wilderness layout"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Ideal for night-one decompression or final-night indulgence, offering pampering spa treatments, rooftop cocktails at Tambourin, and luxury suite comfort.",
      supportingSignals: ["Relaxation score 9/10", "Kempinski Spa infrastructure", "Rooftop dining at Tambourin"],
      mismatchConditions: ["Main public spaces can feel busy during peak event hours"],
    },
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "High-speed Wi-Fi, pin-drop quiet rooms, direct Executive Lounge access, and full spa infrastructure support seamless recovery and digital productivity.",
      supportingSignals: ["Comfort score 9/10", "Pin-drop quiet acoustic isolation", "Executive Lounge access"],
      mismatchConditions: ["Needs to request higher-floor, pool-facing or garden-facing rooms to avoid minor street vibration"],
    },
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "High",
      reasoning: "Offers a reassuring, familiar European luxury brand environment upon landing in East Africa before venturing into remote wilderness settings.",
      supportingSignals: ["Global Kempinski brand reliability", "Premium score 9/10", "Military-grade security protocols"],
      mismatchConditions: ["Higher per-night cost compared to mid-range city transit options"],
    },
    {
      fitType: "poorFit",
      category: "Solo Explorers",
      archetype: "The Solitary Ascetic",
      matchStrength: "Low",
      reasoning: "Commercial urban footprint, grand architectural scale, and high-density social environment conflict with desires for intimate, low-impact, raw natural spaces.",
      supportingSignals: [],
      mismatchConditions: ["Disconnect with overall journey expectations of rustic isolation"],
    },
    {
      fitType: "poorFit",
      category: "Students",
      archetype: "The Bonded Cohort",
      matchStrength: "Low",
      reasoning: "Price range ($220-450/night) and premium beverage/dining pricing create a severe mismatch for budget-conscious group travel.",
      supportingSignals: [],
      mismatchConditions: ["High cost overhead and overly formal environment"],
    },
    // REMAPPED: source doc listed "The Conservation Traveler," not canonical. Its framing echoes
    // the canonical subtitle of The Conservation Guardian (The Purpose-Driven Stakeholder) under
    // Slow Travelers almost exactly.
    {
      fitType: "poorFit",
      category: "Slow Travelers",
      archetype: "The Conservation Guardian",
      matchStrength: "Low",
      reasoning: "Property is a commercial city hotel asset focused on urban luxury and corporate hospitality rather than direct wildlife or eco-conservation programs.",
      supportingSignals: [],
      mismatchConditions: ["Absence of field conservation engagement or eco-lodge infrastructure"],
    },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 nights",
    recommendedPositionNote: "\"Opening Immersion (The Flawless Launchpad) or Recovery / Grand Finale (The Urban Finale)\" hedge contained three literal canonical terms. Founder confirmed Opening Immersion. Nairobi region final tally: Opening Immersion x3 (100% concentration across Argyle Grand Hotel, Tamarind Tree Hotel, Villa Rosa Kempinski Nairobi).",
    whatShouldComeBefore: "Long-haul international flight arrival into Jomo Kenyatta International Airport (NBO)",
    whatShouldComeAfter: "A raw, canvas-walled riverine camp (e.g., Mara Intrepids Camp) or an exclusive conservancy lodge in Laikipia/Samburu",
    emotionalTransitionRationale: "Resolves international flight fatigue and urban transit friction on arrival through high-end dining, spa recovery, and physiological rest; provides an opulent final-night transition from rugged bush wilderness back to urban refinement before airport departure.",
  },

  narrative: {
    whyChosen: "Nairobi's premier urban sanctuary of classic European opulence, offering world-class dining, an exceptional wellness spa, and lightning-fast airport access via the Expressway at the gateway to Westlands.",
    bestUsedFor: "Premium corporate travelers, diplomatic clients, and luxury safari tourists who require a flawless, high-amenity transit stop in Nairobi.",
    lessSuitableFor: "Eco-purists or bohemian travelers wanting a rustic, low-footprint, character-filled boutique guest house or historic cottage (steer toward Karen); travelers seeking a quiet, sprawling garden estate rather than a vertical urban footprint.",
    overview: "Villa Rosa Kempinski Nairobi is a towering monument to grand European hospitality situated at the literal epicenter of East Africa's commercial capital. Rising above Chiromo Road in Westlands, its iconic soft-pink exterior gives way to an interior world defined by marble floors, dramatic floral arrangements, and cascading crystal chandeliers. The property functions as an upscale oasis within a hyper-kinetic city.",
    emotionalFeel: "The psychological profile of Villa Rosa Kempinski is one of elite sanctuary and high-status comfort. When a guest steps through the rigorous exterior security checkpoint and enters the grand lobby, there is an immediate sense of relief and safety. It evokes the secure, pampering feeling of a classic grand hotel where every staff member anticipates logistical needs before they arise. The ambient mood transitions from a focused, sharp business energy during breakfast to an indulgent, celebratory, and dressed-up atmosphere by nightfall.",
    sensorySignature: {
      visual: ["Soft-pink architectural facade", "Towering marble lobby pillars", "Cascading crystal chandeliers", "Expansive city-skyline views from rooftop terraces"],
      auditory: ["Muffled, pin-drop quiet room interiors", "Low distant hum of city traffic", "Ambient lounge piano notes", "Live Levant music at Tambourin"],
      olfactory: ["Crisp air-conditioning shielding from mid-day heat", "Fresh espresso in the K Lounge", "Subtle luxury hotel diffuser fragrances", "Warm wood-fired pasta/pizza aromas from Lucca"],
    },
    positiveSignals: [
      "The Expressway Efficiency — escaping a grueling international flight and arriving in a luxury suite within 20-30 minutes is a major competitive advantage",
      "A Masterclass in City Dining — Lucca's authentic pasta and the rooftop ambiance of Tambourin eliminate the need to leave the hotel for dinner",
      "The Spa Sanctuary — the Kempinski Spa is rated among the finest in East Africa, with deep-tissue treatments, steam facilities, and a heated outdoor pool",
      "Flawless Soundproofing — rooms remain pin-drop quiet even during peak Nairobi rush hours despite the major traffic corridor location",
    ],
    negativeSignals: [
      "The Front-Facing Street Noise — lower-floor rooms facing the main highway can catch faint low-frequency traffic vibrations or late-night street noise",
      "Rigid, Traditional Aesthetics — heavy drapery, patterned carpets, and classical wood detailing can feel dated or overly formal for glass-and-steel minimalist preferences",
      "Beverage Premium Pricing — aggressive pricing for alcoholic beverages and imported waters at specialty lounges can cause sticker shock",
      "Peak Hour Lobby Congestion — the venue for weddings, corporate launches, and political summits can feel crowded during late afternoon check-in waves",
    ],
    hiddenGems: [
      "The Cigar Lounge and elevated terrace nooks within Tambourin — intimate, wind-sheltered vantage points over the Westlands skyline at twilight, away from the main restaurant crowds; Executive-level rooms also unlock the private Executive Lounge with complimentary sundowner cocktails",
    ],
    signatureMemory: "Sipping a craft cocktail on the open-air rooftop terrace of Tambourin as evening breezes mix with live Levant music, watching the twilight lights of the Westlands skyline after a long international flight.",
    expectationManagement: "Travelers must understand this is a high-density, vertical urban hotel in a commercial business district, not a sprawling, quiet garden estate or wilderness lodge. Front-facing lower-floor rooms may carry subtle street vibrations; light sleepers should explicitly request high-floor, pool-facing or garden-facing units.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Premium corporate travelers, diplomatic clients, and luxury safari tourists who require a flawless, high-amenity transit stop in Nairobi",
      "Guests wanting culinary depth, elite spa facilities, Expressway proximity, and military-grade security",
    ],
    doNotRecommendConditions: [
      "Eco-purists or bohemian travelers wanting a rustic, low-footprint, character-filled boutique guest house or historic cottage (steer toward Karen)",
      "Travelers seeking a quiet, sprawling garden estate environment",
    ],
    confidenceLevel: "High Confidence (Excellent)",
    competitiveAdvantage: "Direct Nairobi Expressway connectivity combined with military-grade security, world-class spa facilities, and unmatched culinary depth in the Westlands corridor.",
    mainLimitation: "High-density urban commercial footprint and potential lobby congestion during peak event hours.",
    positioningSummary: "Nairobi's premier urban sanctuary of classic European opulence, offering world-class dining, an exceptional wellness spa, and lightning-fast airport access via the Expressway at the gateway to Westlands.",
  },

  pairings: [
    {
      pairedEntity: "Mara Intrepids Camp (Maasai Mara) or an exclusive conservancy lodge in Laikipia",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Moving from the hyper-polished, marble-and-chandelier luxury of the Kempinski straight into a raw, canvas-walled riverine camp creates an unforgettable sensory contrast.",
    },
    {
      pairedEntity: "Maasai Mara Reserve or Laikipia Plateau",
      pairingCategory: "Complementary Region",
      rationale: "Villa Rosa Kempinski serves as the high-spec urban transit anchor before or after deep-bush charter flights out of Wilson Airport.",
    },
    {
      pairedEntity: "Villa Napaiyan at Maiyan Resort (Nanyuki)",
      pairingCategory: "Complementary Experience",
      rationale: "Transitions the client seamlessly from classic, grand European city luxury to modern, clean-lined residential country-club living against the backdrop of Mount Kenya.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property operational profiles", "Swafaris internal destination assessments", "Guest feedback audits", "Regional transit log data"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [],
  },
};