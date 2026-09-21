export const hemingwaysWatamu = {
  id: "hemingways-watamu-watamu",
  name: "Hemingways Watamu",
  country: "Kenya",
  region: "Coast",
  subRegion: "Watamu, Kilifi County",
  ecosystem: "Marine Ecosystem — situated within the protected Watamu Marine National Park, backed by the Mida Creek Mangrove Forest",
  propertyType: "Luxury Heritage Beachfront Resort & Residences",
  accommodationStyle: "Stately white-masonry plantation-style architecture with soaring ceilings, open-air corridors, classic coastal arches, and modern luxury residence wings",
  locationDetail: "Hemingways Collection, independently owned and managed; 39 ocean-facing rooms and 21 luxury multi-bedroom oceanfront residences (60 units total); established 1988, extensively redeveloped and modernized across 2017-2018",
  nearestAirstrips: ["Malindi Airport (MYD) — primary", "Moi International Airport, Mombasa (MBA) — secondary, 2-2.5hr road transfer"],
  nearestGate: "N/A (Coastal Property; nearest protected marine zone is Watamu Marine National Park Gate directly on the beach front)",
  accessibilityNotes: "Fully accessible year-round via paved asphalt roads through Watamu town. Flat interior ground floor terrain with paved walkways, ramped access points, and elevators servicing upper floors and oceanfront residences.",
  priceRangeMinUsd: 320,
  priceRangeMaxUsd: 750,

  // Self-stated "Mid" tier; midpoint of $320-750 = $535, landing in Premium ($500-799), not
  // Mid-Range. Price-guide midpoint overrides self-stated tier — first UPWARD override we've seen
  // (previous overrides all went down); same rule applies regardless of direction.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Angama Mara", "Sala's Camp", "Soroi Mara Bush Camp", "Soroi Larsens", "Ol Jogi"],

  rawSourceJson: {
    officialBrandName: "Hemingways Watamu",
    yearEstablished: "1988 (extensively redeveloped and modernized across 2017-2018)",
    unitBreakdown: "39 ocean-facing rooms and 21 luxury multi-bedroom oceanfront residences (60 units total)",
    priceRange: "$320-750 USD per room/night, Half Board or Bed & Breakfast basis depending on season and room/residence category.",
  },

  experienceDna: {
    // "Cinematic" substituted with "Inspirational" per standing rule; "Elegant" and "Social" are
    // canonical as-stated.
    emotionalTone: ["Inspirational", "Elegant", "Social"],

    // Source states "Coastal decompression | Sensory-rich" — neither canonical. Founder confirmed
    // Wellness + Luxury Escape, mirroring the Severin Sea Lodge precedent (relaxation 9/10,
    // premium 9/10, comfort 9/10 score profile).
    energyType: ["Wellness", "Luxury Escape"],

    experiencePace: "Balanced", // canonical as-stated

    // First genuine heritage-exception SUCCESS case: doc explicitly documents ZERO wear
    // ("extensively redeveloped and modernized 2017-2018"), is a real heritage property (est.
    // 1988, historic Hemingways Bar), and self-labels "Heritage Luxury." Founder confirmed
    // Authentic Luxury / Classic Safari Elegance over Exclusive Luxury / Ultra-Exclusive Sanctuary
    // — the latter's only precedent (Almanara) was tied to an Isolated social dynamic, whereas this
    // property is explicitly "Balanced."
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Classic Safari Elegance",

    // "Coastal Decompression / Romantic Finale / Itinerary Climax" hedge contained ZERO literal
    // canonical terms. Founder confirmed Grand Finale, matching the narrative's explicit "closing
    // chapter of an itinerary" framing — profile parallels Almanara Luxury Boutique Hotel's Grand
    // Finale positioning closely.
    // Watamu sub-phase running tally: Grand Finale x1 (first lodge).
    journeyRole: "Grand Finale",

    // idealTravelersPrimary: doc's "First-Time Safari Travelers" dropped (no archetype support).
    // "Luxury Adventurers" added (not in the doc's own summary line, but The High-Octane Collector
    // is a confirmed ideal-fit archetype), per the Severin/PrideInn precedent.
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Families", "Luxury Adventurers"],
    idealTravelersSecondary: [],

    intensityScore: 3,
    relaxationScore: 9,
    authenticityScore: 7,
    premiumScore: 9,
    adventureScore: 6,
    privacyScore: 6,
    wildlifeExperienceScore: 6,
    culturalImmersionScore: 5,
    familySuitabilityScore: 8,
    comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "25-30 minutes road transfer from Malindi Airport (MYD); 2 to 2.5 hours road transfer from Moi International Airport, Mombasa (MBA)",
    seasonalAccessibility: "Open year-round. Kusi monsoons (May-October) bring cooler breezes and tidal shifts; Kaskazi monsoons (November-April) bring warm, calm seas ideal for deep-sea sport fishing.",
    electricitySystem: "24-hour continuous grid power connection backed by heavy-duty commercial silent generators to ensure uninterrupted power and climate control",
    powerReliability: "High",
    waterReliability: "High — centralized reverse-osmosis desalination plant, municipal water connection, and continuous solar/electric water heating systems providing high-pressure hot water",
    internetAvailability: "High-speed complimentary Wi-Fi across all guest rooms, public lounges, restaurants, and poolside zones",
    mobileNetwork: "Excellent 4G/LTE cellular coverage across Safaricom and Airtel",
    medicalAccess: "On-site first aid facilities and resident emergency protocols; direct 25-minute road transit to Malindi Sub-County Hospital and private clinics; emergency medical air-evacuation access via Malindi Airport",
    childFriendly: true, // stated "High"
    mobilityFriendly: true, // stated "High"
    operationalLimitations: [
      "Strict evening dress code in main dining venues",
      "Tidal dependence for ocean swimming",
      "Marine park protections prohibit mechanical removal of seasonal washed-up seaweed",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Five-star operational precision, quiet oceanfront lawns, flawless room acoustics, and high-speed Wi-Fi allow complete mental disengagement and physical recovery without operational friction.",
      supportingSignals: ["Relaxation score 9/10", "Intensity score only 3/10", "High-speed Wi-Fi and acoustic insulation"],
      mismatchConditions: ["Must adhere to the evening dress code in the main restaurant after 19:00"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Panoramic 100% ocean views, elegant candlelit dining, fine wines, sunset dhow cruises on Mida Creek, and sophisticated old-world charm create a romantic, high-end finale.",
      supportingSignals: ["Premium score 9/10", "100% ocean-facing room design", "Sunset dhow cruises"],
      mismatchConditions: ["The main pool and beach zones maintain a refined social presence rather than total island isolation"],
    },
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "Spacious multi-bedroom residence options, full kitchens/kitchenettes, dedicated family pool, safe marine park waters, and reliable service remove travel stress for parents.",
      supportingSignals: ["Family suitability score 8/10", "Multi-bedroom residences with kitchenettes", "Dedicated family pool"],
      mismatchConditions: ["Children over 12 must comply with the formal evening dress code in main dining venues"],
    },
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "High",
      reasoning: "Historic home of East African big-game fishing; offers access to world-class billfish tagging, scuba diving, and water sports alongside uncompromised five-star luxury.",
      supportingSignals: ["Adventure score 6/10", "World-class deep-sea sport fishing heritage", "Scuba diving in the marine park"],
      mismatchConditions: ["High tide cycles dictate direct-from-shore swimming windows"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Off-Grid Wilderness Purist / Solitude Seekers,"
    // not canonical. Founder confirmed remapping to The Low-Impact Purist (The Off-Grid Minimalist)
    // under Luxury Adventurers, per the Severin/PrideInn precedent. Note this places a poor-fit
    // archetype in the same category as an ideal one (The High-Octane Collector above) —
    // logically consistent, since they represent opposite adventurer profiles within the category.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The Low-Impact Purist",
      matchStrength: "Low",
      reasoning: "Modern five-star resort infrastructure, manicured lawns, open beachfront access, and a balanced social footprint lack the raw off-grid isolation of remote private islands.",
      supportingSignals: [],
      mismatchConditions: ["Dissatisfaction with visible neighboring residences, paved resort paths, and structured hotel amenities"],
    },
    // DROPPED: idealTravelersPrimary item "First-Time Safari Travelers" — no archetype support.
    // DROPPED: incompatible archetype "The Ultra-Casual Bohemian / Barefoot Minimalist" — no
    // canonical equivalent, per the Avant-Garde Minimalist precedent.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    recommendedPositionNote: "\"Coastal Decompression / Romantic Finale / Itinerary Climax\" hedge contained zero literal canonical terms. Founder confirmed Grand Finale, matching the narrative's explicit 'closing chapter of an itinerary' framing. Watamu sub-phase running tally: Grand Finale x1 (first lodge).",
    whatShouldComeBefore: "High-intensity, high-vibration bush safari tracks across Kenya's savannahs or arid frontiers (e.g., Maasai Mara, Samburu, Laikipia, or Amboseli)",
    whatShouldComeAfter: "Direct 25-minute transit to Malindi Airport (MYD) for flights to Nairobi (WIL/NBO) for onward international connections",
    emotionalTransitionRationale: "Immediately converts safari fatigue, early wake-up calls, and bush dust into high-order coastal relaxation, world-class culinary indulgence, and sensory restoration.",
  },

  narrative: {
    whyChosen: "A legendary, five-star heritage beach resort delivering panoramic ocean views and sophisticated culinary refinement, serving as the definitive premium anchor for coastal decompression after an intense East African safari.",
    bestUsedFor: "High-net-worth families, honeymoon couples, or executives seeking an ultra-reliable, sophisticated coastal anchor to conclude a Kenyan safari with top-tier dining, five-star hardware, and optional marine sports.",
    lessSuitableFor: "Ultra-casual, bohemian travelers who dislike dress codes or formal dining, or travelers seeking complete off-grid island isolation with zero social presence.",
    overview: "Hemingways Watamu is a five-star heritage beach resort and luxury residence property situated directly within the protected UNESCO-listed Watamu Marine National Park. Defined by bright white plantation-style architecture, soaring ceilings, and open-air ocean corridors, the resort faces the turquoise waters and coral formations of Watamu Bay, backed by the Mida Creek mangrove ecosystem. It offers a refined coastal sanctuary engineered for luxury travelers demanding five-star operational standards, high-end culinary execution, and panoramic ocean vistas.",
    emotionalFeel: "Restorative, stately, and sophisticated. Entering the resort after an intense safari brings immediate physical relief as bush dust gives way to cool sea breezes and white-marble elegance. Mornings are quiet and contemplative with sunrises over the bay; afternoons are spent poolside or exploring Mida Creek; evenings pivot into classic coastal sophistication around the historic Hemingways Bar.",
    sensorySignature: {
      visual: ["Panoramic turquoise ocean views", "Brilliant white masonry capturing coastal light", "Pristine green lawns", "Offshore coral formations"],
      auditory: ["Rhythmic reef waves", "Rustling palm fronds", "Gentle sea breezes through open archways", "Soft evening jazz in the bar"],
      olfactory: ["Fresh sea salt air", "Tropical frangipani blossoms", "Fresh line-caught seafood", "Italian gelato"],
    },
    positiveSignals: [
      "Flawless 100% Ocean-Facing View Design — every room, suite, and residence features unobstructed panoramic views, eliminating room category disappointment",
      "Historic Hemingways Bar & Mixology — retained in classic style, celebrated for top-tier cocktails, vintage fishing memorabilia, and club-like charm",
      "Culinary Excellence — outstanding execution across line-caught seafood platters, local lobster, fine wines, and an on-site artisan gelato shop",
      "Operational Precision & Cleanliness — spotless marble bathrooms, structural reliability, whisper-quiet air conditioning, proactive personalized service",
    ],
    negativeSignals: [
      "Strict Evening Dress Code Friction — trousers and collared shirts required for men/boys over 12 after 19:00; no shorts, t-shirts, or swimwear",
      "Seasonal Seaweed Accumulation (October-April) — protected marine park status legally prohibits mechanical beach clearing",
      "Tidal Dynamics for Ocean Swimming — significant tidal drops expose coral shallows at low tide, requiring guests to time swimming around tide charts or use the two pools",
    ],
    hiddenGems: [
      "Mida Creek Sunset Dhow Excursions — private sunset dhow sailings through quiet mangrove channels, gliding through bird-rich waterways with fine bites and chilled drinks, away from standard beach crowds",
    ],
    signatureMemory: "Sipping a signature cocktail at the historic Hemingways Bar as the sun sets over Watamu Bay, followed by a fresh seafood dinner under the open-air coastal arches.",
    expectationManagement: "Travelers must be informed of the evening dress code prior to arrival. Additionally, guests should understand that ocean swimming is dictated by marine park tides, though the property's two large swimming pools provide continuous swimming options.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "High-net-worth families, honeymoon couples, or executives seeking an ultra-reliable, sophisticated coastal anchor to conclude a Kenyan safari",
      "Clients wanting top-tier dining, five-star hardware, and optional marine sports (deep-sea fishing, scuba diving)",
    ],
    doNotRecommendConditions: [
      "Ultra-casual, bohemian travelers who dislike dress codes or formal dining",
      "Travelers seeking complete off-grid island isolation with zero social presence",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "100% ocean-facing room layout, location inside Watamu Marine National Park, historic big-game fishing heritage, Mida Creek access, and five-star operational standards.",
    mainLimitation: "Evening dress code restrictions and low-tide ocean swimming limits.",
    positioningSummary: "A legendary, five-star heritage beach resort delivering panoramic ocean views and sophisticated culinary refinement, serving as the definitive premium anchor for coastal decompression after an intense East African safari.",
  },

  pairings: [
    {
      pairedEntity: "Angama Mara / Sala's Camp / Soroi Mara Bush Camp Private Wing (Maasai Mara)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "The shift from earth-toned savannah game drives to white-sand marine protection creates a powerful contrast.",
    },
    {
      pairedEntity: "Soroi Larsens / Ol Jogi (Samburu or Laikipia)",
      pairingCategory: "Complementary Region",
      rationale: "Allows travelers to experience the stark, high-heat northern frontier before flying directly to the coast for marine rehydration.",
    },
    {
      pairedEntity: "Deep-sea billfish tag-and-release fishing or marine park scuba diving, paired with Mida Creek dhow sailings",
      pairingCategory: "Complementary Experience",
      rationale: "Combine deep-sea billfish tag-and-release fishing or marine park scuba diving with late-afternoon dhow sailings through Mida Creek.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Annual deep-sea fishing tournament schedule dates require seasonal verification"],
  },
};