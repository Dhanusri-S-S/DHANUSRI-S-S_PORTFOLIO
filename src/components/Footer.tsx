import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top summary brand */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/5 mb-8">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white tracking-tight text-base flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Dhanusri S S</span>
            </h4>
            <p className="text-xs text-gray-400 max-w-sm">
              AI Developer • Frontend Web Developer • Embedded Systems Enthusiast • Freelancer. Coimbatore, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-500">
            <span>React 19</span>
            <span>Vite 6</span>
            <span>Tailwind v4</span>
            <span>Motion 12</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {currentYear} Dhanusri S S. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>Designed with</span>
            <Heart className="w-3 h-3 text-purple-500 animate-pulse" />
            <span>using React &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
