'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import DetailList from './DetailList';
import ImageGallery from './ImageGallery';

type PlanetProps = {
  name: string;
  description: string;
  distanceFromSun: string;
  diameter: string;
  moons: string;
  image: string;
  gallery: string[];
};

export default function PlanetCard({
  name,
  description,
  distanceFromSun,
  diameter,
  moons,
  image,
  gallery,
}: PlanetProps) {
  return (
    <motion.div
      className="rounded-2xl border bg-white shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col lg:flex-row"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative w-full lg:w-1/3 h-64 lg:h-auto">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex-1 space-y-4">
        <h2 className="text-xl font-bold text-blue-700">{name}</h2>
        <p className="text-gray-600">{description}</p>

        <DetailList
          details={{
            'Distance from Sun': distanceFromSun,
            Diameter: diameter,
            Moons: moons,
          }}
        />

        <ImageGallery images={gallery} />
      </div>
    </motion.div>
  );
}
