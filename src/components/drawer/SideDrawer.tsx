import { useUserStore } from "../../store/zustand/userstore";
import InputSearch from "../chat/InputSearch";
import Chatmenue from "../chat/Allusers";
export default function SideDrawer() {
  const { setsideDrawer, sideDrawer } = useUserStore();

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && setsideDrawer()}
      className={`${
        sideDrawer ? "flex" : "hidden"
      } z-[2000] flex justify-start fixed inset-0 bg-gray-600 bg-opacity-55 `}
    >
      <div className="flex max-w-[320px] flex-col py-4  px-2 bg-white gap-y-4">
        <InputSearch></InputSearch>
        <Chatmenue></Chatmenue>
      </div>
    </div>
  );
}
