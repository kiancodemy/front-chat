import UserButton from "./buttons/UserButton";
import SideDrawer from "../drawer/SideDrawer";
import { useEffect } from "react";
import { useUserStore } from "../../store/zustand/userstore";
import SearchuserButton from "./buttons/SearchuserButton";
export default function ChatHeader() {
  const { setselectChat } = useUserStore();
  useEffect(() => {
    return () => {
      setselectChat(null);
    };
  }, []);
  return (
    <div className="p-2  rounded-md  bg-white flex items-center justify-between ">
      <SearchuserButton></SearchuserButton>
      <SideDrawer></SideDrawer>
      <UserButton></UserButton>
    </div>
  );
}
