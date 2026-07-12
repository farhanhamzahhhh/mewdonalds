import React from "react";
import Image from "next/image";
import ContractAddress from "@/components/ContractAddress";
import Countdown from "@/components/Countdown";
import PumpfunChart from "@/components/PumpfunChart";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 bg-mewdonDark min-h-dvh flex flex-col justify-center items-center px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#db0007_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <h1 className="sr-only">MewDonald&apos;s ($MEWDON) Meme Coin on Solana</h1>

      {/* Main sign board frame */}
      <div className="relative w-full max-w-4xl bg-black border-8 border-mewdonRed rounded-3xl py-4 shadow-2xl glow-red flex flex-col items-center">
        {/* Neon Hanging chains decoration */}
        <div className="absolute -top-16 left-12 w-2 h-16 bg-gray-600 hidden md:block"></div>
        <div className="absolute -top-16 right-12 w-2 h-16 bg-gray-600 hidden md:block"></div>

        {/* Banner image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-4 border-black">
          <Image
            src="hero-banner.jpeg"
            fill
            className="object-contain"
            alt="Mew Donalds Banner Sign"
            priority
          />
        </div>

        {/* Signboard bottom scrolling neon text */}
        <div className="px-4">
          <div className="w-full mt-4 bg-red-950/40 border-2 border-mewdonRed/50 rounded-xl p-2.5 text-center overflow-hidden">
            <p className="font-stopbuck text-mewdonYellow text-body-lg animate-pulse tracking-widest text-shadow-black">
              🍔 NOW SERVING FRESH ON SOLANA • ZERO TAXES • LP BURNED 🍟
            </p>
          </div>
        </div>
      </div>

      <Countdown />

      {/* <PumpfunChart /> */}

      {/* Contract address receipt block */}
      <div className="mt-12 w-full max-w-xl">
        <p className="text-center font-stopbuck text-mewdonYellow text-body-lg mb-2">SCAN & ORDER TICKETS HERE:</p>
        <ContractAddress />
      </div>
    </div>
  );
};

export default Hero;

