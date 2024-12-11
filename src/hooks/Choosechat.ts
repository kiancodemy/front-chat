import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";
import { useUserStore } from "../store/zustand/userstore";
import { useQueryClient } from "@tanstack/react-query";
export const choosechat = async (data: { userid: string }) => {
  try {
    const response = await fetch("http://localhost:5000/chats/chatacess", {
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

export const useChooseChat = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: choosechat,
    onError: (error) => {
      resultAlert({
        status: "err",
        message: error.message || "failed to create",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Allchats"] });

      resultAlert({ status: "success", message: "created suceesfuly" });
    },
  });

  return { mutate, isPending };
};
