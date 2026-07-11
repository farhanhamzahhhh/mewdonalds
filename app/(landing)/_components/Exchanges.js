import React from "react";
import Flag from "@/components/Flag";
import { dexscreenerLink } from "@/constants";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Pump.fun",
    link: dexscreenerLink,
  },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="relative py-12 bg-[#15110f] border-b border-black">
      <div className="max-w-[85rem] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <h2 className="font-stopbuck text-h2 text-mewdonYellow tracking-wider">
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
