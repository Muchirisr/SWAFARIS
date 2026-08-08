// data/knowledge-base/naivasha/enashipai-resort-and-spa.ts
export const enashipaiResortAndSpa = {
  id: "enashipai-resort-and-spa", // NEW lodge, no existing DB record
  name: "Enashipai Resort & Spa",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Moi South Lake Road",
  ecosystem: "Rift Valley Lake Interface / Freshwater Wetlands / Acacia Woodland (Yellow-Fever Canopy)",
  propertyType: "Contemporary Lakeside Wellness & Conference Resort",
  accommodationStyle: "Sleek modern executive rooms, garden cottages, and private detached executive villas featuring contemporary African decor.",
  locationDetail: "Moi South Lake Road, manicured shores of Lake Naivasha under ancient yellow-fever acacias.",
  nearestGate: "Hells Gate National Park (Elsa Gate: 15 km / 25 minutes); Crescent Island Sanctuary Jetty (on-site private jetty departure)",
  nearestAirstrips: ["Loldia Airstrip", "Naivasha Airstrip"],
  accessibilityNotes: "Fully accessible year-round via smooth, paved tarmac along Moi South Lake Road. Flat, manicured grounds on-site with paved stone pathways connecting all major room blocks, spa, and dining hubs.",
  priceRangeMinUsd: 250,
  priceRangeMaxUsd: 550,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // corrected from source doc's "Premium" — $400 midpoint falls in $300–499 Mid-Range band, not the $500–799 Premium band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Ishara or Sala's Camp, Maasai Mara (ecosystem contrast pairing)",
    "Sirikoi Lodge or Lewa Wilderness, Laikipia/Northern Kenya (regional pairing)",
    "Great Rift Valley Lodge & Golf Resort (experience contrast pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Social"], // all three already valid vocabulary, no correction needed
    energyType: ["Wellness", "Luxury Escape"], // corrected from source doc's "Decompression Retreat | Quiet Luxury" — same resolution applied to Avian Court Hotel for consistency
    experiencePace: "Slow", // confirmed
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Modern Luxury", // source doc's "Contemporary Luxury" mapped per founder confirmation, same resolution as Avian Court Hotel
    journeyRole: "Recovery", // resolved from source doc's non-canonical triple framing "Mid-Journey Intermission / Decompression Climax / Jetlag Buffer" per founder confirmation. Doc's own "washing off savannah dust... before returning home" language mirrors the Recovery framing used for Hillcourt and Buraha Zenoni (Nakuru batch). This breaks Naivasha's Opening Immersion streak — lodge #1 and #2 were both Opening Immersion, lodge #3 is Recovery.
    idealTravelersPrimary: ["Burned-out Executives", "Families", "Bleisure Explorers", "Slow Travelers"], // "Multi-generational Families" normalized to Families; "Safari-Weary Circuit Travelers" and "MICE & Corporate Retreat Groups" are non-canonical, replaced by Bleisure Explorers and Slow Travelers per the archetype corrections below
    idealTravelersSecondary: [],
    intensityScore: 2, relaxationScore: 9, authenticityScore: 6, premiumScore: 9,
    adventureScore: 3, privacyScore: 6, wildlifeExperienceScore: 5,
    culturalImmersionScore: 6, familySuitabilityScore: 9, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2 to 2.5 hours overland from Nairobi (95 km via Mai Mahiu / Naivasha Road); 20–30 minutes road transfer from local Naivasha airstrips.",
    seasonalAccessibility: "Open year-round with no road access constraints.",
    rainySeasonImpact: "None reported from road access; late afternoon lake-midge / lake-fly swarms can periodically occur along the lake shore during seasonal water-level shifts.",
    electricitySystem: "24/7 continuous main grid power supported by heavy-duty auto-synchronizing backup diesel generators and solar water heating systems.",
    powerReliability: "Continuous, high-capacity power across all executive suites and facilities.",
    waterReliability: "High-capacity pressurized water heating systems delivering continuous hot water across all executive suites, hydrotherapy facilities, and deep-soaking tubs.",
    internetAvailability: "High-speed commercial fiber Wi-Fi throughout all guest rooms, conference halls, and public spaces. Excellent 4G/5G mobile coverage across all major networks (Safaricom/Airtel).",
    mobileNetwork: "Excellent Safaricom and Airtel 4G/5G coverage.",
    medicalAccess: "On-site medical clinic and first responder setup. Major regional hospitals located within Naivasha town (15–20 minutes away); emergency medical air evacuation coverage to Nairobi available.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "High" per source — mostly flat, paved pathways and ramp access across primary public facilities
    operationalLimitations: [
      "Weekend MICE (Meetings, Incentives, Conferences, Exhibitions) and corporate retreats create high foot traffic and busier common areas on Friday and Saturday nights",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "The world-class Siyara Spa, hydrotherapy setup, quiet executive room enclaves, and serene lakeside atmosphere allow over-stimulated travelers to reset mentally.",
      supportingSignals: ["World-class Siyara Spa", "Quiet executive room enclaves"],
      mismatchConditions: ["Must avoid weekend stays to bypass corporate conference crowds in main dining hubs"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Secure, fully fenced estate with wide lawns, large swimming pools, family villas, and gentle boat safaris that engage children without physical strain.",
      supportingSignals: ["Fully fenced estate with family villas", "Gentle boat safaris"],
      mismatchConditions: ["Lakefront edge requires supervision for very young children due to proximity to water and nocturnal hippos"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Slow Traveler\") under an invented category (\"Decompression Seekers\"); mapped to The Biophilic Restorer per founder confirmation, supported by slow pace, late breakfasts overlooking the acacias, reading decks, and low-friction jetty departures aligning perfectly with non-rushed exploration.",
      supportingSignals: ["Slow-paced garden and lakeside setting", "Low-friction jetty departures"],
      mismatchConditions: ["Not situated in a vast, remote wilderness; surrounding areas feature developed resort infrastructure"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Corporate Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed the real archetype name \"The Bonded Cohort\" under an invented category (\"Corporate / Group Retreats\") — but Bonded Cohort actually belongs to Students, and the fit description (MICE facilities, team activities, proximity to Nairobi) doesn't match a Students use case. Remapped to The Corporate Catalyst per founder confirmation, supported by premier MICE facilities, expansive dining spaces, team activities, and proximity to Nairobi (2 hours) making it an ideal high-end group base.",
      supportingSignals: ["Premier MICE facilities", "Proximity to Nairobi (2 hours)"],
      mismatchConditions: ["Large group presence can diminish the intimate retreat feel for leisure travelers sharing the property"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this archetype under an invented category (\"Extreme Wildlife Enthusiasts\"); its real category is Luxury Adventurers. Complete absence of Big Five predators, open-vehicle bush tracking, or high-intensity game drives directly from the property.",
      supportingSignals: [], mismatchConditions: ["High expectation mismatch if expecting a raw, bush-centric safari dynamic"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Pure Wilderness Purist\") under an invented category (\"Deep Bush Adventurers\"); mapped to The Low-Impact Purist per founder confirmation. Manicured lawns, paved stone pathways, crisp modern architecture, and high-density room counts eliminate the raw \"canvas-under-stars\" feel.",
      supportingSignals: [], mismatchConditions: ["Disappointment with the manicured estate environment and proximity to nearby regional infrastructure"] },
    { fitType: "poorFit", category: "Solo Explorers", archetype: "The Solitary Ascetic", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Solitary Isolationist\") under an invented category (\"Off-Grid Seekers\"); mapped to The Solitary Ascetic per founder confirmation. 135-room resort capacity, active conference facilities, and shared public areas prevent total off-grid wilderness solitude.",
      supportingSignals: [], mismatchConditions: ["Mid-week corporate groups or weekend leisure crowds disrupt desire for complete social isolation"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Source frames this as non-canonical triple value 'Mid-Journey Intermission / Decompression Climax / Jetlag Buffer'; resolved to Recovery per founder confirmation, consistent with the doc's own decompression/self-care language. This is lodge #3 of the Naivasha batch and breaks the Opening Immersion streak (lodges #1 and #2 were both Opening Immersion). Naivasha tally: Opening Immersion x2, Recovery x1.",
    whatShouldComeBefore: "A high-intensity, dusty, early-morning safari segment in the Maasai Mara or Northern Kenya (Laikipia/Samburu), or an international long-haul flight into Nairobi.",
    whatShouldComeAfter: "A high-octane predator circuit (if used as an opening buffer) or onward international transit home via Nairobi.",
    emotionalTransitionRationale: "Shifts traveler psychology from hyper-vigilant, early-morning wildlife tracking to slow, self-care-focused physical and mental recovery.",
  },

  narrative: {
    whyChosen: "Enashipai is the reference example for a wellness-resort decompression stop within the Naivasha circuit: a manicured lakeside estate that trades bush tracking for hydrotherapy, spa infrastructure, and complete physical restoration.",
    bestUsedFor: "The client is a burned-out executive, safari-weary traveler needing mid-circuit recovery, a multi-generational family, or an itinerary requiring a low-friction transit buffer between Nairobi and the Mara.",
    lessSuitableFor: "The client demands a raw, canvas-tented wilderness experience, complete social isolation, or direct access to Big Five game drives from their doorstep. Avoid weekend bookings for highly crowd-sensitive clients.",
    journeyPositionNote: "Recovery — a mid-circuit decompression stop that shifts traveler psychology from hyper-vigilant wildlife tracking to slow, self-care-focused restoration.",
    overview: "Enashipai Resort & Spa redefines the Rift Valley travel experience by executing a high-end \"wellness resort\" model rather than a traditional safari narrative. Set on the manicured shores of Lake Naivasha under ancient yellow-fever acacias, the property replaces dusty bush tracking with quiet luxury, hydrotherapy pools, and sophisticated comfort.",
    emotionalFeel: "Meticulously ordered, secure, and effortlessly indulgent. The atmosphere shifts guest psychology from \"surviving the wild\" to total personal restoration, characterized by slow mornings, garden views, and contemplative afternoons.",
    sensorySignature: {
      visual: ["Crisp modern architecture contrasting against organic yellow-fever acacia canopies and sprawling, irrigated green lawns extending to the lakefront"],
      auditory: ["Rich daytime birdsong giving way to the deep, resonant grunts of hippos coming ashore to graze on the lawns at night"],
      olfactory: ["Essential oils drifting from the Siyara Spa mixed with crisp, damp lakeside air"],
    },
    positiveSignals: [
      "Siyara Spa: universally recognized as one of the finest spa and hydrotherapy facilities in East Africa",
      "Executive accommodation enclaves: Fountain Executive rooms and detached villas successfully isolate VIP guests from main resort traffic",
      "Lakeside jetty: private wooden boardwalk providing smooth departures for boat safaris to spot hippos and fish eagles",
      "Culinary variety: high-quality à la carte presentation capable of handling complex cosmopolitan dietary needs",
    ],
    negativeSignals: [
      "Weekend MICE footprint: high corporate and weekend leisure demand can make main dining hubs bustling on Friday/Saturday nights",
      "Lakeside insect swarms: periodic evening lake-fly swarms along the shoreline during seasonal water shifts",
      "Distance from big game: wildlife on-site is limited to birdlife, colobus monkeys, and grazing hippos; predators require transit outside the area",
    ],
    hiddenGems: [
      "The Enashipai Maa Museum — Kenya's first privately registered Maasai museum, housed inside a repurposed historic farmhouse on the property, offering an intellectually rigorous, non-commercialized dive into Maasai history, beadwork, and societal architecture.",
    ],
    signatureMemory: "Stepping out onto the wooden lakeside jetty at sunset with a cocktail in hand, watching fish eagles sweep over Lake Naivasha while hippos surface nearby.",
    expectationManagement: "Guests must realize Enashipai is a manicured, high-end resort property, not a remote tented safari camp. Big game viewing requires travel outside the resort grounds, and weekend stays feature higher social density.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a burned-out executive, safari-weary traveler needing mid-circuit recovery, a multi-generational family, or an itinerary requiring a low-friction transit buffer between Nairobi and the Mara.",
    ],
    doNotRecommendConditions: [
      "The client demands a raw, canvas-tented wilderness experience, complete social isolation, or direct access to Big Five game drives from their doorstep",
      "Avoid weekend bookings for highly crowd-sensitive clients",
    ],
    confidenceLevel: "High", // per source — "High Confidence (When booked mid-week or utilizing Executive room categories)"
    competitiveAdvantage: "Unmatched spa and hydrotherapy infrastructure combined with the highest operational luxury baseline along the Lake Naivasha circuit.",
    mainLimitation: "Weekend MICE/corporate group footprints and lack of big game on-property.",
    positioningSummary: "A sleek, contemporary lakeside wellness oasis on the shores of Lake Naivasha, perfectly engineered for burned-out executives and safari-weary travelers seeking world-class spa rejuvenation and slow, low-intensity decompression.",
  },

  pairings: [
    { pairedEntity: "Ishara or Sala's Camp, Maasai Mara", pairingCategory: "ecosystem", rationale: "Moving from raw savannah predator action into sleek lakeside hydrotherapy creates an ideal energy contrast." },
    { pairedEntity: "Sirikoi Lodge or Lewa Wilderness, Laikipia/Northern Kenya", pairingCategory: "regional", rationale: "Balances rugged, conservation-focused northern tracking with slow water-based relaxation in the Rift Valley." },
    { pairedEntity: "Great Rift Valley Lodge & Golf Resort", pairingCategory: "experience", rationale: "For travelers seeking to pair active sporting/golf elements with Enashipai's wellness focus." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property operational audits", "Field inspections", "Regional geographical mapping", "Swafaris intelligence archives"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};