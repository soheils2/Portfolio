import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white text-gray-900">
      {children}
    </h2>
  );
}