'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

interface TimelineEventProps {
  event: {
    year: string;
    title: string;
    description: string;
    image: string;
  };
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function TimelineEvent({
  event,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: TimelineEventProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-10 sm:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-widest uppercase">
            {event.year}
          </p>
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">
            {event.title}
          </h2>

          {event.image && (
            <div className="relative w-full h-64 sm:h-80 mb-6 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center gap-4">
        <Button onClick={onPrev} disabled={!hasPrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button onClick={onNext} disabled={!hasNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
