import React from "react";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1 — Foundation",
      items: [
        "Launch on Solana (Raydium)",
        "Fair Launch",
        "DAO Governance Activation",
      ],
    },
    {
      title: "Phase 2 — Community Impact",
      items: [
        "Launch The Sanctuary Fund",
        "Partnerships with Animal Shelters",
        "First Community Donation Campaign",
      ],
    },
    {
      title: "Phase 3 — Ecosystem Expansion",
      items: [
        "Launch PeciCares Merchandise",
        "Proof of Contribution Integration",
        "Community Reward Programs",
      ],
    },
    {
      title: "Phase 4 — Financial Growth",
      items: [
        "DeFi Integration",
        "Tier-1 CEX Expansion",
        "Cross-Chain Compatibility",
      ],
    },
    {
      title: "Phase 5 — Global Vision",
      items: [
        "Establish the Global Peci Facility",
        "Global Ambassador Program",
        "Worldwide Community Expansion",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 text-pccCream font-bold mb-4 font-serif">
            Roadmap
          </h2>
          <p className="text-body-lg text-pccCream/70 font-light">
            Strategic Vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl border border-[#222] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-pccGold opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-pccGold mb-6">{phase.title}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pccGold mt-1">✓</span>
                    <span className="text-pccCream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
