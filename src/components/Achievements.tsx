import { useEffect, useState } from "react";
import { GraduationCap, Award, FolderGit2, Presentation, Trophy, CheckCircle2 } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../types";
import { motion } from "motion/react";

export default function Achievements() {
  const [counts, setCounts] = useState<number[]>(ACHIEVEMENTS_DATA.map(() => 0));

  useEffect(() => {
    // Custom light counter animation on mount / visible
    const duration = 1500; // ms
    const steps = 30;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        ACHIEVEMENTS_DATA.map((item) => {
          const target = item.number;
          const current = (target / steps) * currentStep;
          return current >= target ? target : parseFloat(current.toFixed(2));
        })
      );

      if (currentStep >= steps) {
        setCounts(ACHIEVEMENTS_DATA.map((item) => item.number));
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-purple-400 animate-pulse" />;
      case "FolderGit2":
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
      case "Presentation":
        return <Presentation className="w-5 h-5 text-purple-400" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-amber-400 animate-bounce" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#090909] border-y border-white/5">
      {/* Background radial spotlights */}
      <div className="absolute top-0 left-1/3 w-[20vw] h-[20vw] rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[20vw] h-[20vw] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Achievements Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {ACHIEVEMENTS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-5 sm:p-6 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative group flex flex-col items-center justify-center"
            >
              {/* Animated hover glow behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

              {/* Icon */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-tr group-hover:from-purple-500/10 group-hover:to-cyan-500/15 group-hover:border-purple-500/30 transition-all duration-300 mb-4">
                {getStatIcon(stat.icon)}
              </div>

              {/* Stat Value */}
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                <span>{counts[idx]}</span>
                {stat.suffix && <span className="text-cyan-400 font-mono text-xl ml-0.5">{stat.suffix}</span>}
              </div>

              {/* Label */}
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest mt-2 block text-center line-clamp-2 min-h-[32px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
