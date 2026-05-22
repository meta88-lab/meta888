"use client";

import { motion } from "framer-motion";

const FEATURES = [
  { icon: "⚡", title: "Fast Withdrawal", desc: "Under 5 minutes" },
  { icon: "🔒", title: "SSL Secured",     desc: "256-bit encryption" },
  { icon: "📲", title: "All Devices",     desc: "Mobile & desktop" },
  { icon: "🎧", title: "24/7 Support",    desc: "Always here for you" },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-10 px-4" style={{ background: "#070F1A" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex flex-col items-center text-center p-4 rounded-xl"
              style={{
                background: "linear-gradient(155deg, #0D1B2E, #0a1220)",
                border: "1px solid rgba(245,168,0,0.12)",
              }}
              whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-3xl mb-2 animate-float-up" style={{ animationDelay: `${i * 0.3}s` }}>
                {f.icon}
              </span>
              <p className="font-bold font-rajdhani text-sm" style={{ color: "#F5A800" }}>
                {f.title}
              </p>
              <p className="text-white/45 text-xs font-body mt-0.5">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
