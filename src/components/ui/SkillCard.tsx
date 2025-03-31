import React from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({ name, icon: Icon, color, url }: SkillCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className=" h-ful group relative flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl "
      style={{ "--glow-color": color } as React.CSSProperties}
    >
      {/* Icon with Background */}
      <div className="p-3 rounded-full transition-all duration-300 " style={{ backgroundColor: `${color}1A` }}>
        <Icon size={50} color={color}  />
      </div>

      {/* Skill Name */}
      <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{name}</span>
    </a>
  );
}