"use client";

import React from "react";
import { raydiumLink, contractAddress } from "@/constants";
import { motion } from "framer-motion";

const HowToBuy = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Wallet",
      description: "Download Phantom or Solflare extension for your browser or the app on your mobile device. Follow their steps to create a new wallet.",
    },
    {
      number: "02",
      title: "Get Some SOL",
      description: "You need SOL to buy $PCC. Buy SOL directly within your wallet, or transfer some from an exchange like Binance, Coinbase, or Kraken.",
    },
    {
      number: "03",
      title: "Go to Raydium",
      description: "Connect your wallet to Raydium or Jupiter. Paste the $PCC Contract Address (CA) into the token search bar to find it.",
    },
    {
      number: "04",
      title: "Swap for $PCC",
      description: "Enter the amount of SOL you want to swap for $PCC. Click swap, sign the transaction in your wallet, and you're officially a Regular.",
    }
  ];

  return (
    <div id="how-to-buy" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 text-pccCream font-bold mb-4">
            How to Buy <span className="text-pccGold">$PCC</span>
          </h2>
          <p className="text-body-lg text-pccCream/70 font-light">
            A simple guide for joining the legion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-gradient hover:glow-gold transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -top-6 -right-6 text-8xl font-bold text-[#1a1a1a] group-hover:text-[#222] transition-colors z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-pccGold mb-4">{step.title}</h3>
                <p className="text-pccCream/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center p-8 lg:p-12 glass-panel rounded-3xl border border-[#222]"
        >
          <h3 className="text-xl text-pccCream font-semibold mb-6">Ready to become a Regular?</h3>
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={raydiumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-pccGold text-[#0B0B0B] font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-all glow-gold-hover w-full sm:w-auto flex-1 text-center"
            >
              Buy on Raydium
            </a>
            <div className="flex-1 w-full bg-[#111] border border-[#333] rounded-lg p-4 flex flex-col items-center justify-center">
                <span className="text-xs text-pccCream/50 uppercase tracking-widest mb-1">Contract Address</span>
                <code className="text-xs sm:text-sm font-mono text-pccCream/80 break-all">{contractAddress}</code>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToBuy;
