import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";
import { pumpfunLink } from "@/constants";

const HowToBuy = () => {
  return (
    <div id="order-steps" className="relative py-20 bg-mewdonDark border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            How To Order
          </h2>
          <h3 className="font-stopbuck text-2xl text-white tracking-widest mt-2">
            GET FRESH $MEWDON IN 4 EASY STEPS 🧾
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 justify-items-center mb-20">
          <OrderCard order={1} title="Download Phantom" style="rotate-1">
            Download the Phantom wallet app or browser extension. Set up your wallet account and store your recovery phrase securely in the kitchen safe.
          </OrderCard>

          <OrderCard order={2} title="Prepare SOL Cash" style="-rotate-1">
            Deposit Solana ($SOL) directly into your newly created Phantom wallet, or buy SOL on an exchange and send it to your wallet address.
          </OrderCard>

          <OrderCard order={3} title="Order at Counter" style="-rotate-1">
            Visit our official link on <a href={pumpfunLink} target="_blank" rel="noopener noreferrer" className="text-mewdonYellow hover:underline font-bold">pump.fun</a> and connect your wallet
          </OrderCard>

          <OrderCard order={4} title="Enjoy your Meal!" style="rotate-1">
            Swap your $SOL for $MEWDON directly on <a href={pumpfunLink} target="_blank" rel="noopener noreferrer" className="text-mewdonYellow hover:underline font-bold">pump.fun</a>
          </OrderCard>
        </div>

        <div className="max-w-2xl mx-auto mb-12 p-5 bg-red-950/20 border-2 border-mewdonRed/30 rounded-2xl shadow-lg relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#db0007_1px,transparent_1px)] [background-size:12px_12px]"></div>
          <div className="relative z-10 font-mono text-sm leading-relaxed">
            <span className="font-stopbuck text-mewdonYellow text-lg block mb-2 tracking-widest animate-pulse">
              📢 CHEF&apos;S NOTICE
            </span>
            <p className="text-gray-300">
              We&apos;re launching on <a href={pumpfunLink} target="_blank" rel="noopener noreferrer" className="text-mewdonYellow hover:underline font-bold">pump.fun</a> first! 
              Raydium and Jupiter swaps will be unlocked as soon as we hit the 
              <span className="text-mewdonYellow font-bold"> bonding curve target</span>.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContractAddress />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
