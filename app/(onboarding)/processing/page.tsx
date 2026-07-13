"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useJourney } from "@/components/providers/JourneyProvider";
import { Container } from "@/components/layout/Container";

const STAGES = [
  "Understanding your travel style...",
  "Matching experiences across Kenya...",
  "Designing your journey...",
  "Creating your Journey Blueprint...",
];

export default function ProcessingPage() {
  const router = useRouter();
  const { generateBlueprint } = useJourney();
  const [stage, setStage] = useState(0);
  const hasGenerated = useRef(false);

  useEffect(() => {
    if (!hasGenerated.current) {
      hasGenerated.current = true;
      generateBlueprint();
    }
  }, [generateBlueprint]);

  useEffect(() => {
    if (stage >= STAGES.length - 1) {
      const t = setTimeout(() => router.push("/reveal"), 1300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStage((s) => s + 1), 1300);
    return () => clearTimeout(t);
  }, [stage, router]);

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <Container className="text-center">
        <p key={stage} className="text-xl md:text-2xl text-neutral-200 font-light animate-pulse">
          {STAGES[stage]}
        </p>
      </Container>
    </main>
  );
}