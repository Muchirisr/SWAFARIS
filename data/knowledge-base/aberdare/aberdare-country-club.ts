// data/knowledge-base/aberdare/aberdare-country-club.ts
export const aberdareCountryClub = {
  id: "aberdare-country-club", // NEW lodge, no existing DB record
  name: "Aberdare Country Club",
  country: "Kenya",
  region: "Aberdare",
  subRegion: "Nyeri County, Central Highlands",
  ecosystem: "Montane Forest Foothills / Highland Pasture / Private Sanctuary Edge",
  propertyType: "Heritage Country Estate / Safari Manor Lodge",
  accommodationStyle: "Historic stone cottages, classic suites, and family cottages within a 1,300-acre private wildlife sanctuary.",
  locationDetail: "Mweiga Hill, Nyeri County, Central Highlands.",
  nearestGate: "Ark Gate / Wandare Gate (Aberdare National Park access points)",
  nearestAirstrips: ["Nyeri Airstrip (Nyaribo)", "Nanyuki Airstrip (NYK)", "Mweiga Airstrip"],
  accessibilityNotes: "Accessible year-round via smooth paved tarmac highways from Nairobi leading up to Mweiga Hill. Internal estate pathways consist of paved, gravel, and lawn walking tracks along gentle sloped hillside terrain.",
  priceRangeMinUsd: 220,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // CORRECTED: price midpoint ($335) falls in the Mid-Range band ($300–499), overriding self-reported Premium
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "The Ark",
    "Samburu National Reserve properties",
    "Shaba National Reserve properties",
    "Laikipia ultra-luxury bush camps",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Peaceful", "Romantic"], // confirmed, all valid
    energyType: ["Nature Immersion", "Wellness", "Luxury Escape"], // confirmed, all valid
    experiencePace: "Slow",
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Classic Safari Elegance", // founder-confirmed: colonial-era manor + fireside tradition; accuracy prioritized over conservative-tier bridging here
    journeyRole: "Mid-Journey Transition", // founder-confirmed: bridges Samburu/Shaba arid savanna and Aberdare highland forest ecosystems, per Sawela Capella precedent
    idealTravelersPrimary: ["Honeymooners", "Families", "Slow Travelers", "Burned-out Executives"],
    idealTravelersSecondary: [],
    intensityScore: 2, relaxationScore: 9, authenticityScore: 6, premiumScore: 7,
    adventureScore: 3, privacyScore: 7, wildlifeExperienceScore: 5,
    culturalImmersionScore: 4, familySuitabilityScore: 9, comfortScore: 8,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3 to 3.5 hours overland from Nairobi (180 km); 20–45 minutes road transfer from Nyeri or Nanyuki airstrips.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Highland mist and seasonal rainfall (April–May, November) cool temperatures and dampen lawns, but do not impair vehicular access.",
    electricitySystem: "24-hour continuous grid electricity with back-of-house backup generators.",
    powerReliability: "High",
    waterReliability: "Central piped water supply with dedicated in-room heating systems.",
    internetAvailability: "Complimentary Wi-Fi in central public lounges and main reception; signal variable within individual stone cottages due to thick wall construction.",
    mobileNetwork: "Strong Safaricom/Airtel coverage across the main grounds.",
    medicalAccess: "On-site first aid kit and trained staff; Nyeri Town medical centers 20–30 minutes drive; emergency air evacuation available via nearby airstrips.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // resolved from source "Moderate" rating — ground-floor cottages (e.g. Queen Classic Cottage) offer enhanced accessibility; caveat captured below
    operationalLimitations: [
      "Main dining hall has high ceilings and can feel cold during highland dinners if seated away from hearths",
      "Wi-Fi reach varies across distant cottages",
      "Lack of resident big predators requires driving off-property for traditional Big Five game drives",
      "Sloped paths and occasional steps to cottage verandas limit full mobility access outside select ground-floor cottages",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Honeymooners", archetype: "The Burnout Decompressors (The Cortisol Crashers)", matchStrength: "Strong",
      reasoning: "ONTOLOGY CORRECTION: source doc filed this archetype under Burned-out Executives as \"The Cortisol Crashers,\" but that name is the informal handle for the canonical Honeymooners archetype The Burnout Decompressors (The Cortisol Crashers) — recategorized accordingly. Fit: the slow pace, crisp highland air, manicured grounds, and nightly fireside environment force rapid physical deceleration and mental decompression without rustic discomfort or operational friction.",
      supportingSignals: ["Nightly wood-burning fireplaces lit by staff", "Cool, quiet, low-stimulus highland environment", "Manicured private sanctuary grounds"],
      mismatchConditions: [] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Moderate",
      reasoning: "FOUNDER JUDGMENT CALL: source doc listed Burned-out Executives among Primary Traveler Types Served, but its sole supporting archetype (Cortisol Crashers) was an ontology correction that moved to Honeymooners, leaving no real Burned-out Executives archetype behind. The Incognito Ascetic was confirmed as the correct fit given the low-key, undisturbed, restorative framing — quiet fireside decompression, minimal social performance, and freedom from high-stimulation corporate connectivity demands.",
      supportingSignals: ["Low ambient noise and slow, civilized pace", "Standalone/semi-detached cottages offering spatial privacy", "Absence of high-adrenaline or performative luxury signaling"],
      mismatchConditions: ["Variable cottage Wi-Fi may frustrate executives who need to stay discreetly reachable"] },
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "The predator-free 1,300-acre sanctuary permits safe autonomy for young children and grandparents to walk, bike, or ride horses alongside habituated wildlife without vehicle confinement.",
      supportingSignals: ["Fenced, predator-free sanctuary grounds", "Swimming pool, tennis courts, golf facilities", "Multi-bedroom family cottages"],
      mismatchConditions: ["Teenagers seeking high-density predator tracking or fast digital entertainment may find the pace too quiet"] },
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Nostalgic manor-house charm, private stone cottages with wood-burning fireplaces, quiet garden trails, and classic afternoon tea foster a romantic, low-stimulus sanctuary.",
      supportingSignals: ["Private stone cottages with in-room fireplaces", "Quiet garden trails and terraced lawns", "Classic afternoon tea and fireside evening rituals"],
      mismatchConditions: ["Lacks ultramodern private plunge pools or contemporary architectural minimalism"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "Strong",
      reasoning: "Unhurried pedestrian access to nature, sweeping views of Mount Kenya and the Aberdares, and a structured, civilized rhythm allow for prolonged reading, walking, and physical rejuvenation.",
      supportingSignals: ["Unescorted pedestrian access to sanctuary wildlife", "Sweeping mountain views", "Structured, unhurried estate rhythm"],
      mismatchConditions: ["Does not provide immersion in raw, unfenced, high-risk wilderness ecosystems"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "The Apex Trophy Hunter", matchStrength: "Weak",
      reasoning: "The private sanctuary contains only habituated herbivores (zebras, giraffes, elands). It lacks raw predatory behavior, big cat density, or dramatic wilderness action.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment risk if expecting vehicle-based predator tracking directly from the cottage door"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Weak",
      reasoning: "The slow, civilized, country club environment and soft activities (golf, tennis, gentle walking) fail to deliver high-adrenaline wilderness challenges or modern ultra-luxury flashiness.",
      supportingSignals: [], mismatchConditions: ["Mismatch between active thrill-seeking expectations and the property's quiet, restorative manor-house reality"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Weak",
      reasoning: "High desire to check off the Big Five in rapid succession is hindered by the lodge's setting outside the core national park predator zones.",
      supportingSignals: [], mismatchConditions: ["Guest frustration over spending time on manicured lawns rather than active 4x4 game drives in dense game areas"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source doc offered a hedged Opening Immersion / Recovery framing, but the Journey Pairing Intelligence section describes the property as a sensory bridge between the arid Samburu/Shaba savanna ecosystem and the Aberdare highland forest ecosystem. Founder confirmed Mid-Journey Transition on that basis, matching the Sawela Capella precedent (ecosystem-bridging, not general decompression). REGIONAL TALLY (Aberdare sub-phase): Mid-Journey Transition x1 — first lodge ingested in this region.",
    whatShouldComeBefore: "Long-haul international arrival into Nairobi (soft, low-altitude-shock landing), or a dusty, high-intensity safari leg in Samburu/Shaba.",
    whatShouldComeAfter: "High-density game-viewing hide properties (e.g., The Ark) or deep-wilderness Laikipia conservancies for active game tracking.",
    emotionalTransitionRationale: "Shifts the traveler from a state of physiological jet-lag or safari sensory fatigue into a grounded state of physical ease, warmth, and peaceful safety.",
  },

  narrative: {
    whyChosen: "A historic heritage estate delivering a low-friction, high-comfort reset between higher-intensity safari legs, with rare unescorted pedestrian access to habituated wildlife.",
    bestUsedFor: "Soft landings after international arrival, mid-journey recovery buffers between dusty game reserves, and safe multi-generational family stays.",
    lessSuitableFor: "Travelers prioritizing daily high-octane predator tracking or demanding sleek, ultra-modern luxury interiors.",
    journeyPositionNote: "Positioned as a sensory bridge property between arid, high-vigilance savanna ecosystems and cool, restorative highland forest.",
    overview: "Aberdare Country Club is an elegant heritage estate operating as a peaceful sanctuary on the green slopes of Mweiga Hill. Transcending the standard definition of a safari lodge, it delivers the sensory experience of an old-world country manor house blended with a 1,300-acre private wildlife sanctuary.",
    emotionalFeel: "Deeply restorative, safe, and nostalgically romantic, with a slow, civilized rhythm dictated by classic estate traditions like afternoon tea and fireside evenings.",
    sensorySignature: {
      visual: ["Zebras, peacocks, impalas, and giraffes grazing across manicured lawns", "Backdrop views of Mount Kenya and the Aberdare Mountains"],
      auditory: ["Rustle of ancient estate trees", "Distant bird calls", "Soft click of golf clubs", "Crackle of hardwood logs in bedroom fireplaces"],
      olfactory: ["Crisp, cool mountain air", "Damp highland gardens", "Burning firewood"],
    },
    positiveSignals: [
      "In-room wood-burning fireplaces lit nightly by staff",
      "Habituated zebras, peacocks, and impalas grazing steps from guest verandas",
      "Meticulously maintained 1,300-acre grounds and gardens",
      "Long-standing, polished estate hospitality heritage",
    ],
    negativeSignals: [
      "Dated interior decor and bathroom fixtures in select classic cottage categories",
      "Main dining hall can feel cold during highland dinners away from central hearths",
      "Variable Wi-Fi connectivity inside individual stone cottages",
    ],
    hiddenGems: [
      "Unrestricted pedestrian and equestrian wildlife freedom — unlike vehicle-confined national park viewing, guests can safely walk, jog, or ride horseback alongside giraffes, elands, and zebras within the private sanctuary.",
    ],
    signatureMemory: "Stepping out onto your cottage veranda in the crisp morning air with a hot drink, watching a herd of zebras quietly graze across the dew-covered lawn just yards away.",
    expectationManagement: "Travelers must understand this is a heritage country estate and herbivore sanctuary, not a dense predator bush camp. Predator viewing requires driving into the nearby Aberdare National Park or transitioning to subsequent wilderness camps.",
    idealNights: "REQUIRES_VERIFICATION", // source gives idealStayDuration (2–3 nights) but no explicit distinct idealNights figure
  },

  recommendationNotes: {
    recommendConditions: [
      "Client requires a comfortable, low-friction soft landing after long international flights",
      "Client needs a mid-journey recovery buffer between dusty game reserves",
      "Client wants a safe, multi-generational family environment with pedestrian wildlife freedom",
    ],
    doNotRecommendConditions: [
      "Client's primary objective is daily, high-octane predator tracking (Big Five)",
      "Client demands sleek, ultra-modern luxury interiors and guaranteed ultra-high-speed in-room Wi-Fi",
    ],
    confidenceLevel: "High",
    competitiveAdvantage: "Safe, unescorted pedestrian and equestrian wildlife interaction inside a 1,300-acre private sanctuary combined with classic manor estate comfort.",
    mainLimitation: "Lack of resident big predators on site and dated interior furnishings in classic cottage categories.",
    positioningSummary: "A historic, refined heritage country estate nestled in the cool Aberdare foothills, offering a slow-paced, restorative sanctuary where travelers can walk alongside gentle wildlife and decompress in front of cozy log fires.",
  },

  pairings: [
    { pairedEntity: "Samburu National Reserve", pairingCategory: "ecosystem", rationale: "Transitioning from the dry, hot, dusty, high-vigilance environment of Samburu to the cool, lush, quiet green hills of Mweiga Hill creates an extraordinary sensory contrast that allows the nervous system to decompress and process previous wildlife encounters." },
    { pairedEntity: "Shaba National Reserve", pairingCategory: "ecosystem", rationale: "Pairs the dry northern frontier with the cool central highlands for maximum ecosystem and sensory contrast within a single itinerary." },
    { pairedEntity: "The Ark", pairingCategory: "experience (sister property)", rationale: "Sequences into nocturnal waterhole wildlife viewing from a game-viewing hide, extending the Aberdare highland leg with an active predator-viewing counterpoint." },
    { pairedEntity: "Laikipia ultra-luxury bush camp", pairingCategory: "experience", rationale: "Provides a deep-wilderness, active game-tracking leg following the restorative highland buffer." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field operational records", "Property specifications", "Geographic transit logs", "Historical guest feedback"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Specific cottage renovation schedule timelines for classic categories — explicitly flagged REQUIRES_VERIFICATION in source",
      "idealNights — no distinct figure given beyond idealStayDuration range",
    ],
  },
};