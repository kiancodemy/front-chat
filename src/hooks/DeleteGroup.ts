import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";

import { useQueryClient } from "@tanstack/react-query";
export const deleteGroup = async (id: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/chats/deleteMember?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",
      }
    );

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

export const usedeleteGroup = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteGroup,

    onError: (error) => {
      resultAlert({ status: "err", message: error.message });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Allchats"] }),
        resultAlert({ status: "success", message: "Deleted Successfully" });
    },
  });

  return { mutate, isPending };
};
