"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useJourney } from "@/components/provider/JourneyProvider";
import { sampleBlueprint } from "@/config/demo";
import { Container } from "@/components/layout/Container";

export default function RevealPage() {
  const { blueprint } = useJourney();
  const data = blueprint ?? sampleBlueprint;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2000);
    const t2 = setTimeout(() => setStage(2), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      <Container className="text-center">
        {stage < 2 && (
          <p className="text-neutral-400 text-lg md:text-xl font-light transition-opacity duration-1000">
            {stage === 0 ? "We've taken the time to understand how you travel." : "Your Kenyan journey begins with understanding."}
          </p>
        )}
        {stage === 2 && (
          <div className="transition-opacity duration-1000">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Your Travel Identity</p>
            <h1 className="text-4xl md:text-6xl font-semibold mb-8">{data.identityTitle}</h1>
            <Link href="/blueprint" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
              Reveal Your Journey
            </Link>
          </div>
        )}
      </Container>
    </main>
  );
}