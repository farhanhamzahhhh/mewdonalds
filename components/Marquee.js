import React from "react";

const Marquee = ({ text }) => {
  // Create an array to repeat the text enough times to fill the screen
  const items = Array(10).fill(text);

  return (
    <div className="w-full overflow-hidden bg-hbaoGold py-3 flex border-y border-hbaoGold/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="text-[#0B0B0B] font-bold text-sm sm:text-base uppercase tracking-widest mx-4 flex items-center">
            {item}
            <span className="mx-4 text-xs opacity-50">✦</span>
          </span>
        ))}
      </div>
      <div className="flex animate-marquee whitespace-nowrap absolute top-0" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="text-[#0B0B0B] font-bold text-sm sm:text-base uppercase tracking-widest mx-4 flex items-center">
            {item}
            <span className="mx-4 text-xs opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
