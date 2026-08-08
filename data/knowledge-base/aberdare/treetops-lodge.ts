// data/knowledge-base/aberdare/treetops-lodge.ts
export const treetopsLodge = {
  id: "treetops-lodge", // NEW lodge, no existing DB record
  name: "The Treetops Lodge",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Nyeri County, Central Highlands",
  ecosystem: "Athletic Afro-alpine and cool montane forest",
  propertyType: "Historic Treehouse Lodge / Elevated Game-Viewing Hide",
  accommodationStyle: "Compact, historic wooden cabin-style rooms and specialized suites integrated into an elevated timber structure built on stilts over an active salt lick.",
  locationDetail: "Aberdare National Park, accessed via Treetops Gate.",
  nearestGate: "Treetops Gate / Ark Gate (Aberdare National Park)",
  nearestAirstrips: ["Mweiga Airstrip", "Nyeri Airstrip (Nyaribo)", "Nanyuki Airstrip (NYK)"],
  accessibilityNotes: "Accessible year-round via tarmac highways from Nairobi to Nyeri/Mweiga, followed by a short unpaved forest track through Treetops Gate. The physical structure is multi-tiered and elevated on stilts with internal wooden staircases.",
  priceRangeMinUsd: 250,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Mid", // as stated in source doc ("Luxury Tier: Mid")
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // price midpoint ($350) falls in the Mid-Range band ($300–499) — consistent with self-reported tier, no correction needed
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Solio Conservancy (rhino sanctuary)",
    "Samburu National Reserve",
    "Ol Pejeta Conservancy",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Reflective", "Rustic"], // "Cinematic" substituted → Inspirational; "Intimate" substituted → Reflective per founder decision (Romantic/Exclusive both rejected as poor semantic fits given incompatible-Honeymooners status and Privacy Score 4/10)
    energyType: ["Nature Immersion", "Wildlife Focus"], // "Sensory-rich" dropped per founder decision, not substituted
    experiencePace: "Slow",
    comfortPhilosophy: ["Adventure Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Rustic Immersion", // founder-confirmed: aged cedar, compact cabins, weather exposure over aspirational heritage framing
    journeyRole: "Opening Immersion", // clean, canonical, no hedging in source
    idealTravelersPrimary: ["First-Time Safari Travelers", "Nature Photographers", "Slow Travelers"],
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 7, authenticityScore: 8, premiumScore: 7,
    adventureScore: 4, privacyScore: 4, wildlifeExperienceScore: 7,
    culturalImmersionScore: 5, familySuitabilityScore: 4, comfortScore: 7,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3 to 3.5 hours overland from Nairobi (180 km); 15–20 minutes road transfer from Mweiga Airstrip or 45 minutes from Nyeri Airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Misty, rain-heavy periods (April–May, November) reduce temperatures dramatically and dampen forest tracks, but do not block access.",
    electricitySystem: "Continuous 24-hour generator and solar hybrid grid power system.",
    powerReliability: "High",
    waterReliability: "Central water heating system supplying private en-suite bathrooms, upgraded during 2024 restoration.",
    internetAvailability: "Wi-Fi available in central lounge areas and public observation decks; not in-room.",
    mobileNetwork: "Functional but variable Safaricom coverage, dependent on forest canopy density.",
    medicalAccess: "Basic first aid on site; regional medical facilities in Nyeri Town 20–30 minutes drive; air evacuation via Mweiga or Nyeri airstrips.",
    childFriendly: false, // resolved from source "Low to Moderate" — silence requirements, steep unramped stairs, and Family Suitability Score 4/10 read as net-unsuitable; nuance captured below
    mobilityFriendly: false, // "Low" per source — no elevator/ramp access, narrow corridors, wooden staircases
    operationalLimitations: [
      "Elevated multi-level stilt structure with narrow corridors and wooden staircases, no elevator or ramp access",
      "Strict silence protocol on viewing decks and compact room footprints make it challenging for families with toddlers or loud children",
      "Historic timber framing conducts acoustic noise easily between corridors and rooms",
      "Compact room footprints limit in-room lounging",
      "Cool micro-climate requires heavy clothing",
      "Wildlife sightings at the waterhole fluctuate with rain patterns across the broader forest",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Sensory Overwhelmed", matchStrength: "Strong",
      reasoning: "Provides an enclosed, safe, and atmospheric introduction to African wildlife without the immediate physical dust, heat, and rough vehicle motion of open savannah game drives.",
      supportingSignals: ["Enclosed, stationary viewing hide", "Low-exertion, low-sensory-shock format"],
      mismatchConditions: ["Must accept compact cabin space and cooler mountain temperatures"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "Ground-level viewing bunker slits provide a unique eye-level perspective of elephant hooves and limbs. The floodlit salt lick enables continuous low-light nocturnal observation.",
      supportingSignals: ["Eye-level ground bunker viewing slits", "24-hour floodlit salt lick"],
      mismatchConditions: ["Stationary positioning means photographers cannot actively chase moving subjects across expansive landscapes"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "Shifts the traveler from an active hunter of sights to a passive, hyper-aware observer. The misty montane forest and low-exertion model foster deep mental deceleration.",
      supportingSignals: ["Passive, stationary observation model", "Misty montane forest setting"],
      mismatchConditions: ["Noise from neighboring rooms or corridors can disrupt light sleepers seeking complete acoustic isolation"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "Demands vast spatial luxury, private plunge pools, modern high-design architecture, and active, high-velocity predator tracking across open plains.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment risk with compact timber cabins, stationary viewing, and absence of fast-paced open-vehicle chases"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "Thin wooden walls, close room proximity, shared observation decks, and scheduled nocturnal buzzer alerts destroy private romantic isolation and quiet intimacy.",
      supportingSignals: [], mismatchConditions: ["Acoustic bleed from hallways and shared public layouts fail to deliver a private, luxurious sanctuary"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "Compact cabin footprints, timber sound transmission, and high social proximity on observation decks prevent full architectural seclusion and quiet deep work.",
      supportingSignals: [], mismatchConditions: ["Irritation over footsteps in corridors, lack of wide private lounging space, and shared viewing setups"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source states a single canonical value with no hedging — resolves directly to Opening Immersion. REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x1 (this lodge).",
    whatShouldComeBefore: "Overland arrival from Nairobi (3 hours) immediately following an international flight. Serves as a low-exertion, high-atmosphere acclimatization entry point.",
    whatShouldComeAfter: "High-density, drive-based sanctuaries (e.g., Solio Conservancy for rhinos) or northern arid reserves (e.g., Samburu National Reserve).",
    emotionalTransitionRationale: "Shifts the traveler from high-stress international transit into a quiet, grounded, hyper-focused sensory connection with African nature.",
  },

  narrative: {
    whyChosen: "A historic, architecturally unique elevated game-viewing hide offering close-quarters nocturnal wildlife observation and a low-exertion entry point to a Kenya itinerary.",
    bestUsedFor: "First-time safari travelers wanting a low-sensory-shock introduction, specialized wildlife photographers, and slow travelers seeking passive, reflective observation.",
    lessSuitableFor: "Honeymooners seeking private romantic isolation, burned-out executives needing full acoustic seclusion, families with young or active children, and travelers with mobility limitations.",
    journeyPositionNote: "Opening Immersion — a low-exertion, atmospheric acclimatization entry point before deeper savannah or arid-reserve wilderness legs.",
    overview: "The Treetops Lodge is an architectural anomaly and a living museum piece anchored in Aberdare National Park. Elevated on timber stilts, it functions as a permanent game-viewing hide looking out over an active natural salt lick and waterhole.",
    emotionalFeel: "Nostalgic, cinematic, and intimately quiet, building childlike wonder as dusk falls and golden floodlights illuminate the salt lick, with a reflective, intellectual undertone tied to the site's royal history.",
    sensorySignature: {
      visual: ["Golden pools of floodlight cutting through pitch-black forest lines", "Thick mountain mist rolling over cedar canopies", "Eye-level views of massive elephant limbs from the ground bunker"],
      auditory: ["Heavy breathing and low rumbles of feeding elephants", "Crack and creak of aged timber flooring", "Optional night-buzzers chiming for rare species arrivals"],
      olfactory: ["Sharp, aromatic cedar wood", "Cool highland mountain air", "Damp forest moss", "Rich mineral soil around the salt lick"],
    },
    positiveSignals: [
      "Elephants and Cape buffalo herds approach within feet of the building, allowing guests to hear social interactions and breathing clearly",
      "Floor-to-ceiling viewing slits put guests at eye level with animal feet, providing a visceral scale perspective unattainable in vehicles",
      "In-room night-buzzer alert system allows guests to sleep comfortably while being woken for rare nocturnal species arrivals",
      "Post-2024 reopening refresh updated plumbing and dining infrastructure while preserving historical timber character",
    ],
    negativeSignals: [
      "Historic timber stilt construction easily transmits footsteps, corridor movements, and voices between adjacent rooms",
      "Rooms are historically faithful cabin spaces designed primarily for sleeping rather than extended suite lounging",
      "Highland altitude results in cold evening and morning temperatures that catch under-packed travelers off guard",
      "Dense forest wildlife patterns shift with rain; heavy rainfall elsewhere in the park can temporarily slow waterhole traffic",
    ],
    hiddenGems: [
      "Acts as an all-weather, 24-hour safari insurance policy — during rainy seasons when traditional savannah tracks become muddy, Treetops remains operational, warm, and atmospheric, with rain enhancing the forest beauty and salt lick visits.",
    ],
    signatureMemory: "Standing on the open-air viewing deck at midnight in the crisp mountain air, looking down into a pool of golden light as a family of wild elephants drinks silently at the salt lick below.",
    expectationManagement: "Travelers must understand that Treetops is a historic, specialized forest hide rather than a modern luxury resort. Rooms are compact cabin spaces, sound travels through timber walls, and game viewing is stationary patient observation rather than dynamic 4x4 chasing.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client needs a low-exertion soft landing after arriving in Kenya",
      "Client seeks historical depth and unique nocturnal viewing",
      "Client is a specialized wildlife photographer",
      "Client is traveling during shoulder/rainy seasons",
    ],
    doNotRecommendConditions: [
      "Client demands expansive ultra-modern luxury suites or total acoustic isolation",
      "Client requires high-velocity predator tracking drives",
      "Client has severe claustrophobia or mobility limitations with stairs",
    ],
    confidenceLevel: "Medium", // per source — physical layout traits require explicit expectation alignment
    competitiveAdvantage: "Unrivaled historical royalty legacy combined with 24-hour floodlit, eye-level waterhole viewing from an elevated cedar structure.",
    mainLimitation: "Compact, cabin-style room footprints and timber acoustic noise transmission.",
    positioningSummary: "A historic, mist-shrouded mountain forest outpost that trades savannah drives for cozy, low-exertion nocturnal wildlife viewing, making it an ideal sensory transition for travelers seeking a slow, immersive start to their safari journey.",
  },

  pairings: [
    { pairedEntity: "Solio Conservancy", pairingCategory: "ecosystem", rationale: "Sequences Treetops' stationary waterhole hide observation with open 4x4 rhino tracking drives at Solio Ranch — positioning Treetops before open savannahs works masterfully; placing it after high-action savannahs makes the enclosed forest feel restrictive." },
    { pairedEntity: "Samburu National Reserve", pairingCategory: "regional", rationale: "Combines the cool montane forests of the Aberdares with the dry, high-intensity northern frontier of Samburu." },
    { pairedEntity: "Ol Pejeta Conservancy", pairingCategory: "experience", rationale: "Extends the stationary hide-viewing model into active conservation-based game tracking." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Tingesi Collection operational documentation (2024–2026)", "Kenya Wildlife Service (KWS) forest surveys", "Field inspection logs", "Historical property archives"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Season-by-season mineral salt concentration metrics at the waterhole — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};