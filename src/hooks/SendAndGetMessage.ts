import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "../store/zustand/userstore";
const apiUrl = import.meta.env.VITE_API_URL;

export const Allmessages = async (search: string) => {
  try {
    const response = await fetch(`${apiUrl}/message/getmessages/${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

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
export const sendmessages = async (data: {
  content: string;
  chatid: string;
}) => {
  try {
    const response = await fetch(`${apiUrl}/message/sendmessage`, {
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
export const useAllmessages = () => {
  const { selectedChat } = useUserStore();
  const [Newdata, setNewMessage] = useState<any>(null);

  const { isSuccess, data, isPending } = useQuery({
    queryKey: ["Allmessages", selectedChat?._id],
    queryFn: () => Allmessages(selectedChat?._id),
    staleTime: 1 * 1000,
    enabled: !!selectedChat?._id,
  });

  const { mutate } = useMutation({
    mutationFn: sendmessages,
    onSuccess: (newMessage) => {
      setNewMessage(newMessage);
    },
  });

  return { data, mutate, isSuccess, isPending, Newdata };
};
