import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function BeginPage() {
  return (
    <main className="min-h-screen flex items-center bg-neutral-950">
      <Container className="text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Before we begin</p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          A few honest questions.<br />No right answers — only yours.
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
          It takes about three minutes. What you share shapes everything that follows.
        </p>
        <Link href="/questions" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
          Start
        </Link>
      </Container>
    </main>
  );
}