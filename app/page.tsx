import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import GamesGrid from "@/components/GamesGrid";
import Promotions from "@/components/Promotions";
import WhyUs from "@/components/WhyUs";
import TelegramCTA from "@/components/TelegramCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <GamesGrid />
      <Promotions />
      <WhyUs />
      <TelegramCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
