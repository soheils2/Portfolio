import React, { useEffect, useState } from "react";
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
import { SnowFall } from "./components/ui/SnowFall";

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {/* <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.08]" />
      </div> */}
      {/* <SnowFall /> */}
      <div
        className={`min-h-screen overflow-y-scroll overflow-x-hidden scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <GitHub />
        <Leetcode />
        <Badges />
        <Blogs /> */}
        <Experience />
        {/* <Certifications /> */}
        <Education />
        <Contact />
        <Footer />
        {/* <Analytics /> */}
      </div>
    </>
  );
}

export default App;
