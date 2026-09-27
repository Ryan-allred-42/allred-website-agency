import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allred Website Agency — Websites for Small Businesses",
  description:
    "Fast, modern websites for small businesses. Landing pages, full sites, and SEO — delivered in weeks, not months.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-full bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
