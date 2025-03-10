import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";

import { useQueryClient } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;
export const Editgroup = async (data: { id: string; name: string }) => {
  try {
    const response = await fetch(`${apiUrl}/chats/renameGroup`, {
      method: "PUT",
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

export const userenameGroup = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: Editgroup,

    onError: (error) => {
      resultAlert({ status: "err", message: error.message });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Allchats"] }),
        resultAlert({ status: "success", message: "New GRoup created" });
    },
  });

  return { mutate, isPending };
};
