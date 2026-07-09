import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mewdon.site"),
  title: "MewDonald's ($MEWDON) - Fast Food Cooking Cat Meme Coin on Solana",
  description: "Meet Chef Mewdon at MewDonald's ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
  keywords: ["MewDonald's", "MEWDON", "Solana", "Meme Coin", "Solana Meme Coin", "Crypto", "Chef Mewdon", "Fast Food Cat"],
  openGraph: {
    title: "MewDonald's ($MEWDON) - Fast Food Cooking Cat on Solana",
    description: "Meet Chef Mewdon at MewDonald's ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
    url: "https://mewdon.site",
    siteName: "MewDonald's",
    images: [
      {
        url: "/logo-coin.jpg",
        width: 512,
        height: 512,
        alt: "MewDonald's ($MEWDON) Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MewDonald's ($MEWDON) - Fast Food Cooking Cat on Solana",
    description: "Meet Chef Mewdon at MewDonald's ($MEWDON), the premier fast-food cooking cat meme coin on Solana. Zero taxes, LP burned, and serving fresh daily!",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
