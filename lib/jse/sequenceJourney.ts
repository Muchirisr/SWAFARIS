// lib/jse/sequenceJourney.ts
// Journey Sequencing Engine (JSE): arranges compatible lodges into the
// Five Journey Acts, respecting fatigue and pacing rules.

import type { TravelerProfile } from "@/types/stm";
import type { Lodge } from "@/types/edf";
import type { CompatibilityScore } from "@/types/sme";
import type { JourneyAct, JourneySequence, JourneySequenceEntry } from "@/types/jse";
import type { JourneyRole } from "@/types/common";

const ACT_ORDER: JourneyAct[] = ["arrival", "immersion", "climax", "reflection", "farewell"];

const ROLE_TO_ACT: Record<JourneyRole, JourneyAct> = {
  "Opening Immersion": "arrival",
  "Adventure Transition": "immersion",
  "Safari Climax": "climax",
  "Recovery Reset": "reflection",
  "Romantic Finale": "farewell",
  "Coastal Decompression": "farewell",
};

const TRIP_DURATION_DAYS: Record<string, number> = {
  "3-5 Days": 4, "6-8 Days": 7, "9-12 Days": 10, "13+ Days": 13,
};

function pickTheme(profile: TravelerProfile): string {
  if (profile.dimensions.recoveryNeed > 70) return "From exhaustion to wonder.";
  if (profile.dimensions.travelIntention > 70) return "From curiosity to discovery.";
  return "From routine to remembering.";
}

const ARC_WORD: Record<JourneyAct, string> = {
  arrival: "Arrive", immersion: "Discover", climax: "Experience", reflection: "Reflect", farewell: "Return",
};

export function sequenceJourney(
  profile: TravelerProfile,
  scores: CompatibilityScore[],
  lodges: Lodge[]
): JourneySequence {
  const lodgeMap = new Map(lodges.map((l) => [l.id, l]));
  const eligible = [...scores].filter((s) => s.tier !== "excluded").sort((a, b) => b.score - a.score);

  const usedIds = new Set<string>();
  const selections: { act: JourneyAct; lodgeId: string }[] = [];

  for (const act of ACT_ORDER) {
    const candidate = eligible.find(
      (s) => !usedIds.has(s.lodgeId) && ROLE_TO_ACT[lodgeMap.get(s.lodgeId)!.experienceDNA.journeyRole] === act
    );
    if (candidate) {
      selections.push({ act, lodgeId: candidate.lodgeId });
      usedIds.add(candidate.lodgeId);
    }
  }

  // Fallback: ensure at least 3 chapters even if some acts had no natural match
  for (const s of eligible) {
    if (selections.length >= 5) break;
    if (!usedIds.has(s.lodgeId) && selections.length < 3) {
      const nextAct = ACT_ORDER[selections.length];
      selections.push({ act: nextAct, lodgeId: s.lodgeId });
      usedIds.add(s.lodgeId);
    }
  }

  selections.sort((a, b) => ACT_ORDER.indexOf(a.act) - ACT_ORDER.indexOf(b.act));

  const totalDays = TRIP_DURATION_DAYS[profile.tripDuration] ?? 7;
  const perChapter = Math.max(2, Math.round(totalDays / selections.length));
  let cursor = 1;

  const entries: JourneySequenceEntry[] = selections.map((sel, idx) => {
    const start = cursor;
    const end = idx === selections.length - 1 ? totalDays : Math.min(totalDays, start + perChapter - 1);
    cursor = end + 1;
    return {
      lodgeId: sel.lodgeId,
      act: sel.act,
      order: idx,
      dayRange: start === end ? `Day ${start}` : `Days ${start}-${end}`,
    };
  });

  return {
    theme: pickTheme(profile),
    emotionalArc: entries.map((e) => ARC_WORD[e.act]),
    entries,
  };
}