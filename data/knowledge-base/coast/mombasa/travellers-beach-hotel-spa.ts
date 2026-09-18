export const travellersBeachHotelSpa = {
  id: "travellers-beach-hotel-spa-mombasa",
  name: "Travellers Beach Hotel & Spa",
  country: "Kenya",
  region: "Coast",
  subRegion: "Mombasa North Coast (Bamburi Beach, Mombasa County)",
  ecosystem: "Coastal, Marine Ecosystem — beachfront fronting the Mombasa Marine National Park and Reserve",
  propertyType: "Family Beach Resort / Classic Coastal Spa Hotel",
  accommodationStyle: "Classic coastal low-rise room blocks featuring heavy makuti thatched accents, traditional Swahili-inspired timber furnishings, and private balconies overlooking gardens or the central lagoon pool",
  locationDetail: "Independently owned and managed; 288 rooms (Standard Rooms, Superior Rooms, Deluxe Suites, Executive Suites); established ~1987, legacy property with continuous operational upgrades",
  nearestAirstrips: ["Moi International Airport (MBA) — primary", "Vipingo Airstrip — 22km / 35-45 min drive"],
  nearestGate: "N/A (Coastal Beachfront; direct access to Mombasa Marine National Park marine boundary)",
  accessibilityNotes: "Accessible year-round via the fully paved Mombasa-Malindi Highway. Flat ground footprint across manicured tropical gardens, winding paved poolside pathways, and ramp access throughout public resort zones.",
  priceRangeMinUsd: 140,
  priceRangeMaxUsd: 280,

  // Doc self-states "Mid" tier, but midpoint ($140-280) = $210, landing cleanly in Value
  // ($150-299), not Mid-Range ($300-499). Price-guide midpoint overrides self-stated tier per
  // locked rule — founder-confirmed downgrade.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Voi Safari Lodge", "Ashnil Aruba Camp"],

  rawSourceJson: {
    officialBrandName: "Travellers Beach Hotel & Spa",
    yearEstablished: "~1987 (legacy property with continuous operational upgrades)",
    unitBreakdown: "288 rooms: Standard Rooms, Superior Rooms, Deluxe Suites, Executive Suites",
    priceRange: "$140-280 USD per night, Half Board / Full Board depending on room category and season.",
  },

  experienceDna: {
    // "Unpretentious" is not one of the 15 canonical Emotional Tone values. Founder confirmed
    // dropping it and keeping "Adventurous," "Rustic," "Social" as-stated.
    emotionalTone: ["Adventurous", "Rustic", "Social"],

    // Source states "High-Energy Safari | Sensory-Rich | Kinetic Coastal Fun" — only "High-Energy
    // Safari" is canonical. Founder confirmed adding "Family Connection," matching the family
    // suitability score (9/10) and the lagoon-pool/kids-animation infrastructure, per the
    // Diani Sea Resort / Papillon family-beach-resort precedent.
    energyType: ["High-Energy Safari", "Family Connection"],

    experiencePace: "Fast", // source stated "Fast-Paced" — terminology cleanup only

    comfortPhilosophy: ["Adventure Luxury"],
    // "Heritage Luxury" is not one of the 7 detailed values. The heritage-exception precedent does
    // NOT apply here — that exception requires undisputed heritage status with NO documented wear,
    // and this doc explicitly documents wear (sluggish drainage, firm/dated mattresses, aging
    // plumbing). With the exception disqualified and the tier confirmed downgraded to Value, the
    // conservatism-toward-modest principle applies. Founder confirmed "Rustic Immersion" over
    // "Contemporary Comfort," matching the makuti thatched architecture, Swahili-inspired
    // furnishings, and the confirmed "Rustic" emotional tone — mirroring the Papillon precedent.
    comfortPhilosophyDetailed: "Rustic Immersion",

    // "Coastal Decompression / Opening Immersion (or Mid-Tier Family Base)" hedge — only
    // "Opening Immersion" is canonical, auto-resolves per standing hedge rule.
    // Mombasa sub-phase running tally: Opening Immersion x1 (first lodge).
    journeyRole: "Opening Immersion",

    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Social Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 7,
    relaxationScore: 5,
    authenticityScore: 6,
    premiumScore: 6,
    adventureScore: 5,
    privacyScore: 3,
    wildlifeExperienceScore: 4,
    culturalImmersionScore: 5,
    familySuitabilityScore: 9,
    comfortScore: 6,
    socialDynamic: "Social",
    travelFatigue: "Medium",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "45-60 minutes road transfer from Moi International Airport (MBA) or Mombasa SGR Terminus (Miritini) via Nyali Bridge / Malindi Highway",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "High coastal humidity; heavy monsoon rains (April-May) can cause temporary water pooling along unpaved external access tracks and increase ambient indoor humidity",
    electricitySystem: "24/7 mains grid electricity supported by heavy-duty commercial automatic backup generators to manage regional power grid fluctuations",
    powerReliability: "High",
    waterReliability: "Moderate — central municipal and borehole water supply backed by solar water heaters and electric boilers; water drainage and hot water delivery show latency typical of legacy coastal plumbing",
    internetAvailability: "Complimentary Wi-Fi throughout guest rooms, poolside dining areas, and central lobby lounges",
    mobileNetwork: "Strong 4G/5G cellular coverage (Safaricom/Airtel)",
    medicalAccess: "On-site basic first aid and resident nurse; full-service private medical centers (Mombasa Hospital - Nyali Branch, Premier Hospital) within 10-15 min drive (5-8km)",
    // Stated cleanly as "Exceptional" (not graded) — dedicated kids' pool sections, active daily
    // animation programs, diverse family dining. Maps to true.
    childFriendly: true,
    // Stated cleanly as "High" (not graded) — flat garden layout, ground-floor room accessibility,
    // wide paved pathways, ramped access to dining pavilions and pool decks. Maps to true.
    mobilityFriendly: true,
    operationalLimitations: [
      "Sluggish bathroom drainage and firm, dated mattresses",
      "Intense local beach vendor presence on public Bamburi shore",
      "Dining service bottlenecks and buffet crowding during peak domestic holiday periods",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "The multi-depth lagoon pool, flexible four-restaurant culinary infrastructure, and continuous animation activities keep children fully engaged after transit days.",
      supportingSignals: ["Family suitability score 9/10", "Multi-depth lagoon pool with dedicated kids sections", "Daily animation programs"],
      mismatchConditions: ["Must navigate peak-season buffet crowding and high ambient pool noise"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Checklist Minimalist," which does not exist in
    // the canonical First-Time Safari Traveler set (Protege Traditionalist / Checklist Maximalist /
    // Sensory Overwhelmed). Founder confirmed remapping to The Sensory Overwhelmed (The
    // Controlled-Environment Seeker) — its predictable, secure, low-overhead framing fits the
    // stated fit rationale far better than the efficiency-driven Checklist Maximalist.
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Sensory Overwhelmed",
      matchStrength: "Moderate",
      reasoning: "Offers an affordable, logistically secure landing pad on the North Coast to decompress before or after a Tsavo safari loop without high resort overhead.",
      supportingSignals: ["High financial predictability", "Secure gated resort perimeter", "Opening Immersion positioning"],
      mismatchConditions: ["Standard room tiers show hardware aging and basic bathroom finishes"],
    },
    // CORRECTED CATEGORY + ACCEPTED EXCEPTION: source doc listed "The Bonded Cohort (Social
    // Explorers / Group Travelers)." The Bonded Cohort archetype is native to Students per standing
    // rule, but founder confirmed keeping it applied here under Social Explorers as a deliberate,
    // recorded exception (idealTravelersPrimary trimmed to "Social Explorers," dropping the
    // non-canonical "Group Travelers" label).
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Bonded Cohort",
      matchStrength: "High",
      reasoning: "Large room inventory, high-energy pool bars, live evening entertainment, and easy access to Mombasa's urban nightlife make it an ideal base for social groups.",
      supportingSignals: ["288-room inventory", "Live evening entertainment", "Easy access to Mombasa nightlife"],
      mismatchConditions: ["Lacks secluded, quiet spaces for intimate, solitary gatherings"],
    },
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "High public noise levels, constant family activity, high-occupancy buffet dining, and low spatial privacy destroy romantic seclusion.",
      supportingSignals: [],
      mismatchConditions: ["Deep disappointment over the lack of private plunge pools, quiet adult-only zones, or intimate fine-dining atmospheres", "Privacy score only 3/10"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Luxury Ultra-Purists" —
    // corrects to canonical Luxury Adventurers.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Low",
      reasoning: "Dated plumbing, firm mattresses, high-volume resort machinery, and intense street-level beach vendor interactions fail to meet luxury expectations.",
      supportingSignals: [],
      mismatchConditions: ["Instant culture shock and dissatisfaction when transitioning from elite private safari conservancies"],
    },
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "Baseline kinetic noise, open social layout, and lack of soundproof private sanctuaries impede mental reset and remote work focus.",
      supportingSignals: [],
      mismatchConditions: ["Inability to achieve a low-sensory digital detox or quiet physical relaxation"],
    },
    // DROPPED: idealTravelersPrimary item "Domestic & Regional Holidaymakers" — not a canonical
    // category and has no distinct archetype support beyond what's already captured under Families,
    // First-Time Safari Travelers, and Social Explorers above.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 4 nights",
    recommendedPositionNote: "Opening Immersion auto-resolved per standing hedge rule (only one canonical value present in the stated hedge). Mombasa sub-phase running tally: Opening Immersion x1 (first lodge).",
    whatShouldComeBefore: "Long-haul international flight arrival into Mombasa (MBA), or an active, budget-to-mid-tier bush safari in Tsavo East/West",
    whatShouldComeAfter: "Homebound departure from Mombasa (MBA/SGR), or a transition into a quiet, high-end coastal sanctuary (e.g., Watamu or South Diani)",
    emotionalTransitionRationale: "Bridges long transit days or intensive wilderness tracking with high-energy poolside relaxation, flexible multi-cuisine dining, and familiar coastal comfort.",
  },

  narrative: {
    whyChosen: "A bustling, family-friendly classic resort on Mombasa's North Coast, offering an energetic, pool-centric holiday experience driven by deeply affectionate Kenyan service and diverse dining options.",
    bestUsedFor: "Families, first-time safari travelers wanting a secure and low-overhead landing pad, and social/group travelers who measure luxury by staff warmth and pool scale rather than architectural minimalism.",
    lessSuitableFor: "Honeymooners, solo wellness seekers, or burned-out executives demanding quiet luxury, private beach segments, or hyper-refined culinary arts.",
    overview: "Travellers Beach Hotel & Spa is a cornerstone of the classic Mombasa North Coast holiday matrix. Far removed from the quiet, private-estate isolation of South Coast retreats, this property thrives on high-occupancy energy, accessibility, and unpretentious coastal fun. The atmosphere is loud, bright, and deeply kinetic, anchored by a massive centerpiece lagoon pool that stitches the resort together, where traditional Swahili design elements meet the practical, high-volume machinery of an established mid-market beach resort.",
    emotionalFeel: "Uninhibited, lighthearted leisure that feels distinctly un-stuffy — guests laugh loudly by the bar, splash in the pools, and engage enthusiastically with the warm, outgoing animation staff. The resort carries a nostalgia-heavy, comforting rhythm that domestic and regional travelers have relied on for years, though for a traveler seeking deep quiet or an elevated romantic retreat, the constant baseline hum of family vacations in progress can feel overwhelming.",
    sensorySignature: {
      visual: ["Massive meandering lagoon pool", "Lush tropical palms", "Soaring makuti dining structures", "Sun loungers and bright ocean views"],
      auditory: ["Echoing live bands", "Poolside pop music", "Splashing children", "Animated staff chatter", "Rustling palm canopy", "Ocean surf"],
      olfactory: ["Sizzling charcoal-grilled meats", "Aromatic Indian spices", "Salty sea breeze", "Tropical flowers", "Sweet poolside cocktails"],
    },
    positiveSignals: [
      "The \"Human First\" Service Culture — long-serving staff singled out across reviews for deeply empathetic, protective, and proactive care",
      "Diverse Culinary Infrastructure — four distinct dining venues (Italian, Indian, Shibe buffet) prevent culinary monotony during extended stays",
      "Exceptional Pool Architecture — massive lagoon pool layout allows simultaneous pockets of children's play and casual poolside lounging",
      "High Logistical Security — strong internal safety standards and rigorous gate security provide a reassuring psychological bubble within an urban beach zone",
    ],
    negativeSignals: [
      "Hardware and Plumbing Aging — recurring complaints of sluggish bathroom drainage, occasional sulfur odors, and firm, dated mattress setups",
      "The Bamburi \"Beach Vendor\" Gauntlet — direct access to public Bamburi Beach exposes guests to an intense network of local beachcombers and souvenir sellers",
      "Dining Service Bottlenecks — heavy crowding in main buffet areas during peak regional holiday seasons",
    ],
    hiddenGems: [
      "Direct, low-friction access to the Mombasa Marine Park — established ties with on-site diving outfits let guests step off the resort boundary and be snorkeling with sea turtles within 15 minutes",
    ],
    signatureMemory: "Lounging beside the massive lagoon pool with a drink as a live band plays under the central makuti pavilion, then stepping directly onto a glass-bottom boat for an afternoon snorkeling excursion in the marine park.",
    expectationManagement: "Travelers must understand this is an active, high-occupancy mid-market resort on an urban beach strip. Room hardware and plumbing show legacy age, mattresses are firm, the public Bamburi beachfront involves active vendor solicitations, and main dining halls can become crowded during peak holiday dates.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client brief prioritizes a strict budget, robust family/child infrastructure, and diverse specialty dining choices",
      "Group travelers who value staff warmth, pool scale, and direct access to Mombasa's urban heartbeat and marine park",
      "First-time safari travelers wanting a secure, low-overhead coastal landing pad before or after a Tsavo loop",
    ],
    doNotRecommendConditions: [
      "Honeymooners, solo wellness seekers, or burned-out executives demanding quiet luxury or private beach segments",
      "Guests sensitive to room hardware wear, mattress firmness, or active beach vendor interactions",
    ],
    confidenceLevel: "Medium to Low Confidence",
    competitiveAdvantage: "One of the largest lagoon pool footprints and most diverse multi-restaurant dining offerings on Mombasa's North Coast, backed by strong Kenyan service warmth and immediate marine park access.",
    mainLimitation: "Aging standard room hardware/plumbing and high ambient noise from public holiday-club activities.",
    positioningSummary: "A bustling, family-friendly classic resort on Mombasa's North Coast, offering an energetic, pool-centric holiday experience driven by deeply affectionate Kenyan service and diverse dining options.",
  },

  pairings: [
    {
      pairedEntity: "Voi Safari Lodge / Ashnil Aruba Camp",
      pairingCategory: "Complementary Ecosystem",
      rationale: "High-occupancy, family-friendly safari properties in Tsavo transition naturally into the energetic, social pool culture of Bamburi Beach without creating an expectation mismatch.",
    },
    {
      pairedEntity: "Mombasa Old Town & Fort Jesus",
      pairingCategory: "Complementary Region",
      rationale: "Located 12km south, an afternoon cultural excursion allows guests to easily explore UNESCO heritage sites, Swahili architecture, and spices before returning to the resort.",
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
      "Phased timeline for room hardware and bathroom plumbing refurbishments across standard room blocks",
    ],
  },
};