// types/sme.ts
// Types for the Swafaris Matching Engine (SME).
// SME answers: "Which experiences fit this traveler, and how well?"

/**
 * Traveler-facing compatibility language. This is the ONLY part of a
 * compatibility result that should ever reach types/journey.ts or a component.
 */
export type CompatibilityTier = "exceptional" | "strong" | "supporting" | "excluded";

/**
 * The full internal scoring result for one lodge against one traveler.
 *
 * SERVER-ONLY. `score` is the literal percentage the product philosophy
 * forbids showing the traveler. Only lib/sme/ and lib/sre/ should import
 * this type.
 */
export interface CompatibilityScore {
  lodgeId: string;
  score: number;              // 0–100, internal only — see CompatibilityTier for display
  tier: CompatibilityTier;
  strengths: string[];        // e.g. ["Matches your desire for deep nature connection"]
  potentialMismatch?: string; // optional, e.g. "Less suitable for social travelers"
}