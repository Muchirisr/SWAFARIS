// data/knowledge-base/amboseli/sentrim-amboseli-lodge.ts
export const sentrimAmboseliLodge = {
  id: "sentrim-amboseli-lodge", // NEW lodge, no existing DB record
  name: "Sentrim Amboseli Lodge",
  country: "Kenya",
  region: "Amboseli National Park",
  subRegion: "Kimana Gate Sector, Eastern Park Boundary Interface",
  ecosystem: "Semi-arid wilderness / Acacia scrubland / Seasonal wetlands",
  propertyType: "Mid-scale Safari Camp / Tented Lodge & Chalets",
  accommodationStyle: "Canvas safari tents on elevated concrete plinths under thatched roofs, alongside solid-walled family chalets.",
  locationDetail: "Acacia-dense border zone 3 km outside Amboseli National Park's Kimana Gate.",
  nearestGate: "Kimana Gate (3 km / 3–5 minutes drive)",
  nearestAirstrips: ["Amboseli Airstrip"],
  accessibilityNotes: "Accessible year-round by 4x4 or 2WD via paved highway to Kimana, concluding on heavily corrugated unpaved bush tracks. Flat concrete plinth access, minor step-up entrances to tents.",
  priceRangeMinUsd: 180,
  priceRangeMaxUsd: 320,
  rawMarketTier: "Premium", // as stated in source doc, overridden below per price-guide rule
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value", // price-guide midpoint (~$250) overrides doc's stated "Premium"
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Chyulu Hills or Tsavo West / Mzima Springs (ecosystem contrast pairing)",
    "Maasai Mara or Laikipia Plateau (regional pairing)",
    "Selenkay Conservancy or a private Mara reserve (intimate step-up pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Rustic", "Wild", "Exploratory"], // "Cinematic" substituted per founder decision, consistent with retroactive fix
    energyType: ["Nature Immersion", "Wildlife Focus", "Photography"], // all approved as-is, no normalization needed
    experiencePace: "Moderate", // stated directly, no fix needed
    comfortPhilosophy: ["Adventure Luxury"],
    comfortPhilosophyDetailed: "Adventure Basecamp",
    journeyRole: "Opening Immersion", // canonical match, no substitution needed
    idealTravelersPrimary: ["First-Time Safari Travelers", "Families", "Nature Photographers"],
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 6, authenticityScore: 6, premiumScore: 4,
    adventureScore: 5, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 5, familySuitabilityScore: 7, comfortScore: 6,
    socialDynamic: "Balanced",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4–4.5 hours overland from Nairobi via Namanga or Emali route; 35–45 min road transfer from Amboseli Airstrip (45 min flight from Wilson).",
    seasonalAccessibility: "Open year-round; black cotton mud during peak rains (April–May) can slow access along secondary tracks outside the main gate, though the central lodge layout remains well-drained.",
    rainySeasonImpact: "Black cotton mud during peak rains (April–May) can slow access along secondary tracks.",
    electricitySystem: "Hybrid grid power backed by a central generator; 24-hour electricity in tents and chalets.",
    powerReliability: "Continuous, 24-hour per source.",
    waterReliability: "Solar photovoltaic and thermal collection systems; temperatures can fluctuate erratically during early morning peak usage or prolonged cloudy spells.",
    internetAvailability: "Complimentary Wi-Fi in main public areas (lounge, bar, dining room); weak to non-existent inside outlying tents.",
    mobileNetwork: "Safaricom/Airtel cellular coverage accessible across property grounds.",
    medicalAccess: "On-site basic first aid and trained staff; local health centers in Kimana trading center; emergency evacuation via Amboseli Airstrip.",
    childFriendly: true, // High per source
    mobilityFriendly: true, // Moderate per source — minor step friction for wheelchair users without assistance
    operationalLimitations: [
      "Large inventory (60+ keys) creates an institutional resort atmosphere during peak seasons",
      "Erratic solar hot water during dawn hours",
      "Aging stone bathroom fixtures",
      "Repetitive buffet dining schedules",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Checklist Maximalist", matchStrength: "Strong",
      reasoning: "Focuses strictly on iconic sightings (Kilimanjaro backdrop + large elephant herds) without paying ultra-luxury conservancy rates. 3 km proximity to Kimana Gate maximizes first-light entry into prime wildlife zones.",
      supportingSignals: ["Kilimanjaro + elephant herd sightings", "3 km gate proximity"],
      mismatchConditions: ["Must accept institutional buffet dining and basic, dated bathroom finishes"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Finds an approachable, low-anxiety entry point to classic safari living with canvas-walled accommodation set on solid concrete foundations, predictable amenities, and clear pathways.",
      supportingSignals: ["Solid concrete foundations", "Predictable amenities and clear pathways"],
      mismatchConditions: ["Exposure to high peak-season vehicle and guest volume around central public zones"] },
    { fitType: "ideal", category: "Families", archetype: "Milestone Celebrators", matchStrength: "Strong",
      reasoning: "Staff excel at vibrant, high-energy celebrations for family birthdays and anniversaries. Multi-room chalets and central pool infrastructure comfortably host multi-generational family groups.",
      supportingSignals: ["Vibrant staff-led celebrations", "Multi-room family chalets"],
      mismatchConditions: ["Corrugated access road introduces physical fatigue for elderly family members during transfer"] },
    { fitType: "ideal", category: "Families", archetype: "Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Enclosed, flat lodge grounds, dedicated pool space, and short transit times to the park gate make managing young children straightforward and low-stress.",
      supportingSignals: ["Flat, enclosed grounds", "Dedicated pool space"],
      mismatchConditions: ["Fluctuating solar hot water temperatures require planning around morning bath times for small children"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "Apex Trophy Hunter", matchStrength: "Strong",
      reasoning: "Dedicated elevated viewing platform offers unobstructed golden-hour framing of Mount Kilimanjaro, while gate proximity ensures arrival at park swamps before midday heat haze settles.",
      supportingSignals: ["Elevated Kilimanjaro viewing platform", "Early arrival before heat haze"],
      mismatchConditions: ["Central tents lack private workspace for extensive digital media editing"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "High key count, shared buffet dining halls, central pool noise, and close tent spacing eliminate romantic privacy and exclusive intimacy.",
      supportingSignals: [], mismatchConditions: ["High tour group density, lack of private plunge pools, and communal public spaces fail to deliver an isolated romantic sanctuary"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "Incognito Ascetic", matchStrength: "Strong",
      reasoning: "Large resort footprint, ambient pool noise, foot traffic along tent corridors, and lack of refined wellness infrastructure prevent complete mental recovery and deep digital detox.",
      supportingSignals: [], mismatchConditions: ["Institutional scale and constant group arrival dynamics impede quiet mental decompression"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "Low-Impact Purist", matchStrength: "Strong",
      reasoning: "60+ key concrete-plinth footprint, high energy footprint, and commercial resort mechanics fail to meet strict low-impact, leave-no-trace eco-luxury standards.",
      supportingSignals: [], mismatchConditions: ["Severe operational mismatch with expectations of intimate, footprint-minimal wilderness camps"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "2 Nights (48 Hours)",
    recommendedPositionNote: "Source states 'Opening Immersion' directly — a canonical match, no substitution needed.",
    whatShouldComeBefore: "Direct overland arrival from Nairobi (4–4.5 hours) or a short domestic flight landing at Amboseli Airstrip. Functions as the iconic visual kick-off to an East African circuit.",
    whatShouldComeAfter: "Transition to exclusive, low-vehicle-density private conservancies in the Maasai Mara, Laikipia, or the quiet riverine ecosystems of Tsavo West / Chyulu Hills.",
    emotionalTransitionRationale: "Captures immediate, high-impact landscape anchors (Kilimanjaro summit + massive elephant herds) early in the trip while energy levels are high, setting a strong baseline before moving to secluded regions.",
  },

  narrative: {
    whyChosen: "Sentrim Amboseli is the reference example for a reliable Opening Immersion at true mid-market pricing: unmatched Kilimanjaro viewing infrastructure and 3 km gate proximity, positioned as the iconic visual kick-off before a circuit moves into private, exclusive conservancies.",
    bestUsedFor: "Families, first-time safari travelers, or nature photographers seeking an affordable, highly accessible base camp that guarantees gate proximity and Kilimanjaro viewing angles without paying ultra-luxury rates.",
    lessSuitableFor: "Honeymooners, executives, or luxury purists requiring deep privacy, bespoke fine dining, polished contemporary finishes, or low-density exclusive wilderness mechanics.",
    journeyPositionNote: "Opening Immersion — the iconic visual kick-off to an East African circuit, ideally followed by a transition into private, low-density conservancies.",
    overview: "Sentrim Amboseli Lodge is a functional, mid-scale safari base camp 3 km outside Amboseli National Park's Kimana Gate, architecturally divided between 60 elevated canvas tents on concrete plinths and solid family chalets arranged around a central green lawn.",
    emotionalFeel: "Anticipatory and observation-focused — guest rhythm centers on tracking Mount Kilimanjaro's cloud cover from tent verandas, with evenings settling into a relaxed, community-oriented debrief around the pool deck and campfire.",
    sensorySignature: {
      visual: ["Dust-white salt plains contrasting against the green central lodge oasis", "Mount Kilimanjaro's snow-capped peak"],
      auditory: ["Morning wind through acacia scrub", "Vervet monkeys rustling canvas flysheets", "Evening Maasai milestone songs at the dining hall"],
      olfactory: ["Dry bush dust", "Acacia blossom", "Woodsmoke from the campfire ring", "Chlorine from the central pool"],
    },
    positiveSignals: [
      "Elevated wooden deck specifically positioned for unobstructed golden-hour photography of Kilimanjaro",
      "3-kilometer drive to Kimana Gate allows early entry to park swamps before morning predator activity drops",
      "Generous room footprints with solid wood furniture, writing desks, and private mini-refrigerators",
      "Local team provides memorable, personalized celebrations for birthdays and anniversaries",
    ],
    negativeSignals: [
      "Unpaved, heavily washboarded approach track causes high transit vibration and traveler fatigue",
      "Attached stone bathrooms exhibit aging tiles, worn plumbing fixtures, and slow drains",
      "Morning hot water temperatures fluctuate based on weather and simultaneous peak guest usage",
      "Central dining relies on standardized international hotel buffet formats that feel repetitive after 48 hours",
    ],
    hiddenGems: [
      "The outermost western tent corridor looks directly into untamed community conservancy bushland rather than internal garden paths — requesting tents in this section provides an insulated, quiet safari atmosphere where small game and birdlife move right past the veranda.",
    ],
    signatureMemory: "Standing on the elevated wooden viewing platform at 6:15 AM as the morning clouds part, revealing the sunlit peak of Mount Kilimanjaro above a vast acacia horizon.",
    expectationManagement: "This is a high-volume, functional mid-tier base camp. Bathrooms are rustic and aging, solar hot water fluctuates during early morning hours, access tracks are bumpy, and dining follows a high-capacity buffet model.",
    idealNights: "2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family, first-time safari traveler, or nature photographer seeking an affordable, highly accessible base camp ($180–$320/night) that guarantees gate proximity and Kilimanjaro viewing angles without paying ultra-luxury rates.",
    ],
    doNotRecommendConditions: [
      "Honeymooner, executive, or luxury purist requiring deep privacy",
      "Bespoke fine dining or polished contemporary finishes",
      "Low-density exclusive wilderness mechanics",
    ],
    confidenceLevel: "Medium", // per source — requires active expectation management
    competitiveAdvantage: "Premier combination of immediate Kimana Gate proximity, custom elevated mountain viewing infrastructure, and reliable family amenities at an accessible price point.",
    mainLimitation: "High guest volume (60+ keys) resulting in communal buffet dining, low room privacy, and aging bathroom fixtures.",
    positioningSummary: "A reliable, view-centric mid-tier safari camp located just outside Kimana Gate, offering functional tented comfort and direct access to Kilimanjaro vistas and elephant corridors.",
  },

  pairings: [
    { pairedEntity: "Chyulu Hills or Tsavo West (Mzima Springs)", pairingCategory: "ecosystem", rationale: "Moving from Amboseli's dry, dust-white salt flats to lush lava-flow ecosystems creates a powerful visual contrast." },
    { pairedEntity: "Maasai Mara or Laikipia Plateau", pairingCategory: "regional", rationale: "Introduces high predator density and private conservancy tracking after establishing the Kilimanjaro baseline." },
    { pairedEntity: "Selenkay Conservancy or a private Mara reserve", pairingCategory: "experience", rationale: "Transitions from a large, social, high-access hub into an intimate, 6-to-8 tent exclusive conservancy camp." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Regional geographical surveys", "Field operational logs", "Property inventory records", "Operator site inspections"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Medical air-evacuation ground transfer response time from Kimana Gate boundary — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};