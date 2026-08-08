// data/knowledge-base/tsavo/salt-lick-safari-lodge.ts
export const saltLickSafariLodge = {
  id: "salt-lick-safari-lodge", // NEW lodge, no existing DB record
  name: "Salt Lick Safari Lodge",
  country: "Kenya",
  region: "Tsavo",
  subRegion: "Tsavo West / Taita Hills",
  ecosystem: "Semi-arid savannah / Acacia woodlands / Montane plains interface",
  propertyType: "Elevated Stilt Safari Lodge / Large-Scale Commercial Lodge",
  accommodationStyle: "Upscale circular rooms clustered in groups and suspended on heavy concrete stilts above an active wildlife corridor.",
  locationDetail: "Taita Hills Wildlife Sanctuary.",
  nearestGate: "Taita Hills Wildlife Sanctuary Gate",
  nearestAirstrips: ["Salt Lick / Taita Hills Private Airstrip (on-site / 8 km)"],
  accessibilityNotes: "Accessible year-round. Unique SGR train access via Voi station significantly reduces overland driving fatigue.",
  priceRangeMinUsd: 300,
  priceRangeMaxUsd: 550,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // CORRECTED: price midpoint ($425) falls in the Mid-Range band ($300–499), overriding self-reported Premium
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Diani Beach (Mombasa Coast)",
    "Amboseli National Park",
    "Finch Hattons (Tsavo West)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Social", "Wild", "Immersive"], // all valid canonical values, no correction needed
    energyType: ["Wildlife Focus", "Photography", "Family Connection"], // all valid canonical values, no correction needed
    experiencePace: "Moderate",
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // founder-confirmed: closest literal match to source label, also consistent with tier-conservatism given compact rooms, buffet dining, commercial scale
    journeyRole: "Grand Finale", // stated directly, canonical, no hedging — resolves without a founder call
    idealTravelersPrimary: ["First-Time Safari Travelers", "Nature Photographers", "Families"],
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 5, authenticityScore: 6, premiumScore: 6,
    adventureScore: 6, privacyScore: 3, wildlifeExperienceScore: 9,
    culturalImmersionScore: 2, familySuitabilityScore: 6, comfortScore: 7,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "6 hours overland from Nairobi (383 km); 3 hours from Mombasa (200 km); 45 minutes road transfer from Voi SGR train station; 10 minutes from Taita Hills airstrip.",
    seasonalAccessibility: "Open year-round. Waterhole-centric design keeps wildlife viewing highly productive regardless of rainfall.",
    rainySeasonImpact: "Minimal — waterhole-centric design maintains viewing quality year-round.",
    electricitySystem: "Mains and generator power available (24 hours).",
    powerReliability: "High",
    waterReliability: "Hot and cold running water in permanent showers. Source sustainability REQUIRES_VERIFICATION.",
    internetAvailability: "Complimentary Wi-Fi available in the lodge.",
    mobileNetwork: "Partial 3G/4G depending on the specific zone within the sanctuary.",
    medicalAccess: "REQUIRES_VERIFICATION",
    childFriendly: true, // resolved from source "Low to Moderate" — property has a genuine, well-supported Families archetype match (Milestone Celebrators) with an explicit age carve-out rather than broad unsuitability; restriction captured below
    mobilityFriendly: false, // "Low" per source — suspended wooden walkways, multiple structural levels
    operationalLimitations: [
      "Children under the age of 5 are strictly prohibited due to elevated stilt architecture and open walkways",
      "High 96-room footprint dictates high-volume buffet dining and acoustic transmission across shared infrastructure",
      "Full ADA/wheelchair mobility mapping from the ground to the elevated rooms REQUIRES_VERIFICATION",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Strong",
      reasoning: "The passive, high-density wildlife viewing from the balcony ensures they see major species with zero bushcraft effort.",
      supportingSignals: ["24-hour floodlit waterhole viewing from private balconies", "Zero bushcraft effort required"],
      mismatchConditions: ["Must accept large tour group presence and high-volume buffet dining"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "Strong",
      reasoning: "The subterranean bunker provides highly technical, ground-level upward angles of elephant tusks that are impossible to capture from standard 4x4 vehicles.",
      supportingSignals: ["Ground-level underground bunker at the primary waterhole", "Unique upward photography angles"],
      mismatchConditions: ["High social density and acoustic noise can disrupt focused shooting if not specifically booked in the outer wings"] },
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "Strong",
      reasoning: "The theatrical architecture and easy train access provide a highly memorable, low-stress environment for multi-generational groups with children over 5.",
      supportingSignals: ["Low-friction SGR train access", "Triple bed configurations for older children", "Theatrical, high-visual-yield architecture"],
      mismatchConditions: ["Strict prohibition on children under 5 years old limits young family access"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Weak",
      reasoning: "The acoustic noise of early-rising tour groups and the high-volume dining hall will completely destroy the requirement for romantic isolation.",
      supportingSignals: [], mismatchConditions: ["High volume of guests on suspended walkways and compact room sizes fail to deliver a romantic sanctuary"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Weak",
      reasoning: "The heavy concrete architecture and massive room count contradict the ethos of lightweight, ecologically seamless safari living.",
      supportingSignals: [], mismatchConditions: ["The engineered nature of the stilt-and-bunker setup feels overly commercialized and detached from genuine bushcraft"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Weak",
      reasoning: "The social density, acoustic transfer across walkways, and structural compactness offer no space for deep psychological decompression.",
      supportingSignals: [], mismatchConditions: ["Continuous background noise and shared dining spaces impede stress reduction"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights",
    recommendedPositionNote: "JOURNEY ROLE: stated directly as \"Grand Finale\" in source, canonical, no hedging — resolves without a founder call. REGIONAL TALLY (Tsavo sub-phase): Grand Finale x1 — first lodge ingested in this region.",
    whatShouldComeBefore: "Standard vehicle-based tracking in Amboseli or a classic tented camp in Tsavo West.",
    whatShouldComeAfter: "Coastal decompression (e.g., Diani Beach, Mombasa Coast).",
    emotionalTransitionRationale: "Shifts the traveler from active hunting and tracking in 4x4s into a state of passive, cinematic observation, allowing their nervous system to settle while maintaining a high visual yield.",
  },

  narrative: {
    whyChosen: "An architecturally iconic elevated stilt lodge delivering unmatched round-the-clock wildlife proximity and low-fatigue logistics via SGR train, positioned as a high-impact finale before coastal decompression.",
    bestUsedFor: "First-time safari travelers wanting high-impact, low-effort wildlife viewing, nature photographers seeking unique ground-level angles, and families with children over 5 wanting a theatrical, memorable stop.",
    lessSuitableFor: "Luxury purists, ultra-wealthy executives, or honeymooners seeking absolute silence, deep romantic isolation, or organic integration into the wild.",
    journeyPositionNote: "Grand Finale — the ultimate emotional high point of a bush-and-beach itinerary, positioned between Nairobi/Amboseli and the coast, allowing travelers to leave the wild on a high before recovering by the ocean.",
    overview: "Salt Lick Safari Lodge operates as an elevated architectural viewing platform situated inside the Taita Hills Wildlife Sanctuary. Its 96 upscale circular rooms are suspended on heavy concrete stilts above an active wildlife corridor, purposefully collapsing the physical distance between human luxury and apex animals while maintaining total physical security.",
    emotionalFeel: "Intensely kinetic and observant. Guests live in a state of continuous visual scanning; waking up to find a herd of elephants navigating the pillars creates a profound emotional high — a feeling of being an invisible, non-disruptive observer.",
    sensorySignature: {
      visual: ["Floodlights reflecting off wide waterholes", "Red-dirt bush landscape of Tsavo", "Cinematic upward views of elephant tusks from the ground-level bunker"],
      auditory: ["Low rumblings of elephants directly beneath the floorboards", "Acoustic transmission of footsteps and luggage wheels across wooden walkways"],
      olfactory: ["Heavy canvas and thatch ventilation", "Dry Tsavo scrub carried on high-altitude breezes"],
    },
    positiveSignals: [
      "Ground-level underground bunker provides a secure tunnel to a viewing point at the edge of the primary waterhole for unparalleled upward photography",
      "Continuous stream of nocturnal wildlife activity visible directly from private balconies",
      "Low-friction transfer via the Voi SGR train station drastically reduces travel fatigue",
      "Structural room upgrades feature modern, high-pressure glass-fronted walk-in showers with views over the plains",
    ],
    negativeSignals: [
      "Circular rooms linked by suspended wooden boardwalks echo footsteps, luggage wheels, and conversations into neighboring rooms",
      "96-room footprint attracts large package tours and regional vacation groups, occasionally overwhelming dining halls",
      "Standard double rooms are structurally compact due to the tower architecture",
      "High-volume buffet format occasionally lacks bespoke, single-plate personalization",
    ],
    hiddenGems: [
      "Booking clients into the outermost tower wing (Rooms 80–96) — these outer rondavels project directly into the open savannah plain, minimizing walkway foot-traffic noise while offering an insulated luxury feel and expansive migrating-wildlife views.",
    ],
    signatureMemory: "Standing in the eye-level underground bunker at midnight, listening to the heavy breathing of a wild elephant drinking just inches away on the other side of the stone wall.",
    expectationManagement: "Travelers must understand this is a large-scale, high-density hotel experience, not an isolated private bush camp. Meals are predominantly buffet-style, the environment is highly social, rooms are compact, and children under 5 are strictly prohibited.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Itinerary requires a high-impact, low-fatigue wildlife stop between Nairobi and the Mombasa coast",
      "Particularly suited for photographers and families with older children who demand close-range animal interactions with low physical exertion",
    ],
    doNotRecommendConditions: [
      "Client is a luxury purist, ultra-wealthy executive, or honeymooner seeking absolute silence, deep romantic isolation, highly personalized plated dining, or organic integration into the wild",
    ],
    confidenceLevel: "High", // per source, with strict wing selection noted
    competitiveAdvantage: "The ground-level bunker and 24-hour floodlit stilt architecture provide a concentration of passive wildlife viewing that standard tented camps cannot mathematically replicate.",
    mainLimitation: "The sheer volume of 96 rooms dictates a commercial, tour-group atmosphere and acoustic friction that dilutes the exclusivity of the premium safari narrative.",
    positioningSummary: "An architecturally iconic, stilt-mounted safari masterpiece inside Taita Hills Sanctuary providing unprecedented, round-the-clock proximity to elephant herds, perfectly suited as a high-impact finale before a coastal decompression.",
  },

  pairings: [
    { pairedEntity: "Diani Beach (Mombasa Coast)", pairingCategory: "ecosystem", rationale: "The contrast of the parched, red-dirt bush landscape of Tsavo/Taita Hills with the turquoise waters and slow palm-fringed rhythm of the coast creates a balanced itinerary." },
    { pairedEntity: "Amboseli National Park", pairingCategory: "regional", rationale: "Amboseli offers wide-open landscapes and active driving; Salt Lick offers enclosed, elevated, and passive observation — a strong contrast pairing preceding this lodge." },
    { pairedEntity: "Finch Hattons (Tsavo West)", pairingCategory: "experience", rationale: "Balances high-volume theatrical wildlife density with an intimate, low-capacity luxury tented sanctuary offering private, single-key fine-dining luxury." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator specifications", "Regional geographical surveys", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Exact year established — explicitly flagged REQUIRES_VERIFICATION in source",
      "Source sustainability of hot/cold water — explicitly flagged REQUIRES_VERIFICATION in source",
      "On-site medical emergency response capabilities — explicitly flagged REQUIRES_VERIFICATION in source",
      "Full ADA/wheelchair mobility mapping to elevated rooms — explicitly flagged REQUIRES_VERIFICATION in source",
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};