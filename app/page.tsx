import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveWins from "@/components/LiveWins";
import MarqueeTicker from "@/components/MarqueeTicker";
import GamesGrid from "@/components/GamesGrid";
import Promotions from "@/components/Promotions";
import WhyUs from "@/components/WhyUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <LiveWins />
      <MarqueeTicker />
      <GamesGrid />
      <Promotions />
      <WhyUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
