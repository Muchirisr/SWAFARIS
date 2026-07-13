"use client";

import Link from "next/link";
import { useJourney } from "@/components/providers/JourneyProvider";
import { sampleBlueprint } from "@/config/demo";
import { Container } from "@/components/layout/Container";
import { ExperienceCard } from "@/components/journey/ExperienceCard";
import { Section } from "@/components/layout/Section";

const POSITION_MAP: Record<string, string> = {
  "Quiet Exploration": "10%", "Balanced Exploration": "50%", "Wild Adventure": "90%",
  "Slow Immersion": "10%", "Fast Expedition": "90%",
  "Private Escape": "10%", "Balanced Connection": "50%", "Social Exploration": "90%",
  "Constant Activity": "90%", "Balanced Renewal": "50%", "Deep Renewal": "10%",
};

function CompassRow({ label, left, right, value }: { label: string; left: string; right: string; value: string }) {
  const position = POSITION_MAP[value] ?? "50%";
  return (
    <div className="mb-8">
      <p className="text-sm text-neutral-500 mb-2">{label}</p>
      <div className="relative h-[2px] bg-neutral-800 rounded-full">
        <div className="absolute -top-[5px] w-3 h-3 rounded-full bg-amber-400" style={{ left: position, transform: "translateX(-50%)" }} />
      </div>
      <div className="flex justify-between mt-2 text-xs text-neutral-500">
        <span>{left}</span><span>{right}</span>
      </div>
    </div>
  );
}

const TIER_LABEL: Record<string, string> = {
  exceptional: "Exceptional Fit", strong: "Strong Alignment", supporting: "Supporting Experience", excluded: "",
};

export default function BlueprintPage() {
  const { blueprint } = useJourney();
  const data = blueprint ?? sampleBlueprint;

  return (
    <main className="bg-neutral-950 min-h-screen">
      <Section className="pt-24 pb-16 text-center">
        <Container>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Your Travel Identity</p>
          <h1 className="font-display text-4xl md:text-7xl font-medium mb-8">{data.identityTitle}</h1>
        </Container>
      </Section>

      <Section className="bg-neutral-900">
        <Container className="max-w-2xl text-center">
          <h2 className="text-lg text-amber-400 uppercase tracking-[0.2em] mb-6">Journey Philosophy</h2>
          <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-light">{data.journeyPhilosophy}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-xl">
          <h2 className="text-lg text-amber-400 uppercase tracking-[0.2em] mb-10 text-center">Your Journey Compass</h2>
          <CompassRow label="Adventure" left="Quiet Exploration" right="Wild Adventure" value={data.compass.adventure} />
          <CompassRow label="Journey Pace" left="Slow Immersion" right="Fast Expedition" value={data.compass.journeyPace} />
          <CompassRow label="Social Energy" left="Private Escape" right="Social Exploration" value={data.compass.socialEnergy} />
          <CompassRow label="Restoration" left="Deep Renewal" right="Constant Activity" value={data.compass.restoration} />
          <div className="text-center mt-4">
            <span className="inline-block px-4 py-2 rounded-full border border-amber-400/40 text-amber-300 text-sm">
              {data.compass.comfortPhilosophy}
            </span>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900">
        <Container className="max-w-2xl text-center">
          <h2 className="text-lg text-amber-400 uppercase tracking-[0.2em] mb-6">Why This Journey Fits You</h2>
          <p className="text-lg text-neutral-300 leading-relaxed">{data.whyThisFits}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-lg text-amber-400 uppercase tracking-[0.2em] mb-10 text-center">Journey Architecture</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {data.architecture.map((stage, i) => (
              <div key={stage.lodgeId} className="text-center flex-1">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p className="font-medium mb-1">{stage.title}</p>
                <p className="text-sm text-neutral-500">{stage.purpose}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900">
        <Container>
          <h2 className="font-display text-2xl text-amber-400 tracking-wide mb-10 text-center">Recommended Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.experienceCards.map((card) => (
              <ExperienceCard key={card.lodgeId} card={card} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="text-center">
        <Container>
          <h2 className="text-lg text-amber-400 uppercase tracking-[0.2em] mb-6">Your Journey At A Glance</h2>
          <p className="text-2xl font-semibold mb-2">{data.summary.journeyStyle}</p>
          <p className="text-neutral-400 mb-1">{data.summary.duration}</p>
          <p className="text-neutral-400 mb-6">{data.summary.regions.join(" · ")}</p>
          <p className="text-neutral-300 italic mb-10">{data.summary.philosophy}</p>
          <Link href="/timeline" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
            View Your Journey Timeline
          </Link>
        </Container>
      </Section>
    </main>
  );
}