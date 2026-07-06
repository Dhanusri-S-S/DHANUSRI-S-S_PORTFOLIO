import { useState } from "react";
import { Award, ShieldCheck, ChevronRight, BookOpen, Star, Sparkles } from "lucide-react";
import { CERTIFICATIONS_DATA, Certification } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Credentials" },
    { id: "programming", label: "Languages & Tools" },
    { id: "ai", label: "AI & ML" },
    { id: "corporate", label: "Professional Skillsets" }
  ];

  const filteredCertifications = CERTIFICATIONS_DATA.filter((cert) => {
    if (activeTab === "all") return true;
    return cert.category === activeTab;
  });

  const getIssuerStyle = (issuer: string) => {
    switch (issuer.toLowerCase()) {
      case "infosys springboard":
      case "infosys":
        return { bg: "bg-blue-500/10 border-blue-500/20 text-blue-400", badge: "Infosys" };
      case "tcs ion":
      case "tcs":
        return { bg: "bg-red-500/10 border-red-500/20 text-red-400", badge: "TCS" };
      case "hcl guvi":
        return { bg: "bg-green-500/10 border-green-500/20 text-green-400", badge: "HCL GUVI" };
      case "oracle academy":
      case "oracle":
        return { bg: "bg-orange-500/10 border-orange-500/20 text-orange-400", badge: "Oracle" };
      case "nasscom":
        return { bg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400", badge: "NASSCOM" };
      case "balvion technologies":
        return { bg: "bg-teal-500/10 border-teal-500/20 text-teal-400", badge: "Balvion" };
      default:
        return { bg: "bg-purple-500/10 border-purple-500/20 text-purple-400", badge: "Award" };
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#090909]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Certifications &amp; Accreditations
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Honored credentials validating technical competence, systems thinking, and leadership.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10 pb-4 border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 border-transparent text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 border-white/10 hover:border-white/25 text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert, idx) => {
              const styles = getIssuerStyle(cert.issuer);
              return (
                <motion.div
                  key={cert.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between h-52 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.06)] transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header: Issuer tag & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${styles.bg}`}>
                        {styles.badge}
                      </span>
                      <Award className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Issuer Subtext & Detail Indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="text-xs font-medium text-gray-400">
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-0.5 text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-cyan-400">Verified</span>
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
