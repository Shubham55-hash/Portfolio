import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "D. J. Sanghvi College of Engineering",
    location: "Mumbai, Maharashtra",
    period: "2024 – 2028",
    status: "Current",
    icon: <GraduationCap size={22} />,
    color: "from-blue-600 to-indigo-600",
    glow: "rgba(79,70,229,0.15)",
    highlights: [
      "Computer Engineering specialization",
      "Focus on full-stack development & algorithms",
      "Active in hackathons & coding competitions",
    ],
  },
];

const achievements = [
  { label: "Hackathon Builder", icon: "🏆", desc: "Built solutions for multiple national hackathons" },
  { label: "AI + Full-Stack", icon: "💻", desc: "FastAPI, React, & applied ML models" },
  { label: "DJSCE Computer Eng.", icon: "🎓", desc: "Expected Graduation 2028" },
  { label: "Continuous Learner", icon: "🧠", desc: "Active in DSA & System Design" },
];

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-12 sm:py-28 relative overflow-hidden"
      style={{ background: "#060614" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0a0a1a] overflow-hidden group hover:border-white/10 transition-all duration-300"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${edu.glow}, transparent 70%)` }}
                />
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${edu.color} opacity-[0.03] rounded-bl-3xl`} />

                {/* Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg`}>
                    {edu.icon}
                  </div>
                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {edu.status}
                  </span>
                </div>

                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-indigo-400 mb-6 font-medium"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem" }}
                >
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-5 mb-8 text-white/50 text-sm">
                  <span className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <MapPin size={14} className="text-indigo-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Calendar size={14} className="text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <ul className="space-y-3">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-sm text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="text-indigo-400 text-[10px] mt-1">▶</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h4
              className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
              style={{ fontFamily: "'Fira Code', monospace", fontWeight: 600 }}
            >
              <Award size={14} />
              Highlights
            </h4>
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="p-4 sm:p-5 rounded-2xl border border-white/5 bg-[#0a0a1a] hover:border-white/10 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{ach.icon}</span>
                  <div>
                    <div className="text-white/90 text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                      {ach.label}
                    </div>
                    <div className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {ach.desc}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Current Focus card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-2 p-5 sm:p-6 rounded-2xl border border-white/5 bg-[#0a0a1a]"
            >
              <h4 className="text-white/90 text-sm mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                Current Focus 🎯
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {["Data Structures", "System Design", "AI Integration", "Performance"].map((focus) => (
                  <span
                    key={focus}
                    className="px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.03] text-white/60 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
