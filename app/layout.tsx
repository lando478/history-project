import type React from "react";
import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Buried Truths: The Hidden History of Nuclear Waste",
  description:
    "A digital museum exhibit tracing nuclear waste from government secrecy to Indigenous resistance",
  generator: "v0.app",

  // ✅ UPDATED ICON CONFIG
  icons: {
    icon: [
      {
        url: "/black.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/black.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
