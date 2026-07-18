import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <section id="sanctuary" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 text-hbaoCream font-bold mb-4 font-serif">
            The Global HBAO Sanctuary
          </h2>
          <p className="text-body-lg text-hbaoCream/70 font-light">
            A boss knows that true power includes building a legacy of care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🏛️</div>
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">The Sanctuary Fund</h3>
            <p className="text-hbaoCream/70 leading-relaxed group-hover:text-hbaoCream transition-colors">
              Dedicated treasury allocation to fund welfare and sanctuary initiatives, dedicated to feline welfare and the legacy of the pack.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">Real Impact</h3>
            <p className="text-hbaoCream/70 leading-relaxed group-hover:text-hbaoCream transition-colors">
              Establishing a flagship sanctuary facility managed directly by the $HBAO community, funded by the expanded Sanctuary Fund.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-hbaoGold mb-4">Transparency</h3>
            <p className="text-hbaoCream/70 leading-relaxed group-hover:text-hbaoCream transition-colors">
              A real-time public dashboard will allow the community to track every treasury allocation and donation, ensuring full accountability.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden glass-panel p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/hbao-sanctuary.jpeg"
                fill
                className="object-cover"
                alt="The HBAO Sanctuary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
