import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "CURRENTLY BUILDING WITH",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/[0.02]",
    hoverBorder: "hover:border-violet-500/40",
    dot: "bg-violet-400",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "Node.js", icon: "🟩" },
      { name: "React Native", icon: "📱" },
    ]
  },
  {
    title: "EXPERIENCED",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/[0.02]",
    hoverBorder: "hover:border-cyan-500/40",
    dot: "bg-cyan-400",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" },
      { name: "Express.js", icon: "🚂" },
      { name: "JWT Auth", icon: "🔐" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Socket.io", icon: "🔌" },
    ]
  },
  {
    title: "COMFORTABLE",
    accent: "text-fuchsia-400",
    border: "border-fuchsia-500/20",
    bg: "bg-fuchsia-500/[0.02]",
    hoverBorder: "hover:border-fuchsia-500/40",
    dot: "bg-fuchsia-400",
    skills: [
      { name: "C / C++", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "HTML & CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "🌬️" },
      { name: "Chart.js", icon: "📊" },
      { name: "Git & GitHub", icon: "🐙" },
    ]
  },
  {
    title: "AI / ML TOOLING",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/[0.02]",
    hoverBorder: "hover:border-amber-500/40",
    dot: "bg-amber-400",
    skills: [
      { name: "Scikit-Learn", icon: "🤖" },
      { name: "Whisper (OpenAI)", icon: "🎙️" },
      { name: "Gemini AI", icon: "✨" },
      { name: "Qdrant", icon: "🟪" },
      { name: "OpenRouter", icon: "🔄" },
      { name: "Librosa", icon: "🎵" },
      { name: "LangChain", icon: "🦜" },
      { name: "MCP", icon: "🧠" },
    ]
  }
];

function SkillGroup({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative w-full rounded-2xl border ${group.border} ${group.bg} ${group.hoverBorder} transition-colors duration-300 p-6 sm:p-8 mb-6 overflow-hidden`}
    >
      {/* Group Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-2 rounded-full ${group.dot}`} />
        <h3 className={`text-xs sm:text-sm font-bold tracking-[0.15em] uppercase ${group.accent}`} style={{ fontFamily: "'Fira Code', monospace" }}>
          {group.title}
        </h3>
      </div>

      {/* Skills Flex Container */}
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/10 transition-all cursor-default shadow-sm"
          >
            <span className="text-base grayscale-[0.2] opacity-90">{skill.icon}</span>
            <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-16 sm:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060614 0%, #080816 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Technologies</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Tools I ship real products with — not just tutorials.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-6" />
        </motion.div>

        {/* Skill Groups */}
        <div className="flex flex-col gap-2">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
