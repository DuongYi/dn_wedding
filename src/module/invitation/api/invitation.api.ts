import { Invitation } from "../models/invitation.model";

// Mock API - Simulating backend response
export const mockInvitations: Invitation[] = [
  {
    id: "1",
    name: "Siêu tiền đạo Hàn Công Nhu",
    type: 0,
  },
  {
    id: "2",
    name: "Hải Bình thân iu ❤️",
    type: 0,
  },
  {
    id: "3",
    name: "Chị gái Mai Trang & anh rể Đình An",
    type: 1,
  },
  {
    id: "4",
    name: "Bạn và người thương",
    type: 1,
  },
  {
    id: "5",
    name: "Thiệp chị Lan",
    type: 2,
  },
  {
    id: "6",
    name: "Thiệp ông bà ngoại",
    type: 2,
  },
  {
    id: "7",
    name: "Thiệp bạn bè công ty",
    type: 0,
  },
  {
    id: "8",
    name: "Thiệp họ hàng bên nội",
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
