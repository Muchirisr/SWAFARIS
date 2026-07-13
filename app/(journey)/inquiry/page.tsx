import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function InquiryPage() {
  return (
    <main className="bg-neutral-950 min-h-screen flex items-center">
      <Section>
        <Container className="max-w-xl text-center">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Begin Planning</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-10">Your journey is ready. Let's make it real.</h1>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@swafaris.com?subject=Request%20Full%20Itinerary" className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
              Request Full Itinerary
            </a>
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-200 font-medium hover:border-neutral-500 transition-colors">
              WhatsApp Concierge
            </a>
            <a href="mailto:hello@swafaris.com" className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-200 font-medium hover:border-neutral-500 transition-colors">
              Talk To Swafaris
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}