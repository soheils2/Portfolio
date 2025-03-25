import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GitHub } from "./components/GitHub";
import { Leetcode } from "./components/Leetcode";
import { Badges } from "./components/Badges";
import { Blogs } from "./components/Blogs";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { useLoading } from "./hooks/useLoading";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import { SocialLinks } from "./components/hero/SocialLinks";

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
      />

      {/* <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.08]" />
      </div> */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {Array.from({ length: 120 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 60}vh`; // Random vertical start position
          const delay = `${Math.random() * 10}s`;
          const duration = `${8 + Math.random() * 50}s`; // Slower fall
          const sizex = 1 + Math.random() * 3; // Random size between 1 to 5
          const sizey = 1 + Math.random() * 4; // Random size between 1 to 5

          return (
            <div
              key={i}
              className="absolute w-[3px] h-[3px] bg-blue-600 dark:bg-white opacity-0 rounded-full animate-star-fall filter blur-[1px] brightness-125"
              style={{
                left,
                top,
                animationDelay: delay,
                animationDuration: duration,
                width: `${sizex}px`,
                height: `${sizey}px`,
              }}
            />
          );
        })}
      </div>
      <div
        // className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        className={`min-h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >

        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Leetcode />
        <Badges />
        <Blogs />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;
