"use client";

import { motion } from "framer-motion";

export function QuestionCard({
  label, selected, onSelect,
}: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`w-full text-left px-6 py-4 rounded-2xl border transition-colors duration-300 ${
        selected
          ? "border-amber-400 bg-amber-400/10 text-amber-300"
          : "border-neutral-800 bg-neutral-900 hover:border-neutral-600"
      }`}
    >
      {label}
    </motion.button>
  );
}