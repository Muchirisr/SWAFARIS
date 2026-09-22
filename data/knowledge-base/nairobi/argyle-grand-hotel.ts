export const argyleGrandHotel = {
  id: "argyle-grand-hotel-nairobi",
  name: "Argyle Grand Hotel (Nairobi Airport)",
  country: "Kenya",
  region: "Nairobi",
  subRegion: "Nairobi (Mombasa Road / Airport Transit Corridor)",
  ecosystem: "Urban transport hub bordered by an industrial-residential ecotone, located less than 1km from the Nairobi SGR Terminus (Syokimau) and 4km from Jomo Kenyatta International Airport (JKIA)",
  propertyType: "High-Tech Airport Hotel / Urban Transit Landmark",
  accommodationStyle: "Ultra-modern, tech-forward contemporary luxury featuring smart room automated controls, automated window treatments, plush marble finishes, and high-thread-count Egyptian cotton bedding",
  locationDetail: "Argyle Hotel Group (AHG); 231 luxury smart rooms and executive suites across 6 floors; established 2023",
  nearestAirstrips: ["Jomo Kenyatta International Airport (JKIA) — primary, 4km/~5min", "Wilson Airport (WIL) — secondary, ~14km/~20min via Expressway"],
  nearestGate: "Nairobi National Park East Gate / Main Gate (~12km)",
  accessibilityNotes: "Directly off Mombasa Road at the Syokimau interchange with immediate access to the Nairobi Expressway ramp. Offers seamless, complimentary airport shuttle transfers for arriving and departing passengers.",
  priceRangeMinUsd: 130,
  priceRangeMaxUsd: 450,

  // Self-stated "Mid" tier; midpoint of $130-450 = $290, landing in Value ($150-299), not
  // Mid-Range. Price-guide midpoint overrides self-stated tier.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Medina Palms", "AfroChic", "Governors' Camp"],

  rawSourceJson: {
    officialBrandName: "Argyle Grand Hotel Nairobi Airport",
    yearEstablished: "2023",
    unitBreakdown: "231 luxury smart rooms and executive suites across 6 floors",
    priceRange: "$130-450 USD per room per night, depending on room category and transit package.",
  },

  experienceDna: {
    // "Elegant," "Peaceful," "Social" are all canonical as-stated.
    emotionalTone: ["Elegant", "Peaceful", "Social"],

    // Source states "Decompression Retreat | Quiet Luxury" — the same non-canonical pattern
    // resolved to Wellness + Luxury Escape four times previously. Founder confirmed a different
    // resolution here: Transit Convenience + Wellness, leading with the property's actual defining
    // trait (airport/rail proximity is the entire raison d'être) rather than following the literal
    // pattern regardless of fit.
    energyType: ["Transit Convenience", "Wellness"],

    experiencePace: "Fast", // source stated "Fast-paced" — terminology cleanup only

    // "Contemporary Luxury" matches directly and cleanly — first time with zero ambiguity.
    comfortPhilosophy: ["Comfort Luxury"],
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // "Opening Immersion (The Logistical Launchpad) or Recovery/Reset (The Rail-to-Air Transit
    // Bridge)" hedge contained TWO literal canonical terms, so it did not qualify for standard
    // single-term auto-resolve (same issue as PrideInn Flamingo). The doc genuinely frames this
    // hotel as serving both roles depending on itinerary position, but the schema field is
    // single-valued. Founder confirmed Opening Immersion as primary, matching the doc's own
    // signature memory and "Logistical Launchpad" framing, which leads with arrival.
    // Nairobi sub-phase: Opening Immersion x1 (first lodge).
    journeyRole: "Opening Immersion",

    // idealTravelersPrimary: clean one-to-one match — all four doc-listed categories align exactly
    // with the four ideal archetypes below (after correction), no drops or additions needed.
    idealTravelersPrimary: ["Burned-out Executives", "Families", "First-Time Safari Travelers", "Slow Travelers"],
    idealTravelersSecondary: [],

    intensityScore: 3,
    relaxationScore: 8,
    authenticityScore: 5,
    premiumScore: 8,
    adventureScore: 1,
    privacyScore: 7,
    wildlifeExperienceScore: 1,
    culturalImmersionScore: 3,
    familySuitabilityScore: 7,
    comfortScore: 9,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "5-10 minutes from JKIA; 2 minutes (less than 1km) to Syokimau SGR Terminus; 20 minutes to Wilson Airport (WIL) via Nairobi Expressway",
    seasonalAccessibility: "100% accessible year-round regardless of season or weather, fully backed by paved highways and elevated expressway infrastructure",
    electricitySystem: "24/7 continuous municipal power backed by heavy-duty commercial auto-switch backup generators",
    powerReliability: "High",
    waterReliability: "High — municipal supply integrated with commercial-grade filtration, purification systems, and instantaneous high-pressure hot water infrastructure",
    internetAvailability: "High-speed enterprise Wi-Fi throughout all rooms, conference facilities, and public spaces",
    mobileNetwork: "Full 4G/5G mobile connectivity on Safaricom and Airtel networks",
    medicalAccess: "Fast access to top-tier private medical facilities, including The Nairobi Hospital (Southfield Outpatient branch), MP Shah Hospital (South C), and emergency medical transport services via JKIA corridor",
    childFriendly: true, // "Moderate" per source, resolved true per standard precedent
    mobilityFriendly: true, // "High" per source, unambiguous
    operationalLimitations: [
      "Service bottlenecks can occur during simultaneous mass arrivals (e.g., SGR train deboarding or overlapping international flight landings)",
      "Geographic isolation from central city cultural and fine-dining hubs",
    ],
  },

  travelerMatches: [
    {
      fitType: "ideal",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "High",
      reasoning: "Smart room controls, high-speed connectivity, dead-silent acoustic soundproofing, and complete structural efficiency allow seamless decompression and uninterrupted work or sleep.",
      supportingSignals: ["Comfort score 9/10", "Relaxation score 8/10", "Dead-silent acoustic soundproofing"],
      mismatchConditions: ["Must accept an urban airport corridor setting rather than a secluded rural estate"],
    },
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "High",
      reasoning: "Highly reassuring, predictable 5-star hardware and security eliminate arrival anxiety after long-haul flights before embarking on bush itineraries or SGR coast trains.",
      supportingSignals: ["Premium score 8/10", "Predictable 5-star hardware", "Secure perimeter gates"],
      mismatchConditions: ["Lacks \"authentic African\" safari design or bush aesthetics"],
    },
    // CORRECTED ARCHETYPE: source doc listed "The Family Steward," not canonical. Founder
    // confirmed remapping to The Multi-Generational Legacy Family under Families, per established
    // precedent (4th recurrence of this exact correction).
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Multi-Generational Legacy Family",
      matchStrength: "Moderate",
      reasoning: "Stress-free transfers, family room configurations, full-sized swimming pool, and predictable international dining remove logistical friction for multi-generational groups.",
      supportingSignals: ["Family suitability score 7/10", "Family room configurations", "Full-sized swimming pool"],
      mismatchConditions: ["Minimal outdoor play space beyond the courtyard pool area"],
    },
    // REMAPPED: source doc listed "The Sanctuary Seeker (Slow Travelers)." Sanctuary Seekers is
    // canonically native to Honeymooners, but the doc's rationale (spa, courtyard gardens, peaceful
    // buffer against travel fatigue) has zero romantic framing — pure decompression. Founder
    // confirmed remapping to The Biophilic Restorer (The Nervous-System Reset) under Slow
    // Travelers, which matches this framing precisely.
    {
      fitType: "ideal",
      category: "Slow Travelers",
      archetype: "The Biophilic Restorer",
      matchStrength: "Moderate",
      reasoning: "Excellent spa facilities (sauna, steam room, massage therapies) and courtyard gardens provide a peaceful buffer against travel fatigue.",
      supportingSignals: ["Relaxation score 8/10", "Spa, sauna, and steam room", "Courtyard gardens"],
      mismatchConditions: ["Surrounding area lacks walkable parks or high-end external shopping"],
    },
    // REMAPPED: source doc listed "The Solo Wilderness Purist (Solo Explorers)," not canonical.
    // Founder confirmed remapping to The Solitary Ascetic (The Silence Seeker) under Solo
    // Explorers.
    {
      fitType: "poorFit",
      category: "Solo Explorers",
      archetype: "The Solitary Ascetic",
      matchStrength: "Low",
      reasoning: "The commercial, high-tech, urban transit setting directly conflicts with desires for raw, remote nature and low-impact eco-lodgings.",
      supportingSignals: [],
      mismatchConditions: ["Disappointment with the lack of natural wilderness and the presence of modern high-tech infrastructure"],
    },
    // DROPPED: incompatible archetype "The Culture & Heritage Collector" — no canonical equivalent
    // anywhere in the 38 archetypes.
  ],

  journeyIntelligence: {
    idealStayDuration: "1 night (surgical transit stopover)",
    recommendedPositionNote: "\"Opening Immersion (The Logistical Launchpad) or Recovery/Reset (The Rail-to-Air Transit Bridge)\" hedge contained two literal canonical terms. Founder confirmed Opening Immersion as primary. Nairobi sub-phase: Opening Immersion x1 (first lodge).",
    whatShouldComeBefore: "Long-haul international flight arrival into JKIA, or arrival from the Kenyan Coast via the Madaraka Express SGR train at Syokimau Terminus",
    whatShouldComeAfter: "Morning transfer to Wilson Airport for bush charters, overland safari drive into the Rift Valley/Amboseli, or direct international flight departure",
    emotionalTransitionRationale: "Converts flight/rail anxiety into absolute control and physical relief. Shields the traveler from highway chaos while resetting circadian rhythms through wellness treatments and silent sleep environment.",
  },

  narrative: {
    whyChosen: "An ultra-modern, tech-forward airport sanctuary located steps from the SGR Terminus, offering premium soundproofed smart suites and deep wellness recovery for seamless luxury travel transits.",
    bestUsedFor: "Itineraries requiring tight, time-sensitive connections between JKIA and the SGR train; corporate travelers, luxury transits, and guests prioritizing top-tier bedding, silent acoustics, and immediate proximity to departure gates.",
    lessSuitableFor: "A multi-day leisure base for exploring Nairobi's suburban sights (Karen/Gigiri), as Mombasa Road traffic will create severe logistical friction; clients seeking an intimate, boutique, or distinctly \"African-themed\" safari lodging experience.",
    overview: "The Argyle Grand Hotel functions as a high-tech, hyper-polished logistical gateway within the Swafaris framework. Positioned squarely between the SGR Terminus and JKIA, its emotional identity is defined by uncompromising modern comfort and structural intelligence. Unlike properties that rely on historical romance or faux-safari aesthetics, the Argyle Grand leans completely into 5-star contemporary efficiency. The atmosphere is grand, clean, and highly secure. The sensory experience centers around sprawling, polished marble lobbies, rooms fitted with ultra-luxurious Egyptian cotton sheets, and unexpected pockets of green serenity within its courtyard gardens. It is engineered to feel like a premium urban oasis that acts as a soothing buffer against the abrasive chaos of major transport corridors.",
    emotionalFeel: "The psychological atmosphere at the Argyle Grand is one of absolute control and systematic relief. For an international arrival, stepping from the chaotic terminal tarmac directly into a seamless complimentary shuttle and then into a smart, silent suite brings an immediate sense of relief. The design of the hotel — with its wide corridors and automated interior controls — makes the guest feel anchored and insulated. The background rhythm is smooth and corporate, which provides reassurance to travelers looking to shed the vulnerability of long-haul travel or demanding bush tracks.",
    sensorySignature: {
      visual: ["Sprawling polished marble lobbies", "Sleek ambient smart-lighting", "Automated floor-to-ceiling drapes", "Lush green courtyard gardens offset by modern glass architecture"],
      auditory: ["Dead-silent, acoustic-sealed guest rooms completely isolating exterior highway traffic and jet engines", "Ambient soft lounge music in public spaces"],
      olfactory: ["Subtle luxury hotel diffuser fragrances", "Fresh spa aromatherapy oils", "Rich coffee and wok aromas from the multi-cuisine dining rooms"],
    },
    positiveSignals: [
      "Unbeatable SGR & Airport Proximity — a 2-minute drive to the Syokimau SGR station or a 5-minute shuttle to JKIA makes it a flawless link for coast-to-capital itineraries",
      "High-Tier Smart Room Hardware — smart room controls, automated window treatments, and high-tech bathrooms add genuine premium convenience",
      "Excellent Soundproofing Integrity — despite immediate proximity to major highways and flight paths, guest rooms remain dead silent",
      "Comprehensive Wellness Facilities — a functional spa, sauna, steam room, and outdoor pool let travelers actively sweat out jet lag or safari dust",
    ],
    negativeSignals: [
      "Geographic Culinary Isolation — lacks high-end independent dining options or walkable luxury retail in the immediate external vicinity",
      "Culinary Orientation Biases — multi-cuisine buffets slant noticeably toward Asian/Eastern selections, which can feel mismatched for guests seeking local traditional or Western comfort options",
      "Occasional Service Cadence Bottlenecks — front desk and dining pacing can experience minor slowdowns during peak arrival waves",
    ],
    hiddenGems: [
      "Integrated manager's reception and executive club structure treats transiting guests with hospitality usually reserved for boutique city-center properties; the Syokimau train station also serves as a traffic-immune transfer mechanism for coast-to-capital circuits",
    ],
    signatureMemory: "Stepping out of the intense East African sun into a dead-silent, air-conditioned smart suite, adjusting the automated drapes with a single touch, and heading down to the courtyard pool spa for a post-flight recovery session.",
    expectationManagement: "Travelers must understand this is an ultra-modern, high-tech transit hotel adjacent to major transport corridors, not a suburban garden estate (like Karen) or a wilderness safari lodge.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Itineraries requiring tight, time-sensitive connections between JKIA and the SGR train",
      "Corporate travelers, luxury transits, and guests prioritizing top-tier bedding, silent acoustics, and immediate proximity to departure gates",
    ],
    doNotRecommendConditions: [
      "A multi-day leisure base for exploring Nairobi's suburban sights (Karen/Gigiri)",
      "Clients seeking an intimate, boutique, or distinctly \"African-themed\" safari lodging experience",
    ],
    confidenceLevel: "High Confidence",
    competitiveAdvantage: "Brand-new 2023 construction hardware, direct Expressway/SGR access, automated smart suites, superior acoustic insulation, and complete on-site spa/wellness infrastructure.",
    mainLimitation: "Industrial-residential transit hub location with no external walkable entertainment or cultural attractions.",
    positioningSummary: "An ultra-modern, tech-forward airport sanctuary located steps from the SGR Terminus, offering premium soundproofed smart suites and deep wellness recovery for seamless luxury travel transits.",
  },

  pairings: [
    {
      pairedEntity: "Medina Palms / AfroChic (Watamu/Diani)",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Pairs perfectly with luxury coastal properties via the SGR line for coast-to-capital itineraries.",
    },
    {
      pairedEntity: "Governors' Camp (Maasai Mara)",
      pairingCategory: "Complementary Region",
      rationale: "High-intensity wilderness properties requiring a crisp morning departure out of Nairobi via Wilson Airport transfers.",
    },
    {
      pairedEntity: "A high-intensity safari camp or a relaxed beach retreat",
      pairingCategory: "Complementary Experience",
      rationale: "Argyle Grand serves as the high-tech, low-stress bridge between rail, air, and wilderness.",
    },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Swafaris destination assessments", "Operational property audits", "Guest travel diaries", "Regional rail/air transit logs"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [],
  },
};