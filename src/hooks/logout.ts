import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";
import { useUserStore } from "../store/zustand/userstore";
const apiUrl = import.meta.env.VITE_API_URL;
export const logoutFunction = async () => {
  try {
    const response = await fetch(`${apiUrl}/user/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      return true;
    }

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const uselogout = () => {
  const { logout } = useUserStore();
  const { mutate, isPending } = useMutation({
    mutationFn: logoutFunction,
    onError: (error) => {
      resultAlert({ status: "err", message: error.message });
    },
    onSuccess: () => {
      resultAlert({ status: "success", message: "logout successfully" });
      logout();
    },
  });

  return { mutate, isPending };
};
