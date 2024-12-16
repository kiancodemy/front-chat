import { FaBell } from "react-icons/fa6";
import { useUserStore } from "../../store/zustand/userstore";

export default function Notification() {
  const { selectedChatt, setnitification, notificationList } = useUserStore();
  return (
    <div className="relative">
      <button className="p-3 bg-gray-200 duration-500 hover:bg-gray-300  rounded-full flex items-center justify-center">
        <FaBell></FaBell>
      </button>
      <h1 className="absolute  -inset-x-3 top-full">{notificationList}</h1>
      {notificationList.length > 0 && (
        <span className="absolute bg-red-600 text-white flex justify-center items-center -top-1 -left-2 w-5 h-5 rounded-full">
          {notificationList.length}
        </span>
      )}
    </div>
  );
}
