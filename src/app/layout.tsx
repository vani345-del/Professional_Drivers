import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Professional Drivers - Trusted Drivers for Every Journey",
  description: "Book trusted drivers for one-way trips, round trips, and outstation journeys. Verified drivers, safe rides, and affordable pricing.",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
