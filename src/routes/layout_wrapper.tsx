"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  headerAlwaysShow?: boolean;
}

export default function LayoutWrapper({
  children,
  showHeader = true,
  showFooter = true,
  headerAlwaysShow = false,
}: LayoutWrapperProps) {
  const pathname = usePathname();

  // Trang wedding có header riêng, các trang khác dùng header từ layout
  const isWeddingPage = pathname === '/wedding' || pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - có thể tùy chỉnh theo từng trang */}
      {showHeader && !isWeddingPage && (
        <Header alwaysShow={headerAlwaysShow} />
      )}

      {/* Main Content */}
      <main className="grow">
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
}
