// data/knowledge-base/laikipia/suyian-lodge.ts
export const suyianLodge = {
  id: "suyian-lodge", // NEW lodge, no existing DB record
  name: "&Beyond Suyian Lodge",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Ewaso Narok River Basin",
  ecosystem: "Semi-arid wilderness / Granite kopjes and rocky escarpment / Ewaso Narok River Basin",
  propertyType: "Ultra-Luxury Architectural Safari Lodge & Wellness Sanctuary",
  accommodationStyle: "Massive curvilinear stone-clad luxury suites with Afro-Wabi-Sabi interior design, sweeping floor-to-ceiling glass fronts, and private plunge pools.",
  locationDetail: "Perched on a rugged granite escarpment within a 44,000-acre private conservancy overlooking the Ewaso Narok River.",
  nearestGate: "Private Conservancy Access Points",
  nearestAirstrips: ["Suyian Airstrip", "Loisaba Airstrip"],
  accessibilityNotes: "Perched on a rugged granite escarpment; internal stone pathways and elevation changes require steady footing, not optimized for severe mobility constraints.",
  priceRangeMinUsd: 1500,
  priceRangeMaxUsd: 2500,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED: price midpoint ($2,000) falls firmly in the Ultra-Luxury band ($1,200+) — no correction needed, fourth consecutive Laikipia lodge to confirm clean
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "&Beyond Bateleur Camp",
    "Kichwa Tembo",
    "Samburu National Reserve camp",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Inspirational", "Exploratory", "Peaceful", "Reflective"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Meditative" → Reflective
    energyType: ["Wellness", "Luxury Escape"], // CORRECTED: "Decompression Retreat" and "Restoration" both functionally redundant, mapped jointly to Wellness; "Quiet Luxury" → Luxury Escape; kept to 2 terms rather than padding with a third
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Exclusive Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // CORRECTED: "Contemporary Luxury | Eco-Luxury | Afro-Wabi-Sabi" all non-canonical; founder chose Ultra-Exclusive Sanctuary over Modern Luxury — genuine either/or, matches Isolated social dynamic and 44,000-acre private valley framing
    journeyRole: "Recovery", // FOUNDER DECISION: source hedge "Opening Immersion / Recovery & Reset Anchor" contained two genuinely canonical options (Recovery is one of the 5 original canonical roles), requiring a real founder call rather than an auto-resolve; confirmed Recovery, supported by 3/10 intensity / 10/10 relaxation scores
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Slow Travelers"], // CORRECTED: real category names substituted; "Design & Architecture Enthusiasts" dropped entirely, consistent with dropping its sole supporting archetype
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 10, authenticityScore: 8, premiumScore: 9,
    adventureScore: 6, privacyScore: 8, wildlifeExperienceScore: 6,
    culturalImmersionScore: 6, familySuitabilityScore: 6, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "50–60 minutes scheduled/charter flight from Wilson Airport to local airstrip, plus 20–30 minute game drive transfer.",
    seasonalAccessibility: "Open year-round; elevated escarpment position ensures good drainage.",
    rainySeasonImpact: "Seasonal rains (April–May, November) alter road conditions on lower valley tracks.",
    electricitySystem: "High-capacity off-grid solar power system with generator backup.",
    powerReliability: "Continuous 24-hour",
    waterReliability: "Eco-engineered solar and heat-pump water systems providing continuous pressurized hot water.",
    internetAvailability: "High-speed Wi-Fi across central lodge zones and private guest suites.",
    mobileNetwork: "Intermittent cellular coverage across the broader private conservancy.",
    medicalAccess: "On-site trained first-aid team and fully equipped medical kit; direct access to AMREF Flying Doctors emergency air-evacuation via local airstrip.",
    childFriendly: true, // "Moderate" per source, resolved per standing collapse precedent, confirmed by founder
    mobilityFriendly: false, // "Low to Moderate" per source, resolved per founder decision
    operationalLimitations: [
      "Lack of traditional in-room air conditioning (relies on thermal concrete mass and ambient airflow)",
      "Nighttime room enclosure safety limits open glass doors",
      "Scattered wildlife requiring long game drives",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "The absolute acoustic silence of the 44,000-acre private valley, resort-grade wellness infrastructure (steam room, cold plunge, gym), and slow pace allow complete mental reset and physical recovery.",
      supportingSignals: ["44,000-acre private valley acoustic silence", "Resort-grade wellness infrastructure (steam room, cold plunge, gym)", "Slow experience pace"],
      mismatchConditions: ["Must accept that full-height glass doors must be closed at night for safety, retaining ambient daytime room warmth"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "High",
      reasoning: "Ultra-private stone suites perched over the Ewaso Narok River with individual plunge pools and candlelit cliffside dining offer an intimate, romantic landscape setting.",
      supportingSignals: ["Individual plunge pools", "Candlelit cliffside dining", "Ultra-private stone suites over the river"],
      mismatchConditions: ["Requires pre-booking instruction to ensure suite placement is isolated from neighboring occupied units"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "ONTOLOGY CORRECTION: source listed the invented archetype 'The Mindful Explorer'; remapped to the real archetype The Biophilic Restorer, which is fully supported by the description's emphasis on intellectual tracking, unhurried bush walks, and deep environmental connection far from commercial tourist vehicles.",
      supportingSignals: ["Intellectual tracking of rare northern endemic species", "Unhurried bush walks", "Night drives for nocturnal predators"],
      mismatchConditions: ["Requires patience and an understanding that wildlife is wild, scattered, and undergoing conservancy re-wilding"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "Low wildlife density and vast re-wilding territory do not support rapid, continuous Big Five checklist ticking.",
      supportingSignals: [], mismatchConditions: ["High frustration and disappointment when long drives yield scattered sightings rather than dense predator-prey action"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Low",
      reasoning: "The slow experience pace and restoration-focused rhythm directly clash with high-density, action-packed game viewing demands.",
      supportingSignals: [], mismatchConditions: ["Boredom with long tracking sessions and an aversion to the property's meditative, wellness-oriented energy"] },
    // DROPPED: "The Aesthetic & Design Collector (Design Enthusiasts)" — not a real archetype; no archetype in the 38-list captures pure architectural/aesthetic appreciation as a psychology, no defensible remap exists
    // DROPPED: "The Climate-Sensitive Sleeper (Temperature-Sensitive Travelers)" — not a real archetype/category; underlying concern already captured in narrative.negativeSignals and operationalIntelligence.operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION (FOUNDER DECISION): source hedged \"Opening Immersion / Recovery & Reset Anchor\"; unlike prior Laikipia lodges, this hedge contained two genuinely canonical options (Recovery is one of the original 5 canonical journey roles), requiring a real founder decision rather than an auto-resolve. Founder confirmed Recovery, supported by the lodge's own scoring (3/10 intensity, 10/10 relaxation — both extremes for the sub-phase) and restoration-focused framing. REGIONAL TALLY (Laikipia sub-phase, lodge 7/7 so far): Opening Immersion x5, Recovery x1, Adventure Peak x1 — no concentration concern; this decision kept Opening Immersion from crossing into audit-threshold territory.",
    whatShouldComeBefore: "Long-haul international flight arrival into Nairobi (Wilson Airport transit), or an intense, dusty, hot safari sector like Samburu National Reserve.",
    whatShouldComeAfter: "A high-density predator reserve like the Masai Mara (&Beyond Bateleur Camp / Kichwa Tembo) or a tropical oceanfront retreat on the Kenyan Coast.",
    emotionalTransitionRationale: "Shifts travel energy from high-stress urban exhaustion or dusty safari fatigue into a tranquil, meditative state of physical and mental restoration.",
  },

  narrative: {
    whyChosen: "A striking, contemporary architectural sanctuary offering resort-grade wellness infrastructure and total private-valley isolation, positioned as a deep-restoration anchor.",
    bestUsedFor: "Design enthusiasts, honeymooners, repeat safari travelers, or burned-out executives seeking elite architecture, resort-grade wellness, and isolated luxury who value space and privacy over guaranteed high-density game drives.",
    lessSuitableFor: "First-time checklist-driven safari travelers demanding continuous predator sightings, or travelers highly sensitive to room temperatures who require active overnight air conditioning.",
    journeyPositionNote: "Recovery — deep restoration and mental reset, most effective mid-journey or as a decompressing opener.",
    overview: "&Beyond Suyian Lodge is an architectural masterpiece that introduces an entirely new design language to the Laikipia plateau. Masterminded by Nicholas Plewman and Fox Browne Creative, the lodge rejects standard canvas luxury, presenting a series of massive, stone-clad, curvilinear structures that blend seamlessly into a rugged escarpment of granite kopjes. The interior design leans heavily into an 'Afro-Wabi-Sabi' philosophy, celebrating organic imperfection, textured plaster, earthy mineral tones, and massive exposed tree roots at the entryways. Set within a 44,000-acre private conservancy transitioning from cattle ranching to re-wilding, the lodge looks out over the Ewaso Narok River and distant Mount Kenya, offering Africa as a vast, ancient, and highly exclusive geological theater.",
    emotionalFeel: "Contemplative, meditative, and protective. The sheer physical scale of the architecture and the unhurried vastness of the private valley induce an immediate drop in internal tension. Mornings are crisp and open, gazing across the valley from bed through floor-to-ceiling glass; evenings feel deeply secure as the soft, candle-like glow of the stone lodge illuminates the dark escarpment.",
    sensorySignature: {
      visual: ["Curved stone walls", "Soaring plaster domes", "Exposed tree roots", "Sweeping views across granite kopjes toward Mount Kenya"],
      auditory: ["Complete acoustic silence of a private valley punctuated by distant river currents", "Nocturnal wind", "Bird calls"],
      olfactory: ["Wood-fired pizzas", "Dry acacia bark", "Crisp mountain air", "Mineral plaster"],
    },
    positiveSignals: [
      "Massive praise for clean curved stone, soaring ceilings, and seamless geological integration",
      "Suites feature two separate mini-bars—one for fine spirits/wines, another stocked with artisanal kombuchas and cold-pressed juices",
      "Dedicated resort-grade gym, yoga studio, steam room, and cold plunge setups that go far beyond standard safari spa tents",
      "Flawless &Beyond butler service delivering private family-style tapas lunches and candlelit terrace dinners on demand",
      "Intellectual guides turn patient tracking into an artistic masterclass for spotting Grevy's zebras, wild dogs, and reticulated giraffes",
    ],
    negativeSignals: [
      "Closed glass doors at night combined with a lack of active air conditioning can cause concrete suites to trap daytime heat",
      "Wildlife is present but scattered, requiring long, patient drives that surprise checklist-focused guests",
      "Occasional operational assignments place guests in adjacent suites, compromising the feeling of absolute wilderness isolation",
    ],
    hiddenGems: [
      "The property leverages its private conservancy status to conduct exceptional nocturnal tracking drives, granting rare access to elusive predators like striped hyenas and leopards. Its custom 'Tapas-Style' flexible lunch program offers a light, fresh alternative to heavy three-course safari dining.",
    ],
    signatureMemory: "Stepping into the cold plunge after an early morning yoga session on the granite escarpment, followed by a cold-pressed juice while watching a herd of reticulated giraffes cross the river valley below.",
    expectationManagement: "Guests must be educated that Suyian Lodge is a restoration-focused, design-led sanctuary set within a transitioning re-wilding conservancy. Game viewing requires patient tracking rather than rapid Big Five sightings, and rooms rely on architectural thermal cooling rather than traditional air conditioning.",
    idealNights: "3",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a design enthusiast, honeymooner, repeat safari traveler, or burned-out executive seeking elite architecture and resort-grade wellness",
      "Client values space and privacy over guaranteed high-density game drives",
    ],
    doNotRecommendConditions: [
      "The client is a first-time checklist-driven safari traveler demanding continuous predator sightings",
      "A traveler highly sensitive to room temperatures who requires active overnight air conditioning",
    ],
    confidenceLevel: "Medium to High", // per source
    competitiveAdvantage: "Unrivaled architectural design, resort-grade wellness facilities, and private 44,000-acre exclusivity with zero vehicle crowding.",
    mainLimitation: "Low-density, scattered wildlife and nighttime thermal heat retention in enclosed stone suites.",
    positioningSummary: "A striking, contemporary Afro-Wabi-Sabi stone sanctuary perched on a Laikipia escarpment, blending elite architectural design and resort-grade wellness with a patient, low-vehicle re-wilding safari experience.",
  },

  pairings: [
    { pairedEntity: "&Beyond Bateleur Camp", pairingCategory: "ecosystem", rationale: "Moving from the rocky, semi-arid granite kopjes of Laikipia to the open savannah plains of the Mara balances quiet restoration with high-density wildlife viewing." },
    { pairedEntity: "Kichwa Tembo", pairingCategory: "ecosystem", rationale: "Alternative Masai Mara pairing balancing quiet restoration with high-density wildlife viewing." },
    { pairedEntity: "Samburu National Reserve camp", pairingCategory: "regional", rationale: "Transitions the traveler from raw, arid, high-heat northern wilderness into a breezy, sophisticated, contemporary stone wellness haven." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Architectural reviews", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Long-term plans for active night climate/mesh ventilation retrofits in guest suites — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};