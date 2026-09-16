export const baobabBeachResortSpa = {
  id: "baobab-beach-resort-spa-diani",
  name: "Baobab Beach Resort & Spa",
  country: "Kenya",
  region: "Coast",
  subRegion: "Diani Beach (South Coast, Kwale County)",
  ecosystem: "Marine ecosystem — coastal canopy integrated into a protected tropical indigenous forest fronting the Indian Ocean",
  propertyType: "Premium All-Inclusive Beach Resort & Spa",
  accommodationStyle: "Sleek, modernized coastal contemporary guest wings embedded in an old-growth indigenous forest dotted with prehistoric baobab trees",
  locationDetail: "Independently owned and managed; ~323 rooms across three wings (Baobab Main, Maridadi, Kole Kole) on an 80-acre coral-cliff compound; established ~1974, extensively renovated and modernized 2024-2026",
  nearestAirstrips: ["Ukunda Airstrip / Diani Airstrip (UKA)"],
  nearestGate: "N/A (coastal property); nearest terrestrial protected area is Shimba Hills National Reserve Gate, ~45 min / 30km inland",
  accessibilityNotes: "Sprawling 80-acre property on low coral cliffs. Ground terrain includes undulating garden paths, stepped inclines between wings, and cliffside stairwells to the beach.",
  priceRangeMinUsd: 220,
  priceRangeMaxUsd: 450,

  // Midpoint $335 lands in Mid-Range ($300-499), matching the doc's own stated "Mid" tier.
  // Confirmed clean, no upgrade/downgrade.
  rawMarketTier: "Mid",
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range",

  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: ["Salt Lick Safari Lodge", "Angama Mara", "Ol Tukai Lodge", "Tortilis Camp"],

  rawSourceJson: {
    officialBrandName: "Baobab Beach Resort & Spa",
    yearEstablished: "~1974 (extensively renovated and modernised 2024-2026)",
    unitBreakdown: "~323 rooms across three wings: Baobab Main Wing, Maridadi Wing, Kole Kole Wing",
    priceRange: "$220-450 USD per person/night, All-Inclusive, depending on room category, wing, and season",
  },

  experienceDna: {
    // "Cinematic" is not a valid emotional tone -> substituted to Inspirational per established
    // precedent. "Social" and "Wild" are canonical as-is.
    emotionalTone: ["Inspirational", "Social", "Wild"],

    // Neither "High-energy safari" nor "Sensory-rich" is canonical. First genuinely new energy
    // framing pattern in the Coast sub-phase (departs from the "coastal decompression / quiet
    // luxury" phrasing of the two prior Diani lodges). Founder confirmed Adventure + Wildlife
    // Focus, matching the doc's actual wildlife/canopy/active-excursion content.
    energyType: ["Adventure", "Wildlife Focus"],

    experiencePace: "Fast", // source stated "Fast-paced" — terminology cleanup only

    comfortPhilosophy: ["Comfort Luxury"],
    // Price tier confirmed clean (not upgraded/downgraded) — conservatism default does not apply
    // per standing rule; decided purely on merits. Founder confirmed Contemporary Comfort over
    // Modern Luxury, both bridging to Comfort Luxury.
    comfortPhilosophyDetailed: "Contemporary Comfort",

    // Stated field "Coastal Decompression / Opening Immersion" — Opening Immersion is directly
    // canonical. FLAGGED NARRATIVE CONTRADICTION (Sirai-House-style): the doc's own Psychological
    // Sequencing Rationale explicitly states Baobab should be positioned "at the end of an
    // itinerary... before returning home," and the What-Comes-Before/After fields describe a
    // safari-then-Baobab-then-departure structure — the structural opposite of an opener. Founder
    // reviewed the conflict and confirmed Opening Immersion, taking the stated field over the
    // sequencing language. Coast tally: Grand Finale x1 (Almanara), Recovery x1 (Diani Sea
    // Resort), Opening Immersion x1 (Baobab).
    journeyRole: "Opening Immersion",

    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Social Explorers"],
    idealTravelersSecondary: [],

    intensityScore: 8,
    relaxationScore: 6,
    authenticityScore: 7,
    premiumScore: 8,
    adventureScore: 7,
    privacyScore: 3,
    wildlifeExperienceScore: 8,
    culturalImmersionScore: 5,
    familySuitabilityScore: 9,
    comfortScore: 8,
    socialDynamic: "Social",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "10-15 min from Ukunda Airstrip (UKA); 1.5-2.5 hours from Moi International Airport (Mombasa) subject to Likoni Ferry or Diani bypass traffic",
    seasonalAccessibility: "Open year-round",
    rainySeasonImpact: "Kusi monsoon (May-Oct): cooler breezes, potential seaweed drift. Kaskazi monsoon (Nov-Apr): warm, calm ocean waters",
    electricitySystem: "24-hour grid power backed by heavy-duty commercial generators for local coastal power drops",
    powerReliability: "High",
    waterReliability: "High — centralized solar photovoltaic and electric water heating, reliable hot water across all wings",
    internetAvailability: "Wi-Fi throughout public areas, restaurants, pools, and guest room blocks across all three wings",
    mobileNetwork: "Excellent 4G/LTE coverage across Safaricom and Airtel",
    medicalAccess: "On-site first-aid and resident medical personnel; 10-min transit to Diani Beach Hospital (private, ICU + emergency capable); emergency air-evacuation via Ukunda Airstrip",
    // Stated cleanly as "High" (not graded) — Rafiki Kids Club, cascading pools, wide lawns,
    // archery, tennis, family rooms within secure perimeter. Maps directly to true.
    childFriendly: true,
    // Stated as graded "Low to Moderate" — per standing rule this required explicit founder
    // confirmation rather than auto-applying precedent. Substance reads more severe than the
    // Almanara "Moderate" case: 80-acre compound, undulating paths, multi-level stairwells
    // between wings, cliffside stairs to the beach. Founder confirmed false.
    mobilityFriendly: false,
    operationalLimitations: [
      "Long walking distances across the 80-acre compound",
      "Aggressive resident primates requiring locked balcony doors",
      "House-pour all-inclusive alcoholic beverages can be inconsistent",
      "High dining room volume during peak season occupancy",
    ],
  },

  travelerMatches: [
    // CORRECTED CATEGORY: source doc listed "The Early-Stage Nurturers & Bonded Cohorts
    // (Families)" as a combined entry. Bonded Cohort is a Students archetype, always misapplied
    // to family contexts per recurring fix pattern (Lewa Wilderness, Ol Malo, Sirai House
    // precedent). Dropped; Early-Stage Nurturers retained and remains sufficient support for
    // Families in idealTravelersPrimary.
    {
      fitType: "ideal",
      category: "Families",
      archetype: "The Early-Stage Nurturers",
      matchStrength: "High",
      reasoning: "The ideal Coastal Decompression anchor. Parents can relax knowing all-inclusive dining is taken care of, while children are engaged by the Rafiki Kids Club, sports facilities, and cascading pools.",
      supportingSignals: ["Family suitability score 9/10", "Dedicated Rafiki Kids Club", "Multiple cascading pools and wide open lawns"],
      mismatchConditions: ["Requires parental oversight around cliff edges, pool perimeters, and food interaction with resident monkeys"],
    },
    {
      fitType: "ideal",
      category: "First-Time Safari Travelers",
      archetype: "The Checklist Maximalist",
      matchStrength: "High",
      reasoning: "Serves as a seamless extension of the safari experience. The indigenous canopy populated by primates provides a 'jungle-on-the-ocean' atmosphere while delivering high-tier resort comfort.",
      supportingSignals: ["Wildlife experience score 8/10", "High-tier resort infrastructure", "Low-fatigue transfer from Ukunda Airstrip"],
      mismatchConditions: ["Large resort scale and buffet dining cater to broad international volumes rather than intimate boutique curation"],
    },
    // CORRECTED CATEGORY: source doc listed "The Status-Network Curator / Active Socialite
    // (Luxury Adventurers)" as a combined entry under the wrong top-level category. Status-Network
    // Curator belongs to Social Explorers, not Luxury Adventurers, per standing fix pattern.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Status-Network Curator",
      matchStrength: "Moderate",
      reasoning: "Provides a high-energy, amenity-dense environment with an iconic multi-tier cascading pool, specialty à la carte venues (Marhaba and Tangezi), tennis courts, and vibrant social lounges.",
      supportingSignals: ["Social Dynamic: Social", "Specialty à la carte dining venues", "Vibrant social lounge infrastructure"],
      mismatchConditions: ["House-pour drinks may require upgrading to top-shelf labels", "Highly populated public spaces during peak seasons"],
    },
    // "Active Socialite" was an invented archetype with no real equivalent. Founder confirmed
    // remap to The Affectionate Host (Social Explorers) as closest fit given the social-lounge /
    // amenity-dense framing, rather than dropping outright.
    {
      fitType: "ideal",
      category: "Social Explorers",
      archetype: "The Affectionate Host",
      matchStrength: "Moderate",
      reasoning: "Remapped from source doc's invented 'Active Socialite' archetype — closest real equivalent given the social-lounge, amenity-dense, communal framing described. Provides a high-energy, amenity-dense environment with an iconic multi-tier cascading pool and vibrant social lounges.",
      supportingSignals: ["Social Dynamic: Social", "Vibrant, communal amenity-dense environment", "Specialty dining and social lounge venues"],
      mismatchConditions: ["Highly populated public spaces during peak seasons"],
    },
    {
      fitType: "poorFit",
      category: "Honeymooners",
      archetype: "The Sanctuary Seekers",
      matchStrength: "Low",
      reasoning: "Large resort footprint (~300+ rooms), bustling family crowds, and active animation zones disrupt romantic isolation unless booked specifically into exclusive Kole Kole seafront suites.",
      supportingSignals: [],
      mismatchConditions: ["Severe culture shock if transitioning directly from an ultra-exclusive, hyper-private wilderness camp", "Privacy score only 3/10"],
    },
    {
      fitType: "poorFit",
      category: "Burned-out Executives",
      archetype: "The Incognito Ascetic",
      matchStrength: "Low",
      reasoning: "High-energy social atmosphere, large dining halls, active pool zones, and physical movement required across 80 acres prevent silent, meditative digital detox or total rest.",
      supportingSignals: [],
      mismatchConditions: ["Ambient resort noise and high guest volume impede deep mental decompression"],
    },
    // DROPPED: "The Physically Restricted Traveler (Mobility Impaired)" — pure mobility-impairment
    // framed invented archetype, matches the recurring dropped pattern exactly. Concern is already
    // captured operationally via mobilityFriendly (false) and operationalLimitations above.
    // CORRECTED CATEGORY: Luxury Adventurers removed from idealTravelersPrimary. Its only stated
    // support (Status-Network Curator / Active Socialite) was corrected/remapped fully into Social
    // Explorers per founder decision — Social Explorers added to idealTravelersPrimary in its place.
  ],

  journeyIntelligence: {
    idealStayDuration: "3 to 5 nights",
    recommendedPositionNote: "Journey Role confirmed as Opening Immersion by founder despite a narrative contradiction: the source doc's own Psychological Sequencing Rationale describes end-of-itinerary positioning ('before returning home'), which would normally point toward Recovery or Grand Finale. Founder took the stated field over the sequencing language. Coast sub-phase running tally: Grand Finale x1, Recovery x1, Opening Immersion x1.",
    whatShouldComeBefore: "High-intensity wilderness safaris in southern or northern Kenya circuits (e.g., Maasai Mara, Amboseli, Tsavo East/West, or Samburu)",
    whatShouldComeAfter: "Direct transit to Ukunda Airstrip (UKA) for flights to Nairobi (WIL/NBO) or road transfer to Mombasa for onward international departures",
    emotionalTransitionRationale: "Shifts travelers from early-morning vigilance, bumpy bush drives, and safari dust into a vibrant, schedule-free, high-amenity coastal holiday.",
  },

  narrative: {
    whyChosen: "A premier, high-capacity clifftop resort on 80 acres of protected indigenous forest, blending vibrant all-inclusive amenities with rich resident wildlife presence.",
    bestUsedFor: "Family groups, active multi-generational cohorts, or mid-to-upper-tier luxury travelers seeking a reliable, high-amenity, all-inclusive beach resort with modern rooms and rich wildlife presence.",
    lessSuitableFor: "Introverted travelers seeking silent luxury, honeymoon couples demanding private plunge pools, mobility-impaired guests unable to navigate stepped multi-acre terrain, or guests uncomfortable with close monkey proximity.",
    overview: "Baobab Beach Resort & Spa is a premier, high-capacity vacation kingdom positioned on low coral cliffs overlooking Diani Beach. Sprawling across 80 acres of protected, old-growth indigenous forest dotted with ancient baobab trees, the property seamlessly integrates a wild coastal canopy with modernized guest wings (following comprehensive 2024-2026 renovations across the Baobab, Maridadi, and Kole Kole wings). Elevating guests above the public beach, it operates as a self-contained, all-inclusive sanctuary engineered for active, high-amenity beach holidays.",
    emotionalFeel: "Uninhibited, social, and vibrantly alive. Operating on a premium all-inclusive model, Baobab removes daily financial tracking, allowing guests to adopt a relaxed mindset. The daily atmosphere is expansive, kinetic, and communal, though dining hours in main buffets can feel high-velocity during peak occupancy.",
    sensorySignature: {
      visual: ["Multi-tier cascading infinity pool framing the Indian Ocean", "Ancient baobab trunks", "Emerald lawns", "Crisp white architectural wings"],
      auditory: ["Tropical ocean breezes sweeping up coral cliffs", "Chatter of Colobus, Sykes, and Vervet monkeys in the canopy", "Rustling forest leaves", "Ambient poolside life"],
      olfactory: ["Fresh ocean sea salt", "Tropical blooms", "Wood-smoked grills", "Fresh coastal air"],
    },
    positiveSignals: [
      "The Wildlife Ecotone — thriving resident populations of Colobus, Sykes, and Vervet monkeys, making the resort feel like a living jungle on the ocean",
      "2024-2026 Modern Transformation — extensive wing-wide renovations delivering crisp marble bathrooms, modern ambient lighting, high-end coastal textures",
      "The Multi-Tier Cascade Pool — architectural hallmark offering multi-level visual frames of the turquoise Indian Ocean",
      "Culinary Diversity — high culinary execution across live cooking stations and specialty à la carte dining venues (Marhaba and Tangezi)",
      "Elevated Cliff Position — natural coral elevation provides organic privacy from public beach traffic without heavy fencing",
    ],
    negativeSignals: [
      "Monkey Opportunism — highly habituated resident primates will enter rooms with unlocked balcony doors or snatch food along open garden paths",
      "Spatially Exhausting Layout — the 80-acre footprint requires long, stepped, or undulating walks between outer room blocks and central dining or beach access points",
      "Inconsistent House Beverages — all-inclusive house alcoholic spirits and cocktails can feel uninspired, requiring an extra charge for premium top-shelf labels",
      "Legacy AC Performance — unrenovated pockets or older room placements may feature noisy wall AC units struggling against coastal humidity",
    ],
    hiddenGems: [
      "Double-Beach Frontage Advantage — uniquely positioned on a coral point bridging Diani Beach with Galu Beach; guests can turn left for vibrant Diani energy or right for quieter Galu walks; elevated coral cliff boundary creates an organic barrier against beach vendor traffic",
    ],
    signatureMemory: "Watching a family of Colobus monkeys leap through the ancient baobab canopy from the edge of the multi-tier cascading infinity pool, as the Indian Ocean stretches to the horizon.",
    expectationManagement: "Guests must understand this is an active, sprawling 80-acre resort with over 300 rooms. Balcony doors must remain locked to prevent primate entry, walking distances between wings are significant, and public spaces are vibrant and social rather than silently isolated.",
    idealNights: "REQUIRES_VERIFICATION",
  },

  recommendationNotes: {
    recommendConditions: [
      "Family group, active multi-generational cohort, or mid-to-upper-tier luxury traveler",
      "Seeking a reliable, high-amenity, all-inclusive beach resort with modern rooms",
      "Values rich resident wildlife presence",
    ],
    doNotRecommendConditions: [
      "Introverted traveler seeking silent luxury",
      "Honeymoon couple demanding private plunge pools",
      "Mobility-impaired guest unable to navigate stepped, multi-acre terrain",
      "Guest uncomfortable with close monkey proximity",
    ],
    confidenceLevel: "High Confidence (specifically for families and active social travelers)",
    competitiveAdvantage: "Complete 2024-2026 room hardware modernization, 80 acres of protected indigenous forest with dual-beach access (Diani/Galu), elevated cliff privacy, and iconic multi-tier cascade pools.",
    mainLimitation: "Large property footprint requiring extensive walking, and persistent primate food-snatching risks.",
    positioningSummary: "A magnificent, freshly modernized clifftop resort commanding Diani's prime shoreline, seamlessly blending a vibrant all-inclusive lifestyle with a wild, monkey-filled indigenous canopy — making it the definitive premier haven for active families and premium social travelers.",
  },

  pairings: [
    {
      pairedEntity: "Salt Lick Safari Lodge",
      pairingCategory: "Complementary Ecosystem",
      rationale: "Pair with the rugged, red-dirt landscapes of Tsavo East/West or Taita Hills Wildlife Sanctuary. Moving from the dry, dusty plains directly to Diani's coastal canopy creates a compelling landscape contrast.",
    },
    {
      pairedEntity: "Angama Mara / Ol Tukai Lodge",
      pairingCategory: "Complementary Region",
      rationale: "Combine with the Maasai Mara or Amboseli National Park. Follows an intense, early-morning safari circuit with an unpretentious, all-inclusive coastal recovery phase.",
    },
    {
      pairedEntity: "Boutique 6-tent wilderness camps (Tortilis Camp and similar)",
      pairingCategory: "Complementary Experience",
      rationale: "Pair with highly intimate, low-capacity boutique safari camps. This creates dynamic contrast between deep bush solitude and a grand, socially vibrant resort stay.",
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
      "2024-2026 renovation completion audits",
    ],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Current seasonal pricing variations for top-shelf beverage package add-ons",
    ],
  },
};