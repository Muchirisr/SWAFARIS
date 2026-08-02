// data/knowledge-base/nakuru/lake-nakuru-lodge.ts
export const lakeNakuruLodge = {
  id: "lake-nakuru-lodge", // ENRICHMENT — existing DB record, reconciled per full diff below
  name: "Lake Nakuru Lodge",
  country: "Kenya",
  region: "Nakuru",
  subRegion: "Southeastern Sector, Lake Nakuru National Park",
  ecosystem: "Rift Valley Lake / Acacia Woodland / Rhino Sanctuary",
  propertyType: "Historic Safari Lodge / Resort-Scale Heritage Hotel",
  accommodationStyle: "Stone-and-timber chalets, suites, and rondavels with private verandas framing garden, woodland, or lakeshore vistas.",
  locationDetail: "Southeastern sector of Lake Nakuru National Park, positioned along the lakeshore line.",
  nearestGate: "Nderit Gate (~5 km / 10–15 minutes) / Main Gate (~15 km / 25–30 minutes)",
  nearestAirstrips: ["Naishi Airstrip (inside Lake Nakuru National Park)"],
  accessibilityNotes: "Accessible year-round via fully paved tarmac highway from Nairobi to Nakuru town/Nderit Gate, followed by well-maintained murram park roads. Garden pathways are paved and mostly level, though step access is required for upper-floor chalet units.",
  priceRangeMinUsd: 250,
  priceRangeMaxUsd: 450,
  rawMarketTier: "Premium", // as stated in source doc; superseded by price-guide midpoint override
  swafarisExperienceTier: "Tier 2",
  budgetTier: "Mid-Range", // corrected from source doc's "Premium" — $350 midpoint falls in $300–499 band
  experienceIdentity: "REQUIRES_VERIFICATION",
  pairsWellWith: [
    "Ol Pejeta Conservancy or Laikipia Plateau (ecosystem contrast pairing)",
    "Naivasha / Lake Elmenteita sanctuary (regional decompression pairing)",
  ], // name-only, not reconciled against real lodge IDs
  rawSourceJson: { /* full source doc, verbatim */ },

  experienceDna: {
    emotionalTone: ["Peaceful", "Exploratory", "Reflective"], // "Grounded" (existing DB, invalid) substituted with "Reflective" per founder confirmation
    energyType: ["Nature Immersion", "Wildlife Focus", "Luxury Escape"], // corrected from source doc's "Immersive | Nature | Quiet Luxury" — none fully valid
    experiencePace: "Moderate", // confirmed
    comfortPhilosophy: ["Authentic Luxury"],
    comfortPhilosophyDetailed: "Classic Safari Elegance", // source doc's "Heritage" is not valid vocabulary; mapped per founder confirmation
    journeyRole: "Opening Immersion", // corrected from existing DB value "Adventure Transition", which is not canonical SWA-DATA-002 vocabulary
    idealTravelersPrimary: ["Families", "First-Time Safari Travelers", "Nature Photographers"], // adopted fuller set from new doc per founder instruction (existing DB had only First-Time Safari Travelers)
    idealTravelersSecondary: [],
    intensityScore: 4, relaxationScore: 7, authenticityScore: 5, premiumScore: 6,
    adventureScore: 4, privacyScore: 4, wildlifeExperienceScore: 8,
    culturalImmersionScore: 3, familySuitabilityScore: 9, comfortScore: 7,
    socialDynamic: "Balanced",
    travelFatigue: "Low",
  },

  operationalIntelligence: {
    accessibilityScore: null, // REQUIRES_VERIFICATION
    transferTime: "3 to 3.5 hours overland from Nairobi (~160 km) via A104 asphalt highway; 25–30 minute flight from Wilson Airport (WIL) to Naishi Airstrip plus a 20-minute park transfer.",
    seasonalAccessibility: "Open year-round. All-weather gravel roads inside the park maintain vehicular access during rainy seasons (April–May and November).",
    rainySeasonImpact: "Localized flooding near lake fringes can temporarily alter game-drive loops during peak rains.",
    electricitySystem: "24-hour grid electricity supplemented by heavy-duty back-up generators and solar thermal systems for hot water heating.",
    powerReliability: "Continuous; in-room charging stations available in all categories.",
    waterReliability: "Central piped water supply with solar heating systems. Hot water pressure can fluctuate during peak morning and evening shower hours.",
    internetAvailability: "Strong 4G mobile signal (Safaricom and Airtel). Free Wi-Fi in public lounges, reception, and select room wings, with variable bandwidth during high-occupancy corporate events.",
    mobileNetwork: "Strong Safaricom and Airtel cellular data coverage.",
    medicalAccess: "On-site first aid with on-call physician services. Level 5 regional medical centers (Nakuru City) within 30 minutes (~15 km). Emergency medical air evacuation available via Naishi Airstrip.",
    childFriendly: true, // "High" per source
    mobilityFriendly: true, // Moderate to High per source — ground-floor chalets, paved walkways, four adapted rooms
    operationalLimitations: [
      "Large total capacity (~94 rooms) generates a high-density, resort-style environment",
      "Periodic influxes of regional corporate conference groups and large tour buses dilute wilderness intimacy",
      "Mandatory KWS park entrance fees must be maintained throughout the stay duration",
      "Aging infrastructure and worn fixtures in older standard room blocks",
    ],
  },

  travelerMatches: [
    { fitType: "ideal", category: "Families", archetype: "The Multi-Generational Legacy Family", matchStrength: "Strong",
      reasoning: "Paved level pathways, ground-floor chalets, an outdoor pool, and protective perimeter fencing accommodate both young children and grandparents. Direct-from-balcony wildlife viewing reduces the physical strain of long game drives.",
      supportingSignals: ["Paved level pathways", "Ground-floor chalet access", "Perimeter fencing"],
      mismatchConditions: ["Central dining room can feel loud and crowded during peak group tour meal hours"] },
    { fitType: "ideal", category: "Families", archetype: "The Early-Stage Nurturers", matchStrength: "Strong",
      reasoning: "Provides a safe, highly controlled environment where parents can introduce toddlers or young children to big-game wildlife without exposure to raw, unfenced bush dangers or harsh malaria zones.",
      supportingSignals: ["Controlled, fenced environment", "Low-exposure wildlife introduction"],
      mismatchConditions: ["Must monitor children near the pool perimeter and public lawn edges"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Protege Traditionalist", matchStrength: "Strong",
      reasoning: "Offers a classic, comforting safari experience with solid hotel infrastructure, predictable schedules, familiar buffet cooking, and quick access to iconic megafauna (rhinos and giraffes).",
      supportingSignals: ["Predictable hotel infrastructure", "Guaranteed megafauna access"],
      mismatchConditions: ["May establish an expectation that all African safari lodges operate like structured, resort-scale hotels"] },
    { fitType: "ideal", category: "First-Time Safari Travelers", archetype: "The Sensory Overwhelmed", matchStrength: "Strong",
      reasoning: "Solid brick-and-timber construction, glass sliding doors, secure perimeter fencing, and short paved road access from Nairobi reduce anxiety for travelers nervous about wilderness immersion or remote tented living.",
      supportingSignals: ["Solid construction and secure fencing", "Short paved road access"],
      mismatchConditions: ["Higher guest numbers in public spaces remove the quiet solitude found in boutique camps"] },
    { fitType: "ideal", category: "Nature Photographers", archetype: "The Apex Trophy Hunter", matchStrength: "Strong",
      reasoning: "High-density, low-friction tracking of Southern white rhinos, endangered black rhinos, and Rothschild giraffes along open lake-basin floodplains with stable lighting conditions.",
      supportingSignals: ["Guaranteed rhino sightings", "Stable floodplain lighting conditions"],
      mismatchConditions: ["Strictly restricted to designated park tracks; zero off-road driving permitted inside the National Park"] },
    { fitType: "poorFit", category: "Honeymooners", archetype: "The Sanctuary Seekers", matchStrength: "Strong",
      reasoning: "Large room inventory (~94 units), central buffet dining, and frequent group tour buses eliminate romantic privacy, secluded dining, and exclusive atmosphere.",
      supportingSignals: [], mismatchConditions: ["High likelihood of sharing dining spaces and pool decks with 50-person overland tour groups or corporate seminar attendees"] },
    { fitType: "poorFit", category: "Burned-out Executives", archetype: "The Incognito Ascetic", matchStrength: "Strong",
      reasoning: "High guest capacity, resort-style setup, shared public areas, and reliable Wi-Fi coverage fail to support deep digital detox, mental reset, or solitary reflection.",
      supportingSignals: [], mismatchConditions: ["Persistent ambient noise from corporate events, tour groups, and high guest foot traffic impedes psychological decompression"] },
    { fitType: "poorFit", category: "Luxury Adventurers", archetype: "The Low-Impact Purist", matchStrength: "Strong",
      reasoning: "The resort-scale architectural footprint, fenced park perimeter, proximity to urban infrastructure, and commercial tour group density conflict directly with low-impact, deep-wilderness values.",
      supportingSignals: [], mismatchConditions: ["Severe disappointment with the civilized, protective hotel lens and lack of exclusive, un-fenced wilderness tracking"] },
  ],

  journeyIntelligence: {
    idealStayDuration: "1 to 2 Nights (Maximum 48 Hours)",
    recommendedPositionNote: "ENRICHMENT NOTE: existing DB value was 'Adventure Transition', which is not canonical SWA-DATA-002 Journey Role vocabulary (valid set: Opening Immersion / Adventure Peak / Reflection / Recovery / Grand Finale, + accepted 'Safari Climax' precedent). Corrected to Opening Immersion per founder confirmation — this is lodge #1 of the Nakuru batch, so no regional concentration pattern to flag yet.",
    whatShouldComeBefore: "International arrival at Jomo Kenyatta International Airport (NBO) or a restful overnight stay in Nairobi. Serves as the smooth, low-friction introductory leg of a broader Kenyan circuit.",
    whatShouldComeAfter: "Transition to vast, raw, community-conservation ecosystems (e.g., Ol Pejeta Conservancy, Laikipia Plateau, or the open savannahs of the Maasai Mara).",
    emotionalTransitionRationale: "Shifts the traveler smoothly from urban flight fatigue into immediate, high-probability megafauna contact, establishing a sense of safety, reward, and enthusiasm without physical exhaustion.",
  },

  narrative: {
    whyChosen: "Lake Nakuru Lodge is the reference example for institutional, resort-scale heritage positioning: an in-park landmark property delivering guaranteed rhino sightings and elevated lakeshore views without the logistical friction of early gate queuing.",
    bestUsedFor: "Multi-generational families, first-time safari travelers, older guests, or clients who require solid physical safety margins, zero off-road shaking, guaranteed rhino sightings, and easy road transfers from Nairobi.",
    lessSuitableFor: "The client is a honeymooner seeking romantic privacy, or a seasoned wilderness purist who demands remote canvas isolation, un-fenced wilderness, and private vehicle tracking rights.",
    journeyPositionNote: "Opening Immersion — a low-friction, confidence-building landing pad for travelers to recover from long flights before transitioning into deeper, un-fenced wilderness properties.",
    overview: "Lake Nakuru Lodge is an established landmark property situated within the southeastern sector of Lake Nakuru National Park. Stone-and-timber chalets and suites run parallel to the lakeshore line. The psychological feel is secure, classic, and comforting — modeled after the traditional mid-century East African safari hotel where raw wilderness is viewed through an intentionally protective lens.",
    emotionalFeel: "Deeply calming, structured, and predictable. Guests experience peaceful stationary observation, waking up to slide open a glass balcony door for immediate, effortless visual contact with grazing wildlife. The energy rhythm is steady and reflective, devoid of the frantic game-drive hurry seen in open migration reserves.",
    sensorySignature: {
      visual: ["Yellow-fever acacia canopy framing white rhinos grazing across the lower floodplain against the backdrop of the alkaline lake"],
      auditory: ["Continuous calling of pelicans and fish eagles", "Evening breeze rustling through acacia trees"],
      olfactory: ["Damp lake-basin soil", "Crushed acacia bark", "Woodsmoke from evening hearth fires"],
    },
    positiveSignals: [
      "Direct-from-bed wildlife sightings: white rhinos, waterbucks, and buffalo feeding directly in front of room balconies at dawn",
      "Elevated poolside panorama functions as an active wildlife viewing platform overlooking the plains",
      "Low-friction logistical access: in-park positioning removes early morning gate queuing",
      "Varied and accessible buffet cooking accommodating conservative palates and child-friendly requirements",
    ],
    negativeSignals: [
      "Aging infrastructure: dated interior design, worn bathroom fixtures, stiff mattresses in older standard room wings",
      "Corporate and group tour influxes dilute safari ambiance during meal times",
      "Variable hot water pressure during peak morning shower windows",
      "Daily KWS park entry fees must be maintained throughout the stay and require clear upfront client itemization",
    ],
    hiddenGems: [
      "Junior Suites and Deluxe Wing feature floor-to-ceiling glass sliding installations framing the landscape into a living gallery wall, securing front-row rhino access at a fraction of conservancy costs — while standard entry-level rooms can feel cramped or aged.",
    ],
    signatureMemory: "Standing on a private suite balcony at 06:15 AM with a hot mug of Kenyan tea, watching a mother white rhino and her calf graze through the morning mist less than 50 meters away across the wire perimeter fence.",
    expectationManagement: "Travelers must understand this is an institutional, resort-scale safari hotel within a fenced national park, not an exclusive, remote tented camp. Expect to share public spaces, lounges, and dining halls with other travel groups and tour buses.",
    idealNights: "1-2",
  },

  recommendationNotes: {
    recommendConditions: [
      "Multi-generational family, first-time safari traveler, older guest, or client requiring solid physical safety margins, zero off-road shaking, guaranteed rhino sightings, and easy road transfers from Nairobi.",
    ],
    doNotRecommendConditions: [
      "Honeymooner seeking romantic privacy",
      "Seasoned wilderness purist who demands remote canvas isolation, un-fenced wilderness, and private vehicle tracking rights",
    ],
    confidenceLevel: "High", // per source — strictly contingent on booking Deluxe or Suite categories
    competitiveAdvantage: "Premier in-park position offering direct, elevated lakeshore views and guaranteed rhino encounters without early morning gate queues.",
    mainLimitation: "High guest capacity (~94 rooms) and dated interior furnishings in older standard room wings.",
    positioningSummary: "A historic, resort-scale heritage lodge situated directly inside Lake Nakuru National Park, providing reliable family-friendly comfort and effortless rhino viewing from an elevated lakeside vantage point.",
  },

  pairings: [
    { pairedEntity: "Ol Pejeta Conservancy or the Laikipia Plateau", pairingCategory: "ecosystem", rationale: "Moving from the structured, fenced national park setting of Nakuru to vast, raw, community-conservation ecosystems creates a logical progression in wilderness depth." },
    { pairedEntity: "Naivasha / Lake Elmenteita", pairingCategory: "regional", rationale: "Pairs a high-density megafauna viewing experience with a slow-paced aquatic environment (e.g., boat safaris or walking on Crescent Island)." },
    { pairedEntity: "Lake Elmenteita Serena Camp", pairingCategory: "experience", rationale: "Upgrade from this high-inventory heritage hotel to an intimate, low-impact luxury tented camp to contrast social resort dynamics with an exclusive, personalized sanctuary." },
  ],

  dataQuality: {
    researchDate: null,
    sourcesConsulted: ["Operator specifications", "KWS park regulations", "Regional geographical surveys", "Road access logs", "Field operational evaluations"],
    confidenceLevel: "High",
    verificationRequirements: [
      "experience_identity — not provided in source",
      "accessibility_score (numeric) — not provided in source",
      "Specific room-by-room renovation timelines for standard room wings — explicitly flagged REQUIRES_VERIFICATION in source",
      "Exact emergency medevac flight response time from Naishi Airstrip — explicitly flagged REQUIRES_VERIFICATION in source",
      "Paired lodge entities — name-only, not reconciled against real lodge IDs",
    ],
  },
};