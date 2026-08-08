// data/knowledge-base/naivasha/the-watch-tower-sanctuary-farm.ts
export const theWatchTowerSanctuaryFarm = {
  id: "the-watch-tower-sanctuary-farm", // NEW lodge, no existing DB record
  name: "The Watch Tower (Sanctuary Farm)",
  country: "Kenya",
  region: "Naivasha",
  subRegion: "Moi South Lake Road",
  ecosystem: "Rift Valley Lake Interface / Freshwater Wetlands / Yellow-Barked Fever Tree Woodland",
  propertyType: "Converted Historic Architectural Lookout / Eco-Luxury Micro-Sanctuary",
  accommodationStyle: "Minimalist, two-story converted historic horse-racing lookout featuring full 360-degree panoramic glass walls on the upper bedroom floor and a ground-floor kitchen/deck.",
  locationDetail: "Private 450-acre Sanctuary Farm estate, off Moi South Lake Road.",
  nearestGate: "Sanctuary Farm Gate (direct access); Hell's Gate National Park (Elsa Gate: ~12 km / 20 minutes)",
  nearestAirstrips: ["Loldia Airstrip", "Naivasha Airstrip"],
  accessibilityNotes: "Accessible year-round via paved roads along Moi South Lake Road, turning onto unpaved dirt estate tracks inside the farm. Ground terrain features natural dirt and lawn pathways; the structure itself is a multi-story vertical tower with steep interior stairs.",
  priceRangeMinUsd: 150,
  priceRangeMaxUsd: 220,
  rawMarketTier: "Mid-Tier Premium", // as stated in source doc; superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // corrected — $185 midpoint falls in the $150–299 Value band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Saruni Samburu, Samburu (ecosystem contrast pairing)",
    "Naboisho or Mara North private concession, Maasai Mara (regional pairing)",
    "Hell's Gate National Park or Crescent Island Sanctuary day trips (experience pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Inspirational", "Romantic"], // corrected from source doc's "Cinematic | Intimate | Peaceful" — "Cinematic" and "Intimate" not valid vocabulary; "Romantic" genuinely fits here given the explicit honeymoon/couples framing (unlike Avian Court, where "Intimate" was avoided)
    energyType: ["Nature Immersion", "Luxury Escape"], // corrected from source doc's "Decompression Retreat | Immersive Nature" — consistent with the Avian Court/Enashipai resolution pattern
    experiencePace: "Slow", // confirmed
    comfortPhilosophy: ["Exclusive Luxury"],
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // source doc's "Eco-Luxury | Quiet Luxury" mapped per founder confirmation, supported by 9/10 Privacy Score, Isolated social dynamic, and single-unit exclusive-use structure (same mapping as The Cliff)
    journeyRole: "Recovery", // resolved from source doc's dual canonical framing "Opening Immersion / Mid-Journey Reset (Recovery / Softener)" per founder confirmation. This tips Naivasha's tally to Opening Immersion x2, Recovery x3 — Recovery is now the more frequent value in this batch, consistent with the wellness/decompression-format pattern already noted across both Nakuru and Naivasha.
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Nature Photographers", "Slow Travelers"], // "Honeymooners & Romantic Couples", "Nature & Architectural Photographers", and "Slow Travelers & Independent Writers" normalized to their canonical category names
    idealTravelersSecondary: [],
    intensityScore: 2, relaxationScore: 9, authenticityScore: 9, premiumScore: 8,
    adventureScore: 5, privacyScore: 9, wildlifeExperienceScore: 7,
    culturalImmersionScore: 4, familySuitabilityScore: 2, comfortScore: 7,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "2 to 2.5 hours overland from Nairobi (90 km via Mai Mahiu / Naivasha Road); 20–30 minutes road transfer from local Naivasha airstrips.",
    seasonalAccessibility: "Open year-round via paved roads to the estate, then private dirt tracks.",
    rainySeasonImpact: "Shoreline proximity brings periodic evening lake-midge / lake-fly swarms. Nighttime walking on foot is strictly prohibited due to heavy hippo grazing.",
    electricitySystem: "Continuous main grid electricity supported by local backup systems and dedicated in-unit lighting and charging points.",
    powerReliability: "Reliable in-unit lighting and charging points.",
    waterReliability: "Enclosed open-air double shower featuring reliable solar and grid-assisted hot water systems with good water pressure.",
    internetAvailability: "Good 4G cellular data network coverage (Safaricom/Airtel) accessible within the elevated tower. Basic Wi-Fi available across main farm hubs.",
    mobileNetwork: "Good Safaricom and Airtel 4G coverage within the elevated tower.",
    medicalAccess: "On-site basic first aid. Major private medical centers located within Naivasha town (20 minutes away); emergency medical air-evacuation coverage to Nairobi available.",
    childFriendly: false, // "Low" per source — steep stairs, low railings, un-fenced hippo grazing zones
    mobilityFriendly: false, // "Low" per source — multi-level vertical tower accessible strictly via internal stairs
    operationalLimitations: [
      "Self-catering format requires advance meal planning or pre-booked walks to the farm's Kijiko restaurant",
      "Zero nighttime movement outside the tower",
      "Acoustic transmission due to rustic timber and glass construction",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Total acoustic isolation, 360-degree nature views from bed, and lack of mandatory lodge schedules allow over-stimulated minds to reset completely.",
      supportingSignals: ["Total acoustic isolation", "No mandatory lodge schedules"],
      mismatchConditions: ["Must accept self-catering or pre-planning meals at the farm restaurant"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Highly intimate, romantic design featuring an open-air starlight shower, elevated glass bedroom, and private nocturnal hippo watching from bed.",
      supportingSignals: ["Open-air starlight shower", "Private elevated glass bedroom"],
      mismatchConditions: ["Must be comfortable with ambient nature sounds, insects, and self-directed evening logistics"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed a non-canonical archetype (\"The Slow Traveler\") under an invented category (\"Nature Photographers & Creatives\"); mapped to The Fine-Art Ethologist per founder confirmation, given the fit rationale's photography-forward framing. Unsupervised daytime walking liberty across 450 private acres lets guests track gentle game on foot and shoot photographs at their own pace.",
      supportingSignals: ["450-acre unsupervised walking liberty", "Direct wildlife proximity for photography"],
      mismatchConditions: ["Absence of guided 4x4 open-vehicle game drives for structured big game viewing"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source listed this archetype under an invented category (\"Big Five Safari Focused\"); its real category is Luxury Adventurers. Complete absence of lions, leopards, elephants, or structured 4x4 predator tracking on the estate.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment if expecting a traditional, high-density predator viewing safari"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Vertical tower architecture, steep stairs, low railings, open glass walls, and nocturnal hippos roaming the ground level create physical safety hazards.",
      supportingSignals: [], mismatchConditions: ["High parental stress and physical safety risks for toddlers or young kids"] },
    // NOTE: source doc listed a third incompatible entry, "The Ultra-Luxury Traditionalist
    // (Full-Service Seekers)". Dropped per founder confirmation — neither the category nor the
    // archetype exists in the ontology. The full-service/butler concern remains fully captured
    // in operationalLimitations and negativeSignals below.
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "Source frames this as a genuine either/or between two already-canonical values: 'Opening Immersion / Mid-Journey Reset (Recovery / Softener)'. Resolved to Recovery per founder confirmation. This is lodge #5 of the Naivasha batch. Naivasha tally: Opening Immersion x2, Recovery x3 — Recovery now the more frequent value, consistent with the wellness/decompression pattern seen across both Nakuru and Naivasha.",
    whatShouldComeBefore: "An international long-haul flight into Nairobi (NBO) or a dust-heavy, high-intensity road transit from northern safari circuits.",
    whatShouldComeAfter: "A high-intensity predator-focused circuit in a private Mara concession (e.g., Mara North or Naboisho) or an active Rift Valley excursion.",
    emotionalTransitionRationale: "Gently strips away urban travel stress and flight fatigue through quiet, tactile walking among herbivores, establishing a grounded tone for the safari ahead.",
  },

  narrative: {
    whyChosen: "The Watch Tower is the reference example for architectural exclusivity within Naivasha: a single-unit converted historic lookout offering total privacy and unfiltered wildlife proximity on a private 450-acre conservancy.",
    bestUsedFor: "The client is a design-conscious romantic couple, burned-out executive, photographer, or slow traveler seeking total privacy, architectural uniqueness, and on-foot nature access.",
    lessSuitableFor: "The client demands 24/7 room service, butler service, Big Five predator tracking, or is traveling with young children or guests with mobility constraints.",
    journeyPositionNote: "Recovery — a low-stimulation pocket to rest, process photos, and reset, positioned mid-journey between dusty road legs.",
    overview: "The Watch Tower at Sanctuary Farm is an exercise in structural voyeurism and architectural decompression. Originally constructed as an elevated horse-racing lookout on a private 450-acre family estate, it has been reimagined as a minimalist, two-story micro-sanctuary. The ground floor houses a compact kitchen and dining deck, while the upper floor features a plush bedroom wrapped entirely in 360-degree panoramic glazing.",
    emotionalFeel: "A state of meditative awe rooted in safe exposure within wildness. Daytime brings peaceful vulnerability as zebras and giraffes step past the timber supports, while nightfall creates an intimate, primal cocoon elevated safely above grazing hippos.",
    sensorySignature: {
      visual: ["Full 360-degree canopy-level vistas of yellow-fever acacia trees, Lake Naivasha wetlands, and free-roaming herbivores viewed directly from bed"],
      auditory: ["Gentle daytime lake birdsong giving way to nocturnal footfalls, low hippo grunts, and midnight rustles directly beneath the timber deck"],
      olfactory: ["Crisp, resinous scent of yellow-backed fever trees mixed with fresh lake breezes and wood-decking aromas"],
    },
    positiveSignals: [
      "Starlight shower experience: open-air double shower permitting bathing under unpolluted Rift Valley night skies while listening to wildlife",
      "360-degree panoramic visuals: waking up at canopy level with uninterrupted views across the wildlife fields without leaving the sheets",
      "Unsupervised walking liberty: private 450-acre estate allows guests to walk freely on foot alongside non-predatory game during the day",
      "Direct wildlife proximity: giraffes, waterbucks, and impalas move directly past the timber frame, turning the structure into a private viewing hide",
    ],
    negativeSignals: [
      "Self-catering vs. restaurant distance: requires self-catering or advance booking/transfers to reach the on-site Kijiko restaurant",
      "Nighttime movement lockdown: guests are strictly forbidden from walking the grounds after dark due to roaming hippos",
      "Primal micro-fauna: glass construction near wetlands draws insects, midges, and curious monkeys if windows are left unlatched",
      "Rustic structural quirks: converted farm structure offers minimal floor-to-floor sound insulation and authentic farm-level utility pressures",
    ],
    hiddenGems: [
      "Its origin as an authentic racing lookout gives it historical character that modern lodges cannot replicate. It provides exclusive access to a 450-acre private conservancy at an accessible price point, making guests feel like private landholders rather than hotel patrons.",
    ],
    signatureMemory: "Waking at dawn inside the glass-wrapped upper bedroom to watch a herd of giraffes silently browsing through the acacia canopy at eye level.",
    expectationManagement: "Guests must recognize this is a converted, self-directed farm tower, not a standard full-service hotel suite. Self-catering or meal pre-planning is required, nighttime walks are strictly off-limits, and insects are part of the natural lake ecosystem.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a design-conscious romantic couple, burned-out executive, photographer, or slow traveler seeking total privacy, architectural uniqueness, and on-foot nature access.",
    ],
    doNotRecommendConditions: [
      "The client demands 24/7 room service, butler service, Big Five predator tracking, or is traveling with young children or guests with mobility constraints.",
    ],
    confidenceLevel: "High", // per source — "High Confidence (For independent, design-focused travelers and couples)"
    competitiveAdvantage: "Complete 360-degree glass elevation and on-foot farm freedom at an unbeatable mid-tier price point ($150–$220/night).",
    mainLimitation: "Self-catering friction, strict nighttime lockdown, and lack of luxury resort service infrastructure.",
    positioningSummary: "A historic, architecturally unique wildlife lookout offering couples an intimate, slow-paced immersion among grazing herbivores, serving as the perfect restorative opening or mid-safari decompression retreat in the Rift Valley.",
  },

  pairings: [
    { pairedEntity: "Saruni Samburu, Samburu", pairingCategory: "ecosystem", rationale: "Juxtaposes lush Rift Valley lake/woodland habitats with dramatic, semi-arid northern mountain terrain." },
    { pairedEntity: "Naboisho or Mara North private concession, Maasai Mara", pairingCategory: "regional", rationale: "The absolute stillness of Naivasha sets an intentional foundation before diving into intense predator tracking." },
    { pairedEntity: "Hell's Gate National Park or Crescent Island Sanctuary day trips", pairingCategory: "experience", rationale: "Active gorge hiking, cycling, or boat transfers, returning to the total isolation of the tower at dusk." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road access logs", "Property operational records"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Kijiko restaurant seasonal menu rotation timelines — explicitly flagged for ongoing verification in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};