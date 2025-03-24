import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
    const roles = [
      "Full Stack",
      "Software",
      "React Native",
      "Flutter",
      "MERN Stack",
      "Nextjs",
      "API Architecture",
      "Web App",
      "TinyML",
      "Embedded System & IOT",
    ];

  

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden snap-start"
    >

      {/* Animated background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
        {/* Animated gradient orbs */}
        {/* <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" /> */}
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start justify-center text-left space-y-4 order-2 md:order-1">
            <div className="space-y-2 md:mb-12">

              <div className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-exo2">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
              <h1 className="text-4xl font-exo2 lg:text-6xl font-bold  animate-gradient">
                Developer.
              </h1>
              <h1 className="text-4xl lg:text-6xl font-exo2 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Soheil Asami
              </h1>
            </div>

            {/* <ContactInfo /> */}
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2 scale-20 md:scale-100">
            {/* Floating solid circular elements */}
            <div className="absolute w-16 h-16 bg-green-600 top-0 left-0 rounded-full animate-floating" />
            <div className="absolute w-16 h-16 bg-yellow-600 bottom-0 right-0 rounded-full animate-floating delay-150" />
            {/* <div className="absolute w-20 h-20 bg-green-500 top-4 right-4 rounded-full animate-floating delay-300" />
            <div className="absolute w-20 h-20 bg-yellow-500 bottom-4 left-4 rounded-full animate-floating delay-450" /> */}

            <div className="absolute  rounded-full " />
            <img
              src="/assets/avtg.png"
              alt="Soheil Asami"
              className="relative w-full max-w-lg mx-auto shadow-lg rounded-full transform hover:scale-110 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div> */}
        <div onClick={() => window.location.href = "#about"} className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
              <p className=" dark:text-white text-gray-400 text-sm mb-4">Scroll Down</p>
          <div className="w-8 h-12 rounded-full border-2 dark:border-white border-gray-800 flex items-start justify-center relative">
            <div className="w-1 h-2 dark:bg-white bg-gray-800 rounded-full animate-scroll-bounce mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
