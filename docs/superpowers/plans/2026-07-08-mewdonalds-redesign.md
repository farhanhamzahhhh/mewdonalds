# Mew Donalds ($mewdon) Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the website from the $DUIS dog theme to the Mew Donalds ($mewdon) fast-food cat theme, using a Modern Digital Menu Board aesthetic.

**Architecture:** Update Tailwind configuration, global CSS styles, page structure, and components to replace all $DUIS text, dog assets, and yellow colors with $MEWDON text, cat assets, fast-food red/yellow styling, and structured digital menu components.

**Tech Stack:** React 19, Next.js 15, Tailwind CSS 3.4.1

## Global Constraints

- Primary Color: `#db0007` (Mewdon Red)
- Secondary Color: `#ffbc0d` (Mewdon Yellow)
- Dark Theme Background: `#121212` (Digital Menu Board theme)
- Token Name: Mew Donalds
- Token Symbol: $MEWDON

---

### Task 1: Styling Configuration & Asset Preparation

**Files:**
- Create: `public/logo-coin.jpg` (copy of `public/mewdonalds-assets/mewdons.jpeg`)
- Create: `public/hero-banner.png` (copy of `public/mewdonalds-assets/mewdon.png`)
- Create: `public/about-chef.png` (copy of `public/mewdonalds-assets/about-chef.png`)
- Create: `public/burger.png` (copy of `public/mewdonalds-assets/burger.png`)
- Create: `public/fries.png` (copy of `public/mewdonalds-assets/fries.png`)
- Create: `public/shake.png` (copy of `public/mewdonalds-assets/shake.png`)
- Create: `public/soda.png` (copy of `public/mewdonalds-assets/soda.png`)
- Modify: `tailwind.config.js:10-18`
- Modify: `app/globals.css:10-57`

**Interfaces:**
- Consumes: Existing files in `public/mewdonalds-assets/`
- Produces: Updated Tailwind theme colors `mewdon-red`, `mewdon-yellow`, `mewdon-dark` and global class utilities for text shadows, glows, and kiosk layout.

- [ ] **Step 1: Copy asset files to project public folder**

Copy files using shell commands:
```bash
cp public/mewdonalds-assets/mewdons.jpeg public/logo-coin.jpg
cp public/mewdonalds-assets/mewdon.png public/hero-banner.png
cp public/mewdonalds-assets/about-chef.png public/about-chef.png
cp public/mewdonalds-assets/burger.png public/burger.png
cp public/mewdonalds-assets/fries.png public/fries.png
cp public/mewdonalds-assets/shake.png public/shake.png
cp public/mewdonalds-assets/soda.png public/soda.png
```

- [ ] **Step 2: Modify tailwind.config.js**

Update config to include custom brand colors:
```javascript
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        duis: "#eac837",
        mewdonRed: "#db0007",
        mewdonYellow: "#ffbc0d",
        mewdonDark: "#121212",
      },
```

- [ ] **Step 3: Modify app/globals.css**

Redefine global theme and custom classes to support the dark digital menu board theme:
```css
:root {
  --background: #121212;
  --foreground: #ffffff;
}

body {
  color: var(--foreground);
  background: var(--background);
}

.text-shadow-red {
  text-shadow: 4px 0 #db0007, -4px 0 #db0007, 0 4px #db0007, 0 -4px #db0007,
    4px 4px #db0007, -4px -4px #db0007, -4px 4px #db0007, 4px -4px #db0007;
}

.text-shadow-yellow {
  text-shadow: 4px 0 #ffbc0d, -4px 0 #ffbc0d, 0 4px #ffbc0d, 0 -4px #ffbc0d,
    4px 4px #ffbc0d, -4px -4px #ffbc0d, -4px 4px #ffbc0d, 4px -4px #ffbc0d;
}

.text-shadow-black {
  text-shadow: 3px 0 #000, -3px 0 #000, 0 3px #000, 0 -3px #000,
    3px 3px #000, -3px -3px #000, -3px 3px #000, 3px -3px #000;
}

.glow-yellow {
  box-shadow: 0 0 15px rgba(255, 188, 13, 0.4);
}

.glow-red {
  box-shadow: 0 0 15px rgba(219, 0, 7, 0.4);
}

.menu-border {
  border: 4px solid #000;
  box-shadow: 5px 5px 0px #db0007;
}
```

