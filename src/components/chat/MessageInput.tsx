import React from "react";
import { useState } from "react";
export default function MessageInput() {
  const [message, setmessage] = useState("");
  return (
    <div className="flex  gap-x-2">
      <input
        type="text"
        placeholder="type your message.."
        onChange={(e) => setmessage(e.target.value)}
        className="p-2 grow border-2 border-gray-500 rounded-md "
      />
      <button
        disabled={!message}
        className="py-2 capitalize rounded-md disabled:bg-gray-400  px-4  bg-blue-500 text-white"
      >
        send
      </button>
    </div>
  );
}
