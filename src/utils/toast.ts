import { toast } from "react-toastify";
import { Slide } from "react-toastify";
import { toastType } from "../types/type";
export const resultAlert = (content: toastType) => {
  if (content.status === "success") {
    return toast.success(content.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  } else {
    return toast.error(content.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }
};
