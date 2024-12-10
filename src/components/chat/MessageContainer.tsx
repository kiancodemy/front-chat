import { AiOutlineEye } from "react-icons/ai";
import { useUserStore } from "../../store/zustand/userstore";
import MessageInput from "./MessageInput";
export default function MessageContainer() {
  const { selectedChat } = useUserStore();
  return (
    <div
      className={`divide-y-2 ${
        selectedChat ? "basis-full" : "hidden md:flex"
      } border md:basis-3/4 rounded-md border-gray-400 p-2  flex flex-col gap-y-3`}
    >
      <div className="flex py-2 items-center justify-between">
        <h1 className="capitalize font-semibold">grouname:</h1>
        <button className="text-2xl">
          <AiOutlineEye />
        </button>
      </div>
      <h1 className="grow">dsds</h1>
      <MessageInput></MessageInput>
    </div>
  );
}
