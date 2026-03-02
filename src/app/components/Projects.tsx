import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Expense Tracker",
    description:
      "A full-stack finance management system to track income, expenses, and investments with real-time analytics. Features budget planning, spending insights, and downloadable monthly reports.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    color: "from-violet-600 to-indigo-600",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/30",
    accent: "#8b5cf6",
    points: [
      "Full-stack finance management with real-time analytics",
      "Budget planning & spending insights dashboard",
      "Downloadable monthly financial reports",
    ],
    emoji: "💰",
  },
  {
    id: 2,
    title: "College Bus Tracking System",
    description:
      "A real-time bus tracking platform with live location updates and arrival time prediction, integrating Maps API and delay alerts to improve student commute planning.",
    tags: ["JavaScript", "Google Maps API", "Firebase", "GPS"],
    color: "from-cyan-600 to-teal-600",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30",
    accent: "#06b6d4",
    points: [
      "Real-time bus tracking with live GPS location",
      "Arrival time prediction system",
      "Integrated Maps API with delay alerts",
    ],
    emoji: "🚌",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "A comprehensive system for managing patient records, appointments, and doctor schedules. Implements role-based access for admin, doctors, and patients with notification support.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    color: "from-fuchsia-600 to-pink-600",
    glow: "shadow-fuchsia-500/20",
    border: "border-fuchsia-500/30",
    accent: "#d946ef",
    points: [
      "Patient records & appointment management",
      "Role-based access for admin, doctors, patients",
      "Notification support system",
    ],
    emoji: "🏥",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with sections for menu, services, and contact information. Implemented user-friendly navigation and optimized layout for better customer experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/30",
    accent: "#f97316",
    points: [
      "Fully responsive multi-section design",
      "Menu, services & contact sections",
      "Optimized UX & navigation flow",
    ],
    emoji: "🍽️",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-3xl border ${project.border} bg-[#0d0d2a]/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl ${project.glow} cursor-default`}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      {/* Glowing background on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.06 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${project.color} pointer-events-none`}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl shadow-lg`}
            >
              {project.emoji}
            </div>
            <div>
              <h3
                className="text-white mb-0.5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
              >
                {project.title}
              </h3>
              <span className="text-white/30 text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
                0{index + 1} / 0{projects.length}
              </span>
            </div>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <Github size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-white/55 text-sm mb-5 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Key points */}
        <ul className="mb-5 space-y-2">
          {project.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
              <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/60"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              {tag}
            </span>
          ))}
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
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1f 0%, #0c0c24 50%, #0a0a1f 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[100px] pointer-events-none" />

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
            A collection of projects I've built — from full-stack web apps to real-time systems.
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
