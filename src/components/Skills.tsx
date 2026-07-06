import { Code, Layout, BrainCircuit, Cpu, Wrench, Users, CheckCircle2, Star } from "lucide-react";
import { SKILL_DATA } from "../types";
import { motion } from "motion/react";

export default function Skills() {
  // Map icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-purple-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-purple-400 animate-pulse" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background soft blob */}
      <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full bg-purple-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-purple-500"></span>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Skills &amp; Expertise
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            An overview of my core engineering, data intelligence, microchip programming, and professional design skillsets.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_DATA.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 border border-white/5 relative group ${
                idx % 2 === 0 ? "glass-card-hover" : "glass-card-cyan-hover"
              }`}
            >
              {/* Blur gradient behind card icon on hover */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 blur opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

              {/* Title Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-tr group-hover:from-purple-500/20 group-hover:to-cyan-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-purple-300 dark:group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skill tags mapping */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    <Star className="w-3 h-3 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Subtle background glow effect on bottom right corner */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 blur-md opacity-50"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
