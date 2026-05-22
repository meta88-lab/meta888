"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "./LogoImage";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "Promotions", href: "#promotions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo — see /components/LogoImage.tsx to change the file */}
            <a href="#home" className="flex items-center">
              <LogoImage width={140} height={40} />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-semibold font-body text-white/75 hover:text-white tracking-wide transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold font-body text-white/80 border border-white/20 rounded-lg hover:border-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </a>
              <a
                href="#contact"
                className="btn-shimmer px-5 py-2 text-sm font-bold font-rajdhani text-dark rounded-lg transition-all duration-200 hover:shadow-gold"
                style={{ background: "linear-gradient(135deg, #F5A800, #FFD700)" }}
              >
                Join Now
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-md"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white mx-auto transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mx-auto transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mx-auto transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col md:hidden"
              style={{
                background: "linear-gradient(160deg, #0D1B2E, #070F1A)",
                borderLeft: "1px solid rgba(245,168,0,0.2)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  <LogoImage width={110} height={34} />
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/50 hover:text-white text-xl leading-none"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-white font-semibold font-rajdhani text-lg hover:bg-white/5 hover:text-gold transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="px-6 py-6 flex flex-col gap-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-center py-3 font-semibold font-body text-white border border-white/25 rounded-lg hover:border-white/50 transition-all"
                >
                  Login
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-shimmer text-center py-3 font-bold font-rajdhani text-dark rounded-lg"
                  style={{ background: "linear-gradient(135deg, #F5A800, #FFD700)" }}
                >
                  Daftar Sekarang
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
