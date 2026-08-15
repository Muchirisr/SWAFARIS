// data/knowledge-base/samburu/soroi-larsens-camp.ts
export const soroiLarsensCamp = {
  id: "soroi-larsens-camp", // NEW lodge, no existing DB record
  name: "Soroi Larsens Camp",
  country: "Kenya",
  region: "Samburu",
  subRegion: "Samburu National Reserve",
  ecosystem: "Semi-Arid Riverine Woodland / Ewaso Nyiro River Basin",
  propertyType: "Boutique Eco-Luxury Safari Camp / Riverfront Tented Retreat",
  accommodationStyle: "Modern luxury canvas tents on raised stone platforms featuring floor-to-ceiling glass fronts, polished wooden floors, oriental rugs, walk-in wardrobes, and expansive river-facing private verandahs.",
  locationDetail: "Directly on the banks of the Ewaso Nyiro River inside Samburu National Reserve, shaded by dense mature tree canopy.",
  nearestGate: "Archer's Gate (Samburu National Reserve)",
  nearestAirstrips: ["Buffalo Springs Airstrip (~30 minutes drive)", "Kalama Airstrip (~40 minutes drive)"],
  accessibilityNotes: "Accessible year-round via the main paved Isiolo-Archer's Post road; level riverbank lawns, gravel paths, and raised wooden boardwalks.",
  priceRangeMinUsd: 530,
  priceRangeMaxUsd: 950,
  rawMarketTier: "Premium", // as stated in source doc
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium", // CONFIRMED: price midpoint ($740) falls in the Premium band ($500–799) — matches self-stated tier, no correction needed
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Lewa Wilderness",
    "Borana Lodge",
    "Soroi Mara Bush Camp",
    "Soroi Private Wing",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Inspirational", "Romantic"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Intimate" → Romantic per case-by-case rule, justified since Sanctuary Seekers/Honeymooners is compatible and Social Dynamic is only "Balanced" (not fully isolated), same treatment as Elephant Bedroom Camp
    energyType: ["Luxury Escape", "Wellness"], // CORRECTED: "Quiet luxury" → Luxury Escape; "Restorative" → Wellness
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Modern Luxury", // CORRECTED: "Eco-luxury | Ultra-exclusive" non-canonical; founder chose Modern Luxury over Ultra-Exclusive Sanctuary — the doc's own incompatible-archetype reasoning notes standard tents lack the seclusion "ultra-exclusive" implies, so Modern Luxury is the fairer property-wide characterization
    journeyRole: "Recovery", // FOUNDER DECISION: source hedge "Mid-Journey Peak or Romantic Finale" — NEITHER option is canonical (distinct from our Adventure Peak/Mid-Journey Transition and Grand Finale), requiring a real founder decision per the standing rule rather than an auto-resolve. Confirmed Recovery, supported by low intensity (4/10) and high relaxation (8/10) scoring plus the source's own "restorative luxury reset" framing — breaks the prior 3-lodge Opening Immersion streak in Samburu
    idealTravelersPrimary: ["Burned-out Executives", "Honeymooners", "Nature Photographers", "Slow Travelers"], // CORRECTED: added "Slow Travelers" per the Biophilic Restorer category correction below; kept Burned-out Executives since the archetype was clearly intended to serve executive-recovery travelers despite the mislabel
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 8, authenticityScore: 8, premiumScore: 9,
    adventureScore: 6, privacyScore: 7, wildlifeExperienceScore: 9,
    culturalImmersionScore: 7, familySuitabilityScore: 7, comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5–6 hours drive from Nairobi (~350 km); 1.5-hour scheduled flight from Wilson Airport (WIL) to Buffalo Springs/Kalama Airstrip plus 30–40 minute road transfer.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Heavy seasonal rains (April–May, November) cause the Ewaso Nyiro River to swell, occasionally flooding lower banks, but main camp infrastructure is built elevated on secure riverine plinths.",
    electricitySystem: "24-hour solar-hybrid power system supported by a silent generator.",
    powerReliability: "Continuous",
    waterReliability: "Eco-friendly solar water heating powering high-pressure en-suite showers.",
    internetAvailability: "Wi-Fi available across the main lounge, dining deck, and inside guest tents.",
    mobileNetwork: "Moderate cellular reception.",
    medicalAccess: "On-site first-aid equipment, basic emergency medical center, and direct medical air-evacuation via AMREF Flying Doctors.",
    childFriendly: true, // "Moderate to High" per source, resolved per standing collapse precedent, confirmed by founder
    mobilityFriendly: true, // "Moderate to High" per source, resolved per standing collapse precedent, confirmed by founder
    operationalLimitations: [
      "Positioned inside a public national reserve, meaning activities are restricted to official reserve hours (no night drives or off-road tracking inside reserve boundaries)",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "High",
      reasoning: "Deluxe Suites featuring outdoor showers, private plunge pools, and private star beds over the river offer romantic, cinematic intimacy.",
      supportingSignals: ["Private plunge pools", "Private star beds over the river", "Outdoor showers"],
      mismatchConditions: ["Standard tents have less spatial separation from neighboring units"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Fine-Art Ethologist", matchStrength: "High",
      reasoning: "The specialized low-angle photographic waterhole hide allows quiet, unhurried wildlife photography without engine vibrations or vehicle dust.",
      supportingSignals: ["Dedicated low-vantage photographic waterhole hide", "Quiet, unhurried wildlife photography access"],
      mismatchConditions: ["Direct sunlight can be intense during midday river shoots"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "ONTOLOGY CORRECTION: source labeled this archetype's category as Burned-out Executives; The Biophilic Restorer actually belongs to Slow Travelers. Category label corrected while retaining the archetype, since slow experience pace, unhurried a la carte dining, and riverfront soundscapes fully support the rationale given.",
      supportingSignals: ["Slow experience pace", "A la carte dining without rigid schedules", "Riverfront shade canopy and flowing-water soundscapes"],
      mismatchConditions: ["Occasional guest movement along the central dining deck during peak meal hours"] },
    // DROPPED: "The High-Octane Collector (Thrill-Seeking Adventurers)" — invented category doesn't match the archetype's real category (Luxury Adventurers), and the fit rationale describes general restlessness with slow pace rather than the archetype's actual elite-active-pursuits psychology; no clean fix available
    // DROPPED: "The Extreme Isolationist (Off-Grid Purists)" — same invented pattern dropped at Elephant Bedroom Camp; not a real archetype/category, no clean equivalent
  ],

  journeyIntelligence: {
    idealStayDuration: "2 to 3 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION (FOUNDER DECISION): source hedged \"Mid-Journey Peak or Romantic Finale\" — NEITHER option is canonical. Per the standing rule, when no hedge option is canonical, this required a real founder decision rather than an auto-resolve. Founder confirmed Recovery, supported by low intensity (4/10), high relaxation (8/10), and the source's own 'restorative luxury reset' mid-circuit framing. This breaks the prior 3-lodge Opening Immersion streak in Samburu. REGIONAL TALLY (Samburu sub-phase, lodge 4/4 so far): Opening Immersion x3, Recovery x1 — healthier spread than the prior 100% concentration.",
    whatShouldComeBefore: "A high-intensity, rugged safari leg or dusty game-viewing sector (e.g., conservancy mobile camps or dense public game parks).",
    whatShouldComeAfter: "An ultra-exclusive private conservancy camp in Laikipia/Lewa or a high-end Mara boutique camp (e.g., Soroi Mara Bush Camp or Soroi Private Wing).",
    emotionalTransitionRationale: "Shifts travelers from dusty, high-vibration vehicle tracking into a refined, air-cooled, artistic sanctuary along the water.",
  },

  narrative: {
    whyChosen: "An elegant, riverfront boutique camp offering glass-fronted architecture, star-bed plunge suites, and a dedicated photography hide, positioned as a restorative mid-circuit luxury reset.",
    bestUsedFor: "Curating for honeymooners, design-conscious travelers, photographers, or executives seeking a high-comfort, low-stress, riverfront sanctuary with star beds and spa facilities.",
    lessSuitableFor: "Clients who demand absolute spatial isolation, total wilderness silence between tents, or off-road night drives inside the camp's immediate perimeter.",
    journeyPositionNote: "Recovery — a refined, restorative reset positioned mid-circuit.",
    overview: "Soroi Larsens Camp is an elegant boutique tented retreat set directly on the banks of the Ewaso Nyiro River inside Samburu National Reserve. Shaded by a dense canopy of mature trees, the camp combines historic safari exploration with contemporary glass-fronted canvas architecture, star beds, private plunge pools, and an interactive organic garden setup.",
    emotionalFeel: "Contemplative, refined, and deeply restorative. The camp operates on an unhurried rhythm where river views, custom mixology, and a la carte dining allow guests to set their own pace.",
    sensorySignature: {
      visual: ["Mud-brown river currents framed by lush green canopies", "Glass-fronted luxury tents", "Elephants wading on the opposite bank"],
      auditory: ["The continuous gentle murmur of the Ewaso Nyiro", "Bird calls in the canopy", "Distant nocturnal lion calls"],
      olfactory: ["Wild river sage", "Organic timber", "Fresh wood smoke from the evening fire pit", "High-end botanical linens"],
    },
    positiveSignals: [
      "Seamless transition from private plunge pools to outdoor showers and star beds in the Deluxe Suites",
      "Dedicated low-vantage hide for professional-grade, eye-level wildlife photography",
      "Glass-fronted tents, walk-in wardrobes, and rich interior textures",
      "Intuitive, personalized staff touches, including custom sundowner mixology and private dining",
    ],
    negativeSignals: [
      "Standard tents are aligned closely along the riverbank, allowing conversational sounds to occasionally travel through canvas at night",
      "Constant presence of vervet monkeys, baboons, and crocodiles requires strict tent-zipping and deck management discipline",
    ],
    hiddenGems: [
      "An on-site organic vegetable garden paired with an open-air culinary interactive setup where guests can engage with chefs and bake wood-fired pizzas in the wild.",
    ],
    signatureMemory: "Watching a herd of elephants cross the Ewaso Nyiro River at dusk directly in front of your private verandah while enjoying a hand-crafted sundowner cocktail.",
    expectationManagement: "Guests should understand that while the camp offers ultra-exclusive amenities, its placement within Samburu National Reserve means activity timings follow reserve regulations, and standard tents sit in a shared linear line along the riverfront.",
    idealNights: "2 to 3",
  },

  recommendationNotes: {
    recommendConditions: [
      "Curating for honeymooners, design-conscious travelers, photographers, or executives seeking a high-comfort, low-stress riverfront sanctuary",
      "Client wants star beds and spa facilities",
    ],
    doNotRecommendConditions: [
      "Booking clients who demand absolute spatial isolation or total wilderness silence between tents",
      "Clients wanting off-road night drives inside the camp's immediate perimeter",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unrivaled prime location on the Samburu side of the Ewaso Nyiro River combined with glass-fronted tent architecture, private photographic hide, star beds, and a la carte culinary flexibilities.",
    mainLimitation: "Public reserve operational constraints and riverfront tent density.",
    positioningSummary: "An exquisite riverfront sanctuary in Samburu blending glass-fronted luxury tents, star-bed plunge suites, and photographic hides for travelers seeking an artistic, deeply restorative safari retreat.",
  },

  pairings: [
    { pairedEntity: "Lewa Wilderness", pairingCategory: "regional", rationale: "Part of the Samburu Reserve → Lewa/Borana Conservancy → Maasai Mara regional sequencing arc." },
    { pairedEntity: "Borana Lodge", pairingCategory: "regional", rationale: "Alternative Lewa/Borana Conservancy pairing continuing the regional sequencing arc toward the Mara." },
    { pairedEntity: "Soroi Mara Bush Camp", pairingCategory: "ecosystem", rationale: "Pairs Samburu's arid riverine ecosystem with the rolling green savannahs of the Maasai Mara under the same Soroi Collection." },
    { pairedEntity: "Soroi Private Wing", pairingCategory: "ecosystem", rationale: "Alternative Soroi Collection Mara pairing maintaining high design standards while stepping up spatial isolation." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Soroi Collection property specifications", "Field surveys", "Regional airstrip guides", "Travel reviews"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [],
  },
};