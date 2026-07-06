import { useState } from "react";
import { Github, GitCommit, GitFork, Star, ExternalLink, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GithubSection() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number } | null>(null);

  // Generate mock heatmap cells (7 rows for days of the week, 28 columns for responsive width)
  const rows = 7;
  const cols = 30;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getCellColor = (count: number) => {
    if (count === 0) return "bg-zinc-900 border border-zinc-800/50";
    if (count < 3) return "bg-emerald-950 border border-emerald-900/40";
    if (count < 6) return "bg-emerald-800 border border-emerald-700/40";
    if (count < 9) return "bg-emerald-600 border border-emerald-500/40";
    return "bg-cyan-400 border border-cyan-300/40";
  };

  // Static mock contributions data
  const gridData = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => {
      // Create natural clusters of higher commits
      const val = (r * c + 3) % 11;
      let count = 0;
      if (val > 8) count = 10;
      else if (val > 6) count = 7;
      else if (val > 3) count = 4;
      else if (val > 1) count = 2;
      return count;
    })
  );

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-[#090909]">
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            GitHub Contributions
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Actively shipping models, sensor logic, and client interfaces to public codebases.
          </p>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Heatmap block */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <Github className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-display font-bold text-white">@dhanusriss</h3>
                    <p className="text-[10px] sm:text-xs text-emerald-400 font-mono">427 contributions in the last year</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                  <Flame className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                  <span>34 Day Streak</span>
                </div>
              </div>

              {/* Heatmap Grid Wrapper */}
              <div className="overflow-x-auto pb-4">
                <div className="min-w-[550px] flex gap-3">
                  {/* Days column */}
                  <div className="flex flex-col justify-between py-1 text-[10px] font-mono text-gray-500 h-[105px] w-8">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Matrix */}
                  <div className="flex-1 flex flex-col gap-[3px]">
                    {gridData.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-[3px]">
                        {row.map((count, cIdx) => (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCell({ day: rIdx * cIdx, count })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-[12px] h-[12px] rounded-[2px] transition-all duration-150 cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(52,211,153,0.5)] ${getCellColor(count)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend & Tooltip detail */}
              <div className="flex items-center justify-between mt-4 text-[10px] sm:text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-950 border border-zinc-900"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-950"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-800"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-600"></div>
                  <div className="w-[10px] h-[10px] rounded-[2px] bg-cyan-400"></div>
                  <span>More</span>
                </div>

                <AnimatePresence>
                  {hoveredCell && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-emerald-400 font-bold"
                    >
                      {hoveredCell.count} commits on this day
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </div>

          {/* Side Statistics blocks */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/5 space-y-4 flex flex-col justify-between"
            >
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Workspace Stats</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">Repositories</span>
                  <span className="text-xl font-bold text-white font-display">12</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">Stars Gained</span>
                  <span className="text-xl font-bold text-cyan-400 font-display">35</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">Forks Made</span>
                  <span className="text-xl font-bold text-purple-400 font-display">8</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">Total Commits</span>
                  <span className="text-xl font-bold text-white font-display">1.2k</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="https://github.com/dhanusriss"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>Visit @dhanusriss GitHub</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
