"use client";

import { motion } from "framer-motion";

const GAMES = [
  {
    name: "Mega888",
    category: "SLOT GAME",
    emoji: "🎰",
    stars: ["⭐", "💎", "7️⃣"],
    bg: "linear-gradient(160deg, #2d0060 0%, #7c3aed 55%, #c026d3 100%)",
    border: "#c026d3",
    hot: true,
  },
  {
    name: "Pussy888",
    category: "SLOT GAME",
    emoji: "🌸",
    stars: ["💕", "✨", "🌺"],
    bg: "linear-gradient(160deg, #4a0010 0%, #be123c 55%, #fb7185 100%)",
    border: "#fb7185",
    badge: "NEW",
  },
  {
    name: "Dragon Tiger",
    category: "LIVE CASINO",
    emoji: "🐉",
    stars: ["🔥", "⚡", "💥"],
    bg: "linear-gradient(160deg, #431407 0%, #c2410c 55%, #fb923c 100%)",
    border: "#fb923c",
    hot: true,
  },
  {
    name: "Blackjack VIP",
    category: "TABLE GAME",
    emoji: "♠️",
    stars: ["💰", "👑", "🎩"],
    bg: "linear-gradient(160deg, #111 0%, #374151 55%, #d97706 100%)",
    border: "#d97706",
  },
  {
    name: "Live Roulette",
    category: "LIVE CASINO",
    emoji: "🎡",
    stars: ["♥️", "♦️", "♣️"],
    bg: "linear-gradient(160deg, #0c1445 0%, #1e3a8a 55%, #38bdf8 100%)",
    border: "#38bdf8",
  },
  {
    name: "Sports Betting",
    category: "SPORTS",
    emoji: "⚽",
    stars: ["🏆", "🎯", "🏅"],
    bg: "linear-gradient(160deg, #052e16 0%, #166534 55%, #4ade80 100%)",
    border: "#4ade80",
  },
  {
    name: "Fishing Fever",
    category: "ARCADE",
    emoji: "🐟",
    stars: ["🦈", "💰", "🌊"],
    bg: "linear-gradient(160deg, #082f49 0%, #0369a1 55%, #22d3ee 100%)",
    border: "#22d3ee",
    badge: "NEW",
  },
  {
    name: "Lucky Wheel",
    category: "SLOT GAME",
    emoji: "🎪",
    stars: ["🌟", "💫", "🎊"],
    bg: "linear-gradient(160deg, #1e0050 0%, #6d28d9 55%, #a78bfa 100%)",
    border: "#a78bfa",
  },
  {
    name: "Baccarat VIP",
    category: "TABLE GAME",
    emoji: "🃏",
    stars: ["💎", "👑", "🍀"],
    bg: "linear-gradient(160deg, #1e1b4b 0%, #4338ca 55%, #818cf8 100%)",
    border: "#818cf8",
  },
];

export default function GamesGrid() {
  return (
    <section id="games" className="py-12 px-4" style={{ background: "#070F1A" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-rajdhani text-white gold-underline">
            Top <span style={{ color: "#F5A800" }}>Games</span>
          </h2>
          <p className="text-white/40 font-body mt-5 text-sm">
            🎮 Menang Besar setiap hari — pilih permainan anda!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              className="game-card cursor-pointer rounded-2xl select-none"
              style={{
                background: game.bg,
                border: `1.5px solid ${game.border}55`,
                boxShadow: `0 4px 20px ${game.border}30`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: `0 12px 35px ${game.border}60`,
                transition: { duration: 0.2 },
              }}
            >
              {/* HOT / NEW badge */}
              {(game.hot || game.badge) && (
                <div className="absolute top-2 right-2 z-20">
                  {game.hot && (
                    <span
                      className="animate-hot-pulse text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg,#E84E0F,#FF6B35)" }}
                    >
                      🔥 HOT
                    </span>
                  )}
                  {game.badge && (
                    <span
                      className="text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                      style={{ background: "linear-gradient(135deg,#00AAFF,#0077CC)" }}
                    >
                      ✨ {game.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Category badge — left rotated like reference */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 z-20"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "translateY(-50%) rotate(180deg)",
                }}
              >
                <span
                  className="text-[9px] font-black tracking-widest px-1.5 py-2 rounded-r-lg text-white/90"
                  style={{ background: "rgba(0,0,0,0.45)", letterSpacing: "0.15em" }}
                >
                  {game.category}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col items-center justify-between h-full p-3 pt-5 pb-3" style={{ minHeight: "160px" }}>
                {/* Floating star decorations */}
                <div className="flex gap-2 mb-1 opacity-70">
                  {game.stars.map((s, si) => (
                    <span
                      key={si}
                      className="text-xs animate-star-pop"
                      style={{ animationDelay: `${si * 0.4}s` }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Main character emoji */}
                <div
                  className="text-5xl md:text-6xl animate-float-up my-1"
                  style={{ animationDelay: `${i * 0.2}s`, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
                >
                  {game.emoji}
                </div>

                {/* Bottom overlay with game name + play button */}
                <div className="w-full mt-2">
                  <div
                    className="w-full rounded-xl px-2 py-2 text-center"
                    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                  >
                    <p className="text-white font-bold font-rajdhani text-sm leading-tight truncate">
                      {game.name}
                    </p>
                    <a
                      href="#contact"
                      className="btn-shimmer mt-1.5 inline-block w-full text-center text-xs font-black font-rajdhani py-1 rounded-lg text-dark"
                      style={{ background: `linear-gradient(135deg, #F5A800, #FFD700)` }}
                    >
                      PLAY NOW
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* +More card */}
          <motion.a
            href="#contact"
            className="game-card rounded-2xl flex flex-col items-center justify-center cursor-pointer"
            style={{
              background: "linear-gradient(160deg, #0D1B2E, #111827)",
              border: "1.5px dashed rgba(245,168,0,0.3)",
              minHeight: "160px",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          >
            <span className="text-4xl animate-wiggle">🎮</span>
            <p className="text-gold font-bold font-rajdhani text-sm mt-2">100+ Games</p>
            <p className="text-white/40 text-xs font-body mt-0.5">View All →</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
