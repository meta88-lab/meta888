"use client";

import { motion } from "framer-motion";

const CONTACTS = [
  {
    title: "Customer Service",
    desc: "Talk directly with our support agent — available 24/7 for all your queries, withdrawals, and bonuses.",
    label: "Chat with Agent",
    href: "https://t.me/metaaaa888",
    tag: "Response < 2 min",
  },
  {
    title: "Community Channel",
    desc: "Join our official Telegram channel for daily bonuses, tips, new game announcements and exclusive promos.",
    label: "Join Our Channel",
    href: "https://t.me/meta888malaysia",
    tag: "50K+ Members",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4"
      style={{ background: "linear-gradient(180deg, #070F1A 0%, #0D1B2E 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-3">
            Need Help? We&apos;re Here{" "}
            <span style={{ color: "#F5A800" }}>24/7</span>
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full mt-4"
            style={{ background: "linear-gradient(90deg, #F5A800, #00AAFF)" }}
          />
          <p className="text-white/40 font-body mt-5 text-sm">
            Hubungi kami bila-bila masa melalui Telegram
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CONTACTS.map((contact, i) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-blue-border rounded-2xl p-8 md:p-10 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-blue"
                  style={{
                    background: "rgba(0,170,255,0.1)",
                    border: "1px solid rgba(0,170,255,0.3)",
                  }}
                >
                  <TelegramIcon className="w-7 h-7" />
                </div>

                <div className="flex-1">
                  {/* Tag */}
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest font-body px-2.5 py-1 rounded-full"
                    style={{
                      color: "#00AAFF",
                      background: "rgba(0,170,255,0.1)",
                      border: "1px solid rgba(0,170,255,0.2)",
                    }}
                  >
                    {contact.tag}
                  </span>

                  <h3 className="text-xl font-bold font-rajdhani text-white mt-3 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-white/45 font-body text-sm leading-relaxed mb-7">
                    {contact.desc}
                  </p>

                  {/* Button */}
                  <span
                    className="btn-shimmer inline-flex items-center gap-2 text-sm font-bold font-rajdhani px-6 py-3 rounded-xl text-white transition-all duration-300 group-hover:shadow-blue"
                    style={{
                      background: "linear-gradient(135deg, #00AAFF, #0077CC)",
                    }}
                  >
                    <TelegramIcon className="w-4 h-4" />
                    {contact.label} →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00AAFF">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.932z" />
    </svg>
  );
}
