import { useQuery } from "@tanstack/react-query";

export const AllUsers = async (search: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/user/Allusers?search=${search}`,
      {
        method: "GET",
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

export const useAllusers = (search: string) => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["AllUsers", search],
    staleTime: 2 * 60 * 1000,
    queryFn: () => AllUsers(search),
  });

  return { data, isPending, isError, error };
};
