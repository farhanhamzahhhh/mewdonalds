import React from "react";
import Image from "next/image";

const Card = ({ props: { img, title, desc, price } }) => {
  return (
    <div className="group relative block w-full max-w-xs sm:max-w-sm">
      {/* Background card frame border */}
      <span className="absolute inset-0 bg-mewdonRed rounded-2xl border-4 border-black"></span>

      <div className="relative transform rounded-2xl border-4 border-black bg-stone-900 text-white p-4 transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 flex flex-col justify-between h-[420px]">
        {/* LCD Panel header */}
        <div className="border-b-2 border-stone-800 pb-3 flex justify-center bg-stone-950 p-2 rounded-lg">
          <div className="relative w-40 h-40">
            <Image
              src={img}
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

