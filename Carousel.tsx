
"use client";

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

export function Component({ images }: CarouselProps) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
        ))}
      </Carousel>
    </div>
  );
}
