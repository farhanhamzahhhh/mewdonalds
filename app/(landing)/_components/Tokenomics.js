"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 text-pccCream font-bold mb-4">
            Tokenomics
          </h2>
          <p className="text-body-lg text-pccCream/70 font-light">
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
                src="/pecicat-tokenomics.jpeg"
                fill
                className="object-cover"
                alt="PeciCatCoin Tokenomics"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-pccCream/70 mb-2">Total Supply</h3>
            <p className="text-2xl font-bold text-pccGold">1,000,000,000</p>
            <p className="text-pccCream/50 text-xs mt-1">$PCC</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-pccCream/70 mb-2">Transaction Tax</h3>
            <p className="text-2xl font-bold text-pccGold">0%</p>
            <p className="text-pccCream/50 text-xs mt-1">Zero Tax</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-pccCream/70 mb-2">Liquidity</h3>
            <p className="text-2xl font-bold text-pccGold">100% BURNED</p>
            <p className="text-pccCream/50 text-xs mt-1">Unruggable</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center border-gradient hover:glow-gold transition-all duration-300"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-pccCream/70 mb-2">Contract Safety</h3>
            <p className="text-xl font-bold text-pccGold">REVOKED</p>
            <p className="text-pccCream/50 text-xs mt-1">Mint & Freeze</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-8 md:p-12 border border-[#222]"
        >
          <h3 className="text-2xl font-bold text-pccCream mb-8 text-center border-b border-[#222] pb-6">Distribution</h3>

          <div className="space-y-6">
            {/* 85% LP */}
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 font-bold text-2xl text-pccGold text-right">85%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-pccGold rounded-full" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pccCream font-medium">Liquidity Pool</span>
                  <span className="text-pccGold font-bold text-sm uppercase tracking-wider">Burned</span>
                </div>
              </div>
            </div>

            {/* 6% Marketing */}
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 font-bold text-2xl text-pccGold text-right">6%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-pccGold rounded-full" style={{ width: "6%" }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pccCream font-medium">Marketing & Community</span>
                </div>
              </div>
            </div>

            {/* 5% CEX */}
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 font-bold text-2xl text-pccGold text-right">5%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-pccGold rounded-full" style={{ width: "5%" }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pccCream font-medium">CEX & Exchange Listings</span>
                </div>
              </div>
            </div>

            {/* 2% Sanctuary */}
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 font-bold text-2xl text-pccGold text-right">2%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-pccGold rounded-full" style={{ width: "2%" }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pccCream font-medium">The Sanctuary Fund</span>
                </div>
              </div>
            </div>

            {/* 2% Team */}
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 font-bold text-2xl text-pccGold text-right">2%</div>
              <div className="flex-1">
                <div className="h-4 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full bg-pccGold rounded-full" style={{ width: "2%" }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-pccCream font-medium">Team & Ecosystem</span>
                  <span className="text-pccCream/50 text-sm">Locked / Vested</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tokenomics;
