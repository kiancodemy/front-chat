import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "../../types/type";
type user = {
  user: UserType | null;
  search: string;
  logout: () => void;
  setUser: (data: UserType) => void;
  setsearch: (value: string) => void;
};

export const useUserStore = create<user>()(
  persist(
    (set) => ({
      user: null,
      logout: () => set({ user: null }),
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
