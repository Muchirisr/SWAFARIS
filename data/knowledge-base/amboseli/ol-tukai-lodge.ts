// data/knowledge-base/amboseli/ol-tukai-lodge.ts
export const olTukaiLodgeEnrichment = {
  id: "ol-tukai-lodge", // REUSED — existing lodge, not a new one
  name: "Ol Tukai Lodge",
  country: "Kenya",
  region: "Amboseli National Park",
  subRegion: "Central Sector / Longinye & Ol Tukai Marsh Ecotone",
  ecosystem: "Savannah grassland, acacia woodland, and seasonal wetland marsh",
  propertyType: "Classic Heritage Safari Sanctuary / Permanent Chalet Lodge",
  accommodationStyle: "Single-story chalet-style timber and clay-roofed suites designed to optimize views of the open plains, marshes, or Mount Kilimanjaro.",
  locationDetail: "Directly on an ecotone where manicured lawns meet the Amboseli marshes, deep inside the national park boundary.",
  nearestGate: "Inside the national park boundaries (approx. 20 minutes from Meshanani or Kimana Gate)",
  nearestAirstrips: ["Amboseli Airstrip"],
  accessibilityNotes: "Fully accessible year-round by 2WD/4x4 and light aircraft. Flat, level topography with paved main walkways connecting chalet clusters to dining, lounge, and pool areas.",
  priceRangeMinUsd: 400,
  priceRangeMaxUsd: 750,
  rawMarketTier: "Premium", // as stated in source doc, matches price-guide midpoint exactly — no conflict
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium", // unchanged, clean match with existing DB value
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Tsavo West / Chyulu Hills or Maasai Mara predator conservancies (ecosystem pairing)",
    "Laikipia private conservancies, e.g. Karisia Walking Safaris or Ol Malo (regional pairing)",
    "Mara Plains or Angama Mara (intimate step-up pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Grounded", "Peaceful", "Social"], // "Cinematic" substituted; "Grounded" preserved from existing DB, nothing in new doc contradicts it
    energyType: ["Wellness", "Nature Immersion"], // confirmed normalization
    experiencePace: "Moderate", // normalized from "Balanced"
    comfortPhilosophy: ["Authentic Luxury"], // unchanged, matches existing DB
    comfortPhilosophyDetailed: "Classic Safari Elegance",
    journeyRole: "Safari Climax", // KEPT unchanged per founder decision — existing DB value stands, doc's "Opening Immersion" framing not applied
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Nature Photographers"], // expanded per founder decision
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 8, authenticityScore: 6, premiumScore: 8,
    adventureScore: 5, privacyScore: 4, wildlifeExperienceScore: 9,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Low", // "Very Low" per source
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4 hours overland from Nairobi (230 km) via Namanga or Emali; 35 min flight Wilson→Amboseli Airstrip + 15 min game-drive transfer.",
    seasonalAccessibility: "Open year-round; all-weather internal park tracks ensure uninterrupted access, though heavy rains (April–May) can create deep mud in immediate marsh-adjacent tracks.",
    rainySeasonImpact: "Heavy rains (April–May) can create deep mud in immediate marsh-adjacent tracks.",
    electricitySystem: "24-hour uninterrupted grid power integrated with a silent back-up generator system.",
    powerReliability: "Continuous, 24-hour per source.",
    waterReliability: "Solar and electric boiler units provide continuous hot water to en-suite bathrooms.",
    internetAvailability: "Complimentary Wi-Fi covers main guest hubs (Elephant Bar, lounge, reception) and most guest chalets.",
    mobileNetwork: "Strong Safaricom/Airtel cellular connectivity across the grounds.",
    medicalAccess: "On-site first aid facilities, 24/7 on-call lodge clinical assistance, direct airstrip access for AMREF Flying Doctors evacuation.",
    childFriendly: true, // High per source
    mobilityFriendly: true, // "Exceptional for a bush lodge" per source — 2 EU-standard wheelchair-accessible chalets
    operationalLimitations: [
      "Large-scale guest footprint (80 rooms); main dining hall experiences high-density buffet traffic during peak seasons",
      "Bold resident primates require vigilant door-latching and mindful snack handling on open lawns",
      "Select chalet fixtures, soft furnishings, and electrical outlets show age",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Flat, level pathways, interconnecting/triple chalet options, safe electric perimeter fencing, and an expansive pool allow grandparents and children to share an effortless safari experience without long, arduous drives.",
      supportingSignals: ["Flat, level pathways", "Safe electric perimeter fencing"],
      mismatchConditions: ["Must keep a close watch on small children around habituated, food-seeking baboons and vervet monkeys on the lawns"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Unrivaled positional supremacy guarantees high-density elephant encounters and iconic Kilimanjaro backdrops on day one, building immediate confidence and visual reward.",
      supportingSignals: ["High-density elephant encounters day one", "Iconic Kilimanjaro backdrops"],
      mismatchConditions: ["Resort scale and buffet dining mean it does not offer a deep-bush, canvas-tented wilderness feel"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Biophilic Restorer", matchStrength: "Strong",
      reasoning: "Front-row positioning along the marsh-savannah boundary offers continuous, low-effort photography of birds and megafauna right from the Elephant Bar upper deck or private verandas.",
      supportingSignals: ["Front-row marsh-savannah positioning", "Elephant Bar upper deck vantage"],
      mismatchConditions: ["Communal public spaces during peak buffet hours can briefly interrupt quiet contemplation"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "The 80-room resort footprint, communal dining halls, and central pool areas lack the intimate, secluded romance of boutique 6-tent luxury camps.",
      supportingSignals: [], mismatchConditions: ["High tour-group volume and family density break the illusion of exclusive romance"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High guest density, communal buffet setups, and shared viewing decks do not cater to ultra-high-net-worth privacy or highly personalized, a la carte butler service.",
      supportingSignals: [], mismatchConditions: ["Dissatisfaction with high social traffic and lack of single-key exclusivity"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Focuses on passive, low-intensity wildlife viewing and iconic landscapes rather than off-road tracking, private conservancy night drives, or walking safaris.",
      supportingSignals: [], mismatchConditions: ["Restlessness with structured, vehicle-bound park rules and moderate physical pace"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion or Recovery/Reset Anchor'; canonical journeyRole KEPT as Safari Climax per founder decision, consistent with the existing DB value — doc's Opening Immersion framing noted but not applied.",
    whatShouldComeBefore: "Direct overland arrival or flight from Nairobi (WIL). Acts as an instant visual gratification engine to kick off an East African itinerary.",
    whatShouldComeAfter: "Transition to high-exclusivity, predator-dense private conservancies (e.g., Mara North, Naboisho, or Laikipia) for an upward arc in privacy and exclusivity.",
    emotionalTransitionRationale: "Takes travelers from international transit fatigue directly into an effortless visual feast of iconic African landscapes, setting a relaxed, awe-inspired baseline.",
  },

  narrative: {
    whyChosen: "Ol Tukai is the reference example for 'secure exposure' inside the park boundary itself: unrivaled positional supremacy on the marsh-savannah ecotone delivers the highest Wildlife Experience Score (9/10) of any lodge outside the Mara reviewed so far, without daily gate transits.",
    bestUsedFor: "Multi-generational families, first-time safari travelers, and nature/landscape photographers wanting iconic, low-stress landscape access and huge wildlife visibility without long, grueling game drives.",
    lessSuitableFor: "Clients demanding absolute privacy, private plunge pools, hyper-bespoke à la carte dining, private butler service, or tracking rare apex predators in small, secluded camps.",
    journeyPositionNote: "Safari Climax — positioned as a high-yield wildlife-visibility anchor within the park itself.",
    overview: "Ol Tukai Lodge is a grand, classic safari sanctuary set directly on an ecotone where manicured lawns meet the Amboseli marshes, delivering a feeling of 'secure exposure' — an unfenced visual panorama of wild Africa while physically grounded on comfortable, protected terrain behind a low-profile electric boundary.",
    emotionalFeel: "A sense of awe that resolves into profound stillness. Mount Kilimanjaro dominates the landscape; mornings feel crisp and cinematic as the sun illuminates the peak behind passing elephant herds, while afternoons settle into a peaceful haze by the shaded pool edge as wildlife grazes just meters away.",
    sensorySignature: {
      visual: ["Vibrant green marshland grasses against dusty gray elephant hides", "White snows of Kilimanjaro framing the scene"],
      auditory: ["Constant canopy chatter from resident yellow baboons and vervet monkeys", "Bird calls", "Distant marsh splashings from wallowing megafauna"],
      olfactory: ["Damp marsh moisture", "Sun-baked acacia wood", "Clay tile warmth", "Crisp mountain morning air"],
    },
    positiveSignals: [
      "The Elephant Bar Upper Deck offers an elevated vantage point over the marshlands during golden hour, a standout setting for sundowners",
      "Passive wildlife integration — game and birdlife visible right from private chalet verandas across the perimeter wire",
      "Unrivaled geographic supremacy deep inside the park, eliminating long gate queues and road transits",
      "Warm Kenyan hospitality from long-serving local staff",
    ],
    negativeSignals: [
      "The 80-room infrastructure can create a busy, cruise-ship-adjacent atmosphere in the main dining hall during peak seasons",
      "Select chalet fixtures, soft furnishings, and electrical outlets show age",
      "Resident monkeys and baboons actively seek unguarded food on lawns or through unlatched chalet doors",
    ],
    hiddenGems: [
      "The lodge's resident ornithologist and private garden bird walks — over 400 species frequent the marsh-savannah boundary, offering an elite, hyper-focused natural history experience right on the lodge grounds.",
    ],
    signatureMemory: "Watching a family of elephants cross the swamp at golden hour from the elevated deck of the Elephant Bar, with the clear, snow-capped summit of Mount Kilimanjaro towering in the background.",
    expectationManagement: "Guests should expect a classic, large-scale heritage lodge rather than a secluded, ultra-boutique tented camp. Dining is primarily high-quality buffet style, and public areas are vibrant and social.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client wants iconic, low-stress landscape photography, multi-generational family comfort, or an introductory safari that guarantees huge wildlife visibility without long, grueling game drives.",
    ],
    doNotRecommendConditions: [
      "Client demands absolute privacy, private plunge pools, hyper-bespoke à la carte dining, or private butler service",
      "Client wants to track rare apex predators in small, secluded camps",
    ],
    confidenceLevel: "High", // conditional on being vetted for traditional heritage luxury expectations, per source
    competitiveAdvantage: "Unbeatable central positioning inside Amboseli National Park, providing immediate marsh access and iconic front-row Kilimanjaro views without daily gate transits.",
    mainLimitation: "Large guest capacity (80 keys) and buffet-style dining hall dynamics.",
    positioningSummary: "A classic heritage safari lodge offering unrivaled positional supremacy in the heart of Amboseli, ideal for first-time travelers and families seeking iconic Kilimanjaro views and effortless elephant encounters from a comfortable, socially vibrant sanctuary.",
  },

  pairings: [
    { pairedEntity: "Tsavo West / Chyulu Hills, or Maasai Mara predator conservancies", pairingCategory: "ecosystem", rationale: "Pairs rugged lava fields and subterranean springs, or deep predator conservancies, as a contrast to Amboseli's marsh ecotone." },
    { pairedEntity: "Laikipia private conservancies (Karisia Walking Safaris or Ol Malo)", pairingCategory: "regional", rationale: "Contrasts vehicle-bound marsh viewing with foot-based wilderness tracking." },
    { pairedEntity: "Mara Plains or Angama Mara", pairingCategory: "experience", rationale: "Creates a steep upward arc in exclusivity and drama after a central, low-intensity resort sanctuary." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Ol Tukai Lodge corporate specifications", "Kenya Wildlife Service (KWS) park mapping", "Geographical access logs", "Field inspection reports"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Specific seasonal schedules for resident naturalist lectures — explicitly flagged as requiring live seasonal confirmation in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};