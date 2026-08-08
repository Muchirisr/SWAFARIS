// data/knowledge-base/tsavo/voi-wildlife-lodge.ts
export const voiWildlifeLodge = {
  id: "voi-wildlife-lodge", // NEW lodge, no existing DB record
  name: "Voi Wildlife Lodge",
  country: "Kenya",
  region: "Tsavo",
  subRegion: "Tsavo East",
  ecosystem: "Semi-arid wilderness / Red-dirt Savannah Grasslands (positioned on the boundary of Tsavo East National Park, overlooking a natural waterhole and volcanic hills)",
  propertyType: "High-Volume Safari Resort / Masonry Lodge",
  accommodationStyle: "Permanent solid masonry room blocks featuring tiled floors, African decor, large en-suite bathrooms, and private furnished balconies.",
  locationDetail: "Boundary of Tsavo East National Park, 5 km off the Nairobi–Mombasa highway.",
  nearestGate: "Tsavo East National Park Boundary / Voi Gate",
  nearestAirstrips: ["Voi Safari Airstrip (~5 minutes drive)"],
  accessibilityNotes: "Easily accessible year-round by 2WD or 4x4 vehicles via a short 5-kilometer drive off the main Nairobi-Mombasa highway. Extensive walking paths across the 50-acre footprint without elevators.",
  priceRangeMinUsd: 150,
  priceRangeMaxUsd: 300,
  rawMarketTier: "Mid", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // CORRECTED: price midpoint ($225) falls in the Value band ($150–299), overriding self-reported Mid
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Finch Hattons (Tsavo West)",
    "Sarova Salt Lick (Taita Hills)",
    "Diani Beach or Watamu",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Social"], // both valid canonical values, no correction needed
    energyType: ["Wellness", "Family Connection", "Wildlife Focus", "Transit Convenience"], // "Decompression retreat" and "High-energy safari" both non-canonical, replaced per founder decision; Transit Convenience added per invented-archetype resolution (see travelerMatches note)
    experiencePace: "Fast",
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // founder-confirmed: no heritage claim, no significant documented wear, straightforward fit
    journeyRole: "Opening Immersion", // resolved directly — "Logistical Stepping Stone" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers"], // CORRECTED: "Corporate groups / Tour cohorts" dropped — not a real category, its sole supporting archetype was invented and had no genuine link to corporate travel anyway
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 7, authenticityScore: 6, premiumScore: 5,
    adventureScore: 6, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–5 hours overland from Nairobi; 15 minutes from Voi SGR train station; 5 minutes from local airstrip.",
    seasonalAccessibility: "Open year-round. Solid masonry construction and gravel infrastructure maintain reliable access across all seasonal weather patterns.",
    rainySeasonImpact: "Minimal — masonry construction and gravel infrastructure maintain reliable access.",
    electricitySystem: "Grid electricity connection backed by commercial backup generators to ensure continuous power and lighting across all blocks.",
    powerReliability: "High",
    waterReliability: "Standard electric/solar water heating systems providing hot running water to en-suite masonry bathrooms.",
    internetAvailability: "Wi-Fi connectivity strictly restricted to public lounge and bar areas — no in-room Wi-Fi.",
    mobileNetwork: "Functional Safaricom/Airtel cellular data coverage across the property.",
    medicalAccess: "On-site first aid capabilities, regional emergency response links, and rapid evacuation options via nearby airstrips or highway access to Voi town medical facilities.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // resolved from source "Moderate" — ground-floor rooms accessible, consistent with Aberdare Country Club/Outspan precedent; caveat captured below
    operationalLimitations: [
      "Sprawling 50-acre property lacks elevators and features long walkways and stairs to upper-floor wings",
      "Strict front-desk check-in cut-off policies for late-night arrivals",
      "Public areas can become congested and noisy during peak tour group changeover windows",
      "No in-room Wi-Fi — connectivity restricted to public lounge and bar areas, causing bottlenecks during peak hours",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Provides a seamless, low-stress entry point to Kenya's safari ecosystem with zero logistical friction, allowing first-timers to witness massive elephant herds instantly at the waterhole.",
      supportingSignals: ["High-density waterhole directly adjacent to dining terraces", "Zero-friction highway/SGR access"],
      mismatchConditions: ["Must tolerate a busy, high-capacity resort atmosphere and bustling buffet dining rooms"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Outstanding utility for multi-generational groups and children, featuring open lawns, swimming pools, games, and spacious multi-bed superior rooms that mitigate safari fatigue.",
      supportingSignals: ["Three outdoor swimming pools", "Children's play areas and open lawns", "Spacious multi-bed superior rooms"],
      mismatchConditions: ["Sprawling 50-acre layout requires walking long distances between facilities"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "High-volume 300-guest capacity, conference groups, and bustling tour buses destroy quiet romantic isolation and intimate couple-oriented privacy.",
      supportingSignals: [], mismatchConditions: ["Sensory noise and crowded public spaces conflicting with honeymoon expectations"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "Constant ambient activity from large groups, children, and conference delegates prevents deep psychological decompression or absolute quiet.",
      supportingSignals: [], mismatchConditions: ["Lack of private, secluded zones and restricted Wi-Fi access outside public lounges"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "ONTOLOGY CORRECTION: source labeled this category \"Luxury Purists\"; corrected to the canonical category, Luxury Adventurers. Mid-tier resort infrastructure, buffet-heavy dining formats, and masonry room blocks do not align with ultra-luxury bush camp standards.",
      supportingSignals: [], mismatchConditions: ["Severe expectation mismatch regarding bespoke private service and intimate boutique exclusivity"] },
    // DROPPED: "The Logistical Pragmatist" under invented category "SGR Train Travelers / Transit Groups" — not a real archetype; underlying "plug-and-play logistics" concern captured at Energy Type layer via Transit Convenience instead
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion / Logistical Stepping Stone\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Tsavo sub-phase, FINAL 4/4): Grand Finale x1 (Salt Lick Safari Lodge), Reflection x1 (Kilaguni Serena Safari Lodge), Safari Climax x1 (Severin Safari Camp), Opening Immersion x1 (this lodge) — a fully balanced four-lodge spread with no concentration.",
    whatShouldComeBefore: "Nairobi baseline or a smooth SGR train transit from the capital to break up travel fatigue.",
    whatShouldComeAfter: "A high-end, exclusive eco-sanctuary in Tsavo West or Taita Hills (e.g., Sarova Salt Lick or Finch Hattons), or a direct transit to coastal resorts like Diani Beach.",
    emotionalTransitionRationale: "Smoothly converts travel momentum into immediate safari excitement via front-row elephant sightings without overwhelming the traveler with harsh bush mechanics.",
  },

  narrative: {
    whyChosen: "A high-capacity resort delivering unmatched logistical convenience (SGR/highway access) alongside a genuinely spectacular front-row waterhole, making it an efficient, family-capable entry point into the Tsavo circuit.",
    bestUsedFor: "First-time safari travelers wanting a low-friction, high-reward entry point, and families needing extensive non-safari amenities to offset child fatigue.",
    lessSuitableFor: "Honeymooners seeking isolated romance, introverted slow travelers wanting quiet à la carte dining, or ultra-luxury purists requiring single-digit room counts and bespoke butler care.",
    journeyPositionNote: "Opening Immersion — a logistically flawless staging post that converts arrival energy directly into immediate high-reward wildlife viewing before deeper wilderness legs.",
    overview: "Voi Wildlife Lodge operates as a robust, high-volume safari resort asset positioned directly on the boundary of Tsavo East National Park. Set across a 50-acre footprint just 5 kilometers off the main Nairobi-Mombasa highway, it serves as a critical bridge between commercial hospitality and the wild savannah.",
    emotionalFeel: "Alternates between bustling resort animation and front-row wildlife awe. Common areas mirror a busy transit hotel due to scale, but watching massive family groups of red elephants at the adjacent waterhole triggers an authentic sense of connection to nature.",
    sensorySignature: {
      visual: ["Striking red-dirt Tsavo plains", "Shimmering blue swimming pools", "Massive elephant herds congregating at the waterhole"],
      auditory: ["Distant elephant rumbles", "Splashes from the resident hippo (\"Henry\")", "Energetic chatter in the dining terraces", "Children playing by the pool"],
      olfactory: ["Dry sun-baked earth", "Outdoor barbecue smoke", "Crisp pool chlorine mixed with open savannah air"],
    },
    positiveSignals: [
      "Endless parade of elephants, zebras, and antelopes visiting the waterhole directly adjacent to dining terraces",
      "Located only 15 minutes from the Voi SGR train station and minutes off the highway for seamless transit",
      "Extensive non-safari amenities including pools, playgrounds, and open spaces to combat children's safari fatigue",
      "Professional, smiling, and accommodating service posture maintained despite high daily guest turnover",
    ],
    negativeSignals: [
      "Loud and chaotic main dining hall during peak buffet windows when tour buses or conference groups descend",
      "Wi-Fi connectivity restricted strictly to public lounge and bar areas, causing bottlenecks during peak hours",
      "Sprawling 50-acre layout without elevators causes fatigue for guests assigned to outer wings or upper floors",
      "Strict front-desk check-in cut-offs that fail to accommodate late-night unguided self-drive arrivals",
    ],
    hiddenGems: [
      "The property's waterhole placement delivers mega-fauna viewing assets comparable to properties costing triple the price, freeing up financial capital for ultra-luxury private conservancies later in the itinerary. The on-site health club, sauna, and massage rooms also provide an affordable physical reset for back stiffness from long road safaris.",
    ],
    signatureMemory: "Sipping a cold drink on the elevated viewing terrace at dusk while watching a massive herd of red-dust-covered elephants splash and socialize at the waterhole just yards away.",
    expectationManagement: "Travelers must understand this is a large-scale, high-capacity resort rather than an intimate tented camp. Public spaces will be busy, dining is handled via large buffet spreads, and navigating the 50-acre property involves walking long paths.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client profile prioritizes logistical convenience (especially via SGR train travel), family-friendly entertainment, and reliable resort-style safety",
      "Client wants front-row elephant viewing over absolute seclusion and boutique exclusivity",
    ],
    doNotRecommendConditions: [
      "Client is a honeymooner seeking isolated romance",
      "Client is an introverted slow traveler demanding quiet à la carte dining, or an ultra-luxury purist requiring single-digit room counts and bespoke butler care",
    ],
    confidenceLevel: "Medium", // per source
    competitiveAdvantage: "Unmatched combination of high-capacity resort infrastructure, family amenities, and direct front-row elephant waterhole viewing right off the main transit corridor at an accessible mid-tier price point.",
    mainLimitation: "Institutional scale, lack of in-room Wi-Fi, and potential public area crowding during peak tour group changeovers.",
    positioningSummary: "A bustling, logistically flawless safari resort offering extensive family-friendly amenities and unparalleled front-row elephant waterhole viewing right on the edge of Tsavo East.",
  },

  pairings: [
    { pairedEntity: "Finch Hattons (Tsavo West)", pairingCategory: "ecosystem", rationale: "Pairs a 2-night opening stay at Voi Wildlife Lodge for wide-open Tsavo East views with a closing stay at an exclusive eco-sanctuary for architectural drama." },
    { pairedEntity: "Sarova Salt Lick (Taita Hills)", pairingCategory: "experience", rationale: "Balances the high-capacity resort beginning with hyper-exclusive wilderness isolation later in the trip." },
    { pairedEntity: "Diani Beach or Watamu", pairingCategory: "regional", rationale: "Serves as a strategic 1- or 2-night decompression pitstop for family groups moving from Amboseli toward coastal resorts." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Property operational records", "Regional transit logs", "Guest registry data", "Spatial property layout audits"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Precise current management structural updates for minor interior room renovations — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};