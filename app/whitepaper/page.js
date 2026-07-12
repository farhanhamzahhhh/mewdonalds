import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'White Paper – MewDonald\'s ($MEWDON)',
  description: 'MewDonald\'s ($MEWDON) is a meme coin project themed around a fast-food cooking cat, built on the Solana blockchain. Read our whitepaper to learn about the project, tokenomics, roadmap, and more.',
  keywords: 'MewDonald, $MEWDON, Meme Coin, Solana, Whitepaper, Chef Mewdon, Crypto',
};

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">White Paper – MewDonald&apos;s ($MEWDON)</h1>
          <p className="text-xl text-gray-600 font-medium">Fast Food Cooking Cat Meme Coin on Solana Blockchain | Version 1.0</p>
          <p className="text-md text-gray-500 mt-2">Based on official website: <a href="https://mewdon.site/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://mewdon.site/</a> | July 2026</p>
        </div>

        <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Executive Summary</h2>
            <p>
              MewDonald&apos;s ($MEWDON) is a meme coin project themed around a fast-food cooking cat, built on the Solana blockchain. The project tells the story of Chef Mewdon — a hardworking feline who quits his traditional job and launches his own decentralized franchise on blockchain. He now flips $MEWDON tokens instead of burgers. Key features include 0% transaction tax and fully burned liquidity pool (LP). The token was launched via pump.fun with plans to graduate to Raydium. Mewdon combines humor, strong community engagement, and a clear development roadmap that includes mini-games, merchandise, partnerships, CEX listings, and deep lore expansion. Long-term vision: Establish $MEWDON as the official currency of the internet&rsquo;s hungry cats.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">1. Introduction</h2>
            <p>
              The meme coin space on Solana is highly competitive and often dominated by short-lived hype projects. Many tokens lack compelling narratives, transparency, or long-term plans. MewDonald&apos;s differentiates itself by creating a fun, relatable story around a cat chef while maintaining strong technical foundations: zero taxes, burned liquidity, and community-driven growth on the fast and low-cost Solana blockchain.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">2. Background & The Story of Chef Mewdon</h2>
            <p>
              &ldquo;Meet Chef Mewdon, the hardest working feline in the fast-food industry.&rdquo; For years, Chef Mewdon worked in a human fast-food kitchen, flipping burgers, frying fries, and serving shakes for minimum &ldquo;claw-wage.&rdquo; One day, he had enough. He knocked over a tray of cups (for dominance), walked out of the kitchen, and launched his own decentralized franchise directly on the Solana blockchain. Now, instead of flipping beef patties, Chef Mewdon is flipping $MEWDON tokens, building a global army of hungry cats, and ensuring liquidity is locked tighter than a restaurant safe.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">3. Problem Statement</h2>
            <p>
              Many meme coins impose high taxes and carry rug-pull risks due to unlocked or unburned liquidity. Most projects rely solely on hype without meaningful narratives or development roadmaps. Crypto communities seek projects that are entertaining, transparent, and offer real engagement beyond speculation. Solana needs high-quality meme projects that fully leverage its speed and low fees. Mewdon addresses these issues with a humorous yet serious approach backed by clear mechanics and future utility plans.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">4. Solution: MewDonald&apos;s ($MEWDON) on Solana</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Features:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Blockchain:</strong> Solana (high speed, low fees)</li>
              <li><strong>Transaction Tax:</strong> 0%</li>
              <li><strong>Liquidity Pool:</strong> Fully burned</li>
              <li><strong>Launch Platform:</strong> pump.fun (fair launch via bonding curve)</li>
              <li><strong>Target Graduation:</strong> Raydium + Jupiter aggregator</li>
            </ul>
            <p>
              The project positions holders as loyal &ldquo;customers&rdquo; in the Mewdon universe — not just investors, but part of a growing global community of hungry cats.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">5. Tokenomics & Mechanics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tax on Transactions:</strong> 0%</li>
              <li><strong>Liquidity:</strong> Burned (permanently removed from circulation)</li>
              <li><strong>Initial Launch:</strong> pump.fun bonding curve</li>
              <li><strong>Future Tokenomics Enhancements (planned):</strong> Transaction burn mechanisms, Community treasury, Holder voting for burns, airdrops, or charity initiatives.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">6. Roadmap – The Drive-Thru Plan</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-orange-600">Phase 1: Kitchen Prep & Launch</h3>
              <p>Launch on pump.fun, aggressive community shilling on X (Twitter), Graduation to Raydium upon reaching bonding curve target, Token verification and initial listings.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-orange-600">Phase 2: Building Momentum</h3>
              <p>Meme contests and trending campaigns, Community &ldquo;Drive-Thru&rdquo; raids, Influencer collaborations.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-orange-600">Phase 3: Building the Mewdon Empire</h3>
              <p>Release of &ldquo;Mewdon&rsquo;s Employee Handbook&rdquo;, Mini-games and Telegram bot integration, Merchandise drops and IRL events, Strategic partnerships with other cat/food meme projects.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-orange-600">Long-Term Vision</h3>
              <p>Major CEX listings (e.g., Coinstore, MEXC, and larger exchanges), Lore expansion (comics, animated shorts, wiki/Notion page), Position $MEWDON as the go-to currency for internet cat culture.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">7. Future Development Plans</h2>
            <p>App & Mini-Games, Merchandise, Partnerships & Collabs, Tokenomics Upgrades, Lore Expansion.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">8. Community & Engagement</h2>
            <p>
              Mewdon is built as a community-first project. Daily engagement is encouraged through meme contests, X (Twitter) raids, mini-games, and merchandise giveaways. There are no traditional human managers — the project is driven by the collective energy of the &ldquo;global army of hungry cats.&rdquo;
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">9. How to Participate</h2>
            <p>
              Download the Phantom wallet, Acquire SOL, Visit pump.fun, connect your wallet, and Swap SOL for $MEWDON. After graduation to Raydium, trading will be available via Jupiter and other Solana DEXes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">10. Conclusion</h2>
            <p className="mb-6">
              MewDonald&apos;s ($MEWDON) is more than a typical meme coin. It is a story, a community, and a movement wrapped in humorous fast-food cat branding. With strong technical foundations (0% tax + burned LP on Solana) and a clear roadmap toward utilities and sustained engagement, Mewdon has the potential to become a lasting and evolving project in the Solana ecosystem.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
              <p className="text-sm text-gray-600 italic">
                <strong>Important Disclaimer:</strong> This white paper is prepared based solely on information available on the official website <a href="https://mewdon.site/" className="text-blue-600 hover:underline">https://mewdon.site/</a> as of July 2026. Meme coins are highly speculative and carry significant risk. Token prices can fluctuate dramatically. At the time of writing, the official contract address had not yet been published on the website. Always conduct your own research (DYOR), verify the contract address on a blockchain explorer, and only invest funds you can afford to lose.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 flex justify-center border-t border-gray-200 pt-10">
          <a 
            href="/MewDonalds_Whitepaper_Full_260712_180802.pdf" 
            download="MewDonalds_Whitepaper_Full_260712_180802.pdf"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Full PDF
          </a>
        </div>
      </div>
    </div>
  );
}
