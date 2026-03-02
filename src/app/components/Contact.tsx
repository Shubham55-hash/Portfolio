import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "shubhamshah048@gmail.com",
    href: "mailto:shubhamshah048@gmail.com",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 7498355039",
    href: "tel:+917498355039",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
    href: "#",
    color: "from-fuchsia-500 to-pink-500",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1f 0%, #060614 100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Glowing blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-900/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-900/20 rounded-full blur-[80px] pointer-events-none" />

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
            className="text-violet-400 text-sm uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            // let's connect
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Have a project in mind or want to collaborate on a hackathon? I'd love to hear from you!
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'Fira Code', monospace" }}>
                    {info.label}
                  </div>
                  <div className="text-white/80 text-sm group-hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm mt-2"
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub", color: "hover:border-white/40" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:border-blue-500/50 hover:text-blue-400" },
                  { icon: <MessageSquare size={18} />, href: "mailto:shubhamshah048@gmail.com", label: "Email", color: "hover:border-violet-500/50 hover:text-violet-400" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 ${s.color}`}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-3xl" />

              <h3
                className="text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
              >
                Send a Message 💬
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { field: "name" as const, label: "Your Name", placeholder: "Shubham Shah", type: "text" },
                    { field: "email" as const, label: "Email Address", placeholder: "you@email.com", type: "email" },
                  ].map((f) => (
                    <div key={f.field}>
                      <label className="block text-white/50 text-xs mb-2 uppercase tracking-widest" style={{ fontFamily: "'Fira Code', monospace" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={formData[f.field]}
                        onChange={(e) => setFormData({ ...formData, [f.field]: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 uppercase tracking-widest" style={{ fontFamily: "'Fira Code', monospace" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Hackathon Collaboration / Project / Internship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 uppercase tracking-widest" style={{ fontFamily: "'Fira Code', monospace" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(139,92,246,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {sent ? (
                    <>✅ Message Sent!</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
