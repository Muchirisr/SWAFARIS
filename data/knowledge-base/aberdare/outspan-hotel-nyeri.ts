// data/knowledge-base/aberdare/outspan-hotel-nyeri.ts
export const outspanHotelNyeri = {
  id: "outspan-hotel-nyeri", // NEW lodge, no existing DB record
  name: "Outspan Hotel Nyeri",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Nyeri, Central Highlands",
  ecosystem: "Highland forest edge / Riverine valley (overlooking the Chania River with views toward Mount Kenya)",
  propertyType: "Historic Colonial Country Hotel / Heritage Estate",
  accommodationStyle: "Colonial-style country guest rooms, Chania Wing deluxe rooms, and private family cottages with fireplaces.",
  locationDetail: "Hilltop overlooking Nyeri town and the Chania River valley.",
  nearestGate: "Aberdare National Park Gates (Treetops Gate / Kiandongoro Gate ~17 km); Solio Game Reserve Gate (~25 km)",
  nearestAirstrips: ["Nyeri Airstrip (Nyaribo)", "Mweiga Airstrip", "Nanyuki Airstrip (NYK)"],
  accessibilityNotes: "Fully accessible year-round via paved tarmac highways directly to Nyeri Town. Paved driveways inside the hotel grounds lead to central reception. Landscaped lawns and multi-tiered historic buildings require navigating gentle steps and outdoor walking paths.",
  priceRangeMinUsd: 110,
  priceRangeMaxUsd: 270,
  rawMarketTier: "Budget", // as stated in source doc — retired governance value, folds to Value regardless of price-midpoint outcome
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price midpoint ($190) falls in the Value band ($150–299); also consistent with "Budget" retirement mapping
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Aberdare National Park (Fishing/Trekking Leg)",
    "Samburu National Reserve",
    "Solio Game Reserve",
    "Treetops Lodge (sister-property historical pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Rustic"], // all valid canonical values, no correction needed
    energyType: ["Wellness", "Cultural Discovery", "Family Connection"], // "Decompression Retreat" substituted → Wellness; "Restorative" replaced with Cultural Discovery + Family Connection per founder decision
    experiencePace: "Slow",
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // founder-confirmed: conservative bridge chosen over Classic Safari Elegance given documented aging fixtures/worn carpets and Value-tier price correction
    journeyRole: "Recovery", // founder-confirmed, resolved from source's dual "Opening Immersion / Recovery/Reset" hedge
    idealTravelersPrimary: ["Families", "Slow Travelers", "Social Explorers"], // CORRECTED: Solo Explorers dropped (its sole supporting archetype was invented and remapped to a Social Explorers archetype); Social Explorers added per founder decision
    idealTravelersSecondary: [],
    intensityScore: 2, relaxationScore: 8, authenticityScore: 9, premiumScore: 6,
    adventureScore: 3, privacyScore: 5, wildlifeExperienceScore: 4,
    culturalImmersionScore: 7, familySuitabilityScore: 8, comfortScore: 7,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2.5–3 hours overland from Nairobi (160 km); 15–20 minutes from Nyeri Airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Cool highland climate with rainy periods in April–May and November; in-room fireplaces offset evening cold.",
    electricitySystem: "24-hour continuous primary grid electricity supplemented by backup generators.",
    powerReliability: "High",
    waterReliability: "Central water supply with en-suite hot water showers/bathtubs; operational in-room fireplaces lit by staff during chilly evenings.",
    internetAvailability: "Wi-Fi available across main dining, lounge, conference rooms, and select guest rooms.",
    mobileNetwork: "Strong Safaricom/Airtel 4G coverage across the property.",
    medicalAccess: "Basic first aid on site; direct, immediate proximity (5–10 minutes) to major regional hospitals in Nyeri Town, including Outspan Hospital.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // resolved from source "Moderate" — ground-floor rooms/cottages offer flat lawn access, consistent with Aberdare Country Club precedent; caveat captured below
    operationalLimitations: [
      "Historic multi-story main lodge areas and river paths require navigating stairs; only ground-floor rooms/cottages offer flat access",
      "Varying room modernization between historic standard units and newer deluxe wings — worn carpets, outdated bathroom fixtures, slow hot water in some standard rooms",
      "Acoustic bleeding from nearby Nyeri town/transit roads",
      "Occasional dilution of quiet heritage atmosphere due to corporate conference traffic",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "Replaces wild bush anxiety with the serene, predictable structure of an old-world estate. Expansive 28-acre gardens and wood-burning fireplaces foster deep mental decompression.",
      supportingSignals: ["28-acre mature botanical gardens", "Wood-burning fireplaces lit nightly", "Predictable, low-stimulation estate rhythm"],
      mismatchConditions: ["Must accept that big-game viewing requires external day-trip transit rather than window-side animal sightings"] },
    { fitType: "ideal", category: "Social Explorers", archetype: "The Cultural Immersionist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source used an invented archetype (\"The Heritage & History Enthusiast\") under an invented category (\"Solo Explorers & Cultural Travelers\") — no real archetype by that name exists. Remapped to The Cultural Immersionist, the real Social Explorers archetype supported by the same underlying fit: deeply engaging historical legacy as the home of Paxtu Cottage (Lord Baden-Powell's final home) and early 20th-century Scouting/safari history, paired with regional Kikuyu cultural performances.",
      supportingSignals: ["Paxtu Cottage Museum (Baden-Powell's final home)", "Kikuyu cultural performances", "Cultural Immersion Score 7/10"],
      mismatchConditions: ["Some standard rooms show architectural age and basic fixtures compared to modern boutique lodges"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Vast, safe enclosed lawns for children to run, swimming pool facilities, lawn games, and accessible price points make it a zero-stress family hub.",
      supportingSignals: ["28-acre enclosed lawns", "Swimming pool and lawn games", "Multi-bedroom family cottages"],
      mismatchConditions: ["Town-edge positioning means occasional urban/traffic noise audio bleed"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "Utilitarian heritage budget setup, traditional country-inn architecture, and lack of private plunge pools or high-velocity predator tracking inside the property gates.",
      supportingSignals: [], mismatchConditions: ["Extreme mismatch between expectations of ultra-luxury safari isolation and Outspan's town-edge, historic country-hotel reality"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Honeymooners seeking Wild Isolation\"; corrected to the canonical category, Honeymooners. Corporate conference delegates, town-edge proximity, and public garden spaces eliminate exclusive romantic wilderness isolation.",
      supportingSignals: [], mismatchConditions: ["Disappointment with conference group noise in main dining areas and lack of deep-bush canvas romance"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Pure Safari Purists\"; corrected to the canonical category, First-Time Safari Travelers. Demands stepping out of bed directly into game-dense wilderness; Outspan requires driving 20–30 minutes to reach national park/sanctuary gates.",
      supportingSignals: [], mismatchConditions: ["Frustration with daily road commuting to access wildlife viewing loops"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion / Recovery/Reset,\" both canonical — genuine either/or requiring founder input. Founder resolved to Recovery, consistent with the doc's own framing as a \"dry out\" pad after Aberdare trekking/camping before the arid Samburu leg. REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x2 (Treetops Lodge, Rhino Watch Safari Lodge), Recovery x1 (this lodge).",
    whatShouldComeBefore: "Direct overland road arrival from Nairobi (2.5–3 hours) after an international flight, or high-altitude trekking/camping in Aberdare National Park.",
    whatShouldComeAfter: "High-intensity safari reserves (Solio Game Reserve, Samburu National Reserve, or Ol Pejeta Conservancy).",
    emotionalTransitionRationale: "Shifts the traveler from high-stress international transit into a contemplative, grounded, old-world country estate mindset.",
  },

  narrative: {
    whyChosen: "A historic 1927 colonial country hotel offering an accessible, value-tier recovery pad between intense highland trekking and arid northern reserves, anchored by a genuinely distinctive Scouting-history narrative.",
    bestUsedFor: "Families needing a safe, low-cost garden base, history-interested travelers drawn to the Paxtu Cottage legacy, and travelers needing a low-intensity resting point to break up long road transits.",
    lessSuitableFor: "Travelers demanding modern sleek architectural aesthetics, private plunge pools, high-exclusivity wild isolation, or a raw deep-bush safari camp feel.",
    journeyPositionNote: "Recovery — a warm, low-fatigue \"dry out\" stop after Aberdare highland trekking/camping, restoring comfort before the traveler moves into the hot, arid northern bush of Samburu.",
    overview: "Outspan Hotel functions as a grand, slow-moving historical time capsule positioned on a hilltop overlooking Nyeri town and the Chania River valley. The overarching atmosphere is that of a vintage British-colonial country inn marooned in a lush tropical forest.",
    emotionalFeel: "Anchored in nostalgia, comfort, and historical curiosity. The energetic rhythm is slow and steady — cool highland mist lifting off the lawns in the morning, garden tea or poolside reading in the afternoon, cozy timber bars or private fireplaces in the evening.",
    sensorySignature: {
      visual: ["Sprawling 28-acre green lawns punctuated by mature eucalyptus and cedar trees", "Peacocks strutting across open gardens", "Clear morning views of Mount Kenya's jagged peak"],
      auditory: ["Soft crackle of wood-burning bedroom fireplaces", "Bird song echoing through riverine canopy", "Distant rushing water from the Chania River below"],
      olfactory: ["Sweet woodsmoke from evening fires", "Damp highland earth", "Fragrant mountain flora and brewed Kenyan tea"],
    },
    positiveSignals: [
      "Expansive, mature 28-acre gardens allowing peaceful, isolated morning walks amid exceptional birdlife",
      "The preserved Paxtu Cottage — Lord Baden-Powell's final home — acts as a profound point of interest for history and Scouting enthusiasts",
      "Operational fireplaces in older suites and cottages, lit nightly by staff during chilly highland evenings",
      "Excellent, cost-effective logistical anchor for day trips to Aberdare National Park gates, Solio Ranch, or local coffee estates",
    ],
    negativeSignals: [
      "Architectural split between comfortable premium/deluxe rooms and aging standard rooms with worn carpets, outdated fixtures, and slow hot water",
      "Town-edge positioning means occasional acoustic bleeding from Nyeri town or nearby roads",
      "Corporate conference and seminar traffic can briefly dilute the quiet heritage atmosphere in main dining and meeting areas",
    ],
    hiddenGems: [
      "Pairing a night at Outspan with a night at sister property Treetops Lodge allows a compelling 'Royal History & Legacy' sub-narrative — tracing the exact footprint of early 1950s travel and the sites where British royalty and global historical figures rested.",
    ],
    signatureMemory: "Sitting on the wide open-air verandah on a clear morning sipping fresh Kenyan coffee while gazing across lush riverine gardens at the snow-capped peak of Mount Kenya.",
    expectationManagement: "Travelers must understand that Outspan is a historic 3-star colonial country inn on the edge of Nyeri town rather than a remote, luxury wilderness safari lodge. Standard rooms retain aged character, corporate conferences occasionally utilize common areas, and wildlife viewing requires traveling outside the property to nearby parks and reserves.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client profile demands value-conscious premium accommodations ($110–$270/night)",
      "Client has specific interest in twentieth-century history or Scouting heritage",
      "Client requires an easy-access family-friendly garden base",
      "Client needs a low-intensity resting point to break up long road transits across Central Kenya",
    ],
    doNotRecommendConditions: [
      "Client demands modern sleek architectural aesthetics or private plunge pools",
      "Client demands high-exclusivity wild isolation or a raw deep-bush safari camp feel with animals roaming past windows",
    ],
    confidenceLevel: "Medium", // per source — requires transparent alignment on modern luxury vs. old-world character expectations
    competitiveAdvantage: "Unrivaled historical Scouting legacy (Paxtu Museum) combined with expansive 28-acre botanical gardens and a low-cost entry point for exploring the Central Highlands circuit.",
    mainLimitation: "Older room hardware in standard categories and occasional corporate conference group traffic.",
    positioningSummary: "A historic, sprawling country estate at the edge of Nyeri town that serves as a tranquil, low-fatigue base for regional exploration and a living museum of early twentieth-century heritage.",
  },

  pairings: [
    { pairedEntity: "Aberdare National Park (Fishing/Trekking Leg)", pairingCategory: "ecosystem", rationale: "Excellent pairing for a split experience: days hiking to Karuru Falls or fly-fishing for trout in the national park, using Outspan as a warm, low-altitude base camp at night." },
    { pairedEntity: "Samburu National Reserve", pairingCategory: "regional", rationale: "The transition from the lush, historic country gardens of Nyeri to the raw, baking, red-dirt wilderness of Samburu creates a beautiful, high-contrast shock to the senses." },
    { pairedEntity: "Solio Game Reserve", pairingCategory: "experience", rationale: "A logical tactical pairing — Outspan allows travelers to save budget on accommodation while remaining a short 30-minute drive from elite rhino tracking at Solio." },
    { pairedEntity: "Treetops Lodge", pairingCategory: "experience (sister property)", rationale: "Enables a 'Royal History & Legacy' narrative pairing, tracing the exact footprint of early 1950s travel between the two historically linked properties." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Regional geographical surveys", "Heritage property operational archives", "Field reports", "Swafaris intelligence database"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Room-by-room soft-goods renovation timeline for standard units — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};