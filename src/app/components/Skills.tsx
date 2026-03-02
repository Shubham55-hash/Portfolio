import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "🧠",
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.15)",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.15)",
    skills: [
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Node.js / Express", level: 78 },
    ],
  },
  {
    title: "Mobile & Backend",
    icon: "📱",
    color: "from-fuchsia-500 to-pink-500",
    glow: "rgba(217,70,239,0.15)",
    skills: [
      { name: "React Native", level: 72 },
      { name: "Firebase", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "JWT Auth", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.15)",
    skills: [
      { name: "GitHub", level: 85 },
      { name: "REST APIs", level: 82 },
      { name: "Google Maps API", level: 70 },
      { name: "Chart.js", level: 75 },
    ],
  },
];

const techBadges = [
  "React", "Node.js", "MongoDB", "Firebase", "JavaScript", "TypeScript",
  "Tailwind CSS", "Express.js", "JWT", "Chart.js", "Google Maps API",
  "React Native", "C++", "Java", "HTML5", "CSS3", "Git", "REST APIs",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {name}
        </span>
        <span className="text-white/40 text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-300 group"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${cat.glow}, transparent 70%)` }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{cat.icon}</span>
        <h3
          className="text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1rem" }}
        >
          {cat.title}
        </h3>
      </div>

      {/* Skills */}
      {cat.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={cat.color}
          delay={0.2 + i * 0.1}
        />
      ))}
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1f 0%, #080818 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-fuchsia-400 text-sm uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            // tech stack
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400">
              Expertise
            </span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 mx-auto" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center"
        >
          <h4
            className="text-white/50 text-xs uppercase tracking-[0.2em] mb-6"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            All Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm cursor-default hover:border-violet-500/40 hover:text-white/80 hover:bg-violet-500/10 transition-all duration-200"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
