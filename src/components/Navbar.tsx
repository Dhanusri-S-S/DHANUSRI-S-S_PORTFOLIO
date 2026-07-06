import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

export default function Navbar({ darkMode, setDarkMode, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Freelance", href: "#freelance" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#090909]/85 dark:bg-[#090909]/85 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <span className="font-display font-semibold tracking-tight text-lg text-white dark:text-white hover:text-purple-400 dark:hover:text-cyan-400 transition-colors">
              Dhanusri S S
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-purple-400 dark:text-cyan-400 bg-white/5 border border-white/10"
                      : "text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right utility buttons: Light/Dark Mode toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full glass-card hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full glass-card hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#090909]/95 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      isActive
                        ? "text-purple-400 bg-purple-500/10 border-l-4 border-purple-500"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
