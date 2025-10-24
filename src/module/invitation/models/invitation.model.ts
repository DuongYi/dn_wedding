export interface Invitation {
  id: string;
  name: string;
  type: number; // 0 - Thiệp nhà trai thứ 7, 1 - Thiệp nhà trai chủ nhật, 2 - Thiệp nhà gái chủ nhật
}

export const InvitationTypeLabel: { [key: number]: string } = {
  0: "Thiệp nhà trai - Thứ 7",
  1: "Thiệp nhà trai - Chủ nhật",
  2: "Thiệp nhà gái - Chủ nhật",
};
