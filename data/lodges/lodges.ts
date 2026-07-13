// data/lodges/lodges.ts
// The Swafaris Experience Intelligence Database (EDF v1.1).
// This is the canonical, type-checked source of every property's
// Experience DNA. lib/sme/ scores every entry in this array against
// each TravelerProfile.

import type { Lodge } from "@/types/edf";

export const lodges: Lodge[] = [
  {
    id: "villa-rosa-kempinski",
    name: "Villa Rosa Kempinski",
    region: "Nairobi (Westlands)",
    ecosystem: "Urban",
    budgetTier: "Luxury",
    experienceDNA: {
      emotionalTone: ["Elegant", "Grounded", "Social"],
      energyType: ["Quiet Luxury"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Comfort Luxury"],
      journeyRole: "Opening Immersion",
      idealTravelers: {
        primary: ["Bleisure Explorers"],
        secondary: ["Families"],
      },
      intensityScore: 3,
      relaxationScore: 7,
      authenticityScore: 4,
      premiumScore: 9,
      socialDynamic: "Balanced",
      travelFatigue: "Very Low",
    },
    whyChosen:
      "Villa Rosa Kempinski exists to do one job exceptionally well: absorb the shock of arrival. A traveler stepping off a long-haul flight is not yet ready for the wild — they are ready for a hot shower, familiar service standards, and a room that asks nothing of them. Its international polish, a liability deeper in a journey, is precisely the asset it needs to be here.",
    bestUsedFor:
      "Travelers arriving fatigued from international travel; bleisure travelers needing connectivity before or after work commitments; families needing a predictable first night.",
    lessSuitableFor:
      "Travelers seeking immediate immersion or authenticity; anyone minimizing time in cities.",
    pairsWellWith: ["enashipai-resort-spa", "ol-tukai-lodge", "almanara-luxury-boutique-hotel"],
    journeyPositionNote:
      "Almost exclusively Act I — Arrival. Should rarely appear more than once in a journey, and never as a mid-journey or closing chapter.",
  },
  {
    id: "enashipai-resort-spa",
    name: "Enashipai Resort & Spa",
    region: "Lake Naivasha, Rift Valley",
    ecosystem: "Wetland / Lakeside",
    budgetTier: "Premium",
    experienceDNA: {
      emotionalTone: ["Peaceful", "Elegant", "Grounded"],
      energyType: ["Restorative"],
      experiencePace: "Slow",
      comfortPhilosophy: ["Comfort Luxury"],
      journeyRole: "Recovery Reset",
      idealTravelers: {
        primary: ["Burned-Out Executives"],
        secondary: ["Families"],
      },
      intensityScore: 3,
      relaxationScore: 9,
      authenticityScore: 5,
      premiumScore: 7,
      socialDynamic: "Balanced",
      travelFatigue: "Very Low",
    },
    whyChosen:
      "Enashipai's value lies in proximity and ease. Naivasha sits an easy drive from Nairobi, letting it absorb a traveler's first full day without transfer fatigue, while water, birdlife, and open sky signal 'we have left the city.' Its spa infrastructure and unhurried grounds make it credible as both a slow first step and a soft landing before departure.",
    bestUsedFor:
      "Travelers needing a gentle on-ramp into nature without full wilderness intensity; recovery-oriented travelers wanting restorative early days; families easing into the trip.",
    lessSuitableFor:
      "Travelers primarily motivated by high-intensity wildlife or deep cultural immersion.",
    pairsWellWith: ["villa-rosa-kempinski", "lake-nakuru-lodge", "outspan-hotel-nyeri"],
    journeyPositionNote:
      "Most often Act I transitioning into Act II, or Act IV as a Recovery Reset. Works best as connective tissue between higher-intensity chapters.",
  },
  {
    id: "lake-nakuru-lodge",
    name: "Lake Nakuru Lodge",
    region: "Lake Nakuru National Park, Rift Valley",
    ecosystem: "Wetland / Savannah",
    budgetTier: "Mid-range",
    experienceDNA: {
      emotionalTone: ["Peaceful", "Exploratory", "Grounded"],
      energyType: ["Nature Immersion"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Authentic Luxury"],
      journeyRole: "Adventure Transition",
      idealTravelers: {
        primary: ["First-Time Safari Travelers"],
        secondary: ["Nature Photographers"],
      },
      intensityScore: 5,
      relaxationScore: 6,
      authenticityScore: 7,
      premiumScore: 5,
      socialDynamic: "Balanced",
      travelFatigue: "Low",
    },
    whyChosen:
      "Lake Nakuru is Kenya's introductory safari — rhino sanctuary, flamingo-lined shoreline, dense wildlife in a manageable park. It earns its place not by being the most dramatic experience in Kenya, but the most legible one: a first-time traveler can understand what they're seeing, building safari confidence before somewhere more intense.",
    bestUsedFor:
      "First-time safari travelers needing an accessible wildlife introduction; photographers seeking varied subjects without a long drive.",
    lessSuitableFor:
      "Travelers who have already safaried and want rarity or exclusivity.",
    pairsWellWith: ["enashipai-resort-spa", "borana-lodge", "ol-pejeta-safari-cottages"],
    journeyPositionNote:
      "Act II — Immersion. Ideal as a first wildlife encounter, building anticipation for a later Safari Climax rather than being the climax itself.",
  },
  {
    id: "the-cliff",
    name: "The Cliff",
    region: "Mara North Conservancy, Maasai Mara",
    ecosystem: "Savannah / Escarpment",
    budgetTier: "Ultra Luxury",
    experienceDNA: {
      emotionalTone: ["Cinematic", "Romantic", "Intimate"],
      energyType: ["Nature Immersion", "Quiet Luxury"],
      experiencePace: "Slow",
      comfortPhilosophy: ["Exclusive Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Honeymooners"],
        secondary: ["Luxury Adventurers"],
      },
      intensityScore: 6,
      relaxationScore: 8,
      authenticityScore: 8,
      premiumScore: 10,
      socialDynamic: "Private",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Perched above the conservancy rather than embedded flat within it, The Cliff offers something rarer than proximity to wildlife: perspective on it. Its elevation, low room count, and conservancy exclusivity make it feel like a private retreat overlooking one of the greatest ecosystems on Earth. Its climax is quieter than a dense-wildlife camp's — intimacy and awe rather than raw density — but for the right traveler, that is the more powerful peak.",
    bestUsedFor:
      "Honeymooners and couples wanting privacy without sacrificing wilderness; luxury adventurers wanting something quieter and more elevated than mainstream Mara camps.",
    lessSuitableFor:
      "Large groups, social explorers, or travelers prioritizing maximum wildlife density and guaranteed sightings.",
    pairsWellWith: ["entim-mara-camp", "mara-intrepids", "almanara-luxury-boutique-hotel"],
    journeyPositionNote:
      "Act III. Best positioned as the journey's defining peak for honeymoon and privacy-first profiles, or as a secondary Act III chapter alongside a higher-intensity Mara camp.",
  },
  {
    id: "ol-tukai-lodge",
    name: "Ol Tukai Lodge",
    region: "Amboseli National Park",
    ecosystem: "Savannah (Kilimanjaro backdrop)",
    budgetTier: "Premium",
    experienceDNA: {
      emotionalTone: ["Cinematic", "Grounded", "Peaceful"],
      energyType: ["Nature Immersion"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Authentic Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Families"],
        secondary: ["First-Time Safari Travelers"],
      },
      intensityScore: 6,
      relaxationScore: 6,
      authenticityScore: 6,
      premiumScore: 6,
      socialDynamic: "Balanced",
      travelFatigue: "Low",
    },
    whyChosen:
      "Ol Tukai's asset is not exclusivity — it's one of the most photographed views in Africa: elephant herds crossing open plains with Kilimanjaro rising behind them. That combination of accessible logistics and an unmistakably iconic backdrop makes it an efficient, high-payoff climax for shorter or family-paced journeys that can't accommodate the Mara's longer transfer commitment.",
    bestUsedFor:
      "Families wanting a manageable, high-impact safari stop; first-time travelers wanting the classic 'this is what I imagined Africa to look like' moment.",
    lessSuitableFor:
      "Travelers seeking rare or off-the-beaten-path experiences.",
    pairsWellWith: ["villa-rosa-kempinski", "entim-mara-camp", "hemingways-watamu"],
    journeyPositionNote:
      "Act III. Serves as the climax for shorter Nairobi-Amboseli itineraries, or as a gentler earlier peak preceding a Mara-based climax in longer journeys.",
  },
  {
    id: "kibo-safari-camp",
    name: "Kibo Safari Camp",
    region: "Amboseli area (near park gate)",
    ecosystem: "Savannah",
    budgetTier: "Mid-range",
    experienceDNA: {
      emotionalTone: ["Rustic", "Social", "Grounded"],
      energyType: ["Nature Immersion"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Comfort Luxury"],
      journeyRole: "Adventure Transition",
      idealTravelers: {
        primary: ["Students"],
        secondary: ["Social Explorers"],
      },
      intensityScore: 5,
      relaxationScore: 5,
      authenticityScore: 6,
      premiumScore: 3,
      socialDynamic: "Social",
      travelFatigue: "Low",
    },
    whyChosen:
      "Not every meaningful Kenyan journey needs to be Ultra Luxury, and Swafaris' philosophy of luxury-as-emotional-fit requires proof of that. Kibo delivers genuine Amboseli access, communal energy, and real value for travelers whose transformation goal is discovery and connection rather than exclusivity. Its lower premium score is a deliberate, honest signal, not a flaw.",
    bestUsedFor:
      "Students, budget-conscious social travelers, and groups wanting authentic Amboseli access without ultra-luxury pricing.",
    lessSuitableFor:
      "Honeymooners, privacy-seekers, or travelers whose Comfort Philosophy skews Quiet or Exclusive Luxury.",
    pairsWellWith: ["villa-rosa-kempinski", "lake-nakuru-lodge", "hemingways-watamu"],
    journeyPositionNote:
      "Act II. An honest Adventure Transition chapter for value- and connection-oriented journeys; not intended to anchor a luxury-tier itinerary.",
  },
  {
    id: "entim-mara-camp",
    name: "Entim Mara Camp",
    region: "Maasai Mara National Reserve",
    ecosystem: "Savannah",
    budgetTier: "Ultra Luxury",
    experienceDNA: {
      emotionalTone: ["Cinematic", "Wild", "Intimate"],
      energyType: ["Nature Immersion", "High-Energy Safari"],
      experiencePace: "Fast",
      comfortPhilosophy: ["Adventure Luxury", "Authentic Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Luxury Adventurers"],
        secondary: ["Nature Photographers", "First-Time Safari Travelers"],
      },
      intensityScore: 9,
      relaxationScore: 5,
      authenticityScore: 9,
      premiumScore: 9,
      socialDynamic: "Balanced",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Entim Mara is the reference example for what a Safari Climax must deliver: unfiltered wildlife density inside the reserve itself, paired with tented luxury that never dilutes the wildness of the setting. This is deliberately the highest Intensity Score in the database — the chapter a traveler will describe first when someone asks 'how was Kenya?'",
    bestUsedFor:
      "Travelers whose Transformation Goal centers on awe, achievement, or an unforgettable wildlife moment; photographers; luxury adventurers.",
    lessSuitableFor:
      "Burned-out or recovery-seeking travelers; travelers already several days into consecutive high-intensity experiences.",
    pairsWellWith: ["ol-tukai-lodge", "the-cliff", "almanara-luxury-boutique-hotel"],
    journeyPositionNote:
      "Act III, definitively. The canonical Safari Climax anchor — should not be scheduled adjacent to another Safari Climax-tier property.",
  },
  {
    id: "mara-intrepids",
    name: "Mara Intrepids",
    region: "Talek River, Maasai Mara National Reserve",
    ecosystem: "Savannah / Riverine",
    budgetTier: "Luxury",
    experienceDNA: {
      emotionalTone: ["Elegant", "Social", "Grounded"],
      energyType: ["High-Energy Safari", "Nature Immersion"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Comfort Luxury", "Authentic Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Families"],
        secondary: ["First-Time Safari Travelers"],
      },
      intensityScore: 7,
      relaxationScore: 6,
      authenticityScore: 7,
      premiumScore: 7,
      socialDynamic: "Social",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Mara Intrepids proves the Safari Climax role doesn't belong exclusively to adventure-seekers. Its riverside setting delivers genuine Mara wildlife density, but its fenced camp structure and family-oriented service make it the climax property for travelers who want the defining wildlife moment without maximum edge.",
    bestUsedFor:
      "Families wanting a real Mara climax without compromising on safety or comfort; first-time travelers wanting an immersive but socially warm safari.",
    lessSuitableFor:
      "Solo travelers or honeymooners seeking privacy.",
    pairsWellWith: ["ol-tukai-lodge", "zebra-plains-mara-camp", "hemingways-watamu"],
    journeyPositionNote:
      "Act III. An alternative Safari Climax to Entim Mara for family- and comfort-oriented journeys; the two should not be combined in one itinerary.",
  },
  {
    id: "zebra-plains-mara-camp",
    name: "Zebra Plains Mara Camp",
    region: "Maasai Mara (Talek / Ol Kiombo area)",
    ecosystem: "Savannah",
    budgetTier: "Mid-range",
    experienceDNA: {
      emotionalTone: ["Rustic", "Wild", "Grounded"],
      energyType: ["Nature Immersion", "High-Energy Safari"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Authentic Luxury"],
      journeyRole: "Adventure Transition",
      idealTravelers: {
        primary: ["Nature Photographers"],
        secondary: ["Slow Travelers"],
      },
      intensityScore: 6,
      relaxationScore: 6,
      authenticityScore: 8,
      premiumScore: 5,
      socialDynamic: "Balanced",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Zebra Plains fills a specific gap: an unpretentious, genuinely wild Mara camp for travelers who want authenticity over polish. Its lower Premium Score is deliberate — its identity is rustic groundedness, not five-star finish — making it a strong secondary Mara stop for photographers wanting more ecosystem time without full climax pricing.",
    bestUsedFor:
      "Nature photographers wanting extended, lower-cost time in the Mara; slow travelers building a longer Mara stay across two properties.",
    lessSuitableFor:
      "Travelers whose Comfort Philosophy is Comfort or Exclusive Luxury.",
    pairsWellWith: ["mara-intrepids", "the-cliff", "borana-lodge"],
    journeyPositionNote:
      "Act II moving toward Act III. Best used as a lead-in to a higher-intensity Safari Climax property rather than as the climax itself.",
  },
  {
    id: "saruni-samburu",
    name: "Saruni Samburu",
    region: "Kalama Conservancy, Samburu",
    ecosystem: "Savannah (semi-arid, northern Kenya)",
    budgetTier: "Ultra Luxury",
    experienceDNA: {
      emotionalTone: ["Wild", "Grounded", "Transformative"],
      energyType: ["Nature Immersion", "Cultural Immersion"],
      experiencePace: "Slow",
      comfortPhilosophy: ["Authentic Luxury"],
      journeyRole: "Adventure Transition",
      idealTravelers: {
        primary: ["Luxury Adventurers", "Slow Travelers"],
        secondary: ["Nature Photographers", "Burned-Out Executives"],
      },
      intensityScore: 7,
      relaxationScore: 8,
      authenticityScore: 10,
      premiumScore: 8,
      socialDynamic: "Private",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Saruni Samburu holds the highest Authenticity Score in the database, and it earns it: Samburu is culturally and ecologically distinct from the Mara-Amboseli circuit, and this property's deep community ties make that distinction real rather than marketed. It's the reach-for property when a traveler's Authenticity Appetite is a Hidden Gem Seeker or Deep Cultural Immersion, and it doubles as genuine recovery for burned-out travelers needing slowness alongside wildness.",
    bestUsedFor:
      "Travelers with high Authenticity Appetite; slow travelers wanting depth over checklist coverage; burned-out executives needing nature without giving up quality.",
    lessSuitableFor:
      "First-time safari travelers wanting the most iconic, universally recognizable wildlife imagery.",
    pairsWellWith: ["borana-lodge", "ol-pejeta-safari-cottages", "almanara-luxury-boutique-hotel"],
    journeyPositionNote:
      "Act II or Act III. Functions as either a rich Adventure Transition or, for authenticity-first profiles, an alternative emotional peak in its own right.",
  },
  {
    id: "borana-lodge",
    name: "Borana Lodge",
    region: "Borana Conservancy, Laikipia",
    ecosystem: "Savannah / Highland Conservancy",
    budgetTier: "Ultra Luxury",
    experienceDNA: {
      emotionalTone: ["Wild", "Grounded", "Exploratory"],
      energyType: ["Nature Immersion", "Cultural Immersion"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Adventure Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Luxury Adventurers"],
        secondary: ["Nature Photographers"],
      },
      intensityScore: 7,
      relaxationScore: 7,
      authenticityScore: 9,
      premiumScore: 9,
      socialDynamic: "Balanced",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Borana distinguishes itself through activity diversity rather than density alone — horseback safaris, walking safaris, and a working conservation model that lets travelers engage with land management, not just observe wildlife from a vehicle. This makes it a strong climax for travelers who want participation, not just witness — a genuine alternative to the Mara's cinematic-but-passive climax, not a lesser one.",
    bestUsedFor:
      "Luxury adventurers and photographers wanting active, participatory wildlife experiences; conservation-minded travelers.",
    lessSuitableFor:
      "Travelers seeking pure relaxation, or those with mobility constraints limiting walking/riding activities.",
    pairsWellWith: ["ol-pejeta-safari-cottages", "saruni-samburu", "outspan-hotel-nyeri"],
    journeyPositionNote:
      "Act III. Best used as the journey's defining climax for activity- and conservation-driven profiles; should not be combined with another Safari Climax-tier property.",
  },
  {
    id: "almanara-luxury-boutique-hotel",
    name: "Almanara Luxury Boutique Hotel",
    region: "Diani, Kenyan Coast",
    ecosystem: "Coastal",
    budgetTier: "Ultra Luxury",
    experienceDNA: {
      emotionalTone: ["Peaceful", "Romantic", "Intimate"],
      energyType: ["Coastal Escape", "Restorative"],
      experiencePace: "Slow",
      comfortPhilosophy: ["Quiet Luxury"],
      journeyRole: "Romantic Finale",
      idealTravelers: {
        primary: ["Honeymooners"],
        secondary: ["Burned-Out Executives"],
      },
      intensityScore: 2,
      relaxationScore: 10,
      authenticityScore: 6,
      premiumScore: 9,
      socialDynamic: "Private",
      travelFatigue: "Low",
    },
    whyChosen:
      "Almanara carries the highest Relaxation Score in the entire database, and its role in the system is singular: it is where a Swafaris journey exhales. After a wildlife-intense middle act, its privacy and ocean stillness give the traveler somewhere to metabolize what they've experienced before returning home. The emotional closure it provides is as engineered as the climax it follows.",
    bestUsedFor:
      "Honeymooners closing their journey with romance; burned-out or recovery-oriented travelers needing real decompression.",
    lessSuitableFor:
      "Travelers with a high Desired Energy Level who will find its stillness under-stimulating if misplaced in the sequence.",
    pairsWellWith: ["entim-mara-camp", "the-cliff", "saruni-samburu"],
    journeyPositionNote:
      "Act V, exclusively. This property's entire emotional function depends on being a closing chapter — placing it earlier would blunt both its impact and the climax that should precede it.",
  },
  {
    id: "hemingways-watamu",
    name: "Hemingways Watamu",
    region: "Watamu, Kenyan Coast",
    ecosystem: "Coastal",
    budgetTier: "Luxury",
    experienceDNA: {
      emotionalTone: ["Elegant", "Social", "Peaceful"],
      energyType: ["Coastal Escape"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Comfort Luxury", "Authentic Luxury"],
      journeyRole: "Coastal Decompression",
      idealTravelers: {
        primary: ["Families"],
        secondary: ["Bleisure Explorers"],
      },
      intensityScore: 4,
      relaxationScore: 8,
      authenticityScore: 6,
      premiumScore: 7,
      socialDynamic: "Social",
      travelFatigue: "Low",
    },
    whyChosen:
      "Hemingways provides a more social, activity-friendly counterpart to Almanara's total stillness — watersports, marine park access, and a livelier atmosphere give travelers who want a coastal finale with remaining energy a credible option that isn't pure withdrawal. Not every traveler's idea of closure is silence.",
    bestUsedFor:
      "Families wanting an active but relaxed coastal ending; bleisure travelers extending their trip socially before departure.",
    lessSuitableFor:
      "Travelers with high Recovery Need or a Private social preference.",
    pairsWellWith: ["ol-tukai-lodge", "mara-intrepids", "kibo-safari-camp"],
    journeyPositionNote:
      "Act V. An alternative Coastal Decompression to Almanara for travelers whose Social Preference and Recovery Need don't call for total privacy.",
  },
  {
    id: "outspan-hotel-nyeri",
    name: "Outspan Hotel Nyeri",
    region: "Nyeri, Aberdare foothills",
    ecosystem: "Highland / Forest",
    budgetTier: "Mid-range",
    experienceDNA: {
      emotionalTone: ["Peaceful", "Grounded", "Elegant"],
      energyType: ["Restorative", "Cultural Immersion"],
      experiencePace: "Slow",
      comfortPhilosophy: ["Comfort Luxury", "Authentic Luxury"],
      journeyRole: "Recovery Reset",
      idealTravelers: {
        primary: ["Slow Travelers"],
        secondary: ["Burned-Out Executives"],
      },
      intensityScore: 3,
      relaxationScore: 8,
      authenticityScore: 6,
      premiumScore: 5,
      socialDynamic: "Balanced",
      travelFatigue: "Low",
    },
    whyChosen:
      "Outspan's colonial-era heritage and forested highland setting near the Aberdares offer something distinct from savannah safari and coastal recovery alike: a cool, quiet, historically textured pause. Its gentle pace makes it a credible Recovery Reset for travelers wanting restoration without leaving Kenya's interior.",
    bestUsedFor:
      "Slow travelers building an inland-only journey; travelers wanting a change of altitude and temperature for emotional pacing.",
    lessSuitableFor:
      "Travelers whose journey is built entirely around iconic Big Five safari or coastal beach time.",
    pairsWellWith: ["enashipai-resort-spa", "lake-nakuru-lodge", "borana-lodge"],
    journeyPositionNote:
      "Act IV. A strong inland alternative to coastal Recovery Reset properties, useful when a journey's geography doesn't naturally extend to the coast.",
  },
  {
    id: "ol-pejeta-safari-cottages",
    name: "Ol Pejeta Safari Cottages",
    region: "Ol Pejeta Conservancy, Laikipia",
    ecosystem: "Savannah / Conservancy",
    budgetTier: "Premium",
    experienceDNA: {
      emotionalTone: ["Wild", "Exploratory", "Transformative"],
      energyType: ["Nature Immersion", "High-Energy Safari"],
      experiencePace: "Balanced",
      comfortPhilosophy: ["Authentic Luxury"],
      journeyRole: "Safari Climax",
      idealTravelers: {
        primary: ["Nature Photographers"],
        secondary: ["Families"],
      },
      intensityScore: 7,
      relaxationScore: 6,
      authenticityScore: 9,
      premiumScore: 6,
      socialDynamic: "Balanced",
      travelFatigue: "Medium",
    },
    whyChosen:
      "Ol Pejeta's distinction is purpose: home to the world's last northern white rhinos and one of Africa's most credible conservation operations, including a chimpanzee sanctuary found nowhere else on the safari circuit. For a traveler whose Transformation Goal includes 'gain perspective,' this property delivers emotional and educational weight generic wildlife density cannot replicate. It earns its climax status on meaning, not just spectacle.",
    bestUsedFor:
      "Nature photographers and conservation-minded travelers; families wanting an educational, purpose-driven wildlife experience.",
    lessSuitableFor:
      "Travelers purely seeking maximum luxury polish — its value is substantive rather than indulgent.",
    pairsWellWith: ["borana-lodge", "saruni-samburu", "lake-nakuru-lodge"],
    journeyPositionNote:
      "Act III. A strong climax for conservation-driven journeys, and a compelling alternative when the traveler's Authenticity Appetite favors substance over cinema.",
  },
];