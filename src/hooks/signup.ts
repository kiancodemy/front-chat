import { useMutation } from "@tanstack/react-query";
import { resultAlert } from "../utils/toast";
import { singupType } from "../types/type";

const signupfunction = async (data: singupType) => {
  try {
    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
export const usesignup = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signupfunction,
    onError: (error) => {
      resultAlert({ status: "err", message: error.message });
    },
    onSuccess: (data) => {
      resultAlert({ status: "success", message: data.message });
    },
  });

  return { mutate, isPending };
};
