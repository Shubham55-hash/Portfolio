import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, Shield, Mic, IdCard, Train, Star, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ScamDefy",
    subtitle: "Advanced AI Threat Detection System",
    description:
      "A comprehensive, multi-layered security platform detecting and blocking modern scams across web, voice, and message channels using state-of-the-art AI models and threat intelligence databases.",
    tags: ["FastAPI", "React", "TypeScript", "Python", "Scikit-Learn", "Gemini AI", "Tailwind"],
    color: "from-red-500 to-rose-600",
    glow: "shadow-red-500/20",
    border: "border-red-500/30",
    accent: "#ef4444",
    accentLight: "rgba(239,68,68,0.12)",
    icon: <Shield size={22} />,
    category: "AI Security",
    categoryColor: "text-red-400 bg-red-500/10 border-red-500/20",
    points: [
      "Neural Voice Inspector — deepfake & AI voice detection with forensic .pkl ML models",
      "Multi-vector URL scanner with Google Safe Browsing, URLHaus & Gemini AI risk summaries",
      "Safety Circle & Guardian system with automated alerts for high-risk events",
    ],
    github: "https://github.com/Shubham55-hash/ScamDefy_Production.git",
    live: "https://scam-defy-production-end27m0ci-shubham55-hashs-projects.vercel.app/#features",
    hasLive: true,
    featured: true,
  },
  {
    id: 2,
    title: "VocaHealth",
    subtitle: "AI-Powered Contactless Diagnostic Platform",
    description:
      "An AI platform that turns the human voice into a critical vital sign. Analyzes 15 seconds of speech to detect sub-audible vocal biomarkers and flag early signs of illness years before symptoms manifest.",
    tags: ["FastAPI", "React Native", "Expo", "Whisper", "Librosa", "OpenRouter", "Twilio", "Recharts"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.12)",
    icon: <Mic size={22} />,
    category: "HealthTech · AI",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    points: [
      "VoiceScore Engine — 18 vocal biomarkers with ~96.3% clinical-grade Random Forest accuracy",
      "Dual-Signal Safety Protocol combining acoustic markers with NLP sentiment analysis",
      "VocaCompanion AI chatbot + WhatsApp caretaker alerts + clinical PDF report generator",
    ],
    github: "https://github.com/Shubham55-hash/HackNext_CrazyHacks.git",
    live: "",
    hasLive: false,
    featured: true,
  },
  {
    id: 3,
    title: "PRISM",
    subtitle: "Unified Digital Identity System",
    description:
      "A centralized, secure digital identity vault enabling users to upload, verify, and manage identity, financial, and medical documents with dynamic autofill and time-bound third-party access grants.",
    tags: ["React", "TypeScript", "Python", "OCR", "JWT", "DigiLocker API", "Consent Management"],
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/30",
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.12)",
    icon: <IdCard size={22} />,
    category: "Identity · Security",
    categoryColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    points: [
      "Type-aware OCR extraction engine auto-detecting Identity, Financial & Medical documents",
      "Emergency Crisis Mode with 24-hour time-limited first-responder access tokens",
      "Granular consent management & autofill with live countdown timers for third parties",
    ],
    github: "https://github.com/Shubham55-hash/PRISM.git",
    live: "",
    hasLive: false,
    featured: false,
  },
  {
    id: 4,
    title: "FlowCity",
    subtitle: "Predictive Multi-Modal Transit Intelligence",
    description:
      "An advanced transit intelligence and journey planning backend tuned for Mumbai (local trains, BEST buses & Metro) combining real-time API integrations, ML delay predictions, and dynamic risk assessment.",
    tags: ["Node.js", "TypeScript", "Express", "Socket.io", "Zod", "Bull", "ML Service", "OpenRouteService"],
    color: "from-cyan-500 to-sky-600",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30",
    accent: "#06b6d4",
    accentLight: "rgba(6,182,212,0.12)",
    icon: <Train size={22} />,
    category: "TransitTech · ML",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    points: [
      "Ghost Commute simulation — fuses live weather, rail, cab APIs with Haversine fallbacks",
      "Dynamic TrustScore (0–100) using half-life decay math & AI-generated route explanations",
      "Predictive ML service with probabilistic delay output + Safety Rescue Mode alternatives",
    ],
    github: "https://github.com/Shubham55-hash/FlowCity.git",
    live: "",
    hasLive: false,
    featured: false,
  },
];

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-400 uppercase tracking-wider">
      <Star size={9} fill="currentColor" /> Featured
    </span>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-3xl border ${project.border} bg-[#0c0c22]/90 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-2xl ${project.glow} cursor-default flex flex-col`}
    >
      {/* Animated gradient top bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${project.color} relative`}>
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0`}
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* Glowing background on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${project.accentLight} 0%, transparent 60%)` }}
      />

      <div className="p-4 sm:p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg shrink-0`}
            >
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.08rem" }}
                >
                  {project.title}
                </h3>
                {project.featured && <FeaturedBadge />}
              </div>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] border font-medium ${project.categoryColor}`}
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
              title="View on GitHub"
            >
              <Github size={13} />
            </motion.a>
            {project.hasLive && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                title="Live Demo"
              >
                <ExternalLink size={13} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="text-xs uppercase tracking-wider mb-3 font-semibold"
          style={{ fontFamily: "'Fira Code', monospace", color: project.accent, opacity: 0.8 }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-white/55 text-sm mb-5 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Key points */}
        <ul className="mb-5 space-y-2.5 flex-1">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
              <ChevronRight size={13} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        {/* Footer: Tags + GitHub link */}
        <div className="pt-4 border-t border-white/[0.07]">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] border border-white/10 bg-white/[0.04] text-white/50"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs transition-all duration-200 group/link"
            style={{ fontFamily: "'Fira Code', monospace", color: project.accent, opacity: 0.7 }}
          >
            <Github size={11} />
            <span className="group-hover/link:opacity-100 hover:underline" style={{ opacity: 'inherit' }}>
              View Source
            </span>
            {project.hasLive && (
              <>
                <span className="text-white/20 mx-1">·</span>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                  style={{ color: project.accent }}
                >
                  <Zap size={10} /> Live Demo
                </a>
              </>
            )}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-16 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1f 0%, #0c0c24 50%, #0a0a1f 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-900/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[400px] h-[400px] rounded-full bg-cyan-900/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            // my work
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Projects
            </span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Flagship AI-driven systems built for real-world impact — from forensic voice detection to predictive transit intelligence.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com/Shubham55-hash"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(139,92,246,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-white/80 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/15 transition-all backdrop-blur-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            <Github size={18} />
            Explore All Projects on GitHub
            <ExternalLink size={14} className="text-violet-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
