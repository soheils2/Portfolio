import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelor of Engineering in Electronic Engineering',
    institution: 'Islamic Azad University, Isfahan, Iran',
    period: 'Graduated Jun 2017',
    score: '80%', // Not specified
  },
];


export function Education() {
  return (
    <section id="education" className="py-20 snap-start">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
