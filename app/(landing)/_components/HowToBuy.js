import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";
import { pumpfunLink } from "@/constants";

const HowToBuy = () => {
  return (
    <div id="order-steps" className="relative py-20 bg-mewdonDark border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-h1 text-mewdonYellow text-shadow-red tracking-wider">
            How To Order
          </h2>
          <h3 className="font-stopbuck text-h3 text-white tracking-widest mt-2 px-2">
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

        <div className="relative max-w-2xl mx-auto mb-12">
          {/* Background offset layer */}
          <span className="absolute inset-0 bg-mewdonYellow rounded-xl border-4 border-black"></span>

          {/* Foreground content layer */}
          <div className="relative p-5 border-4 border-black bg-stone-900 text-white rounded-xl transform -translate-x-2 -translate-y-2 shadow-2xl">
            {/* Chef Icon Badge */}
            <div className="absolute -left-4 -top-4 border-4 border-black text-white rounded-full w-12 h-12 flex justify-center items-center text-xl bg-mewdonRed">
              👨‍🍳
            </div>

            <div className="p-1 font-mono text-center">
              <h3 className="text-h3 font-stopbuck text-mewdonYellow uppercase tracking-wider mb-3 border-b border-stone-800 pb-2">
                Chef&apos;s Notice
              </h3>
              <p className="text-body-sm text-gray-300 leading-relaxed">
                We&apos;re launching on <a href={pumpfunLink} target="_blank" rel="noopener noreferrer" className="text-mewdonYellow hover:underline font-bold">pump.fun</a> first! 
                Raydium and Jupiter swaps will be unlocked as soon as we hit the 
                <span className="text-mewdonYellow font-bold"> bonding curve target</span>.
              </p>
            </div>
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
