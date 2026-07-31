// data/knowledge-base/entim-mara-camp.ts
export const entimMaraCampEnrichment = {
  id: "entim-mara-camp", // REUSED — existing lodge, not a new one
  name: "Entim Mara Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve", // unchanged
  subRegion: "Maasai Mara National Reserve (Central Sector)",
  ecosystem: "Riverine Forest / Open Savannah Ecotone", // refined, was "Savannah"
  propertyType: "Reserve Tented Camp (Unfenced Canvas Camp)",
  accommodationStyle: "Raised canvas safari tents on timber decks overlooking the Mara River, rustic-luxury wood accents, en-suite bathrooms.",
  locationDetail: "Situated directly inside the reserve along the Mara River, near key wildebeest crossing points.",
  nearestGate: "Sekenani Gate / Talek Gate",
  nearestAirstrips: ["Ol Kiombo Airstrip", "Serena Airstrip"],
  accessibilityNotes: "4x4 strictly required year-round; high-clearance essential due to black cotton soil in the central reserve.",
  priceRangeMinUsd: 650,
  priceRangeMaxUsd: 1300,
  rawMarketTier: "Ultra Luxury",
  swafarisExperienceTier: "Tier 5: Ultra-Rare Journey",
  budgetTier: "Ultra Luxury", // unchanged, already correct
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["ol-tukai-lodge", "the-cliff", "almanara-luxury-boutique-hotel"], // preserved EXACTLY — do not disturb existing relationships
  rawSourceJson: { /* both source documents, verbatim */ },

  // EDF core — copied verbatim from the live record, NOT re-derived, since
  // it's already accurate and referenced by existing generated journeys.
  experienceDna: {
    emotionalTone: ["Cinematic", "Wild", "Intimate"],
    energyType: ["Nature Immersion", "High-Energy Safari"],
    experiencePace: "Fast",
    comfortPhilosophy: ["Adventure Luxury", "Authentic Luxury"],
    comfortPhilosophyDetailed: "Eco Luxury", // new, reference-only
    journeyRole: "Safari Climax", // CONFIRMED unchanged per your instruction
    idealTravelersPrimary: ["Luxury Adventurers"],
    idealTravelersSecondary: ["Nature Photographers", "First-Time Safari Travelers"],
    intensityScore: 9, relaxationScore: 5, authenticityScore: 9, premiumScore: 9,
    // New scores, purely additive — these columns are currently null on this row
    adventureScore: 9, privacyScore: 7, wildlifeExperienceScore: 10,
    culturalImmersionScore: 6, familySuitabilityScore: 3, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null,
    transferTime: "25 min from Ol Kiombo Airstrip; 5.5–6 hours overland from Nairobi; ~45 min flight from Wilson Airport.",
    seasonalAccessibility: "Operational year-round; peak focus July–October Great Migration.",
    rainySeasonImpact: "During heavy rains (April–May), riverine black cotton soil track navigation becomes slick and challenging.",
    electricitySystem: "Off-grid high-capacity Solar PV with quiet standby generator backup; 24/7 power in public areas.",
    powerReliability: "Continuous in public areas; tent inverters support lighting/charging, high-wattage appliances restricted.",
    waterReliability: "Borehole and filtered water; continuous hot water via eco-solar heaters.",
    internetAvailability: "Wi-Fi in central lounge and photographic workspace, deliberately omitted from guest tents.",
    mobileNetwork: "Safaricom 3G/4G variable depending on atmospheric conditions along the riverbed.",
    medicalAccess: "On-site first-aid trained team; AMREF Flying Doctors evacuation to Nairobi.",
    childFriendly: false,
    mobilityFriendly: false,
    operationalLimitations: [
      "No swimming pool or air conditioning",
      "Unfenced perimeter requires mandatory Maasai escort after dark",
      "Reserve rules prohibit off-roading and night game drives",
      "Recommended minimum age 8+ due to unfenced riverine exposure to hippos, baboons, big cats",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Nature Photographers", archetype: "Apex Trophy Hunter", matchStrength: "Strong",
      reasoning: "Direct position on the Mara River provides immediate access to crossing points at first light without gate delays; camp offers specialized photographic vehicles and dedicated workspace facilities.",
      supportingSignals: ["Low-angle camera vehicle modifications", "Dedicated photographic editing space"],
      mismatchConditions: ["24/7 hippo vocalizations", "No in-tent Wi-Fi for editing sessions"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Delivers location-based luxury where high-end canvas comfort sits in direct contact with unfenced wilderness, seeking frontline access to iconic wildlife events.",
      supportingSignals: ["Direct reserve placement", "High-end canvas comfort"],
      mismatchConditions: ["Reserve regulatory constraints: no night drives, no off-roading"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Offers authentic, high-density wildlife immersion with experienced Maasai guides, ensuring immediate Big Five exposure from a secure, well-managed base camp.",
      supportingSignals: ["Experienced Maasai guiding", "Secure base camp structure"],
      mismatchConditions: ["High sensory intensity and nocturnal animal sounds can challenge travelers used to urban hotels"] },
    { fitType: "ideal", category: "Solo Explorers", archetype: "Autonomous Hunter", matchStrength: "Moderate",
      reasoning: "Excellent structure for serious solo wildlife enthusiasts wanting focused, game-drive-centric itineraries and shared campfire debriefs.",
      supportingSignals: ["Focused game-drive itinerary structure"],
      mismatchConditions: ["Single supplement costs during peak migration months can be substantial"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Burnout Decompressors", matchStrength: "Moderate",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"Cortisol Crashers\"); mapped to closest valid match based on evidence — 'needs for restorative sleep, quiet pampering, and physical relaxation' directly describes a burnout-decompression need profile. High kinetic pace, early pre-dawn rollouts, and intense nocturnal wildlife noise conflict with total rest needs.",
      supportingSignals: [], mismatchConditions: ["No private plunge pools", "No air conditioning", "No day-long quiet"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Continuous sensory input from hippos and hyenas, combined with shared camp dining dynamics, prevents solitary mental decompression and uninterrupted sleep.",
      supportingSignals: [], mismatchConditions: ["No climate-controlled, soundproof spaces"] },
    { fitType: "poorFit", category: "Families", archetype: "Digital Teen Disconnectors", matchStrength: "Strong",
      reasoning: "Unfenced riverine perimeter, strict 8+ age boundary, and megafauna safety hazards make it unsuitable for early-stage family groups or active teens requiring resort recreational facilities.",
      supportingSignals: [], mismatchConditions: ["High safety anxiety risk for parents", "No structured youth amenities (pools, enclosed grounds)"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source frames this as the journey's 'Adventure Peak' — positioning Entim Mara as the high-intensity peak mid-journey maximizes initial enthusiasm for wildlife tracking, preserved here as descriptive framing; canonical Journey Role remains Safari Climax per confirmed decision.",
    whatShouldComeBefore: "A lower-intensity, highly controlled property (e.g., a quiet private conservancy lodge in Laikipia or a lakefront resort in Naivasha) to adjust to time zones and establish baseline safari comfort.",
    whatShouldComeAfter: "A coastal beach sanctuary (e.g., Diani Beach or Watamu) to rest and recover after high-intensity early morning safari schedules.",
    emotionalTransitionRationale: "Shifts the traveler from baseline comfort into high-adrenaline, frontline wildlife tracking, before transitioning to coastal physical recovery.",
  },

  // Existing 4 narrative fields preserved verbatim — not re-written.
  narrative: {
    whyChosen: "Entim Mara is the reference example for what a Safari Climax must deliver: unfiltered wildlife density inside the reserve itself, paired with tented luxury that never dilutes the wildness of the setting. This is deliberately the highest Intensity Score in the database — the chapter a traveler will describe first when someone asks 'how was Kenya?'",
    bestUsedFor: "Travelers whose Transformation Goal centers on awe, achievement, or an unforgettable wildlife moment; photographers; luxury adventurers.",
    lessSuitableFor: "Burned-out or recovery-seeking travelers; travelers already several days into consecutive high-intensity experiences.",
    journeyPositionNote: "Act III, definitively. The canonical Safari Climax anchor — should not be scheduled adjacent to another Safari Climax-tier property.",
    // New fields, purely additive:
    overview: "Entim Mara Camp is a location-driven eco-luxury canvas camp situated inside the central core of the Maasai Mara National Reserve, distinguished by its placement along the Mara River near famous wildebeest crossing points.",
    emotionalFeel: "Thrilling, immersive, and primal — guests feel plugged directly into the raw pulse of the reserve, supported by expert Maasai guides navigating riverine tracks with native precision.",
    sensorySignature: {
      visual: ["Brown river currents", "Acacia canopy", "Open savannah vistas across the bank", "Dust-filtered golden sunsets"],
      auditory: ["Continuous grunting of river hippo pods", "Distant hyena calls", "Wind through riverine trees", "Heavy hoofbeats during migration season"],
      olfactory: ["Riverine silt", "Crushed acacia leaves", "Damp earth", "Evening woodsmoke"],
    },
    positiveSignals: [
      "Direct position inside the National Reserve border eliminates daily park gate transits.",
      "Direct view and immediate vehicle access to primary Mara River crossing zones.",
      "Specialized low-angle camera vehicle modifications and dedicated photographic editing space.",
      "Deep ecosystem knowledge and tracking expertise from native Maasai guides.",
    ],
    negativeSignals: [
      "24/7 hippo vocalizations and bush sounds can disrupt light sleepers.",
      "No swimming pool, spa complex, or air-conditioned concrete suites.",
      "Bound strictly by National Reserve rules: no off-roading, no night game drives, no walking safaris.",
    ],
    hiddenGems: [
      "Custom low-angle camera vehicle modifications paired with guides trained specifically in vehicle positioning relative to light vectors give wildlife photographers a clear technical advantage.",
    ],
    signatureMemory: "Sitting on the raised viewing deck with a morning coffee, watching thousands of wildebeest assemble on the opposite bank of the Mara River as hippo pods stir below.",
    expectationManagement: "This is an authentic, unfenced canvas bush camp inside a National Reserve. Comfort levels are high, but the environment is unbuffered and wildlife operates immediately adjacent to guest tents.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "The traveler explicitly prioritizes Great Migration river crossings and big cat activity over resort facilities.",
      "The traveler is a dedicated photographer needing specialized vehicle positioning.",
      "The itinerary requires maximum game drive time inside the reserve without gate transits.",
    ],
    doNotRecommendConditions: [
      "The client expects luxury resort features like swimming pools, air conditioning, or paved walkways.",
      "The group includes young children (< 8 years) or light sleepers easily disturbed by wildlife sounds.",
      "The trip sequence places this property on Day 1 straight off an international flight.",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Location inside the National Reserve directly on the Mara River crossing corridor, eliminating gate transit time.",
    mainLimitation: "Unfenced environment with continuous riverine noise and Reserve operational constraints.",
    positioningSummary: "A tactical eco-luxury canvas sanctuary built for serious wildlife lovers and photographers who demand frontline access to the Mara River inside the National Reserve.",
  },

  pairings: [
    { pairedEntity: "Private Conservancy (Laikipia or Mara North)", pairingCategory: "ecosystem", rationale: "Pairs Savannah/Riverine Ecotone with Acacia Woodland/Escarpment for activity variety (walking, night drives) unavailable inside the National Reserve." },
    { pairedEntity: "Great Rift Valley Lakes (Naivasha/Nakuru)", pairingCategory: "regional", rationale: "Lower-intensity birding and landscape transition after high-intensity reserve game drives." },
    { pairedEntity: "Coastal Decompression (Diani Beach or Watamu)", pairingCategory: "experience", rationale: "Resolves cumulative physical fatigue from early pre-dawn wake-ups and high sensory stimulation after the Adventure Peak phase." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Entim Mara Official Operational Specs", "Wilder Group Records", "Kenya Wildlife Service Reserve Guidelines", "AirKenya & Safarilink Flight Schedules"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "research_date — not stated in source",
      "'Cortisol Crashers' poor-fit archetype was non-canonical; mapped to 'Burnout Decompressors' based on evidence — confirm this substitution is correct.",
    ],
  },
};