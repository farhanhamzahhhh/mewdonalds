import React from "react";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1 — The Establishment",
      items: [
        "Fair launch on a high-volume chain",
        "Locked Liquidity (Day-1)",
        "Brand Authority Establishment",
        "Community Governance (DAO)",
      ],
    },
    {
      title: "Phase 2 — The Accumulation & Legacy",
      items: [
        "Aggressive Marketing Push",
        "The Sanctuary Fund (Genesis)",
        "Tier-2 Exchange Listings",
        "Holder Vault Access",
      ],
    },
    {
      title: "Phase 3 — The Gold Standard",
      items: [
        "Advanced DeFi Integrations",
        "Strategic Partnerships",
        "Global Outreach",
      ],
    },
    {
      title: "Phase 4 — Tier-1 Dominance",
      items: [
        "Tier-1 CEX Listings",
        "Cross-Chain Expansion",
        "The $HBAO Dynasty",
      ],
    },
    {
      title: "Phase 5 — Global Impact",
      items: [
        "The Global HBAO Sanctuary",
        "Ambassador Program",
        "Sustainable Treasury",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 text-hbaoCream font-bold mb-4 font-serif">
            $HBAO Strategic Roadmap
          </h2>
          <p className="text-body-lg text-hbaoCream/70 font-light">
            The Vault, The Bling, & The Empire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl border border-[#222] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-hbaoGold opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold text-hbaoGold mb-6">{phase.title}</h3>
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-hbaoGold mt-1">✓</span>
                    <span className="text-hbaoCream/80">{item}</span>
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
