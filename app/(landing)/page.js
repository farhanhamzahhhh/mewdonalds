import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Marquee from "./_components/Marquee";
import Hero from "./_components/Hero";
import Philosophy from "./_components/Philosophy";
import Tokenomics from "./_components/Tokenomics";
import HowToBuy from "./_components/HowToBuy";
import Mission from "./_components/Mission";
import Roadmap from "./_components/Roadmap";
import Footer from "./_components/Footer";

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
