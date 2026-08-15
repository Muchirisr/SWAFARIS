// data/knowledge-base/laikipia/ol-malo.ts
export const olMalo = {
  id: "ol-malo", // NEW lodge, no existing DB record
  name: "Ol Malo",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Laikipia Plateau / Ewaso Ng'iro River Basin",
  ecosystem: "Semi-Arid Wilderness / Escarpment & Rocky Canyon / Bushland Edge",
  propertyType: "Family-Owned Private Ranch & Heritage Luxury Bush Home",
  accommodationStyle: "Organic, hand-sculpted stone, thatch, and olive-wood cottages integrated into natural rock formations with private cliff-view verandahs.",
  locationDetail: "Steep rocky escarpment overlooking the Laikipia plateau and the Ewaso Ng'iro River basin.",
  nearestGate: "Private Ranch Boundary / Conservancy Access Points",
  nearestAirstrips: ["Loisaba Airstrip (~45–60 minutes road transfer)", "Private Ol Malo Helipad & Airstrip on-site"],
  accessibilityNotes: "Positioned on a steep, rocky escarpment edge; accessible via air transfer or 4x4 vehicles; natural flagstone pathways, rock steps, and sloped terrain.",
  priceRangeMinUsd: 1500,
  priceRangeMaxUsd: 2600,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED: price midpoint ($2,050) falls firmly in the Ultra-Luxury band ($1,200+) — no correction needed, third consecutive Laikipia lodge to confirm clean
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Angama Mara",
    "Mara Plains",
    "Sasaab (Samburu)",
    "Ngare Ndare Forest",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Rustic", "Reflective", "Peaceful"], // CORRECTED: "Intimate" dropped/replaced with Reflective (no Honeymooners archetype present, family-hosted not romance-driven); "Deeply Grounded Liberation" (invented compound) → Peaceful
    energyType: ["Adventure", "Nature Immersion", "Cultural Discovery"], // CORRECTED: "Adventurous" is an emotional-tone value not an energy type, resolved to canonical "Adventure"; "Immersive Nature" reworded to "Nature Immersion"; "Unbound Horizon" (invented) → Cultural Discovery per founder decision given 10/10 cultural immersion score and Samburu Trust partnership
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Authentic Wilderness Simplicity", // CORRECTED: "Heritage Luxury | Quiet Luxury | Hand-Sculpted Eco-Luxury" all non-canonical; founder chose Authentic Wilderness Simplicity over Classic Safari Elegance/Rustic Immersion — genuine three-way judgment call, no price downgrade so conservatism didn't force it
    journeyRole: "Opening Immersion", // resolved directly — "Mid-Journey Peak" not canonical (distinct from our "Adventure Peak"/"Mid-Journey Transition"), but "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Families", "Luxury Adventurers", "Slow Travelers", "Burned-out Executives"], // CORRECTED: real category names substituted for source's "Families (Multi-Generational)" and "Soul-Seekers & Burned-out Executives" — Soul-Seekers dropped (not real, already covered by Burned-out Executives)
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 9, authenticityScore: 10, premiumScore: 9,
    adventureScore: 9, privacyScore: 9, wildlifeExperienceScore: 6,
    culturalImmersionScore: 10, familySuitabilityScore: 10, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "50–60 minutes flight from Wilson Airport (Nairobi) to Loisaba Airstrip, plus 45–60 minute scenic road transfer; or direct helicopter touch-down on property.",
    seasonalAccessibility: "Operates seasonal closures (typically closed mid-April to May and November for rains).",
    rainySeasonImpact: "High cliff elevation prevents flooding, but dirt access tracks require 4x4 transport during rain cycles.",
    electricitySystem: "24-hour hybrid solar photovoltaic system backed up by generators.",
    powerReliability: "Continuous",
    waterReliability: "Solar-heated water system supported by wood-fired boilers.",
    internetAvailability: "Wi-Fi available in central lounge areas and suites.",
    mobileNetwork: "Intermittent Safaricom cellular voice/data coverage across elevated cliff points.",
    medicalAccess: "On-site basic first aid kit and trained management staff; emergency air-evacuation via AMREF Flying Doctors and on-site private helicopters.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: false, // "Low" per source, unambiguous
    operationalLimitations: [
      "Lower predator density compared to national reserves",
      "Terrain navigation challenges for guests with severe physical mobility limitations",
      "Irregular/non-standardized room layouts",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "High",
      reasoning: "Unmatched family-hosted environment where children and adults engage in camel rides, river walks, horseback riding, and helicopter excursions. Ol Malo House offers a private, secure base camp.",
      supportingSignals: ["Dedicated child-focused activities (camel riding, river swimming, craft workshops)", "Ol Malo House private secure base camp", "Multi-generational family hosting"],
      mismatchConditions: ["Parents must monitor young children around steep cliff edges and uneven rock steps"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Direct access to private helicopters (Raven 44) on-site for bucket-list fly-outs to Suguta Valley, Lake Turkana, and Mount Ololokwe while maintaining an ultra-comfortable home base.",
      supportingSignals: ["On-site private helicopter (Raven 44)", "Fly-outs to Suguta Valley, Lake Turkana, Mount Ololokwe", "Rock climbing and fly-camping"],
      mismatchConditions: ["Must understand that wildlife tracking is patient and tracking-focused rather than high-density vehicle chasing"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "Total acoustic silence, absence of rigid schedules, cliffside infinity pool, and soulful family warmth dismantle corporate stress and urban burnout.",
      supportingSignals: ["Total acoustic silence", "Cliffside infinity pool", "Absence of rigid schedules"],
      mismatchConditions: ["Unconventional, organic architecture lacks corporate symmetry or modern clinical fixtures"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "Ol Malo operates on patient tracking across vast landscapes rather than high-concentration predator sightings from a 4x4 vehicle.",
      supportingSignals: [], mismatchConditions: ["Frustration if expecting back-to-back lion kills within hours of arrival (better suited for Masai Mara)"] },
    // DROPPED: "The Bonded Cohort" (source combined it with Early-Stage Nurturers under invented category "Multi-Generational Families") — Bonded Cohort belongs to Students, not Families, no genuine link to the fit description; kept Early-Stage Nurturers under corrected category "Families"
    // DROPPED: "The Clinical Uniformity Seeker (Corporate Luxury Travelers)" — not a real archetype/category, no clean equivalent
    // DROPPED: "The Severe Mobility-Impaired Traveler" — not a real archetype/category; mobility barrier already captured via mobilityFriendly: false and operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source stated \"Mid-Journey Peak | Opening Immersion (Palate Cleanser & Core Grounding Anchor)\"; 'Mid-Journey Peak' is not canonical (distinct from our canonical 'Adventure Peak' and 'Mid-Journey Transition'), but Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Laikipia sub-phase, lodge 6/6 so far): Opening Immersion x5, Adventure Peak x1 — Opening Immersion at 83% (5/6), the second-highest concentration in the project after Amboseli's 86% origin case; still below the audit threshold but flagged prominently for founder awareness.",
    whatShouldComeBefore: "Overland arrival or flight from Nairobi, or a high-intensity, vehicle-heavy predator location (e.g., Masai Mara or Samburu).",
    whatShouldComeAfter: "A high-volume wildlife reserve (if used as an opener), an elite mobile fly-camping expedition into northern deserts, or a coastal beach retreat (e.g., Lamu / Diani).",
    emotionalTransitionRationale: "Deconstructs urban stress or vehicle fatigue from intensive game drives, grounding the traveler through multi-modal freedom, intimate culture, and vast open space.",
  },

  narrative: {
    whyChosen: "An extraordinary, family-hosted cliffside ranch blending hand-sculpted stone luxury, deep Samburu heritage, and helicopter-driven frontier adventures, positioned as a deeply grounding opening stay.",
    bestUsedFor: "Ultra-high-net-worth families, multi-generational groups, luxury adventurers, or burned-out executives looking for deep cultural authenticity, immense private space, unhurried freedom, and helicopter frontier access.",
    lessSuitableFor: "Checklist-driven predator trackers demanding rapid lion sightings, travelers seeking standardized corporate minimalist luxury, or those with severe mobility impairments.",
    journeyPositionNote: "Opening Immersion — a deeply grounding decompression stay before higher-intensity legs.",
    overview: "Ol Malo is an organic, hand-sculpted masterpiece that functions as a gateway to Kenya's wild northern frontier. Anchored on a steep rocky escarpment overlooking the rugged Laikipia plateau and the Ewaso Ng'iro River basin, the architecture eschews classic canvas tents in favor of spectacular stone and thatch cottages that mirror the natural curves of the landscape.",
    emotionalFeel: "Deeply grounded liberation. Because the property sits outside national park boundaries and corporate constraints, the psychological pressure of 'checking off wildlife lists' immediately evaporates. The rhythm is remarkably fluid and unhurried—mornings might dissolve into a walk down to the river with Samburu warriors, while afternoons lean into long, contemplative swims in the cliff-edge infinity pool.",
    sensorySignature: {
      visual: ["Hand-sculpted stone arches", "Thatch roofs", "Endless views across the Laikipia escarpment canyon", "Vibrant Samburu beadwork details"],
      auditory: ["Acoustic canyon silence", "Wind through wild olive trees", "Nocturnal river sounds", "Crackling wood fires"],
      olfactory: ["Wild olive wood smoke", "Dry cedar", "Acacia blossoms", "Crisp high-altitude air"],
    },
    positiveSignals: [
      "Authentic, uncommercialized connection with local Samburu communities via the Samburu Trust",
      "Unscripted multi-modal exploration (horseback riding, camel tracking, river walking, fly-camping)",
      "Unique, whimsical hand-sculpted architecture featuring sunken rock baths, exposed tree branches, and private verandahs",
      "Multi-generational Francombe family hosting creates an intimate, non-transactional home-state atmosphere",
      "On-site private helicopter operations unlock raw northern frontier destinations (Lake Turkana, Suguta Valley)",
    ],
    negativeSignals: [
      "Wildlife tracking requires patience across wide open terrain; lower big cat concentration than the Mara basin",
      "Organic construction means room configurations are individual and unconventional",
      "Escarpment positioning requires navigating natural rock steps and uneven stone pathways",
    ],
    hiddenGems: [
      "On-site private helicopter fleet paired with deep Samburu Trust connections allows completely bespoke northern itineraries. Overnight fly-camping along the riverbed or on star-bed platforms offers pure exposure to northern cosmos with zero light pollution. Exceptionally well-schooled horses and camels allow non-vehicular wildlife viewing for all skill levels.",
    ],
    signatureMemory: "Taking off at dawn in an open-door helicopter from Ol Malo's cliff edge to fly over the Suguta Valley sand dunes, before returning for breakfast hosted by the Francombe family overlooking Mount Kenya.",
    expectationManagement: "Guests must understand Ol Malo is a family-hosted private ranch and wilderness sanctuary, not a standardized corporate safari resort. Activities focus on multi-modal adventure, culture, and space rather than vehicle-based predator tracking.",
    idealNights: "3 to 4",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is an ultra-high-net-worth family, multi-generational group, luxury adventurer, or burned-out executive",
      "Client wants deep cultural authenticity, immense private space, unhurried freedom, and helicopter frontier access",
    ],
    doNotRecommendConditions: [
      "The client is a checklist-driven predator tracker demanding rapid lion sightings",
      "A traveler seeking standardized corporate minimalist luxury, or someone with severe mobility impairments",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Direct family hosting by the Francombes, private on-site helicopter integration, uncommercialized Samburu immersion, and unmatched multi-modal activity spectrum.",
    mainLimitation: "Lower predator density relative to the Mara and steep, uneven stone terrain.",
    positioningSummary: "An extraordinary, family-hosted cliffside ranch blending hand-sculpted stone luxury with deep Samburu heritage and helicopter-driven frontier adventures, perfect for families and soul-searching travelers seeking unbound wilderness freedom.",
  },

  pairings: [
    { pairedEntity: "Angama Mara", pairingCategory: "ecosystem", rationale: "Moving from the high-octane, vehicle-driven predator action of the Mara plains to the open-horizon, multi-modal slow living of Ol Malo creates a perfect energetic contrast." },
    { pairedEntity: "Mara Plains", pairingCategory: "ecosystem", rationale: "Alternative Mara ecosystem pairing offering the same energetic contrast to Ol Malo's slow, multi-modal living." },
    { pairedEntity: "Sasaab (Samburu)", pairingCategory: "regional", rationale: "Balances high-cliff riverine views with alternative northern microclimates." },
    { pairedEntity: "Ngare Ndare Forest", pairingCategory: "experience", rationale: "Balances high-cliff riverine views with forest canopy walks and alternative northern microclimates." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property specifications", "Francombe family operational records", "Laikipia conservancy surveys", "Field intelligence", "Regional air access logs"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Helicopter flight hourly charter tariff updates for the current season, requiring direct operational confirmation prior to final client quote — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};