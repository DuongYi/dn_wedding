import { Invitation } from "../models/invitation.model";

// Mock API - Simulating backend response
export const mockInvitations: Invitation[] = [
  {
    id: "1",
    name: "Anh Nhu và người thương",
    type: 0,
  },
  {
    id: "2",
    name: "Hải Bình thân iu ❤️ và người thương",
    type: 0,
  },
  {
    id: "3",
    name: "Bạn Ngọc và người thương",
    type: 1,
  },
  {
    id: "4",
    name: "Gia đình bạn Đức",
    type: 1,
  },
  {
    id: "5",
    name: "Bạn Quốc Dũng và người thương",
    type: 2,
  },
  {
    id: "6",
    name: "Bạn Tuấn Dũng và người thương",
    type: 2,
  },
  {
    id: "7",
    name: "Bạn Tiến Duy và người thương",
    type: 0,
  },
  {
    id: "8",
    name: "Bạn Trọng Đạo và người thương",
    type: 1,
  },
  {
    id: "9",
    name: "Bạn Xuân Bách và người thương",
    type: 1,
  },
  {
    id: "10",
    name: "Bạn Sơn và người thương",
    type: 1,
  },
  {
    id: "11",
    name: "Anh Tân và người thương",
    type: 2,
  },
  {
    id: "12",
    name: "Anh Long và người thương",
    type: 2,
  },
  {
    id: "13",
    name: "Anh Huy và người thương",
    type: 0,
  },
  {
    id: "14",
    name: "Anh Bình và người thương",
    type: 1,
  },
  {
    id: "15",
    name: "Anh Tiến và người thương",
    type: 1,
  },
  {
    id: "16",
    name: "Anh Dũng và người thương",
    type: 1,
  },
  {
    id: "17",
    name: "Anh Khoa và người thương",
    type: 1,
  },
  {
    id: "18",
    name: "Anh Đạt và người thương",
    type: 1,
  },
  {
    id: "19",
    name: "Bạn Thanh và người thương",
    type: 1,
  },
  {
    id: "20",
    name: "Bạn Ngân iu ❤️ và người thương",
    type: 1,
  },
  {
    id: "21",
    name: "Bạn Thu Phương và anh Hà Dân",
    type: 1,
  },
  {
    id: "22",
    name: "Bạn Linh yêu quý và người thương ❤️",
    type: 1,
  },
  {
    id: "23",
    name: "Bạn Thanh và người thương ❤️",
    type: 1,
  },
  {
    id: "24",
    name: "Gia đình bạn Hà ❤️",
    type: 1,
  },
  {
    id: "25",
    name: "Gia đình bạn Bảo ❤️",
    type: 1,
  },
  {
    id: "26",
    name: "Mẹ Nhung yêu quý và bố Anh ❤️",
    type: 1,
  },
  {
    id: "26",
    name: "Bạn Long và người thương ❤️",
    type: 1,
  },
  {
    id: "27",
    name: "Bạn Phương và người thương ❤️",
    type: 1,
  },
  {
    id: "28",
    name: "Gia đình bạn Ngọc ❤️",
    type: 1,
  },
  {
    id: "29",
    name: "Anh Tú và người thương ❤️",
    type: 1,
  },
];

// Mock API functions
export const invitationApi = {
  // Get all invitations
  getAllInvitations: (): Promise<Invitation[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockInvitations);
      }, 500);
    });
  },

  // Get invitation by id
  getInvitationById: (id: string): Promise<Invitation | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const invitation = mockInvitations.find((inv) => inv.id === id);
        resolve(invitation);
      }, 300);
    });
  },

  // Create invitation
  createInvitation: (
    invitation: Omit<Invitation, "id">
  ): Promise<Invitation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newInvitation: Invitation = {
          ...invitation,
          id: String(Date.now()),
        };
        mockInvitations.push(newInvitation);
        resolve(newInvitation);
      }, 500);
    });
  },

  // Update invitation
  updateInvitation: (
    id: string,
    invitation: Partial<Invitation>
  ): Promise<Invitation | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockInvitations.findIndex((inv) => inv.id === id);
        if (index !== -1) {
          mockInvitations[index] = { ...mockInvitations[index], ...invitation };
          resolve(mockInvitations[index]);
        } else {
          resolve(null);
        }
      }, 500);
    });
  },

  // Delete invitation
  deleteInvitation: (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockInvitations.findIndex((inv) => inv.id === id);
        if (index !== -1) {
          mockInvitations.splice(index, 1);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  },

  // Search invitations
  searchInvitations: (query: string): Promise<Invitation[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockInvitations.filter((inv) =>
          inv.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtered);
      }, 300);
    });
  },
};
