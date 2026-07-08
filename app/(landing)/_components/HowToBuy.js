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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 justify-items-center mb-20">
          <OrderCard order={1} title="Download Phantom" style="rotate-1">
            Download the Phantom wallet app or browser extension. Set up your wallet account and store your recovery phrase securely in the kitchen safe.
          </OrderCard>
          
          <OrderCard order={2} title="Prepare SOL Cash" style="-rotate-1">
            Deposit Solana ($SOL) directly into your newly created Phantom wallet, or buy SOL on an exchange and send it to your wallet address.
          </OrderCard>
          
          <OrderCard order={3} title="Order at Counter" style="-rotate-1">
            Head over to Raydium or Jupiter DEX. Copy and paste the {"Chef's"} official Contract Address (CA) into the swap terminal.
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
