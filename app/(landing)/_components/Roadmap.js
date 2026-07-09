import React from "react";

const Roadmap = () => {
  return (
    <div id="drive-thru" className="relative py-20 bg-[#1c1714] border-b border-black">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-5xl md:text-6xl text-mewdonYellow text-shadow-red tracking-wider">
            The Drive-Thru Plan
          </h2>
          <h3 className="font-stopbuck text-2xl text-white tracking-widest mt-2">
            {"MewDonald's Roadmap 🗺️"}
          </h3>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-mewdonRed ml-4 md:ml-32 pl-8 space-y-12">
          {/* Phase 1 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 bg-mewdonYellow border-4 border-black rounded-full w-8 h-8 flex justify-center items-center font-bold text-black font-stopbuck">
              1
            </div>
            <h4 className="text-xl sm:text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
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
            <h4 className="text-xl sm:text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
              Phase 2: The Drive-Thru (Momentum)
            </h4>
            <ul className="mt-2 list-disc list-inside font-mono text-gray-300 space-y-1">
              <li>Verify on DexScreener/DEXTools</li>
              <li>Update logo, social links, and project description</li>
              <li>{"Launch meme contests rewarding the best \"MewDonald's Order\" edits"}</li>
              <li>Reach the Top 10 on the pump.fun trending page</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 bg-mewdonYellow border-4 border-black rounded-full w-8 h-8 flex justify-center items-center font-bold text-black font-stopbuck">
              3
            </div>
            <h4 className="text-xl sm:text-2xl font-stopbuck text-mewdonYellow tracking-wide uppercase">
              Phase 3: Global Franchise (Community)
            </h4>
            <ul className="mt-2 list-disc list-inside font-mono text-gray-300 space-y-1">
              <li>{"Release the \"MewDonald's Employee Handbook\" (funny parody PDF/website)"}</li>
              <li>{"Organize coordinated \"Drive-Thru\" community raids"}</li>
              <li>Flood influencer posts with $MEWDON memes</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center bg-stone-950 p-6 rounded-2xl border-2 border-mewdonYellow/50">
          <p className="font-stopbuck text-mewdonYellow text-3xl tracking-wider text-shadow-black">
            🍔 LONG TERM GOAL 🍟
          </p>
          <p className="mt-2 font-mono text-lg text-gray-300">
            {"Establish $MEWDON as the official currency of the internet's hungry cats."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
