import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div id="sanctuary" className="py-24 bg-[#0B0B0B] border-t border-[#222]">
      <div className="max-w-[85rem] px-6 md:px-12 xl:px-16 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 text-pccCream font-bold mb-4">
            Mission — Beyond the Digital World
          </h2>
          <p className="text-body-lg text-pccCream/70 font-light">
            Building a movement with real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🏛️</div>
            <h3 className="text-2xl font-semibold text-pccGold mb-4">The Peci Sanctuary</h3>
            <p className="text-pccCream/70 leading-relaxed group-hover:text-pccCream transition-colors">
              10% of the treasury is dedicated to improving cat welfare through rescue programs, medical treatment, rehabilitation, and long-term care.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="text-2xl font-semibold text-pccGold mb-4">Real Impact</h3>
            <p className="text-pccCream/70 leading-relaxed group-hover:text-pccCream transition-colors">
              Partnering with local animal shelters to provide direct assistance for rescued and stray cats. We turn digital support into physical change.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-2xl border-gradient group hover:bg-[#111] transition-colors duration-300">
            <div className="text-4xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-pccGold mb-4">Transparency</h3>
            <p className="text-pccCream/70 leading-relaxed group-hover:text-pccCream transition-colors">
              A real-time public dashboard will allow the community to track every treasury allocation and donation, ensuring full accountability.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="relative w-full max-w-3xl aspect-video rounded-3xl overflow-hidden glass-panel p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/pecicat-sanctuary.jpeg"
                fill
                className="object-cover"
                alt="The Peci Sanctuary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
