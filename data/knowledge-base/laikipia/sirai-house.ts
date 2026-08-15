// data/knowledge-base/laikipia/sirai-house.ts
export const siraiHouse = {
  id: "sirai-house", // NEW lodge, no existing DB record
  name: "Sirai House",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Borana Conservancy",
  ecosystem: "Mountain forest ridge / Semi-arid savannah transitions / Foothills of Mount Kenya",
  propertyType: "Ultra-Exclusive Private Safari Villa / Residential Estate",
  accommodationStyle: "Handcrafted local stone and timber luxury private suites with open verandas, roaring wood fires, bespoke interiors, and a grand principal master suite featuring a private infinity plunge pool.",
  locationDetail: "High, cool mountain ridge within the 32,000-acre Borana Conservancy, overlooking the Laikipia plains toward Mount Kenya.",
  nearestGate: "Borana Conservancy Main Gate",
  nearestAirstrips: ["Borana Airstrip", "Lewa Downs Airstrip"],
  accessibilityNotes: "Positioned along a high, cool mountain ridge; natural stone pathways, terraced verandas, and split-level estate steps require steady footing.",
  priceRangeMinUsd: 2825, // FOUNDER-CONFIRMED CONVERSION: derived from $18,000/night exclusive-use buyout ÷ 12 guests max, plus per-guest supplement — see rawSourceJson.priceRange for full methodology
  priceRangeMaxUsd: 3000, // FOUNDER-CONFIRMED CONVERSION: derived from $18,000/night exclusive-use buyout ÷ 6 guests minimum party
  rawMarketTier: "Ultra-Luxury", // as stated in source doc's Luxury Tier field
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED: effective per-person range ($2,825–$3,000) falls firmly in Ultra-Luxury regardless of buyout-vs-per-person methodology — no tier ambiguity
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Mara Plains",
    "Singita Mara River Tented Camp",
    "Sirai Beach (Kilifi)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim, including original $18,000/night exclusive-use buyout pricing structure and founder-confirmed conversion methodology */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Inspirational", "Reflective"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Intimate" dropped/replaced with Reflective (no Honeymooners archetype, Isolated social dynamic but family/executive-driven not romance-driven)
    energyType: ["Wellness", "Luxury Escape", "Wildlife Focus"], // CORRECTED: "Decompression Retreat" → Wellness; "Quiet Luxury" → Luxury Escape; Wildlife Focus added per founder decision given 8/10 wildlife score
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Exclusive Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // CORRECTED: "Contemporary Luxury | Ultra-Exclusive" non-canonical; resolved directly to Ultra-Exclusive Sanctuary rather than treated as open either/or, given source's own "Ultra-Exclusive" language and 10/10 privacy score / single-party-only booking model
    journeyRole: "Grand Finale", // FOUNDER DECISION: source's stated field hedged "Recovery / Reset Anchor or Safari Climax" (both canonical, genuine either/or) — but the source's own Psychological Sequencing Rationale explicitly named a third, unlisted canonical option ("grand finale... before flying home"), creating a real three-way tension. Founder resolved in favor of Grand Finale, matching the narrative's own explicit end-of-trip language over the stated field's options — first use of Grand Finale in Laikipia
    idealTravelersPrimary: ["Burned-out Executives", "Families", "Luxury Adventurers", "Slow Travelers"], // CORRECTED: "Families (Multi-generational Ultra-HNW Groups)" simplified to real category name "Families"
    idealTravelersSecondary: [],
    intensityScore: 3, relaxationScore: 10, authenticityScore: 9, premiumScore: 10,
    adventureScore: 7, privacyScore: 10, wildlifeExperienceScore: 8,
    culturalImmersionScore: 6, familySuitabilityScore: 9, comfortScore: 10,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "~35-minute private charter on Sirai Air Pilatus PC-12 to Borana Airstrip plus 20-minute scenic game drive transfer; or 45–60 minute flight to Lewa Downs plus 1-hour road transfer; helicopter landing directly on-site.",
    seasonalAccessibility: "Open year-round; high-altitude ridge location provides excellent drainage during rainy seasons.",
    rainySeasonImpact: "Minimal, though crisp mountain breezes and cold evening temperatures require warm layering.",
    electricitySystem: "High-capacity off-grid solar and generator power grid.",
    powerReliability: "Continuous 24-hour",
    waterReliability: "High-output solar and boiler heating systems delivering pressurized hot water.",
    internetAvailability: "High-speed fiber Wi-Fi throughout the main house and private guest suites.",
    mobileNetwork: "Intermittent Safaricom cellular network coverage.",
    medicalAccess: "On-site first aid equipment, dedicated 40-person private estate staff, and direct access to AMREF Flying Doctors emergency air-evacuation from Borana Airstrip or the private helipad.",
    childFriendly: true, // "High" per source, unambiguous
    mobilityFriendly: true, // "Moderate" per source (golf cart/staff assistance available), resolved per standing collapse precedent, confirmed by founder
    operationalLimitations: [
      "Strictly exclusive-use minimum buyout threshold ($18,000/night baseline for up to 6 guests)",
      "High-altitude cold evening breezes",
      "Strict advanced-riding proficiency requirement for big-game horseback tracking",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "Complete structural isolation on a private 250-acre enclave, high-speed fiber Wi-Fi for discreet market monitoring, and resort-grade spa/wellness facilities allow total physical recovery without unwanted social interaction.",
      supportingSignals: ["Single-party-only booking across 250-acre private enclave", "High-speed fiber Wi-Fi", "Resort-grade spa/wellness facilities"],
      mismatchConditions: ["High mountain altitude creates crisp, cold evenings requiring fireside lounging rather than warm tropical nights"] },
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "High",
      reasoning: "ONTOLOGY CORRECTION: source listed the invented archetype 'The Bonded Cohort' paired to Multi-Generational Families & Groups; remapped to the real archetype The Milestone Celebrators, fully supported by the 6-suite private residential layout, private cinema, tennis court, heated pool, and flexible dining catering to 6-12 guests of varying ages for multi-generational celebrations.",
      supportingSignals: ["6-suite private residential layout", "Private cinema, tennis court, heated pool", "Flexible shamba-to-table dining for varied ages"],
      mismatchConditions: ["Non-riding family members cannot join high-intensity big-game equestrian tracking sessions"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Offers access to world-class stable horses for galloping alongside wild game, helicopter safaris to Mount Kenya, and fly camping backdrops.",
      supportingSignals: ["World-class equestrian stable horses for game tracking", "Helicopter safaris to Mount Kenya", "Fly camping backdrops"],
      mismatchConditions: ["Must meet strict advanced equestrian riding standards to participate in open bush rides"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "ONTOLOGY CORRECTION: source listed the invented archetype 'The Mindful Explorer'; remapped to the real archetype The Biophilic Restorer, supported by the deep, unhurried immersion into Borana's anti-poaching operations, rhino tracking, and local community initiatives with zero commercial rush.",
      supportingSignals: ["Deep unhurried immersion into anti-poaching operations", "Rhino tracking access", "Zero commercial rush pacing"],
      mismatchConditions: ["Higher cost structure requires a minimum 3-night stay commitment"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "The property is structured for multi-day private villa living and quiet decompression rather than rapid, high-turnover game park ticking.",
      supportingSignals: [], mismatchConditions: ["Inefficient use of an exclusive 6-suite estate for a quick 1-night checklist stop"] },
    // DROPPED: "The Budget / Value Explorer (Cost-Conscious Travelers)" — not a real archetype/category; $18,000/night floor already makes the mismatch self-evident
    // DROPPED: "The Sun-Seeking Tropical Traveler (Heat-Seeking Travelers)" — not a real archetype/category; cold-climate concern already captured in negativeSignals/operationalLimitations
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION (FOUNDER DECISION): source stated field hedged 'Recovery / Reset Anchor or Safari Climax' — both canonical, genuine either/or. However, the source's own Psychological Sequencing Rationale explicitly described a third, unlisted canonical option: 'Placing Sirai House at the end of a safari journey provides an unmatchable grand finale... before flying home' — directly naming Grand Finale language not present in the stated field. Founder resolved the resulting three-way tension in favor of Grand Finale, matching the narrative's own explicit end-of-trip positioning over the stated field's options. REGIONAL TALLY (Laikipia sub-phase, FINAL 8/8): Opening Immersion x5, Recovery x1, Adventure Peak x1, Grand Finale x1 — no concentration triggered; final spread is well-balanced across four distinct canonical roles.",
    whatShouldComeBefore: "A high-intensity, vehicle-bound, dusty safari sector in the Masai Mara (e.g., Mara Plains or Singita Mara River Tented Camp) or an international flight arrival into Nairobi.",
    whatShouldComeAfter: "A luxury coastal beach retreat (e.g., Sirai Beach, Kilifi) via private air charter, or a direct international departure flight home.",
    emotionalTransitionRationale: "Transitions travelers from dusty, high-adrenalin wildlife tracking into an ultra-exclusive, deeply restorative residential state of luxury estate living.",
  },

  narrative: {
    whyChosen: "An ultra-exclusive, single-party private villa estate offering unmatched residential luxury, world-class wellness infrastructure, and private aviation, positioned as the ultimate trip-ending sanctuary.",
    bestUsedFor: "Ultra-high-net-worth families, executive cohorts, or celebrity groups seeking absolute privacy, world-class villa amenities, private aviation integration, and resort-grade wellness in a private safari setting.",
    lessSuitableFor: "Single couples or small parties with modest budgets, short 1-night transit schedules, or those seeking a rustic canvas-under-stars camp.",
    journeyPositionNote: "Grand Finale — the ultimate trip-ending sanctuary before flying home.",
    overview: "Sirai House is a triumph of ultra-exclusive residential architecture that completely reimagines what is possible within a private safari context. Perched majestically on a high, cool ridge within the 32,000-acre Borana Conservancy, the property operates not as a luxury lodge, but as an elite private villa. Masterfully crafted from indigenous local stone and wild timber, it commands sweeping panoramic views across the Laikipia plains toward the imposing silhouette of Mount Kenya. The estate features 6 luxurious private suites, a state-of-the-art cinema, a 25m heated lap pool, a spa hammam, a clay tennis court, and an underground climate-controlled wine cellar.",
    emotionalFeel: "Omniscient sanctuary and ultimate belonging. Because the property is restricted exclusively to one party at a time, performance anxiety completely evaporates—there are no dress codes, scheduled mealtimes, or public areas to navigate. Mornings break with pristine mountain clarity as elephants and rhinos filter through the valley below, creating a deep, restorative stillness.",
    sensorySignature: {
      visual: ["Handcrafted indigenous stone architecture", "Terraced infinity pools", "Open mountain views toward Mount Kenya", "Lush organic shamba gardens"],
      auditory: ["The crackle of log fires in private suites", "Wind through high-ridge timber", "Estate-wide Sonos music", "Acoustic silence of a private valley"],
      olfactory: ["Woodsmoke", "Fresh mountain air", "Lavender from the grounds", "Farm-fresh aromas from the kitchen garden"],
    },
    positiveSignals: [
      "World-class 25m heated lap pool, dedicated sauna, cold plunge, hammam, and serenity yoga space",
      "Direct access via Sirai Air Pilatus PC-12 aircraft to Borana Airstrip provides a seamless start",
      "Chef George's hyper-customized menus utilizing fresh produce harvested directly from the estate's shamba",
      "Stables with top-caliber horses for galloping alongside wild game across Borana",
      "Unvarnished access to anti-poaching units, tracking K9s, and rhino protection initiatives",
    ],
    negativeSignals: [
      "High-ridge altitude creates cold, windy evenings requiring warm clothing layering",
      "Guests must prove advanced riding proficiency to participate in open-bush equestrian game tracking",
      "Minimum 3-night buyout rate ($18,000/night baseline) limits access for small groups or short stopovers",
    ],
    hiddenGems: [
      "A climate-controlled private underground wine cellar stocked with top South African and European vintages, alongside high-speed fiber Wi-Fi and estate-wide Sonos sound systems running discreetly into the surrounding bush.",
    ],
    signatureMemory: "Galloping across open plains alongside wild game on estate horses, followed by a wine-tasting dinner in the underground cellar and evening drinks by a roaring log fire.",
    expectationManagement: "Clients must be briefed that Sirai House is a crisp, high-altitude mountain estate, not a tropical savannah camp. It is available strictly on an exclusive-use basis, and horseback tracking requires demonstrated riding capability.",
    idealNights: "3 to 5",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is an ultra-high-net-worth family, executive cohort, or celebrity group seeking absolute privacy",
      "Client wants world-class villa amenities, private aviation integration, and resort-grade wellness in a private safari setting",
    ],
    doNotRecommendConditions: [
      "The client is a single couple or small party with a modest budget",
      "A short 1-night transit schedule, or someone seeking a rustic canvas-under-stars camp",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unrivaled residential villa luxury, 40-person private estate team, dedicated private aircraft (Sirai Air), and world-class equestrian/wellness facilities.",
    mainLimitation: "High minimum cost entry barrier ($18,000/night) and high-altitude cool evening climate.",
    positioningSummary: "The ultimate ultra-exclusive, high-altitude private safari estate blending world-class villa luxury, elite equestrian adventures, and resort-grade wellness into a seamless, highly secure sanctuary for discerning families and private groups.",
  },

  pairings: [
    { pairedEntity: "Mara Plains", pairingCategory: "ecosystem", rationale: "Moving from raw, high-density big-cat savannah tracking into Sirai's high-altitude stone wellness sanctuary provides the ultimate safari contrast." },
    { pairedEntity: "Singita Mara River Tented Camp", pairingCategory: "ecosystem", rationale: "Alternative Masai Mara pairing offering the same high-density big-cat savannah contrast to Sirai's wellness sanctuary." },
    { pairedEntity: "Sirai Beach (Kilifi)", pairingCategory: "regional", rationale: "Flying directly from Borana Airstrip to the coast via private air charter creates a seamless 'Bush and Beach' private estate loop." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Sirai Group operational specifications", "Conservancy records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Seasonal charter availability windows for Sirai Air PC-12, requiring direct booking verification per itinerary — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};