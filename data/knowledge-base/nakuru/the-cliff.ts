// data/knowledge-base/nakuru/the-cliff.ts
export const theCliff = {
  id: "the-cliff", // NEW lodge, no existing DB record
  name: "The Cliff",
  country: "Kenya",
  region: "Nakuru",
  subRegion: "Lake Nakuru National Park (elevated cliffside vantage point)",
  ecosystem: "Rift Valley lake — elevated cliffside vantage point 100 meters above a soda lake ecosystem, flanked by volcanic rock walls, euphorbia forests, and acacia woodlands.",
  propertyType: "High-altitude Luxury Tented Camp / Cliffside Villa",
  accommodationStyle: "Elevated luxury canvas tented suites with solid foundations, hard wood floors, roll-up panoramic walls, and velvet-accented boutique interiors.",
  locationDetail: "Anchored into a steep rock face 100 meters above Lake Nakuru, accessed via a dedicated cliffside ridge track.",
  nearestGate: "Main Gate / Lanet Gate (Lake Nakuru National Park)",
  nearestAirstrips: ["Naishi Airstrip (inside Lake Nakuru National Park)"],
  accessibilityNotes: "Accessible year-round via paved highway from Nairobi to Nakuru town, transitioning to unpaved park roads and a steep, winding cliffside access track. Requires 4x4 vehicle. Built into a steep rock face; internal navigation involves steep walkways and numerous stairs.",
  priceRangeMinUsd: 800,
  priceRangeMaxUsd: 1400,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc; superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 4",
  budgetTier: "Luxury", // corrected from source doc's "Ultra-Luxury" — $1,100 midpoint falls in $800–1,199 Luxury band, not the $1,200+ Ultra-Luxury band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Sasaab or Elephant Bedroom Camp, Samburu (ecosystem contrast pairing)",
    "Angama Mara or Governors' Il Moran, Maasai Mara (regional pairing)",
    "Lewa House, Lewa Conservancy (experience/conservation-circuit pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Inspirational", "Exclusive"], // corrected from source doc's "Cinematic | Elegant | Intimate" — Cinematic and Intimate are not valid vocabulary; substituted per founder confirmation
    energyType: ["Nature Immersion", "Luxury Escape"], // corrected from source doc's "Immersive Nature | Quiet Luxury"
    experiencePace: "Slow", // confirmed
    comfortPhilosophy: ["Exclusive Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // source doc's "Contemporary Luxury | Ultra-Exclusive" mapped to closest detailed value per founder confirmation
    journeyRole: "Reflection", // resolved from source doc's non-canonical triple framing "Mid-Journey Peak / Aesthetic Disruption / Restorative Pivot" — low 3/10 Intensity Score and explicit "palate cleanser" framing support Reflection over Adventure Peak
    idealTravelersPrimary: ["Honeymooners", "Burned-out Executives", "Nature Photographers"], // "Design Enthusiasts" is non-canonical and dropped; its concerns are already covered by the archetypes below
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 9, authenticityScore: 7, premiumScore: 9,
    adventureScore: 5, privacyScore: 9, wildlifeExperienceScore: 8,
    culturalImmersionScore: 3, familySuitabilityScore: 1, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3.5 hours overland from Nairobi (~160 km); 30-minute flight from Wilson Airport to Naishi Airstrip followed by a 25-minute game drive transfer.",
    seasonalAccessibility: "Open year-round. Elevated positioning prevents standing water or flood risk.",
    rainySeasonImpact: "None from flooding; high-altitude exposure creates strong late-afternoon wind thermals, and rising lake levels periodically alter shoreline dynamics and flamingo distribution.",
    electricitySystem: "24-hour uninterrupted solar-hybrid power system with generator backup.",
    powerReliability: "Full in-tent charging stations, universal sockets, and ambient design lighting.",
    waterReliability: "Continuous hot water via efficient central/solar water heating systems feeding high-flow rainfall showers and freestanding panoramic bathtubs.",
    internetAvailability: "Dedicated Wi-Fi coverage in guest suites and main lounge areas. Good Safaricom/Airtel cellular coverage across the elevated cliffside.",
    mobileNetwork: "Good Safaricom and Airtel cellular coverage.",
    medicalAccess: "Basic first aid kit on-site. Nakuru town private hospitals (e.g., Nakuru Level 5 / War Memorial Hospital) within a 30-minute drive. Emergency evacuation available via Naishi Airstrip.",
    childFriendly: false, // "Extremely Low" per source — hard exclusion under 12
    mobilityFriendly: false, // "Very Low" per source — sheer rock face, steep unpaved pathways, numerous stairs
    operationalLimitations: [
      "Strict age restrictions — children under 12 banned due to 100-meter vertical drop hazard",
      "Physical strain of steep walkways connecting suites to dining and lounge areas",
      "Potential tent vibration/flapping noise during intense afternoon thermal wind gusts",
      "Changing lake water levels impacting flamingo congregations",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "The 100-square-meter suites featuring roll-up canvas walls, freestanding bathtubs peering over the edge, and only 10 total keys create an ultra-private, romantic sanctuary.",
      supportingSignals: ["Freestanding edge-facing bathtubs", "Only 10 total keys"],
      mismatchConditions: ["Must navigate steep walkways between the suite and dining areas"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Elevated positioning grants psychological detachment (\"on top of the world\"). Slow pace, cliffside spa/gym, and high privacy foster complete mental decompression.",
      supportingSignals: ["Elevated psychological detachment", "High-privacy 10-suite layout"],
      mismatchConditions: ["Occasional late-afternoon thermal winds can cause tent canvas to flap audibly"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Visual Storyteller\"); mapped to The Fine-Art Ethologist per founder confirmation, supported by peerless 180-degree elevated visual panorama of the Rift Valley basin, offering golden-hour light conditions and bird's-eye angles impossible to replicate at ground level.",
      supportingSignals: ["180-degree elevated panorama", "Golden-hour light conditions"],
      mismatchConditions: ["Game drives require descending the cliffside track into the park main circuit"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Property policy strictly forbids children under 12 due to the obvious hazards of a 100-meter sheer cliff drop.",
      supportingSignals: [], mismatchConditions: ["Absolute safety hazard; booking will be rejected at reservation"] },
    // NOTE: source doc listed two additional incompatible entries — "Active Senior Explorers
    // with Mobility Constraints" and "The Heritage Purist (Vintage Safari Enthusiasts)" — both
    // dropped per founder confirmation, as neither the category nor the archetype exists in the
    // ontology. The mobility concern remains fully captured in operationalIntelligence above.
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as a non-canonical triple value 'Mid-Journey Peak / Aesthetic Disruption / Restorative Pivot'; resolved to Reflection per founder confirmation, consistent with the low 3/10 Intensity Score and the doc's own 'palate cleanser' framing. This is lodge #3 of the Nakuru batch (lodge #1 Opening Immersion, lodge #2 Recovery, lodge #3 Reflection) — three distinct values so far, no concentration pattern to flag.",
    whatShouldComeBefore: "High-intensity, dry, dusty overland safari segments (e.g., Samburu National Reserve, Aberdare National Park, or Lewa Conservancy).",
    whatShouldComeAfter: "Classic predator-heavy, open-savannah canvas environments (e.g., Maasai Mara National Reserve).",
    emotionalTransitionRationale: "Lifts travelers out of dusty, ground-level game-drive fatigue into a high-design, serene cocoon, resetting creative and physical energy.",
  },

  narrative: {
    whyChosen: "The Cliff is the reference example for architectural distinction within Lake Nakuru National Park: a 100-meter elevated boutique sanctuary that trades ground-level safari convention for panoramic isolation and design-forward luxury.",
    bestUsedFor: "Design-conscious couples, honeymooners, executives, or photographers seeking architectural distinction, high privacy, and rhino/birdlife conservation without crowds.",
    lessSuitableFor: "The client is traveling with children under 12, has knee/mobility limitations, or demands a rustic, vintage 1920s-style safari camp.",
    journeyPositionNote: "Reflection — a physical and mental palate cleanser positioned between high-intensity overland segments and high-predator game drives.",
    overview: "The Cliff shatters the historical mold of accommodations within Lake Nakuru National Park, introducing an elite, high-altitude architectural experience that mimics dramatic Mediterranean cliffside villas while remaining deeply rooted in African wilderness. Perched on a 100-meter sheer rock face, the property feels like an eagle's nest, granting guests a feeling of absolute dominance and serene detachment over the entire Rift Valley ecosystem.",
    emotionalFeel: "Expansive, poetic, and deeply calming. The psychological transition is instantaneous: guests experience a feeling of being \"on top of the world\" that immediately resolves into visual clarity and quiet awe.",
    sensorySignature: {
      visual: ["180-degree panoramic sweeps of Lake Nakuru, sheer volcanic rock faces, euphorbia forests, and golden sunrises across the water"],
      auditory: ["Thermal winds whistling up the cliffside", "Distant calls of fish eagles", "Echoing murmurs from the lake basin below"],
      olfactory: ["Crisp high-altitude breeze", "Wild acacia blossom", "Premium aromatherapy bath oils"],
    },
    positiveSignals: [
      "Freestanding panoramas: deep soaking bathtubs positioned against roll-up canvas facing the cliff edge",
      "Peerless 180-degree views across the lake basin during sunrise and sunset",
      "Exceptional privacy: 10 suites ensure minimal crowd interaction and maximum tranquility",
      "Polished boutique service — proactive, warm hospitality that respects private boundaries",
    ],
    negativeSignals: [
      "Inclined terrain challenge: steep steps and sloped pathways between suites and central lodge facilities",
      "Thermal wind dynamics: exposed cliffside location subjects tents to sudden afternoon gusts and canvas flapping",
      "Fluctuating lake ecology: rising water levels alter salinity, causing flamingo flocks to shift location periodically",
    ],
    hiddenGems: [
      "Private Rift Valley boat excursions combined with targeted early-morning rhino tracking. Returning from a crisp game drive to a private breakfast table set up on a lower ridge overlooking a crash of wild rhinos delivers an elite, off-the-beaten-path highlight.",
    ],
    signatureMemory: "Soaking in a warm, freestanding bathtub positioned at the edge of your 100m² canvas suite as the golden morning light breaks over the Rift Valley horizon and fish eagles call from below.",
    expectationManagement: "Travelers must be briefed on the steep cliffside terrain (walking effort required), the potential for late-afternoon wind thermals, and the dynamic nature of flamingo migrations in the Rift Valley.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Design-conscious couple, honeymooner, executive, or photographer seeking architectural distinction, high privacy, and rhino/birdlife conservation without crowds.",
    ],
    doNotRecommendConditions: [
      "Client traveling with children under 12",
      "Client with knee/mobility limitations",
      "Client demanding a rustic, vintage 1920s-style safari camp",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "The only ultra-luxury, 100-meter elevated cliffside property within Lake Nakuru National Park offering panoramic Mediterranean-style tented suites.",
    mainLimitation: "Steep terrain navigation and strict age limits.",
    positioningSummary: "An architectural masterpiece of ten sleek boutique suites suspended 100 meters above Lake Nakuru, offering design-focused travelers a dramatic, deeply romantic vantage point over a thriving rhino sanctuary.",
  },

  pairings: [
    { pairedEntity: "Sasaab or Elephant Bedroom Camp, Samburu", pairingCategory: "ecosystem", rationale: "Moving from hot, arid, elephant-dominated northern riverbanks to the cool, elevated cliffside luxury of Nakuru offers stark ecological and visual contrast." },
    { pairedEntity: "Angama Mara or Governors' Il Moran, Maasai Mara", pairingCategory: "regional", rationale: "Transitioning from panoramic cliffside tranquility to high-octane predator action keeps the luxury standard unbroken while shifting narrative pace." },
    { pairedEntity: "Lewa House, Lewa Conservancy", pairingCategory: "experience", rationale: "Creates a specialized, educational Rhino Conservation Circuit across Kenya." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property architectural briefs", "Park management records", "Regional access audits", "Operational field notes"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};