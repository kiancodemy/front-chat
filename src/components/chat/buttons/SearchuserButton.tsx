import { useUserStore } from "../../../store/zustand/userstore";
import { IoSearch } from "react-icons/io5";

export default function SearchuserButton() {
  const { setsideDrawer } = useUserStore();
  return (
    <>
      <button
        onClick={() => setsideDrawer()}
        className="bg-blue-500 capitalize hover:bg-blue-700 duration-700 gap-x-2 items-center py-2 flex  px-6 rounded-md text-white"
      >
        <span> serach for user</span>
        <IoSearch></IoSearch>
      </button>
    </>
  );
}
