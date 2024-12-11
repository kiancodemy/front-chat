import { UserMenue } from "../../types/type";
import { useChooseChat } from "../../hooks/Choosechat";
import { useUserStore } from "../../store/zustand/userstore";
export default function User({ item }: { item: UserMenue }) {
  const { setsideDrawer } = useUserStore();
  const { mutate } = useChooseChat();
  const handleDrawer = async (item: any) => {
    mutate({ userid: item._id });
    setsideDrawer();
  };

  return (
    <div
      onClick={() => handleDrawer(item)}
      className="flex cursor-pointer  gap-x-3 hover:bg-blue-700 duration-700  items-center bg-gray-300 hover:text-white p-2 rounded-md"
    >
      <img
        className="w-10 h-10 border-white  border-2 rounded-full"
        src={item.picture}
        alt="kian"
      />
      <div className="flex flex-col">
        <h1>{item.username}</h1>
        <h1>
          <span className="capitalize font-bold">email:</span>
          {item.email}
        </h1>
      </div>
    </div>
  );
}
