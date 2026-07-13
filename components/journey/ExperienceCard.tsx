"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceCard as ExperienceCardType } from "@/types/journey";
import { getLodgeImagePath } from "@/lib/utils/images";

const TIER_LABEL: Record<string, string> = {
  exceptional: "Exceptional Fit",
  strong: "Strong Alignment",
  supporting: "Supporting Experience",
  excluded: "",
};

export function ExperienceCard({ card }: { card: ExperienceCardType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 group"
    >
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
        <Image
          src={getLodgeImagePath(card.lodgeId)}
          alt={card.name}
          fill
          className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-xs uppercase tracking-widest text-amber-300 mb-1">{TIER_LABEL[card.tier]}</p>
          <h3 className="font-display text-2xl text-white font-medium">{card.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-neutral-500 mb-4">{card.region} · {card.journeyRole}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {card.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-neutral-400">{tag}</span>
          ))}
        </div>
        <p className="text-neutral-300 mb-4 leading-relaxed">{card.emotionalDescription}</p>
        <ul className="space-y-1.5">
          {card.whySelected.map((reason) => (
            <li key={reason} className="text-sm text-neutral-400">✓ {reason}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}