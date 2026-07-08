import "./globals.css";

export const metadata = {
  title: "Mew Donalds ($MEWDON) - Fast Food Cooking Cat",
  description: "Chef Mewdon is serving delicious decentralized $MEWDON tokens fresh on Solana. Open 24/7!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
