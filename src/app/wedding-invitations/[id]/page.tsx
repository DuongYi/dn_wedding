"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import InvitationCard from "@/module/invitation/components/invitation_card";
import LayoutWrapper from "@/routes/layout_wrapper";
import { invitationApi } from "@/module/invitation/api/invitation.api";
import { Invitation } from "@/module/invitation/models/invitation.model";

export default function WeddingInvitation() {
  const params = useParams();
  const id = params.id as string;

  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInvitation = async () => {
      try {
        const found = await invitationApi.getInvitationById(id);
        setInvitation(found || null);
      } catch (error) {
        console.error("Error loading invitation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInvitation();
  }, [id]);

  if (isLoading) {
    return (
      <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thiệp cưới...</p>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  if (!invitation) {
    return (
      <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy thiệp</h1>
            <p className="text-gray-600 mb-6">Thiệp cưới này không tồn tại.</p>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper showHeader={true} headerAlwaysShow={true} showFooter={false}>
      <InvitationCard name={invitation.name} type={invitation.type} />
    </LayoutWrapper>
  );
}