- [ ] **Step 4: Run build to ensure stylesheet compiles**

Run: `npm run build`
Expected: Successful compilation without CSS errors.

- [ ] **Step 5: Commit changes**

```bash
git add public/ tailwind.config.js app/globals.css
git commit -m "style: configure mewdonalds colors, assets, and text shadow utilities"
```

---

### Task 2: Layout & Navigation Setup

**Files:**
- Modify: `app/layout.js:3-7`
- Modify: `app/(landing)/_components/Nav.js`

**Interfaces:**
- Consumes: Nav links configuration
- Produces: Navigation header matching the dark red/yellow digital theme and metadata titles.

- [ ] **Step 1: Modify app/layout.js**

Update page metadata:
```javascript
export const metadata = {
  title: "Mew Donalds ($MEWDON) - Fast Food Cooking Cat",
  description: "Chef Mewdon is serving delicious decentralized $MEWDON tokens fresh on Solana. Open 24/7!",
};
```

- [ ] **Step 2: Modify app/(landing)/_components/Nav.js**

Rewrite navigation links and colors. Use `logo-coin.jpg`, replace $DUIS with $MEWDON, and apply brand colors:
```javascript
const navigation = [
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Drive-Thru", href: "#drive-thru" },
  { name: "Order Steps", href: "#order-steps" },
];
```
Update render:
```javascript
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
              MewDonald's
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
            href="https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon"
            target="_blank"
            className="transition duration-200 font-stopbuck text-lg sm:text-xl rounded-xl px-4 py-2 font-medium text-white shadow-2xl bg-mewdonRed hover:bg-mewdonYellow hover:text-black border-2 border-black"
          >
            Order $MEWDON
          </a>
        </div>
      </div>
    </nav>
  );
```

- [ ] **Step 3: Test Nav compilation**

Run: `npm run build`
Expected: Compile success.

- [ ] **Step 4: Commit changes**

```bash
git add app/layout.js app/(landing)/_components/Nav.js
git commit -m "feat: update layout metadata and navigation bar styling"
```

---

### Task 3: Hero Section & Receipt Widget

**Files:**
- Modify: `app/(landing)/_components/Hero.js`
- Modify: `components/ContractAddress.js`
- Modify: `constants/index.js`

**Interfaces:**
- Consumes: `public/hero-banner.png`
- Produces: Framed hero signboard and copyable contract address styled like a receipt paper.

- [ ] **Step 1: Modify constants/index.js**

Change the contract address to a temporary placeholder for Mew Donalds:
```javascript
export const contractAddress = "mewdon1111111111111111111111111111111111111";
```

- [ ] **Step 2: Modify app/(landing)/_components/Hero.js**

Refactor the Hero component to display a signboard menu box containing `hero-banner.png` with decorative styling:
```javascript
import React from "react";
import Image from "next/image";
import ContractAddress from "@/components/ContractAddress";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 bg-[#1a1512] min-h-dvh flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#db0007_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Main sign board frame */}
      <div className="relative w-full max-w-4xl bg-black border-8 border-mewdonRed rounded-3xl p-4 shadow-2xl glow-red flex flex-col items-center">
        {/* Neon Hanging chains decoration */}
        <div className="absolute -top-16 left-12 w-2 h-16 bg-gray-600 hidden md:block"></div>
        <div className="absolute -top-16 right-12 w-2 h-16 bg-gray-600 hidden md:block"></div>
        
        {/* Banner image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-4 border-black">
          <Image
            src="/hero-banner.png"
            fill
            className="object-cover"
            alt="Mew Donalds Banner Sign"
            priority
          />
        </div>
        
        {/* Signboard bottom scrolling neon text */}
        <div className="w-full mt-4 bg-red-950/40 border-2 border-mewdonRed/50 rounded-xl p-2.5 text-center overflow-hidden">
          <p className="font-stopbuck text-mewdonYellow text-xl md:text-2xl animate-pulse tracking-widest text-shadow-black">
            🍔 NOW SERVING FRESH ON SOLANA • ZERO TAXES • LP BURNED 🍟
          </p>
        </div>
      </div>
      
      {/* Contract address receipt block */}
      <div className="mt-12 w-full max-w-xl">
        <p className="text-center font-stopbuck text-mewdonYellow text-lg mb-2">SCAN & ORDER TICKETS HERE:</p>
        <ContractAddress />
      </div>
    </div>
  );
};

export default Hero;
```

