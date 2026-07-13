import type { Metadata } from "next";
import { JourneyProvider } from "@/components/provider/JourneyProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swafaris — Discover Kenya, Your Way",
  description: "Curated by intelligence. Felt by heart.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-50 antialiased">
        <JourneyProvider>{children}</JourneyProvider>
      </body>
    </html>
  );
}