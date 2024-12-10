import UserButton from "./buttons/UserButton";
import SideDrawer from "../drawer/SideDrawer";
import SearchuserButton from "./buttons/SearchuserButton";
export default function ChatHeader() {
  return (
    <div className="p-2  rounded-md  bg-white flex items-center justify-between ">
      <SearchuserButton></SearchuserButton>
      <SideDrawer></SideDrawer>
      <UserButton></UserButton>
    </div>
  );
}
