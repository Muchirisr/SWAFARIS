// data/knowledge-base/samburu/ashnil-samburu-camp.ts
export const ashnilSamburuCamp = {
  id: "ashnil-samburu-camp", // NEW lodge, no existing DB record
  name: "Ashnil Samburu Camp",
  country: "Kenya",
  region: "Samburu",
  subRegion: "Buffalo Springs Game Reserve",
  ecosystem: "Semi-Arid Riverine Woodland / Ewaso Nyiro River Basin / Acacia-Commiphora Scrubland",
  propertyType: "Tented Safari Resort / Mid-Range Tented Lodge",
  accommodationStyle: "Hexagonal canvas tents mounted on raised wooden platforms with thatched/canvas shelter structures and private riverfront decks.",
  locationDetail: "Southern bank of the Ewaso Nyiro River within Buffalo Springs Game Reserve.",
  nearestGate: "Ngare Mara Gate (~12 km / 15 minutes drive) / Archer's Gate (Samburu Reserve crossover)",
  nearestAirstrips: ["Buffalo Springs Airstrip (~12 km / 15–20 minutes drive)", "Kalama Airstrip", "Isiolo Airport"],
  accessibilityNotes: "Accessible year-round by 4x4 or 2WD via paved highway and unpaved reserve tracks; flat, paved pathways connect main public areas.",
  priceRangeMinUsd: 350,
  priceRangeMaxUsd: 650,
  rawMarketTier: "Mid-range", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium", // CORRECTED: price midpoint ($500) sits at the Premium band floor ($500–799), overriding self-reported Mid-range
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Lewa Wilderness",
    "Borana Lodge",
    "Maasai Mara boutique tented camp",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Social", "Wild"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); Social/Wild valid as-is
    energyType: ["Wildlife Focus", "Nature Immersion"], // valid as-is, no correction needed — first lodge in the project where Energy Type required zero correction
    experiencePace: "Moderate", // valid as-is, no correction needed
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // CORRECTED: "Contemporary" alone non-canonical; resolved to Contemporary Comfort given the resort-architecture framing (structured buffet, paved paths, standardized commercial layout)
    journeyRole: "Opening Immersion", // stated directly, no hedge, no correction needed
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Luxury Adventurers"], // matches supported archetype categories exactly, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 5, authenticityScore: 6, premiumScore: 7,
    adventureScore: 6, privacyScore: 3, wildlifeExperienceScore: 8,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5.5–6.5 hours overland from Nairobi (320–345 km); 45–60 minutes flight from Wilson Airport (WIL) plus 15–20 minute vehicle transfer from Buffalo Springs Airstrip.",
    seasonalAccessibility: "Open year-round; semi-arid climate ensures reliable track navigation.",
    rainySeasonImpact: "Heavy seasonal rains (April–May, November) can cause Ewaso Nyiro River swells, restricting riverbed crossings or obscuring low-lying river views.",
    electricitySystem: "Generator-backed power grid supplemented by battery invertors.",
    powerReliability: "24-hour, with scheduled generator conservation adjustments during off-peak low-season periods.",
    waterReliability: "Central/solar water heating system delivering continuous hot showers with reliable water pressure.",
    internetAvailability: "Free Wi-Fi available in central public lounge and restaurant areas.",
    mobileNetwork: "Cellular data network coverage (Safaricom/Airtel) accessible across camp.",
    medicalAccess: "On-site basic first aid kit and resident medical nurse; emergency air-evacuation via AMREF Flying Doctors out of Buffalo Springs Airstrip.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: true, // "High" per source, unambiguous
    operationalLimitations: [
      "Sound transfer between adjacent canvas tents",
      "Fixed buffet dining schedules during peak hours",
      "Habituated baboon/monkey populations requiring sealed tent zipping",
      "Seasonal vegetation obscuring river views from select lower-tier tent positions",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "High",
      reasoning: "Level, paved pathways allow older grandparents to navigate easily, while the central swimming pool and constant riverfront elephant sightings keep children entertained without long vehicle drives.",
      supportingSignals: ["Level, paved pathways", "Central swimming pool", "Constant riverfront elephant sightings"],
      mismatchConditions: ["Must navigate shared buffet dining rooms and potential acoustic noise from nearby tents"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Sensory Overwhelmed", matchStrength: "High",
      reasoning: "Softens the harshness and isolation of northern Kenya with recognizable resort infrastructure, reliable hot water, ceiling fans, and proactive human service.",
      supportingSignals: ["Recognizable resort infrastructure", "Reliable hot water and ceiling fans", "Proactive human service"],
      mismatchConditions: ["Lack of hyper-exclusive privacy or fluid, bespoke dining schedules"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "High",
      reasoning: "Guarantees high-density, immediate sightings of Samburu Special Five and river-crossing elephant herds with predictable, structured daily game drives.",
      supportingSignals: ["High-density Samburu Special Five sightings", "River-crossing elephant herds", "Predictable, structured daily game drives"],
      mismatchConditions: ["High vehicle density on public reserve tracks during peak season"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Moderate",
      reasoning: "Serves as a reliable, high-impact 2-night entry anchor into Samburu before scaling up into exclusive private conservancies in Laikipia or Mara.",
      supportingSignals: ["High-impact entry anchor for a broader itinerary", "Reliable operational infrastructure"],
      mismatchConditions: ["Utilitarian resort scale fails to meet ultra-luxury expectations if positioned as a standalone stay"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Low",
      reasoning: "Close tent proximity, thin canvas acoustic transmission, and high-volume buffet dining eliminate romantic privacy and quiet isolation.",
      supportingSignals: [], mismatchConditions: ["Acoustic bleed between adjacent tents and bustling communal spaces destroy romantic intimacy"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Low",
      reasoning: "High social density, structured meal hours, and active tour group presence directly conflict with requirements for silent psychological recovery and solitude.",
      supportingSignals: [], mismatchConditions: ["Inability to achieve quiet, uninterrupted reflection due to social resort dynamics and noisy tent neighbors"] },
    { fitType: "poorFit", category: "Slow Travelers", archetype: "The Creative Resident", matchStrength: "Low",
      reasoning: "Commercial resort rhythms, fixed dining windows, and high guest turnover interrupt long-form, contemplative immersion.",
      supportingSignals: [], mismatchConditions: ["Structured, high-volume environment limits personal autonomy and quiet creative focus"] },
    // NO DROPS OR REMAPS NEEDED — fully clean traveler-match section, matching Laragai House's clean record; all archetypes correctly named and correctly categorized in the source
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Journey Role stated directly as 'Opening Immersion' with no hedge — no correction needed. REGIONAL TALLY (Samburu sub-phase, lodge 3/3 so far): Opening Immersion x3 — 100% concentration across all three lodges so far. Too early relative to the 86% audit threshold to assess meaningfully with only three lodges, but this is now a clear pattern worth tracking as the sub-phase grows.",
    whatShouldComeBefore: "Direct overland arrival from Nairobi (5.5–6.5 hours) or a short flight from Wilson Airport. Serves as the high-impact, accessible entry point to northern Kenya.",
    whatShouldComeAfter: "Transition to an ultra-exclusive private conservancy in Laikipia (e.g., Lewa or Borana) or an intimate, boutique tented camp in the Maasai Mara for an elevated, hushed finale.",
    emotionalTransitionRationale: "Converts transit fatigue into immediate visual excitement via riverfront elephant encounters while grounding guests with familiar resort comforts.",
  },

  narrative: {
    whyChosen: "A reliable, accessible resort camp delivering front-row riverfront elephant spectacles and structured comfort, positioned as a high-impact, low-anxiety entry point to northern Kenya.",
    bestUsedFor: "Matching multi-generational families, first-time safari goers, or small groups who require high-impact wildlife visuals, pool amenities, level walking paths, and reliable infrastructure in a wild setting.",
    lessSuitableFor: "Honeymooners, ultra-high-net-worth travelers, or burned-out executives requiring silent solitude, private plunge pools, and flexible fine dining.",
    journeyPositionNote: "Opening Immersion — a high-impact, low-anxiety entry point to northern Kenya's wildlife.",
    overview: "Ashnil Samburu Camp is a structured, 30-tent safari resort positioned along the southern bank of the Ewaso Nyiro River within Buffalo Springs Game Reserve. It balances the raw, semi-arid wilderness of northern Kenya with the security and comfort of a contemporary resort. Featuring hexagonal canvas tents on raised wooden platforms, paved access pathways, and a central riverfront swimming pool, it offers an accessible, highly visual safari base.",
    emotionalFeel: "Socially vibrant, grounded, and visual. The internal atmosphere feels like a secure riverfront oasis where guests gather around the pool deck during hot midday hours and convene in an energetic, bustled dining room for meals.",
    sensorySignature: {
      visual: ["High-contrast views of brown river waters against turquoise pool water", "Sun-baked red earth", "Elephants mud-bathing at the riverbank"],
      auditory: ["Rushing Ewaso Nyiro currents", "Vervet monkey chatter", "Evening cicada hums", "Ambient guest conversation in public zones"],
      olfactory: ["Sun-warmed acacia wood", "Dry river dust", "Damp canvas"],
    },
    positiveSignals: [
      "Front-row positioning on an active river bend offers passive, up-close observation of drinking and mud-bathing elephant herds",
      "Consistent hot water pressure, powerful ceiling fans, and immaculate cleanliness across all canvas units",
      "Warm, attentive local staff who accommodate special dietary requests and adapt pool hours for families",
      "Flat pathways and paved connections make navigating camp effortless for multi-generational travelers",
    ],
    negativeSignals: [
      "Canvas construction and consecutive linear placement lead to sound transmission between neighboring tents",
      "Fixed buffet mealtimes can feel rigid or institutional for luxury travelers seeking fluid flexibility",
      "Habituated baboon and monkey populations require constant tent zipping and deck vigilance",
      "Vegetation growth and riverbank topography partially block water views from certain rear or lower-tier tents",
    ],
    hiddenGems: [
      "The central swimming pool overlooks the Ewaso Nyiro riverbed directly. During midday heat when game drives pause, guests can swim while watching Reticulated giraffes, Beisa oryx, and elephants come down to drink, eliminating the traditional 'midday safari slump.'",
    ],
    signatureMemory: "Lounging by the pool with a cold drink as a herd of twenty elephants emerges from the acacia scrub and crosses the river directly in front of camp.",
    expectationManagement: "Travelers must understand this is a mid-scale 30-tent resort camp. Sound travels through canvas walls, dining is structured buffet style, and baboons will inspect unzipped tents.",
    idealNights: "2 to 3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Matching multi-generational families, first-time safari goers, or small groups who require high-impact wildlife visuals",
      "Client wants pool amenities, level walking paths, and reliable infrastructure in a wild setting",
    ],
    doNotRecommendConditions: [
      "Curating for honeymooners, ultra-high-net-worth travelers, or burned-out executives requiring silent solitude",
      "Clients needing private plunge pools and flexible fine dining",
    ],
    confidenceLevel: "High Confidence for Families and First-Time Travelers; Low Confidence for Honeymooners and Solitude Seekers", // per source
    competitiveAdvantage: "Premier riverfront position in Buffalo Springs combined with full resort amenities (swimming pool, paved paths, 30-tent capacity) at an accessible mid-range price point.",
    mainLimitation: "Acoustic privacy limitations due to linear tent spacing and structured, high-volume buffet dining.",
    positioningSummary: "A reliable, highly accessible contemporary tented resort delivering front-row riverfront elephant spectacles and structured comfort in Northern Kenya's Buffalo Springs Reserve.",
  },

  pairings: [
    { pairedEntity: "Lewa Wilderness", pairingCategory: "regional", rationale: "Part of the Buffalo Springs/Samburu → Laikipia Conservancy → Maasai Mara regional sequencing arc." },
    { pairedEntity: "Borana Lodge", pairingCategory: "regional", rationale: "Alternative Laikipia Conservancy pairing continuing the regional sequencing arc toward the Mara." },
    { pairedEntity: "Maasai Mara boutique tented camp", pairingCategory: "ecosystem", rationale: "Combines Samburu's semi-arid, dust-red riverine landscape with the rolling grass plains of the Maasai Mara for an elevated, hushed finale." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Regional geographical surveys", "Operator specifications", "Field inspections", "Road access logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Off-peak generator conservation schedule specifics — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};