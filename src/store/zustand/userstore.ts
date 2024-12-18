import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "../../types/type";
type user = {
  user: UserType | null;
  search: string;
  logout: () => void;
  setUser: (data: UserType) => void;
  groupModel: boolean;
  setgroupModel: () => void;
  editGroup: boolean;
  seteditgroup: () => void;
  userModel: boolean;
  setUserModel: () => void;
  setsearch: (value: string) => void;
  setsideDrawer: () => void;
  selectedChat: any;
  setselectChat: (data: any) => void;
  sideDrawer: boolean;
  notificationList: any;
  setnitification: (data: any) => void;
};

export const useUserStore = create<user>()(
  persist(
    (set) => ({
      notificationList: [],
      setnitification: (data: any) => set(() => ({ notificationList: data })),
      groupModel: false,
      editGroup: false,
      seteditgroup: () =>
        set((state: any) => ({ editGroup: !state.editGroup })),
      setgroupModel: () =>
        set((state: any) => ({ groupModel: !state.groupModel })),
      user: null,
      selectedChat: null,
      setselectChat: (data) => set(() => ({ selectedChat: data })),
      logout: () => set({ user: null }),
      userModel: false,
      setUserModel: () =>
        set((state: any) => ({ userModel: !state.userModel })),
      sideDrawer: false,
      setsideDrawer: () =>
        set((state: any) => ({ sideDrawer: !state.sideDrawer })),
      setUser: (data: UserType) => set({ user: data }),
      search: "",
      setsearch: (value: string) => set({ search: value }),
    }),
    {
      name: "user",
      partialize: (state) => ({
        user: state.user,
        notificationList: state.notificationList,
      }),
    }
  )
);
