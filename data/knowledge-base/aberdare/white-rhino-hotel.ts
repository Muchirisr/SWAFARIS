// data/knowledge-base/aberdare/white-rhino-hotel.ts
export const whiteRhinoHotel = {
  id: "white-rhino-hotel", // NEW lodge, no existing DB record
  name: "The White Rhino Hotel",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Nyeri County, Central Kenya",
  ecosystem: "Highland urban / Central valley edge (inside the historical perimeter of Nyeri town, near Nyeri Golf Club and the Chania riverine valley)",
  propertyType: "Historic Urban Heritage Hotel / 4-Star Town-Center Hotel",
  accommodationStyle: "Modern contemporary guest rooms, executive suites, and penthouse suites set within an expanded historic hotel estate.",
  locationDetail: "Nyeri town center, adjacent to Nyeri Golf Club and the Chania riverine valley.",
  nearestGate: "Aberdare National Park Gates (Wandare / Kiandongoro Gate ~30–45 minutes drive); Solio Game Reserve Gate (~30–40 minutes drive)",
  nearestAirstrips: ["Nyeri Airport / Nyaribo Airstrip (NYE)", "Mweiga Airstrip", "Nanyuki Airstrip (NYK)"],
  accessibilityNotes: "Accessible year-round via main paved highways into Nyeri town center. Smooth tarmac vehicle access directly to property entrance.",
  priceRangeMinUsd: 90,
  priceRangeMaxUsd: 160,
  rawMarketTier: "Budget Premium", // as stated in source doc — not a real tier label, preserved verbatim
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price midpoint ($125) falls in the Value band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Solio Game Reserve",
    "Aberdare National Park",
    "Samburu National Reserve",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Rustic", "Social"], // all valid canonical values, no correction needed
    energyType: ["Family Connection", "Cultural Discovery", "Transit Convenience"], // "High-energy safari" and "Sensory-rich" both non-canonical; replaced per founder decision — Transit Convenience justified by doc's explicit "1-Night Transit Pivot" / "frictionless urban basecamp" framing
    experiencePace: "Balanced",
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Classic Safari Elegance", // founder-confirmed: genuine 1910 National Heritage Site status, no documented wear/aging signals (unlike Outspan) — accuracy favored over conservative-tier bridging
    journeyRole: "Opening Immersion", // resolved directly — "Itinerary Practical Opener or 1-Night Transit Pivot" describes one concept, not a genuine either/or between distinct canonical values
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Solo Explorers"], // CORRECTED: "Business-Hybrid / Overland Road-Trippers" dropped — not a real category, its sole supporting archetype (Tactical Overland Road-Tripper) was invented and dropped
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 6, authenticityScore: 8, premiumScore: 7,
    adventureScore: 4, privacyScore: 4, wildlifeExperienceScore: 2,
    culturalImmersionScore: 7, familySuitabilityScore: 8, comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3 to 3.5 hours overland from Nairobi (150 km); 20 minutes road transfer from Nyaribo/Nyeri airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Cold highland climate produces chilly evenings; heavy complementary blankets and tea/hot water services provided. Digital navigation mapping occasionally misdirects to secondary entrances.",
    electricitySystem: "24/7 continuous mains electricity supply backed by full-capacity automated commercial generator systems.",
    powerReliability: "High",
    waterReliability: "Pressurized hot water infrastructure with in-room water heating jugs and hot tubs/baths in upgraded suite units.",
    internetAvailability: "Complimentary high-speed Wi-Fi throughout guest rooms, conference halls, and public areas.",
    mobileNetwork: "Excellent Safaricom/Airtel cellular coverage.",
    medicalAccess: "Exceptional urban access — minutes from Outspan Hospital and Consolata Hospital Nyeri for emergency medical services.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "Moderate to High" per source — elevator access, paved flat paths, ramped public areas
    operationalLimitations: [
      "Acoustic noise bleeding into certain room blocks on weekends from on-site nightclub/bar events",
      "Occasional housekeeping delays during peak Christmas/holiday blocks",
      "Urban town-center context without wilderness surroundings",
      "Digital navigation mapping occasionally misdirects self-drive vehicles to secondary entrances",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Provides a frictionless, high-comfort urban landing pad on Night 1 to absorb flight fatigue and organize gear before entering raw game reserves.",
      supportingSignals: ["Massive, comfortable room footprints", "Secure town-center positioning", "Zero-friction tarmac access"],
      mismatchConditions: ["Must accept that wild animals are not on-site and game drives require day-trip drives to Solio or Aberdares"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Families with Children\"; corrected to the canonical category, Families. Fit: rare safari-circuit family infrastructure including an indoor kids' club, outdoor playground, nanny services, and safe manicured lawns for active children.",
      supportingSignals: ["Indoor kids' club and outdoor playground", "Dedicated nanny services", "Multi-bedroom suite configurations"],
      mismatchConditions: ["Weekend nightlife acoustics require requesting quiet room blocks away from the main bar"] },
    { fitType: "ideal", category: "Solo Explorers", archetype: "The Social Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Solo Explorers & Business-Hybrid Travelers\"; corrected to the canonical category, Solo Explorers. Fit: vibrant social atmosphere, multi-venue dining, lively terrace bars, and easy urban access to Nyeri town culture.",
      supportingSignals: ["Multi-venue dining and lively terrace bars", "Easy urban access to Nyeri town culture", "Vibrant social evening atmosphere"],
      mismatchConditions: ["Lack of solitary wilderness isolation for those seeking quiet retreat"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "Bustling town-center setting, corporate conference traffic, and weekend bar noise undermine romantic isolation and intimate quietude.",
      supportingSignals: [], mismatchConditions: ["Absence of private plunge pools, panoramic wilderness views, or secluded romantic atmosphere"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Burned-out Executives / Wilderness Purists\"; corrected to the canonical category, Burned-out Executives. Urban town-center noise, conference events, and on-site weekend nightclub events prevent complete acoustic isolation and deep mental decompression.",
      supportingSignals: [], mismatchConditions: ["Disappointment caused by town-center hustle and acoustic bleed rather than deep bush tranquility"] },
    // DROPPED: "The Tactical Overland Road-Tripper" under invented category "Value-Seeking Explorers" — not a real archetype; underlying "frictionless logistics" concern captured at Energy Type layer via Transit Convenience instead
    // DROPPED: "Deep-Bush Safari Purists" (incompatible) — not a real archetype or category; underlying concern already fully captured in narrative.expectationManagement and the Checklist Maximalist mismatchConditions
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Itinerary Practical Opener or 1-Night Transit Pivot\" — both phrases describe the same frictionless-entry concept rather than genuinely distinct canonical values, and neither ecosystem-bridging language nor a real either/or is present. Resolved directly to Opening Immersion. REGIONAL TALLY (Aberdare sub-phase, FINAL 7/7): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x4 (Treetops Lodge, Rhino Watch Safari Lodge, Bantu Africa Resort, this lodge), Recovery x1 (Outspan Hotel Nyeri), Grand Finale x1 (Le Pristine Hotel). Opening Immersion at 4/7 (57%) is the region's plurality role but does not meet the Amboseli-level concentration threshold (6/7, 86%) that would trigger a cross-region audit.",
    whatShouldComeBefore: "Arrival in Nairobi after international flight transit, or overland driving from southern/central transit nodes.",
    whatShouldComeAfter: "High-intensity wilderness safari segments (e.g., Solio Game Reserve, Aberdare National Park, or Samburu National Reserve).",
    emotionalTransitionRationale: "Transitions international travelers smoothly from urban travel anxiety into Central Circuit safari logistics with total physical security.",
  },

  narrative: {
    whyChosen: "A polished, historically rooted urban basecamp offering a frictionless, family-capable 1-night entry point into the Central Circuit, backed by genuine 1910 heritage status.",
    bestUsedFor: "First-time safari travelers absorbing flight fatigue before entering game reserves, families needing rare town-center child infrastructure, and solo/social travelers wanting vibrant evening atmosphere.",
    lessSuitableFor: "Luxury honeymooners, burned-out executives, or bush-purists seeking deep wilderness isolation, absolute nocturnal silence, or panoramic reserve views.",
    journeyPositionNote: "Opening Immersion — a frictionless urban entry point absorbing international travel fatigue before the traveler moves into Central Circuit wilderness segments.",
    overview: "The White Rhino Hotel functions as a polished, highly efficient historical urban basecamp anchored directly within Nyeri's administrative footprint. The overarching atmosphere trades the untamed raw wilderness for a secure, comfortable, and bustling town-center estate.",
    emotionalFeel: "Reliable, secure, and socially warm. The rhythm transitions from an orderly, business-focused environment during the day to a vibrant, warm social hub by night.",
    sensorySignature: {
      visual: ["Expanded historic colonial main structure", "Manicured internal lawns buffering urban surroundings", "Spacious modern suite interiors"],
      auditory: ["Distant urban town ambiance blended with highland birdsong on the lawn", "Shifting to lively evening terrace music"],
      olfactory: ["Wood-fired pizza smoke from the garden terrace", "Fresh highland mountain air", "Hot evening cocoa aromatics"],
    },
    positiveSignals: [
      "Overwhelming praise for room size, especially Executive and Suite tiers, and exceptionally comfortable beds",
      "Attentive service, rapid response times, and warm handling of children during family dining",
      "Safe urban access to the Baden-Powell museum, Nyeri Golf Club, and smooth highway positioning",
      "Proactive cold-weather touches — quality water jugs, tea/cocoa arrays, and heavy extra blankets",
    ],
    negativeSignals: [
      "On-site nightclub bar with live DJ events causing acoustic bleed into certain room blocks on weekends",
      "Quality control bottlenecks during peak holiday seasons leading to slower housekeeping response",
      "Map coordinates occasionally directing self-drive vehicles to secondary or unrefined entrance gates",
    ],
    hiddenGems: [
      "Rare urban-safari family infrastructure — while deep-bush luxury camps struggle to accommodate young children due to wildlife hazards and spatial limits, The White Rhino features an indoor kids' club, outdoor playgrounds, and nanny services, providing a secure play environment for multi-generational families before or after bush excursions.",
    ],
    signatureMemory: "Relaxing on the heated dining terrace enjoying fresh wood-fired pizza in the crisp highland evening air, wrapped in a warm blanket before retiring to an expansive executive suite.",
    expectationManagement: "Travelers must understand this is a historic 4-star town-center hotel located inside Nyeri town, not a secluded bush camp with wild animals roaming the grounds.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Value-seeking premium guest, business-hybrid explorer, or family with small children requiring town conveniences",
      "Overland road-tripper needing a reliable 1-night tarmac-accessible stopover in the Central Circuit",
    ],
    doNotRecommendConditions: [
      "Luxury honeymooners, bush-purists, or executives seeking deep wilderness isolation",
      "Traveler requires absolute nocturnal silence or panoramic reserve views",
    ],
    confidenceLevel: "Medium to High", // per source
    competitiveAdvantage: "Massive room footprints, rich 1910 historical heritage, and dedicated family infrastructure at a town-hotel price point.",
    mainLimitation: "Town-center urban positioning and weekend evening bar noise.",
    positioningSummary: "A historic, highly reliable 4-star town-center hotel in Nyeri that combines massive, comfortable modern rooms with excellent family amenities, serving as a frictionless urban basecamp for regional safari excursions.",
  },

  pairings: [
    { pairedEntity: "Samburu National Reserve", pairingCategory: "ecosystem", rationale: "Transitioning from a chilly highland town hotel directly into the hot, dusty, uncontained wilderness of Samburu creates an invigorating energetic progression." },
    { pairedEntity: "Solio Game Reserve", pairingCategory: "regional", rationale: "Pairs day-trip rhino tracking at Solio with town-center dining, hot baths, and family amenities at The White Rhino." },
    { pairedEntity: "Aberdare National Park", pairingCategory: "experience", rationale: "Pairs high-altitude waterfall hikes in Aberdare with town-center dining and family amenities as a comfortable basecamp." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Property operational specs", "Regional historical archives", "Verified guest feedback aggregations"],
    confidenceLevel: "Verified Experiential Property Profile",
    verificationRequirements: [
      "Room block noise isolation mapping for weekend DJ events — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};