export const almanaraLuxuryBoutiqueHotel = {
  id: "almanara-luxury-boutique-hotel-diani",
  name: "Almanara Luxury Boutique Hotel & Ocean Villas",
  country: "Kenya",
  region: "Coast",
  subRegion: "Diani Beach (Galu Kinondo Beach Section), Kwale County",
  ecosystem: "Low-density coastal forest opening onto powder-white coral sand beachfront, protected by an offshore marine barrier reef",
  propertyType: "Ultra-Exclusive Luxury Coastal Private Estate & Boutique Hotel",
  accommodationStyle: "Contemporary Swahili-influenced architecture — Italian marble, local teak/hardwood, mosaic tiling, traditional African artwork under open-air canopies",
  locationDetail: "Privately owned and managed by the Giovando family (Nico, Leo, Gemma Giovando); 14 total units across Casa Bella Boutique Hotel, Executive Garden Villas, and The Residence Villas",
  nearestAirstrips: ["Ukunda Airstrip / Diani Airstrip (UKA)"],
  nearestGate: "N/A (coastal property); nearest terrestrial protected area is Shimba Hills National Reserve Gate, ~45 min / 30km inland",
  accessibilityNotes: "Fully accessible year-round via paved beach roads down the Diani/Galu strip; paved internal paths connect main structures, sand transitions lead to beach frontage",
  priceRangeMinUsd: 500,
  priceRangeMaxUsd: 950,

  // Price-guide midpoint ($725) confirmed clean inside Premium band ($500-799) — matches source's
  // self-stated tier, no upgrade/downgrade applied.
  rawMarketTier: "Premium",
  swafarisExperienceTier: "Tier 3",
  budgetTier: "Premium",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Angama Mara", "Ishara", "Saruni Samburu", "Ol Tukai Lodge", "Tortilis Camp"],

  rawSourceJson: {
    officialBrandName: "Almanara Luxury Resort (comprising Casa Bella Boutique Hotel, Executive Garden Villas, and The Residence Villas)",
    yearEstablished: "2007 (Villas); 2015 (Casa Bella); 2024 (The Residence)",
    unitBreakdown: "3 Ocean View Rooms & 2 Ocean View Suites (Casa Bella); 6 Executive 3-Bedroom Garden Villas; 3 beachfront Residence Villas",
    priceRange: "$500-950 USD per person per night, Full Board including private chef/butler, varies by season/occupancy/unit type",
  },

  experienceDna: {
    // "Elegant" and "Peaceful" are canonical as-is. "Intimate" resolved to Romantic per founder
    // decision — Social Dynamic is fully Isolated (which would normally rule Romantic out per
    // standing rule), but the doc's explicit "absolute romantic isolation" framing for Sanctuary
    // Seekers overrides the default branch. Founder confirmed Romantic.
    emotionalTone: ["Elegant", "Romantic", "Peaceful"],

    // "Coastal decompression" -> Wellness, "Quiet luxury" -> Luxury Escape, per standing
    // default-to-closest-existing-value rule. Founder-confirmed mapping; first instance in Coast
    // sub-phase, likely to recur.
    energyType: ["Wellness", "Luxury Escape"],

    experiencePace: "Slow",

    comfortPhilosophy: ["Exclusive Luxury"],
    // Price tier was confirmed clean (not upgraded/downgraded), so the conservatism-toward-modest
    // principle did not apply — this was a genuine either/or on its own merits (Ultra-Exclusive
    // Sanctuary vs. Contemporary Comfort). Founder confirmed Ultra-Exclusive Sanctuary, supported
    // by privacy score 9/10, single-villa dedicated staff model, explicit "ultra-exclusive" language.
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary",

    // Neither "Coastal Decompression" nor "Romantic Finale" is verbatim canonical ("Romantic
    // Finale" != "Grand Finale" per standing rule). Genuine founder decision between Recovery and
    // Grand Finale. Founder confirmed Grand Finale — supported by the property's own Psychological
    // Sequencing Rationale ("Coastal Decompression Climax"), its explicit positioning as the
    // literal last stop before international departure, and the doc's own guidance never to
    // deploy it first. First Coast lodge — sets Grand Finale x1 as the opening tally.
    journeyRole: "Grand Finale",

    idealTravelersPrimary: ["Burned-out Executives", "Families", "Honeymooners"],
    idealTravelersSecondary: [],

    intensityScore: 1,
    relaxationScore: 10,
    authenticityScore: 8,
    premiumScore: 10,
    adventureScore: 3,
    privacyScore: 9,
    wildlifeExperienceScore: 4,
    culturalImmersionScore: 4,
    familySuitabilityScore: 9,
    comfortScore: 10,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "10-15 min from Ukunda Airstrip (UKA); 1.5-2.5 hours from Moi International Airport (Mombasa) subject to Likoni Ferry or Diani bypass traffic",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "Kusi monsoon (May-Oct): rougher seas, higher seaweed drift. Kaskazi monsoon (Nov-Apr): calm, warm, turquoise water conditions",
    electricitySystem: "Continuous 24-hour grid electricity supplemented by heavy-duty backup generators; solar water heating integrated",
    powerReliability: "High",
    waterReliability: "High — on-site purification, borehole backup, solar thermal heating",
    internetAvailability: "Dedicated high-speed Wi-Fi throughout Casa Bella, all private villas, and Sails Beach Restaurant",
    mobileNetwork: "Strong 4G/LTE coverage across Safaricom and Airtel",
    medicalAccess: "10-15 min to Diani Beach Hospital (private, ICU + emergency capable); air evacuation coordination via Ukunda Airstrip",
    // Stated as High within multi-bedroom villas, with explicit operational risk noted for open
    // pools/sunken bars/ocean access requiring supervision. Resolves to true.
    childFriendly: true,
    // Stated as graded "Moderate" (ground-floor step-free access, but stairs to upper villa
    // bedrooms/rooftop/sand paths) — per standing rule, graded ratings are flagged rather than
    // auto-applied even with clear precedent. Substance doesn't rise to "unacceptable" territory.
    // Founder confirmed true.
    mobilityFriendly: true,
    operationalLimitations: [
      "Minimum stay requirements during peak festive seasons",
      "Non-direct ocean views from the 6 Executive Garden Villas (set back in gardens)",
      "Public footprint presence at Sails Restaurant during external dinner/lunch reservations",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "High",
      reasoning: "Exceptional privacy, dedicated personal butler service, and private in-villa chef dining allow newly married couples absolute romantic isolation without public resort interference. Supports founder-confirmed Romantic emotional tone despite fully Isolated social dynamic.",
      supportingSignals: ["Privacy score 9/10", "1:1 villa chef and butler teams", "Gated estate boundaries"],
      mismatchConditions: ["Must book Casa Bella Ocean View Suites or beachfront Residence Villas if immediate ocean views from the bedroom are non-negotiable"],
    },
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Burnout Decompressors (The Cortisol Crashers)",
      matchStrength: "High",
      reasoning: "Eliminates all operational schedule friction. The dedicated chef and butler matrix removes decision-making fatigue entirely, while the 15-minute Ukunda transfer avoids travel stress.",
      supportingSignals: ["Zero required schedule adherence", "Intensity score 1/10", "Short low-fatigue transfer"],
      mismatchConditions: ["Outside diners at Sails Beach Restaurant during peak weekend hours can briefly introduce external social energy"],
    },
    // CORRECTED CATEGORY: source doc listed Burnout Decompressors/Cortisol Crashers under a dual
    // "Honeymooners / Burned-out Executives" tag. Canonical ontology places this archetype under
    // Honeymooners only — dual-tagging removed above.
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Swapped in per founder decision to preserve Burned-out Executives support in idealTravelersPrimary after the Cortisol Crashers dual-tag was corrected. Total staff-managed anonymity, zero decision fatigue, and complete isolation from commercial resort presence align with Incognito Ascetic psychology more precisely than a relabel-in-place would.",
      supportingSignals: ["Complete isolation from commercial resort noise", "Dedicated 1:1 staff eliminates all decision-making", "Gated, low-density estate model"],
      mismatchConditions: ["Villa price premium is substantial for a solo-anonymity use case"],
    },
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "High",
      reasoning: "The 3-bedroom Executive Garden Villas provide expansive shared living areas alongside private en-suite double bedrooms under one private roof. Dedicated chefs cater to complex family diets effortlessly.",
      supportingSignals: ["Family suitability score 9/10", "Dedicated per-villa chef handling tailored children's meals", "Enclosed private grounds"],
      mismatchConditions: ["Unfenced villa swimming pools require continuous adult supervision for young toddlers"],
    },
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Low",
      reasoning: "Built around slow decompression, quiet lounging, and absolute privacy rather than high-adrenaline daily scheduling or rapid sports itineraries.",
      supportingSignals: [],
      mismatchConditions: ["Intensity score 1/10 will generate severe boredom for travelers seeking continuous structured activity"],
    },
    {
      fitType: "poorFit",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "Low",
      reasoning: "Travelers looking for continuous sightseeing tours, bustling night markets, high-density group excursions, and commercial resort entertainment will find the quiet, cloistered estate restrictive.",
      supportingSignals: [],
      mismatchConditions: ["Mismatch between desire for constant action and Almanara's slow, private-estate operational design"],
    },
    {
      fitType: "poorFit",
      category: "Solo Explorers",
      archetype: "The Solitary Ascetic",
      matchStrength: "Low",
      reasoning: "Multi-bedroom villa layouts incur a massive price premium for single travelers seeking modest private lodging.",
      supportingSignals: [],
      mismatchConditions: ["High price inefficiency; property layout optimized primarily for private groups, families, or couples"],
    },
    // DROPPED: none — all source archetypes were correctly categorized except the Cortisol
    // Crashers dual-tag correction and the Incognito Ascetic swap-in documented above.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    // Grand Finale confirmed by founder — first Coast lodge, opening tally: Grand Finale x1.
    // Per handoff notes predicting Coast trending Grand Finale/Recovery, this sets an early
    // data point in that direction; validate each subsequent lodge on its own merits.
    recommendedPositionNote: "Positioned as the trip's literal closing chapter — Coastal Decompression Climax per source doc's own Psychological Sequencing Rationale. Source doc explicitly warns against deploying this property first, as it would make subsequent early-morning safari wake-ups feel physically exhausting after such deep decompression.",
    whatShouldComeBefore: "High-intensity, high-sensory safari ecosystems (e.g., Maasai Mara, Samburu, or Amboseli) — serves as the post-dust recovery/closing chapter",
    whatShouldComeAfter: "Direct departure via Ukunda Airstrip (UKA) to Nairobi (NBO/WIL) for international flight connections",
    emotionalTransitionRationale: "Shifts the traveler rapidly from high-vigilance, early-morning safari schedules (5:30 AM wake-ups, dust, rough roads) into unstructured, restorative oceanfront quiet.",
  },

  narrative: {
    whyChosen: "Elite, hyper-personalized private estate model replacing the sprawling high-traffic Diani resort layout, built around a dedicated personal chef and butler assigned to every private villa.",
    bestUsedFor: "High-net-worth couples, honeymooning pairs, or families seeking an exclusive, low-density coastal estate with private chef customization, total schedule freedom, and minimal post-safari transit.",
    lessSuitableFor: "Budget solo travelers, guests who require direct sea views from every unit, or those wanting high-density commercial resort infrastructure (large buffets, swim-up bars, organized evening shows).",
    overview: "Almanara Luxury Boutique Hotel & Ocean Villas completely redefines the Diani Beach experience by replacing the sprawling, high-traffic resort layout with an elite, hyper-personalized private estate model. Tucked behind a quiet coastal forest canopy, the property centers around Casa Bella (a 5-bedroom boutique hotel), six 3-bedroom Executive Garden Villas, and three beachfront Residence Villas. Its signature operational feature is assigning a dedicated personal chef and butler to every private villa, delivering a tailor-made luxury sanctuary with zero schedule friction.",
    emotionalFeel: "Safe, protective, and deeply cocooning. Guests enter carrying the residual dust, soreness, and sensory fatigue of a multi-stop safari and experience an immediate unburdening. The absence of commercial crowds eliminates social performativity, allowing an unhurried, indulgent rhythm.",
    sensorySignature: {
      visual: ["Crisp white architectural lines against deep tropical greenery", "Manicured lawns", "Powder-white sand leading to turquoise water"],
      auditory: ["Rhythmic ocean waves crashing over the barrier reef", "Gentle ocean breezes", "Calls of native Colobus monkeys in the canopy"],
      olfactory: ["Warm ocean air", "Fresh coastal coffee", "Wood-fired seafood", "Fragrant tropical flora"],
    },
    positiveSignals: [
      "Private Chef & Butler Matrix — personal staff assigned to each villa tailor menus 100% to spontaneous guest cravings",
      "Sails Beach Restaurant — celebrated architectural and culinary beachfront showpiece under a sail-cloth canopy",
      "Ukunda Airstrip Proximity — 10-15 minute transfer allows guests to step off a bush plane and sit poolside almost immediately",
      "Colobus Monkey Canopy — preserved old-growth trees maintain a natural wildlife corridor for rare Angolan Colobus monkeys",
    ],
    negativeSignals: [
      "Non-Direct Beach Views for Garden Villas — set back within lush foliage, living rooms overlook tropical gardens rather than open ocean",
      "Shared Sails Restaurant Footprint — accepts external reservation-only diners, slightly increasing beachfront foot traffic during weekend meal hours",
      "Villa Price Premium for Small Groups — couples desiring a private villa pay a substantial space premium compared to standard boutique hotel rooms",
    ],
    hiddenGems: [
      "Private Dhow & Sandbank Excursions — private wooden dhow trips from the resort beachfront at low tide to an exclusive temporary sandbank island in the barrier reef, with private shade canopy, plush seating, and chilled champagne",
    ],
    signatureMemory: "Waking up in a private villa to the smell of fresh coastal coffee prepared by your personal chef, enjoying breakfast on your private shaded veranda in robes while Colobus monkeys move through the palm canopy above.",
    expectationManagement: "Travelers booking Executive Garden Villas must understand that living rooms open onto private tropical gardens rather than direct ocean panoramas. Ocean views are reserved for Casa Bella upper suites and Residence Villas. Sails Restaurant welcomes non-resident reservation diners, introducing outside guests to the oceanfront deck during lunch and dinner.",
    idealNights: "REQUIRES_VERIFICATION", // distinct from idealStayDuration; source doc doesn't specify a separate ideal-nights framing
  },

  recommendationNotes: {
    recommendConditions: [
      "High-net-worth couple, honeymooning pair, or family seeking an exclusive, low-density coastal estate",
      "Private chef customization and total schedule freedom are priorities",
      "Minimal post-safari transit is desired",
    ],
    doNotRecommendConditions: [
      "Budget solo traveler",
      "Demands wide-open sea views directly from villa living room",
      "Wants high-density commercial resort infrastructure (large buffets, swim-up party bars, organized evening shows)",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Dedicated personal chef and butler assigned to every private villa, paired with low guest density and direct access to Galu/Diani Beach.",
    mainLimitation: "Garden Villas lack direct, open sea views, and Sails Restaurant introduces external diners to the beachfront footprint.",
    positioningSummary: "An ultra-exclusive coastal sanctuary of five boutique hotel rooms and nine private, fully staffed villas on Diani Beach, offering safari-weary travelers an unhurried, private-chef-led oasis of complete decompression.",
  },

  pairings: [
    {
      pairedEntity: "Angama Mara / Ishara",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Pair with High-Density Savannah Predator Ecosystems (Maasai Mara National Reserve). Moving from high-intensity predator tracking and wide plains to slow coastal decompression creates a perfect itinerary arc.",
    },
    {
      pairedEntity: "Saruni Samburu",
      pairingCategory: "Complementary Region",
      rationale: "Combine with Northern Frontier Arid Ecosystems (Samburu National Reserve). The transition from hot, rugged volcanic rock faces down to cool, breezy coral sands demonstrates Kenya's ecosystem diversity.",
    },
    {
      pairedEntity: "Ol Tukai Lodge / Tortilis Camp",
      pairingCategory: "Complementary Experience",
      rationale: "Combine with Low-Altitude Elephant Basins (Amboseli National Park). Balances dusty, intense elephant viewing against Mount Kilimanjaro with high-end maritime relaxation.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: [
      "Field surveys",
      "Operator specifications",
      "Regional geographical surveys",
      "Road access logs",
      "Property operational records",
    ],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Current seasonal covers limit for non-resident reservations at Sails Beach Restaurant",
    ],
  },
};