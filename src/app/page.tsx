'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/hero-space.jpg"
        alt="Space background"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <motion.div
        className="relative z-20 p-6 space-y-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-indigo-300 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
        >
          Welcome to the Universe
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        >
          Embark on a journey through stars, planets, galaxies, and the great mysteries of space.
        </motion.p>
      </motion.div>
    </section>
  );
}
