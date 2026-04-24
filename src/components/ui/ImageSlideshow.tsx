"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSlideshowProps {
  images: { src: string; alt: string; objectPosition?: string }[];
  interval?: number; // ms between transitions
  className?: string;
}

export default function ImageSlideshow({
  images,
  interval = 3000,
  className = "",
}: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 600); // fade-out duration
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-opacity duration-700"
          style={{
            objectPosition: img.objectPosition ?? "center",
            opacity: i === current ? (fading ? 0 : 1) : 0,
          }}
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      ))}
    </div>
  );
}
