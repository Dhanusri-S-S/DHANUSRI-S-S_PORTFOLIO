import { useState, useEffect } from "react";
import { Github, Linkedin, FileText, CalendarCheck, Sparkles, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (selector: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const words = [
    "AI Developer",
    "Frontend Web Developer",
    "Embedded Systems Enthusiast",
    "Creative Freelancer",
    "Computer Science & AI Specialist"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === word) {
          // Finished typing, pause
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleDownloadResume = () => {
    // Generate an elegant, responsive virtual resume PDF/HTML print preview 
    const resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
      resumeWindow.document.write(`
        <html>
          <head>
            <title>Dhanusri S S - Resume Preview</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            <style>
              body { font-family: 'Inter', sans-serif; }
              @media print {
                .no-print { display: none; }
                body { background-color: white !important; color: black !important; }
              }
            </style>
          </head>
          <body class="bg-gray-900 text-gray-100 p-8 md:p-16 max-w-4xl mx-auto">
            <div class="flex justify-between items-center border-b border-gray-700 pb-6 mb-8 no-print">
              <h1 class="text-xl font-bold text-cyan-400">Dhanusri S S Resume</h1>
              <button onclick="window.print()" class="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-semibold transition-colors shadow-lg">
                Print / Download PDF
              </button>
            </div>
            
            <div class="bg-slate-800 p-8 rounded-xl border border-gray-700 shadow-2xl print:border-none print:bg-white print:text-black">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-cyan-500/30 pb-6 mb-6">
                <div>
                  <h1 class="text-3xl font-bold tracking-tight text-white print:text-black">Dhanusri S S</h1>
                  <p class="text-cyan-400 font-medium mt-1">AI Developer &amp; Web Engineer</p>
                </div>
                <div class="mt-4 md:mt-0 text-left md:text-right text-sm text-gray-400 print:text-gray-700">
                  <p>Email: 251ce017@srcw.ac.in</p>
                  <p>Location: Coimbatore, Tamil Nadu, India</p>
                  <p>GitHub: github.com/dhanusriss</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2 space-y-6">
                  <!-- Education -->
                  <section>
                    <h2 class="text-lg font-bold uppercase tracking-wider text-cyan-300 border-b border-gray-700 pb-2 mb-3 print:text-black print:border-black">Education</h2>
                    <div class="space-y-4">
                      <div>
                        <div class="flex justify-between font-semibold text-white print:text-black">
                          <h3>B.Sc Computer Science with AI</h3>
                          <span>2023 - 2026</span>
                        </div>
                        <p class="text-sm text-gray-300 print:text-gray-800">Sri Ramakrishna College of Arts &amp; Science for Women</p>
                        <p class="text-xs text-cyan-400 font-medium">CGPA: 9.78 / 10</p>
                      </div>
                    </div>
                  </section>

                  <!-- Experience -->
                  <section>
                    <h2 class="text-lg font-bold uppercase tracking-wider text-cyan-300 border-b border-gray-700 pb-2 mb-3 print:text-black print:border-black">Experience</h2>
                    <div class="space-y-4">
                      <div>
                        <div class="flex justify-between font-semibold text-white print:text-black">
                          <h3>Embedded Systems Intern</h3>
                          <span>2025</span>
                        </div>
                        <p class="text-sm text-cyan-400">Balvion Technologies</p>
                        <ul class="list-disc pl-5 mt-2 text-xs text-gray-300 print:text-gray-800 space-y-1">
                          <li>Developed the core architecture of the Smart Sanitation System with integrated hardware feedback systems.</li>
                          <li>Programmed microcontrollers in Embedded C for PIR and DHT22 sensory components.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <!-- Projects -->
                  <section>
                    <h2 class="text-lg font-bold uppercase tracking-wider text-cyan-300 border-b border-gray-700 pb-2 mb-3 print:text-black print:border-black">Projects</h2>
                    <div class="space-y-4">
                      <div>
                        <h4 class="font-semibold text-white print:text-black">Smart Sanitation System</h4>
                        <p class="text-xs text-gray-300 print:text-gray-800">Arduino-based safety and hygiene monitor involving air quality and proximity sensors.</p>
                      </div>
                      <div>
                        <h4 class="font-semibold text-white print:text-black">NiraHer Healthcare Platform</h4>
                        <p class="text-xs text-gray-300 print:text-gray-800">Machine learning platform using Python, FastAPI and OpenCV to evaluate healthcare parameters.</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="space-y-6">
                  <!-- Skills -->
                  <section>
                    <h2 class="text-lg font-bold uppercase tracking-wider text-cyan-300 border-b border-gray-700 pb-2 mb-3 print:text-black print:border-black">Technical Skills</h2>
                    <div class="space-y-3">
                      <div>
                        <h4 class="text-xs font-semibold text-gray-400 uppercase">Languages</h4>
                        <p class="text-sm text-gray-200 print:text-black">Python, JavaScript, Embedded C, HTML, CSS</p>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-gray-400 uppercase">Frontend</h4>
                        <p class="text-sm text-gray-200 print:text-black">React, Vite, Tailwind CSS</p>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-gray-400 uppercase">AI &amp; ML</h4>
                        <p class="text-sm text-gray-200 print:text-black">Scikit-Learn, Pandas, NumPy, OpenCV, KNIME</p>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-gray-400 uppercase">Embedded</h4>
                        <p class="text-sm text-gray-200 print:text-black">Arduino, PIR, Gas sensors, DHT22</p>
                      </div>
                    </div>
                  </section>

                  <!-- Certifications -->
                  <section>
                    <h2 class="text-lg font-bold uppercase tracking-wider text-cyan-300 border-b border-gray-700 pb-2 mb-3 print:text-black print:border-black">Certifications</h2>
                    <ul class="list-disc pl-4 text-xs text-gray-300 print:text-gray-800 space-y-1">
                      <li>Programming in C - Infosys</li>
                      <li>AI Principles and Techniques - HCL GUVI</li>
                      <li>Oracle Job Readiness</li>
                      <li>NASSCOM Yuva AI</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </body>
        </html>
      `);
      resumeWindow.document.close();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090909]"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-purple-600/10 blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-cyan-600/10 blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Headline and Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
              <span>Available for Freelance &amp; Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient-purple-cyan drop-shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                Dhanusri S S
              </span>
            </motion.h1>

            {/* Typing animation block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-mono font-medium text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                {currentText}
                <span className="animate-pulse font-bold text-white">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed mb-10"
            >
              I build intelligent applications, embedded systems, and modern web experiences that solve real-world problems. Specialized in AI development and high-converting frontend solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => onScrollToSection("#projects")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/25 transition-all duration-300 text-sm cursor-pointer"
              >
                View Projects
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 rounded-xl glass-card border border-white/15 text-white hover:bg-white/10 font-semibold flex items-center gap-2 transition-all duration-300 text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume Preview</span>
              </button>

              <button
                onClick={() => onScrollToSection("#contact")}
                className="px-6 py-3 rounded-xl glass-card border border-white/15 text-white hover:text-purple-400 hover:border-purple-500/40 font-semibold flex items-center gap-2 transition-all duration-300 text-sm cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-purple-400" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Social handles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-5 text-gray-400"
            >
              <span className="text-xs uppercase tracking-widest font-mono text-gray-500">Connect:</span>
              <a
                href="https://github.com/dhanusriss"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dhanusriss"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 hover:scale-110 transition duration-300 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative group cursor-pointer"
            >
              {/* Outer Glow Borders */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600 to-cyan-500 opacity-40 blur-lg group-hover:opacity-75 transition duration-500"></div>
              
              {/* Glass container for photo */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card p-3 shadow-2xl">
                <img
                  src="/src/assets/images/dhanusri_portrait_1783338166094.jpg"
                  alt="Dhanusri S S Headshot"
                  className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Micro Status */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl glass-card border border-white/15 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wide text-gray-200">
                      Active Developer
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                    9.78 CGPA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => onScrollToSection("#about")}
            className="p-1 rounded-full border border-gray-600 cursor-pointer hover:border-cyan-400"
          >
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
