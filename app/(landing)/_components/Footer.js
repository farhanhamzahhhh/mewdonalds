import React from "react";
import Image from "next/image";
import { dexscreenerLink, twitterLink, telegramLink } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-stone-400 py-12 px-6 md:px-8 lg:px-12 xl:px-16 border-t border-stone-900">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="logo-coin.jpg"
            width={60}
            height={60}
            className="rounded-full border border-mewdonRed h-10 w-10 object-cover"
            alt="Mew Donalds logo"
          />
          <span className="font-stopbuck text-white text-xl tracking-wider">
            {"MewDonald's"}
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-mewdonYellow font-mono text-sm uppercase transition"
          >
            Twitter/X
          </a>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-mewdonYellow font-mono text-sm uppercase transition"
          >
            Telegram
          </a>
          <span
            className="text-stone-600 font-mono text-sm uppercase cursor-not-allowed"
            title="Coming Soon"
          >
            DexScreener (Soon)
          </span>
        </div>
        
        <div className="text-xs font-mono text-stone-600 text-center md:text-right">
          <p>© {new Date().getFullYear()} {"MewDonald's"} Inc. All Rights Cooked.</p>
          <p className="mt-1">$MEWDON is a meme coin for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
