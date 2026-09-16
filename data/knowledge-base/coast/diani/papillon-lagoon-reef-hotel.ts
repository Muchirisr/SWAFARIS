export const papillonLagoonReefHotel = {
  id: "papillon-lagoon-reef-hotel-diani",
  name: "Papillon Lagoon Reef Hotel",
  country: "Kenya",
  region: "Coast",
  subRegion: "Diani Beach (Central Diani / Kwale County)",
  ecosystem: "Coastal, Marine Ecosystem — mature coastal forest, coral reef, and white sand shoreline",
  propertyType: "All-Inclusive Beach Resort / Traditional Swahili-Style Holiday Club",
  accommodationStyle: "Swahili-inspired low-rise room blocks featuring soaring makuti thatched roofs, traditional carved woodwork, and private balconies/terraces set around lush pool gardens",
  locationDetail: "Independently owned and managed; 150 rooms (Family Rooms, Standard Garden Rooms, Superior Beachfront Rooms); established ~1988, legacy property with ongoing cosmetic updates",
  nearestAirstrips: ["Ukunda Airstrip (UKA) — 5km / 10-12 min drive"],
  nearestGate: "N/A (coastal beachfront); nearest reserve gate is Shimba Hills National Reserve / Giriama Gate, 35km",
  accessibilityNotes: "Accessible year-round via paved Diani Beach Road. Flat garden terrain with winding paved stone pathways, step access to raised makuti dining pavilions, gentle slope to the beach lawn.",
  priceRangeMinUsd: 130,
  priceRangeMaxUsd: 320,

  // Doc self-states "Mid" tier, but midpoint ($130-320, per-room, treated as-stated per
  // established Diani Sea Resort no-occupancy-adjustment precedent) = $225, landing cleanly in
  // Value ($150-299), not Mid-Range ($300-499). Price-guide midpoint overrides self-stated tier
  // per locked rule — genuine downgrade applied, not a founder judgment call.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Voi Wildlife Lodge", "Shimba Hills National Reserve"],

  rawSourceJson: {
    officialBrandName: "Papillon Lagoon Reef Hotel",
    yearEstablished: "~1988 (legacy property with ongoing cosmetic updates)",
    unitBreakdown: "150 rooms: Family Rooms, Standard Garden Rooms, Superior Beachfront Rooms",
    priceRange: "$130-320 USD per night, All-Inclusive, depending on room tier, occupancy, and season. Treated per-room as-stated, no occupancy adjustment, per established Diani Sea Resort pricing methodology.",
  },

  experienceDna: {
    // "Casual" and "Unpretentious" are not canonical. Founder confirmed dropping both rather than
    // force-mapping substitutes, per standing precedent that fewer valid terms is acceptable when
    // remaining terms already capture the profile. "Rustic" and "Social" retained as-is.
    emotionalTone: ["Rustic", "Social"],

    // None of "High-Energy Safari / Sensory-Rich / Active Holiday Club" is canonical. The Baobab
    // precedent (Adventure + Wildlife Focus) does not transfer mechanically — this property's
    // wildlife score (5/10) and adventure score (4/10) are far weaker than Baobab's (8/10, 7/10).
    // Founder confirmed Family Connection (matching family suitability 9/10, dual-bathroom family
    // suites, kids' pool, animation team) + Adventure (nod to the "High-Energy" framing despite
    // the modest underlying score).
    energyType: ["Family Connection", "Adventure"],

    experiencePace: "Fast", // source stated "Fast-Paced" — terminology cleanup only

    comfortPhilosophy: ["Adventure Luxury"],
    // "Heritage Luxury" is not one of the 7 detailed values. The established heritage-exception
    // precedent (Aberdare Country Club, White Rhino, Kilaguni Serena, Lewa Wilderness) does NOT
    // apply here — that exception requires undisputed heritage status with NO documented wear,
    // and this doc explicitly documents wear (dated fixtures, leaky shower doors, worn tiling,
    // aging infrastructure). With the exception disqualified and the tier confirmed downgraded to
    // Value, the conservatism-toward-modest principle applies cleanly. Founder confirmed Rustic
    // Immersion over Authentic Wilderness Simplicity, matching the makuti thatched roofs,
    // traditional carved woodwork, and the confirmed "Rustic" emotional tone.
    comfortPhilosophyDetailed: "Rustic Immersion",

    // "Opening Immersion" is canonical and stated first in the "Opening Immersion (or
    // Recovery/Reset Buffer)" hedge — auto-resolves per standing rule. No narrative contradiction:
    // Psychological Sequencing Rationale explicitly confirms start-of-itinerary positioning.
    // Coast tally: Grand Finale x1, Recovery x2, Opening Immersion x2.
    journeyRole: "Opening Immersion",

    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Solo Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 8,
    relaxationScore: 5,
    authenticityScore: 6,
    premiumScore: 6,
    adventureScore: 4,
    privacyScore: 3,
    wildlifeExperienceScore: 5,
    culturalImmersionScore: 5,
    familySuitabilityScore: 9,
    comfortScore: 6,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "10-12 min from Ukunda Airstrip (UKA); 1.5-2 hours from Moi International Airport (MBA) or Mombasa SGR Station via Dongo Kundu Bypass / Likoni Ferry",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "High coastal humidity; open-air makuti pavilions catch sea breezes during dry seasons but experience humidity buildup during monsoon rains (April-May)",
    electricitySystem: "24/7 mains grid electricity backed by a high-capacity commercial diesel generator for regional power fluctuations",
    powerReliability: "High",
    waterReliability: "Moderate — central municipal and borehole supply backed by solar water heating and central boilers; reliable hot water though older plumbing fixtures show cosmetic wear",
    internetAvailability: "Complimentary Wi-Fi in central public lounge and reception areas; signal strength in private rooms can be variable",
    mobileNetwork: "Strong 4G/5G cellular coverage (Safaricom/Airtel)",
    medicalAccess: "On-site basic first aid team; full-service private medical care at Diani Beach Hospital within 5-7 min drive (2.5km)",
    // Stated cleanly as "Exceptional" (not graded) — dedicated kids' pool sections, shade-dense
    // lawns, active animation team, dual-bathroom family room configurations. Maps to true.
    childFriendly: true,
    // Stated as graded "Moderate" — per standing rule required explicit confirmation despite
    // available precedent. Profile closely matches the confirmed-true Almanara case: ground-floor
    // blocks and flat garden pathways provide step-free access, with low steps up to dining decks
    // and down to the sand wall. Founder confirmed true.
    mobilityFriendly: true,
    operationalLimitations: [
      "Aging physical infrastructure and dated bathroom fixtures",
      "Standard rooms lack mini-fridges or TVs (requires paid room upgrade)",
      "Open-air dining areas subject to drifting cigarette smoke",
      "High-volume buffet repetition",
      "Beach wall sales solicitations",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "The double-bathroom family room layout (split cleanly by a thick curtain with independent showers) provides exceptional privacy and logistical ease for parents and kids.",
      supportingSignals: ["Family suitability score 9/10", "Dual-bathroom curtain-partitioned family suites", "Active animation staff"],
      mismatchConditions: ["Must accept a high-energy, noisy pool environment and high-volume buffet meals"],
    },
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "Moderate",
      reasoning: "Provides an affordable, predictable all-inclusive base to burn off jetlag or unwind after a high-activity game drive loop without financial surprises.",
      supportingSignals: ["High financial predictability", "Low-fatigue 10-min transfer from Ukunda Airstrip", "Opening Immersion positioning"],
      mismatchConditions: ["Standard rooms lack mini-fridges or televisions unless upgraded to higher room categories"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Group Reunions / Social
    // Travelers" — corrects to canonical Solo Explorers per standing fix pattern.
    {
      fitType: "ideal",
      category: "Solo Explorers",
      archetype: "The Social Catalyst",
      matchStrength: "Moderate",
      reasoning: "Thrives in the lively swim-up pool bar atmosphere, evening entertainment, and open terrace layout that fosters easy socializing among returning guests.",
      supportingSignals: ["Social Dynamic: Social", "Lively swim-up pool bar atmosphere", "Open terrace social layout"],
      mismatchConditions: ["Total lack of secluded, quiet sanctuary zones for solitary relaxation"],
    },
    // CORRECTED CATEGORY: source doc listed under "Honeymooners / Romantic Couples" — corrects
    // to canonical Honeymooners.
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "High public noise levels, splashing children, high-volume buffet lines, and low acoustic room isolation completely destroy romantic intimacy.",
      supportingSignals: [],
      mismatchConditions: ["Severe dissatisfaction over lack of private plunge pools, quiet poolside reading spaces, or refined fine dining", "Privacy score only 3/10"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Luxury Ultra-Purists" —
    // corrects to canonical Luxury Adventurers.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Low",
      reasoning: "Dated plumbing, worn tiles, basic buffet presentations, and lack of white-glove butlering fall far short of contemporary five-star standards.",
      supportingSignals: [],
      mismatchConditions: ["Immediate frustration with aging physical infrastructure and commercial holiday-club environment"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Tech-Dependent Executives" —
    // corrects to canonical Burned-out Executives.
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "Spotty in-room Wi-Fi, constant kinetic poolside noise, and drifting cigarette smoke in open lounge zones impede remote work and mental recovery.",
      supportingSignals: [],
      mismatchConditions: ["Inability to secure silent workspace or seamless high-speed connectivity"],
    },
    // DROPPED: idealTravelersPrimary items "Multi-Generational Groups," "Budget-Conscious
    // All-Inclusive Travelers," and "Long-Stay Social Travelers" — none are canonical categories
    // and none have distinct archetype support beyond what's already captured under Families,
    // First-Time Safari Travelers, and Solo Explorers above.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 nights",
    recommendedPositionNote: "Opening Immersion auto-resolved per standing rule — no narrative contradiction; the Psychological Sequencing Rationale directly confirms start-of-itinerary positioning to burn off transit fatigue before deeper wilderness tracking. Coast sub-phase running tally: Grand Finale x1, Recovery x2, Opening Immersion x2.",
    whatShouldComeBefore: "Long-haul international flight arrival into Mombasa (MBA) / Nairobi (JKIA), or an active, budget-focused bush safari in Tsavo East/West",
    whatShouldComeAfter: "Homebound international departure, or a transition into a quiet, luxury safari circuit (e.g., Amboseli or Maasai Mara)",
    emotionalTransitionRationale: "Allows travelers to decompress from long transit or bush dust, channeling high initial holiday energy into poolside social relaxation before moving deeper into quiet wilderness zones.",
  },

  narrative: {
    whyChosen: "A lively, legacy Swahili-style all-inclusive beach club under a mature canopy of ancient trees, offering unmatched staff warmth and high-energy social value.",
    bestUsedFor: "Multi-generational families, group reunions, and long-stay travelers seeking a warm, friendly, and safe all-inclusive beach-club environment on a strict budget.",
    lessSuitableFor: "Honeymooners seeking secluded romance, quiet luxury connoisseurs, tech-dependent executives, or travelers highly sensitive to cigarette smoke in open areas or frustrated by aging physical infrastructure.",
    overview: "Papillon Lagoon Reef Hotel is a well-established, high-occupancy legacy resort representing the traditional 'holiday club' era of Diani Beach. Built using classic Swahili design language, the property features sprawling, low-rise room blocks topped with massive, soaring makuti thatched roofs that wind through an exceptionally mature, jungle-like garden of ancient baobabs and towering palms. The entire resort faces inward toward a central pool and an open-air terrace sitting directly above a brilliant stretch of white sand. Physical infrastructure shows its age, featuring older tiling and traditional bathrooms, but counters this with an intensely affectionate, deeply personal staff culture.",
    emotionalFeel: "Casual, high-spirited, and nostalgia-tinged. Guests describe the atmosphere as unpretentious, friendly, and lively. There is no pressure to dress up or perform; traveler defenses drop due to the simplicity and openness of the layout. The energy follows a classic resort heartbeat — active mornings around the buffet transitioning into high-animation afternoons centered on the pool bar and sports lawns. Long-serving local staff deliver emotional warmth that turns a mid-tier hotel into a familiar beach home.",
    sensorySignature: {
      visual: ["Soaring makuti thatched roofs", "Towering ancient baobabs", "Sweeping green sea lawns", "Bright turquoise pool waters contrasting against white Diani sand"],
      auditory: ["Splashing children", "Poolside pop music", "Banter of the animation team", "Rustling palm leaves", "Resident Colobus monkey calls"],
      olfactory: ["Salty ocean spray", "Tropical blossom blooms", "Grilled buffet meats", "Woodsmoke", "Sweet poolside cocktail mixes"],
    },
    positiveSignals: [
      "The Exceptional, Nurturing Staff Culture — unanimous praise for management and long-serving bar/animation hosts delivering deeply empathetic care",
      "Mature, Shade-Dense Gardens — ancient baobabs and palms provide deep natural cooling shade and up-close sightings of wild Colobus monkeys",
      "Clever Family Room Architecture — large room split cleanly by a thick curtain, with both sides possessing their own separate small bathroom and shower",
      "Consistent, Unpretentious All-Inclusive Value — high financial predictability with fresh food, generously poured cocktails, and solid beachfront value",
    ],
    negativeSignals: [
      "Tired, Aging Physical Infrastructure — dated bathroom fixtures, leaky shower doors, worn tiling, standard rooms lacking TVs or mini-fridges without a paid upgrade",
      "High-Volume Buffet Monotony & Overcooking — buffet spreads can feel repetitive after 3-4 nights, with a tendency toward overcooked proteins",
      "Intrusive Public Areas (Smokers & Sales) — open-air dining zones allow cigarette smoke to drift from bar lounges, beach wall access involves immediate vendor solicitations",
    ],
    hiddenGems: [
      "The Superior Beachfront Room Tier — sits directly on the edge of the sea lawn, granting immediate front-row ocean views, private balcony breezes away from noisy pool hubs, and included mini-fridge/upgraded amenities, eliminating standard room shortfalls",
    ],
    signatureMemory: "Sitting on the open-air dining terrace under a soaring makuti roof, enjoying a cold drink after a swim while watching a family of Angolan Colobus monkeys leap through the ancient baobab canopy directly overhead.",
    expectationManagement: "Travelers must understand this is an older, 3-star legacy holiday club. Standard rooms lack TV/mini-fridge amenities, physical hardware shows age, public areas feature active animation and open-air smoking, and dining is high-volume buffet style.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client brief prioritizes a strict budget, a high-value all-inclusive meal plan, and an active social scene",
      "Multi-generational families, group reunions, and long-stay travelers",
      "Family-centric room layouts prioritized over material luxury or modern design",
    ],
    doNotRecommendConditions: [
      "Honeymooners seeking secluded romance",
      "Quiet luxury connoisseurs",
      "Tech-dependent executives",
      "Travelers highly sensitive to cigarette smoke in open areas or frustrated by aging physical infrastructure",
    ],
    confidenceLevel: "Medium Confidence",
    competitiveAdvantage: "Unmatched staff warmth, exceptional mature shade gardens with Colobus monkey populations, and clever dual-bathroom family suite layouts at an accessible all-inclusive price point on central Diani Beach.",
    mainLimitation: "Dated physical hardware/bathrooms and lack of standard in-room amenities (mini-fridges/TVs) in base room tiers.",
    positioningSummary: "A lively, legacy Swahili-style all-inclusive beach club nestled under a mature canopy of ancient trees in Diani, offering unmatched staff warmth and high-energy social value for budget-conscious families and group holiday travelers.",
  },

  pairings: [
    {
      pairedEntity: "Voi Wildlife Lodge",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Creates a practical, cost-effective 'Bush & Beach' loop where the active, high-occupancy environment of Voi Wildlife Lodge matches the energetic, all-inclusive rhythm of Papillon.",
    },
    {
      pairedEntity: "Shimba Hills National Reserve",
      pairingCategory: "Complementary Region",
      rationale: "Located an hour's drive inland, a day-trip safari excursion to Shimba Hills breaks up the beach-club routine with lush tropical forest, Sable antelope tracking, and Sheldrick Falls hiking.",
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
      "Annual soft-refurbishment schedules for standard garden room bathrooms",
    ],
  },
};