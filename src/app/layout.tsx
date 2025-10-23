import type { Metadata } from "next";
import { DM_Sans, Sansita } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FallingHearts from "@/components/FallingHearts";

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sansita = Sansita({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sansita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Froce Studio",
  description: "CopyRight Froce Studio 2024",
  icons: [
    {
      url: '/asset/pictures/icon/favicon.ico',
      href: '/asset/pictures/icon/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansita.className}>
        <SmoothScroll speed={1} smoothness={0.1} />
        <FallingHearts />
        {children}
      </body>
    </html>
  );
}
