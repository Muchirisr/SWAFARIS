export const galuEcolodge = {
  id: "galu-ecolodge-diani",
  name: "Galu Ecolodge",
  country: "Kenya",
  region: "Coast",
  subRegion: "Diani Beach (South Diani / Galu Kinondo, Kwale County)",
  ecosystem: "Coastal, Marine Ecosystem — lush coastal forest and white sand shoreline",
  propertyType: "Eco-Lodge / Beachfront Eco-Resort / Coastal Sanctuary",
  accommodationStyle: "Standalone beachfront bungalows, open A-frame cabins, ocean-view villas, and cozy garden rooms set under a mature 4-acre tree canopy",
  locationDetail: "Independently owned and managed; ~11-15 units (Beach Bungalows, Ocean View Villas, Deluxe Double Rooms, Family Units, limited overland camping); established ~2018, recently renovated",
  nearestAirstrips: ["Ukunda Airstrip (UKA) — 9km / 15-20 min drive"],
  nearestGate: "N/A (coastal beachfront); nearest cultural heritage site gate is Kaya Kinondo Sacred Forest, 3.1km",
  accessibilityNotes: "Accessible year-round via paved Diani Beach Road, ending on a short unpaved secondary access track. Flat coastal garden ground, sandy pathways, raised wooden deck platforms.",
  priceRangeMinUsd: 50,
  priceRangeMaxUsd: 220,

  // Doc self-states "Budget" tier, which is retired and folds directly into Value per locked
  // rule. Midpoint of $135 (per-room, treated as-stated per established Diani Sea Resort
  // precedent — no occupancy adjustment) is also independently below the $150 Value cutoff.
  // Both paths confirm Value with no ambiguity.
  rawMarketTier: "Budget",
  swafarisExperienceTier: "Tier 1",
  budgetTier: "Value",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Satao Camp", "Kaya Kinondo Sacred Forest"],

  rawSourceJson: {
    officialBrandName: "Galu Ecolodge",
    yearEstablished: "~2018 (recently renovated)",
    unitBreakdown: "~11-15 units: Beach Bungalows, Ocean View Villas, Deluxe Double Rooms, Family Units, limited overland camping grounds",
    priceRange: "$50-220 USD per room/night, Bed & Breakfast / Full Board, depending on room category and season. Treated per-room as-stated, no occupancy adjustment, per established Diani Sea Resort pricing methodology.",
  },

  experienceDna: {
    // "Intimate" auto-resolved to Romantic per standing rule: Sanctuary Seekers is an explicitly
    // compatible archetype AND Social Dynamic is Balanced (not fully Isolated) — the exact
    // condition specified for auto-resolution, no founder call needed here. "Peaceful" and
    // "Rustic" canonical as-is. "Unpretentious" was not canonical — founder confirmed adding
    // Restorative (matches the recovery/reset emotional arc) rather than Reflective.
    emotionalTone: ["Romantic", "Peaceful", "Rustic", "Restorative"],

    // Neither "Decompression Retreat," "Restorative," nor "Barefoot Ease" is canonical.
    // "Decompression Retreat"/"Restorative" both pointed toward Wellness (redundant if both kept).
    // Founder confirmed Wellness + Nature Immersion, reading "Barefoot Ease" as
    // nature-connection/grounding rather than digital-detox framing.
    energyType: ["Wellness", "Nature Immersion"],

    experiencePace: "Slow",

    comfortPhilosophy: ["Authentic Luxury"],
    // Budget->Value tier correction is a terminology fold-in, not a true market-position
    // upgrade/downgrade, so conservatism principle's applicability was ambiguous — resolved as a
    // genuine either/or on merits (Authentic Wilderness Simplicity vs. Rustic Immersion). Founder
    // confirmed Authentic Wilderness Simplicity, matching "genuine Swahili hospitality" and
    // rejection of "cold, polished hotel concrete" framing.
    comfortPhilosophyDetailed: "Authentic Wilderness Simplicity",

    // "Recovery/Reset" is directly canonical and stated as a primary hedge option — auto-resolves
    // per standing rule. No narrative contradiction: Psychological Sequencing Rationale explicitly
    // confirms "Recovery/Reset stop at the tail end of a high-vigilance safari," fully consistent
    // with the stated field. Coast tally: Grand Finale x1, Recovery x2, Opening Immersion x1.
    journeyRole: "Recovery",

    idealTravelersPrimary: ["Solo Explorers", "Slow Travelers", "Honeymooners", "Families"],
    idealTravelersSecondary: [],

    intensityScore: 2,
    relaxationScore: 9,
    authenticityScore: 8,
    premiumScore: 7,
    adventureScore: 4,
    privacyScore: 6,
    wildlifeExperienceScore: 5,
    culturalImmersionScore: 6,
    familySuitabilityScore: 8,
    comfortScore: 7,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "15-20 min from Ukunda Airstrip (UKA); 1.5-2 hours from Moi International Airport (MBA) or Mombasa SGR Station via Dongo Kundu Bypass / Likoni Ferry",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "High coastal humidity; secondary unpaved access road can become bumpy and muddy during heavy monsoon rains (April-May)",
    electricitySystem: "24/7 mains grid electricity supplemented by solar hot water heating; air conditioning available in select room categories",
    powerReliability: "High",
    waterReliability: "Moderate — solar photovoltaic water heating combined with municipal and borehole supply; hot water pressure and ramp times reflect low-impact eco-infrastructure thresholds",
    internetAvailability: "Complimentary high-speed fiber Wi-Fi across guest rooms, common lounges, and Madafoo's beachfront restaurant",
    mobileNetwork: "Strong 4G/5G cellular coverage (Safaricom/Airtel)",
    medicalAccess: "On-site basic first aid; multiple full-service medical centers and private hospitals (e.g., Diani Beach Hospital) with 24/7 ER and ICU facilities within 10-15 min drive",
    // Stated cleanly as "High" (not graded) — family room configurations, dedicated children's
    // pool section, outdoor play equipment, expansive flat sand/garden areas. Maps to true.
    childFriendly: true,
    // Stated as graded "Moderate to High" — per standing rule required explicit confirmation.
    // Ground-floor bungalow units and flat sandy pathways provide step-free navigation, with a
    // caveat that deep beach sand can impede wheelchair movement. Founder confirmed true.
    mobilityFriendly: true,
    operationalLimitations: [
      "Open-air dining exposure to coastal flies at breakfast and dusk mosquitoes",
      "Unpaved secondary access track friction during heavy rains",
      "Eco-water heater latency",
      "Open public social footprint at Madafoo's restaurant",
    ],
  },

  travelerMatches: [
    // CORRECTED CATEGORY: source doc listed this under invented category "Unpretentious Nature
    // Purists" with invented archetype name "The Checklist Minimalist / Slow Traveler." Neither is
    // canonical ("Checklist Minimalist" inverts the meaning of the real "Checklist Maximalist").
    // Founder confirmed remapping to The Biophilic Restorer (Slow Travelers), the closest real
    // archetype given the actual nature/quiet/organic-atmosphere fit rationale described.
    {
      fitType: "ideal",
      category: "Slow Travelers",
      archetype: "The Biophilic Restorer",
      matchStrength: "High",
      reasoning: "Remapped from source doc's invented 'Checklist Minimalist / Unpretentious Nature Purists' entry. Values a pristine, quiet shoreline and organic atmosphere over formal hotel rituals. Capitalizes on Galu's uncrowded white sand and quiet tropical grounds.",
      supportingSignals: ["Authenticity score 8/10", "4-acre mature tree canopy", "Uncrowded Galu beach frontage"],
      mismatchConditions: ["Must embrace open-air coastal nature (flies/mosquitoes) and rustic utility heating latency"],
    },
    {
      fitType: "ideal",
      category: "Solo Explorers",
      archetype: "The Social Catalyst",
      matchStrength: "Moderate",
      reasoning: "Madafoo's beachfront bar/restaurant provides a casual, welcoming hub to connect naturally with fellow travelers and local staff, while hammocks offer private reading nooks.",
      supportingSignals: ["Social Dynamic: Balanced", "Madafoo's as a natural social hub", "Private hammock/lounge pockets available"],
      mismatchConditions: ["Lacks high-density urban nightlife or formal executive lounge amenities"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Budget-Conscious
    // Honeymooners" — corrects to canonical Honeymooners.
    {
      fitType: "ideal",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Moderate",
      reasoning: "The Beach Bungalow tier provides direct, unobstructed ocean views, private patios, and romantic ocean breezes at a fraction of high-end boutique resort costs. Supports founder-confirmed Romantic emotional tone (auto-resolved per standing rule given Balanced social dynamic).",
      supportingSignals: ["Standalone Beach Bungalow tier with private patios", "Direct ocean views", "Social Dynamic: Balanced (not Isolated)"],
      mismatchConditions: ["Absence of private plunge pools, room-service butlering, or climate-sealed dining rooms"],
    },
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "Moderate",
      reasoning: "Family rooms, kids' pool section, outdoor playground, and wide beach sand give children safe room to explore.",
      supportingSignals: ["Family suitability score 8/10", "Dedicated children's pool section", "Multi-bed family room configurations"],
      mismatchConditions: ["Unpaved access tracks and open pool/seawall boundaries require standard parental supervision"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Luxury Ultra-Purists" —
    // corrects to canonical Luxury Adventurers.
    {
      fitType: "poorFit",
      category: "Luxury Adventurers",
      archetype: "The High-Octane Collector",
      matchStrength: "Low",
      reasoning: "Expects marble floors, formal white-glove butler service, fine dining, and pristine closed-glass climate control.",
      supportingSignals: [],
      mismatchConditions: ["Frustration over open-air dining, basic eco-amenities, and rustic utility latency"],
    },
    // CORRECTED CATEGORY: source doc listed under invented category "Secluded HNW Executives" —
    // corrects to canonical Burned-out Executives.
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "Madafoo's operates as an open beachfront social space, preventing complete, unpenetrated private resort isolation.",
      supportingSignals: [],
      mismatchConditions: ["Intermittent public social foot traffic compromises total executive privacy"],
    },
    // DROPPED: none — all source archetypes retained; category labels corrected as documented
    // above, one archetype (Checklist Minimalist) remapped to a real equivalent.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    recommendedPositionNote: "Recovery role auto-resolved per standing rule — no narrative contradiction; the Psychological Sequencing Rationale directly confirms Recovery/Reset positioning at the tail end of a high-vigilance safari. Coast sub-phase running tally: Grand Finale x1, Recovery x2, Opening Immersion x1.",
    whatShouldComeBefore: "A high-intensity bush safari (e.g., Tsavo East, Amboseli, or Maasai Mara) or an urban transit entry through Nairobi or Mombasa",
    whatShouldComeAfter: "Homebound international departure from Mombasa (MBA) / Nairobi (JKIA), or a culturally rich Swahili coast exploration (e.g., Lamu, Shimoni, or Wasini Island)",
    emotionalTransitionRationale: "Shifts the traveler from high-vigilance, early-morning safari game tracking to a slow, unscripted, barefoot rhythm anchored by the ocean tides.",
  },

  narrative: {
    whyChosen: "A pristine, uncrowded eco-coastal sanctuary on South Diani's quietest stretch of white sand, offering barefoot relaxation and authentic Swahili warmth at an accessible price point.",
    bestUsedFor: "Independent solo travelers, slow vacationers, couples, and budget-conscious travelers desiring Diani's finest shoreline outside corporate resort bubbles.",
    lessSuitableFor: "Clients who equate luxury exclusively with marble floors, formal butler service, climate-sealed glass dining rooms, and high-speed corporate amenities, or those highly sensitive to insects.",
    overview: "Galu Ecolodge occupies a brilliant geographic niche on the most pristine, uncrowded stretch of South Diani — known as Galu Beach. While northern Diani is characterized by high-rise, concrete resorts and high-density beach traffic, this property retains a footprint that feels like a classic, old-world coastal estate. Spanning a 4-acre plot of deep tropical gardens, the property subtly blends private beach bungalows, open A-frame cabins, ocean-view villas, and cozy rooms into an organic canopy of mature shade trees. The sensory design avoids cold, polished stone, prioritizing sand underfoot, weathered hardwoods, and open-front architecture anchored by Madafoo's, its thatched beachfront bar and restaurant.",
    emotionalFeel: "Centers around unpretentious comfort and psychological safety — an 'oasis of calm' and a 'home away from home.' It strips away formal luxury performance anxieties, inviting travelers to operate in total casual ease. Mornings are peaceful with barefoot walks along empty white sands, afternoons feature undisturbed hammock lulls under mature shade trees, and local staff deliver warm, maternal, and personalized care.",
    sensorySignature: {
      visual: ["Deep green tropical canopy opening directly onto powdery white sands", "Turquoise ocean swells", "Thatched roofs", "Rustic timber decks"],
      auditory: ["Sighing Indian Ocean tides", "Breeze rustling through coconut fronds", "Resident Colobus and Sykes monkeys calling from the canopy", "Soft acoustic waves"],
      olfactory: ["Salty sea breeze", "Fresh coconut", "Woodsmoke", "Tropical blossoms", "Freshly cooked seafood"],
    },
    positiveSignals: [
      "The Pristine Galu Beach Frontage — drastically cleaner, wider, and quieter than northern Diani with significantly fewer beach-vendor interruptions",
      "Charming, Multi-Zone Lounge Areas — abundance of thoughtful, private chill-out pockets, daybeds, and hammocks spread between the pool and sea wall",
      "Madafoo's Restaurant Consistency — high marks for fresh, unpretentious seafood and exceptional breakfast spreads",
      "Genuinely Helpful Staff Dynamics — warm, highly attentive care from local hospitality hosts",
    ],
    negativeSignals: [
      "The 'Eco' Insect & Fly Presence — open-air dining and lounge spaces attract persistent flies around breakfast hours and mosquitoes at dusk",
      "Unpaved Access Road Friction — the secondary access road can become rough, bumpy, and muddy during heavy rains",
      "Rustic Utility Thresholds — hot water systems and towel drying times can lag due to high coastal humidity and eco-friendly infrastructure setup",
    ],
    hiddenGems: [
      "The Beach Bungalow Tier — standalone bungalows offer direct, unobstructed ocean views, private patios, and immediate beach access tucked away from the central restaurant zone, delivering a premium front-row ocean view at a fraction of boutique hotel costs",
    ],
    signatureMemory: "Walking barefoot from your Beach Bungalow patio directly onto the soft, cool sand of Galu Beach at sunrise, sipping fresh coconut water from Madafoo's while watching local dhows glide across the turquoise horizon.",
    expectationManagement: "Travelers must embrace an unpretentious eco-coastal philosophy. Dining and lounging areas are open to the sea breeze and local insects, hot water operates on eco-heating parameters, access roads are rustic, and Madafoo's functions as an open, relaxed social space.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Client profile values a pristine, uncrowded beachfront location and eco-conscious ethos above material flashiness",
      "Independent solo travelers, slow vacationers, couples, and budget-conscious travelers",
      "Desires Diani's finest shoreline outside corporate resort bubbles",
    ],
    doNotRecommendConditions: [
      "Clients equate luxury exclusively with marble floors, formal butler service, or climate-sealed glass dining rooms",
      "High-speed corporate amenity expectations",
      "Highly sensitive to insects or demanding of pristine, ultra-modern bathroom utilities",
    ],
    confidenceLevel: "Medium-High Confidence",
    competitiveAdvantage: "Prime beachfront positioning on South Diani's quietest stretch (Galu Beach) with a lush 4-acre canopy, high-speed fiber Wi-Fi, and authentic barefoot charm at an unbeatably accessible rate.",
    mainLimitation: "Open-air tropical insect exposure, rustic utility heating thresholds, and unpaved secondary access track.",
    positioningSummary: "A charming, low-profile eco-coastal sanctuary tucked away on Diani's quietest stretch of white sand, offering barefoot relaxation, lush tropical gardens, and unpretentious warmth for authentic nature lovers.",
  },

  pairings: [
    {
      pairedEntity: "Satao Camp",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Moving from an unpretentious, wildlife-centric tented camp in the red wilderness of Tsavo straight to the casual, barefoot eco-luxury of Galu Beach feels cohesive and visually striking.",
    },
    {
      pairedEntity: "Kaya Kinondo Sacred Forest",
      pairingCategory: "Complementary Region",
      rationale: "Located less than 2 miles (3.1km) away, this ecosystem pairs flawlessly for an afternoon excursion, bridging a beach stay with deep, indigenous Mijikenda botanical and cultural history under local elder guidance.",
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
      "Seasonal grading schedules for the unpaved secondary access track off Diani Beach Road",
    ],
  },
};