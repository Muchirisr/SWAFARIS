// data/knowledge-base/aberdare/le-pristine-hotel.ts
export const lePristineHotel = {
  id: "le-pristine-hotel", // NEW lodge, no existing DB record
  name: "Le Pristine Hotel",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Nyeri County, Central Kenya",
  ecosystem: "Highland forest edge / Highland valley (Gamerock enclave overlooking Central Kenya foothills toward Mount Kenya)",
  propertyType: "Boutique Wellness & Healing Hotel",
  accommodationStyle: "Clean, minimalist boutique suites featuring private balconies and garden orientations.",
  locationDetail: "Gamerock enclave, off Seremwai Road, ~4 km from Nyeri Town.",
  nearestGate: "Aberdare National Park Wandare Gate / Kiandongoro Gate (~30–45 minutes drive)",
  nearestAirstrips: ["Nyeri Airport / Nyaribo Airstrip (NYE)", "Nanyuki Airstrip (NYK)"],
  accessibilityNotes: "Accessible year-round via paved tarmac road (Seremwai Road off Nyeri-Kiganjo road) with smooth 2WD vehicle access to the property entrance.",
  priceRangeMinUsd: 85,
  priceRangeMaxUsd: 150,
  rawMarketTier: "Budget Premium", // as stated in source doc — not a real tier label, preserved verbatim
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price midpoint ($117.5) falls in the Value band ($150 or below)
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Aberdare National Park (waterfall trekking)",
    "Samburu National Reserve (vehicle tracking)",
    "Solio Game Reserve (rhino tracking)",
    "Diani Beach or Watamu (coastal decompression leg)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Romantic", "Peaceful"], // "Cinematic" substituted → Inspirational; "Intimate" substituted → Romantic per founder decision (Sanctuary Seekers compatibility supports this, unlike Treetops)
    energyType: ["Wellness"], // "Decompression retreat" and "Restorative" both consolidated to Wellness per founder decision — no strong second driver present in this doc
    experiencePace: "Slow",
    comfortPhilosophy: ["Exclusive Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // founder-confirmed: low key count, private balconies, Isolated social dynamic, Privacy Score 8/10
    journeyRole: "Grand Finale", // founder-confirmed, resolved from source's dual "Mid-Trip Recovery Pad or Romantic Itinerary Finale" hedge
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Slow Travelers"], // CORRECTED: "Post-Trek / Post-Safari Recovery Travelers" dropped, not a real category
    idealTravelersSecondary: [],
    intensityScore: 1, relaxationScore: 9, authenticityScore: 8, premiumScore: 8,
    adventureScore: 2, privacyScore: 8, wildlifeExperienceScore: 2,
    culturalImmersionScore: 5, familySuitabilityScore: 2, comfortScore: 8,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "~3 to 3.5 hours overland from Nairobi; 15–20 minutes road transfer from Nyeri Airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Highland climate produces cool mornings and chilly evenings (10°C–14°C); wet seasons (April–May, November) do not restrict road access.",
    electricitySystem: "Continuous mains electrical grid supply supplemented by a quiet back-up generator system to preserve acoustic tranquility.",
    powerReliability: "High",
    waterReliability: "Piped municipal/spring water supply utilizing solar thermal and electric hot water heating for private bathrooms and spa treatment facilities.",
    internetAvailability: "Reliable high-speed Wi-Fi across guest suites and common wellness spaces.",
    mobileNetwork: "Strong Safaricom/Airtel coverage.",
    medicalAccess: "High urban-adjacent proximity — ~4 km from Nyeri Town, direct access to Outspan Hospital and Consolata Hospital Nyeri for full emergency services.",
    childFriendly: false, // "Low" per source — quiet wellness atmosphere and full fee charges for child amenity usage create operational friction
    mobilityFriendly: true, // "Moderate to High" per source — ground-level boutique footprint, manicured gardens, light gradients
    operationalLimitations: [
      "Absence of large-scale resort infrastructure (Olympic-sized pools, commercial fitness centers)",
      "No wild animals roaming on-site",
      "Higher price point relative to basic local commercial hotels in Nyeri",
      "Full fee charges for child amenity usage create friction for families with young children",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High-stress professionals seeking a nervous system reset benefit directly from the zero-stimulation environment, essential oil spa therapies, and organic Ayurvedic dining.",
      supportingSignals: ["Zero-stimulation, low-intensity environment (Intensity Score 1/10)", "Essential oil spa therapies", "Organic Ayurvedic farm-to-table dining"],
      mismatchConditions: ["Requires the guest to accept an unhurried, slow pace without high-speed corporate amenities or large commercial gym facilities"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Honeymooners / Couples\"; corrected to the canonical category, Honeymooners. Fit: intimate, uncrowded atmosphere, private balcony configurations facing theatrical Mount Kenya dawns, and quiet garden settings deliver high romantic isolation.",
      supportingSignals: ["Private balcony configurations", "Low key count, Isolated social dynamic", "Mount Kenya dawn views"],
      mismatchConditions: ["Lacks high-energy resort entertainment, expansive pool decks, or night-life infrastructure"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source used an invented archetype (\"The Mindful Slow-Traveler\") under an invented category (\"Wellness Enthusiasts\") — no real archetype by that name exists. Remapped to The Biophilic Restorer, the real Slow Travelers archetype supported by the same underlying fit: built from the ground up for holistic living, featuring outdoor morning yoga, farm-to-table culinary experiences, and dedicated healing programs.",
      supportingSignals: ["Outdoor morning yoga", "Farm-to-table Ayurvedic culinary program", "Dedicated holistic healing programs"],
      mismatchConditions: ["Not located within a deep-wilderness game reserve; suburban-adjacent setting may feel less isolated than a remote bush camp"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"High-Energy Families with Young Children\"; corrected to the canonical category, Families. Peaceful acoustic expectations, adult wellness focus, and full fee structures for child activity usage generate operational and behavioral friction.",
      supportingSignals: [], mismatchConditions: ["Guest dissatisfaction caused by a restrictive environment for active, noisy child play"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Safari Purists / Wildlife Enthusiasts\"; corrected to the canonical category, Luxury Adventurers. Suburban-adjacent enclave location lacks wild animals on property, remote wilderness atmosphere, or direct game-viewing access from bedrooms.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment for travelers expecting a traditional game-reserve safari camp"] },
    // DROPPED: "The Commercial Mega-Resort Seeker" — not a real archetype or category; underlying concern (lack of sprawling resort facilities) already captured in operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights (24 to 48 Hours)",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Mid-Trip Recovery Pad or Romantic Itinerary Finale,\" both mapping to canonical values (Recovery / Grand Finale) — genuine either/or requiring founder input. Founder resolved to Grand Finale, given the doc's strong romantic-isolation framing and 'itinerary finale' language pointing toward journey-end positioning rather than mid-trip recovery. REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x3 (Treetops Lodge, Rhino Watch Safari Lodge, Bantu Africa Resort), Recovery x1 (Outspan Hotel Nyeri), Grand Finale x1 (this lodge).",
    whatShouldComeBefore: "Physically demanding or high-stimulation legs (e.g., multi-day Aberdare range trekking, high-altitude hiking, or dusty vehicle safari circuits in Samburu or Solio).",
    whatShouldComeAfter: "Departure flight home via Nairobi, or a coastal relaxation leg (e.g., Diani Beach or Watamu) for final decompression.",
    emotionalTransitionRationale: "Shifts the traveler from high kinetic exertion and dusty sensory overload into a grounded, mindful, and physically restored state.",
  },

  narrative: {
    whyChosen: "An intimate boutique wellness sanctuary built from the ground up around genuine holistic healing, offering a high-privacy romantic or restorative close to a Kenya itinerary.",
    bestUsedFor: "Burned-out executives needing a genuine nervous-system reset, couples wanting a quiet romantic finale, and slow travelers drawn to holistic living and farm-to-table dining.",
    lessSuitableFor: "High-energy families with young children requiring active play facilities, and safari purists expecting wild animals roaming the property grounds.",
    journeyPositionNote: "Grand Finale — a deliberate 'pacing dip' after grueling, physically demanding safari legs, giving travelers 24 to 48 hours to wash off safari dust and recalibrate before heading home or continuing to a coastal leg.",
    overview: "Le Pristine Wellness and Healing Hotel operates as an intentional, highly specific sanctuary hidden away in the Gamerock suburb of Nyeri. The overarching atmosphere trades the traditional safari-camp aesthetic for a clean, minimalist, and deeply restorative boutique wellness retreat.",
    emotionalFeel: "Tranquil, deeply restorative, and unhurried. Mornings begin with misty mountain vistas and outdoor yoga, days flow into spa treatments or quiet reading on private balconies, and evenings feature nourishing Ayurvedic meals.",
    sensorySignature: {
      visual: ["Misty highland dawns breaking over Mount Kenya", "Lush private garden greenery", "Clean minimalist architectural lines"],
      auditory: ["Gentle mountain breezes through the canopy", "Morning highland birdsong", "Deep acoustic stillness"],
      olfactory: ["Soothing essential oils drifting from the spa", "Crisp highland morning air", "Fresh farm-to-table aromatics"],
    },
    positiveSignals: [
      "Consistently praised interactive cooking elements, farm-to-table freshness, and modern health-conscious Ayurvedic menus",
      "Standout spa treatments and a quiet ambience delivering authentic holistic wellness value",
      "Verified sunrise views over Mount Kenya creating a theatrical, peaceful backdrop",
      "Limited key count and private balcony configurations ensuring an uncrowded sanctuary feel",
    ],
    negativeSignals: [
      "Complaints regarding full charges for child amenity usage indicate structural optimization for quiet adults rather than active play",
      "Lack of sprawling resort facilities such as Olympic pools or commercial fitness centers",
      "Positioned at a higher price point than standard commercial hotels in Nyeri, requiring value framing around its premium wellness niche",
    ],
    hiddenGems: [
      "Ground-up wellness authenticity — explicitly built around holistic healing, forest bathing, mindfulness retreats, and Ayurvedic culinary art, allowing advisors to target clients with specialized dietary or stress-recovery needs without booking an impersonal resort.",
    ],
    signatureMemory: "Stepping onto a private balcony at dawn with a hot herbal infusion, taking in the crisp mountain air as the morning light illuminates Mount Kenya, followed by a personalized Ayurvedic breakfast.",
    expectationManagement: "Travelers must understand this is an adult-oriented boutique wellness sanctuary located in a suburban-adjacent highland enclave near Nyeri, not a deep-bush safari lodge with free-roaming wildlife.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Traveler profile displays high indicators of work-related burnout",
      "Traveler requests an emphasis on wellness/spa lifestyle",
      "Traveler demands strict healthy/organic or specialized Ayurvedic dietary care",
      "Traveler needs a quiet romantic stopover to break up an intensive overland safari circuit",
    ],
    doNotRecommendConditions: [
      "High-energy families with young children requiring active play facilities",
      "Safari purists who expect wild animals to roam through the property grounds",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Specialized holistic wellness infrastructure and organic farm-to-table Ayurvedic dining at an accessible price point.",
    mainLimitation: "Suburban-adjacent boutique location with no on-site wildlife viewing and minimal resort-scale sports facilities.",
    positioningSummary: "An intimate, boutique highland wellness sanctuary in Nyeri that combines targeted holistic spa therapies and organic farm-to-table dining, making it the ultimate restorative haven for travelers seeking a deep mind-body reset mid-safari.",
  },

  pairings: [
    { pairedEntity: "Aberdare National Park", pairingCategory: "ecosystem", rationale: "Pairs high-altitude moorland waterfall trekking with therapeutic spa recovery and farm-to-table dining afterward." },
    { pairedEntity: "Samburu National Reserve", pairingCategory: "regional", rationale: "Pairs semi-arid red-dust bushveld vehicle tracking with a deliberate post-safari pacing dip to wash off dust and soothe sore muscles." },
    { pairedEntity: "Solio Game Reserve", pairingCategory: "experience", rationale: "Pairs rhino tracking with therapeutic spa recovery before departure or a coastal leg." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Property operational specs", "Guest feedback aggregations", "Regional geographic access logs"],
    confidenceLevel: "Verified Experiential Property Profile",
    verificationRequirements: [
      "Exact total suite/room count — explicitly flagged REQUIRES_VERIFICATION in source",
      "Original establishment launch year — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};