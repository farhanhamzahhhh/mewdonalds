import React from "react";
import Image from "next/image";
import { telegramLink, twitterLink } from "@/constants";
import { Telegram, X } from "@/components/icons";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#222] pt-16 pb-8">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pccGold/30 glow-gold">
                <Image
                  src="/si-c.jpeg"
                  fill
                  className="object-cover"
                  alt="PeciCatCoin Mascot Si C"
                />
              </div>
              <span className="font-serif font-bold text-pccCream text-2xl tracking-wide">
                PeciCatCoin
              </span>
            </div>
            <p className="text-pccCream/60 max-w-sm leading-relaxed">
              PeciCatCoin ($PCC) is built on the Philosophy of Presence. We value patience, good coffee, meaningful conversations, and peace of mind.
            </p>
          </div>

          <div>
            <h4 className="text-pccGold font-bold mb-6 tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#philosophy" className="text-pccCream/60 hover:text-pccGold transition-colors">Philosophy</a></li>
              <li><a href="#tokenomics" className="text-pccCream/60 hover:text-pccGold transition-colors">Tokenomics</a></li>
              <li><a href="#sanctuary" className="text-pccCream/60 hover:text-pccGold transition-colors">The Sanctuary</a></li>
              <li><a href="#roadmap" className="text-pccCream/60 hover:text-pccGold transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-pccGold font-bold mb-6 tracking-widest uppercase">Join Us</h4>
            <div className="flex gap-4">
              <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-pccCream hover:bg-pccGold hover:text-[#0B0B0B] hover:border-pccGold transition-all">
                <Telegram className="w-5 h-5" />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-pccCream hover:bg-pccGold hover:text-[#0B0B0B] hover:border-pccGold transition-all">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#222] text-center md:flex md:justify-between md:text-left text-pccCream/40 text-sm">
          <p>© {new Date().getFullYear()} PeciCatCoin ($PCC). All rights reserved.</p>
          <p className="mt-4 md:mt-0">Because cultures last longer than hype.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
