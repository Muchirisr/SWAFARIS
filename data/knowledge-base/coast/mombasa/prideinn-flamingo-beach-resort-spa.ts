export const prideinnFlamingoBeachResortSpa = {
  id: "prideinn-flamingo-beach-resort-spa-mombasa",
  name: "PrideInn Flamingo Beach Resort & Spa",
  country: "Kenya",
  region: "Coast",
  subRegion: "Mombasa North Coast (Shanzu Beach, Mombasa County)",
  ecosystem: "Coastal, Marine Ecosystem — Coral Reef Coastline",
  propertyType: "High-Energy Modern Beach Resort & Lagoon Sanctuary",
  accommodationStyle: "Contemporary hotel blocks featuring clean lines, slick tilework, crisp modern furnishings, inward-facing balconies, full climate control, and modern tiled shower suites",
  locationDetail: "PrideInn Hotels, Resorts & Camps; ~137 rooms (Standard, Superior, Deluxe, Executive, Palm/Sea-Facing Suites); modernized and rebranded under PrideInn Hotels, continuously updated",
  nearestAirstrips: ["Moi International Airport (MBA) — primary", "Vipingo Airstrip / Bamburi Airstrip"],
  nearestGate: "N/A (Coastal Property; direct frontage on Shanzu Beach)",
  accessibilityNotes: "Highly accessible year-round via paved tarmac roads directly off the main Mombasa-Malindi highway. Flat, paved stone pathways connect the main lobby, dining areas, and expansive pool decks.",
  priceRangeMinUsd: 150,
  priceRangeMaxUsd: 350,

  // Self-stated "Mid" tier; midpoint of $150-350 = $250, landing in Value ($150-299), not
  // Mid-Range ($300-499). Price-guide midpoint overrides self-stated tier per locked rule —
  // same downgrade pattern as Travellers Beach Hotel & Spa.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Ashnil Aruba Camp", "Voi Wildlife Lodge", "Salt Lick Safari Lodge"],

  rawSourceJson: {
    officialBrandName: "PrideInn Flamingo Beach Resort & Spa",
    yearEstablished: "Modernized and rebranded under PrideInn Hotels (continuously updated)",
    unitBreakdown: "~137 rooms: Standard, Superior, Deluxe, Executive, Palm/Sea-Facing Suites",
    priceRange: "$150-350 USD per room/night, Half Board / Full Board / All-Inclusive options.",
  },

  experienceDna: {
    // "Elegant," "Social" are both canonical as-stated — no correction needed.
    emotionalTone: ["Elegant", "Social"],

    // Source states "High-energy safari | Sensory-rich" — only High-Energy Safari is canonical.
    // Founder confirmed adding Family Connection, matching family suitability 10/10 and the
    // lagoon-pool/kids-club infrastructure, per the Travellers Beach precedent.
    energyType: ["High-Energy Safari", "Family Connection"],

    experiencePace: "Fast", // source stated "Fast-paced" — terminology cleanup only

    // Source states "Contemporary Luxury" (Luxury Style), no detailed value given. Founder
    // confirmed Comfort Luxury / Contemporary Comfort — this is the first time Contemporary
    // Comfort pairs with a Value-tier lodge (previously only seen with Mid-Range), since the
    // property's modern/contemporary architectural character, not its price tier, drives this
    // detailed label. New precedent: comfortPhilosophyDetailed tracks architectural/design
    // character, not strictly the budgetTier.
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // "Opening Immersion / Mid-Journey Transition / Recovery & Reset" hedge contained TWO literal
    // canonical terms (Opening Immersion, Mid-Journey Transition), so it did not qualify for the
    // standard single-term hedge auto-resolve. Founder confirmed Recovery — no ecosystem/region
    // bridging occurs here (single coastal stop), and the emotional-transition language matches
    // the post-safari-reset pattern established at Severin Sea Lodge.
    // Mombasa sub-phase running tally: Opening Immersion x1, Recovery x2.
    journeyRole: "Recovery",

    // idealTravelersPrimary decisions: "Corporate & Event Travelers" dropped (no canonical category,
    // no archetype support). "First-Time Safari & Leisure Travelers" dropped (no archetype support
    // beyond what's captured under Families and Social Explorers below).
    idealTravelersPrimary: ["Families", "Social Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 7,
    relaxationScore: 5,
    authenticityScore: 6,
    premiumScore: 7,
    adventureScore: 5,
    privacyScore: 4,
    wildlifeExperienceScore: 3,
    culturalImmersionScore: 5,
    familySuitabilityScore: 10,
    comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "45-60 minutes road transfer from Moi International Airport (MBA); 35-45 minutes road transfer from Mombasa SGR Railway Terminal (Miritini)",
    seasonalAccessibility: "Open year-round; ocean entry and swimming are tide-dependent — low tide exposes the inner reef flat, high tide allows direct water entry",
    electricitySystem: "Reliable 24-hour mains grid connection supported by heavy-duty commercial backup generators to maintain uninterrupted air conditioning and lighting",
    powerReliability: "High",
    waterReliability: "High — high-capacity municipal and treated water systems backed by modern solar and electric water heaters, delivering consistent water pressure and temperature",
    internetAvailability: "High-speed complimentary Wi-Fi across public spaces, conference areas, and guest rooms",
    mobileNetwork: "Excellent 4G/5G cellular coverage via Safaricom and Airtel",
    medicalAccess: "10-15 minutes from top-tier private medical facilities in Mombasa (Aga Khan Hospital Mombasa, Mombasa Hospital)",
    childFriendly: true, // stated "Exceptional"
    mobilityFriendly: true, // stated "High"
    operationalLimitations: [
      "High noise levels in central pool areas during peak hours",
      "Public beach vendor activity along Shanzu Beach",
      "Busy buffet lines during peak holidays or corporate events",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "High",
      reasoning: "The massive winding lagoon pool, shallow splash zones, professional kids' animation team, and diverse buffet options keep children and adults entertained without leaving the property.",
      supportingSignals: ["Family suitability score 10/10", "Multi-tiered lagoon pool with shallow zones", "Kids' animation team"],
      mismatchConditions: ["Peak meal times in the main dining hall can feel busy during school holidays"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The High-Energy Socialite (Active & Social Groups),"
    // not canonical. Founder confirmed remapping to The Affectionate Host (The Collective
    // Unwinder) — a fully native Social Explorers archetype, matching the vibrant, shared
    // pool-bar/music energy directly.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Affectionate Host",
      matchStrength: "High",
      reasoning: "Thrives in vibrant environments with pool bars, music, water sports, and shared social energy after long, quiet stretches of travel.",
      supportingSignals: ["Social dynamic: Social", "Intensity score 7/10", "Active pool bars and music programming"],
      mismatchConditions: [],
    },
    // REMAPPED: source doc listed "The Cultural Explorer (First-Time Kenya Visitors)," neither
    // canonical. Founder confirmed (per Severin precedent) remapping to The Cultural Immersionist
    // (The Deep-Humanity Seeker) under Social Explorers.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Cultural Immersionist",
      matchStrength: "Moderate",
      reasoning: "Provides a predictable, high-comfort landing pad with easy access to Mombasa city excursions, water sports, and coastal day trips.",
      supportingSignals: ["Cultural immersion score 5/10", "Access to Fort Jesus and Swahili spice markets"],
      mismatchConditions: ["Must cross the resort's security perimeter to access the ocean, encountering local beach vendors"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Secluded Romantic & Sanctuary
    // Seekers" — corrects to canonical Burned-out Executives (archetype name is an exact match).
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "The central pool focus, energetic music, and social atmosphere contrast with requests for silence, privacy, and low sensory input.",
      supportingSignals: [],
      mismatchConditions: ["High dissatisfaction due to ambient noise, pool activity, and communal layout"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Remote Wilderness Purist," not canonical. Founder
    // confirmed remapping to The Low-Impact Purist (The Off-Grid Minimalist) under Luxury
    // Adventurers, per Severin precedent.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The Low-Impact Purist",
      matchStrength: "Low",
      reasoning: "Seeking untouched eco-landscapes and rustic wilderness lodges rather than a modern, commercial beach resort layout.",
      supportingSignals: [],
      mismatchConditions: ["Aesthetic and experiential mismatch"],
    },
    // DROPPED: incompatible archetype "The Avant-Garde Minimalist" — no canonical equivalent,
    // per Severin precedent.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 nights",
    recommendedPositionNote: "\"Opening Immersion / Mid-Journey Transition / Recovery & Reset\" hedge contained two literal canonical terms, so it did not qualify for standard single-term auto-resolve. Founder confirmed Recovery. Mombasa sub-phase running tally: Opening Immersion x1, Recovery x2.",
    whatShouldComeBefore: "High-intensity bush tracking in Tsavo East, Tsavo West, or Taita Hills Wildlife Sanctuary (e.g., Salt Lick Safari Lodge or Ashnil Aruba)",
    whatShouldComeAfter: "Direct SGR Train transfer from Mombasa to Nairobi for homeward flights, or direct road transfer to Moi International Airport (MBA)",
    emotionalTransitionRationale: "Reintroduces vibrant social energy, movement, and aquatic fun following days of early morning drives and quiet game viewing in the bush.",
  },

  narrative: {
    whyChosen: "A vibrant, modern contemporary beachfront resort on Mombasa's North Coast featuring a spectacular winding lagoon pool and active entertainment, making it an excellent high-energy landing pad for families and social groups.",
    bestUsedFor: "Families with children, active group travelers, and social/celebration groups seeking a lively, high-energy beach resort with strong amenities and modern air-conditioned rooms.",
    lessSuitableFor: "Honeymooners seeking secluded romance, solo travelers wanting quiet sanctuary, or high-net-worth clients demanding ultra-private boutique luxury.",
    overview: "PrideInn Flamingo Beach Resort & Spa is a lively, contemporary coastal resort situated on Shanzu Beach along Mombasa's North Coast. The property is designed around its multi-tiered \"Blue Lagoon\" swimming pool, which winds like a river through palm gardens. Guest blocks face inward toward this central water landscape, creating a self-contained resort environment. The property emphasizes modern room finishes, reliable air conditioning, active pool decks, and organized family entertainment.",
    emotionalFeel: "Fun, vibrant, and welcoming. The daily rhythm revolves around the central pool complex and poolside dining venues. Mornings transition into active afternoons with music, family pool activities, and social gatherings at the water's edge. It offers a familiar, stress-free resort environment where guests can unwind and socialize.",
    sensorySignature: {
      visual: ["Sparkling turquoise water winding through green palm lawns", "Bright whitewashed resort blocks", "Sunlit ocean views across Shanzu Beach"],
      auditory: ["Upbeat pool music", "Splashing water", "Family laughter", "Ocean surf beyond the beach wall"],
      olfactory: ["Tropical sea air", "Fresh grilled seafood", "Coconut lotion", "Clean coastal breezes"],
    },
    positiveSignals: [
      "The Legendary Lagoon Pool — a multi-tiered pool layout with crossing bridges and distinct depth zones that absorbs guest activity smoothly",
      "Dedicated Family & Child Amenities — active animation staff, shallow pool zones, and structured kids' activities",
      "Fresh, Modern Room Interiors — clean tilework, effective air conditioning, updated bathrooms, modern in-room amenities",
      "Attentive Hospitality — friendly, accommodating staff known for handling dietary requests and supporting family needs",
    ],
    negativeSignals: [
      "Energetic Public Areas & Noise Levels — music and active pool programming in central zones can feel loud for guests seeking quiet",
      "Public Beach Vendor Activity — stepping beyond the resort boundary onto Shanzu Beach involves interacting with local curio and activity vendors",
      "Peak Season Buffet Dynamics — during holiday surges, main dining halls experience high guest volume and fast-paced service",
    ],
    hiddenGems: [
      "Executive Suites & Sea-Facing Rooms — situated away from central pool noise, offering direct ocean vistas, quiet balconies, and upgraded interiors while retaining full resort access",
    ],
    signatureMemory: "Floating along the winding lagoon pool under the afternoon sun, followed by oceanfront dining as tropical evening light fills the coastal garden.",
    expectationManagement: "Set clear expectations regarding the lively, music-filled atmosphere around the main pool, the presence of beach vendors outside the property boundary, and tide-dependent beach conditions.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Families with children, active group travelers, first-time safari guests, and clients seeking a lively, high-energy beach resort with strong amenities and a large pool",
      "Guests wanting modern, air-conditioned rooms and reliable PrideInn service standards",
    ],
    doNotRecommendConditions: [
      "Honeymooners seeking secluded romance",
      "Solo travelers wanting quiet sanctuary",
      "High-net-worth clients demanding ultra-private boutique luxury",
    ],
    confidenceLevel: "High Confidence (Families & Groups) / Low Confidence (Secluded Luxury Seekers)",
    competitiveAdvantage: "Iconic multi-tiered lagoon pool layout, strong family infrastructure, modern room hardware, and reliable PrideInn service standards.",
    mainLimitation: "High sensory stimulation and noise levels around central pool areas during peak hours.",
    positioningSummary: "A vibrant, modern contemporary beachfront resort on Mombasa's North Coast featuring a spectacular winding lagoon pool and active entertainment, making it an excellent high-energy landing pad for families and social groups.",
  },

  pairings: [
    {
      pairedEntity: "Ashnil Aruba / Voi Wildlife Lodge (Tsavo East National Park)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "The transition from dry, red-dust bush landscapes to the expansive lagoon pool world of PrideInn Flamingo creates a classic \"Bush & Beach\" contrast.",
    },
    {
      pairedEntity: "Salt Lick Safari Lodge (Taita Hills Wildlife Sanctuary)",
      pairingCategory: "Complementary Region",
      rationale: "Moving from the elevated architectural views of Salt Lick into the modern coastal resort setting of Shanzu Beach offers a balanced flow of adventure and leisure.",
    },
    {
      pairedEntity: "Fort Jesus, Mombasa Old Town markets, and a private dhow dinner cruise along Tudor Creek",
      pairingCategory: "Complementary Experience",
      rationale: "Complements active resort days with a guided cultural excursion or a private dhow dinner cruise.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Field surveys", "Operator specifications", "Regional geographical surveys", "Road/rail transit logs", "Property operational records"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: ["Annual soft-renovation schedules for specific guest blocks require ongoing seasonal verification"],
  },
};