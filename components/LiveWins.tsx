"use client";

import { useEffect, useState } from "react";

const WINS = [
  { player: "60***974", amount: "RM 1,288", game: "Mega888",      emoji: "🎰" },
  { player: "60***021", amount: "RM 388",   game: "Dragon Tiger",  emoji: "🐉" },
  { player: "60***543", amount: "RM 2,500", game: "Baccarat VIP",  emoji: "🃏" },
  { player: "60***796", amount: "RM 888",   game: "Pussy888",      emoji: "🌸" },
  { player: "60***312", amount: "RM 4,999", game: "Lucky Wheel",   emoji: "🎪" },
  { player: "60***158", amount: "RM 688",   game: "Live Roulette",  emoji: "🎡" },
  { player: "60***447", amount: "RM 1,800", game: "Blackjack VIP", emoji: "♠️" },
  { player: "60***889", amount: "RM 320",   game: "Fishing Fever", emoji: "🐟" },
];

export default function LiveWins() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WINS.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const win = WINS[index];

  return (
    <div
      className="py-2 px-4 flex items-center justify-between gap-3 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0D1B2E, #111827, #0D1B2E)",
        borderTop: "1px solid rgba(245,168,0,0.15)",
        borderBottom: "1px solid rgba(245,168,0,0.15)",
      }}
    >
      {/* LIVE badge */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#E84E0F", boxShadow: "0 0 6px #E84E0F" }}
          />
          <span
            className="text-xs font-black tracking-widest font-rajdhani"
            style={{ color: "#E84E0F" }}
          >
            LIVE WINS
          </span>
        </span>
      </div>

      {/* Scrolling win announcement */}
      <div className="flex-1 overflow-hidden flex justify-center">
        <div
          className="flex items-center gap-2 text-sm font-body transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-8px)" }}
        >
          <span className="text-base">{win.emoji}</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            Player <strong className="text-white">{win.player}</strong> won
          </span>
          <span
            className="font-black font-rajdhani text-base"
            style={{ color: "#F5A800" }}
          >
            {win.amount}
          </span>
          <span className="text-white/40 text-xs hidden sm:inline">
            on {win.game}
          </span>
        </div>
      </div>

      {/* Bouncing coin */}
      <div className="flex-shrink-0 text-lg animate-coin-spin">🪙</div>
    </div>
  );
}
