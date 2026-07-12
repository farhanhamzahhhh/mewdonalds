import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import Roadmap from "./_components/Roadmap";
import FuturePlans from "./_components/FuturePlans";
import HowToBuy from "./_components/HowToBuy";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[#121212] text-white">
        <About />
        <Exchanges />
        <Tokenomics />
        <Roadmap />
        <FuturePlans />
        <HowToBuy />
        <Footer />
      </div>
    </>
  );
}
