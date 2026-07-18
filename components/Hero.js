"use client";

import React from "react";
import Image from "next/image";
import { telegramLink, raydiumLink, dexscreenerLink, contractAddress } from "@/constants";
import { motion } from "framer-motion";
import Button from "./Button";
import ClipboardCopy from "./ClipboardCopy";

const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 bg-[#0B0B0B] min-h-[90dvh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hbaoGold opacity-5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-8">

        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-hbaoGold uppercase tracking-[0.3em] text-sm font-semibold"
            >
              The $HBAO Panda Is In The House.
            </motion.p>
            <h1 className="text-h1 text-hbaoCream font-bold leading-tight font-serif">
              Hodl Bao ($HBAO) <br className="hidden lg:block" />
              <span className="text-gradient-gold">The Vault, The Bling, & The Empire.</span>
            </h1>
          </div>

          <p className="text-body text-hbaoCream/70 max-w-2xl">
            They talk. They hype. They beg. The $HBAO panda just sits back, stares stoically, and polishes his gold. We aren&apos;t here to play games; we are here to build a wealth dynasty. When you see the face, you know the status. The market is watching. Time to fill the vault and show them who&apos;s wearing the chain.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Button href={raydiumLink} className="w-full sm:w-auto">
              Buy on Raydium
            </Button>
            <Button href={dexscreenerLink} variant="outline" className="w-full sm:w-auto">
              View Chart
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-center lg:justify-start w-full">
            <ClipboardCopy textToCopy={contractAddress} />
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end w-full max-w-[260px] sm:max-w-md lg:max-w-lg"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass-panel p-2 animate-float">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/hbao-boss.jpeg"
                fill
                className="object-cover"
                alt="$HBAO Panda Boss"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
