// data/knowledge-base/laikipia/loisaba-tented-camp.ts
export const loisabaTentedCamp = {
  id: "loisaba-tented-camp", // NEW lodge, no existing DB record
  name: "Loisaba Tented Camp",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Loisaba Conservancy, Northern Kenya",
  ecosystem: "Semi-Arid Wilderness / Escarpment & Acacia Scrub / High-Plateau Ecosystem",
  propertyType: "Ultra-Luxury Tented Camp",
  accommodationStyle: "Sleek, modern European-Africana custom canvas tents built on raised wooden platforms with floor-to-ceiling zip-away mesh fronts.",
  locationDetail: "Perched on a high cliff escarpment within Loisaba Conservancy, Northern Kenya.",
  nearestGate: "Main Loisaba Conservancy Entry Point",
  nearestAirstrips: ["Loisaba Airstrip (~15 minutes drive)"],
  accessibilityNotes: "Accessible year-round via scheduled/charter flights; perched on a high cliff escarpment with elevated boardwalks and steps.",
  priceRangeMinUsd: 1400,
  priceRangeMaxUsd: 2400,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED: price midpoint ($1,900) falls firmly in the Ultra-Luxury band ($1,200+) — no correction needed
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Elsa's Kopje (Meru)",
    "Samburu Intrepids",
    "Sand River Masai Mara",
    "Loisaba Star Beds",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Elegant", "Exploratory", "Peaceful"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Exhilarating Tranquility" (invented compound) → Peaceful
    energyType: ["Nature Immersion", "Luxury Escape", "Photography"], // CORRECTED: "Immersive Nature" reworded to canonical "Nature Immersion"; "Quiet Luxury" → Luxury Escape; "High-Vantage Perspective" (invented) → Photography per founder decision, given the property's photographic-viewpoint identity
    experiencePace: "Moderate", // CORRECTED: "Balanced" non-canonical
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Modern Luxury", // CORRECTED: "Contemporary Luxury | Eco-Luxury" non-canonical; founder chose Modern Luxury over Ultra-Exclusive Sanctuary — genuine either/or, no price downgrade occurred so conservatism principle didn't force the choice
    journeyRole: "Opening Immersion", // resolved directly — "Adventure Transition" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Luxury Adventurers"], // CORRECTED: "Design-Conscious Travelers" and "Multi-Generational Luxury Families" dropped — neither is a real category, and no archetype in the compatible list supported either one
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 9, authenticityScore: 8, premiumScore: 9,
    adventureScore: 8, privacyScore: 8, wildlifeExperienceScore: 7,
    culturalImmersionScore: 7, familySuitabilityScore: 8, comfortScore: 9.5,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "1-hour flight from Wilson Airport (Nairobi) to Loisaba Airstrip, followed by a 15-minute scenic road transfer to camp.",
    seasonalAccessibility: "Open year-round; elevated escarpment position ensures excellent drainage during rainy seasons.",
    rainySeasonImpact: "Minimal, though seasonal shifts (April–May & November) bring strong winds across the cliff edge.",
    electricitySystem: "24-hour solar photovoltaic power system backed up by silent generators.",
    powerReliability: "Continuous",
    waterReliability: "24-hour solar-heated running hot water, supported by secondary heating backup systems.",
    internetAvailability: "Complimentary high-speed Wi-Fi throughout the main mess lounge, infinity pool area, and private tented suites.",
    mobileNetwork: "High-strength Safaricom cellular coverage across elevated points.",
    medicalAccess: "On-site certified first-aid trained personnel; AMREF Flying Doctors emergency air-evacuation available from Loisaba Airstrip.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: false, // "Moderate to Low" per source, plus explicit "Not fully wheelchair accessible" statement, founder-confirmed
    operationalLimitations: [
      "High wind exposure during seasonal weather transitions causing canvas movement/flapping",
      "Diffused game density compared to hyper-dense parks like the Maasai Mara",
      "Stone pathways, wooden decking, and steps between mess areas, pool, and guest tents; not fully wheelchair accessible",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "The omniscient clifftop detachment and vast, unbound horizon serve as an immediate psychological antidote to urban claustrophobia. High relaxation score (9/10) allows deep mental reset.",
      supportingSignals: ["Cliff-edge escarpment isolation", "Widely spaced private tents", "Vast, unbound horizon views"],
      mismatchConditions: ["Must accept open canvas living and subtle ambient wind sounds"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "High",
      reasoning: "Unobstructed Mount Kenya views, sleek open-plan tents, cliff-hanging infinity pool, and private dining options create a romantic, high-end sanctuary.",
      supportingSignals: ["Cliff-hanging infinity pool", "Private dining options", "Unobstructed Mount Kenya panoramas"],
      mismatchConditions: ["Corporate resort efficiency means service is polished rather than eccentric or owner-hosted"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Combines top-tier physical comfort with unconventional active options like E-biking escarpments, camel riding, and walking alongside the canine anti-poaching team.",
      supportingSignals: ["Camel trekking", "Mountain biking/E-bikes", "Anti-poaching canine tracking", "Night game drives"],
      mismatchConditions: ["Hardcore wildlife purists may find game tracking loops longer than in high-volume predator hubs"] },
    // DROPPED: all three source-listed incompatible archetypes were invented, not real ("The Purist Predator Tracking Specialist", "The Homestead Story Seeker", "The Noise-Sensitive Light Sleeper") — none had a genuine real-archetype equivalent; underlying concerns (diffused wildlife density, corporate polish vs. homestead warmth, wind noise) already captured in narrative.negativeSignals and operationalIntelligence.operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "3 Nights (or 2 Nights Tented Camp + 1 Night Star Beds)",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion (or Adventure Transition)\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Laikipia sub-phase, lodge 5/5 so far): Opening Immersion x4, Adventure Peak x1 — Opening Immersion at 80% (4/5), still below the Amboseli audit threshold of 86% but the closest the sub-phase has come; continuing to monitor.",
    whatShouldComeBefore: "Direct arrival via flight from Nairobi (Wilson) as the ultimate trip opener, or following a dense, hot, low-lying lowland park (like Samburu or Meru).",
    whatShouldComeAfter: "High-density predator hubs like the Maasai Mara (e.g., Sand River Masai Mara) or a relaxing coastal exit (e.g., Alfajiri Villas or Diani Beach).",
    emotionalTransitionRationale: "Captures an immediate 'I am in Africa' emotional peak via jaw-dropping landscape scale, easing the traveler into a high-baseline luxury rhythm before moving to vehicle-heavy game hubs.",
  },

  narrative: {
    whyChosen: "A visually striking, architecturally elegant clifftop camp offering an immediate emotional peak and diverse active pursuits, positioned as a seamless, low-friction trip opener.",
    bestUsedFor: "Design-conscious luxury travelers, honeymooners, or families who want a sleek, modern, visually stunning camp with low logistics fatigue, epic views, and diverse active pursuits.",
    lessSuitableFor: "Clients who demand high-volume predator action within minutes of leaving camp, require owner-hosted homestead hospitality, or are light sleepers highly sensitive to nocturnal wind noise.",
    journeyPositionNote: "Opening Immersion — an instant visual and emotional peak before higher-density game-viewing legs.",
    overview: "Loisaba Tented Camp is an exercise in high-vantage perspective and contemporary style. Perched high above a vital elephant migration corridor, the property trades on a sense of infinite space. It shuns heavy, dark, colonial-era safari tropes in favor of an airy, modern European-Africana aesthetic. Large custom-built tents feature massive mesh fronts that invite the dramatic Laikipia landscape right to the foot of the bed.",
    emotionalFeel: "Exhilarating tranquility — awe that quickly settles into a deep, meditative calm. Bright, crisp, and breezy by day; profoundly vast and star-heavy by night.",
    sensorySignature: {
      visual: ["Unobstructed Mount Kenya panoramas", "Cliff-edge infinity pool reflection", "Custom wooden architecture", "Sweeping valley floors below"],
      auditory: ["Escarpment breezes through canvas", "Distant elephant rumbles from the valley", "Nighttime cricket choruses", "Morning bird calls"],
      olfactory: ["Fresh high-altitude mountain air", "Dry cedar wood", "Warm leather", "Wild sage"],
    },
    positiveSignals: [
      "Sweeping, unobstructed panorama toward Mount Kenya defines the property experience",
      "Cliff-hanging infinity pool offers one of the premier photographic and relaxing spots in East Africa",
      "High ceilings, dark wood floors, and floor-to-ceiling zip-away mesh fronts",
      "Camel riding, mountain biking, horse riding, and anti-poaching dog tracking break up standard vehicle safari routines",
      "~15-minute drive from Loisaba Airstrip minimizes transfer friction",
    ],
    negativeSignals: [
      "Exposed clifftop location can result in strong seasonal winds causing canvas flapping",
      "Game is scattered across vast conservancy terrain, requiring strategic tracking, and is lower density than the Mara",
      "Managed under Elewana Collection; service is flawless but acts more as a high-end boutique resort than a family bush home",
    ],
    hiddenGems: [
      "Access to the conservancy's dedicated anti-poaching canine unit offers an authentic, raw tracking demonstration rather than a staged show. Visiting the property's integrated livestock ranch showcases how luxury tourism, pastoralism, and wildlife conservation mutually thrive.",
    ],
    signatureMemory: "Unzipping the entire front mesh wall of your tent at dawn to watch the morning light illuminate Mount Kenya across the valley without leaving your bed, followed by coffee on your private deck as elephants trek far below.",
    expectationManagement: "Travelers should be briefed that Loisaba is about vast landscape scale, architectural elegance, and multi-modal freedom. It is not an old-school colonial lodge, nor is it a high-density game circus where predators appear every five minutes.",
    idealNights: "3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Design-conscious luxury travelers, honeymooners, or families want a sleek, modern, visually stunning camp with low logistics fatigue",
      "Client wants epic views and diverse active pursuits (camels, bikes, dogs)",
    ],
    doNotRecommendConditions: [
      "Clients demand high-volume predator action within minutes of leaving camp",
      "Require owner-hosted homestead hospitality, or are light sleepers highly sensitive to nocturnal wind noise",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unmatched elevated topography, gold-standard Mount Kenya views, seamless air-to-camp logistics, and access to the broader Elewana Collection circuit.",
    mainLimitation: "Wind exposure on the escarpment and more diffused wildlife density relative to southern reserves.",
    positioningSummary: "A visually stunning, contemporary eco-luxury camp perched high on a Laikipia escarpment, offering panoramic Mount Kenya views and diverse, active adventures for travelers seeking sleek comfort and unbound horizons.",
  },

  pairings: [
    { pairedEntity: "Elsa's Kopje (Meru)", pairingCategory: "ecosystem", rationale: "Moving from the hot, rugged, dense lowland bush of Meru to the high-altitude, breezy escarpment of Loisaba provides exceptional microclimate contrast." },
    { pairedEntity: "Samburu Intrepids", pairingCategory: "ecosystem", rationale: "Moving from the hot, rugged, dense lowland bush of Samburu to the high-altitude, breezy escarpment of Loisaba provides exceptional microclimate contrast." },
    { pairedEntity: "Sand River Masai Mara", pairingCategory: "regional", rationale: "Moves guests seamlessly from the vast, active landscapes of Laikipia into high-density Big Cat action in the Mara via an all-Elewana air handoff." },
    { pairedEntity: "Loisaba Star Beds", pairingCategory: "experience", rationale: "Split a 3-night stay: 2 nights at Loisaba Tented Camp for architectural luxury, paired with 1 night sleeping under the open sky on raised wooden platforms." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Elewana Collection operational specifications", "Loisaba Conservancy field records", "Regional travel intelligence logs", "Property architectural profiles"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Specific seasonal canine unit training schedule adjustments — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};