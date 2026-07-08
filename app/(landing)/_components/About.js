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
                src="about-chef.png"
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
              Now, he is flipping <span className="text-mewdonRed font-extrabold text-2xl">$MEWDON</span> tokens instead of beef patties, building a global army of hungry cats, and making sure the liquidity is locked tighter than the restaurant&apos;s safe box!
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
