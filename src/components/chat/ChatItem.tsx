import { useUserStore } from "../../store/zustand/userstore";

export default function ChatItem({ chat }: { chat: any }) {
  const { setselectChat, selectedChat, user } = useUserStore();

  return (
    <div
      onClick={() => setselectChat(chat)}
      className={`flex ${
        selectedChat?._id === chat._id
          ? "bg-green-500 text-white"
          : "bg-gray-300 "
      } p-2 cursor-pointer  rounded-md flex-col gap-y-1`}
    >
      <div className="capitalize">
        {chat.isGroupChat ? (
          <span>{chat.chatName}</span>
        ) : (
          <span className="flex gap-x-1">
            {chat?.participants[0]._id === user?._id
              ? chat?.participants[1].username
              : chat?.participants[0].username}
          </span>
        )}
      </div>
    </div>
  );
}
