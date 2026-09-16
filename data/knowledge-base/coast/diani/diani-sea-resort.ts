export const dianiSeaResort = {
  id: "diani-sea-resort-diani",
  name: "Diani Sea Resort",
  country: "Kenya",
  region: "Coast",
  subRegion: "Diani Beach, Kwale County",
  ecosystem: "Coastal / Marine Ecosystem — Indian Ocean beachfront with low-density tropical palm forest interface",
  propertyType: "Mid-Range All-Inclusive Beachfront Resort",
  accommodationStyle: "Classic Mediterranean-tropical white-masonry architecture with red tile roofs, open-air arched pavilions, tiled interior finishes",
  locationDetail: "Independently / family owned and managed (Diani Sea Resort Management); 170 rooms across Comfort/Superior, Bahari, and Ocean Suite categories; established ~1990s, continuously renovated",
  nearestAirstrips: ["Ukunda Airstrip / Diani Airstrip (UKA)"],
  nearestGate: "N/A (coastal property); nearest terrestrial protected area is Shimba Hills National Reserve Gate, ~45 min / 30km inland",
  accessibilityNotes: "Fully accessible year-round via asphalt roads down the main Diani Beach strip; flat interior terrain with paved walkways connecting room blocks, dining pavilions, and pool zones",
  priceRangeMinUsd: 220,
  priceRangeMaxUsd: 480,

  // Founder-confirmed pricing methodology: this is the first per-room/night priced lodge in the
  // project (vs. per-person/night for all prior lodges). Founder confirmed treating the stated
  // range as-is with no occupancy adjustment. Midpoint $350 lands in Mid-Range ($300-499),
  // matching the doc's own self-stated tier — no upgrade/downgrade applied.
  rawMarketTier: "Mid-range",
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Voi Wildlife Lodge", "Severin Safari Camp", "Kibo Safari Camp", "Ol Tukai Lodge"],

  rawSourceJson: {
    officialBrandName: "Diani Sea Resort",
    yearEstablished: "~1990s (extensively renovated and updated continuously)",
    unitBreakdown: "170 rooms: Comfort/Superior Rooms, Bahari Rooms, Ocean Suites",
    priceRange: "$220-480 USD per room/night, All-Inclusive, depending on room category, occupancy, and season. NOTE: stated per-room (not per-person, unlike other Coast/Kenya lodges). Founder confirmed no occupancy-adjustment conversion applied — figures used as stated.",
  },

  experienceDna: {
    // "Elegant", "Peaceful", "Social" all canonical as-is — no correction needed.
    emotionalTone: ["Elegant", "Peaceful", "Social"],

    // "Coastal decompression" -> Wellness per established Coast mapping precedent (Almanara).
    // "Quiet luxury" did NOT reapply mechanically here — Social Dynamic is Social (not Isolated),
    // privacy score only 4/10, and narrative centers on communal pool/sports/family activity.
    // Founder confirmed Family Connection instead, matching family suitability score 9/10, kids'
    // pool, multi-bed family rooms, and enclosed resort perimeter.
    energyType: ["Wellness", "Family Connection"],

    experiencePace: "Balanced",

    comfortPhilosophy: ["Comfort Luxury"],
    // Price tier confirmed clean/as-stated (Mid-Range), amenity language internally consistent
    // with tier ("solid mid-tier comfort," "reliable," "polished") — no luxury-vs-tier tension.
    // Auto-resolves to Contemporary Comfort.
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // "Recovery" is directly canonical within the stated "Recovery / Coastal Decompression" hedge
    // — auto-resolves per standing rule (one stated option already canonical). No narrative
    // contradiction elsewhere in the doc pointing toward an alternate role.
    journeyRole: "Recovery",

    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Social Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 4,
    relaxationScore: 8,
    authenticityScore: 6,
    premiumScore: 7,
    adventureScore: 4,
    privacyScore: 4,
    wildlifeExperienceScore: 5,
    culturalImmersionScore: 4,
    familySuitabilityScore: 9,
    comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5-10 min from Ukunda Airstrip (UKA); 1.5-2.5 hours from Moi International Airport (Mombasa) subject to Likoni Ferry or Diani bypass traffic",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "Kusi monsoon (May-Oct): cooler breezes, potential seaweed drift. Kaskazi monsoon (Nov-Apr): warm, calm ocean waters",
    electricitySystem: "24-hour grid power backed by heavy-duty commercial generators for local coastal power drops",
    powerReliability: "High",
    waterReliability: "High — centralized solar photovoltaic and electric water heating, consistent hot water across all rooms",
    internetAvailability: "Wi-Fi available in public communal areas and main guest room blocks",
    mobileNetwork: "Excellent 4G/LTE coverage across Safaricom and Airtel",
    medicalAccess: "5-10 min to Diani Beach Hospital (private, ICU + emergency capable); emergency air evacuation via Ukunda Airstrip",
    // Stated cleanly as "High" (not graded/hedged) — dedicated children's pool, wide lawns,
    // mini-golf, tennis, multi-bed family rooms, enclosed perimeter. Maps directly to true.
    childFriendly: true,
    // Stated cleanly as "High" (not graded/hedged) — flat terrain, paved ramped pathways
    // throughout ground-floor rooms, dining, pool, and beachfront lawns. Maps directly to true.
    mobilityFriendly: true,
    operationalLimitations: [
      "Repetitive all-inclusive buffet cycles during long stays (7+ nights)",
      "Hallway acoustic amplification due to tiled floor structures",
      "Strict reception pass controls for external visitors",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "Flat, paved terrain, multi-bed room configurations, expansive sand-free lawns, and a large central pool allow parents to manage young children effortlessly. All-inclusive dining eliminates mealtime friction.",
      supportingSignals: ["Family suitability score 9/10", "Dedicated children's pool section", "Flat, paved, ramped terrain throughout"],
      mismatchConditions: ["Open pool access and public beach transition require standard parental supervision"],
    },
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "High",
      reasoning: "Provides an easy, highly predictable, low-friction coastal landing point after an intense safari. Allows first-time visitors to decompress without navigating complex à la carte villa logistics.",
      supportingSignals: ["High operational predictability", "All-inclusive removes decision friction", "5-10 min low-fatigue transfer from Ukunda Airstrip"],
      mismatchConditions: ["Buffet dining and resort animation activities cater to broader leisure markets rather than bespoke luxury"],
    },
    // Split from source doc's combined "Status-Network Curator / Affectionate Host (Social
    // Explorers)" entry — both are individually canonical Social Explorers archetypes, correctly
    // categorized in the source. Split into two entries per schema (one archetype per entry),
    // not a relabel.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Status-Network Curator",
      matchStrength: "Moderate",
      reasoning: "The central pool, swim-up bar, sports grounds (tennis, squash, mini-golf), and open-air dining pavilions create a lively, communal environment for sharing travel experiences.",
      supportingSignals: ["Social Dynamic: Social", "High guest density (170 rooms)", "Active communal pool and sports infrastructure"],
      mismatchConditions: ["Lack of private, exclusive sanctuaries for total quiet or solitary reflection"],
    },
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Affectionate Host",
      matchStrength: "Moderate",
      reasoning: "The central pool, swim-up bar, sports grounds (tennis, squash, mini-golf), and open-air dining pavilions create a lively, communal environment for sharing travel experiences.",
      supportingSignals: ["Social Dynamic: Social", "Communal dining pavilions", "Warm, welcoming attentive local staff"],
      mismatchConditions: ["Lack of private, exclusive sanctuaries for total quiet or solitary reflection"],
    },
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "High room count (170 units), shared central pool noise, family presence, and communal buffet dining lack the romantic isolation and private plunge-pool exclusivity required.",
      supportingSignals: [],
      mismatchConditions: ["Poolside animation announcements and family crowds disrupt romantic expectations", "Privacy score only 4/10"],
    },
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "Commercial resort dynamic, social dining layout, active pool environment, and corridor acoustic echoes prevent deep mental recovery or silent digital detox.",
      supportingSignals: [],
      mismatchConditions: ["Ambient social noise and resort activities impede stress-reduction goals"],
    },
    // Split from source doc's combined "Low-Impact Purist / Wilderness Minimalist (Luxury
    // Adventurers / Nature Photographers)" entry — each belongs to a different top-level category
    // and both are correctly categorized in the source. Split per schema, not a relabel.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The Low-Impact Purist",
      matchStrength: "Low",
      reasoning: "Large commercial resort footprint, manicured lawns, and all-inclusive buffet structure do not align with raw eco-immersion or off-grid wilderness ethics.",
      supportingSignals: [],
      mismatchConditions: ["Dissatisfaction with high-density resort infrastructure and commercialized coastal environment"],
    },
    {
      fitType: "poorFit",
      category: "Nature Photographers",
      archetype: "The Wilderness Minimalist",
      matchStrength: "Low",
      reasoning: "Large commercial resort footprint, manicured lawns, and all-inclusive buffet structure do not align with raw eco-immersion or off-grid wilderness ethics.",
      supportingSignals: [],
      mismatchConditions: ["Dissatisfaction with high-density resort infrastructure and commercialized coastal environment"],
    },
    // DROPPED: none — all source archetypes retained; two combined entries split into
    // individually correct pairs as documented above.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 nights",
    recommendedPositionNote: "Recovery role confirmed — positioned at the end of the itinerary per source doc's own Psychological Sequencing Rationale, converting post-safari fatigue into schedule-free physical recovery. Coast sub-phase running tally: Grand Finale x1 (Almanara), Recovery x1 (Diani Sea Resort).",
    whatShouldComeBefore: "Rugged, high-dust overland or bush safaris in southern Kenya reserves (e.g., Tsavo East, Tsavo West, or Amboseli National Park)",
    whatShouldComeAfter: "Direct transit to Ukunda Airstrip (UKA) for flights to Nairobi (WIL/NBO), or road transfer to Mombasa for onward international departures",
    emotionalTransitionRationale: "Converts post-safari physical fatigue, dust, and early-morning vigilance into predictable, schedule-free physical recovery.",
  },

  narrative: {
    whyChosen: "A polished, classic white-masonry all-inclusive beachfront resort offering predictable, value-locked family coastal decompression with direct ocean access.",
    bestUsedFor: "Families, multi-generational groups, or first-time safari travelers looking for a predictable, value-locked all-inclusive beach closure with direct ocean access and simple airport transfers.",
    lessSuitableFor: "Honeymooners seeking private plunge pools, burned-out executives requiring silent isolation, or gourmands demanding bespoke à la carte dining.",
    overview: "Diani Sea Resort is a polished, classic white-masonry all-inclusive beachfront resort located on the main white-sand corridor of Diani Beach. Set within tiered tropical gardens shaded by coconut palms, the property offers 170 rooms across Comfort, Bahari, and Ocean Suite categories. Architecturally, it features an open, Mediterranean-tropical design with tiled walkways, open-air dining pavilions, and a large central swimming pool.",
    emotionalFeel: "Lighthearted, communal, and easy. Operating on an all-inclusive model, the resort removes daily logistics and payment friction. The emotional rhythm shifts from quiet, sun-drenched mornings along the ocean to active, social afternoons around the pool and sports grounds.",
    sensorySignature: {
      visual: ["Bright white masonry against emerald lawns", "Turquoise swimming pool waters", "White coral sand"],
      auditory: ["Rhythmic reef waves breaking offshore", "Ambient poolside chatter", "Bird calls", "Sykes and Colobus monkeys moving through the palm canopy"],
      olfactory: ["Fresh sea breeze", "Tropical flowers", "Wood-fired pizzas", "Grilled coastal seafood"],
    },
    positiveSignals: [
      "Direct Beachfront Integration — smooth transition from private, manicured grass lawns directly onto Diani Beach",
      "Resident Canopy Wildlife — Colobus and Sykes monkey troops provide entertaining wildlife encounters throughout the gardens",
      "Service Quality — attentive local staff maintain a warm, welcoming environment across the 170-room property",
      "Cleanliness & Maintenance — well-maintained pool facilities, swept garden paths, reliable in-room air conditioning",
      "Ukunda Proximity — 5-10 minute transfer avoids Mombasa ferry transit delays",
    ],
    negativeSignals: [
      "Buffet Rotation Dependency — all-inclusive menus follow predictable weekly cycles, may feel repetitive on longer stays (7+ nights)",
      "Public Beach Vendor Traffic — stepping past the property's lawn perimeter onto the beach exposes guests to local curio vendors and boat operators",
      "Corridor Acoustics — tiled walkways and open-air masonry corridors can amplify footsteps and voice echoes outside guest rooms",
      "Strict Gate Security Policies — strict day-pass restrictions require administrative approvals for external visitors or local guides",
    ],
    hiddenGems: [
      "Elevated 'Green Beach' Lawn Layout — allows guests to lounge on soft grass under palm shade while overlooking the ocean without direct exposure to deep sand or full sun",
    ],
    signatureMemory: "Lounging on the shaded beachfront grass lawn with a cold drink, watching Colobus monkeys leap through the palm canopy above while ocean waves crash along the reef.",
    expectationManagement: "Travelers must understand this is a lively 170-room all-inclusive resort. Dining is buffet-focused, poolside activities feature ambient social music, and the environment caters to families and groups rather than secluded, silent villa privacy.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family, multi-generational group, or first-time safari traveler",
      "Looking for a predictable, value-locked, all-inclusive beach closure",
      "Wants direct ocean access and simple airport transfers",
    ],
    doNotRecommendConditions: [
      "Honeymooner seeking private plunge pools",
      "Burned-out executive requiring silent isolation",
      "Gourmand demanding bespoke à la carte dining",
    ],
    confidenceLevel: "High Confidence (for family and post-safari decompression briefs)",
    competitiveAdvantage: "High operational reliability, all-inclusive cost control, manicured 'green beach' lawns, and 5-10 minute proximity to Ukunda Airstrip.",
    mainLimitation: "High room density (170 units) and repetitive all-inclusive buffet cycles.",
    positioningSummary: "A lively, beautifully manicured beachfront resort combining classic Mediterranean architecture with an all-inclusive model, offering a low-friction, tropical sanctuary perfect for family coastal decompression.",
  },

  pairings: [
    {
      pairedEntity: "Voi Wildlife Lodge / Severin Safari Camp",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Pair with High-Heat Savannah / Elephant Basins (Tsavo East / Tsavo West). The transition from dry red dirt to all-inclusive oceanfront relaxation provides a classic itinerary balance.",
    },
    {
      pairedEntity: "Kibo Safari Camp / Ol Tukai Lodge",
      pairingCategory: "Complementary Region",
      rationale: "Combine with Amboseli National Park. Moving from dusty elephant tracking below Mount Kilimanjaro down to Diani Beach resolves physical fatigue smoothly.",
    },
    {
      pairedEntity: "Standard Gauge Railway (SGR) — Voi/Mtito Andei to Mombasa",
      pairingCategory: "Complementary Experience",
      rationale: "Connect via the SGR train line from Voi or Mtito Andei directly to Mombasa, followed by a coastal road transfer to the resort.",
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
      "Specific dates for annual off-peak maintenance shutdowns require seasonal re-verification",
    ],
  },
};