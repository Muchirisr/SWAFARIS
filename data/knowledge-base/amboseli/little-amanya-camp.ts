// data/knowledge-base/amboseli/little-amanya-camp.ts
export const littleAmanyaCamp = {
  id: "little-amanya-camp", // NEW lodge, no existing DB record
  name: "Little Amanya Camp",
  country: "Kenya",
  region: "Amboseli Ecosystem",
  subRegion: "Iremito Gate Sector, Eastern Boundary Buffer Zone",
  ecosystem: "Arid acacia scrubland & savannah basin at the foot of Mount Kilimanjaro",
  propertyType: "Independent Eco-Glamping Bush Camp / Budget-Luxury Hybrid",
  accommodationStyle: "Canvas glamping tents on raised stone/timber bases, featuring private verandas, en-suite bathrooms, and balcony bathtubs oriented toward Mount Kilimanjaro.",
  locationDetail: "Arid acacia savannah basin facing south toward Mount Kilimanjaro, near Iremito Gate.",
  nearestGate: "Iremito Gate (approx. 1.5 km / 3 to 5 minutes drive)",
  nearestAirstrips: ["Amboseli Airstrip"],
  accessibilityNotes: "Accessible year-round via paved road up to the Kimana/Iremito turnoff, concluding on dirt tracks. Flat, dry terrain; basic unpaved footpaths connect tents to main dining areas.",
  priceRangeMinUsd: 100,
  priceRangeMaxUsd: 220,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — folds into Value per founder governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara (ecosystem contrast pairing, e.g. lush rolling hills) or crater lakes of Naivasha",
    "Entumoto Safari Camp, Maasai Mara (regional step-up pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Exploratory", "Rustic"], // "Cinematic" substituted per founder decision
    energyType: ["Wellness", "Nature Immersion"], // confirmed
    experiencePace: "Fast", // confirmed normalization from "Fast-Paced (Safari-driven)"
    comfortPhilosophy: ["Adventure Luxury", "Authentic Luxury"],
    comfortPhilosophyDetailed: "Adventure Basecamp, Rustic Immersion",
    journeyRole: "Opening Immersion", // resolved from doc's dual "Opening Immersion or Adventure Transition"
    idealTravelersPrimary: ["First-Time Safari Travelers", "Nature Photographers", "Slow Travelers", "Solo Explorers"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 6, authenticityScore: 8, premiumScore: 6,
    adventureScore: 7, privacyScore: 5, wildlifeExperienceScore: 7,
    culturalImmersionScore: 6, familySuitabilityScore: 5, comfortScore: 5,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4.5 hours overland from Nairobi (250 km) via Emali–Kimana route; 45 min flight Wilson→Amboseli Airstrip + 20 km road transfer.",
    seasonalAccessibility: "Open year-round; all-weather roads ensure access, though heavy rains (April–May) can make local dirt access tracks muddy.",
    rainySeasonImpact: "Heavy rains (April–May) can make local dirt access tracks muddy.",
    electricitySystem: "Solar power system supplemented by a generator. Power managed on strict timers, cutting out late at night.",
    powerReliability: "Timed — power cuts out late at night, not continuous.",
    waterReliability: "Solar-assisted water heating; hot water availability and pressure can vary depending on weather and occupancy.",
    internetAvailability: "Complimentary Wi-Fi strictly confined to the main public lounge/dining area, generally unavailable inside guest tents.",
    mobileNetwork: "Moderate Safaricom cellular signal.",
    medicalAccess: "Basic on-site first aid; community health centers in Kimana town; emergency evacuation via Amboseli Airstrip.",
    childFriendly: false, // Moderate per source — maintenance gaps require vigilance with small children
    mobilityFriendly: false, // Limited per source
    operationalLimitations: [
      "Timed solar/generator power cuts",
      "Inconsistent hot water pressure",
      "Wi-Fi restricted to public zones",
      "Unpolished tent maintenance (zippers/screens)",
      "Fixed-set menu with limited choices",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Nature Photographers", archetype: "Biophilic Restorer", matchStrength: "Strong",
      reasoning: "South-facing tent designs frame direct, unobstructed views of Mount Kilimanjaro and passing wildlife for photographic priority.",
      supportingSignals: ["South-facing tent designs", "Unobstructed Kilimanjaro views"],
      mismatchConditions: ["Must accept timed night power cuts and non-existent tent Wi-Fi"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Offers an affordable entry into canvas glamping with private balcony tubs and direct access to Amboseli's famous elephant corridors.",
      supportingSignals: ["Affordable canvas glamping entry", "Private balcony tubs"],
      mismatchConditions: ["Expects rustic bush conditions rather than polished resort amenities"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Moderate",
      reasoning: "Positions guests 3 minutes from Iremito Gate, allowing them to hit the park plains at dawn without pre-dawn travel overhead.",
      supportingSignals: ["3-minute Iremito Gate proximity", "Dawn park access without travel overhead"],
      mismatchConditions: ["Lacks high-end luxury finishes or specialized off-road concessions"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Fluctuating hot water, basic set menus, and minor maintenance defects fail to meet expectations for a seamless, white-glove romantic retreat.",
      supportingSignals: [], mismatchConditions: ["Dissatisfaction over cold showers, timed power shutoffs, or basic dining"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Basic infrastructure, lack of continuous power, and unpolished service do not support a high-end, effortless decompression stay.",
      supportingSignals: [], mismatchConditions: ["Frustration with utility drop-offs and lack of in-tent connectivity"] },
    { fitType: "poorFit", category: "Families", archetype: "Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Gaps in tent zipper maintenance, pest vulnerability, and simple set menus make managing multi-generational family comfort difficult.",
      supportingSignals: [], mismatchConditions: ["Family discomfort with nighttime utility shutoffs and rustic dining options"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights (Maximum)",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion or Adventure Transition'; canonical journeyRole resolved to Opening Immersion per founder decision, consistent with the property's own 'tactical 1-to-2-night stopover' framing.",
    whatShouldComeBefore: "Overland transit from Nairobi. Functions as a quick, cost-effective launching pad to check off Amboseli game viewing.",
    whatShouldComeAfter: "Transition to a highly polished eco-camp or private conservancy lodge (e.g., in the Maasai Mara or Laikipia) to step up in comfort and service.",
    emotionalTransitionRationale: "Delivers immediate visual satisfaction via iconic mountain vistas before moving to more refined safari properties.",
  },

  narrative: {
    whyChosen: "Little Amanya is the reference example for a tactical, budget-conscious Opening Immersion: private balcony bathtubs facing Mount Kilimanjaro at a fraction of private-conservancy cost, 3 minutes from Iremito Gate, for travelers who value location and view over polish.",
    bestUsedFor: "Budget-conscious travelers, solo photographers, or independent couples seeking direct Kilimanjaro views and quick Iremito Gate access without expecting resort-level perfection.",
    lessSuitableFor: "Clients expecting 24/7 unmetered power, guaranteed hot water pressure, gourmet fine dining, in-tent Wi-Fi, or white-glove luxury service.",
    journeyPositionNote: "Opening Immersion — a tactical 1-to-2-night stopover fulfilling initial Amboseli photography and elephant goals before stepping up to higher-luxury properties.",
    overview: "Little Amanya Camp is an unpretentious, budget-luxury glamping property 3 minutes from Amboseli's Iremito Gate, set in an arid acacia savannah basin facing south toward Mount Kilimanjaro, trading corporate polish for an independent, farm-adjacent bush vibe.",
    emotionalFeel: "The atmosphere balances visual awe with rustic realities — clear mornings framing Kilimanjaro and grazing wildlife deliver pure wilderness satisfaction, while evenings center around a simple camp bonfire under timed solar power and variable water pressure.",
    sensorySignature: {
      visual: ["Snow-capped peak of Mount Kilimanjaro rising above south-facing tent verandas and outdoor balcony bathtubs"],
      auditory: ["Nocturnal savannah sounds", "Morning bird calls", "Crackling woodfire at night"],
      olfactory: ["Arid acacia dust", "Evening woodsmoke", "Fresh breeze off the open plains"],
    },
    positiveSignals: [
      "Located 3 to 5 minutes from the park gate for immediate morning safari access",
      "South-facing tent layouts, decks, and balcony tubs maximize Kilimanjaro mountain views",
      "Paid add-on outdoor lantern dinners under the stars deliver memorable atmosphere",
      "Friendly, genuine local staff care despite limited formal hotel training",
    ],
    negativeSignals: [
      "Water systems can yield cold showers or weak pressure depending on weather and usage",
      "Wear on canvas tents, including zipper tracks or screen gaps",
      "Power turns off late at night, Wi-Fi restricted to the main public dining lounge",
      "Basic set menus that may not satisfy food-focused luxury travelers",
    ],
    hiddenGems: [
      "Access to private outdoor balcony bathtubs facing Mount Kilimanjaro at a fraction of high-end private conservancy costs — standout photo opportunities for budget-conscious travelers accepting of rustic quirks.",
    ],
    signatureMemory: "Soaking in an outdoor balcony bathtub at sunrise as the cloud cover clears to reveal Mount Kilimanjaro, right before departing on a 3-minute drive into Amboseli National Park.",
    expectationManagement: "This is an independent, budget glamping camp with rustic operational quirks. Power is timed, hot water depends on solar conditions, Wi-Fi is confined to common areas, and dining follows a simple fixed format.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Budget-conscious traveler, solo photographer, or independent couple seeking direct Kilimanjaro views and quick Iremito Gate access without expecting resort-level perfection.",
    ],
    doNotRecommendConditions: [
      "Client expects 24/7 unmetered power or guaranteed hot water pressure",
      "Gourmet fine dining or in-tent Wi-Fi",
      "White-glove luxury service",
    ],
    confidenceLevel: "Medium-Low", // per source — recurring utility and maintenance limitations require expectation management
    competitiveAdvantage: "Excellent price-to-view ratio for Kilimanjaro-facing canvas tents with balcony bathtubs, located 3 minutes from Iremito Gate.",
    mainLimitation: "Rustic infrastructure maintenance defects and utility inconsistencies (water and power).",
    positioningSummary: "An unpretentious, budget-friendly safari glamping camp positioned exceptionally close to Amboseli's Iremito Gate, offering unmatched morning views of Mount Kilimanjaro for rustic adventurers who value location over luxury refinement.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara or Naivasha crater lakes", pairingCategory: "ecosystem", rationale: "Contrasts Amboseli's dry acacia basin with lush rolling hills or crater lakes." },
    { pairedEntity: "Entumoto Safari Camp, Maasai Mara", pairingCategory: "regional", rationale: "Steps up in safari density and luxury comfort." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Little Amanya Camp official documentation", "Kenya Wildlife Service (KWS) gate access logs", "Regional tour operator feedback", "Independent field reports"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar battery capacity during extended wet-season overcast periods — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};