// data/knowledge-base/explore-nature-mara.ts
export const explorenatureMaraLodge = {
  id: "swafaris_ke_mara_explore_nature_001",
  name: "Explore Nature Mara Lodge",
  country: "Kenya",
  region: "Maasai Mara",
  subRegion: "Oloolaimutia / Siana Sector, Reserve Buffer",
  ecosystem: "Savannah / Riverine Woodland Interface",
  locationDetail: "Positioned on a tongue of land between the Sand River and Oloolaimutia River, 15 minutes outside the Oloolaimutia Gate.",
  nearestGate: "Oloolaimutia Gate",
  nearestAirstrips: ["Keekorok Airstrip", "Olkiombo Airstrip"],
  accessibilityNotes: "5–6 hour drive (250km) from Nairobi via Narok; final stretch from Sekenani/Megwarra is unpaved and deteriorates in wet periods.",
  priceRangeMinUsd: 100,
  priceRangeMaxUsd: 250,
  rawMarketTier: "Value",
  swafarisExperienceTier: "Tier 1: Essential Explorer",
  budgetTier: "Value",
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [],
  rawSourceJson: { /* both full source documents, verbatim */ },

  experienceDna: {
    emotionalTone: ["Exploratory", "Rustic", "Social"], // all 3 canonical, no bridge needed this pass
    energyType: ["Nature Immersion"], // exact canonical match among doc2's 3 sub-labels
    experiencePace: "Fast",
    comfortPhilosophy: ["Adventure Luxury"], // OVERRIDE: "Rustic" retained per your instruction, not doc2's "Contemporary"
    comfortPhilosophyDetailed: "Rustic Immersion",
    journeyRole: "Opening Immersion",
   idealTravelersPrimary: ["Families", "First-Time Safari Travelers"],
idealTravelersSecondary: [],
    intensityScore: 7, relaxationScore: 4, authenticityScore: 6, premiumScore: 4,
    adventureScore: 7, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 6, familySuitabilityScore: 8, comfortScore: 6,
    socialDynamic: "Balanced",
    travelFatigue: "High",
  },

  operationalIntelligence: {
    accessibilityScore: null, // never provided in either pass
    transferTime: "Keekorok Airstrip ~30–45 min drive; Olkiombo Airstrip ~2 hours / 60km drive; ~45 min flight from Nairobi (Wilson).",
    seasonalAccessibility: "Heavy rains (April–May, November) make riverine soils muddy and slick.",
    rainySeasonImpact: "Footpaths between spread-out chalets/tents present traction challenges for reduced-mobility guests during rains.",
    electricitySystem: "Off-grid, primary solar with generator backup; continuous high-wattage power restricted.",
    powerReliability: "Managed via solar cycles; heavy appliances limited to central zones/off-peak hours.", // numeric rating not provided this pass
    waterReliability: "Hot water via solar heaters and backup boilers; availability can fluctuate during consecutive overcast days.", // numeric rating not provided this pass
    internetAvailability: "Wi-Fi confined to main public building and dining patio; no connectivity in private tents/chalets.",
    mobileNetwork: "Safaricom coverage intermittent across property grounds.",
    medicalAccess: "Basic first aid on-site; nearest facilities/evacuation airfields at Keekorok or Sekenani; AMREF Flying Doctors coverage strongly recommended.",
    childFriendly: true,
    mobilityFriendly: false,
    operationalLimitations: [
      "Vehicle congestion at Oloolaimutia Gate during peak migration periods",
      "Ambient audio interference from nearby Ololaimutiek village (vehicle engines, generator hums, livestock)",
      "Solar-dependent power/water cycles",
      "Wheelchair access requires pre-arranged assistance; unpaved paths become slick in rain",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "8 permanent brick-and-mortar chalets plus a multi-bed family cottage give parents a felt sense of physical security; flexible meal schedules accommodate early departures and child dining needs.",
      supportingSignals: ["Solid brick chalets vs. canvas", "Flexible meal scheduling"],
      mismatchConditions: ["Unpaved paths become muddy in rain, requiring care moving toddlers between cottages and dining hall"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "15 minutes from Oloolaimutia Gate enables rapid entry into core reserve loops for Big Five checklisting without high-concession luxury tariffs.",
      supportingSignals: ["Proximity to gate", "Full-day safari schedule design"],
      mismatchConditions: ["High vehicle density near gate during peak season can diminish sense of pristine wilderness"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Crescent unit arrangement, shared dining, and social bar dynamic prioritize communal debriefs over romantic privacy.",
      supportingSignals: [], mismatchConditions: ["High public vehicle movement", "Potential noise from nearby village settlements"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Restricted private-room Wi-Fi, communal layout, and gate traffic prevent total digital detox or solitary decompression.",
      supportingSignals: [], mismatchConditions: ["Intermittent solar power cycles", "Proximity to village traffic"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "Wilderness Minimalist", matchStrength: "Strong",
      reasoning: "Minivan safari traffic near the public gate and fixed central charging schedules limit specialized, patience-driven media workflows.",
      supportingSignals: [], mismatchConditions: ["No dedicated in-room camera charging", "High vehicle concentration in public reserve loops"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "High-Octane Collector", matchStrength: "Strong",
      reasoning: "Founder override, based on direct on-site verification: lacks high-end luxury finishes, private plunge pools, and fine-dining tasting menus this archetype expects — overrides this research pass's own 'ideal fit' classification, which this validation treats as a miscategorization.",
      supportingSignals: [], mismatchConditions: ["No private plunge pools", "No fine-dining tasting menus", "No high-end luxury finishes"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "Serves as the initial, high-energy entry point into the safari circuit — shifts the traveler from urban baseline mindsets into active, high-intensity wildlife tracking, establishing core safari experiences before quieter, reflective phases. Using this lodge as opening immersion lets travelers fulfill primary Big Five goals early, so that travel fatigue resolves into relaxation later rather than ending on a busy, high-traffic note.",
    whatShouldComeBefore: "Direct arrival via Nairobi road transport (5–6 hours) or flight landing at Keekorok/Olkiombo Airstrip.",
    whatShouldComeAfter: "Transition to a slower-paced, highly secluded ecosystem (e.g., Lake Naivasha boat safaris, or a private conservancy in Laikipia/Aberdares) for rest and decompression.",
    emotionalTransitionRationale: "Shifts the traveler from urban baseline mindsets into active, high-intensity wildlife tracking, establishing core safari experiences before moving into quieter, reflective journey phases.",
  },

  narrative: {
    whyChosen: "Solid brick chalet structures, a cooler double-river location, and direct access to river walking safaris at a mid-tier price point.",
    bestUsedFor: "High-density wildlife viewing on a defined budget; multi-generational families needing solid brick chalets; active travelers spending most daylight hours in the reserve.",
    lessSuitableFor: "High-net-worth travelers, honeymooners seeking private luxury retreats, or travelers expecting urban-grade power and private room Wi-Fi.",
    journeyPositionNote: "Opening immersion — first stop upon entering the safari circuit.",
    overview: "Explore Nature Mara Lodge offers a grounded, mid-tier safari base camp prioritizing functional access over luxury styling. Its double-river borders — the Sand and Oloolaimutia — provide natural cooling and canopy birdsong contrasting the surrounding dry savannah, in a modest crescent layout of brick cottages and canvas tents.",
    emotionalFeel: "Balances high-energy morning excitement with casual communal social relaxation; kinetic mornings near Oloolaimutia Gate give way to evenings gathered around the split-level Mazeras stone bar and central campfire.",
    sensorySignature: {
      visual: ["Fiery red and orange sunsets from the elevated public deck over the western Mara horizon"],
      auditory: ["Moving river currents and bird canopy calls", "Evening campfire chatter", "Occasional distant village audio"],
      olfactory: ["Woodsmoke from the central evening fire", "Damp riverine earth", "Dried savannah grass"],
    },
    positiveSignals: [
      "Double-river microclimate creates a cooler, bird-rich environment compared to exposed open plains.",
      "Thermal efficiency of permanent brick-and-mortar cottages topped with heavy makuti thatch.",
      "Flexible, unscripted service accommodating early-morning breakfast boxes and custom meal schedules.",
      "Natural westward orientation of the outdoor patio provides broad sunset views across the reserve horizon.",
    ],
    negativeSignals: [
      "15-minute transit to Oloolaimutia Gate can mean queue delays during peak migration months.",
      "Proximity to Ololaimutiek village means nighttime sounds can include distant vehicle hums or community activity.",
      "Cloudy weather can affect hot water consistency and restrict heavy electrical device usage.",
      "Digital connectivity limited to the main lodge building, requiring guests to leave private rooms for internet access.",
    ],
    hiddenGems: [
      "Foot-guided nature walks along the Sand and Oloolaimutia riverbanks with local Maasai guides, without private conservancy walking fees.",
    ],
    signatureMemory: "Returning from a full-day game drive to sit around the open-air campfire with a drink, listening to the Sand River flow through the thickets under the African night sky.",
    expectationManagement: "This is a functional, value-focused base camp rather than a private luxury sanctuary — expect solar-managed power schedules, Wi-Fi confined to the main building, and shared gate access with other safari vehicles during peak hours.",
    idealNights: "2-3",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client seeks high-density wildlife viewing in the Maasai Mara on a defined budget.",
      "The client is part of a multi-generational family needing solid brick chalets over canvas tents.",
      "The client plans to spend most daylight hours on full-day game drives in the reserve.",
    ],
    doNotRecommendConditions: [
      "The client is a high-net-worth traveler or honeymooner seeking a private luxury retreat.",
      "The client expects urban-grade power, private room Wi-Fi, or exclusive conservancy game viewing without vehicle crowding.",
    ],
    confidenceLevel: "Medium",
    competitiveAdvantage: "Solid brick chalet structures, a cooler double-river location, and direct access to river walking safaris at a mid-tier price point.",
    mainLimitation: "Gate congestion at Oloolaimutia during peak seasons and minor audio intrusions from the nearby village buffer zone.",
    positioningSummary: "A grounded, river-bordered safari base camp offering practical cottage comfort outside the eastern gate, ideal for high-activity, budget-conscious travelers seeking unpretentious access to the Maasai Mara's core wildlife loops.",
  },

  pairings: [
    { pairedEntity: "Lake Naivasha", pairingCategory: "ecosystem", rationale: "Moves from fast-paced, vehicle-based game viewing to slow-paced boat safaris and guided walking on Crescent Island — an effective energetic contrast." },
    { pairedEntity: "Aberdare Highlands / Mount Kenya", pairingCategory: "regional", rationale: "Transitions from an open savannah border camp to a quiet, high-altitude forest retreat, balancing high-intensity game drives with reflective surroundings." },
    { pairedEntity: "Private conservancy (Laikipia or Mara North)", pairingCategory: "experience", rationale: "Following a 3-night stay here with night drives, off-road tracking, and low vehicle density contrasts with the public reserve experience." },
  ],

  dataQuality: {
    researchDate: null, // not restated in this pass — see verificationRequirements
    sourcesConsulted: [
      "Verified field operational records",
      "Guest feedback analysis",
      "Structural site inspections",
      "Official regional travel intelligence (SWA-DATA-003 standard)",
    ],
    confidenceLevel: "High",
    verificationRequirements: [
      "accessibility_score (numeric) — not provided in either research pass",
      "experience_identity — not provided in either research pass",
      "power_reliability numeric rating — provided in first pass (6/10), omitted in second; unconfirmed for final record",
      "water_reliability numeric rating — provided in first pass (7/10), omitted in second; unconfirmed for final record",
      "research_date — not restated in second pass (first pass stated July 2026, unconfirmed for this version)",
      "Luxury Adventurers / comfort philosophy classification — founder override applied (personal on-site verification) against both research passes' own conclusions; see LodgeTravelerMatch reasoning and comfortPhilosophyDetailed.",
    ],
  },
};