// data/knowledge-base/laikipia/borana-lodge.ts
export const boranaLodge = {
  id: "borana-lodge", // NEW lodge, no existing DB record
  name: "Borana Lodge",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Northern Laikipia Plateau",
  ecosystem: "Semi-arid wilderness (steep hillside overlooking a permanent watering hole and the Samangua Valley)",
  propertyType: "Eco-Luxury Wilderness Lodge / Conservation Sanctuary",
  accommodationStyle: "Artisanal free-standing stone and dead-cedar wood cottages with thatch roofs, integrated into rocky hillside topography.",
  locationDetail: "Steep hillside within Borana Conservancy, Northern Laikipia.",
  nearestGate: "Borana Conservancy Main Gate",
  nearestAirstrips: ["Borana Conservancy Airstrip (private, all-weather)"],
  accessibilityNotes: "Direct air access via private airstrip; overland requires 4x4 vehicles on unpaved conservancy tracks.",
  priceRangeMinUsd: 1025,
  priceRangeMaxUsd: 1320,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 4",
  budgetTier: "Luxury", // CORRECTED: price midpoint ($1,172.50) falls in the Luxury band ($800–1,199), overriding self-reported Premium — an upgrade, not the usual downgrade
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Maasai Mara riverine grassland camp",
    "Watamu coastal sanctuary",
    "Diani Beach coastal sanctuary",
    "Sirai House",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Adventurous", "Exploratory", "Peaceful", "Exclusive"], // CORRECTED: "Quiet Luxury" non-canonical, replaced with "Exclusive" per founder decision
    energyType: ["Nature Immersion", "Wildlife Focus", "Digital Detox", "Adventure"], // CORRECTED: "Immersive Nature" reworded to canonical "Nature Immersion"; "Adventure" added per founder decision given 9/10 adventure score and activity-heavy profile
    experiencePace: "Moderate", // CORRECTED: "Balanced" non-canonical
    comfortPhilosophy: ["Authentic Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Authentic Wilderness Simplicity", // CORRECTED: "Eco-Luxury" non-canonical; founder chose Authentic Wilderness Simplicity over Rustic Immersion given 10/10 authenticity score and genuine conservation credentials
    journeyRole: "Adventure Peak", // FOUNDER DECISION: source hedge "Mid-Journey Peak (or Opening/Closing Sanctuary Anchor)" was not literally canonical and did not fit Mid-Journey Transition's ecosystem-bridging definition; resolved to Adventure Peak — first use in the project
    idealTravelersPrimary: ["Families", "Luxury Adventurers", "Slow Travelers"], // all valid real categories, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 6, relaxationScore: 8, authenticityScore: 10, premiumScore: 9,
    adventureScore: 9, privacyScore: 8, wildlifeExperienceScore: 9,
    culturalImmersionScore: 6, familySuitabilityScore: 7, comfortScore: 9,
    socialDynamic: "Isolated",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "50-minute charter flight from Wilson Airport, Nairobi, to Borana Airstrip plus 15-minute game drive; or approx. 5.5–6 hours overland via Nanyuki.",
    seasonalAccessibility: "Open year-round.",
    rainySeasonImpact: "Heavy seasonal rains (April–May) can occasionally make unpaved conservancy approaches slick, though air transfers remain fully operational.",
    electricitySystem: "Eco-friendly solar-power generation backed by automated generator redundancy.",
    powerReliability: "Continuous",
    waterReliability: "On-site borehole and spring water, treated, with eco-solar heating systems.",
    internetAvailability: "Limited cellular data in select elevated areas; high-speed Wi-Fi centrally at the main lodge to support digital detox principles.",
    mobileNetwork: "Limited coverage in select elevated areas.",
    medicalAccess: "Comprehensive first-aid coordination on-site, backed by Borana Conservancy security network and emergency air-evacuation to Nanyuki or Nairobi.",
    childFriendly: true, // resolved from source "Moderate" per standing collapse precedent, confirmed by founder
    mobilityFriendly: false, // "Low" per source, unambiguous
    operationalLimitations: [
      "Steep topography creates physical accessibility barriers for guests with mobility restrictions",
      "Shared family suites can experience minor acoustic bleeding across adjoining verandas during high-occupancy windows",
      "Cottage Four's stone-encased bathroom requires descending stone steps, posing a nocturnal navigation challenge",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Offers rare, elite physical experiences such as tracking rhinos on foot with armed rangers, riding horses alongside giraffes, and mountain biking across wild terrain.",
      supportingSignals: ["Frontline rhino foot-tracking with anti-poaching rangers", "Silent horseback riding through wildlife herds", "Mountain biking across rugged terrain"],
      mismatchConditions: ["Requires physical fitness and a willingness to engage actively rather than sit passively in a vehicle"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Conservation Guardian", matchStrength: "High",
      reasoning: "Directly aligns with travelers seeking genuine regenerative tourism, as the property holds Global Ecosphere Retreat status and reinvests all earnings into anti-poaching and land stewardship.",
      supportingSignals: ["Global Ecosphere Retreat status", "100% retained earnings reinvestment", "Direct anti-poaching and land stewardship programs"],
      mismatchConditions: ["High premium price point requires a multi-night commitment to fully absorb the conservation model"] },
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "High",
      reasoning: "Sprawling family suites and engaging outdoor activities provide teenagers and active families with an unforgettable, deeply educational wilderness bonding experience.",
      supportingSignals: ["2 sprawling family suites", "Teen-appropriate active bonding experiences (riding, tracking, biking)"],
      mismatchConditions: ["Steep hillside stone pathways require caution"] },
    { fitType: "poorFit", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Low",
      reasoning: "ONTOLOGY CORRECTION / FOUNDER JUDGMENT CALL: source listed this archetype as compatible under a combined entry with Milestone Celebrators, but its own definition (families with toddlers/infants) directly contradicts the lodge's stated limitation that steep hillside pathways are unsuitable for toddlers or infants. Split out and reclassified as poorFit to resolve the contradiction.",
      supportingSignals: [], mismatchConditions: ["Steep hillside stone pathways and steps make the property physically unsuitable for toddlers or infants"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Low",
      reasoning: "While romantic, the property emphasizes rugged active adventure, outdoor conservation immersion, and rustic stone styling over hyper-polished, air-conditioned beachfront luxury.",
      supportingSignals: [], mismatchConditions: ["Clients expecting a standard air-conditioned luxury resort experience may find the natural stone architecture and physical activity focus misaligned with their desires"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Sensory Overwhelmed", matchStrength: "Low",
      reasoning: "The physical demands of walking tracking and the absence of traditional urban resort luxuries can overwhelm travelers unaccustomed to remote eco-lodges.",
      supportingSignals: [], mismatchConditions: ["Steep pathways and rustic design elements can cause discomfort for guests seeking effortless leisure"] },
    // DROPPED: "The Incognito Ascetic (Guests with Mobility Impairments)" — not a real archetype/category pairing (Incognito Ascetic belongs to Burned-out Executives, not mobility status); mobility barrier already captured via mobilityFriendly: false
  ],

  journeyIntelligence: {
    idealStayDuration: "4 to 5 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Mid-Journey Peak (or Opening/Closing Sanctuary Anchor)\"; neither phrase canonical, and Borana does not meet the Mid-Journey Transition definition (ecosystem-bridging lodges only). Resolved to Adventure Peak — first use in the project, founder-confirmed. REGIONAL TALLY (Laikipia sub-phase, lodge 2/2 so far): Opening Immersion x1, Adventure Peak x1.",
    whatShouldComeBefore: "A vehicle-dense, low-lying wildlife safari circuit (e.g., Maasai Mara or Amboseli) to contrast wildlife viewing formats and re-engage physical energy.",
    whatShouldComeAfter: "A slow-paced, frictionless coastal beach decompression retreat (e.g., Diani Beach or Watamu) to rest the body after high-exertion foot safaris and riding.",
    emotionalTransitionRationale: "Shifts travel energy from passive observation to active, purposeful stewardship, transforming the mindset through immersive foot-tracking and conservation engagement.",
  },

  narrative: {
    whyChosen: "An elite, family-owned conservation sanctuary offering rare active wildlife experiences and genuine regenerative-tourism credibility, positioned as an energizing mid-journey peak.",
    bestUsedFor: "Active luxury adventurers, conservation-driven travelers, and families with teenagers seeking immersive, non-traditional safari experiences.",
    lessSuitableFor: "Clients with significant mobility limitations or severe knee/joint issues, or those wanting passive, air-conditioned, flat-surface resort luxury with zero physical output.",
    journeyPositionNote: "Adventure Peak — revitalizes travel energy mid-itinerary through active engagement before a final rest phase.",
    overview: "Borana Lodge is a premier, family-owned eco-sanctuary carved into a steep Laikipia hillside overlooking the Samangua Valley, using local stone, dead cedar poles, and thatch for four private cottages and two family suites. As a certified Global Ecosphere Retreat, it channels 100% of retained earnings into frontline rhino protection, anti-poaching operations, and community development.",
    emotionalFeel: "Purposeful, deeply grounded, and expansively free — an elite conservation legacy replacing tourist artifice with authentic wilderness stewardship and quiet reflection.",
    sensorySignature: {
      visual: ["Sweeping semi-arid savannah vistas", "Rugged granite rock faces", "Snow-capped Mount Kenya peaks in the distance"],
      auditory: ["Crackling open stone fireplaces", "Wind through thatch roofs", "Bird calls", "Distant elephant rumbles across the valley"],
      olfactory: ["Wild sage blooming across the hills", "Dry savannah earth", "Woodsmoke"],
    },
    positiveSignals: [
      "Unscripted, highly emotional walking safaris alongside anti-poaching rangers tracking endangered black and white rhinos",
      "Silent horseback riding through herds of giraffes and zebra, free from engine noise",
      "Exceptional culinary execution utilizing organic produce from the adjacent Waitabit Farm",
      "Hyena Valley Dam Hide — a specialized wildlife photography blind for intimate animal encounters",
    ],
    negativeSignals: [
      "Vertical architectural layout requires navigating steep, uneven stone pathways that cause physical fatigue for less mobile guests",
      "Certain paired cottages share architectural boundaries, occasionally resulting in minor acoustic crossover during peak occupancy",
      "Cottage Four's stone-encased bathroom requires descending stone steps that can pose a nocturnal navigation challenge",
    ],
    hiddenGems: [
      "Seamless logistical access to the adjacent Ngare Ndare Forest for curated canopy walks and glacial waterfall swims; private helicopter launches grant dawn access to Mount Kenya for high-altitude trout fishing before lunch.",
    ],
    signatureMemory: "Sipping a warm drink beside the open stone fireplace in your cottage at dusk, listening to the chilly Laikipia wind rustle the thatch after a successful day tracking rhinos on foot.",
    expectationManagement: "Travelers must understand this is an active, rugged conservation sanctuary rather than a manicured leisure resort — physical mobility is required, and the experience centers on conscious stewardship rather than passive pampering.",
    idealNights: "4 to 5",
  },

  recommendationNotes: {
    recommendConditions: [
      "Clients are active luxury adventurers, conservation-driven travelers, or families with teenagers seeking immersive, non-traditional safari experiences",
      "Interest in horse riding, e-biking, and armed walking tracking",
    ],
    doNotRecommendConditions: [
      "Clients have significant mobility limitations or severe knee/joint issues",
      "Clients demand passive, air-conditioned, flat-surface resort luxury with zero physical output",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unmatched combination of Global Ecosphere Retreat conservation credibility, frontline rhino foot-tracking, elite horseback safaris, and artisanal stone architecture.",
    mainLimitation: "Steep, vertical hillside topography creates physical access challenges for guests with limited mobility.",
    positioningSummary: "An elite, family-owned eco-sanctuary integrated into a pristine Laikipia hillside, offering conscious luxury adventurers unparalleled access to active rhino tracking, world-class horseback safaris, and vibrant farm-to-table gastronomy.",
  },

  pairings: [
    { pairedEntity: "Maasai Mara riverine grassland camp", pairingCategory: "ecosystem", rationale: "Contrasts high-altitude semi-arid plateau wilderness with low-lying riverine savannah for ecological diversity." },
    { pairedEntity: "Watamu coastal sanctuary", pairingCategory: "regional", rationale: "Remote coastal beach sanctuary for ultimate physical decompression after high-exertion activity." },
    { pairedEntity: "Diani Beach coastal sanctuary", pairingCategory: "regional", rationale: "Alternative remote coastal beach sanctuary for post-Borana physical decompression." },
    { pairedEntity: "Sirai House", pairingCategory: "experience", rationale: "Transition from Borana's high-exertion, active conservation tracking into a stationary, hyper-luxurious private villa." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Global Ecosphere Retreat audits", "Conservancy operational records", "Architectural design layouts", "Field surveys", "Sustainability performance disclosures"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Future infrastructure expansion timelines for specific cottage accessibility upgrades — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};