- [ ] **Step 3: Modify components/ContractAddress.js**

Re-style the widget to look like a printed receipt paper:
```javascript
"use client";

import React, { useState } from "react";
import { Copy } from "@/components/icons";
import { contractAddress } from "@/constants";

const ContractAddress = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [textToCopy] = useState(contractAddress);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      setCopySuccess("Failed!");
    }
  };

  return (
    <div className="relative bg-white text-black p-4 rounded-lg shadow-lg border-t-8 border-dashed border-mewdonRed font-mono text-sm sm:text-base border border-gray-300">
      <div className="text-center border-b border-dashed border-gray-400 pb-2 mb-2">
        <h4 className="font-bold tracking-widest uppercase">MEWDONALD'S INC.</h4>
        <p className="text-xs">ORDER #777 - SOLANA CHAIN</p>
      </div>
      
      <div className="flex justify-between items-center my-2 gap-4">
        <span className="font-bold uppercase tracking-wider text-xs">CONTRACT ADDR:</span>
        <span className="font-mono text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded select-all truncate max-w-[240px] md:max-w-none">
          {textToCopy}
        </span>
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-400">
        <div>
          <span className="text-xs block text-gray-500">TAX: 0% | SLIPPAGE: AUTO</span>
          <span className="font-bold text-mewdonRed">{copySuccess ? "COPIED TO DOMPET!" : "PENDING RECEIPT..."}</span>
        </div>
        <button
          onClick={copyText}
          className="transition duration-200 font-stopbuck text-base rounded-lg px-4 py-2 text-white bg-mewdonRed hover:bg-mewdonYellow hover:text-black border border-black flex items-center gap-2 shadow"
        >
          <Copy /> COPY TICKET
        </button>
      </div>
    </div>
  );
};

export default ContractAddress;
```

- [ ] **Step 4: Run build to verify types and components**

Run: `npm run build`
Expected: Pass.

- [ ] **Step 5: Commit changes**

```bash
git add constants/index.js app/(landing)/_components/Hero.js components/ContractAddress.js
git commit -m "feat: design hero signboard frame and receipt-styled contract address block"
```

---

### Task 4: About Section & Story

**Files:**
- Modify: `app/(landing)/_components/About.js`

**Interfaces:**
- Consumes: `/about-chef.png`
- Produces: Complete About section describing Chef Mewdon's story with fast-food layout aesthetics.

- [ ] **Step 1: Modify app/(landing)/_components/About.js**

Replace the Dui layout/story with Chef Mewdon's fast food cooking cat story:
```javascript
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="relative py-20 bg-mewdonDark overflow-hidden border-t border-b border-black">
      {/* Decorative fast food checkerboard border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: "linear-gradient(45deg, #db0007 25%, transparent 25%), linear-gradient(-45deg, #db0007 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #db0007 75%), linear-gradient(-45deg, transparent 75%, #db0007 75%)", backgroundSize: "20px 20px" }}></div>

      <div className="max-w-[85rem] px-6 py-10 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            Our Kitchen Story
          </h2>
          <h3 className="font-stopbuck text-2xl tracking-widest text-white mt-2">
            WHO IS CHEF MEWDON? 🍳
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden border-4 border-mewdonYellow shadow-2xl glow-yellow bg-stone-900">
              <Image
                className="object-cover p-2"
                src="/about-chef.png"
                fill
                alt="Chef Mewdon cooking"
              />
            </div>
          </div>

          <div className="space-y-6 text-gray-200">
            <p className="font-mono text-lg md:text-xl leading-relaxed text-justify">
              Meet <span className="text-mewdonYellow font-bold text-2xl">Chef Mewdon</span>, the hardest working feline in the fast-food industry. For years, he cooked countless burgers, flipped hot fries, and served shakes for greedy humans at minimum claw-wage, only to be rewarded with cheap kibble.
            </p>
            <p className="font-mono text-lg md:text-xl leading-relaxed text-justify">
              One day, Chef Mewdon decided he had enough! He knocked a tray of cups off the counter (for dominance), walked out of the kitchen, and launched his own decentralized franchise right on the <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">Solana blockchain</span>.
            </p>
            <p className="font-mono text-lg md:text-xl leading-relaxed text-justify">
              Now, he is flipping <span className="text-mewdonRed font-extrabold text-2xl">$MEWDON</span> tokens instead of beef patties, building a global army of hungry cats, and making sure the liquidity is locked tighter than the restaurant's safe box!
            </p>
            
            <div className="pt-6 border-t border-gray-800">
              <p className="font-stopbuck text-mewdonYellow text-2xl text-center lg:text-left">
                No human managers. No bad shifts. Just pure financial taste! 🍔
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
```

