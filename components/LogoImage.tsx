"use client";

import Image from "next/image";
import { useState } from "react";

// ─── DROP YOUR LOGO HERE ──────────────────────────────────────
// Place your file in /public/ and set the filename below.
// Supported: .png  .svg  .webp  .jpg
export const LOGO_SRC = "/logo-transparent.png";

// Set to true if your logo has a WHITE background (PNG without transparency).
// This wraps it in a clean rounded container so it looks sharp on dark navbars.
// Set to false once you have a logo with a transparent background.
const HAS_WHITE_BG = false;
// ─────────────────────────────────────────────────────────────

interface LogoImageProps {
  /** Display height in px — width scales proportionally */
  height?: number;
  /** Accepted for backwards compat but ignored — width is auto from height */
  width?: number;
  className?: string;
}

export default function LogoImage({ height = 48, className = "" }: LogoImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="select-none font-bold"
        style={{ fontFamily: "var(--font-rajdhani)", fontSize: height * 0.65 }}
      >
        <span style={{ color: "#F5A800" }}>META</span>
        <span style={{ color: "#00AAFF" }}>888</span>
      </span>
    );
  }

  const img = (
    <Image
      src={LOGO_SRC}
      alt="Meta888"
      width={0}
      height={0}
      sizes="200px"
      className={`object-contain w-auto ${className}`}
      style={{ height: `${height}px` }}
      priority
      onError={() => setFailed(true)}
    />
  );

  if (HAS_WHITE_BG) {
    // Clean white pill container — makes white-background logos look sharp on dark navbars
    return (
      <div
        className="flex items-center justify-center rounded-xl overflow-hidden px-2"
        style={{
          background: "rgba(255,255,255,0.95)",
          height: `${height + 8}px`,
          boxShadow: "0 0 12px rgba(245,168,0,0.25)",
        }}
      >
        {img}
      </div>
    );
  }

  return img;
}
