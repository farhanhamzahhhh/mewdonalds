import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mewdon.site"),
  title: "Mewdon ($MEWDON) - Fast Food Cooking Cat Meme Coin on Solana",
  description: "Meet Chef Mewdon at Mewdon ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
  keywords: ["Mewdon", "MEWDON", "Solana", "Meme Coin", "Solana Meme Coin", "Crypto", "Chef Mewdon", "Fast Food Cat"],
  openGraph: {
    title: "Mewdon ($MEWDON) - Fast Food Cooking Cat on Solana",
    description: "Meet Chef Mewdon at Mewdon ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
    url: "https://mewdon.site",
    siteName: "Mewdon",
    images: [
      {
        url: "/logo-coin.jpg",
        width: 512,
        height: 512,
        alt: "Mewdon ($MEWDON) Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mewdon ($MEWDON) - Fast Food Cooking Cat on Solana",
    description: "Meet Chef Mewdon at Mewdon ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
    images: ["/logo-coin.jpg"],
    creator: "@mewdonalds",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mewdon.site",
  },
  verification: {
    google: "seCuixnOGAnDU6vxY58TDX_bn1E3FEfP-YArfuJnX8A",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className="">{children}</body>
    </html>
  );
}
