"use client";

const ITEMS = [
  { icon: "🔥", text: "Fast Withdrawal" },
  { icon: "🔐", text: "Secure & Trusted" },
  { icon: "🎰", text: "100+ Games" },
  { icon: "💰", text: "Daily Bonus" },
  { icon: "📱", text: "Mobile Friendly" },
  { icon: "⚡", text: "Instant Deposit" },
  { icon: "🏆", text: "Licensed & Regulated" },
  { icon: "🎲", text: "Live Casino" },
  { icon: "🎁", text: "Welcome Bonus" },
  { icon: "💎", text: "VIP Programme" },
];

// Duplicate for seamless infinite loop
const DOUBLED = [...ITEMS, ...ITEMS];

export default function MarqueeTicker() {
  return (
    <div
      className="relative overflow-hidden py-3.5"
      style={{
        background: "linear-gradient(90deg, #0A1525, #0D1B2E, #0A1525)",
        borderTop: "1px solid rgba(245,168,0,0.18)",
        borderBottom: "1px solid rgba(245,168,0,0.18)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0A1525, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #0A1525, transparent)" }}
      />

      <div className="flex animate-marquee whitespace-nowrap">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-sm font-semibold font-body tracking-widest uppercase"
            style={{ color: "#F5A800" }}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
            <span
              className="mx-6"
              style={{ color: "rgba(245,168,0,0.25)", fontSize: "10px" }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
