import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Rocket, Brain, Code, Coffee } from "lucide-react";

const highlights = [
  {
    icon: <Code size={20} />,
    title: "Web Development",
    desc: "Building full-stack apps with React, Node.js & MongoDB",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Rocket size={20} />,
    title: "App Development",
    desc: "Cross-platform mobile apps with React Native & Firebase",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: <Brain size={20} />,
    title: "Problem Solver",
    desc: "Competitive programmer with expertise in C, C++, Java",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: <Coffee size={20} />,
    title: "Continuous Learner",
    desc: "Always exploring new tools, APIs & design patterns",
    color: "from-fuchsia-500 to-pink-600",
  },
];

function AnimatedCard({ item, index }: { item: typeof highlights[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-default"
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
        {item.icon}
      </div>
      <h4 className="text-white mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
        {item.title}
      </h4>
      <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
        {item.desc}
      </p>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #060614 0%, #0a0a1f 100%)" }}>
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-violet-400 text-sm uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            // about me
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Who I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Am
            </span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-3xl" />

              <p
                className="text-white/70 mb-5 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
              >
                I'm a{" "}
                <span className="text-violet-300 font-medium">Computer Engineering student</span>{" "}
                at D. J. Sanghvi College of Engineering (2024–2028), deeply passionate about crafting
                solutions that make a real-world difference.
              </p>
              <p
                className="text-white/70 mb-5 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
              >
                With strong skills in{" "}
                <span className="text-cyan-300 font-medium">full-stack web development</span> and{" "}
                <span className="text-cyan-300 font-medium">mobile app development</span>, I love
                building systems that are both powerful under the hood and beautiful on the surface.
              </p>
              <p
                className="text-white/60 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
              >
                Currently seeking hackathon opportunities and internships where I can contribute,
                collaborate, and grow while building technology that matters.
              </p>

              {/* Stats row */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                {[
                  { value: "4+", label: "Projects Built" },
                  { value: "5+", label: "Technologies" },
                  { value: "2024", label: "Started Coding" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700 }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <AnimatedCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
