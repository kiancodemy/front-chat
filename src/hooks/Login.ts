import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";
import { useUserStore } from "../store/zustand/userstore";
import { useNavigate } from "react-router";

import { loginType } from "../types/type";
export const loginfunction = async (data: loginType) => {
  try {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      return await response.json();
    } else {
      const { message } = await response.json();
      throw new Error(message);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const uselogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { mutate, isPending } = useMutation({
    mutationFn: loginfunction,
    onError: (error) => {
      resultAlert({ status: "err", message: error.message });
    },
    onSuccess: (data) => {
      setUser(data);

      resultAlert({ status: "success", message: "login successfully" });
      navigate("/main/chat");
    },
  });

  return { mutate, isPending };
};
