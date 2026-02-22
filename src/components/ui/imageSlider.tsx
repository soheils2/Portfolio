import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  alt: string;
  hovered: boolean;
}

export function ImageSlider({ images, alt, hovered }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    if (hovered && images.length > 1) {
      setCurrentIndex(1);
      let nextIndex = 2;
      intervalId = setInterval(() => {
        setCurrentIndex(nextIndex);
        nextIndex++;
        if (nextIndex >= images.length) {
          nextIndex = 1;
        }
      }, 1200);
    } else {
      setCurrentIndex(0);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [hovered, images.length]);

  if (!images.length) {
    return <div className="bg-zinc-200 dark:bg-zinc-800 w-full h-64 rounded-lg" />;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[0]}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      />
      {images.slice(1).map((src, idx) => {
        const imageIndex = idx + 1;
        return (
          <img
            key={src}
            src={src}
            alt={`${alt} - screenshot ${imageIndex + 1}`}
            loading="lazy"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageIndex === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
    </div>
  );
}
