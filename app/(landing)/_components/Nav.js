"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dexscreenerLink, twitterLink } from "@/constants";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Drive-Thru", href: "#drive-thru" },
  { name: "Order Steps", href: "#order-steps" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      aria-label="Global"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-20 bg-black/90 shadow-lg border-b border-mewdonRed" : "h-28 bg-black/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl h-full">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/logo-coin.jpg"
              width={80}
              height={80}
              className="h-12 w-12 rounded-full border-2 border-mewdonYellow object-cover"
              alt="logo coin"
            />
            <span className="font-stopbuck text-mewdonYellow text-2xl hidden sm:inline tracking-wider">
              MewDonald&apos;s
            </span>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition duration-200 text-white hover:text-mewdonYellow text-xl font-bold font-stopbuck tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href={dexscreenerLink}
            target="_blank"
            className="transition duration-200 font-stopbuck text-lg sm:text-xl rounded-xl px-4 py-2 font-medium text-white shadow-2xl bg-mewdonRed hover:bg-mewdonYellow hover:text-black border-2 border-black"
          >
            Order $MEWDON
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
