"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-h2 text-hbaoCream mb-6 font-bold font-serif">
            Why <span className="text-hbaoGold">$HBAO?</span>
          </h2>
          <p className="text-body-lg text-hbaoCream/80 leading-relaxed font-light">
            The market is watching. Time to fill the vault.
          </p>
          <p className="text-body text-hbaoCream/70 mt-4 leading-relaxed">
            The crypto landscape is saturated with noise. They talk. They hype. They beg. But the $HBAO panda just sits back, stares stoically, and polishes his gold. <strong className="text-hbaoCream font-medium">We aren&apos;t here to play games; we are here to build a wealth dynasty.</strong>
          </p>
          <p className="text-body text-hbaoCream/70 mt-4 leading-relaxed">
            We are establishing the &quot;Hodl Bao&quot; identity—serious, confident, and wealth-oriented. When you see the face, you know the status. This is the gold standard of meme coins.
          </p>
          <p className="text-body text-hbaoGold mt-6 font-medium italic">
            Show them who&apos;s wearing the chain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-24"
        >
          <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden glass-panel p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/hbao-vault.jpeg"
                fill
                className="object-cover"
                alt="Hodl Bao Vault"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">1. Brand Authority</h3>
            <p className="text-hbaoCream/70 leading-relaxed">
              $HBAO stands on the stoic, unimpressed energy of the panda boss. A serious, confident, and wealth-oriented brand identity. We don&apos;t chase hype; we establish dominance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">2. The Sanctuary Fund</h3>
            <p className="text-hbaoCream/70 leading-relaxed">
              A boss knows that true power includes building a legacy of care. We have a dedicated treasury allocation to fund welfare and sanctuary initiatives, proving that our wealth has real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">3. The Vault Strategy</h3>
            <p className="text-hbaoCream/70 leading-relaxed mb-4">
              Ensuring the foundation is solid; 100% LP is locked Day-1 because the boss doesn&apos;t run.
            </p>
            <ul className="list-disc list-inside text-hbaoCream/70 space-y-1 mb-4">
              <li>Fair launch on a high-volume chain</li>
              <li>Locked Liquidity</li>
              <li>DAO Governance for loyal holders</li>
            </ul>
            <p className="text-hbaoCream/70 leading-relaxed mt-2">
              By becoming the calm and rational voice in a noisy market, we attract people who value conviction over speculation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">4. A Wealth Dynasty</h3>
            <p className="text-hbaoCream/70 leading-relaxed">
              We are building a long-term sustainability plan to ensure $HBAO remains the premier &quot;wealth&quot; meme token on the market. From advanced DeFi integrations and staking pools to Tier-1 CEX listings, the empire is expanding.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center border border-hbaoGold/20 p-12 rounded-3xl bg-hbaoGold/5"
        >
          <h3 className="text-3xl font-bold text-hbaoCream mb-8">The HBAO Dynasty</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-base sm:text-lg text-hbaoCream/80 font-medium">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="text-2xl">🐼</span> Stay Stoic.
            </div>
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="text-2xl">💰</span> Polish the Gold.
            </div>
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="text-2xl">🏦</span> Fill the Vault.
            </div>
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="text-2xl">👑</span> Wear the Chain.
            </div>
          </div>
          <p className="text-hbaoGold mt-8 text-xl italic font-semibold">
            Because true wealth doesn&apos;t need to shout.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
