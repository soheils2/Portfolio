import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { ImageHoverFade } from "./imageSlider";
import { IconType } from "react-icons";
import { RiGlobalLine } from "react-icons/ri";

export interface StackItem {
  icon: IconType;
  color?: string;
}

export interface ProjectCardProps {
  title: string;
  position: string;
  description: string;
  images: string[];
  links: { type: "github" | "external"; url: string }[];
  stack: StackItem[];
}

export function ProjectCard({
  title,
  position,
  description,
  images,
  links,
  stack,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-2 sm:p-4 flex flex-col items-start justify-between h-full">
        {/* Image / Slideshow */}
        <div className="rounded-lg overflow-hidden mb-4 ">
          <ImageHoverFade images={images} alt={title} hovered={hovered} />
        </div>

        {/* Title and Links */}
        <div className="flex items-center justify-between space-x-4 mb-1 w-full">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex-1">
            {title}
          </h3>
          {links.map(({ type, url }) => {
            const Icon = type === "github" ? BsGithub : RiGlobalLine;
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-orange-500 dark:hover:bg-red-600 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-100" />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
          {position}
        </p>
        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
          {description}
        </p>

        {/* Stack Icons */}
        <div className="flex items-center gap-2">
          {stack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10"
              >
                <Icon className="w-8 h-8" color={item.color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