- [ ] **Step 2: Run build to check compiler**

Run: `npm run build`
Expected: Compile success.

- [ ] **Step 3: Commit changes**

```bash
git add app/(landing)/_components/About.js
git commit -m "feat: complete Chef Mewdon story in About section"
```

---

### Task 5: Tokenomics (Menu Board)

**Files:**
- Modify: `app/(landing)/_components/Tokenomics.js`
- Modify: `components/Card.js`

**Interfaces:**
- Consumes: `public/{burger,fries,shake,soda}.png`
- Produces: LCD menu board showing the 4 combo tokenomics options.

- [ ] **Step 1: Modify app/(landing)/_components/Tokenomics.js**

Rewrite the cards array and styled wrappers:
```javascript
import React from "react";
import Card from "@/components/Card";

const cards = [
  {
    img: "burger.png",
    title: "LP Bonding",
    desc: "85% of Supply",
    price: "Ingredients: Pump.fun initial supply to drive the market price freely.",
  },
  {
    img: "fries.png",
    title: "Airdrop Pool",
    desc: "5% of Supply",
    price: "Ingredients: Crispy rewards for early shillers & loyal keyboard cat warriors.",
  },
  {
    img: "shake.png",
    title: "Marketing",
    desc: "5% (Locked)",
    price: "Ingredients: Timelocked funds to pay for fast-food memes & future CEX tier list.",
  },
  {
    img: "soda.png",
    title: "Team LP",
    desc: "5% (Timelock)",
    price: "Ingredients: Timelocked allocation for long-term project recipe maintenance.",
  },
];

const Tokenomics = () => {
  return (
    <div id="menu" className="relative py-20 bg-[#15110f] border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            MewDonald's Menu
          </h2>
          <h3 className="font-stopbuck text-2xl text-white tracking-widest mt-2">
            TASTY RECIPES & TOKEN DETAILS 🥤
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-center">
          {cards.map((card, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <Card props={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
```

- [ ] **Step 2: Modify components/Card.js**

Format Card layout to resemble retro light-box menus:
```javascript
import React from "react";
import Image from "next/image";

const Card = ({ props: { img, title, desc, price } }) => {
  return (
    <div className="group relative block w-full max-w-sm">
      {/* Background card frame border */}
      <span className="absolute inset-0 bg-mewdonRed rounded-2xl border-4 border-black"></span>

      <div className="relative transform rounded-2xl border-4 border-black bg-stone-900 text-white p-4 transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 flex flex-col justify-between h-[420px]">
        {/* LCD Panel header */}
        <div className="border-b-2 border-stone-800 pb-3 flex justify-center bg-stone-950 p-2 rounded-lg">
          <div className="relative w-40 h-40">
            <Image
              src={`/${img}`}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text and ingredients */}
        <div className="py-4 flex-grow flex flex-col justify-center">
          <h2 className="text-2xl font-stopbuck text-mewdonYellow uppercase tracking-wider text-center">
            {title}
          </h2>
          <p className="text-xl font-bold font-mono text-center text-white mt-1">
            {desc}
          </p>
          <p className="text-xs font-mono text-gray-400 mt-2 text-center px-2 leading-relaxed">
            {price}
          </p>
        </div>

        {/* Price Tag footer */}
        <div className="bg-mewdonRed text-white font-stopbuck text-center py-2 rounded-lg border-2 border-black tracking-widest text-shadow-black">
          FRESHLY BAKED 🍔
        </div>
      </div>
    </div>
  );
};

export default Card;
```

