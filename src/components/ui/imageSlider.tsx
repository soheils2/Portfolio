import  { useState, useEffect } from "react";

interface ImageHoverFadeProps {
  images: string[];
  alt: string;
  hovered: boolean;
}

export function ImageHoverFade({ images, alt, hovered }: ImageHoverFadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJs.Timeout | null = null;
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
    return <div className="bg-gray-200 w-full h-64" />;
  }

  const baseImageSrc = images[0];

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={baseImageSrc}
        alt={alt}
        className={`
          w-full h-full object-cover transition-opacity duration-500
          ${currentIndex === 0 ? "opacity-100" : "opacity-0"}
        `}
      />
      {images.slice(1).map((src, idx) => {
        const imageIndex = idx + 1;
        return (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`
              absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 
              ${imageIndex === currentIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        );
      })}
    </div>
  );
}
