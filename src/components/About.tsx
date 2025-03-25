import {
  User2,
  Code2,
  Lightbulb,
  Laptop2,
  Hammer,
  Clock4,
  Smile,
  UserCheck,
  HeartHandshake,
  GlobeLock,
} from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

import { BadgeCheck, Wrench, Globe2, Handshake } from "lucide-react";
import { useState } from "react";

const aboutSections = [
  {
    icon: BadgeCheck,
    title: "Developer at Heart",
    description: [
      "29 y/o full-stack developer with 6+ years of hands-on experience.",
      "Driven by curiosity, focused on clean, scalable systems.",
      "Always evolving with new technologies.",
    ],
    color: "bg-blue-600",
    image: "/assets/4hndsfullleft.png",
  },
  {
    icon: Hammer,
    title: "Build & Boost",
    description: [
      "New product? I’ll build it with the best-fit stack just for you.",
      "Got code? I’ll optimize your code for speed, structure, and design.",
      "Need consult? I’ll guide you to the smartest tech decisions.",
    ],
    color: "bg-purple-600",
    image: "/assets/4hndsfullright.png",
  },
  {
    icon: Globe2,
    title: "Timezone Friendly",
    description: [
      "Wherever you are, I adjust to your working hours.",
      "Real-time updates, no missed messages or delays.",
      "Your workflow stays smooth — across any time zone.",
    ],
    color: "bg-green-600",
    image: "/assets/4hndsfulldleft.png",
  },
  {
    icon: HeartHandshake,
    title: "Easy to Work With",
    description: [
      "Clear, calm, and collaborative.",
      "Soft skills that make shipping smooth.",
      "People-first mindset, always.",
    ],
    color: "bg-orange-600",
    image: "/assets/4hndsfulldright.png",
  },
];

export function About() {
  const [activeImage, setActiveImage] = useState("/assets/4hndsfull.png");
  return (
    <section
      id="about"
      className="min-h-screen py-20 relative overflow-hidden snap-start"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div> */}

      <div className="container mx-auto px-6 relative">

        <img  src={activeImage}

          alt="Soheil Asami"
          className="hidden md:block md:absolute w-full max-w-lg mx-auto md:top-[55%] lg:top-[60%]  md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        />
        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-80 max-w-full mx-auto items-center">
          {aboutSections.map(
            ({ icon: Icon, title, description, color, image }, index) => (
              <div
                onMouseEnter={() => setActiveImage(image)}
                onMouseLeave={() => setActiveImage("/assets/4hndsfull.png")}
                key={title}
                className="relative group max-w-md md:w-full md:max-w-full mx-auto"
              >
                {/* Card Content */}
                <div
                  className={`relative p-6 border md:border-0 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1`}
                >
                  {/* Background Effect */}
                  <div
                    className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                  />
                  <div className={`flex items-center mb-4 space-x-4 }`}>
                    {/* <div className={`flex items-center mb-4 space-x-4 ${index === 0 || index === 2 ? 'items-end flex-row-reverse' : ''}`}> */}
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className=" text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {title}
                    </h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                {index == 1 && (
                  <div className="block md:hidden w-full flex justify-center my-2">
                    <img
                      src="/assets/4hnds.png"
                      alt="Soheil Asami"
                      className="md:absolute mb-16 md:mb-0 w-full max-w-lg mx-auto md:top-1/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 transform transition-transform duration-500 "
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
