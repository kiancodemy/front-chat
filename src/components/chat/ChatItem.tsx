import { useUserStore } from "../../store/zustand/userstore";
export default function ChatItem({ chat }: { chat: any }) {
  const { setselectChat, selectedChat } = useUserStore();
  return (
    <div
      onClick={() => setselectChat(chat)}
      className={`flex ${
        selectedChat?._id === chat._id
          ? "bg-green-500 text-white"
          : "bg-gray-300 "
      } p-2 cursor-pointer  rounded-md flex-col gap-y-1`}
    >
      <h1 className="capitalize flex gap-x-2 items-center">
        <span className="font-bold"> chatname:</span>
        <span> {chat.chatName}</span>
      </h1>
      <div className="capitalize">
        {chat.isGroupChat ? <span>groupchat</span> : <span>singlechat</span>}
      </div>
    </div>
  );
}
