// data/knowledge-base/mahali-mzuri.ts
export const mahaliMzuri = {
  id: "mahali-mzuri", // NEW lodge, no existing DB record
  name: "Mahali Mzuri",
  country: "Kenya",
  region: "Maasai Mara National Reserve",
  subRegion: "Olare Motorogi Conservancy",
  ecosystem: "Savannah — Elevated Ridge / Valley Amphitheater",
  propertyType: "Ultra-Exclusive Eco-Lodge / Architectural Tented Suites",
  accommodationStyle: "Futuristic canvas tented suites resembling curved sails, suspended over a ridge with private hardwood decks, deep freestanding bathtubs, and panoramic valley views.",
  locationDetail: "Suspended over a ridge in the private Olare Motorogi Conservancy, overlooking a lush valley populated by elephants, hippos, and big cats.",
  nearestGate: "Olare Orok Gate (access to the main Maasai Mara National Reserve)",
  nearestAirstrips: ["Olare Orok Airstrip"],
  accessibilityNotes: "Elevated ridge-line structure connected by long timber decking walkways. Outer suites (Tents 1 and 12) require an inclined 5-minute walk to main guest areas — significant walking distance for guests with mobility restrictions.",
  priceRangeMinUsd: 1600,
  priceRangeMaxUsd: 3500,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra Luxury", // clean match, price midpoint well above $1,200 threshold
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Sasaab, Samburu (ecosystem contrast pairing)",
    "Segera Retreat, Laikipia (regional pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: [ "Elegant", "Social"], // all approved, no change needed
    energyType: ["Luxury Escape", "Wildlife Focus"], // confirmed normalization
    experiencePace: "Moderate", // confirmed normalization from "Balanced"
    comfortPhilosophy: ["Exclusive Luxury", "Comfort Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary, Modern Luxury",
    journeyRole: "Grand Finale", // resolved from doc's internally inconsistent "Mid-Journey Peak / Safari Climax" vs. "Grand Finale / Safari Climax"
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "First-Time Safari Travelers", "Luxury Adventurers"],
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 9, authenticityScore: 8, premiumScore: 10,
    adventureScore: 7, privacyScore: 9, wildlifeExperienceScore: 10,
    culturalImmersionScore: 8, familySuitabilityScore: 9, comfortScore: 10,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "45 min flight Wilson→Olare Orok + 20 min game drive transfer; overland from Nairobi ~5.5–6.5 hours (not recommended for ultra-luxury transfers).",
    seasonalAccessibility: "Open year-round; dry season (July–October) offers optimal predator and Great Migration viewing, green season (November–May) brings lush scenery and birdlife.",
    rainySeasonImpact: "REQUIRES_VERIFICATION — not specified in source beyond general seasonal notes.",
    electricitySystem: "24/7 continuous solar power system backed by generator reserves.",
    powerReliability: "Full in-suite charging facilities for electronics, continuous.",
    waterReliability: "High-pressure hot water systems supplying en-suite showers and deep soaking bathtubs reliably.",
    internetAvailability: "Complimentary Wi-Fi throughout all suites and main guest areas.",
    mobileNetwork: "Good cellular coverage via regional networks.",
    medicalAccess: "On-site first-aid trained personnel; Flying Doctors (AMREF) evacuation via Olare Orok Airstrip.",
    childFriendly: true, // "Very High" per source — Little VIPs program
    mobilityFriendly: false, // Low to Moderate per source — linear ridge layout, 5-min walk for outer suites
    operationalLimitations: [
      "Mesh window panels can trap afternoon heat in dry months (January–February)",
      "Non-traditional architectural aesthetic may not suit clients seeking historic, colonial-style canvas camps",
      "Linear ridge layout requires up to a 5-minute uphill walk along inclined wooden decking for outer suites (Tents 1 and 12) — significant physical strain for guests with severe mobility restrictions",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High-touch, frictionless service, deep relaxation amenities (spa, infinity pool), and serene valley setting provide complete mental decompression.",
      supportingSignals: ["Spa and infinity pool", "Frictionless, high-touch service"],
      mismatchConditions: [] },
    { fitType: "ideal", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Ultra-romantic, dramatic ridge-line architecture, private dining on deck, soaking tubs overlooking elephant routes, and intimate atmosphere.",
      supportingSignals: ["Private deck dining", "Soaking tubs overlooking elephant routes"],
      mismatchConditions: ["Ridge walk from far tents requires minor physical effort"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\") double-tagged across two categories; split per founder decision — delivers front-row big cat viewing with absolute ease, safety, and luxury.",
      supportingSignals: ["Front-row big cat viewing", "Low-vehicle-count conservancy exclusivity"],
      mismatchConditions: ["High price point; too polished for pure traditionalists"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The High-Stamina Budget Explorer\") double-tagged across two categories; split per founder decision — removes any intimidation associated with rugged bush camps while delivering front-row wildlife viewing.",
      supportingSignals: ["Front-row wildlife viewing with absolute ease", "Removes intimidation of rugged bush camps"],
      mismatchConditions: ["High price point; too polished for pure traditionalists"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "Modern architecture, infinity pool, Wi-Fi, and resort-grade luxuries conflict with desires for raw, lantern-lit, traditional canvas bush camping.",
      supportingSignals: [], mismatchConditions: ["Guest feels the experience is too 'commercialized' or resort-like"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "Source is internally inconsistent — 'Mid-Journey Peak / Safari Climax' in the Journey Intelligence section, but 'Grand Finale / Safari Climax' in the Journey Pairing Intelligence section. Resolved to Grand Finale per founder decision: low Intensity Score (5/10), heavy 'effortless pampering' and 'capping off an East African journey' framing throughout the narrative support Grand Finale over a mid-journey positioning.",
    whatShouldComeBefore: "A more rugged or active wilderness segment (e.g., Samburu at Sasaab or Laikipia at Segera Retreat) to create a compelling contrast in landscape and architecture.",
    whatShouldComeAfter: "Direct charter flight to Nairobi for international departure, or a coastal decompression stay at a beach villa in Diani or Watamu.",
    emotionalTransitionRationale: "Moves the traveler from high-focus exploration into effortless, pampering relaxation and high-density predator viewing.",
  },

  narrative: {
    whyChosen: "Mahali Mzuri is the reference example for a Grand Finale: the highest Premium Experience Score (10/10) and Comfort Score (10/10) in the database, delivered through architecturally distinctive suites inside one of East Africa's highest big-cat-density conservancies, designed to send a traveler home at the absolute peak of satisfaction.",
    bestUsedFor: "UHNW individuals, honeymooners, executives, or luxury-first travelers seeking design-forward accommodations, pristine predator viewing without crowds, and flawless service — ideally as the closing chapter of a journey.",
    lessSuitableFor: "Traditional safari purists wanting a rustic, lantern-lit bush camp, or guests with severe mobility restrictions that limit walking on inclined decking.",
    journeyPositionNote: "Grand Finale — positioned as the closing chapter of a journey, following a more rugged or active wilderness segment.",
    overview: "Mahali Mzuri is an ultra-luxurious Virgin Limited Edition tented camp suspended over a dramatic ridge in the private Olare Motorogi Conservancy, featuring 12 curved, sail-like architectural suites with sweeping views across a lush valley populated by elephants, hippos, and big cats.",
    emotionalFeel: "Effortless privilege, security, and tranquil luxury — perched high on the ridge, guests feel elevated above the savannah landscape while remaining visually connected to the wilderness below.",
    sensorySignature: {
      visual: ["Curved sail-like canvas architecture against the blue sky", "Turquoise slit of the infinity pool mirroring the savannah horizon"],
      auditory: ["Distant grunts of hippos from the valley riverbed", "Wind whispering through acacia branches"],
      olfactory: ["Clean savannah breeze mixed with fine leather", "Fresh linens", "High-end spa aromatics"],
    },
    positiveSignals: [
      "Standout modern canvas sail suites with wide wooden decks and panoramic bathtubs",
      "Prime big cat sightings inside a low-vehicle conservancy",
      "Seamless all-inclusive service — tailored dining, fine wines/champagnes, complimentary laundry",
      "Strong local partnership providing direct land lease benefits to Maasai landowners",
    ],
    negativeSignals: [
      "Outer tents (Tents 1 and 12) require a 5-minute uphill trek along wooden walkways",
      "Large mesh window panels can trap sun heat in dry, hot months",
      "Polished resort aesthetic may feel less authentic to traditionalists seeking classic colonial safari setups",
    ],
    hiddenGems: [
      "Stays of 3 nights or longer include full-day pass access to the Maasai Mara National Reserve, allowing guests to experience Great Migration river crossings alongside private conservancy game drives without additional park fees.",
    ],
    signatureMemory: "Soaking in a deep freestanding tub set against the open canvas, watching a herd of elephants cross the valley floor below as sunset lights up the ridge.",
    expectationManagement: "Mahali Mzuri features contemporary architectural design and elevated resort comforts rather than old-fashioned, vintage-canvas safari styling.",
    idealNights: "3-4",
  },

  recommendationNotes: {
    recommendConditions: [
      "UHNW individuals, honeymooners, executives, or luxury-first travelers seeking design-forward accommodations, pristine predator viewing without crowds, and flawless service.",
    ],
    doNotRecommendConditions: [
      "Traditional safari purist wanting a rustic, lantern-lit bush camp",
      "Guests with severe mobility restrictions that limit walking on inclined decking",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Outstanding architectural identity paired with Virgin Limited Edition's service standards and front-row position in the predator-rich Olare Motorogi Conservancy.",
    mainLimitation: "High walking distance along ridge-line deck for outer suites and potential afternoon tent warmth in dry months.",
    positioningSummary: "An ultra-luxurious, architecturally stunning tented oasis perched on a scenic ridge inside the exclusive Olare Motorogi Conservancy, offering high-net-worth travelers an effortless, resort-grade big cat safari experience.",
  },

  pairings: [
    { pairedEntity: "Sasaab, Samburu", pairingCategory: "ecosystem", rationale: "Contrasts dry, dramatic semi-arid landscapes and Samburu culture with the rich green savannah and Maasai traditions of Mahali Mzuri." },
    { pairedEntity: "Segera Retreat, Laikipia", pairingCategory: "regional", rationale: "Itinerary spanning private art collections, wellness, and high-density Mara wildlife." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property specs", "Conservancy management guidelines", "Travel reviews", "Site evaluation logs"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Seasonal room temperature variations during peak heat waves — explicitly flagged as monitored annually in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};