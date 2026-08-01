// data/knowledge-base/amboseli/amboseli-sopa-lodge.ts
export const amboseliSopaLodge = {
  id: "amboseli-sopa-lodge", // NEW lodge, no existing DB record
  name: "Amboseli Sopa Lodge",
  country: "Kenya",
  region: "Amboseli National Park",
  subRegion: "Kimana Gate Sector, Eastern Park Foothills Buffer Zone",
  ecosystem: "Semi-arid wilderness / Acacia scrubland / Montane plains foothills",
  propertyType: "Permanent Heritage Safari Resort / Masonry Cottage Lodge",
  accommodationStyle: "Circular masonry thatched cottages designed after traditional Maasai homesteads, set within mature tropical and acacia gardens.",
  locationDetail: "200-acre private enclave near the foothills of Mount Kilimanjaro.",
  nearestGate: "Kimana Gate (20 km / 20 minutes drive)",
  nearestAirstrips: ["Amboseli Airstrip"],
  accessibilityNotes: "Accessible year-round by 4x4 or 2WD via paved highway to Kimana, concluding on a short 4 km dirt track. Vast 200-acre grounds feature paved footpaths and flat garden terrain, though distant cottage clusters require extended walking.",
  priceRangeMinUsd: 150,
  priceRangeMaxUsd: 280,
  rawMarketTier: "Mid-range", // as stated in source doc, overridden below per price-guide rule
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price-guide midpoint (~$215) overrides doc's stated "Mid-range"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Tsavo West National Park or Chyulu Hills (ecosystem contrast pairing)",
    "Maasai Mara National Reserve or Laikipia conservancies (regional pairing)",
    "Ol Tukai Lodge or a private conservancy camp (intimate step-up pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Rustic", "Social"], // all approved as-is, no normalization needed
    energyType: ["Wellness", "Nature Immersion"], // all approved as-is, no normalization needed
    experiencePace: "Slow", // stated directly, no fix needed
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Classic Safari Elegance",
    journeyRole: "Opening Immersion", // resolved from doc's dual "Opening Immersion (or Recovery/Reset Anchor)"
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Slow Travelers"],
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 7, authenticityScore: 5, premiumScore: 4,
    adventureScore: 4, privacyScore: 3, wildlifeExperienceScore: 7,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4 hours overland from Nairobi (250 km) via paved highway + 4 km dirt track; 60 min road transfer from Amboseli Airstrip (30–40 min flight from Wilson).",
    seasonalAccessibility: "Open year-round; all-weather access road remains passable during wet seasons (April–May), though heavy rains can turn internal unpaved park tracks near Kimana Gate muddy.",
    rainySeasonImpact: "Heavy rains can turn internal unpaved park tracks near Kimana Gate muddy, though the main access road remains passable.",
    electricitySystem: "24-hour continuous grid power backed by an on-site diesel generator.",
    powerReliability: "Continuous, in-room wall sockets support electronics and medical equipment.",
    waterReliability: "Central boiler and solar water heating systems deliver continuous hot water to en-suite stone bathrooms.",
    internetAvailability: "Complimentary Wi-Fi confined to main public lounge, reception, and bar areas; private cottages do not feature Wi-Fi.",
    mobileNetwork: "Safaricom/Airtel cellular connectivity accessible across property grounds.",
    medicalAccess: "On-site basic first aid and trained staff; community health clinics in Kimana town; emergency evacuation via Amboseli Airstrip.",
    childFriendly: true, // "Exceptional" per source
    mobilityFriendly: true, // High relative to bush safari lodges — 2 wheelchair-accessible cottages, wide paved pathways, ramp access
    operationalLimitations: [
      "20-minute drive (20 km) to reach Kimana Gate before game drives begin",
      "High-volume tour-group buffet dining",
      "Internet restricted to public zones",
      "Dated bathroom plumbing and decor",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Wide-open 200-acre secure garden grounds, 6 interconnecting cottage blocks, dual-queen bedding, and a massive swimming pool comfortably accommodate grandparents, parents, and children under safe conditions.",
      supportingSignals: ["200-acre secure grounds", "6 interconnecting cottage blocks"],
      mismatchConditions: ["Must navigate a 20-minute pre-safari vehicle commute to the park gate twice daily"] },
    { fitType: "ideal", category: "Families", archetype: "Milestone Celebrators", matchStrength: "Strong",
      reasoning: "Large public spaces, Hemingway's Bar, and private dining options (such as the Mawenzi Terrace) cater well to group milestone gatherings and family celebrations.",
      supportingSignals: ["Hemingway's Bar", "Mawenzi Terrace private dining"],
      mismatchConditions: ["Buffet-style main dining hall can feel crowded during peak occupancy windows"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Delivers a high-security, low-anxiety 'soft entry' to Kenya. Solid brick-and-mortar cottages, continuous grid power, paved paths, and familiar resort amenities ease first-time safari concerns.",
      supportingSignals: ["High-security masonry cottages", "Familiar resort amenities"],
      mismatchConditions: ["Does not provide an authentic canvas-under-stars wilderness experience"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "Biophilic Restorer", matchStrength: "Strong",
      reasoning: "The 200-acre mature botanical canopy provides an ideal environment for birdwatching and unhurried garden walks without leaving the lodge grounds.",
      supportingSignals: ["200-acre mature botanical canopy", "On-site birdwatching"],
      mismatchConditions: ["Lack of in-cottage Wi-Fi requires spending downtime in communal public lounges for connectivity"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "83-key resort scale, large tour-group buffet dining, and shared pool zones eliminate romantic isolation and private luxury intimacy.",
      supportingSignals: [], mismatchConditions: ["High presence of family groups, tour buses, and communal public spaces prevents a quiet romantic retreat"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Large-scale resort environment, high guest density, and tour-group dining halls fail to provide ultra-private, high-end digital detox conditions.",
      supportingSignals: [], mismatchConditions: ["High volume of social interaction and lack of exclusive, single-key personal service disrupt mental decompression"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Heritage mid-tier resort aesthetic, dated bathroom fixtures, 20-minute gate commute, and standard buffet dining fail to meet elite luxury expectations.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment with non-exclusive game drive logistics and traditional mid-market resort infrastructure"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source frames this as dual 'Opening Immersion (or Recovery/Reset Anchor)'; canonical journeyRole resolved to Opening Immersion per founder decision — the doc's own pairing intelligence explicitly recommends placing this lodge at the start of an itinerary.",
    whatShouldComeBefore: "Direct overland transfer from Nairobi (4 hours) or bush flight to Amboseli Airstrip. Serves as a relaxed, low-stress entry point to acclimate to Kenya's climate and timezone.",
    whatShouldComeAfter: "Transition to intimate, low-density private conservancy camps in the Maasai Mara, Laikipia, or the rugged lava ecosystems of Tsavo West / Chyulu Hills.",
    emotionalTransitionRationale: "Eases initial travel fatigue through lush garden surroundings and familiar resort infrastructure before sending guests into high-intensity, exclusive wilderness zones.",
  },

  narrative: {
    whyChosen: "Amboseli Sopa Lodge is the reference example for a spacious, secure Opening Immersion: 200 private acres of irrigated botanical garden functioning as a recovery buffer against jetlag and equatorial heat before travelers step into more intense, exclusive wilderness legs.",
    bestUsedFor: "Families, groups, or mid-tier travelers seeking an affordable, highly secure cottage resort with spacious grounds, a large pool, 24-hour power, and classic Kilimanjaro views.",
    lessSuitableFor: "Honeymooners, executives, or luxury purists demanding deep wilderness isolation, boutique tented design, private plunge pools, or immediate gate proximity.",
    journeyPositionNote: "Opening Immersion — a recovery-oriented entry point before transitioning into intense, exclusive wilderness zones.",
    overview: "Amboseli Sopa Lodge is an established mid-tier safari resort within a 200-acre private enclave near the foothills of Mount Kilimanjaro, featuring 83 circular masonry cottages inspired by traditional Maasai architecture, embedded in mature, irrigated tropical gardens.",
    emotionalFeel: "Grounded, safe, and unhurried — the dense botanical canopy provides a cool buffer against equatorial heat and dust, with clear morning Kilimanjaro views from cottage verandas and casual social energy at Hemingway's Bar in the evenings.",
    sensorySignature: {
      visual: ["Irrigated green lawns against dry volcanic scrub", "Mount Kilimanjaro's snow-capped peak"],
      auditory: ["Vervet monkey chatter in the acacia canopy", "Morning bird calls along garden paths", "Social evening chatter at Hemingway's Bar"],
      olfactory: ["Damp lawn moisture", "Acacia blossoms", "Dry volcanic dust", "Woodsmoke from public hearths"],
    },
    positiveSignals: [
      "200 acres of irrigated green lawns and mature trees create a cool microclimate",
      "Large swimming pool and separate children's paddling pool provide central midday relaxation",
      "Spacious circular cottages with dual-queen bedding configurations suit family groups well",
      "Interior garden paths offer birding opportunities inside a secure perimeter",
    ],
    negativeSignals: [
      "Positioned 20 km outside the park boundary, requiring a 20-minute drive to reach Kimana Gate",
      "Bathroom plumbing fixtures, tiling, and decor show age and require modern updates",
      "Internet access confined to main public areas; private cottages lack Wi-Fi",
      "Large-scale dining hall oriented toward tour groups lacks intimate fine-dining finesse",
    ],
    hiddenGems: [
      "6 interconnecting cottage blocks allow secure, stone-walled multi-room family suites, and the outdoor Mawenzi Terrace under mature acacia trees can be reserved for private starlit dining away from the main buffet hall.",
    ],
    signatureMemory: "Watching the morning sun illuminate the snows of Mount Kilimanjaro from a private garden veranda before strolling through cool, bird-filled lawns to breakfast.",
    expectationManagement: "This is a high-capacity, mid-market heritage resort. Rooms are masonry cottages rather than luxury tents, game drives require a 20-minute road commute to the park gate, Wi-Fi is unavailable in cottages, and dining follows a high-volume buffet format.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family, group, or mid-tier traveler seeking an affordable, highly secure cottage resort with spacious grounds, a large pool, 24-hour power, and classic Kilimanjaro views.",
    ],
    doNotRecommendConditions: [
      "Honeymooner, executive, or luxury purist demanding deep wilderness isolation",
      "Boutique tented design or private plunge pools",
      "Immediate gate proximity",
    ],
    confidenceLevel: "Medium", // per source — requires clear briefing on gate commute and dated bathroom aesthetics
    competitiveAdvantage: "Largest private garden grounds (200 acres) and pool infrastructure in the mid-range Amboseli market, backed by permanent masonry cottage security.",
    mainLimitation: "20-minute road transit (20 km) to Kimana Gate and high-volume, tour-group-oriented buffet dining.",
    positioningSummary: "An expansive, family-friendly heritage resort set within a lush 200-acre garden oasis outside the park, offering spacious cottage comfort and classic Kilimanjaro views at a practical mid-range price point.",
  },

  pairings: [
    { pairedEntity: "Tsavo West National Park or Chyulu Hills", pairingCategory: "ecosystem", rationale: "Moving from Amboseli's gardens and salt plains to Tsavo's volcanic landscape creates a strong geological contrast." },
    { pairedEntity: "Maasai Mara National Reserve or Laikipia conservancies", pairingCategory: "regional", rationale: "Introduces high predator density and private tracking after establishing the Amboseli baseline." },
    { pairedEntity: "Ol Tukai Lodge or a private conservancy camp", pairingCategory: "experience", rationale: "Sequences a large, social heritage resort into an intimate, 6-to-8 tent boutique eco-camp." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Sopa Lodges corporate factsheets", "Geographical access logs", "Field inspection reports", "Regional tourism operational surveys"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Solar power conversion percentage for hot water boilers during cloudy wet season windows — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};