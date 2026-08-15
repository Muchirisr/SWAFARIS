// data/knowledge-base/laikipia/lewa-wilderness.ts
export const lewaWilderness = {
  id: "lewa-wilderness", // NEW lodge, no existing DB record
  name: "Lewa Wilderness",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Lewa Wildlife Conservancy, Northern Foothills of Mount Kenya",
  ecosystem: "Semi-arid Savannah / Acacia Bushland / Riverine Valley / Montane Foothills",
  propertyType: "Heritage Safari Lodge / Historic Family Homestead",
  accommodationStyle: "Historic stone-and-timber thatch cottages (Hillside and Garden suites) featuring private fireplaces, rustic heritage furnishings, and expansive verandas.",
  locationDetail: "Lewa Wildlife Conservancy, Northern Foothills of Mount Kenya.",
  nearestGate: "Lewa Wildlife Conservancy Main Gate / Highway Gate",
  nearestAirstrips: ["Lewa Airstrip (15–20 minutes drive)"],
  accessibilityNotes: "Accessible year-round via all-weather conservancy roads or direct air transfers; hillside cottages require steep stone pathways, garden cottages offer flatter access.",
  priceRangeMinUsd: 1600,
  priceRangeMaxUsd: 2800,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED: price midpoint ($2,200) falls firmly in the Ultra-Luxury band ($1,200+) — no correction needed, self-reported tier accurate
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Mara Nyika",
    "Mara Plains",
    "Mara Expedition Camp",
    "Saruni Samburu",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Adventurous", "Wild", "Cultural"], // CORRECTED: "Intimate" dropped (no Honeymooners archetype present, Social Dynamic is Balanced with hosted dining, not isolation/romance-driven); "Authentic" non-canonical, replaced with "Cultural" per founder decision, redundant 4th slot dropped rather than force-fit
    energyType: ["Adventure", "Cultural Discovery", "Wildlife Focus"], // CORRECTED: all 4 stated terms non-canonical ("Decompression retreat", "Sensory-rich", "Active Exploration", "Heritage Luxury"); mapped to closest 3 canonical values, weaker terms dropped per founder decision
    experiencePace: "Moderate", // CORRECTED: "Balanced" non-canonical
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Classic Safari Elegance", // CORRECTED: "Heritage luxury" non-canonical; undisputed heritage-status exception applied (1972 Craig family homestead, founding role in Lewa Conservancy), consistent with Aberdare Country Club/White Rhino Hotel/Kilaguni Serena precedent — no price downgrade occurred here either, so conservatism principle doesn't apply
    journeyRole: "Opening Immersion", // resolved directly — "Mid-Journey Peak / Palate Cleanser" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Luxury Adventurers", "Nature Photographers"], // all valid real categories, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 8, authenticityScore: 9, premiumScore: 9,
    adventureScore: 9, privacyScore: 8, wildlifeExperienceScore: 9,
    culturalImmersionScore: 8, familySuitabilityScore: 10, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4.5–5 hours overland from Nairobi (250 km); 45-minute scheduled flight from Wilson Airport to Lewa Airstrip, plus 15–20 minute conservancy game-drive transfer.",
    seasonalAccessibility: "Open year-round; all-weather conservancy roads maintain full accessibility during rainy seasons.",
    rainySeasonImpact: "Minimal — high-clearance 4x4 vehicles ensure uninterrupted field operations during rainy seasons (April–May, November).",
    electricitySystem: "24-hour hybrid eco-solar system supported by battery storage and backup generators.",
    powerReliability: "Continuous",
    waterReliability: "Solar water heating systems backed by wood-fired boilers, continuous high-pressure hot water.",
    internetAvailability: "Wi-Fi available in central lodge zones and select accommodation units.",
    mobileNetwork: "Reliable Safaricom/Airtel cellular coverage across key elevated areas.",
    medicalAccess: "On-site first aid facilities; access to community medical centers in Nanyuki/Isiolo, supported by 24/7 AMREF Flying Doctors air-evacuation via Lewa Airstrip.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: false, // FOUNDER DECISION: source gave a genuinely split rating by unit type ("Moderate to Low" hillside / "Moderate" garden), not a single graded value — standard "Moderate → true" precedent didn't cleanly apply given property-wide reality requires active guest allocation to garden units rather than passive accessibility; resolved to false, hillside/garden split captured in operationalLimitations
    operationalLimitations: [
      "Steep stone pathways for hillside cottages present mobility challenges; guests with limited mobility or knee injuries must be allocated to lower garden units",
      "Traditional/heritage bathroom hardware rather than modern minimalist fixtures",
      "Hosted family-style dining as the default evening configuration",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "High",
      reasoning: "Sprawling garden suites, diverse activities (horse riding, biplane, swimming pool, tracker dog visits), and warm hosted hospitality make it an ideal base for multi-generational bonding without safari monotony.",
      supportingSignals: ["Sprawling garden suites", "Diverse non-vehicle activities", "Warm hosted homestead hospitality"],
      mismatchConditions: ["Hillside cottage allocations must be avoided for elderly family members with mobility constraints"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Replaces passive vehicle seating with active physical tracking—horseback safaris, guided bush walks, e-biking, and iconic yellow WACO biplane flights over Laikipia.",
      supportingSignals: ["Horseback safaris alongside plains game", "Guided bush walks", "WACO biplane flights", "E-bike tracks"],
      mismatchConditions: ["Must appreciate rustic heritage luxury over hyper-modern, minimalist steel-and-glass resort architecture"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "High",
      reasoning: "Guarantees rapid, uncrowded sightings of the Big Five, particularly black and white rhinos, within a secure conservancy framework that removes travel anxiety.",
      supportingSignals: ["High density of black and white rhinos", "Strictly managed, low-vehicle-density conservancy"],
      mismatchConditions: ["Requires openness to structured homestead dining and multi-modal activity schedules"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "High",
      reasoning: "Low vehicle density, outstanding rhino proximity, aerial photography perspectives from the open biplane, and direct cottage verandas overlooking riverbed corridors.",
      supportingSignals: ["Low vehicle density conservancy", "Aerial photography via open-cockpit biplane", "Cottage verandas overlooking riverbed corridors"],
      mismatchConditions: ["Biplane flights incur an additional fee and depend on weather conditions"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Low",
      reasoning: "Default hosted family-style dining and social homestead culture can create social friction for travelers demanding zero human interaction or total isolation.",
      supportingSignals: [], mismatchConditions: ["Guest feels uncomfortable during communal evening drinks and shared dinner tables (unless private dining is pre-arranged)"] },
    { fitType: "poorFit", category: "Social Explorers", archetype: "The Status-Network Curator", matchStrength: "Low",
      reasoning: "Traditional stone, thatch, and timber heritage aesthetic conflicts with expectations of sleek, minimalist glass-and-marble resort design.",
      supportingSignals: [], mismatchConditions: ["Disappointment with traditional bathroom fixtures and rustic architectural details"] },
    // DROPPED: "The Bonded Cohort" (source paired it with Milestone Celebrators under invented category "Families & Multi-Generational Groups") — Bonded Cohort belongs to Students, not Families, and had no genuine link to the fit description; kept Milestone Celebrators only
    // DROPPED: "The Low-Mobility Traveler (Unassisted Hillside Allocation)" — not a real archetype/category; mobility barrier already captured via mobilityFriendly: false and operationalLimitations
    // CORRECTED CATEGORY LABELS: "The Incognito Ascetic" fixed to Burned-out Executives (was invented "Ultra-Introverted Travelers Seeking Total Isolation"); "The Status-Network Curator" fixed to Social Explorers (was invented "Hyper-Modern Luxury Purists") — both archetypes kept, only category labels corrected
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion (or Mid-Journey Peak / Palate Cleanser)\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Laikipia sub-phase, lodge 4/4 so far): Opening Immersion x3, Adventure Peak x1 — Opening Immersion at 75% (3/4), below the Amboseli audit threshold of 86% but trending up; continuing to monitor closely.",
    whatShouldComeBefore: "Direct international arrival in Nairobi followed by a short flight to Lewa Airstrip, or an intense vehicle-heavy tracking segment in Amboseli, Tsavo, or Samburu.",
    whatShouldComeAfter: "A high-density big-cat savannah experience in the Maasai Mara (e.g., Mara Nyika, Mara Plains) or a coastal beach retreat in Diani/Lamu.",
    emotionalTransitionRationale: "Cures international travel fatigue or breaks up vehicle monotony by introducing active, ground-level multi-modal wilderness movement in a comforting homestead environment.",
  },

  narrative: {
    whyChosen: "A legendary, family-hosted heritage homestead offering multi-modal active adventure and deep rhino-conservation authenticity, positioned as a revitalizing opening stay.",
    bestUsedFor: "Families, active travelers, first-time safari guests, or luxury adventurers who want diverse non-vehicle activities, high-density rhino tracking, and authentic family-hosted hospitality.",
    lessSuitableFor: "Clients who require hyper-modern minimalist design, demand complete isolated dining without social interaction, or suffer from severe mobility issues without garden-cottage allocation.",
    journeyPositionNote: "Opening Immersion — active multi-modal movement and comforting hospitality dissolving travel fatigue.",
    overview: "Lewa Wilderness is a legendary heritage safari homestead operating as the original residence of the Craig family within the Lewa Wildlife Conservancy. Blending classic British safari charm with pioneering rhino conservation, the property feels like an organic extension of the Laikipia landscape rather than a commercial lodge. Featuring 10 stone-and-thatch cottages set in riverine gardens and along hillside contours, it offers a multi-dimensional safari experience centered on physical movement, conservation integration, and family hospitality.",
    emotionalFeel: "Warm, adventurous, and deeply restorative — welcomed into an extraordinary private country estate, combining active daytime exploration with cozy, firelit evening comfort.",
    sensorySignature: {
      visual: ["Rolling acacia valleys framed by Mount Kenya", "Black rhinos grazing across open conservancy plains", "Yellow WACO biplanes soaring over Laikipia gorges"],
      auditory: ["The open-air rush of wind during biplane flights", "Crackling cedar fires in cottage fireplaces", "Night calls of hyenas", "Rustling riverine foliage"],
      olfactory: ["Indigenous cedar woodsmoke", "Fresh garden blossoms", "Dry bush earth", "Leather horse saddles"],
    },
    positiveSignals: [
      "Offers horse riding safaris, guided bush walks, e-biking, and WACO biplane flights, liberating guests from continuous vehicle seating",
      "Genuine hosting by the Craig family and long-serving local team creates an authentic sense of belonging",
      "High density of black and white rhinos enjoyed under strict conservancy vehicle limits, preventing tourist congestion",
      "Open stone fireplaces lit in every cottage during evening turndown provide a comforting emotional anchor",
    ],
    negativeSignals: [
      "Steep stone pathways connecting hillside cottages can present mobility challenges for unprepared guests",
      "Fixtures and furnishings lean into traditional homestead rustic style rather than sleek contemporary luxury",
      "Family-style hosted dinners may catch ultra-introverted travelers off guard if private dining is not pre-booked",
      "WACO biplane flights are subject to local wind and weather conditions and require separate scheduling/fees",
    ],
    hiddenGems: [
      "Direct educational access to the backend operations of the Lewa Wildlife Conservancy—including visits to the anti-poaching tracker dog unit, conservation headquarters, and local community water/school initiatives. Hillside verandas offer effortless private viewing of elephants and rhinos moving along the river corridor below.",
    ],
    signatureMemory: "Soaring over the gorges and plains of Laikipia in the open cockpit of a yellow vintage WACO biplane as Mount Kenya stands in the background, followed by a firelit homestead dinner.",
    expectationManagement: "Travelers should understand this is a living heritage homestead rather than a minimalist modern resort. Guests must expect traditional architectural character, hilly stone pathways for elevated units, and an engaging social atmosphere during hosted meals.",
    idealNights: "3 to 4",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a family, active traveler, first-time safari guest, or luxury adventurer who wants diverse non-vehicle activities",
      "Client wants high-density rhino tracking and authentic family-hosted hospitality",
    ],
    doNotRecommendConditions: [
      "The client requires hyper-modern minimalist design",
      "Client demands complete isolated dining without social interaction, or suffers from severe mobility issues without garden-cottage assignment",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unrivaled multi-modal activity suite (stables, biplane, walking, e-bikes) combined with deep ancestral roots in East African rhino conservation.",
    mainLimitation: "Hilly terrain for hillside cottages and traditional heritage hardware versus hyper-modern resort trends.",
    positioningSummary: "A legendary, family-hosted heritage safari homestead that blends elite rhino conservation with thrilling multi-modal adventures, making it the ultimate revitalizing anchor for active travelers and luxury families.",
  },

  pairings: [
    { pairedEntity: "Mara Nyika", pairingCategory: "ecosystem", rationale: "Progressing from the rugged, semi-arid, rhino-dense hills of Laikipia to the wide savannahs and big cat territories of the Mara creates a complete safari narrative." },
    { pairedEntity: "Mara Plains", pairingCategory: "ecosystem", rationale: "Alternative Mara ecosystem pairing offering wide savannah and big cat territory contrast to Lewa's rugged hills." },
    { pairedEntity: "Mara Expedition Camp", pairingCategory: "ecosystem", rationale: "Alternative Mara ecosystem pairing continuing the complete safari narrative arc from Laikipia to the Mara." },
    { pairedEntity: "Saruni Samburu", pairingCategory: "regional", rationale: "Transitioning from stark, arid desert cliffs of Samburu into the lush, hosted valley of Lewa Wilderness provides a dramatic shift in pacing and landscape." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Lewa Conservancy operational records", "Lodge architectural specifications", "Field surveys", "Aviation logs", "Verified guest operational reports"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Annual maintenance schedule and flight availability timelines for the WACO biplane — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};