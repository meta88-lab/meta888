"use client";

import { motion } from "framer-motion";

export default function TelegramCTA() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #070F1A 0%, #0D1B2E 50%, #070F1A 100%)" }}
    >
      {/* Blue glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,170,255,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Top + bottom border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,170,255,0.4), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,170,255,0.4), transparent)" }}
      />

      {/* Decorative floating suits */}
      <div
        className="absolute left-10 top-1/2 -translate-y-1/2 text-8xl select-none pointer-events-none font-bold"
        style={{ color: "rgba(0,170,255,0.04)" }}
      >
        ♠
      </div>
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 text-8xl select-none pointer-events-none font-bold"
        style={{ color: "rgba(0,170,255,0.04)" }}
      >
        ♣
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Telegram icon bubble */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(0,170,255,0.12)",
                border: "1px solid rgba(0,170,255,0.35)",
                boxShadow: "0 0 30px rgba(0,170,255,0.15)",
              }}
            >
              <TelegramIcon className="w-10 h-10" color="#00AAFF" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            Join Our Community on{" "}
            <span style={{ color: "#00AAFF" }}>Telegram</span>
          </h2>

          <p className="text-white/55 text-lg font-body mb-10 leading-relaxed max-w-2xl mx-auto">
            Get the latest bonuses, tips &amp; announcements first. Be part of
            50,000+ winners in our exclusive community!
          </p>

          <a
            href="https://t.me/meta888malaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold font-rajdhani text-xl text-white transition-all duration-300 hover:shadow-blue-lg hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #00AAFF, #0077CC)",
              border: "1px solid rgba(0,170,255,0.4)",
            }}
          >
            <TelegramIcon className="w-5 h-5" color="white" />
            Join Channel →
          </a>

          <p className="text-white/25 text-xs font-body mt-6 tracking-wide">
            Free to join · No spam · Latest promos only
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TelegramIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color ?? "currentColor"}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z" />
    </svg>
  );
}
