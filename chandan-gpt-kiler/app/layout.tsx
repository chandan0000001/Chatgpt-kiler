import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "assistant-ui App",
  description: "Generated by create-assistant-ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Adsterra Script 1 */}
        <Script
          strategy="afterInteractive"
          src="//pl26613785.profitableratecpm.com/7d/14/1b/7d141be035bdd8e24dca6dc2a619b5d7.js"
        />

        {/* Adsterra Script 2 */}
        <Script
          strategy="afterInteractive"
          src="//inmateimpossibility.com/7d/14/1b/7d141be035bdd8e24dca6dc2a619b5d7.js"
        />

        {children}
      </body>
    </html>
  );
}
