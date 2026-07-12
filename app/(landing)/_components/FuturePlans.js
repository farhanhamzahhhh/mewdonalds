import React from "react";

const plans = [
  {
    icon: "🎮",
    title: "App & Mini-Games",
    description: 'Drop a simple Telegram bot or web mini-game (e.g., "Endless Fry Runner", "Burger Flipping Cat"). Reward top players with $MEWDON airdrops or NFTs. This keeps the community engaged daily.'
  },
  {
    icon: "👕",
    title: "Merch & IRL Drops",
    description: 'Launch limited-edition merch (hoodies with the grumpy cat in Mewdon uniform, custom hats, stickers). Host "MewDon Pop-up" giveaways in major cities or at crypto events.'
  },
  {
    icon: "🤝",
    title: "Partnerships & Collabs",
    description: 'Raid/collab with other big cat or food memes. Co-create limited "Combo Meal" tokens or joint raids. Aim for influencer shoutouts from mid-tier crypto accounts.'
  },
  {
    icon: "🔥",
    title: "Tokenomics Upgrade",
    description: 'Introduce a small transaction burn + community treasury for marketing. Run weekly "Employee of the Month" votes where holders decide on burns, airdrops, or charity.'
  },
  {
    icon: "📈",
    title: "CEX Listings Push",
    description: 'Once volume stabilizes post-Raydium, target smaller CEXs (Coinstore, MEXC, etc.) and apply for bigger ones. Celebrate each listing with "Grand Opening" events.'
  },
  {
    icon: "📖",
    title: "Lore Expansion",
    description: 'Release "Mewdon Universe" comics, animated shorts, or a simple story series (Grumpy Cat CEO conquering the fast-food world). Build a wiki or Notion page for lore.'
  }
];

const FuturePlans = () => {
  return (
    <div id="future-plans" className="py-20 bg-[#121212] border-b border-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="font-stopbuck text-h1 text-mewdonYellow text-shadow-red tracking-wider">
            Future Initiatives
          </h2>
          <h3 className="font-stopbuck text-h3 text-white tracking-widest mt-2">
            {"Building The MewDon Empire 🏰"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-[#1c1714] p-8 rounded-2xl border-2 border-mewdonRed hover:border-mewdonYellow transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(219,39,39,0.2)] hover:shadow-[0_4px_25px_rgba(250,202,21,0.3)]"
            >
              <div className="text-6xl mb-6 drop-shadow-lg">{plan.icon}</div>
              <h4 className="font-stopbuck text-2xl text-mewdonYellow mb-4 tracking-wide uppercase leading-tight">
                {plan.title}
              </h4>
              <p className="font-mono text-gray-300 text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
