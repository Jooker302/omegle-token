import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omegle Token",
  description: "Omegle Token (DxSale)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="main.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
