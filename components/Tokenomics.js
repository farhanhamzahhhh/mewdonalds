"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 text-hbaoCream font-bold mb-4 font-serif">
            Tokenomics
          </h2>
          <p className="text-body-lg text-hbaoCream/70 font-light">
            Transparent & Fair
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden glass-panel p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/hbao-tokenomics.jpeg"
                fill
                className="object-cover"
                alt="Hodl Bao Tokenomics"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-hbaoCream/70 mb-2">Total Supply</h3>
            <p className="text-2xl font-bold text-hbaoGold">1,000,000,000</p>
            <p className="text-hbaoCream/50 text-xs mt-1">$HBAO</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-hbaoCream/70 mb-2">Transaction Tax</h3>
            <p className="text-2xl font-bold text-hbaoGold">0%</p>
            <p className="text-hbaoCream/50 text-xs mt-1">Zero Tax</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-hbaoCream/70 mb-2">Liquidity</h3>
            <p className="text-2xl font-bold text-hbaoGold">100% LOCKED</p>
            <p className="text-hbaoCream/50 text-xs mt-1">Day-1</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-hbaoCream/70 mb-2">Contract Safety</h3>
            <p className="text-xl font-bold text-hbaoGold">RENOUNCED</p>
            <p className="text-hbaoCream/50 text-xs mt-1">Safe</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-6 md:p-12 border border-[#222]"
        >
          <h3 className="text-2xl font-bold text-hbaoCream mb-8 text-center border-b border-[#222] pb-6">Distribution</h3>

          <div className="space-y-6">
            {/* 85% LP */}
            <div className="flex items-center gap-4">
              <div className="w-14 sm:w-16 md:w-20 font-bold text-xl sm:text-2xl text-hbaoGold text-right">85%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-hbaoGold rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-4">
                  <span className="text-hbaoCream font-medium">Liquidity Pool</span>
                  <span className="text-hbaoGold font-bold text-sm uppercase tracking-wider sm:text-right">Locked</span>
                </div>
              </div>
            </div>

            {/* 6% Marketing */}
            <div className="flex items-center gap-4">
              <div className="w-14 sm:w-16 md:w-20 font-bold text-xl sm:text-2xl text-hbaoGold text-right">6%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-hbaoGold rounded-full" style={{ width: "6%" }}></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-4">
                  <span className="text-hbaoCream font-medium">Marketing & Ecosystem Fund</span>
                </div>
              </div>
            </div>

            {/* 5% CEX */}
            <div className="flex items-center gap-4">
              <div className="w-14 sm:w-16 md:w-20 font-bold text-xl sm:text-2xl text-hbaoGold text-right">4%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-hbaoGold rounded-full" style={{ width: "4%" }}></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-4">
                  <span className="text-hbaoCream font-medium">CEX Listings & Treasury</span>
                </div>
              </div>
            </div>

            {/* 2% Sanctuary */}
            <div className="flex items-center gap-4">
              <div className="w-14 sm:w-16 md:w-20 font-bold text-xl sm:text-2xl text-hbaoGold text-right">2%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-hbaoGold rounded-full" style={{ width: "2%" }}></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-4">
                  <span className="text-hbaoCream font-medium">Sanctuary Fund</span>
                </div>
              </div>
            </div>

            {/* 2% Team */}
            <div className="flex items-center gap-4">
              <div className="w-14 sm:w-16 md:w-20 font-bold text-xl sm:text-2xl text-hbaoGold text-right">3%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-hbaoGold rounded-full" style={{ width: "3%" }}></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1 sm:gap-4">
                  <span className="text-hbaoCream font-medium">Team</span>
                  <span className="text-hbaoCream/50 text-xs sm:text-sm sm:text-right">Locked & Vested (The Boss gets his cut)</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
