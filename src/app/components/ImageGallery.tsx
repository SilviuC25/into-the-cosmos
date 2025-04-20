import Image from 'next/image';

type Props = {
  images: string[];
};

export default function ImageGallery({ images }: Props) {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((src, i) => (
        <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={`Gallery image ${i + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
