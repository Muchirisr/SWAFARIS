"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { onboardingQuestions } from "@/data/questions";
import { useJourney } from "@/components/provider/JourneyProvider";
import { QuestionCard } from "@/components/onboarding/QuestionCard";
import { Container } from "@/components/layout/Container";

export default function QuestionsPage() {
  const router = useRouter();
  const { answers, setAnswer } = useJourney();
  const [index, setIndex] = useState(0);
  const [freeText, setFreeText] = useState("");

  const question = onboardingQuestions[index];
  const isLast = index === onboardingQuestions.length - 1;
  const currentValue = answers[question.id];

  function goNext() {
    if (isLast) router.push("/processing");
    else setIndex((i) => i + 1);
  }

  function selectOption(value: string) {
    setAnswer(question.id, value);
    goNext();
  }

  function submitFreeText() {
    setAnswer(question.id, freeText);
    goNext();
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col">
      <div className="w-full h-1 bg-neutral-900">
        <div
          className="h-1 bg-amber-400 transition-all duration-500"
          style={{ width: `${((index + 1) / onboardingQuestions.length) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex items-center">
        <Container className="max-w-2xl">
          <p className="text-neutral-500 text-sm mb-4">
            Question {index + 1} of {onboardingQuestions.length}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 leading-snug">{question.prompt}</h2>

          {question.type === "select" && (
            <div className="space-y-3">
              {question.options?.map((opt) => (
                <QuestionCard
                  key={opt.value}
                  label={opt.label}
                  selected={currentValue === opt.value}
                  onSelect={() => selectOption(opt.value)}
                />
              ))}
            </div>
          )}

          {question.type === "freeText" && (
            <div className="space-y-6">
              <textarea
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                placeholder="Optional — share anything that matters to your journey."
                className="w-full min-h-[140px] rounded-2xl border border-neutral-800 bg-neutral-900 p-4 text-neutral-100 placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none"
              />
              <button onClick={submitFreeText} className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
                Continue
              </button>
            </div>
          )}
        </Container>
      </div>
    </main>
  );
}