import { useAllmessages } from "../../hooks/SendAndGetMessage";
import { useUserStore } from "../../store/zustand/userstore";
import { useState } from "react";
import { useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
export default function MainType() {
  const { data, a, mutate, isPending } = useAllmessages();
  const [alldata, setalldata] = useState<any>([]);

  const { user } = useUserStore();
  useEffect(() => {
    if (data && data.Messages) {
      setalldata(data.Messages);
    }
  }, [data]);

  useEffect(() => {
    setalldata((prev: any) => [...prev, a]);
  }, [a, setalldata]);

  const ref = useRef<any>(null);

  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [alldata]);

  return (
    <div className="grow flex flex-col justify-between">
      {!isPending && alldata && alldata?.length === 0 ? (
        <h1 className="text-xl text-center py-10">
          select user and start sending message
        </h1>
      ) : (
        <div className="py-4 wid overflow-auto grow max-h-[280px]">
          {data &&
            alldata.map((chat: any) => (
              <div
                ref={ref}
                key={chat._id}
                className={`chat ${
                  chat.sender._id === user?._id ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={chat.sender.picture}
                    />
                  </div>
                </div>
                <div className="chat-bubble">{chat.content}</div>
              </div>
            ))}
        </div>
      )}

      <MessageInput mutate={mutate}></MessageInput>
    </div>
  );
}
