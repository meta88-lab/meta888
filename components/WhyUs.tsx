"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: "⚡",
    title: "Fast Withdrawal",
    desc: "Get your winnings in under 5 minutes. Instant bank transfers 24/7, no delays.",
  },
  {
    icon: "🔒",
    title: "SSL Secured Platform",
    desc: "256-bit SSL encryption protects all your data and transactions at all times.",
  },
  {
    icon: "📲",
    title: "Works on All Devices",
    desc: "Seamless experience on mobile, tablet, and desktop. No app download needed.",
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    desc: "Our expert team is ready to assist you any time, day or night via Telegram.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4"
      style={{ background: "linear-gradient(180deg, #0A1424 0%, #070F1A 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-3 gold-underline">
            Why Choose{" "}
            <span style={{ color: "#F5A800" }}>Us</span>?
          </h2>
          <p className="text-white/45 font-body mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Kami komited untuk memberikan pengalaman gaming terbaik — selamat,
            pantas dan menyeronokkan.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group p-8 rounded-2xl text-center transition-all duration-300 cursor-default"
              style={{
                background: "linear-gradient(155deg, #0D1B2E, #0a1220)",
                border: "1px solid rgba(245,168,0,0.1)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.04,
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-300 group-hover:shadow-gold"
                style={{
                  background: "rgba(245,168,0,0.08)",
                  border: "1px solid rgba(245,168,0,0.2)",
                }}
              >
                {feature.icon}
              </div>

              <h3
                className="text-lg font-bold font-rajdhani mb-3"
                style={{ color: "#F5A800" }}
              >
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
