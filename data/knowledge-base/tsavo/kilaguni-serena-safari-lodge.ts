// data/knowledge-base/tsavo/kilaguni-serena-safari-lodge.ts
export const kilaguniSerenaSafariLodge = {
  id: "kilaguni-serena-safari-lodge", // NEW lodge, no existing DB record
  name: "Kilaguni Serena Safari Lodge",
  country: "Kenya",
  region: "Tsavo",
  subRegion: "Tsavo West National Park",
  ecosystem: "Volcanic plains / Chyulu Hills foothills / Semi-arid savannah",
  propertyType: "Heritage Luxury Lodge / Corporate Resort",
  accommodationStyle: "Chiseled black volcanic stone cottages and a two-storey block featuring natural wood hardwoods, all with private balconies overlooking the central waterhole or Chyulu Hills.",
  locationDetail: "Central Tsavo West National Park, facing the Chyulu Hills.",
  nearestGate: "Mtito Andei Gate (approx. 30 km / 30–40 minutes drive)",
  nearestAirstrips: ["Kilaguni Airstrip (approx. 5–10 minutes drive / <1 km)"],
  accessibilityNotes: "Accessible year-round. Short transfer from the airstrip or Mtito Andei gate minimizes deep off-road driving to reach the lodge. 4x4 vehicles are recommended for interior park road game drives.",
  priceRangeMinUsd: 300,
  priceRangeMaxUsd: 550,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // CORRECTED: price midpoint ($425) falls in the Mid-Range band ($300–499), overriding self-reported Premium
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Taita Hills private conservancy camp",
    "Boutique camp in Tsavo East (Yatta Plateau)",
    "Diani Beach or Watamu (Kenyan Coast)",
    "Finch Hattons (Tsavo West)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Peaceful", "Elegant"], // "Awestruck", "Grounded", "Historic" all non-canonical, substituted per founder decision
    energyType: ["Adventure", "Wildlife Focus"], // "Geological exploration" and "Stationary wildlife immersion" both non-canonical, substituted per founder decision
    experiencePace: "Balanced",
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Classic Safari Elegance", // founder-confirmed: genuine 1962 pioneer heritage status, volcanic stone architecture, no significant documented wear
    journeyRole: "Reflection", // founder-confirmed, resolved from source's non-canonical "The Conceptual Anchor (or Mid-Trip Grounding)" framing
    idealTravelersPrimary: ["Families", "Nature Photographers", "Slow Travelers"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 8, authenticityScore: 7, premiumScore: 6,
    adventureScore: 6, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 4, familySuitabilityScore: 9, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4.5–6 hours overland from Nairobi (273 km) or Mombasa (250 km); 1-hour flight from Wilson Airport, Nairobi, followed by a 5-minute road transfer. SGR Madaraka Express train available to Mtito Andei Station.",
    seasonalAccessibility: "Open year-round. The permanent central waterhole ensures high wildlife density even during dry seasons.",
    rainySeasonImpact: "Thick acacia scrub can make game viewing challenging during heavy rain seasons when foliage is dense.",
    electricitySystem: "24-hour continuous power via main grid and backup generator systems (standard Serena corporate infrastructure).",
    powerReliability: "High",
    waterReliability: "24-hour hot and cold running water in fully equipped en-suite bathrooms (many featuring bathtubs). Source sustainability REQUIRES_VERIFICATION.",
    internetAvailability: "Complimentary Wi-Fi provided; wireless signal is slow and unreliable within thick stone-walled guest wings, functioning dependably only in the central lounge and reception areas.",
    mobileNetwork: "REQUIRES_VERIFICATION",
    medicalAccess: "On-site basic first aid and standard hotel emergency protocols. Details on dedicated resident medical staff REQUIRES_VERIFICATION.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "High" per source — wheelchair accessible, paved/stone pathways, flat central viewing terraces
    operationalLimitations: [
      "High-volume capacity frequently accommodates large package tour groups and corporate conferences, resulting in institutional buffet dining and a bustling resort atmosphere",
      "In-room Wi-Fi is heavily obstructed by thick stone walls",
      "Standard in-room conveniences like dedicated hairdryers require a separate request from reception",
      "Tsavo's thick, dense acacia commiphora scrub makes wildlife harder to spot during drives compared to wide-open grassland plains",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "Strong",
      reasoning: "Secure stone construction, easy airstrip/train access, and high-yield stationary wildlife viewing cater perfectly to multi-generational groups looking for safety, comfort, and immediate visual reward.",
      supportingSignals: ["Secure volcanic stone construction", "Family and interconnecting rooms available", "High-yield stationary waterhole viewing"],
      mismatchConditions: ["The large resort scale means less personalized, dedicated guiding compared to a private boutique camp"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "Exceptional, uninterrupted angles of diverse wildlife converging on a single water source, backed by the Chyulu Hills and Mount Kilimanjaro.",
      supportingSignals: ["World-class productive central waterhole", "Chyulu Hills and Kilimanjaro backdrop", "Deluxe upper-level rooms with unobstructed angles"],
      mismatchConditions: ["Public viewing decks can get crowded with tour groups; photographers must book Deluxe upper-level rooms to guarantee isolated shooting angles"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "The safe, cool stone architecture and cinematic stationary wildlife theater allow travelers to sit for hours in quiet suspense, observing natural rhythms without the physical toll of continuous, bumpy game drives.",
      supportingSignals: ["Cool volcanic stone architecture", "Stationary wildlife theater", "Low-exertion, prolonged-observation format"],
      mismatchConditions: ["Poor room Wi-Fi restricts seamless connectivity if they wish to journal or research digitally from their beds"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "The large resort layout, high-capacity tour group buffets, and corporate branding fundamentally conflict with the desire for exclusive, romantic, low-density wilderness isolation.",
      supportingSignals: [], mismatchConditions: ["High foot traffic on viewing decks and dining halls will destroy the illusion of a private romantic sanctuary"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Weak",
      reasoning: "Massive stone construction, a 56-room capacity, and a heavy corporate resort footprint violate the ethos of small, intimate, leave-no-trace canvas eco-camps.",
      supportingSignals: [], mismatchConditions: ["The guest will feel they are staying in a commercialized hotel rather than genuinely integrating into the African bush"] },
    { fitType: "poorFit", category: "Bleisure Explorers", archetype: "The Deep-Work Sovereign", matchStrength: "Weak",
      reasoning: "Unreliable and slow Wi-Fi inside the thick volcanic stone walls makes seamless remote work impossible from the privacy of the guest room.",
      supportingSignals: [], mismatchConditions: ["Severe frustration attempting to conduct business or send large files without sitting in the middle of a busy public lounge"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source used non-canonical framing (\"The Conceptual Anchor (or Mid-Trip Grounding)\") with no literal canonical match stated. Founder confirmed Reflection — after a long stretch of travel, this lodge's grounding, quiet-suspense character positions it near the end of an itinerary rather than as an ecosystem-bridging transition. REGIONAL TALLY (Tsavo sub-phase): Grand Finale x1 (Salt Lick Safari Lodge), Reflection x1 (this lodge).",
    whatShouldComeBefore: "A standard mid-tier wildlife focus (e.g., Amboseli open plains) where travelers have experienced open-plain tracking and are ready for a stark landscape transition.",
    whatShouldComeAfter: "A coastal decompression phase (e.g., Diani Beach/Watamu) or a flight to the Maasai Mara for high-density predator action.",
    emotionalTransitionRationale: "Elevates the accommodation standard to refined heritage luxury while introducing an entirely new, dramatic volcanic landscape that prevents \"safari fatigue\" and grounds the traveler's nervous system in thick-walled security.",
  },

  narrative: {
    whyChosen: "The first luxury lodge ever built inside an East African national park, delivering a world-class stationary waterhole theater and refined heritage architecture as a grounding mid-to-late-journey anchor.",
    bestUsedFor: "Families and multi-generational groups wanting secure, effortless wildlife viewing; nature photographers seeking a highly productive single-water-source vantage; slow travelers wanting cinematic, low-exertion observation.",
    lessSuitableFor: "Ultra-luxury honeymooners seeking absolute seclusion, high-net-worth design purists, or safari purists demanding a small, intimate, canvas-under-stars eco-camp.",
    journeyPositionNote: "Reflection — a grounding, quiet-suspense stop that elevates accommodation standard and prevents safari fatigue, best placed after a long stretch of travel near the later part of an itinerary.",
    overview: "Kilaguni Serena Safari Lodge is a legendary titan of Kenyan tourism, holding the crown as the first luxury lodge built inside a national park in East Africa. Constructed entirely out of chiseled black volcanic stone and rich local hardwoods, the lodge curves symmetrically around a massively productive, floodlit watering hole facing the Chyulu Hills and, on clear days, Mount Kilimanjaro.",
    emotionalFeel: "Safe, awe-inspiring theater. An immediate, grounding sense of security from the massive stone walls contrasts with the raw, untamed wilderness outside. At night, floodlights and nocturnal predators shift the tone to quiet, cinematic suspense.",
    sensorySignature: {
      visual: ["Stone-cool corridors opening to vast, sun-drenched viewing terraces", "The imposing volcanic profile of the Chyulu Hills", "Heavy herds splashing in red mud"],
      auditory: ["The ambient hum of a large-scale lodge", "Sharp vocalizations of elephants", "Quiet suspense of nocturnal wildlife drinking meters away"],
      olfactory: ["Dry savannah grass", "Woodsmoke drifting from the open-air thatched restaurant"],
    },
    positiveSignals: [
      "Exceptional productivity of the central watering hole, yielding continuous, up-close encounters directly from the dining decks",
      "Positioned centrally inside Tsavo West, meaning game drives begin the exact second guests step into their vehicle",
      "Cool volcanic stone construction and recent room refurbishments provide an authentic, comfortable, and solid retreat",
      "Rapid, easy driving access to iconic Tsavo landmarks like Mzima Springs, the Shetani Lava Flow, and Poacher's Lookout",
    ],
    negativeSignals: [
      "Wireless internet remains slow and unreliable within the stone-walled guest wings, functioning dependably only in the central lounge",
      "The main dining room takes on a busy, high-volume resort feel when large tour groups or corporate conferences occupy the lodge",
      "Standard in-room conveniences like dedicated hairdryers require a separate request from reception",
      "Tsavo's thick, dense acacia commiphora scrub makes wildlife harder to spot during drives compared to wide-open grassland plains",
    ],
    hiddenGems: [
      "Securing the Deluxe Rooms on the upper level of the volcanic stone wing — private balconies positioned to look directly down into the watering hole with zero visual obstructions from the public viewing decks. Additionally, booking a bush breakfast at Lion Rock or near the volcanic caves offers a highly premium, privately catered experience away from the main buffet crowd.",
    ],
    signatureMemory: "Sitting at the open-air thatched restaurant with a cold drink, watching thirty elephants splash in the red volcanic mud just meters away, feeling an unmatched sense of raw proximity while totally physically secure.",
    expectationManagement: "Clients must be explicitly briefed that this is a large-scale, historic corporate resort (56 rooms), not a boutique canvas camp. Dining is predominantly high-volume buffet style, in-room Wi-Fi is heavily obstructed by stone walls, and the surrounding bush is dense, meaning the highest wildlife yield often happens passively at the lodge itself rather than on grueling drives.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client is a family, older traveler, or corporate group desiring a deeply comfortable, secure, and historic safari experience",
      "Client wants guaranteed, effortless wildlife viewing and easy access to dramatic geological sites",
    ],
    doNotRecommendConditions: [
      "Client is an ultra-luxury honeymooner seeking absolute seclusion",
      "Client is a high-net-worth design purist or a safari purist demanding a small, intimate, canvas-under-stars eco-camp",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Undisputed pioneer status offering the most strategically positioned, highly productive watering hole theater in Tsavo West, combined with instant, zero-commute park access.",
    mainLimitation: "The large resort layout, high-capacity tour group buffets, and corporate branding dilute the exclusive, low-density wilderness isolation expected by modern premium travelers.",
    positioningSummary: "A legendary, volcanic-stone heritage resort positioned inside Tsavo West, offering exceptional, front-row watering hole wildlife theater and reliable luxury comfort against the backdrop of the Chyulu Hills.",
  },

  pairings: [
    { pairedEntity: "Taita Hills private conservancy camp", pairingCategory: "ecosystem", rationale: "Allows travelers to experience the fascinating contrast between the rugged, volcanic, spring-fed hills of Tsavo West and the endless, flat, raw wilderness of Tsavo East's Yatta Plateau." },
    { pairedEntity: "Kenyan Coast (Diani Beach or Watamu)", pairingCategory: "regional", rationale: "Follows the grounding, volcanic mid-trip anchor with an expansive oceanfront beach decompression phase." },
    { pairedEntity: "Finch Hattons (Tsavo West)", pairingCategory: "experience", rationale: "Ensures clients experience both a grand, historic resort layout and elite, low-impact tented privacy." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Serena Hotels operator specifications", "Field surveys", "Historical registry data", "Regional geographical surveys"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Precise on-site resident medical staff capabilities — explicitly flagged REQUIRES_VERIFICATION in source",
      "Sustainability metrics regarding the property's water heating/sourcing systems — explicitly flagged REQUIRES_VERIFICATION in source",
      "Mobile network coverage detail — not provided in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};