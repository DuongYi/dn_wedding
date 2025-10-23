import type { Metadata } from "next";
import { DM_Sans, Sansita } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FallingHearts from "@/components/FallingHearts";
import MusicPlayer from "@/components/MusicPlayer";

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
  title: "Dương & Kim Ngân Wedding",
  description: "CopyRight Dương & Kim Ngân 2025",
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
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
