import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;
export const Allchats = async () => {
  try {
    const response = await fetch(`${apiUrl}/chats/fetchChat`, {
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

export const useAllchats = () => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["Allchats"],
    staleTime: 2 * 60 * 1000,
    queryFn: Allchats,
  });

  return { data, isPending, isError, error };
};
