// data/knowledge-base/samburu/saruni-samburu.ts
export const saruniSamburu = {
  id: "saruni-samburu", // NEW lodge, no existing DB record
  name: "Saruni Samburu",
  country: "Kenya",
  region: "Samburu",
  subRegion: "Kalama Community Wildlife Conservancy",
  ecosystem: "Semi-Arid Volcanic Ridge / Kalama Escarpment / Acacia-Commiphora Scrubland Plateau",
  propertyType: "Eco-Luxury Cliffside Safari Lodge / Boutique Architectural Villa Resort",
  accommodationStyle: "Contemporary open-front stone-and-canvas luxury villas built into volcanic rock outcrops with wide verandahs, private dining decks, and panoramic valley views.",
  locationDetail: "Built directly into a volcanic rock face within the 200,000-acre Kalama Community Wildlife Conservancy.",
  nearestGate: "Kalama Conservancy Gate / Archer's Gate (Samburu National Reserve crossover ~35–45 minutes drive)",
  nearestAirstrips: ["Kalama Airstrip (~20–30 minutes drive)", "Buffalo Springs Airstrip (~45–60 minutes drive)"],
  accessibilityNotes: "Accessible year-round by 4x4 via the paved Nanyuki-Isiolo highway, transitioning to steep off-road tracks up the escarpment; steep, uneven stone pathways and open cliff edges within camp.",
  priceRangeMinUsd: 850,
  priceRangeMaxUsd: 1500,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 4",
  budgetTier: "Luxury", // CORRECTED: price midpoint ($1,175) falls in the Luxury band ($800–1,199), overriding self-reported Ultra-Luxury
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Enashipai Resort & Spa (Lake Naivasha)",
    "Entim Mara",
    "Sala's Camp",
    "Saruni Rhino (Sera Conservancy)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Exploratory", "Peaceful"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); Exploratory/Peaceful valid as-is
    energyType: ["Adventure", "Luxury Escape"], // CORRECTED: "Adventurous" is an emotional-tone value not an energy type, resolved to canonical "Adventure"; "Quiet luxury" → Luxury Escape
    experiencePace: "Moderate", // CORRECTED: "Balanced" non-canonical
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // CORRECTED: "Contemporary luxury | Eco-luxury" non-canonical; conservatism principle applied given the price-tier downgrade and no heritage-status exception (established 2008, no heritage claim)
    journeyRole: "Opening Immersion", // resolved directly — "Mid-Journey Peak" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Honeymooners", "Luxury Adventurers", "Nature Photographers", "Slow Travelers"], // CORRECTED: added "Slow Travelers" — supported by the compatible Biophilic Restorer archetype but missing from source's primary list
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 9, authenticityScore: 9, premiumScore: 9,
    adventureScore: 8, privacyScore: 9, wildlifeExperienceScore: 7,
    culturalImmersionScore: 8, familySuitabilityScore: 5, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5.5–6.5 hours overland from Nairobi (330+ km); 45–60 minutes flight from Wilson Airport (WIL) to Kalama Airstrip plus 20–30 minute road transfer up the escarpment.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Heavy rains (April–May, November) make the steep escarpment tracks slick, requiring skilled 4x4 handling; game drives subject to river swell conditions.",
    electricitySystem: "100% solar photovoltaic power system with generator backup.",
    powerReliability: "Continuous 24-hour",
    waterReliability: "Solar water heating system, water pumped up the escarpment and filtered on-site.",
    internetAvailability: "Wi-Fi available in the main Kudu House lounge and select villa zones.",
    mobileNetwork: "Variable cellular coverage across the escarpment.",
    medicalAccess: "On-site first aid kit and trained staff; emergency air-evacuation via AMREF Flying Doctors out of Kalama or Buffalo Springs Airstrip.",
    childFriendly: false, // "Moderate to Low" per source, graded and skewing negative; resolved to false given explicit toddler fall-risk language and 5/10 Family Suitability Score, founder-confirmed
    mobilityFriendly: false, // "Low" per source, unambiguous
    operationalLimitations: [
      "30–45 minute transit latency down the escarpment to reach prime Ewaso Nyiro riverfront wildlife zones in Samburu Reserve",
      "Non-air-conditioned open-front structures relying on natural ridge breezes",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "High",
      reasoning: "Wide villa separation, private open-air dining decks, cliff-edge infinity pools, and panoramic mountain vistas provide ideal romantic privacy and atmospheric luxury.",
      supportingSignals: ["Wide villa separation", "Private open-air dining decks", "Cliff-edge infinity pools"],
      mismatchConditions: ["Must accept a 30–45 minute vehicle transit down the ridge to reach central river safari routes"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Combines architectural design with high-yield activities like night game drives, tracking rare species, guided rock climbing, and stargazing via private conservancy access.",
      supportingSignals: ["Night game drives with red spotlights", "Guided rock climbing", "Cave visits with rock art"],
      mismatchConditions: ["High-density predator sightings require driving down into the main public reserve"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "High",
      reasoning: "High-altitude landscape perspectives overlooking Mount Ololokwe, night tracking of nocturnal species with spotlighting, and uncrowded conservancy photography.",
      supportingSignals: ["High-altitude landscape perspectives", "Night tracking with spotlighting", "Uncrowded conservancy photography"],
      mismatchConditions: ["Vehicle movement along steep escarpment tracks can cause camera equipment vibration during transit"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "Immense spatial clarity, quiet cliffside breezes, open-front villa living, and unhurried daily schedules facilitate mental decompression.",
      supportingSignals: ["Immense spatial clarity", "Quiet cliffside breezes", "Unhurried daily schedules"],
      mismatchConditions: ["Navigating the physical terrain requires moderate cardiovascular effort due to steep stone steps"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Low",
      reasoning: "Open cliff edges, absence of perimeter safety railings, multi-level rock paths, and unpaved stone steps pose unacceptable fall risks for toddlers.",
      supportingSignals: [], mismatchConditions: ["Physical hazard from steep rock drop-offs and strenuous internal camp transit with small children"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "The 30–45 minute transit down the mountain to reach prime Ewaso Nyiro riverfront game loops conflicts with desires for immediate, low-latency wildlife encounters.",
      supportingSignals: [], mismatchConditions: ["Frustration with daily transit times before reaching core wildlife viewing sectors in Samburu Reserve"] },
    // DROPPED: "Solitary Resetter / Traveler with Limited Mobility (Students / Seniors)" — The Solitary Resetter is real but belongs to Students, and its own fit rationale here describes pure physical mobility hazards, not student psychology; "Seniors" is not a real category. Mobility barrier already captured via mobilityFriendly: false and operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Mid-Journey Peak (or Opening Immersion)\"; 'Mid-Journey Peak' is not canonical, but Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Samburu sub-phase, lodge 1/1 so far): Opening Immersion x1.",
    whatShouldComeBefore: "Direct flight from Wilson Airport, Nairobi, or an overland transit. Serves as a high-altitude, architectural opening anchor to Kenya's northern frontier.",
    whatShouldComeAfter: "A lush, water-rich environment like Lake Naivasha (Enashipai Resort & Spa) or a low-altitude, high-density predator canvas camp in the Maasai Mara (e.g., Entim Mara or Sala's Camp).",
    emotionalTransitionRationale: "Shifts travelers from urban/transit fatigue into expansive mental clarity and visual awe, establishing an appreciation for northern indigenous culture.",
  },

  narrative: {
    whyChosen: "An architectural marvel of ultra-private cliffside villas offering total exclusivity and dramatic high-altitude views, positioned as a striking opening anchor to Kenya's northern frontier.",
    bestUsedFor: "Honeymooners, luxury adventurers, or nature lovers seeking architectural design, complete villa privacy, indigenous culture, and dramatic high-altitude views.",
    lessSuitableFor: "Guests with knee or mobility impairments, families with toddlers under 6, or travelers demanding immediate wildlife viewing directly outside their rooms.",
    journeyPositionNote: "Opening Immersion — a striking architectural landing point before deeper river-safari legs.",
    overview: "Saruni Samburu is an eco-luxury safari lodge built directly into a volcanic rock face within the 200,000-acre Kalama Community Wildlife Conservancy. Comprising six open-front luxury stone villas, two cliff-edge infinity pools, and a central lounge (Kudu House), the lodge sits high above the northern plains, offering panoramic vistas toward Mount Ololokwe. It merges architectural design with community-led conservation, operating as the sole permanent lodge inside Kalama.",
    emotionalFeel: "Expansive, tranquil, and intellectually grounding. The physical elevation creates a sense of detachment from the world below, where guests experience quiet luxury amidst dramatic geological features and skyward horizons.",
    sensorySignature: {
      visual: ["180-degree panoramas of red earth plains", "Billowing white curtains against stone walls", "Mount Ololokwe framing the horizon"],
      auditory: ["High-altitude wind rustling through open canvas walls", "Calls of raptors riding thermals", "Silence across the plains at midday"],
      olfactory: ["Sun-baked volcanic stone", "Wild sage", "Dry desert air", "Polished hardwood"],
    },
    positiveSignals: [
      "Magnificent arrival sequence opening up to expansive views across the northern frontier",
      "Two cliff-edge infinity pools carved into the rock offer relaxing midday options in the semi-arid heat",
      "Deep cultural, botanical, and astronomical knowledge delivered by local Samburu warriors",
      "Wide villa spacing ensures privacy and uninterrupted views",
    ],
    negativeSignals: [
      "A 30 to 45-minute drive down the escarpment is required to reach the primary riverfront game viewing areas in Samburu Reserve",
      "Uneven, steep stone pathways and open cliff edges limit accessibility for mobility-impaired guests or young children",
      "Multi-course Italian-inspired menus can feel heavy in the hot, arid climate",
    ],
    hiddenGems: [
      "The upper pool deck functions as a stargazing platform at night, completely free from light pollution. Guided by Samburu warriors who share ancestral folklore, guests can view the night sky through high-powered telescopes. Private conservancy status allows night game drives with red spotlights to observe rare nocturnal desert species.",
    ],
    signatureMemory: "Sipping an evening drink on a private stone verandah as the sun sets behind Mount Ololokwe, illuminating the northern plains in crimson light.",
    expectationManagement: "Travelers must understand this is an elevated cliffside sanctuary, not a riverbank camp. Reaching the Ewaso Nyiro River requires a 30 to 45-minute mountain drive, and walking through camp involves navigating steep stone steps and open rock faces.",
    idealNights: "3 to 4",
  },

  recommendationNotes: {
    recommendConditions: [
      "Matching honeymooners, luxury adventurers, or nature lovers seeking architectural design and complete villa privacy",
      "Client wants indigenous culture and dramatic high-altitude views",
    ],
    doNotRecommendConditions: [
      "Curating for guests with knee or mobility impairments, families with toddlers under 6",
      "Travelers demanding immediate wildlife viewing directly outside their rooms",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Sole luxury lodge inside the 200,000-acre Kalama Conservancy, offering total exclusivity, panoramic views, open-front stone villa architecture, and night safari permissions.",
    mainLimitation: "Transit time required to descend the escarpment to Samburu Reserve's core river routes, alongside steep physical terrain within camp.",
    positioningSummary: "An architectural marvel of six ultra-private luxury villas carved into a volcanic rock ridge, offering sophisticated adventurers an exclusive, high-altitude sanctuary with panoramic views over northern Kenya.",
  },

  pairings: [
    { pairedEntity: "Enashipai Resort & Spa (Lake Naivasha)", pairingCategory: "ecosystem", rationale: "Combines Samburu's dry, high-altitude volcanic landscape with the freshwater ecosystems of Lake Naivasha." },
    { pairedEntity: "Entim Mara", pairingCategory: "ecosystem", rationale: "Combines Samburu's dry, high-altitude volcanic landscape with the lush, riverine savannahs of the Maasai Mara." },
    { pairedEntity: "Sala's Camp", pairingCategory: "ecosystem", rationale: "Alternative Maasai Mara pairing offering lush riverine savannah contrast to Samburu's dry volcanic landscape." },
    { pairedEntity: "Saruni Rhino (Sera Conservancy)", pairingCategory: "experience", rationale: "Pairs the elevated architectural luxury of Saruni Samburu with ground-level rhino tracking on foot at Saruni Rhino in Sera Conservancy." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Saruni Basecamp operational specifications", "Regional geographical maps", "Architectural property records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Specific photovoltaic battery storage expansion metrics — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};