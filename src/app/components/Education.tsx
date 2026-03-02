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
    color: "from-violet-600 to-indigo-600",
    glow: "rgba(139,92,246,0.2)",
    highlights: [
      "Computer Engineering specialization",
      "Focus on full-stack development & algorithms",
      "Active in hackathons & coding competitions",
    ],
  },
];

const achievements = [
  { label: "Hackathon Participant", icon: "🏆", desc: "Building standout solutions" },
  { label: "Full-Stack Developer", icon: "💻", desc: "React, Node.js, MongoDB stack" },
  { label: "Open Source Contributor", icon: "🌟", desc: "GitHub repositories & projects" },
  { label: "Problem Solver", icon: "🧩", desc: "C, C++, Java competitive programming" },
];

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080818 0%, #0a0a1f 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-indigo-400 text-sm uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            // background
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
          >
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Milestones
            </span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
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
                className="relative p-8 rounded-3xl border border-violet-500/20 bg-[#0d0d2a]/60 backdrop-blur-sm overflow-hidden group hover:border-violet-500/40 transition-all duration-300"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${edu.glow}, transparent 70%)` }}
                />
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${edu.color} opacity-5 rounded-bl-3xl`} />

                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg`}>
                    {edu.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
                    ● {edu.status}
                  </span>
                </div>

                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-4 font-medium"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
                >
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-white/40 text-sm">
                  <span className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <MapPin size={13} className="text-violet-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <Calendar size={13} className="text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <ul className="space-y-2.5">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5 text-sm text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="text-violet-400 mt-0.5">▸</span>
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
              style={{ fontFamily: "'Fira Code', monospace" }}
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
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ach.icon}</span>
                  <div>
                    <div className="text-white text-sm mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                      {ach.label}
                    </div>
                    <div className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {ach.desc}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-2 p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-sm"
            >
              <p className="text-white/60 text-sm italic leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                "Passionate about building practical solutions and learning new technologies."
              </p>
              <p className="text-violet-400 text-xs mt-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                — Shubham Shah
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
