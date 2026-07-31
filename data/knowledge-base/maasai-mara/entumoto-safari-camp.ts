// data/knowledge-base/entumoto-safari-camp.ts
export const entumotoSafariCamp = {
  id: "entumoto-safari-camp", // NEW lodge, no existing DB record
  name: "Entumoto Safari Camp",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Mara Siana Conservancy / Sekenani Sector",
  ecosystem: "Savannah — Private Valley nestled within the Megwarra Escarpment Hills / Mara Siana Conservancy Interface",
  propertyType: "Avant-Garde Luxury Tented Suite Resort / Authentic Eco-Luxury Safari Camp",
  accommodationStyle: "Canvas safari suites and family tents on concrete/timber platforms with real wood-burning fireplaces, divided into Entumoto Main (elevated ridge views) and Entumoto Toto (secluded valley floor).",
  locationDetail: "Private valley within the Megwarra Escarpment, Mara Siana Conservancy.",
  nearestGate: "Sekenani Gate (approx. 30-minute game drive through Siana Conservancy) / Oloolaimutia Gate",
  nearestAirstrips: ["Ol Seki Airstrip", "Keekorok Airstrip"],
  accessibilityNotes: "Accessible year-round by 4x4 via unpaved country tracks. Sloped, uneven escarpment terrain requires careful footing and active uphill walking.",
  priceRangeMinUsd: 350,
  priceRangeMaxUsd: 600,
  rawMarketTier: "Premium", // as stated in source doc, overridden below per price-guide cutoff rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-range", // price-guide midpoint (~$475) governs, not doc's stated "Premium"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Sanctuary Farm / The Watch Tower, Lake Naivasha (ecosystem pairing)",
    "Almanara, Diani Beach or Watamu (coastal decompression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Adventurous", "Exclusive", "Wild", "Elegant"], // "Intimate" normalized to "Exclusive" per founder decision
    energyType: ["Nature Immersion", "Wildlife Focus"], // confirmed normalization
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Adventure Luxury", "Authentic Luxury"],
    comfortPhilosophyDetailed: "Adventure Luxury, Authentic Luxury", // confirmed as-is
    journeyRole: "Safari Climax", // confirmed, consistent with Entim Mara / Mara Intrepids precedent
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Luxury Adventurers", "Nature Photographers"],
    idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 7, authenticityScore: 9, premiumScore: 8,
    adventureScore: 8, privacyScore: 7, wildlifeExperienceScore: 9,
    culturalImmersionScore: 8, familySuitabilityScore: 8, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–5 hours overland from Nairobi (~240 km); 45 min flight Wilson→Keekorok/Ol Seki + 40–45 min road transfer/game drive.",
    seasonalAccessibility: "Open year-round; valley drainage prevents deep mud traps, but steep escarpment access trails require experienced 4x4 driving during peak rains (April–May).",
    rainySeasonImpact: "Steep dirt access trails along the escarpment require experienced 4x4 driving during peak rains (April–May).",
    electricitySystem: "24/7 green energy system powered by a central solar array backed by quiet generator backup.",
    powerReliability: "Continuous, in-tent charging stations across all suites.",
    waterReliability: "High-pressure continuous hot water via solar photovoltaic heating and wood-burning boilers.",
    internetAvailability: "Complimentary Wi-Fi in central lounge/mess areas and suites.",
    mobileNetwork: "Stable Safaricom cellular coverage across elevated camp points.",
    medicalAccess: "On-site first aid and trained staff; Flying Doctor evacuation via Keekorok Airstrip.",
    childFriendly: true, // High for older children/teens, Moderate for young children per source
    mobilityFriendly: false, // Low per source — steep escarpment terrain
    operationalLimitations: [
      "Significant walking distances and inclines between hillside suites and main social hubs",
      "Physical division between high-view Main Camp and low-vegetation Toto Camp",
      "Proximity to public reserve gates creates high vehicle crowding during peak migration months (July–August)",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Outstanding two-bedroom family suites with central private living rooms and real wood-burning fireplaces allow grand-parents, parents, and children to share private living spaces comfortably.",
      supportingSignals: ["Two-bedroom family suites", "Wood-burning fireplaces"],
      mismatchConditions: ["Elderly members or very young children may struggle with the steep hillside incline"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Sensory Overwhelmed", matchStrength: "Strong",
      reasoning: "Offers a deeply grounded, hospitable atmosphere without corporate pretense, providing a safe and intimate base to absorb raw African wilderness up close.",
      supportingSignals: ["Grounded, hospitable atmosphere", "Intimate base camp feel"],
      mismatchConditions: ["Must accept un-fenced camp realities where wildlife wanders near guest paths"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Unlocks exclusive conservancy privileges — night spotlighting, walking safaris, off-roading — while maintaining fast access to the main reserve for Big Five checking.",
      supportingSignals: ["Night spotlighting drives", "Off-roading privileges"],
      mismatchConditions: ["Lacks modern glass-and-steel architectural design and private deck plunge pools"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "Close proximity (5 minutes) to Siana Swamp provides exclusive, uncrowded wildlife sightings even during dry off-migration seasons.",
      supportingSignals: ["5-minute proximity to Siana Swamp", "Uncrowded wildlife sightings"],
      mismatchConditions: ["Escarpment valley lighting shifts rapidly during early morning and late afternoon hours"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Lacks ultra-private plunge pools, ultra-isolated suites, or sleek minimalist aesthetics; balanced social dynamic and multi-generational family focus can disrupt romantic isolation.",
      supportingSignals: [], mismatchConditions: ["Booking Toto Camp tents without hillside views may disappoint couples seeking romantic panoramas"] },
    { fitType: "poorFit", category: "Solo Explorers", archetype: "Solitary Ascetic", matchStrength: "Strong",
      reasoning: "Strong communal dining options, social campfire storytelling, and family-oriented group dynamics may overwhelm individuals seeking quiet, solitary introspection.",
      supportingSignals: [], mismatchConditions: ["Premium pricing structure and group safari vehicle dynamics do not cater to solitary expeditions"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Lack of air-conditioned glass suites, presence of walking inclines, and social campfires conflict with expectations of effortless resort-style seclusion.",
      supportingSignals: [], mismatchConditions: ["Escarpment terrain walking friction and proximity to busy public reserve gates during peak months impede stress reduction"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source frames this as 'Mid-Journey Peak (or High-Value Safari Climax)'; canonical journeyRole resolved to Safari Climax per founder decision, consistent with Entim Mara Camp and Mara Intrepids precedent.",
    whatShouldComeBefore: "A low-intensity decompression segment such as Lake Naivasha (e.g., The Watch Tower at Sanctuary Farm) or Amboseli to reset the traveler's nervous system.",
    whatShouldComeAfter: "A direct bush-flight transfer to a premium coastal beach retreat (e.g., Almanara in Diani or Watamu) for oceanfront decompression.",
    emotionalTransitionRationale: "Elevates physical and emotional energy from quiet pedestrian freedom to intense, high-density predator tracking and raw savannah immersion.",
  },

  narrative: {
    whyChosen: "Entumoto is the reference example for community-integrated eco-luxury at a genuinely mid-tier price: a private escarpment valley run in true partnership with Maasai landowners, delivering conservancy-exclusive privileges (night drives, walking safaris, off-roading) alongside some of the highest Authenticity (9/10) and Cultural Immersion (8/10) scores in the database.",
    bestUsedFor: "Multi-generational families, safari purists, and luxury travelers who want private conservancy freedom combined with easy access to main reserve migration crossings.",
    lessSuitableFor: "Travelers seeking modern glass-and-steel architecture, private deck plunge pools, or guests with severe hip/knee mobility limitations or unsupervised toddlers.",
    journeyPositionNote: "Safari Climax, positioned mid-journey to harness primed traveler energy for intense wildlife tracking before transitioning to coastal recovery.",
    overview: "Entumoto Safari Camp is an eco-luxury tented camp hidden within a private valley of the Megwarra Escarpment in Mara Siana Conservancy, co-owned by a Swedish family and local Maasai landowners, with Entumoto Main commanding ridge views and Entumoto Toto nestled in the valley floor.",
    emotionalFeel: "Grounded, hospitable, and primal — like staying at the private estate of a close friend. High-energy dawn tracking gives way to midday poolside relaxation and social campfire storytelling under a valley canopy filled with lion roars and elephant calls.",
    sensorySignature: {
      visual: ["Sweeping panoramas over the Siana plains from high ridge decks", "Zebras drinking at the edge of the turquoise swimming pool"],
      auditory: ["Whistling wind through escarpment acacias", "Crackling logs in suite fireplaces", "Nocturnal lion roars echoing up the valley"],
      olfactory: ["Dry woodsmoke", "Crushed wild sage", "Rich canvas", "Crisp mountain-valley air"],
    },
    positiveSignals: [
      "Recent comprehensive structural refresh with crisp canvas tenting and polished woodwork",
      "Unscripted poolside wildlife encounters — zebra herds and elephants drinking directly from the pool rim",
      "Gourmet bush gastronomy — multi-course candlelit dining and bush breakfasts under acacia trees",
      "Flawless two-bedroom family suite layouts with private lounge and wood-burning fireplace",
    ],
    negativeSignals: [
      "Main vs. Toto Camp variance — Main provides expansive views, Toto sits lower with denser vegetation",
      "Steep hillside paths and drop-offs create walking friction for guests with mobility challenges or toddlers",
      "Public reserve gate congestion during peak migration (July–August)",
    ],
    hiddenGems: [
      "The nearby Siana Swamp (5 minutes from camp) is a year-round freshwater magnet for elephants, birdlife, and stalking predators, offering high-density wildlife viewing with total vehicle exclusivity even when open reserve plains dry out.",
    ],
    signatureMemory: "Sipping a warm drink by your suite's crackling fireplace at dusk, listening to lion roars echo up the valley after watching zebras drink from the pool at midday.",
    expectationManagement: "Entumoto is an eco-luxury tented facility built on a sloped escarpment, using unfenced paths with steep inclines. It lacks modern glass-and-steel resort structures or private plunge pools.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "Recommending to multi-generational families, safari purists, and high-value luxury travelers who want private conservancy freedom combined with easy access to main reserve migration crossings.",
    ],
    doNotRecommendConditions: [
      "Travelers seeking modern glass-and-steel architecture or private deck plunge pools",
      "Guests with severe hip/knee mobility limitations",
      "Unsupervised toddlers",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Gold-standard community-integrated eco-luxury providing high-tier family layouts and conservancy privileges without hyper-inflated corporate pricing.",
    mainLimitation: "Steep escarpment topography causing walking friction, and visual variance between Main Camp ridge views and Toto Camp valley units.",
    positioningSummary: "An authentic eco-luxury tented camp hidden in a private Mara escarpment valley, offering exceptional family suites and exclusive conservancy freedom minutes from main reserve action.",
  },

  pairings: [
    { pairedEntity: "Sanctuary Farm / The Watch Tower, Lake Naivasha", pairingCategory: "ecosystem", rationale: "Moving from quiet lake pedestrian safaris to high-density escarpment predator tracking balances activity levels." },
    { pairedEntity: "Diani Beach or Watamu (Almanara)", pairingCategory: "regional", rationale: "Follows high-energy savannah tracking with a direct flight transfer to coastal marine luxury." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar battery storage expansion timeline for peak rainy months — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};