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
