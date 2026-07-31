// data/knowledge-base/fairmont-mara-safari-club.ts
export const fairmontMaraSafariClub = {
  id: "fairmont-mara-safari-club", // NEW lodge, no existing DB record
  name: "Fairmont Mara Safari Club",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Aitong Sector / Northern Ecosystem",
  ecosystem: "Savannah — Oxbow bend on the Mara River, bordering the Ol Chorro Lossoit Conservancy",
  propertyType: "Contemporary / Heritage Luxury Riverfront Resort Tented Camp",
  accommodationStyle: "Luxury canvas safari tents on elevated timber decks with polished mahogany furniture, en-suite bathrooms, and private sunbeds overlooking the river.",
  locationDetail: "Oxbow bend on the Mara River, water surrounding the property on three sides, inside the private Ol Chorro Lossoit Conservancy.",
  nearestGate: "Musiara Gate (approx. 45–60 minutes drive south to main reserve)",
  nearestAirstrips: ["Ngerende Airstrip", "Mara Shumba Airstrip"],
  accessibilityNotes: "Flat terrain with wide wooden boardwalks across the riverfront layout provides easy footing year-round.",
  priceRangeMinUsd: 650,
  priceRangeMaxUsd: 1100,
  rawMarketTier: "Premium", // as stated in source doc, overridden below per price-guide rule
  swafarisExperienceTier: "Tier 4",
  budgetTier: "Luxury", // price-guide midpoint (~$875) overrides doc's stated "Premium"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Minimalist eco-camp, deep southern Mara or Serengeti (ecosystem contrast pairing)",
    "The Watch Tower at Sanctuary Farm, Lake Naivasha (regional pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Cinematic", "Elegant", "Social"], // all approved, no change needed
    energyType: ["Luxury Escape", "Wildlife Focus", "Nature Immersion"], // confirmed
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Comfort Luxury", "Authentic Luxury"],
    comfortPhilosophyDetailed: "Modern Luxury, Classic Safari Elegance",
    journeyRole: "Opening Immersion", // canonical match, no substitution needed
    idealTravelersPrimary: ["Burned-out Executives", "Families", "First-Time Safari Travelers", "Slow Travelers"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 8, authenticityScore: 7, premiumScore: 9,
    adventureScore: 7, privacyScore: 6, wildlifeExperienceScore: 8,
    culturalImmersionScore: 7, familySuitabilityScore: 8, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5–6 hours overland from Nairobi (~270 km); 45 min flight Wilson→Ngerende + 15 min vehicle transfer.",
    seasonalAccessibility: "Open year-round; oxbow river setting well-drained, though severe wet season rains (April–May) can swell river levels and muddy low-lying conservancy tracks.",
    rainySeasonImpact: "Severe wet season rains (April–May) can swell river levels and render certain low-lying conservancy tracks muddy.",
    electricitySystem: "24/7 continuous grid and hybrid solar-generator power system.",
    powerReliability: "Constant power access across all 38 tents, including in-tent charging ports.",
    waterReliability: "Pressurized continuous hot water via central boiler systems to en-suite bathrooms and outdoor rain showers.",
    internetAvailability: "Complimentary high-speed Wi-Fi across central public areas and inside all private tented suites.",
    mobileNetwork: "Reliable Safaricom cellular coverage throughout the grounds.",
    medicalAccess: "Comprehensive on-site first aid, trained nursing/medical staff, dedicated emergency air-evacuation via Ngerende Airstrip.",
    childFriendly: true, // High per source
    mobilityFriendly: true, // High per source — flat terrain, wide boardwalks
    operationalLimitations: [
      "Larger capacity (38 tents) can attract incentive groups or corporate retreats during peak seasons, diluting intimate wilderness atmosphere",
      "Northern location requires a long 2+ hour drive south to reach central Mara River migration crossing points",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Sensory Overwhelmed", matchStrength: "Strong",
      reasoning: "Eases first-time travelers into African wilderness via familiar corporate luxury standards, high-end food safety, flat boardwalks, and structured safety protocols while delivering immediate hippo pod drama.",
      supportingSignals: ["Corporate luxury standards", "Flat boardwalks", "Structured safety protocols"],
      mismatchConditions: ["Reaching the southern reserve migration crossing points requires long, bumpy drives"] },
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Highly secure, flat, boardwalk-connected layout paired with a large swimming pool, diverse culinary options, and continuous power provides a stress-free environment for parents and children.",
      supportingSignals: ["Flat boardwalk layout", "Large swimming pool"],
      mismatchConditions: ["Loud nocturnal hippo vocalizations directly below tents can occasionally startle very young sleepers"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High-speed Wi-Fi, full spa facilities, plush bedding, and reliable room service allow seamless digital relaxation and mental recovery amidst primeval river sounds.",
      supportingSignals: ["High-speed Wi-Fi", "Full spa facilities"],
      mismatchConditions: ["High-season group arrivals or corporate retreats can disrupt quiet lounge environments"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "Biophilic Restorer", matchStrength: "Strong",
      reasoning: "Stationed on a dramatic river oxbow bend, allowing guests to unpack for 4+ nights and observe internal hippo pod social dynamics for hours directly from their deck sunbeds.",
      supportingSignals: ["Oxbow river bend positioning", "Deck sunbeds"],
      mismatchConditions: ["Resort-style group dynamics in central dining areas contrast with minimalist, solitary bush living"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "Structured resort atmosphere, polished mahogany furnishings, continuous power, and corporate group arrivals conflict with desires for stripped-back, rugged field living.",
      supportingSignals: [], mismatchConditions: ["Mismatch between expectations of raw, unpolished bush isolation and Fairmont's high-end resort infrastructure"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "38-tent layout, presence of corporate incentive groups, and bustling family pool zones eliminate the romantic isolation and intimate micro-camp atmosphere desired by honeymooners.",
      supportingSignals: [], mismatchConditions: ["High guest density during peak months disrupts private, romantic dining and quiet lounge atmospheres"] },
    { fitType: "poorFit", category: "Solo Explorers", archetype: "Solitary Ascetic", matchStrength: "Strong",
      reasoning: "Commercial resort layout and large communal dining settings do not align with solitary, low-profile, budget-conscious exploration.",
      supportingSignals: [], mismatchConditions: ["Paying high single supplement rates for resort amenities and group vehicle dynamics that do not suit solitary wilderness goals"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source frames this as 'Opening Immersion (or Adventure Transition / Decompression Station)'; canonical journeyRole kept as Opening Immersion, a direct canonical match — no substitution needed.",
    whatShouldComeBefore: "International flight arrival into Nairobi (NBO) followed by a short domestic flight from Wilson Airport to Ngerende Airstrip. Eases jetlag seamlessly.",
    whatShouldComeAfter: "A smaller, highly exclusive mobile canvas camp in the southern Mara/Serengeti for raw wilderness tracking, or a coastal beach villa in Diani or Watamu.",
    emotionalTransitionRationale: "Smoothly transitions travelers from urban corporate stress into natural savannah rhythms via safe, highly polished, sensory-rich riverfront luxury.",
  },

  narrative: {
    whyChosen: "Fairmont Mara Safari Club is the reference example for a corporate-grade Opening Immersion: unmatched, continuous hippo pod exposure right beneath guest decks, delivered with Accor/Fairmont's operational consistency and the highest Premium Experience Score in the database so far (9/10).",
    bestUsedFor: "First-time safari travelers, multi-generational families, corporate executives, or travelers requiring high brand predictability, food safety, flat boardwalks, Wi-Fi, spa facilities, and dramatic riverfront wildlife viewing.",
    lessSuitableFor: "Safari purists seeking a small, unfenced mobile bush camp, honeymooners wanting absolute isolation, or travelers whose sole objective is immediate daily access to southern migration river crossings.",
    journeyPositionNote: "Opening Immersion — eases jetlagged international arrivals into Africa before transitioning to rustic or high-intensity wilderness legs.",
    overview: "Fairmont Mara Safari Club is a high-end, 38-tent luxury riverfront resort camp on an oxbow bend of the Mara River inside the private Ol Chorro Lossoit Conservancy, with water surrounding the property on three sides for front-row hippo pod and crocodile viewing.",
    emotionalFeel: "Insulated, cinematic, and reassuring — guests step off dusty conservancy tracks onto pristine wooden decks, with constant hippo vocalizations creating a primeval acoustic backdrop against high-thread-count linens and white-glove service.",
    sensorySignature: {
      visual: ["Swirling muddy waters of the oxbow river bend packed with hippo pods", "Polished mahogany furniture against canvas walls"],
      auditory: ["Deep acoustic chortling, grunting, and splashing of hippos beneath tent verandas", "Birdsong in the riverine forest canopy"],
      olfactory: ["Heavy, humid riverine forest vegetation", "Dry woodsmoke", "Luxury spa oils"],
    },
    positiveSignals: [
      "All 38 tented suites sit directly on the river bank, offering private viewing of active hippo pod social politics",
      "Evening turndown rituals with hot water bottles wrapped in authentic Maasai fabrics",
      "Deluxe Riverfront Tents feature walled outdoor showers overlooking the river",
      "Kirafu restaurant delivers high-grade food safety, fresh herbs from on-site gardens, and riverfront bush dinners",
    ],
    negativeSignals: [
      "38-tent capacity attracts corporate retreats and incentive tour groups in high season, diluting intimate camp feel",
      "Northern Aitong/Ol Chorro location requires a long 2+ hour drive south to reach central Mara River migration points",
      "Heavy hippo grunting and fighting directly below tents can disrupt light sleepers",
    ],
    hiddenGems: [
      "Direct walking access to the adjacent Rhino Sanctuary and community apiary projects — guided foot treks alongside endangered white rhinos protected by armed rangers, bypassing traditional vehicle safari formats entirely.",
    ],
    signatureMemory: "Lounging on your private wooden deck with a cool drink, watching hippo pods splash and interact in the Mara River oxbow directly below your sunbed.",
    expectationManagement: "This is a 38-unit corporate-managed safari resort, not a tiny 6-tent bush camp. It features a bustling pool, central dining room, and heavy hippo acoustics.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "First-time safari traveler, multi-generational family, corporate executive, or traveler requiring high brand predictability, food safety, flat boardwalks, Wi-Fi, spa facilities, and dramatic riverfront wildlife viewing.",
    ],
    doNotRecommendConditions: [
      "Safari purist seeking a small, unfenced mobile bush camp",
      "Honeymooner wanting absolute isolation",
      "Traveler whose sole objective is immediate daily access to southern migration river crossings",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Unmatched aquatic hippo pod exposure combined with corporate-backed Fairmont service delivery, food safety, and full resort amenities.",
    mainLimitation: "38-tent scale introducing occasional group dynamics, and long driving distances to the far southern reserve sectors.",
    positioningSummary: "A refined, heritage-style riverfront resort camp offering corporate-grade luxury comforts and dramatic front-row views of active hippo pods, making it the ultimate reassuring sanctuary for first-time safari travelers and families.",
  },

  pairings: [
    { pairedEntity: "Minimalist eco-camp, deep southern Mara or Serengeti", pairingCategory: "ecosystem", rationale: "Moving from structured resort luxury to unfenced open plains creates a powerful narrative shift." },
    { pairedEntity: "The Watch Tower at Sanctuary Farm, Lake Naivasha", pairingCategory: "regional", rationale: "Waking to silent fever tree plains followed by roaring hippo tracks of the Mara River offers exceptional acoustic contrast." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar battery grid upgrade timeline for 2027 operations — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};