"use client";

import { Sansita, Sarabun } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FallingHearts from "@/components/FallingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import RightToolbar from "@/components/RightToolbar";
import Loading from "@/components/Loading";
import LayoutWrapper from "@/routes/layout_wrapper";
import { useState, useEffect } from "react";

const sansita = Sansita({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sansita",
  display: "swap",
});

const sarabun = Sarabun({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sarabun",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set metadata manually for client component
    document.title = "Dương & Kim Ngân Wedding";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'CopyRight Dương & Kim Ngân 2025');
    }

    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/asset/pictures/icon/favicon.ico';
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="CopyRight Dương & Kim Ngân 2025" />
        <link rel="icon" href="/asset/pictures/icon/favicon.ico" />
      </head>
      <body className={sarabun.className}>
        <Loading onLoadingComplete={() => setIsLoaded(true)} />

        {/* Chỉ render nội dung khi loading hoàn thành */}
        {isLoaded && (
          <>
            <SmoothScroll speed={1} smoothness={0.1} />
            <FallingHearts />
            <MusicPlayer />
            <RightToolbar />
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </>
        )}
      </body>
    </html>
  );
}
