import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SelectedWork } from "./components/SelectedWork";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EasterEgg } from "./components/EasterEgg";
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { useLoading } from "./hooks/useLoading";
import { useTheme } from "./hooks/useTheme";
import { TerminalProvider } from "./context/TerminalContext";

function App() {
  const isLoading = useLoading();
  const { isDark, setIsDark } = useTheme();

  return (
    <TerminalProvider>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen scroll-smooth">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-500 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <header role="banner">
          <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        </header>

        <main id="main-content" role="main">
          <Hero />
          <About />
          <SelectedWork />
          <Experience />
          <TechStack />
          <Contact />
        </main>

        <Footer />
        <EasterEgg />
      </div>
    </TerminalProvider>
  );
}

export default App;
