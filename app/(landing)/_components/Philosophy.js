"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div id="philosophy" className="relative py-24 bg-[#0B0B0B] overflow-hidden border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-h2 text-pccCream mb-6 font-bold">
            Why <span className="text-pccGold">$PCC?</span>
          </h2>
          <p className="text-body-lg text-pccCream/80 leading-relaxed font-light">
            Because the market is screaming, and we are the only ones listening.
          </p>
          <p className="text-body text-pccCream/70 mt-4 leading-relaxed">
            The crypto landscape is saturated with projects that exist for a day and disappear overnight. They chase hype, depend on influencers, and abandon their communities the moment the chart turns red. <strong className="text-pccCream font-medium">$PCC is built on a different foundation: The Philosophy of Presence.</strong>
          </p>
          <p className="text-body text-pccCream/70 mt-4 leading-relaxed">
            We are not here to create another get-rich-quick token. We are building a culture. $PCC is for people who value patience, good coffee, meaningful conversations, and peace of mind. We don&apos;t chase hype—we let hype find us.
          </p>
          <p className="text-body text-pccGold mt-6 font-medium italic">
            Grab a seat. Pour a coffee. Stay awhile. Keep it chill.
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
                src="/pecicat-coffee.jpeg"
                fill
                className="object-cover"
                alt="PeciCatCoin Coffee"
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
            <h3 className="text-2xl font-semibold text-pccGold mb-4">1. Identity Over Hype</h3>
            <p className="text-pccCream/70 leading-relaxed">
              Most meme coins rely on temporary trends—dogs, frogs, and whatever comes next. $PCC stands on something timeless: the Peci. A symbol of wisdom, humility, confidence, and calm. It creates a brand that is instantly recognizable and endlessly adaptable. We are building a brand—not following a trend.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-pccGold mb-4">2. Community-Driven Sustainability</h3>
            <p className="text-pccCream/70 leading-relaxed">
              Great communities aren&apos;t controlled from the top—they grow from the people. At $PCC, every supporter is more than a holder. They are one of the Regulars. Our vision encourages community ownership through collaboration, local meetups, coffee culture, creative contributions, and shared values. When a project becomes part of people&apos;s lifestyle, it doesn&apos;t simply pump—it lasts.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-pccGold mb-4">3. The Anti-Scam Standard</h3>
            <p className="text-pccCream/70 leading-relaxed mb-4">
              Crypto has seen enough empty promises, rug pulls, and fake hype. $PCC chooses a different path:
            </p>
            <ul className="list-disc list-inside text-pccCream/70 space-y-1 mb-4">
              <li>Transparent tokenomics</li>
              <li>Long-term vision</li>
              <li>Honest communication</li>
              <li>Community-first decisions</li>
            </ul>
            <p className="text-pccCream/70 font-medium">We don&apos;t shill. We analyze. We don&apos;t panic. We persist.</p>
            <p className="text-pccCream/70 leading-relaxed mt-2">
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
            <h3 className="text-2xl font-semibold text-pccGold mb-4">4. Beyond the Digital World</h3>
            <p className="text-pccCream/70 leading-relaxed">
              A meme coin without real-world impact is just code. $PCC is designed to bridge digital communities with real-life experiences. Our long-term vision includes premium merchandise, global coffee meetups, community events, creative collaborations, and a DAO that supports meaningful real-world initiatives.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center border border-pccGold/20 p-12 rounded-3xl bg-pccGold/5"
        >
          <h3 className="text-3xl font-bold text-pccCream mb-8">The PCC Philosophy</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-lg text-pccCream/80 font-medium">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">☕</span> Stay Calm.
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🧢</span> Wear the Peci.
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🌍</span> Build Together.
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🚀</span> Grow Naturally.
            </div>
          </div>
          <p className="text-pccGold mt-8 text-xl italic font-semibold">
            Because cultures last longer than hype.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
