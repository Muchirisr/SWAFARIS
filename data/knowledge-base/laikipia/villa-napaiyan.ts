// data/knowledge-base/laikipia/villa-napaiyan.ts
export const villaNapaiyan = {
  id: "villa-napaiyan", // NEW lodge, no existing DB record
  name: "Maiyan – Villa Napaiyan",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Nanyuki, Northern Laikipia Plateau",
  ecosystem: "Highland plateau savannah (113-acre manicured estate 20 km north of Nanyuki, views of Mount Kenya, Lolldaiga Hills, Aberdare Range)",
  propertyType: "Ultra-Luxury Lifestyle Estate / Private Duplex Villa",
  accommodationStyle: "Contemporary multi-story stone and glass duplex villas with private rooftop entertainment decks.",
  locationDetail: "113-acre master-planned resort estate 20 km north of Nanyuki town.",
  nearestGate: "Ol Pejeta Conservancy Access Gates (approx. 11–12 km / 20–25 min drive)",
  nearestAirstrips: ["Nanyuki Airport (NYU)"],
  accessibilityNotes: "Fully accessible via paved, maintained all-weather roads; secure internal estate tarmac driveways.",
  priceRangeMinUsd: 250,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Ultra-Luxury", // as stated in source doc; superseded by price-midpoint governance rule
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // CORRECTED: price midpoint ($350) falls in the Mid-Range band ($300–499), overriding self-reported Ultra-Luxury — largest tier correction in the project to date
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Ol Pejeta Conservancy tented camp",
    "Samburu National Reserve camp",
    "Lewa Wildlife Conservancy",
    "Maasai Mara ecosystem camp",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Elegant", "Exclusive", "Social"], // CORRECTED: "Expansive", "Modern", "Indulgence" non-canonical, replaced per founder decision; "Social" valid as-is
    energyType: ["Family Connection", "Wellness", "Luxury Escape"], // CORRECTED: "High-energy lifestyle & sports" / "Leisure-centric" both non-canonical, no accepted expansion exists yet — mapped to closest existing values per founder decision
    experiencePace: "Moderate", // CORRECTED: "Self-Determined" non-canonical
    comfortPhilosophy: ["Comfort Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Contemporary Comfort", // CORRECTED: "Contemporary Luxury" non-canonical; conservatism principle applied given tier downgrade and no heritage-status exception
    journeyRole: "Opening Immersion", // resolved directly — "Stand-Alone Family Anchor" non-canonical, "Opening Immersion" canonical, per standing rule
    idealTravelersPrimary: ["Families", "Bleisure Explorers"], // CORRECTED: "Active Leisure Travelers" dropped (invented, no real archetype equivalent); "Multi-Generational Families" corrected to real category name "Families"
    idealTravelersSecondary: [],
    intensityScore: 5, relaxationScore: 9, authenticityScore: 6, premiumScore: 8,
    adventureScore: 5, privacyScore: 7, wildlifeExperienceScore: 3,
    culturalImmersionScore: 4, familySuitabilityScore: 10, comfortScore: 10,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3.5–4 hours overland from Nairobi; 30-minute road transfer from Nanyuki airstrip.",
    seasonalAccessibility: "Open year-round. All-weather internal estate infrastructure prevents seasonal road isolation.",
    rainySeasonImpact: "Minimal — paved all-weather access roads.",
    electricitySystem: "Grid-tied electricity backed by industrial-grade automated generator systems.",
    powerReliability: "Continuous",
    waterReliability: "Municipal and borehole water, solar/electric heating, high-pressure continuous hot water.",
    internetAvailability: "High-speed Wi-Fi throughout villas and common areas.",
    mobileNetwork: "Strong Safaricom/Airtel 4G coverage.",
    medicalAccess: "On-site first-aid coordination; access to advanced private medical facilities and air-evacuation in Nanyuki town.",
    childFriendly: true, // "Exceptionally high" per source, unambiguous
    mobilityFriendly: true, // resolved from source "Moderate-to-High" per standing collapse precedent, confirmed by founder
    operationalLimitations: [
      "Central resort restaurant service pacing can slow during peak corporate conference or wedding weekends",
      "Estate environment lacks wild bush isolation",
      "Located 20 km outside Nanyuki center, requiring coordinated provisioning for extended self-catering stays",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Milestone Celebrators", matchStrength: "High",
      reasoning: "The 6-bedroom configuration and exclusive rooftop entertainment deck provide an ideal staging ground for multi-generational family reunions, anniversaries, and major birthdays.",
      supportingSignals: ["6 en-suite bedroom layout", "Private rooftop entertainment deck", "Kids' play areas and minders"],
      mismatchConditions: ["Requires pre-planning for catering if avoiding resort restaurant pacing during peak occupancy blocks"] },
    { fitType: "ideal", category: "Bleisure Explorers", archetype: "The Deep-Work Sovereign", matchStrength: "Moderate",
      reasoning: "Uninterrupted power, high-speed Wi-Fi, and sophisticated desk/living spaces allow remote executives to blend high-level productivity with country-club leisure.",
      supportingSignals: ["Continuous power", "High-speed Wi-Fi", "Quiet residential lounge layouts"],
      mismatchConditions: ["Resort leisure temptations and family activity noise require disciplined personal time management"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Low",
      reasoning: "The expansive, multi-bedroom group villa framework and active resort atmosphere conflict with couples seeking an intimate, hyper-private, romantic wilderness hideaway.",
      supportingSignals: [], mismatchConditions: ["Exposure to family group dynamics and conference foot traffic on the broader estate"] },
    { fitType: "poorFit", category: "Nature Photographers", archetype: "The Wilderness Minimalist", matchStrength: "Low",
      reasoning: "Absence of on-property wildlife and manicured resort layout clash with tracking-focused photography needs.",
      supportingSignals: [], mismatchConditions: ["Requires daily vehicle commutes out of the estate to access meaningful wildlife photography settings"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Low",
      reasoning: "Corporate event hosting and social vibrancy of a large multi-villa resort estate lack the absolute isolation and deep silence required for profound mental de-escalation.",
      supportingSignals: [], mismatchConditions: ["Periodic weekend resort crowding and event noise can disrupt total psychological decompression"] },
    // DROPPED: "Active Leisure Travelers" — not a real archetype/category; underlying sports/recreation profile captured at Energy Type layer instead (Family Connection, Wellness, Luxury Escape)
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION: source hedged \"Opening Immersion (or Stand-Alone Family Anchor)\"; only Opening Immersion is canonical, resolved directly per standing rule. REGIONAL TALLY (Laikipia sub-phase, lodge 1/1 so far): Opening Immersion x1.",
    whatShouldComeBefore: "International flight arrival into Nairobi followed by a seamless road transfer or domestic flight north to Nanyuki.",
    whatShouldComeAfter: "A rugged, deep-bush tented camp inside Ol Pejeta Conservancy, Samburu National Reserve, or the Maasai Mara for high-intensity wildlife tracking.",
    emotionalTransitionRationale: "Smoothly channels post-flight arrival energy into relaxed group bonding and active recreation before shifting focus to raw, early-morning game drive routines.",
  },

  narrative: {
    whyChosen: "A high-capacity, contemporary luxury villa estate that lets multi-generational groups decompress from international travel in flawless comfort before heading into deeper wilderness.",
    bestUsedFor: "Multi-generational family reunions, milestone celebrations, and corporate team retreats seeking high-spec modern comfort and diverse sports recreation.",
    lessSuitableFor: "Couples seeking intimate romantic wilderness immersion, photographers needing on-property wildlife, or executives needing absolute isolation.",
    journeyPositionNote: "Opening Immersion — a soft, high-comfort landing pad before deeper wilderness legs.",
    overview: "Villa Napaiyan at Maiyan Luxury Resort is a bold, contemporary architectural estate on a 113-acre plateau north of Nanyuki, trading canvas and thatch for stone, glass, and manicured lawns framing Mount Kenya.",
    emotionalFeel: "Secure, indulgent, and effortlessly modern — an elite private country estate with complete physical safety after dark.",
    sensorySignature: {
      visual: ["Manicured green lawns meeting open Laikipia plains", "Sharp architectural lines", "Snow-dusted peaks of Mount Kenya"],
      auditory: ["Crisp Nanyuki mountain air", "Distant hoofbeats from the equestrian center", "Quiet relaxation sounds around the rooftop pool"],
      olfactory: ["Clean mountain breeze", "Eucalyptus", "Dry African savannah grass", "Crisp evening air"],
    },
    positiveSignals: [
      "Private rooftop deck with personal plunge pool and heated jacuzzi overlooking Mount Kenya",
      "Spacious 6 en-suite bedroom layout enabling large families or teams to co-reside without spatial friction",
      "On-site access to tennis courts, horseback riding, mini-golf, and a fitness center",
      "Continuous power supply, high-speed Wi-Fi, and high-spec contemporary interior amenities",
    ],
    negativeSignals: [
      "Large multi-villa resort layout can host corporate events and weddings, causing weekend congestion",
      "Central restaurant operations can experience relaxed service speeds during high-occupancy surges",
      "Located 20 km outside Nanyuki center, requiring coordinated provisioning for extended self-catering stays",
      "Secure estate boundaries mean wild big-game animals are absent from immediate grounds",
    ],
    hiddenGems: [
      "Cost-effective, high-capacity luxury base camp just 12 miles from Ol Pejeta Conservancy — full private villa luxury at a fraction of exclusive bush-lodge buyouts, with effortless day trips to see northern white rhinos.",
    ],
    signatureMemory: "Unwinding in the private rooftop heated jacuzzi at dusk as clouds clear to reveal alpenglow lighting up Mount Kenya while sharing drinks with family.",
    expectationManagement: "Travelers must recognize this is a contemporary lifestyle resort villa rather than a rustic wilderness lodge — no on-property big game, and peak weekends bring social resort energy.",
    idealNights: "3 to 5",
  },

  recommendationNotes: {
    recommendConditions: [
      "Managing multi-generational family reunions, milestone celebrations, or corporate team retreats",
      "Seeking high-spec modern comfort and diverse sports recreation without traditional safari vehicle confinement",
    ],
    doNotRecommendConditions: [
      "Clients require an intimate, romantic, rustic 'Out of Africa' bush romance",
      "Complete wilderness isolation or immediate on-property big-game viewing is a priority",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Unmatched combination of 6-bedroom scale, modern high-end architectural finish, private rooftop pool assets, and proximity to Laikipia's premier wildlife sanctuaries.",
    mainLimitation: "Commercial resort atmosphere during peak weekends and total absence of on-site free-roaming wildlife.",
    positioningSummary: "An ultra-modern 6-bedroom architectural luxury villa in Nanyuki featuring an exclusive rooftop plunge pool and jacuzzi deck, offering large groups contemporary country-club living and dramatic Mount Kenya views.",
  },

  pairings: [
    { pairedEntity: "Ol Pejeta Conservancy tented camp", pairingCategory: "ecosystem", rationale: "Deep-bush luxury tented camp providing raw wildlife tracking to contrast Villa Napaiyan's manicured estate comfort." },
    { pairedEntity: "Samburu National Reserve camp", pairingCategory: "ecosystem", rationale: "Alternative deep-bush riverine wildlife setting for the intense tracking phase following Villa Napaiyan." },
    { pairedEntity: "Lewa Wildlife Conservancy", pairingCategory: "regional", rationale: "Remote wilderness sector continuing the conservation-focused Laikipia narrative." },
    { pairedEntity: "Maasai Mara ecosystem camp", pairingCategory: "regional", rationale: "Classic canvas-walled riverine wildlife camp for iconic Mara game viewing after the estate stay." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Resort operational frameworks", "Structural surveys", "Regional Laikipia tourism inventories", "Architectural layout blueprints", "Verified guest accommodation audits"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Specific seasonal promotional rate fluctuations for individual room bookings outside of full-villa blocks — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};