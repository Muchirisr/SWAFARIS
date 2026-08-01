// data/knowledge-base/amboseli/nyati-safari-camp.ts
export const nyatiSafariCamp = {
  id: "nyati-safari-camp", // NEW lodge, no existing DB record
  name: "Nyati Safari Camp",
  country: "Kenya",
  region: "Amboseli National Park",
  subRegion: "Kimana Gate Sector, Eastern Park Boundary",
  ecosystem: "Savannah — Semi-arid plains and seasonal marshlands under the microclimate of Mt. Kilimanjaro",
  propertyType: "Eco-Luxury / Rustic Safari Bushcamp (Tented Camp & Cottages)",
  accommodationStyle: "Traditional canvas safari tents on raised platforms and permanent stone-and-thatch cottages.",
  locationDetail: "Directly at Kimana Gate entrance of Amboseli National Park.",
  nearestGate: "Kimana Gate (directly at entrance / <1 km / 1–3 minutes drive)",
  nearestAirstrips: ["Amboseli Airstrip", "Kimana Airstrip"],
  accessibilityNotes: "Accessible year-round by 2WD or 4x4 via paved Nairobi–Emali–Loitokitok highway, turning onto a short unpaved access track to Kimana Gate. Flat gravel pathways and brushwood terrain allow straightforward navigation.",
  priceRangeMinUsd: 80,
  priceRangeMaxUsd: 150,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — folds into Value per founder governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Tsavo West or Samburu National Reserve (ecosystem contrast pairing)",
    "Diani Beach or a private Mara Conservancy (regional decompression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Rustic"], // "Cinematic" substituted per founder decision
    energyType: ["Wellness", "Nature Immersion"], // confirmed
    experiencePace: "Moderate", // confirmed normalization from "Balanced"
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Rustic Immersion",
    journeyRole: "Opening Immersion", // resolved from doc's dual "Opening Immersion (or Adventure Transition)", consistent with Amboseli precedent
    idealTravelersPrimary: ["First-Time Safari Travelers", "Families", "Nature Photographers"],
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 6, authenticityScore: 7, premiumScore: 3,
    adventureScore: 6, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 5, familySuitabilityScore: 7, comfortScore: 5,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–4.5 hours overland from Nairobi (240 km); 20–30 min road transfer from Amboseli Airstrip (45 min flight from Wilson).",
    seasonalAccessibility: "Open year-round; flat terrain prevents standing water issues, though unpaved tracks become dusty in dry seasons (Jan–Mar, Jul–Oct) and slick during peak rains (April–May).",
    rainySeasonImpact: "Unpaved tracks become slick during peak rains (April–May).",
    electricitySystem: "Hybrid solar power and back-up generator; standard lighting across tents and cottages, central charging stations in common lounge areas.",
    powerReliability: "Standard, not explicitly flagged as continuous or timed.",
    waterReliability: "Solar photovoltaic water heating and traditional water heaters; pressure can fluctuate during peak morning/evening simultaneous usage.",
    internetAvailability: "Wi-Fi available in the central lounge/dining area only.",
    mobileNetwork: "Safaricom/Airtel cellular data coverage accessible in open areas.",
    medicalAccess: "On-site basic first aid; community health dispensaries in Kimana town (8 km); emergency evacuation via Amboseli Airstrip.",
    childFriendly: true, // High per source
    mobilityFriendly: true, // Moderate per source — flat ground, minor step-ups
    operationalLimitations: [
      "Basic 3-star interior amenities",
      "Lack of a swimming pool or shaded spa infrastructure",
      "Ambient noise from satellite TV in the common lounge",
      "Midday heat exposure",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Focuses strictly on iconic wildlife sightings and bucket-list photography without paying elite lodge prices. Tactical Kimana Gate proximity ensures immediate entry for sunrise game drives. ONTOLOGY NOTE: source's separate 'Frugal Explorer / Budget Adventurers' entry (not a valid archetype category) folded into this entry given overlapping rationale — high-utility, cost-conscious, full-board lodging at budget rates.",
      supportingSignals: ["Sub-5-minute Kimana Gate proximity", "Budget-tier full-board pricing"],
      mismatchConditions: ["Must accept basic 3-star room styling, simple homestyle dining, and lack of a swimming pool", "Absence of luxury pampering, high-pressure showers, or fine dining"] },
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Hybrid room choice allows parents to select stone cottages for secure walls and noise dampening, while enjoying affordable full-board pricing and flexible service staff.",
      supportingSignals: ["Stone cottages with acoustic insulation", "Flexible full-board service"],
      mismatchConditions: ["Lack of dedicated kids' clubs or swimming facilities means parents must plan midday downtime activities"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Lens Collector\"); mapped per founder confirmation — unobstructed sightlines to Mount Kilimanjaro from camp porches paired with immediate gate access allow photographers to capture clear-peak morning light before cloud cover sets in.",
      supportingSignals: ["Unobstructed Kilimanjaro sightlines", "Clear-peak morning light before 9 AM cloud cover"],
      mismatchConditions: ["Basic interior working space and central lounge power setup for heavy camera battery charging"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Shared lounge TV, basic room decor, close unit layout, and potential group tour chatter eliminate high-end romantic seclusion.",
      supportingSignals: [], mismatchConditions: ["Failure to deliver private luxury amenities, plunge pools, or secluded romantic atmosphere"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Utilitarian canvas and stone architecture, simple buffet/stew dining, and basic interior styling fall far short of elite 5-star lodge standards.",
      supportingSignals: [], mismatchConditions: ["Severe expectation mismatch regarding luxury finishes, fine wine lists, private vehicles, and personalized butler care"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Deep Wellness Devotee\"); mapped per founder confirmation — absence of swimming pools, air conditioning, dedicated spa facilities, or shaded quiet zones makes prolonged midday thermal recovery difficult.",
      supportingSignals: [], mismatchConditions: ["High midday heat exposure and common-area tech distractions (lounge satellite TV) impede deep relaxation"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion (or Adventure Transition)'; canonical journeyRole resolved to Opening Immersion, consistent with every other Amboseli entry-point lodge processed so far.",
    whatShouldComeBefore: "Overland road arrival from Nairobi (4–4.5 hours) or a basic urban transit stay. Serves as the high-impact visual entry point to the safari circuit.",
    whatShouldComeAfter: "A high-end conservancy lodge in the Maasai Mara or Laikipia for luxury escalation, or a coastal beach retreat (e.g., Diani Beach) for rest and decompression.",
    emotionalTransitionRationale: "Captures immediate 'bucket-list' Kilimanjaro visuals and high-excitement elephant photography before shifting into deeper, more secluded safari ecosystems.",
  },

  narrative: {
    whyChosen: "Nyati is the reference example for tactical, gate-adjacent value: positioned directly at Kimana Gate, it exploits Kilimanjaro's daily cloud cycle (the peak typically clouds over by 9 AM) to secure clear-peak shots that lodges further out miss entirely.",
    bestUsedFor: "Photographers, families, or budget-conscious travelers seeking premier Kilimanjaro sightlines and immediate park access who prioritize location and field time over luxury amenities.",
    lessSuitableFor: "Honeymooners, high-net-worth travelers, or executives demanding 5-star luxury finishes, private plunge pools, secluded romantic privacy, or dedicated spa facilities.",
    journeyPositionNote: "Opening Immersion — a 2-night high-impact visual entry point, preserving budget for luxury properties deeper in the itinerary.",
    overview: "Nyati Safari Camp is a strategically positioned, value-driven safari outpost operating directly at the Kimana Gate entrance of Amboseli National Park, featuring 5 traditional canvas safari tents and 7 permanent stone-and-thatch cottages with an unobstructed sightline to Mount Kilimanjaro.",
    emotionalFeel: "Unpretentious, warm, and observation-focused — early mornings buzz with quiet awe as guests view Kilimanjaro over coffee, while evenings settle into a relaxed homestead atmosphere around a central bonfire under star-dense skies.",
    sensorySignature: {
      visual: ["Unobstructed sunrise sightlines of Mount Kilimanjaro shifting from pink to stark white", "Savannah brushwood framing"],
      auditory: ["Chirping of Amboseli's 400+ bird species at dawn", "Wind rustling through canvas", "Crackling bonfire logs at night"],
      olfactory: ["Open-fire woodsmoke", "Dry earth", "Fresh morning bush air"],
    },
    positiveSignals: [
      "Maximum mountain visibility from dining terraces and room porches",
      "Positioned directly at Kimana Gate, eliminating transit delays for pre-dawn game drives",
      "Staff accommodate early breakfast boxes, custom dietary requests, and bush sundowners smoothly",
      "Stone cottages provide acoustic insulation and security for families alongside classic canvas tents",
    ],
    negativeSignals: [
      "Simple 3-star furnishings, basic plumbing fixtures, and utilitarian room styling",
      "No swimming pool or shaded wellness areas for escaping midday heat",
      "Satellite TV in the lounge area can occasionally disrupt the remote wilderness atmosphere",
    ],
    hiddenGems: [
      "Nyati's tactical position against Kilimanjaro's daily cloud cycle — because the mountain frequently clouds over by 9:00 AM, gate-adjacent positioning lets photographers reach Observation Hill and active marsh loops within minutes of opening, securing clear-peak shots missed by guests staying further out.",
    ],
    signatureMemory: "Sipping early morning coffee on your room porch while watching the first light hit the snow-capped peak of Mount Kilimanjaro, right before taking a 2-minute drive through Kimana Gate into the elephant marshes.",
    expectationManagement: "This is a budget/value-driven basecamp. Interior amenities are basic, dining consists of simple and wholesome local/international dishes, there is no pool, and common lounge spaces include satellite television.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Photographer, family, or budget-conscious traveler seeking premier Kilimanjaro sightlines and immediate park access who prioritizes location and field time over luxury amenities.",
    ],
    doNotRecommendConditions: [
      "Honeymooner, high-net-worth traveler, or executive demanding 5-star luxury finishes",
      "Private plunge pools or secluded romantic privacy",
      "Dedicated spa facilities",
    ],
    confidenceLevel: "High", // per source, for budget/value-driven curations specifically — "Low" for elite luxury curations
    competitiveAdvantage: "Premier sightlines to Mount Kilimanjaro paired with sub-5-minute access to Kimana Gate at an accessible budget price point.",
    mainLimitation: "Basic 3-star room styling, lack of midday swimming/wellness facilities, and satellite TV in common areas.",
    positioningSummary: "A strategically positioned, value-driven safari camp right at Amboseli's Kimana Gate, offering authentic rustic comfort and premier, direct sightlines to Mount Kilimanjaro for photographers and first-time safari travelers.",
  },

  pairings: [
    { pairedEntity: "Tsavo West or Samburu National Reserve", pairingCategory: "ecosystem", rationale: "Moving from Amboseli's flat, elephant-heavy marshlands under Kilimanjaro to volcanic, red-earth terrain offers high landscape and wildlife contrast." },
    { pairedEntity: "Diani Beach or a private Mara Conservancy", pairingCategory: "regional", rationale: "Follows an active, view-focused safari chapter with an exclusive conservancy or oceanfront decompression phase." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operational property records", "Field proximity surveys", "Amboseli circuit logistics logs", "Gate positioning audits"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Total daily solar kWh output capacity and deep-well water filtration specs — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
      "'The Frugal Explorer / Budget Adventurers' traveler type — not a valid archetype category; folded into Checklist Maximalist entry, worth reviewing whether this needs its own ontology treatment across future budget-tier lodges",
    ],
  },
};