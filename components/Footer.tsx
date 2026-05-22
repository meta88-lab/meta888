import LogoImage from "./LogoImage";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "Promotions", href: "#promotions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const GAMES = [
  "Mega888",
  "Pussy888",
  "Live Roulette",
  "Blackjack VIP",
  "Dragon Tiger",
  "Sports Betting",
];

const CONTACT_LINKS = [
  {
    label: "Customer Service",
    href: "https://t.me/metaaaa888",
    sub: "@metaaaa888",
  },
  {
    label: "Telegram Channel",
    href: "https://t.me/meta888malaysia",
    sub: "@meta888malaysia",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060C16",
        borderTop: "1px solid rgba(245,168,0,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo — see /components/LogoImage.tsx to change the file */}
            <div className="mb-4">
              <LogoImage width={130} height={40} className="object-left" />
            </div>

            <p className="text-white/35 text-sm font-body leading-relaxed mb-6 max-w-xs">
              Malaysia&apos;s #1 Online Gaming Platform. Fast payouts, trusted, and
              available 24/7.
            </p>

            {/* Social */}
            <a
              href="https://t.me/meta888malaysia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-body text-white transition-all duration-200 hover:shadow-blue"
              style={{
                background: "rgba(0,170,255,0.1)",
                border: "1px solid rgba(0,170,255,0.25)",
              }}
            >
              <TelegramIcon className="w-4 h-4" />
              Join Telegram
            </a>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4
              className="text-xs font-bold font-rajdhani uppercase tracking-[0.2em] mb-5"
              style={{ color: "#F5A800" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-body text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <span style={{ color: "#F5A800", fontSize: "10px" }}>▶</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Games ── */}
          <div>
            <h4
              className="text-xs font-bold font-rajdhani uppercase tracking-[0.2em] mb-5"
              style={{ color: "#F5A800" }}
            >
              Games
            </h4>
            <ul className="space-y-3">
              {GAMES.map((game) => (
                <li key={game}>
                  <a
                    href="#games"
                    className="flex items-center gap-2 text-sm font-body text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <span style={{ color: "#F5A800", fontSize: "10px" }}>▶</span>
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4
              className="text-xs font-bold font-rajdhani uppercase tracking-[0.2em] mb-5"
              style={{ color: "#F5A800" }}
            >
              Contact
            </h4>
            <ul className="space-y-5">
              {CONTACT_LINKS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 transition-all duration-200"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-blue transition-all duration-200"
                      style={{
                        background: "rgba(0,170,255,0.1)",
                        border: "1px solid rgba(0,170,255,0.2)",
                      }}
                    >
                      <TelegramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold font-body text-white/60 group-hover:text-white transition-colors">
                        {c.label}
                      </p>
                      <p className="text-xs font-body" style={{ color: "#00AAFF" }}>
                        {c.sub}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Gold Divider ── */}
        <div
          className="my-10 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(245,168,0,0.4), transparent)",
          }}
        />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-white/25 text-xs font-body">
            © 2024 Meta888. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;18+
            Responsible Gaming
          </p>
          <p className="text-white/18 text-xs font-body italic max-w-sm">
            Meta888 is an entertainment platform. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00AAFF">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z" />
    </svg>
  );
}
