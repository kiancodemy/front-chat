import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "../../types/type";
type user = {
  user: UserType | null;
  search: string;
  logout: () => void;
  setUser: (data: UserType) => void;
  userModel: boolean;
  setUserModel: () => void;
  setsearch: (value: string) => void;
  setsideDrawer: () => void;
  selectedChat: any;
  setselectChat: (data: any) => void;
  sideDrawer: boolean;
};

export const useUserStore = create<user>()(
  persist(
    (set) => ({
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
      partialize: (state) => ({ user: state.user }),
    }
  )
);
