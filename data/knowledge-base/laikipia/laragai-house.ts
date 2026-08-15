// data/knowledge-base/laikipia/laragai-house.ts
export const laragaiHouse = {
  id: "laragai-house", // NEW lodge, no existing DB record
  name: "Laragai House",
  country: "Kenya",
  region: "Laikipia",
  subRegion: "Borana Conservancy (Adjacent to Northern Frontier / Samburu Ecosystem)",
  ecosystem: "High-altitude semi-arid escarpment / Acacia savannah / Borana & Lewa conservancy interface",
  propertyType: "Exclusive-Use Baronial Private Manor & Country Estate",
  accommodationStyle: "Permanent thatch-and-stone country manor with heavy timber, stone hearths, and multi-wing layout.",
  locationDetail: "Perched on the wild edge of a Laikipia escarpment within Borana Conservancy.",
  nearestGate: "Borana Conservancy Main Gate",
  nearestAirstrips: ["Borana Airstrip (Private Charters, 15–20 mins)", "Lewa Downs Airstrip (Scheduled Flights, 50–60 mins)"],
  accessibilityNotes: "Accessible year-round via 4x4, scheduled flights to Lewa, private charters to Borana Airstrip, or direct helicopter landing; escarpment terrain and stepped stone terracing require footing care.",
  priceRangeMinUsd: 1150,
  priceRangeMaxUsd: 1333,
  rawMarketTier: "Ultra Luxury", // as stated in source doc's Luxury Tier field
  swafarisExperienceTier: "Tier 5",
  budgetTier: "Ultra-Luxury", // CONFIRMED (Option A methodology): flat $6,900–$8,000/night buyout ÷ 6-guest minimum-viable-party assumption = $1,150–$1,333/person/night; midpoint ($1,241.50) falls in the Ultra-Luxury band ($1,200+), validating the source's self-stated tier — no downgrade, unlike Sirai House's buyout conversion
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Sala's Camp",
    "Angama Safari Camp",
    "Lamu Archipelago",
    "Watamu",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim, including original $6,900–$8,000/night flat buyout pricing structure and founder-confirmed conversion methodology */ },

  experienceDna: {
    emotionalTone: ["Elegant", "Inspirational", "Exclusive"], // CORRECTED: "Cinematic" → Inspirational (standard precedent); "Intimate" dropped/replaced with Exclusive (Sanctuary Seekers/Honeymooners explicitly incompatible, so Romantic ruled out)
    energyType: ["Nature Immersion", "Luxury Escape", "Wildlife Focus"], // CORRECTED: "Immersive" (vague/non-canonical) dropped; "Nature Focus" reworded to canonical "Nature Immersion"; Luxury Escape valid as-is; Wildlife Focus added per founder decision given 8/10 wildlife score
    experiencePace: "Slow", // valid as-is, no correction needed
    comfortPhilosophy: ["Exclusive Luxury"], // bridged from comfortPhilosophyDetailed via lookup table
    comfortPhilosophyDetailed: "Ultra-Exclusive Sanctuary", // CORRECTED: "Ultra Luxury | Baronial Estate" non-canonical; founder chose Ultra-Exclusive Sanctuary over Classic Safari Elegance — matches 10/10 privacy score and strict single-party buyout, same resolution as Sirai House
    journeyRole: "Recovery", // FOUNDER DECISION: source hedge "Safari Climax (or Recovery / Standalone Sanctuary)" contained two genuinely canonical options, same pattern as Suyian and Sirai House; founder confirmed Recovery, supported by 4/10 intensity / 10/10 relaxation / 10/10 privacy scoring nearly identical to Sirai House's profile
    idealTravelersPrimary: ["Families", "Burned-out Executives", "Luxury Adventurers", "Slow Travelers"], // all valid real categories, no correction needed
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 10, authenticityScore: 9, premiumScore: 10,
    adventureScore: 7, privacyScore: 10, wildlifeExperienceScore: 8,
    culturalImmersionScore: 5, familySuitabilityScore: 9, comfortScore: 10,
    socialDynamic: "Isolated",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "4 to 5 hours drive from Nairobi (~240 km); 1 hour drive from Nanyuki; 50–60 minute road/game transfer from Lewa Airstrip; 15–20 minute transfer from Borana Airstrip; direct on-site helicopter pad access.",
    seasonalAccessibility: "Open year-round (closed during annual maintenance windows, typically November).",
    rainySeasonImpact: "Rainy seasons (April–May, November) make dirt tracks slick, requiring 4x4 capability, but main stone estate infrastructure remains unaffected.",
    electricitySystem: "24/7 grid and hybrid solar power infrastructure.",
    powerReliability: "Continuous, uninterrupted",
    waterReliability: "Purified local groundwater system powering continuous pressurized hot water.",
    internetAvailability: "High-speed Wi-Fi throughout main living quarters, pool house, and bedroom wings.",
    mobileNetwork: "Stable Safaricom cellular voice and data coverage across estate grounds.",
    medicalAccess: "On-site wilderness first aid capabilities; direct communications with Borana Conservancy ranger network; direct helipad access enabling 24/7 emergency MEDEVAC air evacuation to Nairobi.",
    childFriendly: true, // "Very High" per source, unambiguous
    mobilityFriendly: false, // "Low to Moderate" per source, resolved per Suyian/Loisaba precedent, confirmed by founder
    operationalLimitations: [
      "High financial friction for small traveling groups due to the flat exclusive buyout model",
      "Advanced planning required for equestrian team dispatch and helicopter deployments",
      "Minor acoustic transparency between specific adjacent family rooms",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "High",
      reasoning: "The 8-bedroom layout split across distinct wings allows multi-generational groups (grandparents, adult siblings, young children) to maintain absolute privacy while enjoying shared spaces like the pool house, clay tennis court, and grand drawing rooms.",
      supportingSignals: ["8-bedroom multi-wing layout", "Shared pool house, clay tennis court, and drawing rooms", "Absolute privacy per wing"],
      mismatchConditions: ["Parents with toddlers must actively monitor the unfenced infinity pool"] },
    { fitType: "ideal", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "High",
      reasoning: "Complete removal of institutional hospitality protocols allows executives to control their daily schedule, diet, sleep cycles, and human interaction entirely.",
      supportingSignals: ["Complete schedule sovereignty", "Zero unvetted human traffic", "Total spatial sovereignty"],
      mismatchConditions: ["Non-viable financially if traveling alone due to the flat house buyout rate ($6,900–$8,000+ per night)"] },
    { fitType: "ideal", category: "Luxury Adventurers", archetype: "The High-Octane Collector", matchStrength: "High",
      reasoning: "Unlocks access to a 26-horse stable for advanced equestrian safaris alongside plains game, on-site helipad deployment for northern desert flights, and foot-tracking black rhinos.",
      supportingSignals: ["26-horse professional stable", "On-site helipad for desert flight deployment", "Foot-tracking black rhinos with armed rangers"],
      mismatchConditions: ["Lacks the classic 'canvas under stars' aesthetic for purists who insist on traditional tented camps"] },
    { fitType: "ideal", category: "Slow Travelers", archetype: "The Biophilic Restorer", matchStrength: "High",
      reasoning: "Extended stays allow guests to observe wildlife directly from the private cliffside deck without vehicle noise, supported by farm-to-table cuisine and expansive private grounds.",
      supportingSignals: ["Private cliffside deck wildlife viewing without vehicle noise", "Farm-to-table cuisine from Kabati Farm", "Expansive private grounds"],
      mismatchConditions: ["High cumulative financial commitment over extended nights for smaller parties"] },
    { fitType: "poorFit", category: "Solo Explorers", archetype: "The Solitary Ascetic", matchStrength: "Low",
      reasoning: "Prohibitively inefficient cost structure tied to the flat exclusive buyout rate. The baronial scale of the estate creates an awkward spatial environment for a single occupant.",
      supportingSignals: [], mismatchConditions: ["Severe financial waste and overwhelming spatial scale for one person"] },
    { fitType: "poorFit", category: "First-Time Safari Travelers", archetype: "The Checklist Maximalist", matchStrength: "Low",
      reasoning: "Maximalists demanding high-density, vehicle-bound 'Big Five' box-checking on a tight timeline will underutilize the equestrian, residential, and lifestyle assets of the estate.",
      supportingSignals: [], mismatchConditions: ["Frustration with a slow-paced estate lifestyle when their primary goal is continuous vehicle game drives"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Low",
      reasoning: "Booking a 16-bed estate for a single couple represents an inefficient capital allocation compared to boutique luxury couples' lodges, unless an unlimited budget requires absolute total isolation.",
      supportingSignals: [], mismatchConditions: ["Commercial inefficiency and an overly large environment for two people"] },
    // NO DROPS OR REMAPS NEEDED — first fully clean traveler-match section in the project; all archetypes correctly named and correctly categorized in the source
  ],

  journeyIntelligence: {
    idealStayDuration: "4 to 6 Nights",
    recommendedPositionNote: "JOURNEY ROLE RESOLUTION (FOUNDER DECISION): source hedged \"Safari Climax (or Recovery / Standalone Sanctuary)\" — both canonical, genuine either/or, same pattern as Suyian Lodge and Sirai House. Founder confirmed Recovery, supported by the lodge's own scoring (4/10 intensity, 10/10 relaxation, 10/10 privacy — nearly identical profile to Sirai House). REGIONAL TALLY (Laikipia sub-phase, lodge 9/9, region previously marked complete at 8 but reopened as uncommitted): Opening Immersion x5, Recovery x2, Adventure Peak x1, Grand Finale x1 — no concentration concern; healthy four-role spread maintained.",
    whatShouldComeBefore: "High-tempo, vehicle-centric wildlife tracking in a high-density reserve (e.g., 3 nights in the Maasai Mara).",
    whatShouldComeAfter: "Direct helicopter/charter transfer to a coastal sanctuary (e.g., Lamu Archipelago / Watamu) for beach recovery, or direct international departure via Nairobi.",
    emotionalTransitionRationale: "Shifts traveler energy from hyper-vigilant outward scanning during public park game drives into deep, sovereign luxury, spatial security, and personal autonomy.",
  },

  narrative: {
    whyChosen: "An aristocratic, baronial private estate offering absolute schedule sovereignty, world-class equestrian access, and total multi-generational privacy, positioned as a deep-restoration anchor after high-tempo game viewing.",
    bestUsedFor: "UHNW multi-generational families, elite groups of friends, or privacy-seeking celebrity groups (6–16 guests) requiring absolute privacy, total itinerary sovereignty, and active non-vehicular safaris.",
    lessSuitableFor: "Solo travelers, couples, or small budget-conscious groups unable to absorb the flat buyout cost, or travelers focused strictly on a compressed 2-day Big Five vehicle checklist.",
    journeyPositionNote: "Recovery — deep restoration and total autonomy after high-tempo game-viewing legs.",
    overview: "Laragai House is an aristocratic, baronial country estate masterfully transposed onto the wild edge of a Laikipia escarpment. It completely subverts the standard 'luxury tented camp' motif, offering instead a massive, permanent thatch-and-stone private manor built originally as an exclusive family sanctuary. Sensorially, the house is a texture-rich masterpiece: the smell of beeswax polish on heavy handmade furniture, the crackle of massive open stone hearths warming the high-ceilinged drawing rooms, and the soft crunch of a clay tennis court set against the backdrop of the African bush. The spatial layout is intensely dramatic. The infinity pool and sun deck hang over a sheer cliffside looking directly down onto a highly active wildlife waterhole, providing a private theater for viewing elephant herds and black rhinos without stepping foot into a vehicle. It creates a psychological environment of supreme safety, quiet wealth, and total ownership of time.",
    emotionalFeel: "Unrestricted autonomy and profound spatial security. Because the property is booked strictly on an exclusive basis, the standard psychological friction of institutional hospitality—such as dressing for dinner, coordinating with other guests, or adhering to rigid buffet windows—is completely abolished. The energy rhythm is deeply contemplative and slow. Mornings feel expansive, characterized by watching the mist clear off Mount Kenya to the south or the sun bake the wild northern mountains of Lolokwe and Wamba. It creates a powerful sense of 'belonging' rather than 'visiting.' Guests emotionally describe the experience as stepping into a rich, multigenerational family legacy where the wilderness functions as an extension of their private garden.",
    sensorySignature: {
      visual: ["Morning light breaking across Mount Kenya's peaks", "Elephant herds gathering at the waterhole directly below the infinity pool deck", "Red clay of the private tennis court contrasted against dark green acacia canopy"],
      auditory: ["Crackle of olive-wood fires in high-ceilinged drawing room hearths", "Bird calls from the escarpment canopy", "Distant lion calls reverberating off the valley walls at night"],
      olfactory: ["Cedar smoke", "Beeswax furniture polish", "Crisp highland mountain air mixed with dry earth", "Fresh organic herbs from Kabati Farm"],
    },
    positiveSignals: [
      "Sourcing organic produce directly from the adjacent Kabati Regenerative Farm, yielding exceptionally crisp, tailor-made daily menus that rival top-tier European private chefs",
      "World-class stable of 26 well-schooled thoroughbred and thoroughbred-cross horses, allowing experienced riders to move alongside herds of Grevy's zebra, giraffe, and eland without engine noise",
      "The 8-bedroom configuration across distinct wings (Lucilla's and George's wings) allows large family groups to maintain an exquisite balance of private withdrawal and communal gathering",
      "Direct access to Borana and Lewa's frontline conservation work, specifically tracking black rhinos on foot alongside dedicated rangers",
    ],
    negativeSignals: [
      "Flat exclusive house buyout rate makes cost-per-person exceptionally punitive for groups under 4–6 guests",
      "The cliffside infinity pool lacks explicit depth markings or perimeter fencing, requiring high parental vigilance",
      "Interconnected family rooms in specific wings share acoustic vulnerabilities where early-waking children can carry noise to adjacent rooms",
    ],
    hiddenGems: [
      "The separate pool house functions as an autonomous day-resort complete with its own kitchen, bar, and dining pavilion. The estate also grants exclusive private access to the original 'Pride Rock' ridge within Borana Conservancy—the exact geographic formation that inspired Disney's The Lion King—offering completely uncrowded private sundowners.",
    ],
    signatureMemory: "Riding at sunset across open Laikipia plains alongside a herd of endangered Grevy's zebras, followed by returning to the estate's lit pool house deck for private sundowners as elephants drink at the waterhole directly below the cliff edge.",
    expectationManagement: "Travelers must understand this is an aristocratic residential country manor, not a canvas tented camp. Guests seeking 'canvas under stars' will find solid stone walls and high thatched roofs. Game drives take place within Borana Conservancy—a managed conservation ecosystem with high rhino density, not an endless flat savannah like the Maasai Mara.",
    idealNights: "4 to 6",
  },

  recommendationNotes: {
    recommendConditions: [
      "The client is an UHNW multi-generational family, elite group of friends, or privacy-seeking celebrity group (6–16 guests)",
      "Client requires absolute privacy, total itinerary sovereignty, and active non-vehicular safaris (equestrian, tennis, mountain biking, helicoptering)",
    ],
    doNotRecommendConditions: [
      "The party consists of solo travelers, couples, or small budget-conscious groups unable to absorb the flat buyout cost",
      "Travelers focused strictly on a compressed 2-day Big Five vehicle checklist",
    ],
    confidenceLevel: "High", // per source ("High Confidence")
    competitiveAdvantage: "Absolute spatial dominance and total schedule sovereignty combined with a 26-horse elite equestrian stable, private clay tennis court, and direct helipad deployment capabilities on a private escarpment.",
    mainLimitation: "Flat exclusive buyout commercial structure creates severe price distortion for small traveling parties.",
    positioningSummary: "An ultra-exclusive, baronial private estate perched on a dramatic Laikipia escarpment, offering multi-generational groups total sovereignty over time, world-class equestrian safaris, and unmatched privacy.",
  },

  pairings: [
    { pairedEntity: "Sala's Camp", pairingCategory: "ecosystem", rationale: "The transition from the flat, riverine savannah of the Mara to the jagged, semi-arid escarpment of Laikipia provides stunning visual and ecological contrast." },
    { pairedEntity: "Angama Safari Camp", pairingCategory: "ecosystem", rationale: "Alternative classic canvas luxury Mara pairing offering the same visual and ecological contrast to Laragai's escarpment setting." },
    { pairedEntity: "Lamu Archipelago", pairingCategory: "regional", rationale: "Direct helicopter/charter transfer to a coastal sanctuary for beach recovery after the estate stay." },
    { pairedEntity: "Watamu", pairingCategory: "regional", rationale: "Alternative coastal sanctuary option reached via direct helicopter/charter transfer for beach recovery." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator specifications", "Property architectural records", "Borana Conservancy operational logs", "Field surveys", "Aviation charter manifests"],
    confidenceLevel: "Verified & High Confidence",
    verificationRequirements: [
      "Precise GPS coordinates at the estate driveway gate, requiring final GIS logging — explicitly flagged REQUIRES_VERIFICATION in source",
    ],
  },
};