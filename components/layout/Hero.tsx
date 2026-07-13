"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getHeroImagePath } from "@/lib/utils/images";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={getHeroImagePath()}
          alt="Kenyan savannah at golden hour"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-amber-400 uppercase tracking-[0.4em] text-xs md:text-sm mb-8"
        >
          Swafaris
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6 text-white"
        >
          Discover Kenya,<br />your way.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-neutral-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light"
        >
          Curated by intelligence. Felt by heart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/begin" className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors">
            Begin Your Journey
          </Link>
          <a href="#how-it-works" className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:border-white/60 transition-colors backdrop-blur-sm">
            How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}