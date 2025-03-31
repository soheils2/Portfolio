import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { useLoading } from "./hooks/useLoading";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {/* <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.08]" />
      </div> */}
      {/* <SnowFall /> */}
      {!isLoading && (
        <div
          className={`min-h-screen overflow-y-scroll overflow-x-hidden scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-white `}
        >
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
