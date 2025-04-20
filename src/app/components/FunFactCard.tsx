'use client';

import { motion } from 'framer-motion';

type FunFactCardProps = {
  icon: string;
  title: string;
  fact: string;
};

export default function FunFactCard({ icon, title, fact }: FunFactCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all text-left"
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-200 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{fact}</p>
    </motion.div>
  );
}
