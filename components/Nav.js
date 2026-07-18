"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { twitterLink, telegramLink, contractAddress, dexscreenerLink } from "@/constants";
import { Telegram, X } from "@/components/icons";

const navigation = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Sanctuary", href: "#sanctuary" },
  { name: "Roadmap", href: "#roadmap" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        aria-label="Global"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "h-14 md:h-20 bg-[#0B0B0B]/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#222]"
            : "h-16 md:h-24 bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-12 mx-auto max-w-screen-2xl h-full">
          {/* Logo */}
          <div className="flex shrink-0">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-hbaoGold/30 glow-gold">
                <Image
                  src="/hbao-boss.jpeg"
                  fill
                  className="object-cover"
                  alt="$HBAO Panda Boss"
                />
              </div>
              <span className="font-serif font-bold text-hbaoCream text-2xl tracking-wide hidden xl:block">
                Hodl Bao
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest text-hbaoCream/80 hover:text-hbaoGold transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Investor Quick Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 border-l border-[#222] pl-8">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs font-mono bg-[#111] border border-[#333] px-3 py-1.5 rounded text-hbaoCream/70 hover:text-hbaoGold hover:border-hbaoGold/50 transition-colors"
            >
              <span>{copied ? "Copied!" : "CA"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
            </button>
            <a
              href={dexscreenerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest bg-hbaoGold/10 text-hbaoGold border border-hbaoGold/30 px-4 py-1.5 rounded hover:bg-hbaoGold hover:text-[#0B0B0B] transition-colors"
            >
              Chart
            </a>
          </div>

          {/* Socials & Hamburger */}
          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-hbaoCream/80 hover:text-hbaoGold transition-colors">
                <Telegram className="w-5 h-5" />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-hbaoCream/80 hover:text-hbaoGold transition-colors">
                <X className="w-5 h-5" />
              </a>
            </div>

            <button
              className="lg:hidden p-1 text-hbaoCream/80 hover:text-hbaoGold transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9998] backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-80 bg-[#0B0B0B] border-l border-[#222] shadow-2xl z-[9999] transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#222]">
          <span className="font-serif font-bold text-hbaoCream text-xl tracking-wide">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-hbaoCream/80 hover:text-hbaoGold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-hbaoCream text-lg uppercase tracking-widest font-medium hover:text-hbaoGold transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleCopy}
              className="flex justify-center items-center gap-2 text-sm font-mono bg-[#111] border border-[#333] px-4 py-3 rounded text-hbaoCream/70 hover:text-hbaoGold hover:border-hbaoGold/50 transition-colors w-full"
            >
              <span>{copied ? "Address Copied!" : "Copy CA"}</span>
            </button>
            <a
              href={dexscreenerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-bold uppercase tracking-widest bg-hbaoGold text-[#0B0B0B] px-4 py-3 rounded w-full"
            >
              View Chart
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-8 border-t border-[#222] pt-8">
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-hbaoCream/80 hover:text-hbaoGold transition-colors">
              <Telegram className="w-8 h-8" />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-hbaoCream/80 hover:text-hbaoGold transition-colors">
              <X className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
