export const simbaWaKaleSuites = {
  id: "simba-wa-kale-suites-watamu",
  name: "Simba wa Kale Suites",
  country: "Kenya",
  region: "Coast",
  subRegion: "Watamu (Chembe Bay / Jacaranda Beach), Kilifi County",
  ecosystem: "Marine Ecosystem — fronting the dynamic tidal flats and white-sand barrier bars of Jacaranda Beach",
  propertyType: "Adults-Only Boutique Heritage & Design Sanctuary",
  accommodationStyle: "Minimalist Swahili-Mediterranean fusion featuring white masonry, floor-to-ceiling glass paneling, carved antique Swahili doors, architectural friezes, and hand-selected global antiques",
  locationDetail: "Independently owned and managed; intimate key count featuring ocean-view suites and boutique residential units; established ~2020",
  nearestAirstrips: ["Malindi Airport (MYD) — primary", "Moi International Airport, Mombasa (MBA) — secondary, 2-2.5hr road transfer"],
  nearestGate: "N/A (Coastal Property; situated directly on Chembe Bay / Jacaranda Beach front)",
  accessibilityNotes: "Accessible year-round via the unpaved Jacaranda road off the main Watamu tarmac corridor. Single-level ground floor public areas with paved stone pathways, though upper-level suites require stair navigation.",
  priceRangeMinUsd: 300,
  priceRangeMaxUsd: 600,

  // Self-stated "Mid" tier; midpoint of $300-600 = $450, matching Mid-Range ($300-499) cleanly.
  // No override needed.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Soroi Larsens Camp", "Mara Expedition Camp", "Sala's Camp", "Soroi Mara Bush Camp"],

  rawSourceJson: {
    officialBrandName: "Simba wa Kale Suites & Beach",
    yearEstablished: "~2020",
    unitBreakdown: "Intimate key count featuring ocean-view suites and boutique residential units",
    priceRange: "$300-600 USD per room/night, Bed & Breakfast / Half Board depending on suite category and season.",
  },

  experienceDna: {
    // "Cinematic" substituted with "Inspirational" per standing rule; "Elegant" and "Intimate" are
    // canonical as-stated.
    emotionalTone: ["Inspirational", "Elegant", "Intimate"],

    // Source states "Decompression retreat | Quiet luxury" — the same non-canonical pattern
    // resolved twice already (Severin Sea Lodge, Hemingways Watamu) → Wellness + Luxury Escape.
    energyType: ["Wellness", "Luxury Escape"],

    experiencePace: "Slow", // canonical as-stated

    // Source self-labels "Heritage luxury | Quiet luxury," but this property was established
    // ~2020 — heritage-STYLED decor on new construction, not genuine institutional heritage (unlike
    // Hemingways Watamu). Profile instead parallels Almanara Luxury Boutique Hotel closely:
    // Isolated social dynamic, adults-only, Privacy 9/10, Premium 9/10, small intimate scale.
    // Founder confirmed Exclusive Luxury / Ultra-Exclusive Sanctuary over the doc's own "Heritage"
    // framing — first time this detailed value pairs with a Mid-Range tier (Almanara was Premium).
    comfortPhilosophy: ["Exclusive Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary",

    // "Coastal Decompression / Romantic Finale" hedge contained no literal canonical term. Founder
    // confirmed Grand Finale, matching the narrative's explicit "3-to-5-night closing sanctuary"
    // framing — mirrors Hemingways Watamu's positioning closely.
    // Watamu sub-phase running tally: Grand Finale x2, Recovery x1.
    journeyRole: "Grand Finale",

    // idealTravelersPrimary: doc's "Slow Travelers" dropped (no archetype support). "Luxury
    // Adventurers" and "Solo Explorers" added (confirmed ideal-fit archetypes below, not in the
    // doc's own summary line), per established precedent.
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Luxury Adventurers", "Solo Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 2,
    relaxationScore: 9,
    authenticityScore: 8,
    premiumScore: 9,
    adventureScore: 4,
    privacyScore: 9,
    wildlifeExperienceScore: 5,
    culturalImmersionScore: 7,
    familySuitabilityScore: 0,
    comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "30-35 minutes road transfer from Malindi Airport (MYD); 2 to 2.5 hours road transfer from Moi International Airport, Mombasa (MBA)",
    seasonalAccessibility: "Open year-round. Kusi monsoons (May-October) bring cooler breezes and shifting sea tides; Kaskazi monsoons (November-April) bring calm, clear turquoise seas and warm temperatures.",
    electricitySystem: "24-hour continuous mains grid electrical supply supported by heavy-duty silent backup generators and solar infrastructure",
    powerReliability: "High",
    waterReliability: "High — reverse-osmosis water treatment system paired with solar photovoltaic and electric water heating systems providing consistent hot water pressure",
    internetAvailability: "Complimentary high-speed Wi-Fi across all private suites, infinity pool decks, and SWK Beach Club lounge areas",
    mobileNetwork: "Excellent 4G/LTE mobile coverage via Safaricom and Airtel",
    medicalAccess: "On-site first aid kit; direct 20-minute road access to private medical clinics in central Watamu; 30-35 minutes to full medical facilities and private hospitals in Malindi",
    childFriendly: false, // stated "Zero (Strictly Adults-Only)"
    // Stated cleanly as "Moderate" (not hedged toward Low, e.g. "Moderate to Low") — per the
    // standard "Moderate → true" precedent (see Lewa Wilderness governance note), resolves true.
    // The named elevator/stairs limitation is captured in operationalLimitations rather than
    // flipping the grade, since it applies only to upper-floor units, not the property as a whole.
    mobilityFriendly: true,
    operationalLimitations: [
      "Strict adults-only policy",
      "Massive tidal fluctuations restricting all-day direct ocean swimming from shore",
      "Isolated location off central Watamu's main strip",
      "Rigid non-refundable financial booking policies",
      "No elevator infrastructure — upper-floor ocean-view suites require stair navigation",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Offers an exclusive, highly romantic, adults-only sanctuary. Unobstructed ocean views from bed, candlelit Mediterranean seafood dining, and private beach club sandbank walks deliver an elite romantic atmosphere.",
      supportingSignals: ["Privacy score 9/10", "Adults-only policy", "Floor-to-ceiling ocean-view suites"],
      mismatchConditions: ["Must adapt ocean swimming routines to the daily tidal cycles of Chembe Bay"],
    },
    // CORRECTED CATEGORY: invented "Burned-out Executives & Design Purists" — corrects to canonical
    // Burned-out Executives.
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Complete absence of family resort noise, stunning Swahili-Mediterranean minimalist aesthetics, floor-to-ceiling horizon framing, and low guest density allow immediate mental disengagement.",
      supportingSignals: ["Relaxation score 9/10", "Intensity score only 2/10", "Isolated social dynamic"],
      mismatchConditions: ["Distance from central Watamu requires relying on private transfers for off-property dining"],
    },
    // CORRECTED CATEGORY: invented "Design-Forward Luxury Travelers" — corrects to canonical
    // Luxury Adventurers.
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Moderate",
      reasoning: "Appreciates the hyper-curated art gallery feel, antique carved Swahili doors, architectural friezes, and refined fusion culinary execution that outclasses standard resort buffets.",
      supportingSignals: ["Premium score 9/10", "Authenticity score 8/10", "Curated antique/design collection"],
      mismatchConditions: ["Strict non-refundable deposit and cancellation policies require rigid travel scheduling"],
    },
    // CORRECTED CATEGORY: invented "Aesthetic Purists" — corrects to canonical Solo Explorers.
    {
      fitType: "ideal",
      category: "Solo Explorers",
      archetype: "The Social Catalyst",
      matchStrength: "Moderate",
      reasoning: "Provides a quiet, highly secure, and visually breathtaking coastal compound to read, decompress, and enjoy quiet luxury without corporate resort crowds.",
      supportingSignals: ["Privacy score 9/10", "Isolated social dynamic", "Low guest density"],
      mismatchConditions: ["Social dynamic is quiet and isolated rather than high-energy or nightlife-driven"],
    },
    {
      fitType: "poorFit",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "Low",
      reasoning: "Strict adults-only operational blueprint completely bars children and adolescent travelers under adulthood.",
      supportingSignals: [],
      mismatchConditions: ["Immediate booking rejection or operational refusal at check-in"],
    },
    // DROPPED: incompatible archetype "The High-Activity Ocean Swimmer" — no canonical equivalent.
    // DROPPED: incompatible archetype "The Corporate Traveler / Volatile Schedule Executive" — no
    // canonical equivalent.
    // DROPPED: idealTravelersPrimary item "Slow Travelers" — no archetype support.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    recommendedPositionNote: "\"Coastal Decompression / Romantic Finale\" hedge contained no literal canonical term. Founder confirmed Grand Finale, matching the narrative's explicit '3-to-5-night closing sanctuary' framing, mirroring Hemingways Watamu's positioning. Watamu sub-phase running tally: Grand Finale x2, Recovery x1.",
    whatShouldComeBefore: "A high-intensity, high-vibration safari circuit (e.g., vehicle tracking in Samburu, Maasai Mara game drives, or dusty Tsavo wilderness trails)",
    whatShouldComeAfter: "Direct private road transfer to Malindi Airport (MYD) for domestic connections to Nairobi (WIL/NBO) and international departures",
    emotionalTransitionRationale: "Instantly transforms dusty, fast-paced safari exertion into quiet, elevated, barefoot romantic decompression and visual serenity.",
  },

  narrative: {
    whyChosen: "An intimate, adults-only Swahili-Mediterranean boutique sanctuary on Jacaranda Beach, offering pristine architectural elegance and panoramic ocean suites designed for deep romantic decompression.",
    bestUsedFor: "Affluent couples, design enthusiasts, or honeymooners seeking a quiet, adults-only, highly curated beachfront sanctuary to conclude a safari with fine dining, boutique scale, and architectural beauty.",
    lessSuitableFor: "Itineraries including children under adulthood, clients demanding continuous all-day ocean swimming regardless of tides, or travelers requiring flexible, fully refundable booking terms.",
    overview: "Simba wa Kale Suites & Beach is an intimate, adults-only architectural sanctuary tailored for aesthetic purists and luxury couples. Located on the white-sand flats of Chembe Bay / Jacaranda Beach, this boutique property fuses minimalist Mediterranean architecture with intricate Swahili heritage craftsmanship. Designed as a private estate, it trades large-scale resort mechanics for curated quiet luxury, featuring carved antique doors, floor-to-ceiling oceanfront glass, an infinity pool overlooking tidal flats, and a refined coastal restaurant.",
    emotionalFeel: "Exclusively quiet, timeless, and deeply romantic. Free from family resort noise and high-turnover package tourism, the emotional energy is steady, hushed, and contemplative. Days move to the rhythm of shifting light and tides, creating a sense of suspended time that allows stressed executives and safari travelers to immediately unwind.",
    sensorySignature: {
      visual: ["Crisp white stone architecture against turquoise waters", "Hand-carved Swahili woodwork", "Floor-to-ceiling framed ocean horizons", "Brilliant white sandbanks"],
      auditory: ["Gentle lapping of reef waves", "Ocean breezes through palm fronds", "Soft background lounge music", "Total absence of noise from children"],
      olfactory: ["Fresh coastal sea air", "Fresh basil and crushed lime", "Garlic and wood-fired dishes", "Line-caught seafood"],
    },
    positiveSignals: [
      "Adults-Only Serenity Guarantee — absolute prohibition of children ensures a tranquil, uninterrupted sanctuary across the beach club, dining room, and infinity pool",
      "Masterful Swahili-Mediterranean Aesthetics — hand-carved antique doors, stone friezes, and global artwork creating an art-gallery feel",
      "Unobstructed Horizon Framing — floor-to-ceiling glass paneling in ocean suites offers unobstructed sunrise views directly from bed",
      "Refined Mediterranean-Coastal Cuisine — fresh line-caught marine dishes prepared with Italian and Mediterranean techniques, far exceeding standard hotel buffets",
    ],
    negativeSignals: [
      "High-Tidal Fluidity of Jacaranda Beach — extreme low tides recede significantly, limiting deep shoreline swimming during low-water windows",
      "Strict Non-Refundable Booking Policy — 50% non-refundable at booking, full payment due 45 days prior",
      "Secluded Location Isolation — off-property dining dependent on organized taxi or tuk-tuk rides",
    ],
    hiddenGems: [
      "SWK Beach Club Tidal Sandbank Walk — private, barefoot walks out onto temporary white-sand barrier bars at low tide, for shell-combing and quiet reflection, completely detached from the mainland shore",
    ],
    signatureMemory: "Waking up to the sunrise framing the turquoise bay through floor-to-ceiling suite glass, followed by a barefoot low-tide walk along the temporary Jacaranda sandbanks and a candlelit seafood dinner by the pool.",
    expectationManagement: "Travelers must be informed of the strict adults-only age limit, the non-refundable deposit terms, and the tidal cycles that dictate shore swimming times (with the infinity pool available during low tide).",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Affluent couples, design enthusiasts, or honeymooners seeking a quiet, adults-only, highly curated beachfront sanctuary",
      "Clients wanting fine dining, boutique scale, and architectural beauty to close out a safari",
    ],
    doNotRecommendConditions: [
      "Itineraries including children under adulthood",
      "Clients demanding continuous all-day ocean swimming regardless of tides",
      "Travelers requiring flexible, fully refundable booking terms",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Strict adults-only policy, superior Swahili-Mediterranean design, floor-to-ceiling horizon suite views, and private sandbank access on Chembe Bay.",
    mainLimitation: "Tidal dependency for shore swimming and strict non-refundable booking terms.",
    positioningSummary: "An intimate, adults-only Swahili-Mediterranean boutique sanctuary on Jacaranda Beach, offering pristine architectural elegance and panoramic ocean suites designed for deep romantic decompression.",
  },

  pairings: [
    {
      pairedEntity: "Soroi Larsens Camp (Samburu)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Transitioning from the artistic glass frontages and riverine canopy of Soroi Larsens to the carved Swahili doors and white-sand infinity lines of Simba wa Kale maintains a harmonious, design-forward continuity across the entire journey.",
    },
    {
      pairedEntity: "Mara Expedition Camp / Sala's Camp / Soroi Mara Bush Camp (Maasai Mara)",
      pairingCategory: "Complementary Region",
      rationale: "Preceding a stay here with intense savannah game tracking provides an ideal balance of wildlife adventure and coastal relaxation.",
    },
    {
      pairedEntity: "Mida Creek sunset dhow sailings",
      pairingCategory: "Complementary Experience",
      rationale: "Combine low-tide sandbank walks at Chembe Bay with private sunset dhow sailings through nearby Mida Creek.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Annual seasonal closure dates during peak May rains require ongoing verification"],
  },
};