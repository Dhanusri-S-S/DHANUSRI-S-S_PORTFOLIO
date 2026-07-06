import { useState } from "react";
import { Github, ExternalLink, X, Info, Layers, CheckCircle2, Cpu, Globe } from "lucide-react";
import { PROJECTS_DATA, Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Map placeholders to visual indicators or return icons depending on project
  const getProjectIcon = (category: string) => {
    if (category.toLowerCase().includes("iot") || category.toLowerCase().includes("embedded")) {
      return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
    if (category.toLowerCase().includes("ai") || category.toLowerCase().includes("learning")) {
      return <Info className="w-5 h-5 text-purple-400" />;
    }
    return <Globe className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-[30vw] h-[30vw] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Premium Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Exploring deep learning, IoT sensor arrays, and consumer interfaces. Click 'View Details' for comprehensive architectural specifications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-purple-500/20 shadow-2xl transition-all duration-300"
            >
              {/* Cover Image/Pattern container */}
              <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Category Tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-[#090909]/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] sm:text-xs font-mono text-cyan-400">
                  {getProjectIcon(project.category)}
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Previews (Max 4) */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-white hover:text-purple-300 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Back Drop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative bg-[#0d0d0d] rounded-3xl border border-white/10 w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 border-b border-white/5 shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-90 z-10"></div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  
                  {/* Long description */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Overview</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Core features bullet list */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Key Implementations</h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Tech Stack */}
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Complete Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-[#090909] border-t border-white/5 flex flex-wrap gap-3 shrink-0">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[120px] py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>Explore Repository</span>
                    </a>
                  )}

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[120px] py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Prototype</span>
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
