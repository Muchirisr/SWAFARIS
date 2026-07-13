import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/layout/Hero";
export default function LandingPage() {
  return (
    <main>
      <Hero />

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