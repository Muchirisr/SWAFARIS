// data/knowledge-base/aberdare/rhino-watch-safari-lodge.ts
export const rhinoWatchSafariLodge = {
  id: "rhino-watch-safari-lodge", // NEW lodge, no existing DB record
  name: "Rhino Watch Safari Lodge",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Laikipia Plateau Interface, Central Highlands",
  ecosystem: "Semi-arid wilderness / Central Highlands (Transition zone between montane forests and high-altitude savannah plains)",
  propertyType: "Eco-Lodge / Specialized Wildlife & Wellness Base Camp",
  accommodationStyle: "Luxury canvas safari tents (mounted on stone platforms with thatched roofs) and spacious stone chalets/family houses scattered across sloped botanical gardens.",
  locationDetail: "Hillside estate near Solio Game Reserve, Central Highlands.",
  nearestGate: "Solio Game Reserve Main Gate (4 km / 5–10 minutes drive); Aberdare National Park Gates (Wandare/Ark/Treetops Gates)",
  nearestAirstrips: ["Nanyuki Airstrip (NYK)", "Mweiga Airstrip", "Nyeri Airstrip (Nyaribo)"],
  accessibilityNotes: "Easily accessible year-round via tarmac highways from Nairobi to Nyeri/Mweiga, with a short off-tarmac approach on well-maintained unpaved tracks. Property terrain features steep hillside pathways connecting lower tent zones to upper stone chalets and central dining areas.",
  priceRangeMinUsd: 180,
  priceRangeMaxUsd: 320,
  rawMarketTier: "Mid", // as stated in source doc ("Luxury Tier: Mid")
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // CORRECTED: price midpoint ($250) falls in the Value band ($150–299), overriding self-reported Mid
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Aberdare National Park (Deep Interior)",
    "Samburu National Reserve",
    "Maasai Mara Conservancies",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Peaceful", "Rustic"], // all valid canonical values, no correction needed
    energyType: ["Wellness", "Wildlife Focus"], // "Decompression Retreat" substituted → Wellness; "Quiet Luxury" dropped per founder decision
    experiencePace: "Balanced",
    comfortPhilosophy: ["Adventure Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Adventure Basecamp", // founder-confirmed: doc explicitly frames property as "the ultimate tactical base camp" for Solio rhino tracking
    journeyRole: "Opening Immersion", // resolved directly — "Adventure Transition" is non-canonical, "Opening Immersion" is, per standing rule
    idealTravelersPrimary: ["Families", "Nature Photographers", "Slow Travelers"], // CORRECTED: Luxury Adventurers dropped per founder decision (its sole archetype, Biophilic Restorer, was recategorized to Slow Travelers; no real Luxury Adventurers fit supports this property — High-Octane Collector is explicitly incompatible)
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 8, authenticityScore: 9, premiumScore: 7,
    adventureScore: 6, privacyScore: 6, wildlifeExperienceScore: 9,
    culturalImmersionScore: 5, familySuitabilityScore: 8, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3 to 3.5 hours overland from Nairobi (approx. 175 km); 35–45 minutes road transfer from Nanyuki Airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Micro-climate is comfortable and dry relative to the montane forest; cold highland evenings (especially June–August) necessitate extra layers and warm bedding.",
    electricitySystem: "24-hour continuous electricity via primary grid power backed up by solar energy.",
    powerReliability: "High",
    waterReliability: "Constant hot water via solar and electric heaters to all en-suite bathrooms; in-room hot water bottles provided for turndown.",
    internetAvailability: "Wi-Fi access across main lodge areas, central lounge, and most chalets/tents.",
    mobileNetwork: "Strong Safaricom and Airtel 4G coverage across the property.",
    medicalAccess: "Comprehensive on-site first aid; major medical centers in Nyeri Town or Nanyuki 20–30 minutes drive; air evacuation fully supported via local airstrips.",
    childFriendly: true, // "High" per source
    mobilityFriendly: false, // resolved from source "Moderate to Low" — steep hillside paths and no ramp infrastructure read as net-limiting; nuance captured below
    operationalLimitations: [
      "Steep hillside pathways connect lower canvas tent zones to upper stone chalets and central dining, with no ramp infrastructure — notable friction for wheelchair users or guests with severe joint issues",
      "Ambient noise transmission (external community sounds/barking dogs) affects canvas tent units, especially at night",
      "Light wear on soft textiles and mattresses in standard tent categories",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "High-touch host care, multi-bed stone chalets, central swimming pool, flexible dining, and a short 10-minute drive to Solio Reserve eliminate long-drive fatigue for young children while guaranteeing high-impact wildlife sights.",
      supportingSignals: ["Multi-bedroom stone chalets", "10-minute drive to Solio Reserve", "Flexible child-friendly dining"],
      mismatchConditions: ["Must supervise young children along sloped, unpaved hillside paths connecting upper chalets to lower dining zones"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "Serves as the ultimate tactical base camp for Solio Reserve's world-famous rhino population and bird-watching on the lodge's private pond/veranda, combined with clear Mount Kenya sunrise backdrop shots.",
      supportingSignals: ["Direct proximity to Solio's rhino population", "Private pond/veranda bird-watching", "Mount Kenya sunrise backdrop"],
      mismatchConditions: ["Must accept that the lodge itself is an estate garden setting rather than an open bush hideout"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source filed this archetype under an invented category (\"Luxury Adventurers & Wellness Seekers\"); The Biophilic Restorer is a real Slow Travelers archetype — recategorized accordingly. Fit: seamlessly pairs active morning safari drives with dedicated afternoon wellness recovery (sauna, steam room, jacuzzi, massage pavilion, quiet yoga spaces).",
      supportingSignals: ["Dedicated spa pavilion with sauna, steam room, jacuzzi", "Yoga and meditation pavilion", "Morning-drive/afternoon-recovery rhythm"],
      mismatchConditions: ["Light sleepers seeking complete silence may prefer stone chalets over canvas tents to avoid external ambient noise"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source filed this archetype under an invented category (\"Burned-out Ultra-Luxury Executives\"); corrected to the real category, Burned-out Executives. Lacks ultra-exclusive private plunge pools, private butler service, hyper-modern minimalist architecture, and absolute wilderness isolation.",
      supportingSignals: [], mismatchConditions: ["Mismatch between expectations of secluded high-end ultra-luxury and Rhino Watch's warm, family-run, mid-tier eco-lodge setting"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source filed this archetype under an invented category (\"Uncontrollable Wilderness Purists\"); corrected to the real category, Luxury Adventurers. Demands deep, remote, off-grid wilderness outposts far from human settlement and transit paths without estate-style amenities.",
      supportingSignals: [], mismatchConditions: ["Frustration with nearby community ambient sounds (distant dog barking/road hum) and the managed garden environment"] },
    // DROPPED: "Severe Mobility-Impaired Travelers" — not a real archetype or category; underlying concern already captured in operationalLimitations (steep hillside paths, no ramp infrastructure)
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Adventure Transition / Opening Immersion\"; Adventure Transition is non-canonical while Opening Immersion is — resolved directly per standing rule (any stated canonical option resolves without a founder call). REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 (Aberdare Country Club), Opening Immersion x2 (Treetops Lodge, this lodge).",
    whatShouldComeBefore: "Direct overland arrival from Nairobi (3 to 3.5 hours) or flight into Nanyuki Airstrip following international arrival. Serves as a smooth, low-fatigue entry anchor to Kenya's northern circuit.",
    whatShouldComeAfter: "High-altitude bamboo forests (Aberdare National Park interior), arid semi-desert reserves (Samburu National Reserve), or high-density savannahs (Maasai Mara Conservancies).",
    emotionalTransitionRationale: "Shifts the traveler from a high-stress urban or transit mindset into a grounded, relaxed, and highly comfortable state of safari readiness.",
  },

  narrative: {
    whyChosen: "A high-hospitality, family-run garden estate positioned minutes from Solio Game Reserve, delivering a near-guaranteed rhino-tracking win within a day of landing alongside genuine wellness infrastructure.",
    bestUsedFor: "Families needing a low-fatigue, high-wildlife-payoff entry point, nature photographers targeting Solio's rhino population, and travelers wanting wellness recovery layered onto active morning game drives.",
    lessSuitableFor: "Travelers demanding absolute wilderness isolation, ultra-exclusive private-butler luxury, zero ambient community sound, or those with severe mobility restrictions.",
    journeyPositionNote: "Opening Immersion — a smooth, low-fatigue entry anchor to Kenya's northern circuit, offering an immediate high-probability wildlife win within 24 hours of landing.",
    overview: "Rhino Watch Safari Lodge behaves as an intentional, highly functional sanctuary tucked away in the central highlands. Lush, meticulously maintained botanical landscaping creates a soft micro-climate, sharply contrasting with the dry plains just outside the gates.",
    emotionalFeel: "Centered on comfort and grounding stability, with guests feeling \"looked after\" through high-touch, family-run hospitality. Mornings bring the thrill of rhino tracking; afternoons collapse into deep relaxation by the pool, veranda bird-watching, or the spa.",
    sensorySignature: {
      visual: ["Manicured botanical gardens bursting with flora", "Crisp, uninhibited morning views of Mount Kenya's jagged peaks", "Brilliant bird species flitting around the pond deck"],
      auditory: ["Intense morning acoustic chorus of mousebirds, starlings, and sunbirds", "Gentle poolside breeze", "Quiet evening chatter in the open-air dining lounge"],
      olfactory: ["Fresh highland mountain air", "Fragrant blooming garden flora", "Woodsmoke", "Rich brewed Kenyan coffee at breakfast"],
    },
    positiveSignals: [
      "Unrivaled proximity (approx. 2.5 miles / 5–10 minutes) to Solio Game Reserve, the world's premier rhino breeding sanctuary",
      "Exceptional culinary variety, particularly the breakfast buffet and ability to execute fresh seafood, vegetarian, and high-end local beef dishes",
      "Dedicated spa pavilion with sauna, jacuzzi, and massage rooms — consistently cited as a major unexpected luxury",
      "Chalets on the upper hillside rows offer breathtaking, uninhibited morning views of Mount Kenya directly from the veranda",
    ],
    negativeSignals: [
      "Nocturnal noise from nearby communities and transit paths (distant barking dogs, occasional road hum) can bleed into the property, especially in canvas tents",
      "Mattresses and textiles within standard tents showing visible signs of wear",
      "Steep hillside pathways between chalets and central dining present a minor friction point for less mobile travelers",
    ],
    hiddenGems: [
      "Special interest versatility — a dedicated yoga/meditation pavilion, library, sunset deck, and specialized bird-watching veranda over the pond allow this property to be pitched as a holistic wellness or birding retreat alongside its rhino-tracking core, serving mixed-interest travel parties well.",
    ],
    signatureMemory: "Stepping out onto your chalet veranda at dawn with a hot cup of tea to watch Mount Kenya's snowy peaks turn pink in the morning sun, right before a 10-minute drive to witness dozens of black and white rhinos roaming Solio's open plains.",
    expectationManagement: "Travelers must understand that Rhino Watch is a high-hospitality, garden-estate eco-lodge rather than a completely isolated deep-wilderness camp. Guests should expect minor ambient noise from nearby communities (especially in canvas tents), steep hillside walks between chalets and dining zones, and a warm, structured, family-run atmosphere.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Itinerary requires an easy-to-reach, family-friendly, high-hospitality entry point to the northern circuit",
      "Client prioritizes Solio rhino tracking, culinary variety, bird-watching, and wellness relaxation to offset initial travel fatigue",
    ],
    doNotRecommendConditions: [
      "Client demands absolute untamed wilderness isolation or extreme high-end luxury (private butler/private plunge pool aesthetic)",
      "Client requires zero ambient community sounds",
      "Client has severe physical mobility restrictions that make walking up steep paths difficult",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Premier geographical access to Solio Game Reserve combined with full estate wellness facilities (spa, sauna, pool) and high-touch family hospitality at an accessible mid-tier price point.",
    mainLimitation: "Hillside physical inclines and potential external nocturnal ambient noise bleeding into canvas tent units.",
    positioningSummary: "A welcoming, family-run garden sanctuary nestled between mountains, serving as the ultimate comfortable launchpad for elite rhino tracking and highland exploration with an unexpected touch of wellness luxury.",
  },

  pairings: [
    { pairedEntity: "Aberdare National Park (Deep Interior)", pairingCategory: "ecosystem", rationale: "Moving from the semi-arid base camp of Rhino Watch up into the dense, misty bamboo forests of the high Aberdares provides an exceptional, immediate ecological contrast without excessive driving." },
    { pairedEntity: "Samburu National Reserve", pairingCategory: "regional", rationale: "After experiencing the lush gardens and cool highlands of Rhino Watch, dropping into the raw, baking, arid landscapes of Samburu creates a dramatic visual and sensory narrative." },
    { pairedEntity: "Maasai Mara Conservancies", pairingCategory: "experience", rationale: "Moving from the highly specific rhino-and-mountain environment of Rhino Watch to the wide-open, predator-dominated savannahs of a private Mara conservancy provides a flawless macro-safari sequence." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field inspection logs", "Guest experience metrics", "Regional geographical surveys", "Operational property specs", "Swafaris travel intelligence data"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Planned timeline for tent soft-goods and mattress refreshes — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};