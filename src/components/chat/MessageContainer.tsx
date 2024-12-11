import { AiOutlineEye } from "react-icons/ai";
import { useUserStore } from "../../store/zustand/userstore";
import { FaBackward } from "react-icons/fa";
import CreateGroup from "../models/CreateGroup";
import MessageInput from "./MessageInput";
export default function MessageContainer() {
  const { selectedChat, setselectChat, setgroupModel } = useUserStore();
  return (
    <div
      className={`divide-y-2 ${
        selectedChat ? "basis-full" : "hidden md:flex"
      } border md:basis-3/4 rounded-md border-gray-400 p-2  flex flex-col gap-y-3`}
    >
      <div className="flex py-2 flex-row-reverse items-center justify-between">
        {!selectedChat?.isGroupChat && (
          <button onClick={() => setgroupModel()} className="text-2xl">
            <AiOutlineEye />
          </button>
        )}
        <h1 className="capitalize font-semibold">grouname:</h1>

        <button
          onClick={() => setselectChat(null)}
          className={`${selectedChat && "block"} md:hidden`}
        >
          <FaBackward></FaBackward>
        </button>
      </div>
      <h1 className="grow">dsds</h1>
      <MessageInput></MessageInput>
      <CreateGroup></CreateGroup>
    </div>
  );
}
