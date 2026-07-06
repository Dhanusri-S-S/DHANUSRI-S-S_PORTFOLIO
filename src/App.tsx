import { useState, useEffect } from "react";
import { ArrowUp, Sparkles, Code2, Monitor, Database, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Components Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Freelance from "./components/Freelance";
import Achievements from "./components/Achievements";
import GithubSection from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Loading Screen simulation & Desktop cursor detection
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1024 && !('ontouchstart' in window));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Tracking Scroll progress & Show Back to Top
  useEffect(() => {
    const handleScroll = () => {
      // Back to top threshold
      setShowBackToTop(window.scrollY > 400);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracking mouse movement for glowing cursor
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  // IntersectionObserver to trace active navigation sections
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "certifications", "freelance", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section covers mid screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : "light-theme"}>
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Custom Glowing Cursor */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-purple-500/30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out flex items-center justify-center bg-cyan-400/5 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
        </div>
      )}

      {/* Loading Splash Page */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#090909] flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center space-y-6">
              
              {/* Spinner Logo */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 animate-spin opacity-70 blur-md"></div>
                <div className="relative w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/10 z-10">
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Text Highlights */}
              <div className="text-center">
                <h2 className="text-lg font-display font-bold tracking-wider uppercase text-white">
                  Dhanusri S S
                </h2>
                <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-1">
                  AI Developer &amp; Web Engineer
                </p>
              </div>

              {/* Progress Bar mockup */}
              <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-purple-600 to-cyan-400"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Assembly */}
      {!loading && (
        <div className="relative min-h-screen transition-colors duration-300 bg-[#090909] text-gray-200 overflow-x-hidden">
          
          {/* Background Blobs */}
          <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none z-0"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none z-0"></div>

          {/* Header/Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />

          {/* Sections assembly */}
          <main>
            <Hero onScrollToSection={scrollToSection} />
            
            <About />
            
            <Skills />
            
            <Projects />
            
            <Experience />
            
            <Achievements />
            
            <Certifications />
            
            <Freelance onScrollToSection={scrollToSection} />
            
            <GithubSection />
            
            <Contact />
          </main>

          {/* Footer signature */}
          <Footer />

          {/* Floating Back-to-Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-card hover:bg-white/15 border border-white/15 text-cyan-400 hover:text-white transition-all shadow-xl cursor-pointer hover:scale-105"
                title="Back to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}
    </div>
  );
}
