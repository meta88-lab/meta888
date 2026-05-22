"use client";

import { motion } from "framer-motion";

const SUITS = ["♠", "♥", "♦", "♣"];

const FLOATERS = [
  { suit: 0, top: "12%", left: "6%",  size: "4rem",   anim: "animate-drift-1", delay: "0s",    opacity: 0.07 },
  { suit: 1, top: "72%", left: "4%",  size: "3rem",   anim: "animate-drift-2", delay: "2.5s",  opacity: 0.055 },
  { suit: 2, top: "22%", right: "7%", size: "5rem",   anim: "animate-drift-3", delay: "1s",    opacity: 0.065 },
  { suit: 3, top: "65%", right: "6%", size: "3.5rem", anim: "animate-drift-4", delay: "3.5s",  opacity: 0.08 },
  { suit: 0, top: "45%", left: "14%", size: "2.5rem", anim: "animate-drift-2", delay: "4.2s",  opacity: 0.05 },
  { suit: 1, top: "82%", right: "18%",size: "4.5rem", anim: "animate-drift-1", delay: "1.8s",  opacity: 0.06 },
  { suit: 2, top: "8%",  left: "42%", size: "3rem",   anim: "animate-drift-4", delay: "2s",    opacity: 0.04 },
  { suit: 3, top: "38%", right: "22%",size: "2rem",   anim: "animate-drift-3", delay: "0.5s",  opacity: 0.07 },
  { suit: 1, top: "55%", left: "28%", size: "2.2rem", anim: "animate-drift-1", delay: "5s",    opacity: 0.045 },
  { suit: 0, top: "90%", left: "55%", size: "3.5rem", anim: "animate-drift-2", delay: "3s",    opacity: 0.05 },
];

const STATS = [
  { value: "100+",    label: "Games Available" },
  { value: "50K+",    label: "Active Players" },
  { value: "< 5 Min", label: "Withdrawal Speed" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 35%, #0D1B2E 0%, #070F1A 65%)",
      }}
    >
      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
          zIndex: 1,
        }}
      />

      {/* Gold orb top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "5%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(245,168,0,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      {/* Blue orb bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", right: "5%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0,170,255,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Floating card suits */}
      {FLOATERS.map((f, i) => (
        <div
          key={i}
          className={`absolute select-none pointer-events-none font-bold ${f.anim}`}
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            fontSize: f.size,
            color: `rgba(245,168,0,${f.opacity})`,
            animationDelay: f.delay,
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          {SUITS[f.suit]}
        </div>
      ))}

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
        {/* Eyebrow */}
        <motion.p
          className="text-sm md:text-base font-semibold font-body tracking-[0.3em] uppercase mb-5"
          style={{ color: "#F5A800" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          🏆 Malaysia&apos;s Most Trusted Platform
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-rajdhani leading-tight mb-6 animate-glow-pulse"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Malaysia&apos;s{" "}
          <span style={{ color: "#F5A800" }}>#1</span>{" "}
          Online{" "}
          <br className="hidden sm:block" />
          Gaming{" "}
          <span style={{ color: "#00AAFF" }}>Platform</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-white/60 text-base md:text-xl font-body mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Fast Payouts&nbsp;&nbsp;·&nbsp;&nbsp;Trusted&nbsp;&nbsp;·&nbsp;&nbsp;24/7 Live Support
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="#games"
            className="btn-shimmer px-10 py-4 rounded-xl font-bold font-rajdhani text-xl text-dark transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #F5A800, #FFD700, #F5A800)" }}
          >
            Play Now →
          </a>
          <a
            href="https://t.me/meta888malaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-10 py-4 rounded-xl font-bold font-rajdhani text-xl text-white transition-all duration-300 hover:shadow-blue hover:-translate-y-0.5"
            style={{
              background: "rgba(0,170,255,0.08)",
              border: "1px solid rgba(0,170,255,0.5)",
            }}
          >
            <span className="flex items-center gap-2.5 justify-center">
              <TelegramIcon className="w-5 h-5" />
              Join Telegram Channel
            </span>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold font-rajdhani"
                style={{ color: "#F5A800" }}
              >
                {s.value}
              </p>
              <p className="text-white/45 text-sm font-body mt-1 tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, #070F1A)",
          zIndex: 2,
        }}
      />
    </section>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z" />
    </svg>
  );
}
