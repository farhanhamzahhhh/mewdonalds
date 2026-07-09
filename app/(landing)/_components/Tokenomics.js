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
      <div className="max-w-[85rem] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            MewDonald&apos;s Menu
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

