// lib/sre/buildBlueprint.ts
// Swafaris Recommendation Engine (SRE): orchestrates STM → SME → JSE and
// assembles the final, frontend-safe JourneyBlueprint. This is the ONLY
// function the frontend should call to get a journey.

import type { OnboardingAnswers, TravelerProfile } from "@/types/stm";
import type { JourneyAct } from "@/types/jse";
import type {
  JourneyBlueprint, JourneyCompass, JourneyArchitectureStage, ExperienceCard, JourneyChapter, JourneySummary,
} from "@/types/journey";

import { scoreProfile } from "@/lib/stm/scoreProfile";
import { resolveIdentityTitle } from "@/lib/travelerIdentity/identityLookup";
import { getAllLodges } from "@/lib/edf/lodgeQueries";
import { scoreLodges } from "@/lib/sme/scoreLodges";
import { sequenceJourney } from "@/lib/jse/sequenceJourney";

const ACT_TITLES: Record<JourneyAct, string> = {
  arrival: "Arrival", immersion: "Immersion", climax: "Safari Peak", reflection: "Reflection", farewell: "Farewell",
};
const ACT_PURPOSE: Record<JourneyAct, string> = {
  arrival: "Creating comfort and psychological safety as your journey begins.",
  immersion: "Discovering Kenya's landscapes and rhythms.",
  climax: "The moment your journey reaches its emotional height.",
  reflection: "Space to process and restore before the journey closes.",
  farewell: "Creating the memory that will stay with you.",
};

function bucket(value: number, [low, mid, high]: [string, string, string]): string {
  if (value < 34) return low;
  if (value < 67) return mid;
  return high;
}

function buildCompass(profile: TravelerProfile): JourneyCompass {
  const d = profile.dimensions;
  const adventureRaw = (d.travelIntention + d.energyLevel + d.natureConnection) / 3;
  return {
    adventure: bucket(adventureRaw, ["Quiet Exploration", "Balanced Exploration", "Wild Adventure"]),
    journeyPace: bucket(d.journeyPace, ["Slow Immersion", "Balanced Exploration", "Fast Expedition"]),
    comfortPhilosophy: profile.comfortPhilosophy,
    socialEnergy: bucket(d.socialPreference, ["Private Escape", "Balanced Connection", "Social Exploration"]),
    // Restoration comes from Recovery Need alone — it's the one STM dimension
    // that unambiguously measures need-for-rest. Low recovery need = the
    // traveler wants constant activity; high recovery need = they need deep
    // renewal. (transformationGoal was dropped from this formula — its scale
    // conflates "wants rest" and "wants stimulation" into the same high
    // values, which cancelled out the signal instead of reinforcing it.)
    restoration: bucket(d.recoveryNeed, ["Constant Activity", "Balanced Renewal", "Deep Renewal"]),
  };
}

function buildPhilosophy(identityTitle: string, compass: JourneyCompass): string {
  return `Your journey begins with ${compass.journeyPace.toLowerCase()}, allowing space to arrive fully before the experience deepens. As ${identityTitle}, you're drawn toward ${compass.adventure.toLowerCase()}, guided by a ${compass.comfortPhilosophy.toLowerCase()} sensibility. The days ahead are shaped around ${compass.restoration.toLowerCase()}, so the journey gives back as much as it asks of you.`;
}

function buildWhyThisFits(identityTitle: string, compass: JourneyCompass): string {
  return `Your responses suggest you are seeking more than a holiday. As ${identityTitle}, you value ${compass.socialEnergy.toLowerCase()} and a rhythm defined by ${compass.journeyPace.toLowerCase()}. Rather than moving quickly between destinations, this journey builds intentionally toward its peak before allowing time for ${compass.restoration.toLowerCase()}.`;
}

export async function buildJourneyBlueprint(answers: OnboardingAnswers): Promise<JourneyBlueprint> {
  const profile = scoreProfile(answers);
 const lodges = await getAllLodges();
  const lodgeMap = new Map(lodges.map((l) => [l.id, l]));

  const scores = scoreLodges(profile, lodges);
  const scoreMap = new Map(scores.map((s) => [s.lodgeId, s]));
  const sequence = sequenceJourney(profile, scores, lodges);

  const identityTitle = resolveIdentityTitle(profile.archetypes.primary, profile.archetypes.secondary);
  const compass = buildCompass(profile);

  const architecture: JourneyArchitectureStage[] = sequence.entries.map((e) => ({
    act: e.act,
    title: ACT_TITLES[e.act],
    purpose: ACT_PURPOSE[e.act],
    lodgeId: e.lodgeId,
  }));

  const experienceCards: ExperienceCard[] = sequence.entries.map((e) => {
    const lodge = lodgeMap.get(e.lodgeId)!;
    const score = scoreMap.get(e.lodgeId)!;
    return {
      lodgeId: lodge.id,
      name: lodge.name,
      region: lodge.region,
      journeyRole: lodge.experienceDNA.journeyRole,
      tags: lodge.experienceDNA.emotionalTone.slice(0, 3),
      emotionalDescription: lodge.whyChosen.split(". ")[0] + ".",
      whySelected: score.strengths,
      tier: score.tier,
    };
  });

  const timeline: JourneyChapter[] = sequence.entries.map((e) => {
    const lodge = lodgeMap.get(e.lodgeId)!;
    return {
      dayRange: e.dayRange,
      title: ACT_TITLES[e.act],
      region: lodge.region,
      purpose: ACT_PURPOSE[e.act],
      lodgeId: lodge.id,
      highlights: [lodge.bestUsedFor],
    };
  });

  const regions = Array.from(new Set(sequence.entries.map((e) => lodgeMap.get(e.lodgeId)!.region)));
  const summary: JourneySummary = {
    journeyStyle: `${profile.comfortPhilosophy} ${compass.journeyPace === "Fast Expedition" ? "Expedition" : "Safari"}`,
    duration: profile.tripDuration,
    regions,
    philosophy: "Explore deeply. Rest intentionally. Return transformed.",
  };

  return {
    identityTitle,
    journeyTheme: sequence.theme,
    journeyPhilosophy: buildPhilosophy(identityTitle, compass),
    compass,
    whyThisFits: buildWhyThisFits(identityTitle, compass),
    architecture,
    experienceCards,
    timeline,
    summary,
  };
}