import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chowdhury Global Solutions | WordPress & E‑Commerce Experts",
  description:
    "Chowdhury Global Solutions delivers high-performance WordPress development, WooCommerce, hosting, and maintenance for ambitious brands worldwide.",
  keywords: [
    "Chowdhury Global Solutions",
    "CGS",
    "WordPress agency",
    "WooCommerce experts",
    "managed hosting",
    "website maintenance",
  ],
  openGraph: {
    title: "Chowdhury Global Solutions",
    description:
      "Future-ready WordPress, WooCommerce, and hosting solutions engineered for growth.",
    url: "https://agentic-6cf4c43e.vercel.app",
    siteName: "Chowdhury Global Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-midnight text-white`}
      >
        {children}
      </body>
    </html>
  );
}
