// data/knowledge-base/samburu/elephant-bedroom-camp.ts
export const elephantBedroomCamp = {
  id: "elephant-bedroom-camp", // NEW lodge, no existing DB record
  name: "Elephant Bedroom Camp",
  country: "Kenya",
  region: "Samburu",
  subRegion: "Samburu National Reserve",
  ecosystem: "Semi-Arid Wilderness / Riverine Forest & Doum Palm Grove",
  propertyType: "Rustic Eco-Luxury Safari Camp / Unfenced Riverfront Retreat",
  accommodationStyle: "Traditional canvas-and-timber luxury safari tents built on elevated wooden decks under a doum palm canopy, featuring rustic African textiles, private plunge pools, and riverfront views.",
  locationDetail: "Under doum palms along the Ewaso Nyiro River in Samburu National Reserve, inside an active elephant migration corridor.",
  nearestGate: "Archer's Gate (Samburu National Reserve)",
  nearestAirstrips: ["Buffalo Springs Airstrip (~30–45 minutes drive)", "Kalama Airstrip (~45–60 minutes drive)"],
  accessibilityNotes: "Level riverbank terrain framed by doum palm roots and gravel paths; unfenced, so wildlife moves freely through guest pathways.",
  priceRangeMinUsd: 900,
  priceRangeMaxUsd: 1600,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CORRECTED: price midpoint ($1,250) falls in the Ultra-Luxury band ($1,200+), overriding self-reported Premium — an upgrade, similar to Borana Lodge's case
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Mara Ngenche Safari Camp",
    "Tipilikwani Mara Camp",
    "Aberdare / Mount Kenya lodge",
    "Laikipia / Lewa conservancy camp",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Wild", "Inspirational", "Romantic"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Intimate" → Romantic per case-by-case rule, justified here since Sanctuary Seekers/Honeymooners archetype is compatible and Social Dynamic is only "Balanced" (not fully isolated)
    energyType: ["Nature Immersion", "Wildlife Focus"], // CORRECTED: "Immersive Nature" reworded to canonical "Nature Immersion"; "Sensory-rich" → Wildlife Focus given 9/10 wildlife score and close-proximity elephant identity
    experiencePace: "Moderate", // CORRECTED: "Balanced" non-canonical
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Classic Safari Elegance", // CORRECTED: "Classic safari | Eco-luxury" non-canonical; founder chose Classic Safari Elegance over Rustic Immersion — genuine either/or since the tier moved up (not down), so conservatism didn't force the modest option
    journeyRole: "Opening Immersion", // resolved directly — "Adventure Transition" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["First-Time Safari Travelers", "Honeymooners", "Nature Photographers"], // matches the three compatible archetype categories exactly, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 7, authenticityScore: 9, premiumScore: 8,
    adventureScore: 7, privacyScore: 6, wildlifeExperienceScore: 9,
    culturalImmersionScore: 8, familySuitabilityScore: 6, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5.5–6 hours drive from Nairobi (~345 km); 1-hour scheduled flight from Wilson Airport (WIL) to Buffalo Springs or Kalama Airstrip plus 30–60 minute road transfer with game drive en route.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "High river swells during April–May and November can cause localized flooding along lower banks, but elevated decks protect main structures.",
    electricitySystem: "24-hour solar hybrid power system with generator backup.",
    powerReliability: "Continuous",
    waterReliability: "Solar-heated water powering en-suite hot/cold running showers.",
    internetAvailability: "Wi-Fi available primarily in the central lounge and dining tent.",
    mobileNetwork: "Moderate cellular reception.",
    medicalAccess: "First-aid kits on-site with emergency medical air evacuation protocols via AMREF Flying Doctors out of local airstrips.",
    childFriendly: true, // "Moderate" per source, resolved per standing collapse precedent, confirmed by founder
    mobilityFriendly: true, // "Moderate" per source, resolved per standing collapse precedent, confirmed by founder
    operationalLimitations: [
      "Positioned inside a public national reserve, restricting activities to official reserve daylight hours (no off-road tracking or night drives within reserve boundaries)",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "High",
      reasoning: "Eye-level photography opportunities of elephants crossing the Ewaso Nyiro River directly from dining decks and private tent verandas.",
      supportingSignals: ["Eye-level elephant crossing photography from dining decks", "Private tent veranda vantage points", "Water-level dining deck photography angles"],
      mismatchConditions: ["Lighting under the dense doum palm canopy can require higher ISO settings during early morning or late afternoon shoots"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "High",
      reasoning: "Classic canvas romance, lantern-lit riverfront dinners, private deck plunge pools, and intimate wildlife encounters.",
      supportingSignals: ["Lantern-lit riverfront dinners", "Private deck plunge pools", "Classic canvas romantic setting"],
      mismatchConditions: ["Standard tents do not feature rigid soundproofing, meaning sounds carry in the quiet night air"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "High",
      reasoning: "ONTOLOGY CORRECTION: source listed the archetype 'The High-Octane Collector' under First-Time Safari Travelers; High-Octane Collector actually belongs to Luxury Adventurers. Remapped to The Checklist Maximalist, the correct First-Time Safari Travelers archetype for the described psychology of immediate, high-impact wildlife immersion and instant safari payoff without waiting.",
      supportingSignals: ["Immediate, high-impact wildlife immersion without waiting", "Elephants feeding directly outside tents", "Instant safari highlight on arrival"],
      mismatchConditions: ["Must adhere to structured reserve rules and pre-ordered dining schedules"] },
    // DROPPED: "The Extreme Isolationist / High-Profile Public Figure" — not a real archetype/category; privacy-seeking-at-any-cost is not itself a psychological archetype in the ontology, no clean equivalent
    // DROPPED: "The Hyper-Modern Minimalist" — not a real archetype/category; aesthetic mismatch already captured in narrative.negativeSignals
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Adventure Transition or Opening Immersion\"; 'Adventure Transition' is not canonical, but Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Samburu sub-phase, lodge 2/2 so far): Opening Immersion x2 — 100% concentration on only two lodges, too early to assess against the 86% audit threshold but flagged for early tracking.",
    whatShouldComeBefore: "Direct arrival via Wilson Airport flight or a high-altitude forest stop like Aberdare/Mount Kenya.",
    whatShouldComeAfter: "A high-density savannah ecosystem like the Maasai Mara (e.g., sister properties Mara Ngenche Safari Camp or Tipilikwani Mara Camp).",
    emotionalTransitionRationale: "Instantly strips away urban fatigue by throwing guests into raw, up-close animal encounters.",
  },

  narrative: {
    whyChosen: "An intimate, unfenced riverfront camp delivering unrivaled front-row elephant encounters, positioned as an immediate emotional-high opener that breaks travel fatigue.",
    bestUsedFor: "First-time safari goers, honeymooners, and photographers who want a classic, romantic tented safari centered on direct, front-row elephant contact.",
    lessSuitableFor: "Ultra-exclusive travelers needing absolute isolation, guests with high anxiety regarding un-fenced animal proximity, or lovers of sleek modern architecture.",
    journeyPositionNote: "Opening Immersion — an immediate, front-row wildlife emotional peak that breaks travel fatigue.",
    overview: "Elephant Bedroom Camp is an intimate, 14-tent eco-luxury retreat situated under doum palms along the Ewaso Nyiro River in Samburu National Reserve. Built directly inside an active elephant migration corridor, its unfenced, classic canvas design creates a rare boundary-free environment where wildlife moves freely through the grounds.",
    emotionalFeel: "Exhilarating, immersive, and sensory-rich. The proximity of multi-ton wildlife fosters an alive, humbled emotional state balanced by riverfront relaxation.",
    sensorySignature: {
      visual: ["Doum palm fronds framing the muddy Ewaso Nyiro River", "Vibrant African textiles", "Elephants wading past private decks"],
      auditory: ["The constant rushing current of the river", "Bird calls in the canopy", "Low, vibrational elephant rumbles"],
      olfactory: ["Wild sage", "Sun-baked earth", "Doum palm nuts", "Wood smoke from evening campfires"],
    },
    positiveSignals: [
      "Frequent sightings of wild elephants feeding between tents and drinking at the riverbank",
      "Meal tables set directly along the river's edge under mature trees",
      "Every tent deck includes a private plunge pool for cooling off during midday heat",
      "Personalized, unpretentious care from the Atua Enkop team and Samburu guides",
    ],
    negativeSignals: [
      "Canopy monkeys can raid unzipped tents or unattended deck items",
      "Menus require pre-ordering meals in advance, which can feel restrictive to some luxury travelers",
      "Authentic canvas and timber structures show climate wear compared to modern ultra-luxury builds",
    ],
    hiddenGems: [
      "Low-angle photography options directly from the water-level dining deck, alongside guided ethnobotanical walk options with Samburu naturalists within the safe riverine grove.",
    ],
    signatureMemory: "Watching a family of wild elephants cross the Ewaso Nyiro River right in front of your breakfast table while enjoying fresh coffee under the doum palms.",
    expectationManagement: "Guests must understand that the camp is genuinely unfenced; wild animals walk through camp day and night, requiring adherence to safety briefings and staff escorts after dark.",
    idealNights: "2 to 3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Ideal for first-time safari goers, honeymooners, and photographers who want a classic, romantic tented safari",
      "Client wants direct, front-row elephant contact",
    ],
    doNotRecommendConditions: [
      "Ultra-exclusive travelers needing absolute isolation",
      "Guests with high anxiety regarding un-fenced animal proximity, or lovers of sleek modern architecture",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Direct location inside an active riverine migration corridor in Samburu Reserve, guaranteeing some of the closest natural elephant encounters in East Africa.",
    mainLimitation: "Public reserve activity boundaries and shared camp spaces.",
    positioningSummary: "A classic, deeply immersive luxury tented camp along the Ewaso Nyiro River, offering travelers thrilling, front-row encounters with roaming elephants within an authentic, unfenced Samburu wilderness corridor.",
  },

  pairings: [
    { pairedEntity: "Mara Ngenche Safari Camp", pairingCategory: "ecosystem", rationale: "Combines the dry, palm-shaded riverbed of Samburu with the rolling green grasslands of the Maasai Mara." },
    { pairedEntity: "Tipilikwani Mara Camp", pairingCategory: "ecosystem", rationale: "Alternative Maasai Mara sister-property pairing offering the same ecological contrast to Samburu's riverbed setting." },
    { pairedEntity: "Aberdare / Mount Kenya lodge", pairingCategory: "regional", rationale: "Part of the Samburu Reserve → Aberdare/Mount Kenya → Maasai Mara regional sequencing arc." },
    { pairedEntity: "Laikipia / Lewa conservancy camp", pairingCategory: "experience", rationale: "Pairs the immersive, ground-level elephant encounters of Elephant Bedroom Camp with private conservancy night drives or rhino tracking in Laikipia/Lewa." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Atua Enkop operational briefs", "Samburu Reserve guide specifications", "Recent field evaluations"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [],
  },
};