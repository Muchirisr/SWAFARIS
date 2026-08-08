// data/knowledge-base/naivasha/avian-court-hotel.ts
export const avianCourtHotel = {
  id: "avian-court-hotel", // NEW lodge, no existing DB record
  name: "Avian Court Hotel",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Karagita Sector, Moi South Lake Road Axis",
  ecosystem: "Rift Valley Lacustrine / Volcanic Corridor",
  propertyType: "Contemporary Urban Boutique Hotel",
  accommodationStyle: "Contemporary minimalist boutique suites with polished tile floors, large glass windows, modern stone accents, and climate control.",
  locationDetail: "Karagita sector, along the primary Moi South Lake Road axis.",
  nearestGate: "Crescent Island Sanctuary Entrance / Hell's Gate Elsa Gate",
  nearestAirstrips: ["Naivasha Airstrip"],
  accessibilityNotes: "Fully accessible year-round via tarmac along Moi South Lake Road. Features a single-level architectural layout without stairs, making ground movement seamless for stroller equipment or mobility-impaired guests.",
  priceRangeMinUsd: 80,
  priceRangeMaxUsd: 150,
  rawMarketTier: "Budget / Premium", // as stated in source doc (ambiguous dual self-report); superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // corrected — $115 midpoint falls under the $150 cutoff, resolving the source doc's own ambiguous "Budget / Premium" self-report
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara National Reserve (Oloolaimutia or private conservancies) — ecosystem contrast pairing",
    "Aberdare Highlands or Northern Conservancies (Laikipia/Samburu) — regional pairing",
    "Entim Mara or Sentinel Mara — experience contrast pairing",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Restorative", "Social"], // corrected from source doc's "Elegant | Intimate | Social" — "Intimate" not valid vocabulary; substituted per founder confirmation, steering away from "Romantic" given this property's explicit incompatibility with Honeymooners/Sanctuary Seekers
    energyType: ["Wellness", "Luxury Escape"], // corrected from source doc's "Decompression retreat | Quiet luxury" — neither valid
    experiencePace: "Balanced", // confirmed
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Modern Luxury", // source doc's "Contemporary luxury" mapped per founder confirmation
    journeyRole: "Opening Immersion", // resolved from source doc's dual canonical framing "Opening Immersion (Smooth Soft Landing) or Recovery / Reset (Post-Safari Sanitization)" per founder confirmation. This is lodge #1 of the Naivasha batch.
    idealTravelersPrimary: ["Burned-out Executives", "First-Time Safari Travelers", "Luxury Adventurers", "Families"],
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 7, authenticityScore: 4, premiumScore: 6,
    adventureScore: 4, privacyScore: 5, wildlifeExperienceScore: 3,
    culturalImmersionScore: 3, familySuitabilityScore: 7, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "1.5–2 hours overland from Nairobi (90 km); 15 minutes road transfer from Naivasha Airstrip.",
    seasonalAccessibility: "Open year-round. Fully paved entrance and parking prevent mud accumulation during heavy rains (April–May/November).",
    rainySeasonImpact: "None reported — fully paved entrance and parking prevent mud accumulation.",
    electricitySystem: "24/7 continuous grid power supported by an automatic on-site backup generator system.",
    powerReliability: "Modern electrical outlets and in-suite charging hubs across all rooms.",
    waterReliability: "High-pressure hot water delivery powered by modern boiler systems, serving large walk-in rainfall showers.",
    internetAvailability: "High-speed fiber-optic Wi-Fi across all private suites, poolside zones, and public spaces. Strong 4G/LTE cellular reception on Safaricom and Airtel.",
    mobileNetwork: "Strong Safaricom and Airtel 4G/LTE reception.",
    medicalAccess: "Basic on-site medical kit. Private clinics and Naivasha Sub-County Hospital located within a 15–20 minute drive in Naivasha town.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // "High" per source — flat single-level design, wide doorways, no stair barriers
    operationalLimitations: [
      "A la carte menu options become repetitive over multi-day stays",
      "Elevated pricing for incidental add-ons (e.g., $20 USD standalone breakfast)",
      "Lack of direct beachfront/waterfront edge",
      "Periodic weekend seminar noise from Nairobi group check-ins",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High-speed Wi-Fi, modern gym and steam room facilities, blackout drapes, and memory-foam sleep systems provide a fast, frictionless environment for digital work and physical recovery.",
      supportingSignals: ["Steam room and gym facilities", "Memory-foam sleep systems"],
      mismatchConditions: ["Potential weekend influxes of local seminar groups can briefly disrupt quiet outdoor spaces"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Sensory Overwhelmed", matchStrength: "Strong",
      reasoning: "Delivers a completely predictable, bug-free, air-conditioned environment with modern indoor plumbing, shielding anxious first-timers from uncomfortable environmental shocks.",
      supportingSignals: ["Bug-free, air-conditioned environment", "Modern indoor plumbing"],
      mismatchConditions: ["Lacks traditional canvas or wilderness aesthetic for those wanting classic safari romance"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "Serves as a clean, highly functional base camp for self-paced physical excursions across Hell's Gate and Crescent Island without forcing them into overpriced luxury lodge packages.",
      supportingSignals: ["Proximity to Hell's Gate and Crescent Island", "Self-paced excursion base camp"],
      mismatchConditions: ["No wild game viewing directly from guest room balconies"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Single-level layout without stairs, pristine tile floors, and close proximity to gentle walking safaris allow effortless stroller navigation and child safety.",
      supportingSignals: ["Single-level, stair-free layout", "Proximity to gentle walking safaris"],
      mismatchConditions: ["Absence of a structured children's activity club or dedicated shallow toddler splash park"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Lack of direct lakefront access, symmetrical boutique hotel layout, and potential weekend corporate group arrivals compromise romantic isolation and private wilderness immersion.",
      supportingSignals: [], mismatchConditions: ["Guest experience feels like a high-end city boutique hotel rather than an exclusive, secluded safari sanctuary"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "The Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "Manicured gardens and modern tile-and-glass architecture offer no natural animal hides, wild light tracks, or untamed wilderness backdrops on-site.",
      supportingSignals: [], mismatchConditions: ["Zero opportunities for spontaneous pre-dawn wildlife photography directly from the room"] },
    { fitType: "poorFit", category: "Slow Travelers", archetype: "The Conservation Guardian", matchStrength: "Strong",
      reasoning: "Focuses on modern urban luxury and wellness infrastructure rather than visible on-site habitat restoration, eco-conservation projects, or deep local community integration.",
      supportingSignals: [], mismatchConditions: ["Mismatch between traveler's desire for biophilic restoration and the property's clean, manicured modernism"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights",
    recommendedPositionNote: "Source doc offered a genuine either/or between two already-canonical values: 'Opening Immersion (Smooth Soft Landing)' or 'Recovery / Reset (Post-Safari Sanitization)'. Resolved to Opening Immersion per founder confirmation. This is lodge #1 of the Naivasha batch — no journeyRole concentration pattern to assess yet, though Recovery already appeared 2 of 4 times in the completed Nakuru batch and is worth continued tracking.",
    whatShouldComeBefore: "Long-haul international flight arrival into Nairobi (as Opening Immersion) — or, alternatively, a dusty, high-intensity game-tracking loop in the Maasai Mara/Northern Conservancies if used instead as a Recovery stop.",
    whatShouldComeAfter: "Deep bush canvas camps in the Mara or Samburu.",
    emotionalTransitionRationale: "Smoothly shifts the traveler from travel fatigue or raw bush exhaustion into a state of pristine cleanliness, physical decompression, and environmental control.",
  },

  narrative: {
    whyChosen: "Avian Court is the reference example for a clean, contemporary decompression stop along the Naivasha adventure corridor — a paved, single-level sanctuary that trades wilderness aesthetic for total physical reliability.",
    bestUsedFor: "The client requires pristine contemporary cleanliness, strong Wi-Fi, air conditioning, single-level accessibility, and modern wellness amenities as a 1-to-2-night transition stay within the Naivasha circuit.",
    lessSuitableFor: "The client demands old-world safari romance, canvas architecture, or a raw wilderness experience with direct lake frontage or wildlife grazing on-site.",
    journeyPositionNote: "Opening Immersion — a smooth soft landing absorbing initial arrival fatigue before entering the bush, or alternatively a sanitizing reset after days of dusty game drives.",
    overview: "Avian Court Hotel is a 43-room contemporary boutique hotel positioned along the Moi South Lake Road axis in Naivasha's Karagita sector. Breaking away from traditional thatch and canvas safari aesthetics, it utilizes a sleek, single-level design featuring polished tile floors, symmetrical stone features, and expansive glass. It acts as an urban-comfort sanctuary framed within the dusty volcanic adventure landscape of the Great Rift Valley.",
    emotionalFeel: "High-reliability decompression. Stepping into the rooms provides instant physical relief through high-spec modern finishes, bug-free climate control, and deep acoustic insulation. By day it serves as an efficient launchpad for rift valley excursions; by night it transitions into a relaxed poolside social setting around The Nest terrace.",
    sensorySignature: {
      visual: ["Clean minimalist stone and glass architecture set against manicured green lawns and poolside reflections"],
      auditory: ["Quiet climate-controlled interiors", "Crisp poolside water acoustics", "Muted garden bird calls shielded from main road noise"],
      olfactory: ["Clean linen", "Steam room eucalyptus", "Fresh outdoor garden air"],
    },
    positiveSignals: [
      "Impeccable modern room scale: generous structural volume, pristine cleanliness, and large bathrooms with walk-in rainfall showers",
      "Strategic pedestrian access to wildlife: roughly 12 minutes on foot (2 minutes by car) from Crescent Island Sanctuary",
      "High-spec wellness infrastructure: modern gym equipment and a high-performing steam room built for active recovery",
      "Excellent sleep insulation: memory-foam mattresses, down comforters, and solid soundproofing",
    ],
    negativeSignals: [
      "A la carte culinary monotony: menu options lack variety during extended multi-night stays",
      "Premium pricing of incidental extras: approx. $20 USD standalone breakfast, non-guest pool access",
      "Lack of direct waterfront edge: positioned off the lake shore without direct lawn-to-water access",
      "Weekend vibe influx: local corporate seminars and social groups from Nairobi can periodically disrupt the quiet atmosphere",
    ],
    hiddenGems: [
      "The Executive Suites feature a zero-stair, single-level design offering complete architectural accessibility for mobility-impaired guests or families maneuvering strollers. The summer gardens also provide an isolated micro-climate ideal for private group sundowners away from main hotel traffic.",
    ],
    signatureMemory: "Returning from a hot, dusty bicycle safari through Hell's Gate Gorge to an extended steam room session, followed by a quiet dinner on the illuminated pool terrace.",
    expectationManagement: "Travelers must understand that this is a modern, urban-style boutique hotel within an adventure corridor, not an open wilderness camp where animals wander past bedroom windows.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client requires pristine contemporary cleanliness, strong Wi-Fi, air conditioning, single-level accessibility, and modern wellness amenities as a 1-to-2-night transition stay within the Naivasha circuit.",
    ],
    doNotRecommendConditions: [
      "The client demands old-world safari romance, canvas architecture, or a raw wilderness experience with direct lake frontage or wildlife grazing on-site.",
    ],
    confidenceLevel: "High", // per source — "High Confidence (for transition and short-stay itineraries)"
    competitiveAdvantage: "Unmatched modern sleep comfort, structural cleanliness, single-level accessibility, and wellness facilities at an entry-level luxury price point ($80–$150/night).",
    mainLimitation: "Complete lack of traditional safari aesthetic and absence of direct lake frontage.",
    positioningSummary: "A sleek, contemporary luxury boutique hotel along Moi South Lake Road, providing high-spec room comfort, wellness amenities, and smooth logistical access for travelers transitioning through the active Naivasha adventure circuit.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara National Reserve (Oloolaimutia or private conservancies)", pairingCategory: "ecosystem", rationale: "Contrasts the high-intensity, predator-dense open savannah with low-intensity, self-paced volcanic and lake exploration in Naivasha." },
    { pairedEntity: "Aberdare Highlands or Northern Conservancies (Laikipia/Samburu)", pairingCategory: "regional", rationale: "Balances mountain/bush terrain with Rift Valley lacustrine landscapes." },
    { pairedEntity: "Entim Mara or Sentinel Mara", pairingCategory: "experience", rationale: "Combines this contemporary urban boutique hotel with an ultra-traditional, canvas-only luxury bush camp." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property operational records", "Regional geographic surveys", "Guest experience reviews", "Field accessibility audits"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Year of initial property establishment — explicitly flagged REQUIRES_VERIFICATION in source",
      "Exact decimal GPS coordinates — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};