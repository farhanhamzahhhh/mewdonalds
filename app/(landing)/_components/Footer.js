import React from "react";
import Image from "next/image";
import { dexscreenerLink, twitterLink, telegramLink } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-stone-400 py-12 px-6 md:px-8 lg:px-12 xl:px-16 border-t border-stone-900">
      <div className="max-w-[85rem] mx-auto flex flex-col gap-8">
        
        {/* Top Row: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="logo-coin.jpg"
              width={60}
              height={60}
              className="rounded-full border border-mewdonRed h-10 w-10 object-cover"
              alt="Mew Donalds logo"
            />
            <span className="font-stopbuck text-white text-h3 tracking-wider">
              {"Mewdon"}
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-mewdonYellow font-mono text-body-sm uppercase transition"
            >
              Twitter/X
            </a>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-mewdonYellow font-mono text-body-sm uppercase transition"
            >
              Telegram
            </a>
            <a
              href="/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-mewdonYellow font-mono text-body-sm uppercase transition"
            >
              White Paper
            </a>
            <a
              href={dexscreenerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-mewdonYellow font-mono text-body-sm uppercase transition"
            >
              DexScreener
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-900"></div>

        {/* Bottom Row: Disclaimer */}
        <div className="text-micro font-mono text-stone-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left shrink-0">
            © {new Date().getFullYear()} {"Mewdon"} Inc. All Rights Cooked.
          </p>
          <p className="text-center md:text-right max-w-xl">
            $MEWDON is a meme coin for entertainment purposes only. This project is a parody and is not affiliated with McDonald&apos;s Corporation.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
