import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function LandingPage() {
  return (
    <main>
      <Section className="min-h-[90vh] flex items-center bg-gradient-to-b from-neutral-950 to-neutral-900">
        <Container className="text-center">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Swafaris</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">Discover Kenya, your way.</h1>
          <p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Curated by intelligence. Felt by heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/begin" className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
              Begin Your Journey
            </Link>
            <a href="#how-it-works" className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-200 font-medium hover:border-neutral-500 transition-colors">
              How It Works
            </a>
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" className="bg-neutral-950">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
            We begin with you, not a destination.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { title: "Understand", copy: "We learn how you travel — your intentions, your rhythm, your idea of luxury." },
              { title: "Design", copy: "Our intelligence matches you with experiences across Kenya built for who you are." },
              { title: "Discover", copy: "Your personalized Journey Blueprint reveals a story designed entirely around you." },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="text-amber-400 text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Your Kenyan journey begins with understanding.</h2>
          <Link href="/begin" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
            Begin Your Journey
          </Link>
        </Container>
      </Section>
    </main>
  );
}