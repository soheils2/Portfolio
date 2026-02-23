import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced to 800ms — just enough for the name animation to land,
    // then immediately show content. Previous 2900ms was killing FCP/LCP.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}