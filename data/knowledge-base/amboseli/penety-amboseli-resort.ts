// data/knowledge-base/amboseli/penety-amboseli-resort.ts
export const penetyAmboseliResort = {
  id: "penety-amboseli-resort", // NEW lodge, no existing DB record
  name: "Penety Amboseli Resort",
  country: "Kenya",
  region: "Amboseli National Park",
  subRegion: "Kimana Axis / Eastern Park Boundary Interface",
  ecosystem: "Savannah — Semi-arid plains under the microclimate of Mt. Kilimanjaro",
  propertyType: "Modern Safari Hotel / Brick-and-Mortar Safari Resort",
  accommodationStyle: "Spacious brick-and-mortar hotel suites/rooms with solid concrete walls, private balconies, and contemporary furnishings.",
  locationDetail: "Kimana axis, oriented entirely to capture panoramic views of Mount Kilimanjaro.",
  nearestGate: "Kimana Sanctuary Main Gate (4 km / 5–10 minutes) / Kimana Gate, Amboseli National Park (25 km / 25–35 minutes)",
  nearestAirstrips: ["Kimana Sanctuary Airstrip", "Amboseli Airstrip"],
  accessibilityNotes: "Accessible year-round by 2WD or 4x4 via the fully paved Emali–Loitokitok highway, turning 200 meters off tarmac onto a flat gravel entry road. Paved internal walkways and level resort grounds.",
  priceRangeMinUsd: 120,
  priceRangeMaxUsd: 220,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary)
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // "Budget" retired from vocabulary — folds into Value per founder governance decision
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Tsavo West or a private Maasai Mara conservancy (ecosystem contrast pairing)",
    "Lake Naivasha sanctuary or Laikipia Plateau (regional decompression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Rustic", "Social"], // "Cinematic" substituted per founder decision
    energyType: ["Adventure", "Wildlife Focus"], // confirmed
    experiencePace: "Fast", // confirmed normalization from "Fast-paced"
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Modern Luxury",
    journeyRole: "Opening Immersion", // resolved from doc's dual "Opening Immersion (or Transit Basecamp)" — flagged for regional review per founder concern
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Bleisure Explorers"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 4, authenticityScore: 5, premiumScore: 4,
    adventureScore: 5, privacyScore: 2, wildlifeExperienceScore: 7,
    culturalImmersionScore: 4, familySuitabilityScore: 8, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–5 hours overland from Nairobi (220 km); 40–50 min road transfer from Amboseli Airstrip, or 10 min from Kimana Sanctuary Airstrip.",
    seasonalAccessibility: "Open year-round; solid concrete structures and paved/gravel pathways prevent mud or flooding issues during peak rainy seasons (April–May).",
    rainySeasonImpact: "Minimal — paved/gravel resort pathways prevent mud or flooding during peak rains.",
    electricitySystem: "24-hour continuous grid electricity backed by continuous generator infrastructure.",
    powerReliability: "Continuous, standard international wall sockets across all units.",
    waterReliability: "Central solar and electric water heating; pressure and temperature can fluctuate during peak morning/evening simultaneous usage.",
    internetAvailability: "Fiber internet and strong cellular coverage; highly stable in common lounge/dining areas but exhibits Wi-Fi dead zones inside individual guest rooms.",
    mobileNetwork: "Strong Safaricom/Airtel cellular data coverage.",
    medicalAccess: "On-site basic first aid; dispensaries in Kimana town (2 km) and Kimana Police Station (1 km); emergency evacuation via Amboseli Airstrip.",
    childFriendly: true, // "Very High" per source
    mobilityFriendly: true, // High per source — flat terrain, wide concrete pathways
    operationalLimitations: [
      "Systemic plumbing friction (occasional hot water drops or low shower pressure)",
      "Variable food flavor in fixed buffets",
      "Noise overlap from corporate conferences in the 150-cap Kibo Hall",
      "Wi-Fi drops inside guest rooms",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Solid concrete walls eliminate parental anxiety regarding wilderness security. Kids' playground (trampolines/bouncing castles), large swimming pool, and spacious multi-bed setups provide excellent child engagement.",
      supportingSignals: ["Dedicated kids' playground", "Solid concrete security"],
      mismatchConditions: ["Midday heat around unshaded pool decks and occasional noise from corporate events"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "High-utility basecamp offering direct, unobstructed sightlines to Mount Kilimanjaro paired with easy access to both Kimana Sanctuary and Amboseli National Park.",
      supportingSignals: ["Unobstructed Kilimanjaro sightlines", "Dual sanctuary/park access"],
      mismatchConditions: ["Must accept commercial hotel atmosphere and buffet dining rather than intimate bush hosting"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "Corporate Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Bonded Cohort\") under an invalid category (\"Corporate/Incentive Groups\"); mapped to the correct Bleisure Explorer archetype per founder confirmation — equipped with the 150-capacity Kibo conference hall, large parking capacity, 50+ spacious rooms, and central pool bar for team-building activities.",
      supportingSignals: ["150-capacity conference hall", "Team-building infrastructure"],
      mismatchConditions: ["Resort setup prioritizes group volume over individualized luxury service"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Commercial resort setup, 50+ room density, conference chatter, and child-heavy pool areas destroy romantic exclusivity and peaceful isolation.",
      supportingSignals: [], mismatchConditions: ["Total failure to deliver romantic seclusion, fine dining, or silent wilderness intimacy"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High social stimulation, bustling parking areas, kids' playgrounds, and evening lounge noise prevent deep mental recovery or silent communion with nature.",
      supportingSignals: [], mismatchConditions: ["Acoustic and visual clutter from group tours and corporate retreats"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Commercial 3-star build, fixed buffet layouts, simple interior decor, and occasional plumbing maintenance friction fall far below 5-star luxury expectations.",
      supportingSignals: [], mismatchConditions: ["Severe expectation mismatch regarding private butler service, fine wines, and exclusive private conservancy access"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion (or Transit Basecamp)'; resolved to Opening Immersion, consistent with the rest of the Amboseli batch. FOUNDER FLAG: 6 of 7 Amboseli lodges now share this same journeyRole — flagged for a future regional review to confirm this reflects Amboseli's genuine positioning as an arrival-stage region versus an artifact of defaulting to each doc's stated framing.",
    whatShouldComeBefore: "Overland road arrival from Nairobi (4–5 hours) or flight arrival at Amboseli/Kimana Airstrip. Serves as a high-security landing pad to recover from travel fatigue.",
    whatShouldComeAfter: "An exclusive, low-density luxury tented camp in a private Mara conservancy, Tsavo West, or Laikipia for deep wilderness immersion and high-end hosting.",
    emotionalTransitionRationale: "Channels initial arrival excitement and family energy into iconic Kilimanjaro photography and game drives before transitioning to quiet, exclusive wilderness zones.",
  },

  narrative: {
    whyChosen: "Penety is the reference example for brick-and-mortar security paired with dual-gate strategic positioning: 4 km from Kimana Sanctuary and 25 km from Amboseli's Kimana Gate, giving itineraries flexibility to split game viewing between two distinct wildlife zones.",
    bestUsedFor: "Families with children, mid-range budget travelers, first-time safari goers, or corporate groups seeking a secure brick-and-mortar hotel with direct Kilimanjaro views and great park access.",
    lessSuitableFor: "Honeymooners, luxury purists, solo executives seeking silence, or guests demanding fine dining and exclusive, low-density wilderness solitude.",
    journeyPositionNote: "Opening Immersion — a high-security landing pad for families to shake off jet lag before transitioning into deeper, quieter wilderness properties.",
    overview: "Penety Amboseli Resort is a modern, brick-and-mortar safari hotel along the Kimana axis outside Amboseli National Park, its 50-room footprint oriented entirely to capture panoramic Kilimanjaro views, featuring a sunken pool bar, spacious rooms, a kids' playground, and conference facilities for up to 150 guests.",
    emotionalFeel: "Lively, secure, and social — the resort hums with family vacations and group activity. Clear mornings evoke awe as Kilimanjaro towers over the pool deck, while evenings offer a bustling, domestic hotel atmosphere balanced by classic campfire storytelling.",
    sensorySignature: {
      visual: ["Towering snow-capped Mount Kilimanjaro dominating the skyline above the pool and landscaped gardens"],
      auditory: ["Distant chatter of families around the pool", "Corporate activity in common areas", "Bird calls from garden trees", "Crackling bonfire logs at dusk"],
      olfactory: ["Clean garden air", "Poolside cocktail aromas", "Woodsmoke from the lawn bonfire", "Fresh-cut lawn grass"],
    },
    positiveSignals: [
      "Premium visual sightlines of Kilimanjaro from pool decks and private balconies",
      "Dedicated kids' playground with trampolines and bouncing castles",
      "Large guest rooms featuring king beds, writing desks, secure deposit boxes, and private terraces",
      "Architecturally attractive sunken pool bar serving as an effective social hub",
    ],
    negativeSignals: [
      "Recurring issues with hot water availability, shower pressure, and bathroom drainage",
      "Fixed buffets offer basic variety and struggle to accommodate complex dietary requests",
      "Corporate conferences (up to 150 delegates) can generate noise friction for leisure guests",
      "High-speed internet reliable in common lounges but drops off inside individual guest rooms",
    ],
    hiddenGems: [
      "Penety's dual-proximity position — 4 km from Kimana Sanctuary Main Gate and 25 km from Amboseli's Kimana Gate — allows itineraries to split game viewing between Amboseli's elephant marshlands and Kimana Sanctuary's exclusive night drives and foot safaris.",
    ],
    signatureMemory: "Relaxing in the sunken pool bar with a cold drink after a dusty morning safari, watching Mount Kilimanjaro clear above the resort skyline while children play safely in the background.",
    expectationManagement: "This is a commercial 3-star resort, not an intimate, off-grid wilderness camp. Dining is buffet-style, events may occur in conference rooms, Wi-Fi is limited in rooms, and hot water pressure can fluctuate during peak hours.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family with children, mid-range budget traveler, first-time safari goer, or corporate group seeking a secure brick-and-mortar hotel with direct Kilimanjaro views and great park access.",
    ],
    doNotRecommendConditions: [
      "Honeymooner, luxury purist, or solo executive seeking silence",
      "Guest demanding fine dining and exclusive, low-density wilderness solitude",
    ],
    confidenceLevel: "Medium", // per source — maintenance and culinary inconsistencies require expectation management
    competitiveAdvantage: "Strongest brick-and-mortar safety, family amenities (playground/pool), and direct Kilimanjaro views at a mid-range budget price point.",
    mainLimitation: "Commercial, high-density hotel feel, buffet dining execution, and room plumbing/Wi-Fi inconsistencies.",
    positioningSummary: "A spacious, family-friendly brick-and-mortar safari resort offering unparalleled views of Mount Kilimanjaro and excellent proximity to Kimana Sanctuary, serving as a highly secure and social basecamp for mid-range adventurers.",
  },

  pairings: [
    { pairedEntity: "Tsavo West or a private Maasai Mara conservancy", pairingCategory: "ecosystem", rationale: "Moving from Penety's concrete, social resort environment into a silent canvas enclave provides high experiential contrast." },
    { pairedEntity: "Lake Naivasha sanctuary or Laikipia Plateau", pairingCategory: "regional", rationale: "Moves the traveler from a high-stimulation conference/family environment into restorative, low-density nature." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Resort operational specifications", "Regional transport distance logs", "Regional safari circuit audits", "Verified guest feedback logs"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar backup power transition timelines for guest room hot water systems — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
      "'The Security-Conscious Explorer' archetype — dropped per founder decision to avoid duplication with Checklist Maximalist",
    ],
  },
};