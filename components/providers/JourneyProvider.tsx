"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { OnboardingAnswers } from "@/types/stm";
import type {
  JourneyBlueprint,
  SavedJourneyRef,
  GenerateJourneyResponse,
} from "@/types/journey";
import { sampleBlueprint } from "@/config/demo";

type PartialAnswers = Partial<OnboardingAnswers>;

interface JourneyContextValue {
  answers: PartialAnswers;
  setAnswer: (id: keyof OnboardingAnswers, value: string) => void;
  blueprint: JourneyBlueprint | null;
  saved: SavedJourneyRef | null;
  generateBlueprint: () => Promise<void>;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<PartialAnswers>({});
  const [blueprint, setBlueprint] = useState<JourneyBlueprint | null>(null);
  const [saved, setSaved] = useState<SavedJourneyRef | null>(null);

  const setAnswer = useCallback((id: keyof OnboardingAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const generateBlueprint = useCallback(async () => {
    try {
      const response = await fetch("/api/journey/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error(`Journey generation failed: ${response.status}`);
      }

      const result: GenerateJourneyResponse = await response.json();
      setBlueprint(result.blueprint);
      setSaved(result.saved);
    } catch (err) {
      console.error("Falling back to demo blueprint:", err);
      setBlueprint(sampleBlueprint);
      setSaved(null);
    }
  }, [answers]);

  return (
    <JourneyContext.Provider
      value={{ answers, setAnswer, blueprint, saved, generateBlueprint }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney must be used within JourneyProvider");
  return ctx;
}