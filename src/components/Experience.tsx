import { Briefcase, Calendar, MapPin, CheckCircle, Zap } from "lucide-react";
import { EXPERIENCE_DATA } from "../types";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-[30vw] h-[30vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-purple-500"></span>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">Chronology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Bridging hardware, artificial intelligence, and user workflows through real-world internships and competitive hackathons.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-4xl mx-auto border-l-2 border-white/10 pl-6 sm:pl-10 space-y-12 py-4">
          
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              
              {/* Timeline Node Point with animated pulse */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#090909] border-2 border-purple-500 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Briefcase className="w-3 h-3 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 group-hover:border-purple-500/20 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.08)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent blur-xl pointer-events-none"></div>

                {/* Role Header Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 mb-2">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Experience Achievements Bullet Points */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
