import type { Metadata } from "next";
import { Rajdhani, DM_Sans } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meta888 — Malaysia's Premier Online Gaming Platform",
  description:
    "Malaysia's #1 online gaming platform. Fast payouts, trusted, 24/7 live support. Play Mega888, Live Casino, Sports Betting and more. Daftar sekarang!",
  keywords: "meta888, online casino malaysia, mega888, slot games, live casino, sports betting",
  openGraph: {
    title: "Meta888 — Malaysia's Premier Online Gaming Platform",
    description: "Fast payouts · Trusted · 24/7 Live Support. Join thousands of winners today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rajdhani.variable} ${dmSans.variable} antialiased bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
