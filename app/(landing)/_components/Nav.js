"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dexscreenerLink, twitterLink, telegramLink } from "@/constants";
import { Telegram, X } from "@/components/icons";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Drive-Thru", href: "#drive-thru" },
  { name: "Order Steps", href: "#order-steps" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Global"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "h-20 bg-black/90 shadow-lg border-b border-mewdonRed" : "h-28 bg-black/40 backdrop-blur-sm border-b border-transparent"
          }`}
      >
        <div className="flex items-center justify-between py-4 px-8 sm:px-10 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-screen-xl h-full">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="logo-coin.jpg"
              width={80}
              height={80}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-mewdonYellow object-cover"
              alt="logo coin"
            />
            <span className="font-stopbuck text-mewdonYellow text-2xl hidden xl:inline tracking-wider">
              MewDonald&apos;s
            </span>
          </a>
        </div>

        <div className="hidden md:flex md:gap-x-4 lg:gap-x-8 xl:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition duration-200 text-white hover:text-mewdonYellow text-sm md:text-base lg:text-lg xl:text-xl font-bold font-stopbuck tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex lg:flex-1 justify-end items-center gap-2 sm:gap-3">

          <div className="relative flex flex-col items-center">
            <button
              disabled
              className="transition duration-200 font-stopbuck text-xs sm:text-sm md:text-base lg:text-lg rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2 font-medium text-white bg-mewdonRed border-2 border-mewdonYellow cursor-not-allowed shadow-inner text-center"
              title="Coming Soon"
            >
              $MEWDON
            </button>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-mewdonYellow text-black border border-black px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase transform rotate-[-4deg] shadow-sm whitespace-nowrap z-10 hover:rotate-0 transition-transform">
              by pump.fun
            </span>
          </div>
          
          {/* Hamburger Icon */}
          <button
            className="md:hidden flex-shrink-0 p-2 text-mewdonYellow hover:text-white transition-colors ml-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-[9998] backdrop-blur-sm md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-[#121212] shadow-2xl border-l border-mewdonRed z-[9999] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <span className="font-stopbuck text-mewdonYellow text-lg sm:text-xl tracking-wider">MewDonald's</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white hover:text-mewdonYellow transition-colors rounded-full"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-6 px-6 pt-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-mewdonYellow text-lg sm:text-xl font-bold font-stopbuck tracking-wider transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex flex-col items-start gap-4 mt-8 pt-6">
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-[#24A1DE] rounded-full border-2 border-mewdonYellow hover:bg-mewdonYellow hover:text-black transition-all">
               <Telegram />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-2xl text-white bg-black rounded-full border-2 border-mewdonYellow hover:bg-mewdonYellow hover:text-black transition-all">
               <X />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
