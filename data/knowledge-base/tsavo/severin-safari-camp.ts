// data/knowledge-base/tsavo/severin-safari-camp.ts
export const severinSafariCamp = {
  id: "severin-safari-camp", // NEW lodge, no existing DB record
  name: "Severin Safari Camp",
  country: "Kenya",
  region: "Tsavo",
  subRegion: "Tsavo West",
  ecosystem: "Savannah / Semi-arid volcanic wilderness (unfenced oasis looking out toward Mount Kilimanjaro, surrounded by volcanic plains and natural springs)",
  propertyType: "Eco-Luxury Tented Camp / Wilderness Wellness Retreat",
  accommodationStyle: "Luxury canvas safari tents and suites mounted on solid foundations with stone-built en-suite bathrooms and private verandas.",
  locationDetail: "Unfenced camp interior, Tsavo West National Park.",
  nearestGate: "Mtito Andei Gate (~40 km / 1-hour drive)",
  nearestAirstrips: ["Finch Hattons Airstrip", "Kilaguni Airstrip (~30 minutes drive)"],
  accessibilityNotes: "Accessible year-round by 4x4 safari vehicles. Overland access routes from main gates feature rough, bumpy, and dusty terrain across volcanic tracks.",
  priceRangeMinUsd: 350,
  priceRangeMaxUsd: 600,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // CORRECTED: price midpoint ($475) falls in the Mid-Range band ($300–499), overriding self-reported Premium
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Amboseli National Park",
    "Diani Beach or Watamu",
    "Historic stone property or private conservancy experience",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Wild"], // all valid canonical values, no correction needed
    energyType: ["Wellness", "Nature Immersion"], // "Decompression retreat" substituted → Wellness per founder decision; "Immersive Nature" resolved directly as a word-order variant of canonical "Nature Immersion"
    experiencePace: "Balanced",
    comfortPhilosophy: ["Exclusive Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // founder-confirmed: Privacy Score 8/10, Isolated social dynamic, absolute tent-to-tent visual privacy, elite spa ecosystem
    journeyRole: "Safari Climax", // resolved directly — already a canonical accepted value (Maasai Mara precedent), no founder call needed despite the hedged "Mid-journey peak / Safari Climax" framing
    idealTravelersPrimary: ["Burned-out Executives", "Luxury Adventurers", "Honeymooners"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 9, authenticityScore: 9, premiumScore: 8,
    adventureScore: 6, privacyScore: 8, wildlifeExperienceScore: 8,
    culturalImmersionScore: 6, familySuitabilityScore: 3, comfortScore: 8,
    socialDynamic: "Isolated",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4.5–5 hours overland from Nairobi; 30-minute road transfer from local airstrips.",
    seasonalAccessibility: "Open year-round. Unfenced layout remains accessible in all seasons, though heavy rains can make interior volcanic tracks slick.",
    rainySeasonImpact: "Heavy rains can make interior volcanic tracks slick.",
    electricitySystem: "Eco-friendly solar electricity system backed by silent generators providing reliable 24-hour power and in-tent charging capabilities.",
    powerReliability: "High",
    waterReliability: "Eco-solar photovoltaic water heating providing hot water in stone-built en-suite showers. Excellent water pressure.",
    internetAvailability: "Limited Wi-Fi connectivity by design, to maintain an immersive wilderness and decompression environment.",
    mobileNetwork: "Cellular data network coverage accessible in central areas.",
    medicalAccess: "On-site basic first aid kit and trained management staff. Emergency medical air-evacuation via nearby park airstrips.",
    childFriendly: false, // "Low" per source — unfenced layout, strict nighttime warrior escorts, adult-oriented wellness focus
    mobilityFriendly: false, // "Low" per source — unfenced terrain, unpaved sandy/volcanic pathways, steps to tent verandas
    operationalLimitations: [
      "Complete absence of perimeter fencing requires strict adherence to safety protocols after dark",
      "Remote wilderness location means long driving times for external supply lines and transfers",
      "Unfenced terrain and unpaved pathways lack comprehensive handicap ramp infrastructure",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "The combination of profound isolation, absolute privacy between tents, and the full KENBALI wellness spa allows high-stress professionals to experience an uncompromised digital detox and deep physical restoration.",
      supportingSignals: ["KENBALI wellness spa and open-air massage pavilions", "Absolute privacy between tents", "Limited Wi-Fi by design"],
      mismatchConditions: ["Must be comfortable with wildlife moving freely through the unfenced camp at night"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Offers romantic fine dining under the stars, tent verandas with Kilimanjaro views, and absolute privacy without the crowding of commercial resorts.",
      supportingSignals: ["Fine dining under the stars", "Tent verandas with Mount Kilimanjaro views", "Isolated social dynamic"],
      mismatchConditions: ["Requires adherence to camp safety rules (e.g., walking with Maasai escorts after dark)"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "Delivers authentic, unfenced canvas living backed by high-end eco-luxury standards and meticulous environmental design.",
      supportingSignals: ["Unfenced canvas living", "Eco-solar power infrastructure", "Meticulous environmental design"],
      mismatchConditions: ["Dense Tsavo bush requires patience for game viewing rather than instant high-density predator sightings"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Families with toddlers\"; corrected to the canonical category, Families. The camp is completely unfenced, with wild animals traversing the grounds freely, posing severe safety hazards for young children requiring unstructured freedom.",
      supportingSignals: [], mismatchConditions: ["Constant parental anxiety regarding wildlife proximity and strict camp safety protocols"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Weak",
      reasoning: "Expects instant, high-volume Big Five checklists and manicured resort lawns, which conflicts with Tsavo's dense bush tracking and raw wilderness environment.",
      supportingSignals: [], mismatchConditions: ["Frustration with the patience required for tracking in thick acacia scrub"] },
    { fitType: "poorFit", category: "Solo Explorers", archetype: "The Solitary Ascetic", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Solo Explorers on a budget\"; corrected to the canonical category, Solo Explorers. Premium luxury pricing point and couples-oriented romantic/wellness positioning misalign with budget solo backpacker parameters.",
      supportingSignals: [], mismatchConditions: ["High single supplements and an environment optimized for couples and retreats"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "JOURNEY ROLE: source hedged \"Mid-journey peak / Safari Climax\"; Safari Climax is already a canonical accepted value (Maasai Mara precedent), resolves directly without a founder call. REGIONAL TALLY (Tsavo sub-phase): Grand Finale x1 (Salt Lick Safari Lodge), Reflection x1 (Kilaguni Serena Safari Lodge), Safari Climax x1 (this lodge).",
    whatShouldComeBefore: "A lower-intensity or structured opening destination (such as Amboseli or a Nairobi baseline) to help the traveler adjust to safari rhythms.",
    whatShouldComeAfter: "A soft, indulgent coastal decompression leg on the beach (e.g., Diani Beach or Watamu) to balance the energetic arc.",
    emotionalTransitionRationale: "Transitions the traveler from high-stimulus exploration into deep psychological decompression, utilizing the wilderness-wellness hybrid to shed urban stress.",
  },

  narrative: {
    whyChosen: "An ultra-premium, unfenced eco-luxury camp combining raw, doorstep wildlife encounters with a fully realized professional wellness spa — a rare hybrid of authentic bush exposure and elite comfort.",
    bestUsedFor: "Luxury honeymooners, high-end wellness seekers, nature photographers, and seasoned safari travelers wanting a raw, unfenced bush experience without sacrificing premium culinary standards and spa infrastructure.",
    lessSuitableFor: "Highly anxious travelers, families with hyperactive toddlers, guests with severe mobility constraints, or tourists demanding an instant, high-density Big Five checklist via short drives.",
    journeyPositionNote: "Safari Climax — the peak adrenaline point of an itinerary for travelers already adjusted to safari rhythms, positioned before a restful coastal or lake exit.",
    overview: "Severin Safari Camp operates as an ultra-premium, deeply immersive eco-luxury oasis dropped directly into the wild, volcanic heart of Tsavo West. The psychological feel is completely untamed yet profoundly safe; guests live inside a canvas-wrapped sanctuary where the border between human habitation and the wild safari has been entirely erased.",
    emotionalFeel: "Anchored in thrilling immersion, profound romance, and deep physical restoration. The visceral connection to nature via the unfenced layout — walking to tents under Maasai warrior escort at night — induces thrilling, authentic safari adrenaline that transitions into luxurious stillness by afternoon.",
    sensorySignature: {
      visual: ["Mount Kilimanjaro's snow-capped peak breaking through dry savannah mist", "Expansive volcanic plains", "The infinity pool reflecting the Tsavo sun"],
      auditory: ["Haunting calls of hyenas", "Deep rumbles of elephants drinking from the central waterhole at midnight", "The crackle of evening campfires"],
      olfactory: ["Crisp woodsmoke", "Dry earth", "Native bush grass"],
    },
    positiveSignals: [
      "Constant, uninterrupted presence of elephants, zebras, and giraffes walking past verandas and drinking from the illuminated waterhole",
      "The KENBALI Spa & Wellness Oasis — professional massages and open-air pavilions overlooking wild animal herds",
      "Exceptional standard of service from Maasai escorts, attentive bar staff, and fine dining under the stars",
      "Robust tent structural quality, stone bathrooms, excellent water pressure, and absolute visual privacy between units",
    ],
    negativeSignals: [
      "Long, bumpy, and intensely dusty road journeys from main highways or SGR park gates",
      "Loud nightly acoustic symphony (lions roaring, baboons screeching) that can break sleep for light sleepers on night one",
      "Thick acacia scrub and volcanic rock require significantly more patience and tracking skills from guides",
    ],
    hiddenGems: [
      "A seamless wellness-safari hybrid architecture — a fully realized professional spa ecosystem deep inside a harsh volcanic wilderness, allowing advisors to market a high-adventure raw safari to travelers who also require daily wellness restoration and fine dining.",
    ],
    signatureMemory: "Receiving a professional open-air massage at the KENBALI pavilion while looking out at a wild elephant herd drinking from the waterhole against the backdrop of Mount Kilimanjaro.",
    expectationManagement: "Travelers must be briefed that the camp is completely unfenced. Walking unescorted after dark is strictly prohibited, nocturnal wildlife noises will be loud, and the overland transfer requires navigating dusty, rough tracks.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client is a luxury honeymooner, high-end wellness seeker, nature photographer, or seasoned safari traveler",
      "Client demands a raw, authentic, unfenced bush experience without sacrificing premium culinary standards, professional spa infrastructure, and absolute room privacy",
    ],
    doNotRecommendConditions: [
      "Client is a highly anxious traveler, a family with hyperactive toddlers, or someone with severe mobility constraints",
      "Client demands an instant, high-density Big Five checklist via short drives",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Unmatched integration of raw, unfenced wilderness exposure with an elite, fully functional professional wellness spa and absolute tent privacy in Tsavo West.",
    mainLimitation: "Rugged overland access logistics and potential sensory overload from nocturnal wildlife sounds for unprepared guests.",
    positioningSummary: "An ultra-premium, unfenced eco-luxury canvas sanctuary tucked deep inside Tsavo West's volcanic wilderness, combining raw elephant encounters at your doorstep with a sophisticated wellness spa and fine dining.",
  },

  pairings: [
    { pairedEntity: "Amboseli National Park", pairingCategory: "ecosystem", rationale: "Start with Amboseli for wide-angle, flat-savannah views of massive elephant herds under Kilimanjaro, then move to Severin for a dramatic terrain contrast of rugged lava flows, natural springs, and a dense, wilder bush layout." },
    { pairedEntity: "Diani Beach or Watamu", pairingCategory: "regional", rationale: "Follows the intense, sensory-rich wilderness experience of Severin with an indulgent beach decompression phase." },
    { pairedEntity: "Historic stone property or private conservancy experience", pairingCategory: "experience", rationale: "Rounds out the architectural and tracking variety across the circuit." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator specifications", "Regional ecological surveys", "Guest feedback registries", "Field reports"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Exact year of initial construction (estimated 2001) — explicitly flagged REQUIRES_VERIFICATION in source",
      "Specific solar grid wattage capacity — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};