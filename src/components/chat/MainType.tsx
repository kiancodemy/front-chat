import { useAllmessages } from "../../hooks/SendAndGetMessage";
import { useUserStore } from "../../store/zustand/userstore";
import { useState } from "react";
import { formatTimestampToTime } from "../../assets/time";
import { useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
import { io } from "socket.io-client";

export default function MainType() {
  const { data, Newdata, mutate } = useAllmessages();
  const [alldata, setalldata] = useState<any>([]);
  const [_, setsocketConnected] = useState<boolean>(false);
  const { user, selectedChat, setnitification, notificationList } =
    useUserStore();
  const socket = useRef<any>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    socket.current = io(`${apiUrl}`);

    socket.current.on("connect", () => {
      console.log("connected react");
      socket.current.emit("setup", user);
    });

    socket.current.on("connected", () => {
      setsocketConnected(true);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        console.log("disconnected front");
      }
    };
  }, []);

  useEffect(() => {
    if (data) {
      socket.current.emit("chat-join", data._id);
    }
    if (data?.Messages?.length > 0) {
      setalldata(data.Messages);
    } else if (data?.Messages?.length === 0) {
      setalldata([]);
    }
  }, [data]);
  useEffect(() => {
    if (Newdata) {
      socket.current.emit("new-message", {
        participants: selectedChat.participants,
        Newdata,
      });

      setalldata((prev: any) => [...prev, Newdata]);
    }
  }, [Newdata]);

  useEffect(() => {
    const handleReceivedMessage = (newdata: any) => {
      if (newdata.chat === selectedChat?._id) {
        setalldata((prev: any) => [...prev, newdata]);
      } else {
        setnitification([...notificationList, newdata]);
      }
    };

    socket.current.on("recieved-message", handleReceivedMessage);

    return () => {
      socket.current.off("recieved-message", handleReceivedMessage);
    };
  });

  const ref = useRef<any>(null);

  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [alldata]);

  return (
    <div className="flex grow flex-col justify-between">
      {alldata?.length === 0 ? (
        <h1 className="text-xl text-center py-10">
          select user and start sending message
        </h1>
      ) : (
        <div className="p-4 overflow-y-scroll h-[50px] grow md:max-h-[280px]">
          {alldata.length > 0 &&
            alldata.map((chat: any) => (
              <div
                ref={ref}
                key={chat._id}
                className={`chat ${
                  chat.sender?._id == user?._id ? "chat-end" : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={chat?.sender.picture}
                    />
                  </div>
                </div>
                <div className="chat-bubble">{chat?.content}</div>
                <div className="chat-footer opacity-50">
                  {formatTimestampToTime(chat.updatedAt)}
                </div>
              </div>
            ))}
        </div>
      )}

      <MessageInput mutate={mutate}></MessageInput>
    </div>
  );
}
