import { AiOutlineEye } from "react-icons/ai";
import { useUserStore } from "../../store/zustand/userstore";
import { FaBackward } from "react-icons/fa";
import MainType from "./MainType";

import EditeGroup from "../models/EditGroup";
export default function MessageContainer() {
  const { selectedChat, setselectChat, seteditgroup } = useUserStore();
  return (
    <div
      className={`divide-y-2 ${
        selectedChat ? "basis-full" : "hidden md:flex"
      } border md:basis-3/4 rounded-md border-gray-400 p-2  flex flex-col gap-y-3`}
    >
      <div
        className={`flex py-2 flex-row-reverse items-center ${
          selectedChat?.isGroupChat ? " justify-between" : "justify-end"
        }`}
      >
        {selectedChat?.isGroupChat && (
          <button onClick={() => seteditgroup()} className="text-2xl">
            <AiOutlineEye />
          </button>
        )}
        {selectedChat?.isGroupChat && (
          <h1 className="capitalize font-semibold">
            <span className="font-semibold">group name: </span>
            {selectedChat.chatName}
          </h1>
        )}

        <button
          onClick={() => setselectChat(null)}
          className={`${selectedChat && "block"} md:hidden`}
        >
          <FaBackward></FaBackward>
        </button>
      </div>
      <MainType></MainType>

      <EditeGroup></EditeGroup>
    </div>
  );
}
