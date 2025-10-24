import React from "react";
import InvitationPage from "@/module/invitation/page/invitation";
import LayoutWrapper from "@/routes/layout_wrapper";

export default function Invitation() {
  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <InvitationPage />
    </LayoutWrapper>
  );
}
