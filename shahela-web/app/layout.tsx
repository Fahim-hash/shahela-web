import { EB_Garamond, Inter, Noto_Serif_Bengali } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const notoBengali = Noto_Serif_Bengali({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-noto-bengali" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} ${notoBengali.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
