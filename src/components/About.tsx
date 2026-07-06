import { GraduationCap, Landmark, Calendar, Award } from "lucide-react";
import { EDUCATION_DATA } from "../types";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Biography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/5 relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors"></div>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am a highly driven <span className="text-purple-400 font-semibold">Computer Science with Artificial Intelligence</span> student based in Coimbatore, India, passionate about engineering intelligent systems and crafting polished, high-performance web products.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My scientific interests encompass the full hardware-to-cloud spectrum: building trained deep learning models, configuring robust IoT Embedded architectures, and delivering scalable responsive user-experiences.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I actively engage in nationwide technical hackathons, conduct physical research presentations, and operate as a specialized <span className="text-cyan-400 font-semibold">Freelancer</span> — programming web portals and applications that elevate startups and local brands.
              </p>

              {/* Decorative key metrics in Bio */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Location</span>
                  <p className="text-sm font-semibold text-white">Coimbatore, IN</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Focus Areas</span>
                  <p className="text-sm font-semibold text-cyan-400">AI / IoT / Web</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Timeline Block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5"
            >
              <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Education Timeline</span>
              </h3>

              <div className="relative border-l border-white/10 pl-6 space-y-8">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center border-4 border-[#090909] group-hover:scale-125 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-purple-500" />
                        <span>{edu.institution}</span>
                      </p>

                      {edu.grade && (
                        <div className="inline-flex items-center gap-1 text-xs text-cyan-400 font-mono font-medium bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                          <Award className="w-3 h-3 text-cyan-400" />
                          <span>{edu.grade}</span>
                        </div>
                      )}

                      {edu.description && (
                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                          {edu.description}
                        </p>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
