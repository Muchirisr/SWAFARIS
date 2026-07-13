"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { OnboardingAnswers } from "@/types/stm";
import type { JourneyBlueprint } from "@/types/journey";
import { buildJourneyBlueprint } from "@/lib/sre/buildBlueprint";
import { sampleBlueprint } from "@/config/demo";

type PartialAnswers = Partial<OnboardingAnswers>;

interface JourneyContextValue {
  answers: PartialAnswers;
  setAnswer: (id: keyof OnboardingAnswers, value: string) => void;
  blueprint: JourneyBlueprint | null;
  generateBlueprint: () => void;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<PartialAnswers>({});
  const [blueprint, setBlueprint] = useState<JourneyBlueprint | null>(null);

  const setAnswer = useCallback((id: keyof OnboardingAnswers, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const generateBlueprint = useCallback(() => {
    try {
      const result = buildJourneyBlueprint(answers as OnboardingAnswers);
      setBlueprint(result);
    } catch (err) {
      console.error("Falling back to demo blueprint:", err);
      setBlueprint(sampleBlueprint);
    }
  }, [answers]);

  return (
    <JourneyContext.Provider value={{ answers, setAnswer, blueprint, generateBlueprint }}>
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney must be used within JourneyProvider");
  return ctx;
}