"use client";

import { motion } from "framer-motion";

const GAMES = [
  {
    name: "Mega888",
    category: "Slot Game",
    emoji: "🎰",
    accent: "#F5A800",
    desc: "Most popular slot platform in Malaysia",
  },
  {
    name: "Pussy888",
    category: "Slot Game",
    emoji: "🃏",
    accent: "#00AAFF",
    desc: "Classic slots with massive jackpots",
  },
  {
    name: "Live Roulette",
    category: "Live Casino",
    emoji: "🎡",
    accent: "#E84E0F",
    desc: "Real dealers, real thrills, real winnings",
  },
  {
    name: "Blackjack VIP",
    category: "Table Game",
    emoji: "♠️",
    accent: "#F5A800",
    desc: "High stakes blackjack with VIP treatment",
  },
  {
    name: "Dragon Tiger",
    category: "Live Casino",
    emoji: "🐉",
    accent: "#00AAFF",
    desc: "Fast-paced Asian favourite live game",
  },
  {
    name: "Sports Betting",
    category: "Sports",
    emoji: "⚽",
    accent: "#E84E0F",
    desc: "Football, basketball, esports & more",
  },
];

export default function GamesGrid() {
  return (
    <section
      id="games"
      className="py-20 md:py-28 px-4"
      style={{ background: "#070F1A" }}
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
            Top <span style={{ color: "#F5A800" }}>Games</span>
          </h2>
          <p className="text-white/45 font-body mt-5 text-sm tracking-wide">
            Menang Besar setiap hari — 100+ permainan menanti anda!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Animated gradient border wrapper */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  padding: "1px",
                  background: `linear-gradient(135deg, ${game.accent}80, #00AAFF40, ${game.accent}80)`,
                }}
              />

              {/* Card inner */}
              <div
                className="relative rounded-2xl p-8 flex flex-col items-center text-center min-h-[240px] justify-center transition-all duration-300"
                style={{ background: "linear-gradient(155deg, #0D1B2E, #0a1220)" }}
              >
                {/* Emoji */}
                <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 select-none">
                  {game.emoji}
                </div>

                {/* Category badge */}
                <span
                  className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 font-body"
                  style={{
                    color: game.accent,
                    background: `${game.accent}18`,
                    border: `1px solid ${game.accent}35`,
                  }}
                >
                  {game.category}
                </span>

                {/* Game name */}
                <h3 className="text-xl font-bold font-rajdhani text-white mb-1">
                  {game.name}
                </h3>
                <p className="text-white/35 text-xs font-body leading-relaxed">
                  {game.desc}
                </p>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${game.accent}20 0%, ${game.accent}08 100%)`,
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <a
                    href="#contact"
                    className="btn-shimmer px-7 py-3 rounded-xl font-bold font-rajdhani text-base text-dark shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${game.accent}, ${game.accent}bb)`,
                      boxShadow: `0 4px 20px ${game.accent}50`,
                    }}
                  >
                    Play Now
                  </a>
                </div>
              </div>

              {/* Glow halo on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: `0 0 35px ${game.accent}35` }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="btn-shimmer inline-block px-8 py-3.5 rounded-xl font-bold font-rajdhani text-dark transition-all duration-300 hover:shadow-gold"
            style={{ background: "linear-gradient(135deg, #F5A800, #FFD700)" }}
          >
            View All Games →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
