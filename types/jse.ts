// types/jse.ts
// Types for the Journey Sequencing Engine (JSE).
// JSE answers: "How should these compatible experiences be arranged into a story?"

/** The Five Journey Acts, in canonical order. */
export type JourneyAct = "arrival" | "immersion" | "climax" | "reflection" | "farewell";

/** One lodge's placement within the sequenced journey. */
export interface JourneySequenceEntry {
  lodgeId: string;
  act: JourneyAct;
  order: number;     // position within the overall sequence, 0-indexed
  dayRange: string;  // e.g. "Days 3-5"
}

/**
 * JSE's complete working output — internal to the pipeline.
 * lib/sre/ consumes this to build the final JourneyBlueprint.
 */
export interface JourneySequence {
  theme: string;             // e.g. "From exhaustion to wonder."
  emotionalArc: string[];    // e.g. ["Recover", "Reconnect", "Explore", "Reflect", "Return"]
  entries: JourneySequenceEntry[];
}