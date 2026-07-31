// data/knowledge-base/enchoro-wildlife-camp.ts
export const enchoroWildlifeCamp = {
  id: "enchoro-wildlife-camp", // NEW lodge, no existing DB record
  name: "Enchoro Wildlife Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Oloolaimutia Sector / Eastern Boundary",
  ecosystem: "Savannah — Hillside scrubland adjacent to Oloolaimutiek Village",
  propertyType: "Rustic Eco-Tented Base Camp / Budget Safari Camp",
  accommodationStyle: "Semi-permanent canvas tents under thatched roofs on concrete bases, with basic en-suite flush toilets and hot showers.",
  locationDetail: "Rugged hillside directly bordering Oloolaimutiek Village, adjacent to Oloolaimutia Gate.",
  nearestGate: "Oloolaimutia Gate (approx. 2-minute drive / 11-minute walk)",
  nearestAirstrips: ["Keekorok Airstrip"],
  accessibilityNotes: "Unpaved, rough dirt approach roads require high-clearance 4x4 vehicles. Unfenced hillside terrain features uneven gravel paths and steep inclines.",
  priceRangeMinUsd: 60,
  priceRangeMaxUsd: 120,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision below
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — folds into Value per founder governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Lake Naivasha or Hell's Gate National Park (ecosystem pairing)",
    "Mara North or Olare Motorogi private conservancy (step-up pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Rustic", "Wild"], // all approved, no change needed
    energyType: ["Adventure", "Nature Immersion"], // confirmed normalization
    experiencePace: "Fast", // confirmed normalization from "Fast-Paced"
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Rustic Immersion",
    journeyRole: "Opening Immersion", // canonical match, no substitution needed
    idealTravelersPrimary: ["First-Time Safari Travelers", "Slow Travelers", "Solo Explorers"],
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 3, authenticityScore: 7, premiumScore: 2,
    adventureScore: 7, privacyScore: 3, wildlifeExperienceScore: 8,
    culturalImmersionScore: 7, familySuitabilityScore: 4, comfortScore: 4,
    socialDynamic: "Social",
    travelFatigue: "High",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5–6 hours overland from Nairobi (~265 km) via Narok and Sekenani/Oloolaimutia dirt tracks; 45 min bush flight Wilson→Keekorok + 40 min drive.",
    seasonalAccessibility: "Open year-round; heavy rains (April–May) turn dirt tracks around Oloolaimutia into deep mud, requiring 4x4 capability.",
    rainySeasonImpact: "Heavy rains (April–May) turn local dirt tracks into deep mud.",
    electricitySystem: "Timed generator operation backed by basic solar lighting during off-peak hours.",
    powerReliability: "In-tent charging available primarily during generator windows (early morning and evening) — intermittent, not continuous.",
    waterReliability: "Hot water heated via wood-burning boilers (donkeys) or localized solar heaters, synchronized with morning/evening schedules.",
    internetAvailability: "Wi-Fi in central dining/lounge areas with intermittent bandwidth.",
    mobileNetwork: "Safaricom cellular signal accessible across most parts of the camp.",
    medicalAccess: "Basic first aid kit on site; nearest primary clinic in Sekenani/Narok; emergency evacuation via Keekorok Airstrip.",
    childFriendly: false, // Moderate for older children, Low for toddlers per source
    mobilityFriendly: false, // Low per source
    operationalLimitations: [
      "Scheduled generator hours mean intermittent electrical access",
      "Budget group tours and overland trucks can create high noise levels in public dining areas",
      "Aging canvas and basic plumbing fixtures reflect the lower price bracket",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Solo Explorers", archetype: "Autonomous Hunter", matchStrength: "Moderate",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\"); mapped per founder confirmation — maximizes price-to-wildlife value by cutting out expensive resort frills while securing rapid early-morning access to reserve gates.",
      supportingSignals: ["Rapid early-morning gate access", "No resort frills, direct wildlife value"],
      mismatchConditions: ["Must tolerate timed power schedules, basic canvas accommodations, and bumpy road approaches"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "Conservation Guardian", matchStrength: "Moderate",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Unscripted Culturist\"); mapped per founder confirmation — positioned near Oloolaimutiek Village, enabling organic interactions with local staff and community life without curated resort staging.",
      supportingSignals: ["Direct village adjacency", "Unstaged community interaction"],
      mismatchConditions: ["Lacks the deep physical comfort, private viewing decks, or quiet luxury required for long-term restorative stays"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Basic canvas infrastructure, noisy group tour arrivals, timed generator schedules, and lack of air conditioning or spa amenities conflict directly with mental recovery needs.",
      supportingSignals: [], mismatchConditions: ["High friction due to noise, lack of continuous power, and physical fatigue from basic camp logistics"] },
    { fitType: "poorFit", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Unfenced terrain, torchlit night walks, drop-offs, and lack of child-friendly swimming facilities or gated security pose safety hazards for small children.",
      supportingSignals: [], mismatchConditions: ["Stressful oversight requirements for parents navigating unfenced wilderness with young kids"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Thin tent walls, communal dining spaces, and potential noise from overland tour groups eliminate romantic isolation and private sanctuary vibes.",
      supportingSignals: [], mismatchConditions: ["Severe expectation mismatch regarding privacy, dining intimacy, and luxury finishes"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source states 'Opening Immersion' directly — a canonical match, no substitution needed.",
    whatShouldComeBefore: "Long overland transfer from Nairobi via Narok to establish initial 'safari legs.'",
    whatShouldComeAfter: "Transition upward into a mid-tier or private conservancy camp (e.g., Mara North or Olare Motorogi) or a relaxing freshwater retreat at Lake Naivasha to recover physically.",
    emotionalTransitionRationale: "Eases budget-conscious travelers into raw African savannah life before stepping up to higher-comfort destinations.",
  },

  narrative: {
    whyChosen: "Enchoro is the reference example for high-utility Opening Immersion at the true entry-level price point: unbeatable 2-minute gate access and organic village-adjacent cultural exposure, stripped of resort infrastructure entirely — the lowest Premium Experience Score in the database (2/10) by deliberate design, not deficiency.",
    bestUsedFor: "High-stamina budget travelers, student groups, solo explorers, or vegetarian/vegan cohorts prioritizing gate access and low cost over material luxury.",
    lessSuitableFor: "Honeymooners, luxury families, burned-out executives, or guests with limited physical mobility.",
    journeyPositionNote: "Opening Immersion — establishes safari routines before stepping up to higher-comfort lodges.",
    overview: "Enchoro Wildlife Camp is an unpretentious budget eco-camp on a rugged hillside just outside the Maasai Mara's Oloolaimutia Gate, offering basic en-suite canvas tents under thatched roofs, hot water, and a central campfire hub for budget-conscious travelers, student groups, and solo adventurers.",
    emotionalFeel: "Communal, rugged, and grounded — resembling an African youth hostel or overland base camp. Early morning rushes to the reserve gate give way to quiet afternoons and social, campfire-centered evenings under starlit skies.",
    sensorySignature: {
      visual: ["Rolling hills of the eastern Mara seen from basic wooden verandas", "Brilliant, unpolluted night skies filled with stars"],
      auditory: ["Crackling bonfires at dusk", "Nocturnal wildlife sounds", "Lively dinner conversations among travel groups"],
      olfactory: ["Dry woodsmoke", "Crushed savanna foliage", "Fresh mountain air"],
    },
    positiveSignals: [
      "Staff noted for sincere care during guest fatigue or illness",
      "Adaptive kitchen team capable of preparing hearty vegetarian and vegan stews and chapatis for budget groups",
      "2-minute drive to Oloolaimutia Gate offers significant logistical advantage for morning game drives",
      "Minimal light pollution delivers exceptional stargazing around the evening campfire",
    ],
    negativeSignals: [
      "Unmarked, degraded dirt tracks make self-drive navigation difficult",
      "Inconsistent tent quality and occasional plumbing or canvas wear",
      "Shared public areas can become noisy during peak overland tour arrivals",
    ],
    hiddenGems: [
      "Organic cultural proximity to Ololaimutiek Village — the camp boundary merges naturally with local life, allowing guests to observe daily pastoral routines without artificial resort performances.",
    ],
    signatureMemory: "Sharing safari stories and cold drinks around the evening campfire under a starlit night sky after an early morning predator drive.",
    expectationManagement: "Enchoro is a budget base camp designed for essential shelter and park access. It lacks luxury amenities like swimming pools, continuous 24/7 power, or high-end spa facilities.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "High-stamina budget travelers, student groups, solo explorers, or vegetarian/vegan cohorts prioritizing gate access and low cost over material luxury.",
    ],
    doNotRecommendConditions: [
      "Honeymooners",
      "Luxury families",
      "Burned-out executives",
      "Guests with limited physical mobility",
    ],
    confidenceLevel: "Medium", // per source — sits outside standard luxury/premium portfolios, requires careful guest filtering
    competitiveAdvantage: "Unbeatable price-to-location ratio providing fast 2-minute gate access to the Maasai Mara National Reserve.",
    mainLimitation: "Basic physical infrastructure, timed power schedules, and potential noise from budget group tours.",
    positioningSummary: "A rustic, high-utility budget eco-camp situated directly at the Maasai Mara gate, offering raw wilderness immersion and deeply authentic communal warmth for high-stamina travelers prioritizing wildlife access over material luxury.",
  },

  pairings: [
    { pairedEntity: "Lake Naivasha or Hell's Gate National Park", pairingCategory: "ecosystem", rationale: "Balances high-intensity dust and driving with quiet lakeside walking safaris." },
    { pairedEntity: "Mara North or Olare Motorogi private conservancy", pairingCategory: "regional", rationale: "Step up into quiet luxury after an energetic entry stay." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Property records", "Regional access mapping", "Operator documentation"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Scheduled solar expansion dates for off-grid power stability — explicitly flagged as subject to ongoing operator updates in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};