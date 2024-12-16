import { useAllmessages } from "../../hooks/SendAndGetMessage";
import { useState } from "react";

import { useUserStore } from "../../store/zustand/userstore";
export default function MessageInput({
  mutate,
}: {
  mutate: (data: any) => void;
}) {
  const [message, setmessage] = useState("");
  const { selectedChat } = useUserStore();
  const { isPending } = useAllmessages();
  const submit = (e: any) => {
    if (message) {
      e.preventDefault();

      mutate({ content: message, chatid: selectedChat._id });
      setmessage("");
    }
  };

  return (
    <form
      onSubmit={submit}
      className={`flex ${!selectedChat && "invisible"} gap-x-2`}
    >
      <input
        value={message}
        type="text"
        placeholder="type your message.."
        onChange={(e) => setmessage(e.target.value)}
        className="p-2 grow border-2 border-gray-500 rounded-md "
      />
      <button
        type="submit"
        disabled={!message || isPending}
        className="py-2 capitalize rounded-md disabled:bg-gray-400  px-4  bg-blue-500 text-white"
      >
        send
      </button>
    </form>
  );
}
