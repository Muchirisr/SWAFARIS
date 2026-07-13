"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useJourney } from "@/components/providers/JourneyProvider";
import { sampleBlueprint } from "@/config/demo";
import { Container } from "@/components/layout/Container";
import { getHeroImagePath } from "@/lib/utils/images";

export default function RevealPage() {
  const { blueprint } = useJourney();
  const data = blueprint ?? sampleBlueprint;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2200);
    const t2 = setTimeout(() => setStage(2), 4600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={getHeroImagePath()} alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-neutral-950/85" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-[1px] bg-amber-400 mx-auto mb-10"
        />

        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.p
              key="s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-neutral-300 text-lg md:text-xl font-light"
            >
              We&rsquo;ve taken the time to understand how you travel.
            </motion.p>
          )}
          {stage === 1 && (
            <motion.p
              key="s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-neutral-300 text-lg md:text-xl font-light"
            >
              Your Kenyan journey begins with understanding.
            </motion.p>
          )}
          {stage === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <p className="text-amber-400 uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Your Travel Identity</p>
              <h1 className="font-display text-5xl md:text-7xl font-medium text-white mb-10">{data.identityTitle}</h1>
              <Link href="/blueprint" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
                Reveal Your Journey
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </main>
  );
}