- [ ] **Step 3: Test card layouts and types**

Run: `npm run build`
Expected: Compile success.

- [ ] **Step 4: Commit changes**

```bash
git add app/(landing)/_components/Tokenomics.js components/Card.js
git commit -m "feat: design digital menu board card styling for Tokenomics recipes"
```

---

### Task 6: Roadmap (Drive-Thru Lane) & Buying Steps

**Files:**
- Modify: `app/(landing)/_components/HowToBuy.js`
- Modify: `components/OrderCard.js`
- Modify: `app/(landing)/_components/Exchanges.js`
- Modify: `app/(landing)/_components/Footer.js`
- Modify: `app/(landing)/page.js`

**Interfaces:**
- Consumes: Roadmap configuration steps
- Produces: Updated drive-thru lane timeline, buying guide cashier panels, exchange badges, and footer links.

- [ ] **Step 1: Modify components/OrderCard.js**

Re-style step cards to fit the fast food ordering cashier theme:
```javascript
import React from "react";

const OrderCard = ({ children, order, title, style }) => {
  return (
    <div className={`group relative block min-h-60 w-full ${style} transition-transform hover:scale-105`}>
      <span className="absolute inset-0 bg-mewdonRed rounded-xl border-4 border-black"></span>

      <div className="relative h-full transform p-6 border-4 border-black bg-stone-900 text-white rounded-xl transition-transform -translate-x-2 -translate-y-2 shadow-2xl">
        <div className="absolute -left-6 -top-6 border-4 border-black text-white rounded-full w-16 h-16 flex justify-center items-center text-3xl font-stopbuck bg-mewdonYellow text-shadow-black">
          {order}
        </div>

        <div className="p-2 font-mono">
          <h3 className="text-xl text-center font-stopbuck text-mewdonYellow uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
```

- [ ] **Step 2: Modify app/(landing)/_components/HowToBuy.js**

Adjust text references from Duis to Mewdon:
```javascript
import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const HowToBuy = () => {
  return (
    <div id="order-steps" className="relative py-20 bg-mewdonDark border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            How To Order
          </h2>
          <h3 className="font-stopbuck text-2xl text-white tracking-widest mt-2">
            GET FRESH $MEWDON IN 4 EASY STEPS 🧾
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center mb-16">
          <OrderCard order={1} title="Download Phantom" style="rotate-1">
            Download the Phantom wallet app or browser extension. Set up your wallet account and store your recovery phrase securely in the kitchen safe.
          </OrderCard>
          
          <OrderCard order={2} title="Prepare SOL Cash" style="-rotate-1">
            Deposit Solana ($SOL) directly into your newly created Phantom wallet, or buy SOL on an exchange and send it to your wallet address.
          </OrderCard>
          
          <OrderCard order={3} title="Order at Counter" style="-rotate-1">
            Head over to Raydium or Jupiter DEX. Copy and paste the Chef's official Contract Address (CA) into the swap terminal.
          </OrderCard>
          
          <OrderCard order={4} title="Enjoy your Meal!" style="rotate-1">
            Swap your $SOL for $MEWDON. Slippage auto-calculates. Grab your burger bag, take a bite, and welcome to the team!
          </OrderCard>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContractAddress />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
```

- [ ] **Step 3: Modify app/(landing)/_components/Exchanges.js**

Update text styling:
```javascript
import React from "react";
import Flag from "@/components/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Pump.fun",
    link: "https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon",
  },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="relative py-12 bg-[#15110f] border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6 text-center">
        <h2 className="font-stopbuck text-4xl text-mewdonYellow tracking-wider">
          Partner Outlets
        </h2>
        <div className="mt-8 flex justify-center">
          {exchanges.map((ex, idx) => (
            <div key={idx} className="shrink-0">
              <Flag props={ex} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
```

- [ ] **Step 4: Create Roadmap component or inline layout in page.js**

