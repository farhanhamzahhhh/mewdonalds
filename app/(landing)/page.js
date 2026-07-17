import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Tokenomics from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import Mission from "@/components/Mission";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0B0B0B] text-white font-sans selection:bg-pccGold selection:text-[#0B0B0B]">
      <Header>
        <Nav />
      </Header>
      <main>
        <Hero />
        <Marquee text="$PCC ✦ STAY CALM ✦ WEAR THE PECI ✦ THE REGULARS" />
        <Philosophy />
        <Marquee text="$PCC ✦ ZERO TAX ✦ BURNED LP ✦ REVOKED" />
        <Tokenomics />
        <HowToBuy />
        <Mission />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
