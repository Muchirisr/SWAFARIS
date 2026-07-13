import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { JourneyProvider } from "@/components/providers/JourneyProvider";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Swafaris — Discover Kenya, Your Way",
  description: "Curated by intelligence. Felt by heart.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-neutral-950 text-neutral-50 antialiased font-body">
        <JourneyProvider>{children}</JourneyProvider>
      </body>
    </html>
  );
}