Create `app/(landing)/_components/Roadmap.js` to implement the "Drive-Thru" Plan:
```javascript
import React from "react";

const Roadmap = () => {
  return (
    <div id="drive-thru" className="relative py-20 bg-[#1c1714] border-b border-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            The Drive-Thru Plan
          </h2>
          <h3 className="font-stopbuck text-2xl text-white tracking-widest mt-2">
            MewDonald's Roadmap 🗺️
          </h3>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-mewdonRed ml-4 md:ml-32 pl-8 space-y-12">
          {/* Phase 1 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 bg-mewdonYellow border-4 border-black rounded-full w-8 h-8 flex justify-center items-center font-bold text-black font-stopbuck">
              1
            </div>
            <h4 className="text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
              Phase 1: Opening the Kitchen (Launch)
            </h4>
            <ul className="mt-2 list-disc list-inside font-mono text-gray-300 space-y-1">
              <li>Deploy on pump.fun</li>
              <li>Aggressive shilling on X (Twitter) with nonstop fast-food parody memes</li>
              <li>Build community hype and push to hit the bonding curve limit ASAP</li>
              <li>Graduate to Raydium</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 bg-mewdonYellow border-4 border-black rounded-full w-8 h-8 flex justify-center items-center font-bold text-black font-stopbuck">
              2
            </div>
            <h4 className="text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
              Phase 2: The Drive-Thru (Momentum)
            </h4>
            <ul className="mt-2 list-disc list-inside font-mono text-gray-300 space-y-1">
              <li>Verify on DexScreener/DEXTools</li>
              <li>Update logo, social links, and project description</li>
              <li>Launch meme contests rewarding the best "MewDonald’s Order" edits</li>
              <li>Reach the Top 10 on the pump.fun trending page</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 bg-mewdonYellow border-4 border-black rounded-full w-8 h-8 flex justify-center items-center font-bold text-black font-stopbuck">
              3
            </div>
            <h4 className="text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
              Phase 3: Global Franchise (Community)
            </h4>
            <ul className="mt-2 list-disc list-inside font-mono text-gray-300 space-y-1">
              <li>Release the "MewDonald’s Employee Handbook" (funny parody PDF/website)</li>
              <li>Organize coordinated "Drive-Thru" community raids</li>
              <li>Flood influencer posts with $MEWDON memes</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center bg-stone-950 p-6 rounded-2xl border-2 border-mewdonYellow/50">
          <p className="font-stopbuck text-mewdonYellow text-3xl tracking-wider text-shadow-black">
            🍔 LONG TERM GOAL 🍟
          </p>
          <p className="mt-2 font-mono text-lg text-gray-300">
            Establish $MEWDON as the official currency of the internet's hungry cats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
```

- [ ] **Step 5: Modify app/(landing)/_components/Footer.js**

Update social links and copyright notices:
```javascript
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-stone-400 py-12 px-6 border-t border-stone-900">
      <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-coin.jpg"
            width={60}
            height={60}
            className="rounded-full border border-mewdonRed h-10 w-10 object-cover"
            alt="Mew Donalds logo"
          />
          <span className="font-stopbuck text-white text-xl tracking-wider">
            MewDonald's
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href="https://x.com/mewdonalds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-mewdonYellow font-mono text-sm uppercase transition"
          >
            Twitter/X
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-mewdonYellow font-mono text-sm uppercase transition"
          >
            Telegram
          </a>
          <a
            href="https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-mewdonYellow font-mono text-sm uppercase transition"
          >
            DexScreener
          </a>
        </div>
        
        <div className="text-xs font-mono text-stone-600 text-center md:text-right">
          <p>© {new Date().getFullYear()} MewDonald's Inc. All Rights Cooked.</p>
          <p className="mt-1">$MEWDON is a meme coin for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 6: Modify app/(landing)/page.js**

Clean up page.js to connect our updated sections, remove dog images/placeholders, and change background wrapper classes:
```javascript
import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import Roadmap from "./_components/Roadmap";
import HowToBuy from "./_components/HowToBuy";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[#121212] text-white">
        <About />
        <Exchanges />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <Footer />
      </div>
    </>
  );
}
```

- [ ] **Step 7: Run full build and compilation checks**

Run: `npm run build`
Expected: Zero compilation errors. Build succeeds successfully.

- [ ] **Step 8: Commit changes**

```bash
git add app/(landing)/page.js app/(landing)/_components/ components/OrderCard.js
git commit -m "feat: implement drive-thru roadmap timeline and cashier checkout styles"
```
