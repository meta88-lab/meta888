"use client";

import { motion } from "framer-motion";

const PROMOS = [
  {
    icon: "🎁",
    tag: "New Members",
    title: "Welcome Bonus",
    highlight: "100%",
    desc: "First Deposit Bonus up to",
    amount: "RM 500",
    note: "Min deposit RM30. Rollover x5.",
    gradient: "linear-gradient(135deg, #F5A800, #FFD700)",
  },
  {
    icon: "🔄",
    tag: "Daily Offer",
    title: "Daily Reload",
    highlight: "10%",
    desc: "Reload Bonus",
    amount: "Every Day",
    note: "Available daily for all active members.",
    gradient: "linear-gradient(135deg, #E84E0F, #FF6B35)",
  },
  {
    icon: "👥",
    tag: "Referral",
    title: "Referral Reward",
    highlight: "RM38",
    desc: "Earn",
    amount: "Per Friend Referred",
    note: "No referral limit. Withdraw anytime.",
    gradient: "linear-gradient(135deg, #00AAFF, #0077CC)",
  },
];

export default function Promotions() {
  return (
    <section
      id="promotions"
      className="py-12 px-4"
      style={{ background: "linear-gradient(180deg, #070F1A 0%, #0A1424 100%)" }}
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
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-3">
            Hot Promotions{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #E84E0F, #F5A800)" }}
          />
          <p className="text-white/40 font-body mt-5 text-sm">
            Tawaran eksklusif untuk semua ahli — jangan lepaskan peluang ini!
          </p>
        </motion.div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMOS.map((promo, i) => (
            <motion.div
              key={promo.title}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(155deg, #0D1B2E, #0a1220)",
                border: "1px solid rgba(232,78,15,0.15)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Flame gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: promo.gradient }}
              />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{promo.icon}</span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-body"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {promo.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-4">
                  {promo.title}
                </h3>

                {/* Highlight amount */}
                <div className="mb-4">
                  <span
                    className="text-5xl font-bold font-rajdhani"
                    style={{ color: "#F5A800" }}
                  >
                    {promo.highlight}
                  </span>
                  <p className="text-white/55 text-sm font-body mt-2">
                    {promo.desc}{" "}
                    <span className="text-white font-semibold">{promo.amount}</span>
                  </p>
                </div>

                {/* Note */}
                <p className="text-white/30 text-xs font-body mt-auto pt-5 border-t border-white/[0.07]">
                  {promo.note}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="btn-shimmer mt-6 text-center py-3.5 rounded-xl font-bold font-rajdhani text-sm text-dark transition-all duration-300 hover:opacity-90"
                  style={{ background: promo.gradient }}
                >
                  Claim Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
