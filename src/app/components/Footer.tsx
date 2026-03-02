import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 border-t border-white/10 relative overflow-hidden"
      style={{ background: "#060614" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <Code2 size={15} className="text-white" />
          </div>
          <span
            className="text-white/60 text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Shubham Shah
          </span>
        </div>

        {/* Center */}
        <motion.p
          className="text-white/30 text-xs flex items-center gap-1.5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart size={12} className="text-red-400 fill-red-400" />
          </motion.span>{" "}
          & React + Tailwind CSS
        </motion.p>

        {/* Right */}
        <p
          className="text-white/30 text-xs"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          © 2024 Shubham Shah
        </p>
      </div>
    </footer>
  );
}
