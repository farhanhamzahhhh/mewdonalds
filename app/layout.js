import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  metadataBase: new URL("https://pecicatcoin.com"),
  title: "PeciCatCoin ($PCC) - Building Culture, Not Just Hype",
  description: "PeciCatCoin ($PCC) stands as a symbol of patience, discipline, and long-term conviction. We build a lasting legacy through a strong community, sustainable growth, and real-world impact.",
  keywords: ["PCC", "PeciCatCoin", "Crypto", "Meme Coin", "Solana", "Community"],
  openGraph: {
    title: "PeciCatCoin ($PCC) - Building Culture, Not Just Hype",
    description: "PeciCatCoin ($PCC) stands as a symbol of patience, discipline, and long-term conviction. We build a lasting legacy through a strong community, sustainable growth, and real-world impact.",
    url: "https://pecicatcoin.com",
    siteName: "PeciCatCoin",
    images: [
      {
        url: "/si-c.jpeg",
        width: 1024,
        height: 1024,
        alt: "PeciCatCoin ($PCC) Mascot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PeciCatCoin ($PCC) - Building Culture, Not Just Hype",
    description: "PeciCatCoin ($PCC) stands as a symbol of patience, discipline, and long-term conviction.",
    images: ["/si-c.jpeg"],
    creator: "@pecicatcoin",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pecicatcoin.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-24 ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#0F0C09] text-white selection:bg-pccGold selection:text-[#0B0B0B] relative overflow-x-hidden w-full max-w-[100vw]">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('/noise.svg')]"></div>
        {children}
      </body>
    </html>
  );
}
