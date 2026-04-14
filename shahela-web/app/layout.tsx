import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} font-sans`}>
        {children}
        
        {/* ভিজিটর ট্র্যাকিং এবং পারফরম্যান্স মনিটরিং এর জন্য */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
