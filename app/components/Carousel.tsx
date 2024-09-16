// components/Carousel.tsx

"use client";

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

export function Component({ images }: CarouselProps) {
  return (
    <div className="relative w-full h-96">
      <Carousel>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              objectFit="cover"
              className="rounded-lg"
              priority
            />
            <a></a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
