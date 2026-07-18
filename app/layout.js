import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  metadataBase: new URL("https://hodlbao.com"),
  title: "Hodl Bao ($HBAO) - The Vault, The Bling, & The Empire",
  description: "The $HBAO panda just sits back, stares stoically, and polishes his gold. We aren't here to play games; we are here to build a wealth dynasty. When you see the face, you know the status.",
  keywords: ["HBAO", "Hodl Bao", "Crypto", "Meme Coin", "Solana", "Community", "Wealth"],
  openGraph: {
    title: "Hodl Bao ($HBAO) - The Vault, The Bling, & The Empire",
    description: "The $HBAO panda just sits back, stares stoically, and polishes his gold. We aren't here to play games; we are here to build a wealth dynasty.",
    url: "https://hodlbao.com",
    siteName: "Hodl Bao",
    images: [
      {
        url: "/hbao-boss.jpeg",
        width: 1024,
        height: 1024,
        alt: "$HBAO Panda Boss",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hodl Bao ($HBAO) - The Vault, The Bling, & The Empire",
    description: "The $HBAO panda just sits back, stares stoically, and polishes his gold.",
    images: ["/hbao-boss.jpeg"],
    creator: "@hodlbao",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hodlbao.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-24 ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#0F0C09] text-white selection:bg-hbaoGold selection:text-[#0B0B0B] relative overflow-x-hidden w-full max-w-[100vw]">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('/noise.svg')]"></div>
        {children}
      </body>
    </html>
  );
}
