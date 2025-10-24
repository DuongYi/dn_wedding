import React from "react";
import LayoutWrapper from "@/routes/layout_wrapper";
import WeddingDetailPage from "@/module/invitation/page/wedding_detail";

export default function Invitation() {
  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <WeddingDetailPage />
    </LayoutWrapper>
  );
}
