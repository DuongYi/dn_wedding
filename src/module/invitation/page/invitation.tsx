import React from "react";
import InvitationCard from "../components/invitation_card";

const InvitationPage: React.FC = () => {
  return (
    <div className="w-full relative">
      <InvitationCard
        name="Gia đình Nguyễn Văn Dũng"
        type={0} // 0 - Thiệp cưới T7 nhà trai
      />
    </div>
  );
};

export default InvitationPage;
