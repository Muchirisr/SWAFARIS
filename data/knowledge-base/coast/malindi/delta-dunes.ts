export const deltaDunes = {
  id: "delta-dunes-malindi",
  name: "Delta Dunes",
  country: "Kenya",
  region: "Coast",
  subRegion: "Malindi / Tana River Delta (Lower Tana River Delta, Kilifi/Tana River Border)",
  ecosystem: "Marine Ecosystem, Riverine Delta, Coastal Wetlands, and Sand Dunes",
  propertyType: "Wall-Less Eco-Luxury Castaway Lodge & Wilderness Outpost",
  accommodationStyle: "'Robinson Crusoe' open-sided eco-architecture built from weathered driftwood, mangrove timber, and thick palm thatch (Makuti). Features open-fronted, wall-less cottages with massive Swahili daybeds wrapped in mosquito netting.",
  locationDetail: "Independently owned and operated; 7 open-fronted, wall-less cottages (perched on high dune ridges with dual river and ocean views); established ~1990s (formerly Mipingo/Tana Delta Lodge, renovated and re-conceived as Delta Dunes)",
  nearestAirstrips: ["Malindi Airport (MYD) — primary, plus local private delta airstrips"],
  nearestGate: "N/A (Coastal/Delta Wilderness; accessed via river motorboat or 4x4 desert tracks)",
  accessibilityNotes: "High physical friction. Situated atop shifting coastal sand dunes; navigating between the main mess area, top lounge, and open-fronted cottages requires climbing steep, uneven stairs cut directly into sand. Not suitable for guests with mobility limitations.",
  priceRangeMinUsd: 600,
  priceRangeMaxUsd: 1100,

  // Per-person pricing ($600-1,100), doubled per the Manda Bay Island Resort precedent →
  // $1,200-2,200, midpoint $1,700, landing in Ultra-Luxury ($1,200+).
  rawMarketTier: "Premium",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Ultra-Luxury",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Kipalo Hills", "Shela Villa", "Peponi Hotel", "Manda Bay"],

  rawSourceJson: {
    officialBrandName: "Delta Dunes Lodge (The Wild Watch)",
    yearEstablished: "~1990s (formerly Mipingo/Tana Delta Lodge, renovated and re-conceived as Delta Dunes)",
    unitBreakdown: "7 open-fronted, wall-less cottages, perched on high dune ridges with dual river and ocean views",
    priceRange: "$600-1,100 USD per person/night, Full Board including game drives, river boat excursions, and coastal activities.",
  },

  experienceDna: {
    // "Cinematic" substituted with "Inspirational" per standing rule; "Exploratory" and "Wild" are
    // canonical as-stated.
    emotionalTone: ["Inspirational", "Exploratory", "Wild"],

    // "Immersive Nature" is a word-order variant of canonical "Nature Immersion." Founder confirmed
    // adding "Adventure" given the highest Adventure score of any Coast lodge (9/10) and an
    // extensive activity list (sand-yachting, wakeboarding, dune tracking, kayaking) the doc's
    // stated energyType otherwise leaves uncaptured.
    energyType: ["Nature Immersion", "Adventure"],

    experiencePace: "Balanced", // canonical as-stated

    // Same "Eco-luxury | Ultra-exclusive" hedge as Manda Bay Island Resort, resolved the same way —
    // reinforced here by the highest Privacy score of any Coast lodge (10/10) and an absolute
    // 67km private beach.
    comfortPhilosophy: ["Exclusive Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary",

    // "Adventure Transition / Coastal Decompression / Wilderness Palate Cleanser" hedge contained
    // zero literal canonical terms. Founder confirmed Mid-Journey Transition over Recovery — the
    // property's identity is explicitly built around bridging two distinct ecosystems (river delta
    // and ocean, "dual-horizon topography"), and the doc's own sequencing language calls it a
    // "transition segment," matching the Mid-Journey Transition definition more precisely than
    // plain decompression.
    journeyRole: "Mid-Journey Transition",

    // idealTravelersPrimary: doc's "Slow Travelers" dropped (no archetype support). "Honeymooners"
    // added (The Sanctuary Seekers is a confirmed ideal-fit archetype, not in the doc's own
    // summary line), per established precedent.
    idealTravelersPrimary: ["Burned-out Executives", "Luxury Adventurers", "Nature Photographers", "Honeymooners"],
    idealTravelersSecondary: [],

    intensityScore: 6,
    relaxationScore: 8,
    authenticityScore: 9,
    premiumScore: 8,
    adventureScore: 9,
    privacyScore: 10,
    wildlifeExperienceScore: 8,
    culturalImmersionScore: 7,
    familySuitabilityScore: 3,
    comfortScore: 6,
    socialDynamic: "Isolated",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "1.5 to 2 hours road transfer from Malindi Airport (MYD) followed by a 20-minute scenic speed boat ride down the Tana River",
    seasonalAccessibility: "Open year-round except during heavy seasonal rains (typically May). Coastal winds blow continuously across the dune ridges, providing natural climate cooling.",
    electricitySystem: "100% off-grid solar infrastructure; low-voltage solar power provides soft lighting and charging stations; no high-draw HVAC, air conditioning, or blow-dryer capability",
    powerReliability: "Moderate — low-voltage solar only, no high-draw appliances",
    waterReliability: "Moderate — solar-heated shower systems paired with eco-friendly water filtration; water pressure can fluctuate naturally due to elevated dune topography",
    internetAvailability: "Very limited; digital detachment is intentionally fostered across all guest areas",
    mobileNetwork: "Spotty and variable cellular signal (Safaricom) across dune peaks",
    medicalAccess: "On-site first aid kit and trained lodge staff; emergency medical evacuations (AMREF Flying Doctors) required for acute trauma or severe medical crises due to remote delta location",
    // "Low to Moderate" per source, resolved false — Family Suitability Score 3/10 and explicit
    // predator/drop-off safety-risk language dominate, per the Rhino Watch/Little Amanya precedent.
    childFriendly: false,
    mobilityFriendly: false, // "Very Low" per source, unambiguous
    operationalLimitations: [
      "Complete lack of sealed walls, doors, glass, or air conditioning",
      "Total exposure to wind-blown sand, insects, and humidity",
      "High physical stair-climbing demands",
      "Variable shower water pressure",
      "Remote water-reliant logistics",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "High",
      reasoning: "Craves unique, boundary-pushing experiences. The combination of sand-yachting, wakeboarding, river boat tracking, dune climbing, and foot-safaris delivers high sensory reward.",
      supportingSignals: ["Adventure score 9/10", "Sand-yachting, wakeboarding, dune tracking", "River boat excursions"],
      mismatchConditions: ["Must adapt to rustic eco-utilities and variable solar water pressure"],
    },
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "The total absence of Wi-Fi, city noise, and commercial resort infrastructure provides immediate mental reset. Sleeping in wall-less cottages directly above the ocean surf induces deep cognitive recovery.",
      supportingSignals: ["Privacy score 10/10", "Isolated social dynamic", "Very limited connectivity"],
      mismatchConditions: ["Must be physically fit enough to navigate steep sand dunes in tropical heat"],
    },
    // REMAPPED: source doc listed "The Visual Storyteller," not canonical. Its framing echoes the
    // canonical subtitle of The Fine-Art Ethologist (The Patient Storyteller) under Nature
    // Photographers almost exactly.
    {
      fitType: "ideal",
      category: "Nature Photographers",
      archetype: "The Fine-Art Ethologist",
      matchStrength: "High",
      reasoning: "Outstanding dual-horizon vantage point allowing sunrise photography over the Indian Ocean and sunset captures over the Tana River Delta from the same ridge.",
      supportingSignals: ["Wildlife experience score 8/10", "Dual-horizon ocean/river vantage point", "400+ bird species"],
      mismatchConditions: ["Must protect sensitive camera gear from pervasive coastal sand and salt air spray"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Absolute spatial isolation on an empty 67km beach, lantern-lit river sandbank dinners, and wild open-air Swahili daybeds offer an intimate, romantic \"castaway\" atmosphere.",
      supportingSignals: ["Privacy score 10/10", "67km of unpopulated beach", "Lantern-lit sandbank dining"],
      mismatchConditions: ["Not suited for couples seeking manicured, air-conditioned infinity-pool luxury"],
    },
    {
      fitType: "poorFit",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "Low",
      reasoning: "Elevated dune drop-offs without safety railings, deep river currents, and active populations of hippos and crocodiles present significant hazards for young kids.",
      supportingSignals: [],
      mismatchConditions: ["Constant parental anxiety and direct physical safety risks"],
    },
    // REMAPPED: source doc listed "The Controlled-Environment / AC-Dependent Traveler," not
    // canonical. Same pattern as Manda Bay Island Resort — remaps to The Sensory Overwhelmed under
    // First-Time Safari Travelers.
    {
      fitType: "poorFit",
      category: "First-Time Safari Travelers",
      archetype: "The Sensory Overwhelmed",
      matchStrength: "Low",
      reasoning: "Open-fronted, wall-less cottages explicitly omit glass, solid doors, and air conditioning to maintain an uninhibited connection with natural elements.",
      supportingSignals: [],
      mismatchConditions: ["High discomfort regarding tropical humidity, insects, wind-blown sand, and rustic solar-powered utilities"],
    },
    // DROPPED: incompatible archetype "The Limited-Mobility Traveler" — not a real archetype/
    // category; mobility barrier already captured via mobilityFriendly: false and
    // operationalLimitations.
    // DROPPED: idealTravelersPrimary item "Slow Travelers" — no archetype support.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 nights",
    recommendedPositionNote: "\"Adventure Transition / Coastal Decompression / Wilderness Palate Cleanser\" hedge contained zero literal canonical terms. Founder confirmed Mid-Journey Transition over Recovery. This closes the Coast region: Watamu (3: Grand Finale x2, Recovery x1) + Lamu (1: Safari Climax) + Malindi (1: Mid-Journey Transition) = 5 lodges across the sub-phase.",
    whatShouldComeBefore: "Rugged, dry-bush savanna tracking in Tsavo West, Tsavo East, or Samburu; or high-intensity predator tracking in the Maasai Mara",
    whatShouldComeAfter: "A cultural finale in the Lamu Archipelago (Shela, Lamu Old Town, or Manda Island) for architectural immersion; or direct transfer to Malindi/Mombasa for homeward flights",
    emotionalTransitionRationale: "Transitions the traveler from structured, vehicle-bound game drives into an active, open-air coastal wilderness where nature is experienced on foot and by watercraft.",
  },

  narrative: {
    whyChosen: "A raw, open-fronted eco-luxury castaway retreat perched on massive sand dunes between a wild river delta and an empty 67km beach, ideal for high-end adventurers seeking absolute spatial isolation and kinetic nature immersion after a traditional bush safari.",
    bestUsedFor: "Active luxury travelers, nature photographers, honeymooners, and experienced safari guests seeking spatial privacy, untamed wilderness, and unique water-and-dune activities after a bush safari.",
    lessSuitableFor: "Travelers with limited mobility, families with young children, or clients requiring sealed air-conditioned suites, formal luxury amenities, and calm, resort-style swimming coves.",
    overview: "Delta Dunes Lodge is an avant-garde eco-luxury outpost positioned on a sand dune ridge at the junction of the Tana River Delta and the Indian Ocean. Looking inland reveals the wetlands, mangrove estuaries, hippos, and birdlife of the Tana Delta; looking seaward reveals an unpopulated 67km beach. Its seven wall-less, driftwood-and-thatch cottages feature open fronts without glass or solid walls, offering a raw, high-end 'castaway' experience for design purists and adventurers.",
    emotionalFeel: "Cinematic, wild, and deeply liberating. Guests experience a shift from initial vulnerability to profound mental clarity. Without solid walls, daily rhythms sync naturally with sunrises over the ocean, shifting river tides, and nighttime sea breezes. Mornings bring dynamic river exploration, afternoons offer relaxed daybed reading, and evenings feature lantern-lit sandbank dining under open skies.",
    sensorySignature: {
      visual: ["Sweeping white sand dunes", "Contrast of dark river waters against turquoise ocean tides", "Open night skies", "Rustic weathered driftwood architecture"],
      auditory: ["Continuous crashing of ocean surf", "Primeval calls of hippos and fish eagles", "Rustling palm thatch"],
      olfactory: ["Briny sea salt spray", "Rich river silt", "Sun-baked mangrove wood", "Fresh grilled seafood"],
    },
    positiveSignals: [
      "Dual-Horizon Topography — rare vantage point enabling ocean sunrises and river sunsets from the same central ridge",
      "Sandbank Experiential Dining — fresh daily seafood (crab, red snapper, prawns) served directly on river sandbars under the stars",
      "Absolute Beach Privacy — access to 67km of unpopulated, wild beach completely free of commercial tourism",
      "Versatile Water Sports — seamless transition between calm river activities (kayaking, birding cruises) and ocean sports (wakeboarding, sand-yachting)",
    ],
    negativeSignals: [
      "Steep Dune Stair Climbing — demands physical effort to navigate shifting sand paths and stairs in tropical heat",
      "Exposure to Elements & Insects — wall-less architecture allows wind-blown sand and local insects into open living areas",
      "Rustic Solar Utilities — solar-heated showers and eco-plumbing can result in variable water pressure and temperature",
    ],
    hiddenGems: [
      "Orma & Pokomo Dune Footprint Tracking — morning guided dune walks with local trackers; overnight trade winds reset the sand into a clean canvas, letting guides track nocturnal animal movements (elephants, Tana River bushbuck, leopards, nesting sea turtles), turning a coastal walk into an active foot safari",
    ],
    signatureMemory: "Watching the sun set directly into the Tana River Delta while listening to hippos below, followed by a barefoot seafood dinner on a river sandbank and sleeping in a wall-less cottage surrounded by ocean trade winds.",
    expectationManagement: "Ensure clients are prepared for the wall-less eco-architecture (no AC or sealed glass), the physical demands of dune walking, rustic solar utility systems, and the dynamic, untamed nature of the ocean beach.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Active luxury travelers, nature photographers, honeymooners, and experienced safari guests seeking spatial privacy and untamed wilderness",
      "Clients wanting unique water-and-dune activities after a bush safari",
    ],
    doNotRecommendConditions: [
      "Travelers with limited mobility",
      "Families with young children",
      "Clients requiring sealed air-conditioned suites, formal luxury amenities, or calm, resort-style swimming coves",
    ],
    confidenceLevel: "High (when matched with active eco-luxury adventurers); Low (if pitched as a standard resort)",
    competitiveAdvantage: "Dual river-and-ocean ecosystem, wall-less open-fronted architecture, 67km of unpopulated beach access, and native Orma/Pokomo tracking expertise.",
    mainLimitation: "High physical demands for property navigation and lack of sealed, climate-controlled environments.",
    positioningSummary: "A raw, open-fronted eco-luxury castaway retreat perched on massive sand dunes between a wild river delta and an empty 67km beach, ideal for high-end adventurers seeking absolute spatial isolation and kinetic nature immersion after a traditional bush safari.",
  },

  pairings: [
    {
      pairedEntity: "Kipalo Hills (Tsavo West/East)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Transitioning from dry red-earth wilderness and rocky hills to the sweeping white sand dunes and water channels of the Tana Delta creates a rich ecological contrast.",
    },
    {
      pairedEntity: "Shela Villa / Peponi Hotel / Manda Bay (Lamu Archipelago)",
      pairingCategory: "Complementary Region",
      rationale: "Following a 3-night stay at Delta Dunes with 3 nights in Lamu balances remote nature with historic Swahili culture.",
    },
    {
      pairedEntity: "Private sunset dhow sailing and cultural walking tours in Lamu Old Town",
      pairingCategory: "Complementary Experience",
      rationale: "Combine morning dune tracking and river kayaking at Delta Dunes with private sunset dhow sailing and cultural walking tours in historic Lamu Old Town.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "River access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Annual rainy season closure dates (typically May) require ongoing seasonal verification"],
  },
};