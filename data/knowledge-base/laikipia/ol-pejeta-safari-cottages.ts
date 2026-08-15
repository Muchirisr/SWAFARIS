// data/knowledge-base/laikipia/ol-pejeta-safari-cottages.ts
export const olPejetaSafariCottages = {
  id: "ol-pejeta-safari-cottages", // NEW lodge, no existing DB record
  name: "Ol Pejeta Safari Cottages",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Southern Sector, Ol Pejeta Conservancy",
  ecosystem: "Riverine Woodland / Acacia Savannah / Private Riverbed Corridor",
  propertyType: "Eco-Luxury Wilderness Lodge / Private Cottage Sanctuary",
  accommodationStyle: "Permanent stone-and-canvas safari cottages featuring expansive verandas and private outdoor kitchens.",
  locationDetail: "Remote southern sector of Ol Pejeta Conservancy, beneath tall yellow-barked fever trees along a private riverbed corridor.",
  nearestGate: "Ol Pejeta Southern Entry / Serat Gate",
  nearestAirstrips: ["Kamok Airstrip", "Nanyuki Airport (NYU)"],
  accessibilityNotes: "Accessible year-round via all-weather conservancy routes; final riverine approach requires high-clearance 4x4 vehicles.",
  priceRangeMinUsd: 1050,
  priceRangeMaxUsd: 1300,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 4",
  budgetTier: "Luxury", // CORRECTED: price midpoint ($1,175) falls in the Luxury band ($800–1,199), overriding self-reported Premium
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Borana Lodge",
    "Saruni Samburu",
    "Sala's Camp",
    "Mara Expedition Camp",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Rustic", "Exclusive", "Reflective"], // CORRECTED: "Intimate" non-canonical; no Honeymooners archetype present, so resolved to Reflective (privacy/isolation-driven, not romance-specific) rather than Romantic
    energyType: ["Wellness", "Luxury Escape", "Wildlife Focus", "Digital Detox"], // CORRECTED: "Decompression retreat" → Wellness, "Quiet luxury" → Luxury Escape; Wildlife Focus/Digital Detox valid as-is
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Authentic Wilderness Simplicity", // CORRECTED: "Eco-luxury" non-canonical; founder chose Authentic Wilderness Simplicity given 9/10 authenticity score and unpretentious stone-and-canvas construction
    journeyRole: "Opening Immersion", // resolved directly — "Recovery/Reset Anchor" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Burned-out Executives", "Families", "Nature Photographers", "Slow Travelers"], // all valid real categories, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 9, authenticityScore: 9, premiumScore: 9,
    adventureScore: 8, privacyScore: 10, wildlifeExperienceScore: 9,
    culturalImmersionScore: 6, familySuitabilityScore: 9, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3.5–4 hours overland from Nairobi (210 km); 45–60 minutes road transfer from Nanyuki Airport or 20 minutes from Kamok Airstrip.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Riverine dirt access tracks can soften during heavy rains (April–May, November), but high-clearance private 4x4 vehicles ensure continuous operational access.",
    electricitySystem: "24-hour eco-solar power system supported by inverter storage units.",
    powerReliability: "Continuous",
    waterReliability: "Solar photovoltaic and eco-boiler water heating systems providing high-pressure hot water.",
    internetAvailability: "Wi-Fi available to support essential digital connectivity while encouraging a low-tech retreat pace.",
    mobileNetwork: "Reliable Safaricom/Airtel cellular data network signal across elevated areas.",
    medicalAccess: "Comprehensive on-site first aid kit; access to private medical facilities in Nanyuki town (~45 minutes) and emergency air-evacuation via AMREF Flying Doctors.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: true, // resolved from source "Moderate to High" per standing collapse precedent, confirmed by founder
    operationalLimitations: [
      "Absence of a centralized communal lodge bar/lounge for social mixing",
      "Absence of high-tech modern amenities (e.g., air conditioning, private plunge pools)",
      "Presence of conservation boundary fences in the broader conservancy, occasionally visible during transit",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "Complete spatial isolation, absolute control over daily schedules, private dedicated staff, and absence of public lodge crowds allow high-stress leaders to achieve profound mental recovery.",
      supportingSignals: ["Complete spatial isolation between cottages", "Private dedicated 4x4, guide, waiter, and chef", "Zero forced interaction with other guest groups"],
      mismatchConditions: ["Must accept rustic eco-luxury hardware rather than hyper-modern, air-conditioned urban resort suites"] },
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "High",
      reasoning: "Spacious two- and three-bedroom stone cottages paired with a private chef and private vehicle allow families to host celebrations and reunions on their own schedule.",
      supportingSignals: ["Spacious multi-bedroom stone cottages", "Dedicated private chef", "Private vehicle flexibility for family scheduling"],
      mismatchConditions: ["Unfenced riverine surroundings require constant parental awareness when children are outdoors"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "High",
      reasoning: "Private schedule control and a dedicated in-cottage chef allow parents to manage young children's routines and meal times without rigid group constraints.",
      supportingSignals: ["Tailored daily schedules independent of other guests", "Dedicated personal chef for custom meal timing", "Private cottage footprint"],
      mismatchConditions: ["Unfenced riverine surroundings require constant parental awareness when children are outdoors"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "High",
      reasoning: "Dedicated private vehicle and guide allow unlimited time at wildlife sightings, custom positioning for light, and night-drive flexibility in a quiet sector.",
      supportingSignals: ["Private 4x4 and guide with no shared-vehicle constraints", "Secluded southern sector with reduced vehicle crowding", "Spotlight night drives"],
      mismatchConditions: ["Absence of high-tech studio facilities or built-in photography hides on the immediate cottage grounds"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "Unhurried daily pace, natural stone-and-canvas architecture, and private verandas facing riverine tree canopies foster deep environmental connection.",
      supportingSignals: ["Slow experience pace", "Private verandas facing riverine tree canopies", "Deep wilderness silence"],
      mismatchConditions: ["Requires a multi-night commitment to fully appreciate the slow domestic rhythm"] },
    { fitType: "poorFit", category: "Social Explorers", archetype: "The Status-Network Curator", matchStrength: "Low",
      reasoning: "Complete cottage isolation, absence of a central communal bar, and lack of high-density social spaces prevent networking with other international travelers.",
      supportingSignals: [], mismatchConditions: ["Guest will feel isolated due to the deliberate lack of public social infrastructure"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "Low",
      reasoning: "Focuses on slow, unforced domestic ease rather than high-octane physical sports like mountain biking or intense physical endurance activities.",
      supportingSignals: [], mismatchConditions: ["Mismatch between desires for adrenaline-filled multi-sport itineraries and the cottage's serene decompression focus"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "Slow, self-directed pace and secluded southern positioning conflict with aggressive, fast-paced game drive schedules designed to check off sights rapidly.",
      supportingSignals: [], mismatchConditions: ["Frustration with unhurried dining and quiet wilderness observation over rapid-fire vehicle transit"] },
    // SPLIT: "The Early-Stage Nurturers / Milestone Celebrators (Families)" was one combined entry in source; no contradiction found (unlike Borana), so split into two differentiated ideal entries per founder decision
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion (or Recovery/Reset Anchor)\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Laikipia sub-phase, lodge 3/3 so far): Opening Immersion x2, Adventure Peak x1 — Opening Immersion at 67% (2/3), below the Amboseli audit threshold of 86% but now the majority; continuing to monitor.",
    whatShouldComeBefore: "Direct international arrival in Nairobi followed by a short domestic flight or road transfer to Nanyuki. Serves as a gentle, high-comfort sanctuary to absorb jet lag.",
    whatShouldComeAfter: "A rugged, high-altitude northern eco-camp (e.g., Borana Lodge or Saruni Samburu) or a fast-paced migratory camp in the Maasai Mara.",
    emotionalTransitionRationale: "Smoothly lowers cortisol levels and dissolves international travel fatigue through complete time sovereignty before moving to higher-intensity wilderness tracking.",
  },

  narrative: {
    whyChosen: "An intimate, fully private cottage sanctuary that eliminates common safari friction points through dedicated vehicle, guide, and chef for every booking, positioned as a gentle opening decompression stay.",
    bestUsedFor: "Families, burned-out executives, photographers, or slow travelers who demand private vehicle access, a dedicated chef, complete schedule freedom, and quiet rhino conservancy viewing.",
    lessSuitableFor: "Solo travelers seeking social mixing, honeymooners wanting hyper-modern resort luxury with private plunge pools, or high-energy travelers seeking intense sports activities.",
    journeyPositionNote: "Opening Immersion — a private, unhurried decompression sanctuary before higher-exertion legs.",
    overview: "Ol Pejeta Safari Cottages is an unpretentious, resource-rich eco-luxury sanctuary nestled beneath tall yellow-barked fever trees in the remote southern sector of Ol Pejeta Conservancy. Replacing standard tented rows with four permanent stone-and-canvas cottages, the property functions as a collection of private bush homes. Every booking includes a dedicated operational asset team—private 4x4 vehicle, guide, waiter, and private chef—delivering complete time sovereignty.",
    emotionalFeel: "Grounded, serene, and deeply private — the quiet ease of a high-end private country home, liberated from rigid schedules and public lodge performance.",
    sensorySignature: {
      visual: ["Dappled sunlight filtering through yellow fever tree canopies", "Open-plan stone lounges", "Private verandas facing quiet riverbed corridors"],
      auditory: ["Crackling acacia wood fires", "Rustling riverine leaves", "Nocturnal owl calls", "Distant lion roars across the southern plains"],
      olfactory: ["Woodsmoke from open stone fireplaces", "Dry riverbed earth", "Blooming acacia bushland"],
    },
    positiveSignals: [
      "Every cottage receives a dedicated 4x4 Land Cruiser and guide included in the base rate, guaranteeing total schedule control",
      "Meals prepared individually in external cottage kitchens by dedicated chefs according to personalized preferences and timings",
      "Secluded southern positioning away from high-density northern gate areas, granting exclusive access to quiet game-drive loops",
      "Hands-on management and long-serving staff create an unforced, deeply welcoming domestic environment",
    ],
    negativeSignals: [
      "Absence of a central bar or long dining table limits opportunities for travelers seeking to mix with other groups",
      "Lacks hyper-modern amenities like air conditioning, built-in sound systems, or deep soaking tubs",
      "Conservation fencing required for rhino protection across the broader conservancy can occasionally be visible during transit",
      "Focuses on low-impact eco-luxury rather than high-tech digital infrastructure",
    ],
    hiddenGems: [
      "The property's location in Ol Pejeta's secluded southern sector unlocks exclusive, undisturbed spotlight night drives, tracking elusive nocturnal species like aardvarks, bat-eared foxes, and hunting lions without vehicle crowding.",
    ],
    signatureMemory: "Sipping a fresh morning coffee on your private veranda in total silence as a family of elephants moves slowly through the riverbed just meters from your cottage deck.",
    expectationManagement: "Travelers must understand this is a private home-style sanctuary rather than a bustling luxury resort — no central lodge amenities, air conditioning, or social bars, in exchange for complete privacy and private staff.",
    idealNights: "3 to 4",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is a family, burned-out executive, photographer, or slow traveler who demands private vehicle access and a dedicated chef",
      "Client wants complete schedule freedom and quiet rhino conservancy viewing",
    ],
    doNotRecommendConditions: [
      "The client is a solo traveler seeking social mixing",
      "A honeymooner wanting hyper-modern resort luxury with private plunge pools, or a high-energy traveler seeking intense sports activities",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Standard inclusion of a private vehicle, private guide, and private chef for every individual cottage at a competitive premium price point.",
    mainLimitation: "Lack of central social infrastructure and high-tech modern resort amenities.",
    positioningSummary: "An intimate, family-run stone-and-canvas sanctuary in Ol Pejeta's secluded southern sector, offering families and photographers the ultimate unforced luxury of a completely private staff team, private vehicle, and bespoke, unhurried time sovereignty.",
  },

  pairings: [
    { pairedEntity: "Borana Lodge", pairingCategory: "ecosystem", rationale: "Progressing from flat, riverine rhino conservancy to rugged, semi-arid mountain terrain highlights ecological contrast." },
    { pairedEntity: "Saruni Samburu", pairingCategory: "ecosystem", rationale: "Alternative rugged, semi-arid mountain terrain for ecological contrast after the flat riverine opening stay." },
    { pairedEntity: "Sala's Camp", pairingCategory: "regional", rationale: "Follows a quiet, private domestic stay with high-energy savannah migration tracking in the Maasai Mara ecosystem." },
    { pairedEntity: "Mara Expedition Camp", pairingCategory: "regional", rationale: "Alternative high-energy savannah migration tracking option in the Maasai Mara ecosystem." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Conservancy operational records", "Property layout blueprints", "Field inspections", "Regional geographical surveys", "Verified guest operational logs"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Long-term timeline for solar battery storage system capacity upgrades — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};