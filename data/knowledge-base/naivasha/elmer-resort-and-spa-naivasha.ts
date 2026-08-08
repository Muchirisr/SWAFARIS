// data/knowledge-base/naivasha/elmer-resort-and-spa-naivasha.ts
export const elmerResortAndSpaNaivasha = {
  id: "elmer-resort-and-spa-naivasha", // NEW lodge, no existing DB record
  name: "Elmer Resort & Spa Naivasha",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Naivasha–Murungaru Corridor, Great Rift Valley Highlands",
  ecosystem: "Highland Rift Valley Basin / Agricultural Highlands Edge / Aberdare Ranges Vista",
  propertyType: "Modern Highland Spa Resort & Country Retreat",
  accommodationStyle: "Avant-garde modern country villas and executive suites featuring clean geometric architecture, wood-burning fireplaces, and contemporary residential interiors.",
  locationDetail: "Naivasha–Murungaru corridor, elevated vantage point facing the Aberdare Ranges.",
  nearestGate: "Hell's Gate National Park (Elsa Gate: 46.6 km / 56 min); Mount Kipipiri Forest Reserve (32 km / 40 min); Crescent Island Sanctuary (31 km / 34 min)",
  nearestAirstrips: ["Naivasha Airstrip", "Loldia Airstrip"],
  accessibilityNotes: "Accessible year-round via fully paved tarmac. On-site navigation includes manicured lawns and stone-paved walkways, though vertical room block layouts with stairs require ground-floor selection for guests with reduced mobility.",
  priceRangeMinUsd: 110,
  priceRangeMaxUsd: 250,
  rawMarketTier: "Budget", // as stated in source doc; superseded by governance decision (Budget retired from vocabulary) and price-guide midpoint
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // corrected — $180 midpoint falls in the $150–299 Value band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Mara Intrepids Camp, Maasai Mara (ecosystem contrast pairing)",
    "Villa Rosa Kempinski Nairobi (regional/urban transit pairing)",
    "Hell's Gate National Park or Mount Kipipiri Forest Reserve day trips (experience pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Restorative", "Rustic", "Social"], // corrected from source doc's "Restful & Serene | Rustic | Social" — "Restful & Serene" not exact vocabulary
    energyType: ["Family Connection", "Wellness"], // corrected from source doc's "Balanced Leisure | Family & Social" — neither valid
    experiencePace: "Self-Determined", // retained as-is; closest recognizable framing to source doc's own term
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort", // source doc's "Modern Premium Comfort" is not valid vocabulary. STANDING PRINCIPLE APPLIED: amenity spec (private hot tubs, fireplaces, Italian linens) reads more luxurious than the corrected Value price tier — resolved toward the more conservative label per founder's under-promise/over-deliver principle, rather than "Modern Luxury".
    journeyRole: "Recovery", // resolved from source doc's non-canonical "The Effortless Weekend Escape / The Mid-Route Softener (Mid-Circuit Balancing Hub)" per founder confirmation. Doc's own "wash off trail fatigue... before heading into the Maasai Mara" language matches the same Recovery pattern as Hillcourt, Buraha Zenoni, and Enashipai. Naivasha tally now: Opening Immersion x2, Recovery x2 — same 2-and-2 split seen in the completed Nakuru batch. Not a forced-fit concentration issue (each resolution was independently well-supported), but a real signal that spa/wellness-format lodges are consistently landing on Recovery across regions.
    idealTravelersPrimary: ["Burned-out Executives", "Families", "Solo Explorers", "First-Time Safari Travelers"], // "Bleisure Explorers & Digital Nomads", "Modern Couples & Staycationers", and "Mid-Circuit Safari Transit Travelers" are all non-canonical categories; replaced based on the real (but mis-categorized) archetypes actually used below
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 9, authenticityScore: 6, premiumScore: 8,
    adventureScore: 5, privacyScore: 7, wildlifeExperienceScore: 3,
    culturalImmersionScore: 4, familySuitabilityScore: 8, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2 to 2.5 hours overland from Nairobi via the Nairobi–Nakuru Highway turning onto the Naivasha–Murungaru Road (15 minutes off the main highway).",
    seasonalAccessibility: "Open year-round via fully paved tarmac.",
    rainySeasonImpact: "None reported from road access; highland position facing the Aberdares experiences sharp temperature drops after sunset, making unheated outdoor pool areas cold in the evening.",
    electricitySystem: "24/7 continuous main grid electricity backed by heavy-duty auto-synchronizing backup generators.",
    powerReliability: "Continuous power supply across all rooms and public spaces.",
    waterReliability: "Pressurized continuous hot water systems powering in-room private hot tubs, jetted soaking tubs, and rainfall showers.",
    internetAvailability: "Robust, high-speed fiber Wi-Fi throughout rooms and public spaces with speeds exceeding 25 Mbps. Strong 4G/5G mobile coverage across Safaricom and Airtel.",
    mobileNetwork: "Strong Safaricom and Airtel 4G/5G coverage.",
    medicalAccess: "On-site first responder kit. Naivasha town medical centers and private hospitals located within 20–25 minutes; air-evacuation access from nearby airstrips.",
    childFriendly: true, // "High" per source
    mobilityFriendly: false, // "Moderate to Low (Upper floors)" per source — multi-story villa structures lack elevator infrastructure
    operationalLimitations: [
      "Lack of direct lake frontage requires guest transfers for boat safaris",
      "Occasional rigid management policy enforcement reported during low-occupancy periods",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High-speed Wi-Fi (25+ Mbps), in-room wood fireplaces, private indoor hot tubs, and a 23-treatment-room spa provide a seamless environment for mental recovery and light remote work.",
      supportingSignals: ["23-treatment-room spa", "Private indoor hot tubs"],
      mismatchConditions: ["Must request upper-tier private suites to avoid weekend family pool activity"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Enclosed grounds, children's playground, dedicated kids' pool, and multi-bedroom family suites provide a stress-free environment for parents.",
      supportingSignals: ["Dedicated kids' pool and playground", "Multi-bedroom family suites"],
      mismatchConditions: ["Unheated pool areas can feel chilly for young swimmers during cool highland afternoons"] },
    { fitType: "ideal", category: "Solo Explorers", archetype: "The Social Catalyst", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this real archetype under an invented category (\"Bleisure Explorers & Groups\") — its real category is Solo Explorers. Outstanding culinary pastry program, communal lawn spaces, daily manager's reception, and proximity to regional excursions foster smooth group dynamics.",
      supportingSignals: ["Communal lawn spaces and daily manager's reception", "Proximity to regional excursions"],
      mismatchConditions: ["Absence of an on-site night bar or high-energy evening entertainment"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this real archetype under an invented category (\"Value Seekers\") — its real category is First-Time Safari Travelers. Delivers high-end hard product features (jacuzzis, fireplaces, Italian linens) usually found in luxury tiers at an accessible budget rate ($110–$250/night).",
      supportingSignals: ["High-end hard product at an accessible rate", "Jacuzzis, fireplaces, Italian linens"],
      mismatchConditions: ["Must accept driving 30+ minutes to reach Lake Naivasha boat launches"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Pure Wilderness Purist\") under an invented category (\"Deep Bush Adventurers\"); mapped to The Low-Impact Purist per founder confirmation. Paved paths, manicured lawns, avant-garde concrete architecture, and lack of wild animal presence eliminate the raw bush atmosphere.",
      supportingSignals: [], mismatchConditions: ["Total mismatch for clients expecting canvas tents, campfire bush chatter, or roaring lions at night"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this archetype under an invented category (\"Big Five Safari Focused\"); its real category is Luxury Adventurers. Complete absence of big game, predators, or open-vehicle game drives directly from the property.",
      supportingSignals: [], mismatchConditions: ["Disappointment if booked expecting immediate safari tracking from their doorstep"] },
    // NOTE: source doc listed a third incompatible entry, "The Shoreline Isolationist (Lakefront
    // Seekers)". Dropped per founder confirmation — neither the category nor the archetype
    // exists in the ontology, and no genuine archetype in the 38-list captures a lakefront-only
    // preference. The distance-from-lake concern remains fully captured in operationalLimitations
    // and negativeSignals below.
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as non-canonical 'The Effortless Weekend Escape / The Mid-Route Softener (Mid-Circuit Balancing Hub)'; resolved to Recovery per founder confirmation, consistent with the doc's own trail-fatigue/decompression language. This is lodge #4 of the Naivasha batch. Naivasha tally: Opening Immersion x2, Recovery x2 — mirrors the exact split seen in the completed Nakuru batch.",
    whatShouldComeBefore: "Intense, dust-heavy overland driving or predator tracking in Samburu, Lake Bogoria, or Lake Nakuru; or an urban departure from Nairobi.",
    whatShouldComeAfter: "High-intensity bush wilderness in the Maasai Mara or a return transit to Nairobi / JKIA.",
    emotionalTransitionRationale: "Shifts traveler psychology from rugged trail alertness to high-comfort residential relaxation, allowing guests to wash off dust, soak in private tubs, and recharge before the next safari leg.",
  },

  narrative: {
    whyChosen: "Elmer is the reference example for a highland residential retreat within the Naivasha circuit — a modern spa resort trading lakefront positioning for elevated mountain vistas and in-room luxury amenities at an accessible price point.",
    bestUsedFor: "The client prioritizes modern room comfort (private hot tubs, fireplaces, memory foam beds), strong Wi-Fi, family-friendly facilities, or an extensive spa at an attractive price point.",
    lessSuitableFor: "The client demands direct lake frontage, step-out boat launches, hippos on the lawn, or a remote off-grid bush camp.",
    journeyPositionNote: "Recovery — a mid-circuit balancing stop that shifts traveler psychology from rugged trail alertness to high-comfort residential relaxation before the next safari leg.",
    overview: "Elmer Resort & Spa introduces a contemporary residential hospitality format to the Naivasha ecosystem. Situated along the Naivasha–Murungaru corridor on an elevated vantage point, it trades standard lakefront lodging for sweeping vistas of the Aberdare Ranges. Modern geometric structures sit within manicured lawns, offering a Nordic-inspired highland retreat focused on in-room luxury, fireplaces, private hot tubs, and wellness.",
    emotionalFeel: "Predictable, protective, and effortlessly comfortable. The feel mirrors a high-end country club where guests slow down instantly, moving from the crisp mountain air outside to warm indoor fires and private hot tubs.",
    sensorySignature: {
      visual: ["Clean modern villa architecture set against green manicured lawns with views of mist rising off the Aberdare peaks"],
      auditory: ["Gentle mountain breezes", "Quiet countryside ambiance", "The crackle of wood fires in guest suites"],
      olfactory: ["Crisp highland air mixed with woodsmoke from in-room fireplaces", "Fresh morning pastries from the bakery"],
    },
    positiveSignals: [
      "Exceptional room specifications: memory foam beds, Frette Italian sheets, functional fireplaces, and private indoor hot tubs deliver outstanding value",
      "Culinary and pastry excellence: high praise for food presentation and bakery items",
      "High-speed connectivity: reliable 25+ Mbps Wi-Fi supports seamless digital nomad work or group connectivity",
      "Service mindset: attentive, eager-to-please staff and restaurant managers accommodating custom requests",
    ],
    negativeSignals: [
      "Distance from Lake Naivasha: positioned ~19 miles inland from Crescent Island; lacks direct water views or boat launches",
      "Highland evening temperature drops: crisp mountain air makes outdoor open terrace areas and unheated pools cold at night",
      "Stairs and vertical layout: upper-floor villa suites are accessible strictly via stairs, posing hurdles for mobility-impaired guests",
    ],
    hiddenGems: [
      "The impressive 23-treatment-room wellness spa framework makes wellness a core pillar rather than an afterthought. Complimentary bicycle rentals also allow for peaceful morning countryside rides along rural roads facing the Aberdares before midday.",
    ],
    signatureMemory: "Sipping warm tea by your private suite's wood fireplace after a long spa session, looking out at the mist settling over the Aberdare Ranges.",
    expectationManagement: "Clients must understand Elmer is a mountain-view highland retreat, not a lakeside lodge. Lake activities require a 30-minute drive, and evening mountain temperatures require warm clothing.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client prioritizes modern room comfort (private hot tubs, fireplaces, memory foam beds), strong Wi-Fi, family-friendly facilities, or an extensive spa at an attractive price point.",
    ],
    doNotRecommendConditions: [
      "The client demands direct lake frontage, step-out boat launches, hippos on the lawn, or a remote off-grid bush camp.",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Highest in-room luxury amenity specs (jacuzzis, fireplaces, Italian linens) in its price tier along the Naivasha corridor.",
    mainLimitation: "Distance from Lake Naivasha shoreline and lack of on-site wildlife.",
    positioningSummary: "A chic, modern highland oasis facing the Aberdare Ranges that trades standard safari rusticism for premium residential luxury, boasting in-room fireplaces, private hot tubs, and a world-class 23-treatment-room spa.",
  },

  pairings: [
    { pairedEntity: "Mara Intrepids Camp, Maasai Mara", pairingCategory: "ecosystem", rationale: "Moving from Elmer's modern stone-and-fireplace mountain suites to the raw canvas riverine environment of the Talek River creates an incredible contrast between highland comfort and deep-bush adventure." },
    { pairedEntity: "Villa Rosa Kempinski Nairobi", pairingCategory: "regional", rationale: "Traveling via the Expressway directly from Kempinski to a scenic countryside spa resort in Naivasha provides a smooth, continuous luxury thread." },
    { pairedEntity: "Hell's Gate National Park or Mount Kipipiri Forest Reserve day trips", pairingCategory: "experience", rationale: "Active cycling and hiking before returning to Elmer for spa recovery." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Heated pool conversion timelines — explicitly flagged for periodic re-verification in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};