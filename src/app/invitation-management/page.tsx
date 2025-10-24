import InvitationManagement from "@/module/invitation/page/invitation_management";
import LayoutWrapper from "@/routes/layout_wrapper";

export default function InvitationManagementPage() {
  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <InvitationManagement />
    </LayoutWrapper>
  );
}
