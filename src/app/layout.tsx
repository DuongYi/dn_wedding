import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <SmoothScroll speed={1} smoothness={0.1} />
        {children}
      </body>
    </html>
  );
}
