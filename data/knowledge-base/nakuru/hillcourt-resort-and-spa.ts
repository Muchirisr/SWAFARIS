// data/knowledge-base/nakuru/hillcourt-resort-and-spa.ts
export const hillcourtResortAndSpa = {
  id: "hillcourt-resort-and-spa", // NEW lodge, no existing DB record
  name: "Hillcourt Resort and Spa",
  country: "Kenya",
  region: "Nakuru",
  subRegion: "Milimani / Section 58 Suburban Fringe, Nakuru-Nairobi Highway",
  ecosystem: "Rift Valley Urban Fringe / Lake Nakuru Basin / Menengai Crater Foothills",
  propertyType: "Modern Suburban Resort & Full-Service Wellness Hotel",
  accommodationStyle: "Contemporary stone-and-concrete multi-story hotel blocks featuring soundproofed rooms and suites with modern tile finishes and private balconies overlooking the pool complex or Menengai ridge line.",
  locationDetail: "Milimani / Section 58 suburban fringe, along the Nairobi-Nakuru highway corridor, near the historic Hyrax Hill Prehistoric Site.",
  nearestGate: "Lake Nakuru Main Gate (~10 km / 15–20 minutes drive); Lanet Gate (~8 km / 12–15 minutes drive)",
  nearestAirstrips: ["Lanet Airstrip", "Naishi Airstrip (inside Lake Nakuru National Park)"],
  accessibilityNotes: "Accessible year-round via fully paved tarmac highways directly off the main Nairobi-Nakuru corridor. Internal ground paths are stone-paved and level, but multi-story room blocks rely strictly on staircases.",
  priceRangeMinUsd: 60,
  priceRangeMaxUsd: 110,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — $85 midpoint folds into Value per governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara National Reserve or Lake Elmenteita (ecosystem contrast pairing)",
    "Naivasha / Elmenteita or Mount Longonot (regional adventure circuit pairing)",
    "Lenchada Tourist Camp (experience contrast pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Restorative", "Peaceful", "Elegant"], // corrected from source doc's "Functional Comfort | Rejuvenating | Urban Hideaway" — none valid vocabulary
    // RETROFIT: originally logged as a standing ontology gap (dropped the corporate/business
    // dimension entirely, energyType: ["Wellness"] only), since no approved Energy Type value
    // existed for logistical/road-trip convenience. Resolved retroactively once "Transit
    // Convenience" was formally accepted into SWA-DATA-002 (first applied to Buraha Zenoni
    // Hotel & Resort, also Nakuru batch). The corporate/business-meeting dimension itself is
    // still intentionally excluded — that positioning is already captured via the Bleisure
    // Explorers category and the Corporate Catalyst / Deep-Work Sovereign archetypes below.
    energyType: ["Wellness", "Transit Convenience"],
    experiencePace: "Slow", // confirmed
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort", // source doc's "Modern Suburban" is not valid vocabulary; mapped per founder confirmation
    journeyRole: "Recovery", // resolved directly from source doc's "Recovery / Reset or The Transit Buffer" — Recovery is itself canonical SWA-DATA-002 vocabulary
    idealTravelersPrimary: ["Bleisure Explorers", "Families", "Students"], // "Business & Conference Travelers" is non-canonical; folded into Bleisure Explorers, whose archetypes already cover both listed lodge archetypes
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 7, authenticityScore: 4, premiumScore: 4,
    adventureScore: 3, privacyScore: 5, wildlifeExperienceScore: 2,
    culturalImmersionScore: 4, familySuitabilityScore: 8, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2.5 to 3 hours overland from Nairobi (~155 km) via A104 paved tarmac highway; 25–30 minute flight from Wilson Airport (WIL) to Naishi/Lanet airstrips plus a 20-minute road transfer.",
    seasonalAccessibility: "Open year-round with zero seasonal road degradation. Fully urbanized drainage prevents water accumulation during peak rainy seasons (April–May).",
    rainySeasonImpact: "None reported — fully urbanized drainage prevents water accumulation.",
    electricitySystem: "Continuous 24-hour national grid electricity supported by an automatic heavy-duty backup diesel generator.",
    powerReliability: "High-speed electrical stability across all units; in-room charging ports included.",
    waterReliability: "Reliable pressurized municipal water system combined with commercial electric/solar water heaters, delivering high-pressure hot water across all room categories.",
    internetAvailability: "Strong 4G/5G cellular coverage via Safaricom and Airtel. High-speed complimentary Wi-Fi throughout private rooms, conference suites, and public pool areas.",
    mobileNetwork: "Strong Safaricom and Airtel cellular data coverage.",
    medicalAccess: "High. Proximity to Nakuru City's premier private hospitals (e.g., Nakuru War Memorial Hospital, Aga Khan University Hospital Clinic) within 10–15 minutes drive (~5 km). On-site first aid resources available.",
    childFriendly: true, // "High" per source
    mobilityFriendly: false, // "Moderate to Low" per source — no guest elevators, upper floors staircase-only
    operationalLimitations: [
      "Lack of elevator infrastructure restricts high-floor accessibility for guests with severe mobility impairments",
      "Weekend traffic at the on-site bar/restaurant and pool deck can generate higher ambient social noise",
      "A-la-carte dining service velocity can slow down during concurrent corporate conference events",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Corporate Catalyst", matchStrength: "Strong",
      reasoning: "High-speed Wi-Fi, dedicated work desks, quiet soundproofed rooms, and conference facilities allow seamless remote work or meeting execution, paired with quick evening access to the heated pool and spa.",
      supportingSignals: ["High-speed Wi-Fi and work desks", "Conference facilities on-site"],
      mismatchConditions: ["Lacks high-end executive butler services or private boardrooms outside central conference areas"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Deep-Work Sovereign", matchStrength: "Strong",
      reasoning: "Reliable grid electricity, strong cellular signal, functional room ergonomics, and full-service room service allow uninterrupted productivity during long road circuits.",
      supportingSignals: ["Reliable power and connectivity", "Full-service room service"],
      mismatchConditions: ["Suburban noise on busy weekends requires selecting rooms on upper levels away from public social zones"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Heated pool infrastructure prevents cold water shock for young children, soundproofed rooms absorb night crying, and proximity to Nakuru's top private hospitals provides high parental security.",
      supportingSignals: ["Heated pool for young children", "Proximity to top private hospitals"],
      mismatchConditions: ["Lack of elevators requires carrying strollers up staircases if assigned to upper-floor rooms"] },
    { fitType: "ideal", category: "Students", archetype: "The Solitary Resetter", matchStrength: "Strong",
      reasoning: "Accessible price range ($60–$110/night) combined with full spa access, gym facilities, and a heated pool provides an affordable physical reset buffer along a budget overland route.",
      supportingSignals: ["Affordable price point", "Full spa and gym access"],
      mismatchConditions: ["Zero wilderness immersion or traditional safari atmosphere"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Suburban hotel layout, visible parking areas, proximity to main highway traffic, and corporate conference presence destroy romantic seclusion and wilderness exclusivity.",
      supportingSignals: [], mismatchConditions: ["Severe emotional disappointment from the absence of private plunge pools, canvas tent romance, or open-nature panoramas"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "Standard suburban architecture, mid-scale buffet dining, and absence of private guides or custom 4x4 vehicles fail to meet ultra-luxury expectations.",
      supportingSignals: [], mismatchConditions: ["Total mismatch with desires for raw, low-density wilderness tracking and bespoke high-end safari aesthetics"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "The Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "Zero on-site natural habitat, absence of wild game, and urban-edge surroundings offer no wildlife photography opportunities directly from the property.",
      supportingSignals: [], mismatchConditions: ["Complete loss of photographic field time due to suburban positioning"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 Night (Maximum 2 Nights as a regional base camp)",
    recommendedPositionNote: "Source frames this as 'Recovery / Reset or The Transit Buffer'; resolved to the canonical value Recovery, since it is already valid SWA-DATA-002 vocabulary — no correction needed. This is lodge #2 of the Nakuru batch (lodge #1, Lake Nakuru Lodge, resolved to Opening Immersion), so no journeyRole concentration pattern to flag yet.",
    whatShouldComeBefore: "Arrival from a long international flight followed by an intense 5–6 hour road transit from Nairobi, or immediately following an intense, dusty budget camping safari (e.g., Lenchada Tourist Camp).",
    whatShouldComeAfter: "Transition into deep, low-density wilderness reserves (such as the Maasai Mara, Ol Pejeta Conservancy, or Lake Elmenteita conservancies).",
    emotionalTransitionRationale: "Acts as a physical cleansing and psychological reset chamber — washing away road dust, restoring sleep hygiene with hot showers and plush bedding, and easing transit fatigue before diving into unshielded wilderness environments.",
  },

  narrative: {
    whyChosen: "Hillcourt is the reference example for a suburban wellness anchor along the main Nairobi-Nakuru corridor: a zero-friction highway pit stop that converts road fatigue into physical recovery before travelers re-enter the wild.",
    bestUsedFor: "Business travelers, conference delegates, road-trippers, or budget-conscious families needing an affordable, spotlessly clean, and highly functional urban base camp equipped with a heated pool, gym, and full-service spa near Lake Nakuru National Park.",
    lessSuitableFor: "The client is a luxury honeymooner, seasoned safari purist, or high-net-worth traveler expecting isolated canvas romance, unfenced wilderness, or dedicated private butler service. Avoid for guests who cannot navigate staircases due to the lack of elevators.",
    journeyPositionNote: "Recovery — a physical and psychological reset chamber positioned either as a pre-safari buffer stop from Nairobi or a post-safari cleansing stop after a rugged camping circuit.",
    overview: "Hillcourt Resort and Spa functions as a premium, highly reliable suburban oasis located on the outskirts of Nakuru town along the Nairobi-Nakuru highway corridor, near the historic Hyrax Hill Prehistoric Site. The property departs from classic wilderness lodge aesthetics, opting instead for a clean, contemporary hotel architecture centered around a vibrant, heated outdoor swimming pool complex.",
    emotionalFeel: "The psychological atmosphere is one of immediate physical relief and functional decompression. Stepping into the property after a long, high-traffic road journey from Nairobi or a sun-baked safari layout produces an instant feeling of physical comfort. Waking up to a smooth, hot shower with high-pressure plumbing, eating a varied multi-cuisine breakfast, and watching morning light glint off the heated pool evokes a reassuring sense of modern predictability before diving back into the rugged wild.",
    sensorySignature: {
      visual: ["Sunlight reflecting off the clear, heated outdoor pool against modern white-and-stone hotel balconies and manicured garden borders"],
      auditory: ["Soft hum of the pool filtration system", "Background ambient lounge music", "Distant sounds of Nakuru's suburban fringe"],
      olfactory: ["Eucalyptus steam oil from the spa", "Chlorine warmth from the heated pool", "Rich espresso coffee from the main restaurant"],
    },
    positiveSignals: [
      "Premier full-service wellness center: professional spa massages, functional steam rooms, and sauna facilities",
      "Clean, heated pool infrastructure that scores exceptionally high with travelers across all seasons",
      "Strategic regional base camp: quick, low-friction entry to both Lake Nakuru National Park (~10-15 mins) and Hyrax Hill Prehistoric Site (~3 mins)",
      "Excellent value-for-money accommodations: clean, spacious, soundproofed rooms (especially Executive and Deluxe categories) at highly accessible price points",
    ],
    negativeSignals: [
      "Suburban/urban layout limitations: complete absence of fence-front wilderness views or open-plains game viewing from room balconies",
      "Variable dining wait times when major corporate conferences occupy the primary kitchen staff",
      "Lack of on-site elevators; multi-story access relies entirely on staircases",
      "Localized weekend traffic: pool and bar popularity among local residents can introduce high social volume",
    ],
    hiddenGems: [
      "Booking the Executive Suites equipped with deep soaking bathtubs elevates the property from a standard transit hotel into a private personal sanctuary. Swafaris can also leverage the hotel's reliable internal transport fleet to coordinate tailored, low-cost day excursions to Menengai Crater or Lord Egerton Castle, bypassing third-party transport friction.",
    ],
    signatureMemory: "Stepping out of a hot eucalyptus steam session in the spa at dusk and sliding directly into the illuminated, heated outdoor pool as the cool Rift Valley night air settles over Nakuru.",
    expectationManagement: "Travelers must explicitly understand that Hillcourt Resort and Spa is a modern suburban wellness hotel on the edge of Nakuru city, not a bush-tented safari camp. Expect concrete hotel architecture, paved highway access, and urban convenience rather than wild animal sounds or open savannah vistas.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Business traveler, conference delegate, road-tripper, or budget-conscious family needing an affordable ($60–$110/night), spotlessly clean, and highly functional urban base camp equipped with a heated pool, gym, and full-service spa near Lake Nakuru National Park.",
    ],
    doNotRecommendConditions: [
      "Luxury honeymooner, seasoned safari purist, or high-net-worth traveler expecting isolated canvas romance, unfenced wilderness, or dedicated private butler service",
      "Guest who cannot navigate staircases due to the lack of elevators",
    ],
    confidenceLevel: "High", // per source — "High Confidence (As a Transit/Wellness Anchor)"
    competitiveAdvantage: "Superior wellness infrastructure (heated pool, sauna, steam room, full spa) combined with fast tarmac highway access at a fraction of in-park lodge costs.",
    mainLimitation: "Suburban/urban setting lacking direct wilderness ambiance, combined with the lack of elevators for upper floors.",
    positioningSummary: "A modern suburban resort and wellness haven near Nakuru, offering pristine heated pool facilities, a professional full-service spa, and clean contemporary comfort just minutes from Lake Nakuru National Park.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara National Reserve or Lake Elmenteita", pairingCategory: "ecosystem", rationale: "Moving guests from the polished, wellness-centric urban ecosystem of Nakuru straight into open savannahs or soda lake conservancies creates a stark, highly rewarding contrast in scale and wilderness depth." },
    { pairedEntity: "Great Rift Valley Lakes (Naivasha/Elmenteita) or Mount Longonot", pairingCategory: "regional", rationale: "Anchors an active outdoor adventure circuit with suburban recovery stops." },
    { pairedEntity: "Lenchada Tourist Camp", pairingCategory: "experience", rationale: "Pairs this modern suburban resort with an intimate, canvas-only eco-camp to balance modern comfort with deep wilderness isolation." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field operational surveys", "Regional hotel registries", "Municipal location data", "Property infrastructure logs", "Guest experience analytics"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Exact total count of Executive Suites with deep soaking tubs — explicitly flagged REQUIRES_VERIFICATION in source",
      "Specific solar heating integration percentage for the main pool — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};