import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Allred Website Agency — Websites for Small Businesses",
  description:
    "We design websites that make the phone ring. Fast, search-optimized sites for small businesses — fixed pricing, two-week delivery.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${grotesk.variable} ${instrumentSerif.variable} min-h-full bg-ink font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
