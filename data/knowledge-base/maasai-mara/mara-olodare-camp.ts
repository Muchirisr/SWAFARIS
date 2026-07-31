// data/knowledge-base/mara-olodare-camp.ts
export const maraOlodareCamp = {
  id: "mara-olodare-camp", // NEW lodge, no existing DB record
  name: "Mara Olodare Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Oloolaimutia Sector / Eastern Boundary",
  ecosystem: "Savannah — Indigenous thicket canopy near Oloolaimutiek Village",
  propertyType: "Entry-Level Eco-Tented Basecamp / Semi-Luxury Budget Safari Camp",
  accommodationStyle: "Traditional canvas safari tents under mature indigenous tree canopy with basic wooden verandas, en-suite flush toilets, and hot water showers.",
  locationDetail: "Nestled under a mature indigenous tree thicket, 800 meters from Oloolaimutia Gate.",
  nearestGate: "Oloolaimutia Gate (approx. 800 meters / 2-minute drive)",
  nearestAirstrips: ["Keekorok Airstrip"],
  accessibilityNotes: "Approached via rough, unpaved country tracks. Sloped, natural thicket pathways require careful footing, especially during dim twilight hours.",
  priceRangeMinUsd: 120,
  priceRangeMaxUsd: 250,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price midpoint ~$185, clean fit, no conflict
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Lake Naivasha or Lake Nakuru (ecosystem pairing, break up overland drive)",
    "Mara North Conservancy or Diani/Watamu beach stay (rough-and-refined contrast pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Rustic", "Social"], // "Intimate" dropped per founder decision, not approved vocabulary
    energyType: ["Adventure", "Nature Immersion"], // confirmed normalization
    experiencePace: "Fast", // confirmed normalization from "Fast-Paced"
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Rustic Immersion",
    journeyRole: "Opening Immersion", // canonical match, no substitution needed
    idealTravelersPrimary: ["First-Time Safari Travelers", "Luxury Adventurers"],
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 3, authenticityScore: 7, premiumScore: 3,
    adventureScore: 7, privacyScore: 5, wildlifeExperienceScore: 8,
    culturalImmersionScore: 7, familySuitabilityScore: 5, comfortScore: 5,
    socialDynamic: "Balanced",
    travelFatigue: "High",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5–6 hours overland from Nairobi (~265 km) via Narok and Sekenani/Oloolaimutia unpaved roads; 45 min bush flight Wilson→Keekorok + 35 min drive.",
    seasonalAccessibility: "Open year-round; rainy season (April–May) can make dirt approach tracks slippery and muddy, necessitating experienced 4x4 drivers.",
    rainySeasonImpact: "Dirt approach tracks become slippery and muddy during April–May rains.",
    electricitySystem: "Solar array system backed by generator support.",
    powerReliability: "In-tent charging available during main power operating hours (morning and evening) — not continuous.",
    waterReliability: "Hot water heated via solar or wood-fired boilers; water pressure and heating can experience volatility during peak morning usage.",
    internetAvailability: "Wi-Fi in central lounge and dining areas with variable signal speed.",
    mobileNetwork: "Safaricom cellular coverage accessible across the property.",
    medicalAccess: "Basic first aid kit on site; primary health clinics in Sekenani/Narok; emergency air evacuation via Keekorok Airstrip.",
    childFriendly: false, // Moderate for older children, Low for young toddlers per source
    mobilityFriendly: false, // Moderate to Low per source
    operationalLimitations: [
      "Thermal canvas design offers low cold protection during chilly Mara nights",
      "Single buffet or fixed menus lack customization for strict diets",
      "Hot water system subject to utility fluctuations during high occupancy",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\"); mapped per founder confirmation, consistent with Enkorok Mara Camp and Mara Intrepids precedent — prioritizes wildlife viewing time and authentic cultural warmth over material luxury; values fast gate access and intimate camp size.",
      supportingSignals: ["800-meter gate proximity", "Intimate 8-tent scale"],
      mismatchConditions: ["Must accept basic dining menus, cool night temperatures inside tents, and potential hot water volatility"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "Anthropological Explorer", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Unscripted Culturist\"); mapped per founder confirmation — seeks genuine human connections and uncommercialized local hospitality away from massive 100-room safari factory lodges.",
      supportingSignals: ["Uncommercialized local Maasai hospitality", "Genuine cultural storytelling"],
      mismatchConditions: ["Lack of high-end spa infrastructure or gourmet culinary customization"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Basic canvas insulation, cold night conditions, utility fluctuations, and fixed buffet menus conflict directly with expectations for sensory recovery and high-end comfort.",
      supportingSignals: [], mismatchConditions: ["Immediate dissatisfaction regarding material amenities and lack of thermal insulation"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Lack of private plunge pools, fine-dining flexibility, or luxurious spa facilities fails to meet expectations for romantic isolation.",
      supportingSignals: [], mismatchConditions: ["Expectation mismatch concerning glamping finishes and private dining"] },
    { fitType: "poorFit", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Freezing night temperatures, unfenced natural thicket terrain, and lack of swimming or child-tailored services present operational challenges for parents with toddlers.",
      supportingSignals: [], mismatchConditions: ["High parental stress navigating chilly nights and unfenced terrain"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source states 'Opening Immersion' directly — a canonical match, no substitution needed.",
    whatShouldComeBefore: "A stopover at Lake Naivasha or Lake Nakuru to break up the long overland road journey from Nairobi and adjust to dusty conditions.",
    whatShouldComeAfter: "Transition upward into a high-tier private conservancy camp (e.g., Mara North) or a coastal beach villa (e.g., Watamu or Diani) for complete physical recovery and relaxation.",
    emotionalTransitionRationale: "Captures initial high-energy arrival excitement and raw savannah immersion before stepping up into softer luxury or beach decompression.",
  },

  narrative: {
    whyChosen: "Mara Olodare is the reference example for intimate-scale Opening Immersion: an 8-tent basecamp 800 meters from the gate, trading resort infrastructure for genuine, uncommercialized Maasai hospitality and a spatial intimacy rare at this price point.",
    bestUsedFor: "High-stamina first-time safari travelers, budget-conscious adventurers, or small groups who prioritize rapid reserve gate access, intimate camp scale, and genuine local warmth over luxury finishes.",
    lessSuitableFor: "Honeymooners, burned-out executives, luxury seekers, guests with strict complex diets, or families traveling with toddlers sensitive to cold nights.",
    journeyPositionNote: "Opening Immersion — captures early trip energy before a higher-comfort property for physical recovery.",
    overview: "Mara Olodare Camp is an intimate, 8-tent entry-level safari camp nestled under mature indigenous tree thicket in the Oloolaimutia sector, 800 meters from the park gate, combining essential shelter with local Maasai hospitality and an active evening campfire atmosphere.",
    emotionalFeel: "Grounded, intimate, and social — natural closeness to nature by day, crisp cold air at night, and communal warmth around the campfire after full-day game drives.",
    sensorySignature: {
      visual: ["Shadows of mature indigenous trees casting canopy shade over green canvas tents", "Bright, unpolluted night skies above the campfire ring"],
      auditory: ["Chirping thicket birds at dawn", "Nocturnal savannah sounds", "Crackling logs during evening campfire conversations"],
      olfactory: ["Dry woodsmoke", "Crisp mountain-valley air", "Natural savanna foliage"],
    },
    positiveSignals: [
      "High guest satisfaction driven by attentive, warm local Maasai staff who share authentic cultural stories",
      "Intimate 8-tent scale avoids the crowded atmosphere of large regional lodges",
      "800-meter distance to Oloolaimutia Gate simplifies morning departures for game drives",
      "Atmospheric evening bonfire serves as a central social highlight for relaxation and storytelling",
    ],
    negativeSignals: [
      "Showers can experience pressure drops or temperature fluctuations during peak morning hours",
      "Basic canvas structure allows cold night air to penetrate, requiring warm sleepwear",
      "Simple culinary offerings with limited customization for strict dietary needs",
      "Marketing terms like 'semi-luxury' can lead guests expecting high-end glamping to feel underwhelmed",
    ],
    hiddenGems: [
      "An 8-tent layout under mature tree cover provides the spatial intimacy of an exclusive eco-camp at a budget-friendly price point, avoiding the busy 'safari factory' feel of nearby mega-lodges.",
    ],
    signatureMemory: "Warming up by the crackling bonfire under a starlit night sky, sharing wildlife stories with local Maasai staff after a full day on safari.",
    expectationManagement: "Mara Olodare is a functional, entry-level tented camp focused on gate proximity and authentic hospitality rather than resort-style amenities, heated tents, or gourmet dining.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "High-stamina first-time safari travelers, budget-conscious adventurers, or small groups who prioritize rapid reserve gate access, intimate camp scale, and genuine local warmth over luxury finishes.",
    ],
    doNotRecommendConditions: [
      "Honeymooners",
      "Burned-out executives",
      "Luxury seekers",
      "Guests with strict complex diets",
      "Families traveling with toddlers sensitive to cold nights",
    ],
    confidenceLevel: "Medium", // per source — requires precise expectation management regarding basic amenities
    competitiveAdvantage: "Excellent gate proximity combined with an intimate 8-tent scale and genuine Maasai hospitality at an accessible price point.",
    mainLimitation: "Basic thermal insulation against cold nights and limited culinary variety.",
    positioningSummary: "An intimate, unpretentious entry-level tented camp offering exceptional proximity to the Mara's wildlife and genuine Maasai hospitality, ideal for high-energy, budget-conscious adventurers who value raw wilderness over material luxury.",
  },

  pairings: [
    { pairedEntity: "Lake Naivasha or Lake Nakuru", pairingCategory: "ecosystem", rationale: "Breaks up overland driving times from Nairobi before entering the Mara." },
    { pairedEntity: "Diani or Watamu beach stay, or Mara North Conservancy", pairingCategory: "regional", rationale: "Offers a 'rough-and-refined' itinerary contrast after the entry-level experience." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional access mapping", "Property documentation"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Operational timeline for upgraded water-heating systems — explicitly flagged as subject to ongoing site verification in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};