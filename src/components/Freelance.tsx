import { LayoutTemplate, Brain, Sparkles, Cpu, CheckCircle2, ArrowRight, MessageSquareCode } from "lucide-react";
import { FREELANCE_SERVICES } from "../types";
import { motion } from "motion/react";

interface FreelanceProps {
  onScrollToSection: (selector: string) => void;
}

export default function Freelance({ onScrollToSection }: FreelanceProps) {
  // Map icons dynamically
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutTemplate":
        return <LayoutTemplate className="w-6 h-6 text-cyan-400" />;
      case "Brain":
        return <Brain className="w-6 h-6 text-purple-400 animate-pulse" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <MessageSquareCode className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="freelance" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background highlight blob */}
      <div className="absolute bottom-1/4 left-10 w-[35vw] h-[35vw] rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-purple-500"></span>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Freelance Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Helping startups, businesses, and individuals build modern, high-converting digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FREELANCE_SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-tr group-hover:from-purple-500/10 group-hover:to-cyan-500/15 group-hover:border-cyan-500/40 transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub-features checklist */}
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom decorative arrow */}
              <div className="flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity pt-4 border-t border-white/5">
                <span>Inquire about this service</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* High Converting Call-to-Action Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-tr from-[#120f21] via-[#090a14] to-[#0a1518] border border-white/10 shadow-[0_20px_50px_rgba(168,85,247,0.1)]"
        >
          {/* Animated decorative gradient glow blobs inside */}
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-500/20 blur-[80px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/20 blur-[80px] animate-pulse pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Collaboration
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Need a modern website or smart application?
            </h3>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              Let's work together and turn your vision into high-converting products. I handle everything from design blueprints to full-stack execution.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onScrollToSection("#contact")}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold flex items-center gap-2.5 shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
