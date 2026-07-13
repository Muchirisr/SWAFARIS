"use client";

import Link from "next/link";
import { useJourney } from "@/components/provider/JourneyProvider";
import { sampleBlueprint } from "@/config/demo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function TimelinePage() {
  const { blueprint } = useJourney();
  const data = blueprint ?? sampleBlueprint;

  return (
    <main className="bg-neutral-950 min-h-screen">
      <Section className="pt-24 pb-12 text-center">
        <Container>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Your Journey Timeline</p>
          <h1 className="text-3xl md:text-4xl font-semibold">{data.journeyTheme}</h1>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <div className="relative border-l border-neutral-800 pl-8 space-y-16">
            {data.timeline.map((chapter) => (
              <div key={chapter.lodgeId} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-amber-400" />
                <p className="text-sm text-amber-400 mb-2">{chapter.dayRange}</p>
                <h3 className="text-2xl font-semibold mb-1">{chapter.title}</h3>
                <p className="text-neutral-500 mb-3">{chapter.region}</p>
                <p className="text-neutral-300 mb-3">{chapter.purpose}</p>
                {chapter.highlights.map((h) => (
                  <p key={h} className="text-sm text-neutral-500">{h}</p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="text-center bg-neutral-900">
        <Container>
          <Link href="/inquiry" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
            Begin Planning
          </Link>
        </Container>
      </Section>
    </main>
  );
}