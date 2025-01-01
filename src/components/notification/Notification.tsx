import { FaBell } from "react-icons/fa6";
import { useUserStore } from "../../store/zustand/userstore";
import { useState, useEffect, useRef } from "react";

export default function Notification() {
  const { setselectChat, setnitification, notificationList } = useUserStore();
  const [modal, setopenModal] = useState<boolean>(false);
  const modalref = useRef<any>(null);

  useEffect(() => {
    const handle = (e: any) => {
      if (modalref.current && !modalref.current.contains(e.target)) {
        setopenModal(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  }, []);

  const handleNewchat = (chatid: string) => {
    const filter = notificationList.filter((item: any) => item.chat !== chatid);
    setnitification(filter);
    setselectChat({ _id: chatid });
  };

  return (
    <div
      ref={modalref}
      onClick={() => setopenModal((prev) => !prev)}
      className="relative "
    >
      <button className="p-3 bg-gray-200 duration-500 hover:bg-gray-300  rounded-full flex items-center justify-center">
        <FaBell></FaBell>
      </button>
      <div className="absolute z-[500] cursor-pointer right-[70%] outline outline-gray-400  rounded-md top-[90%]">
        {modal && (
          <div className="divide-y-2 w-[150px] bg-white">
            {notificationList.length === 0 ? (
              <div className="py-2 flex items-center capitalize text-center text-pretty justify-center">
                <span> no new message!</span>
              </div>
            ) : (
              <div className="flex divide-x-2  flex-col gap-y-2">
                {notificationList.map((item: any) => {
                  return (
                    <div
                      onClick={() => handleNewchat(item.chat)}
                      className="flex p-3 capitalize gap-x-2  hover:bg-blue-500 hover:text-white"
                    >
                      <h1>from:</h1>
                      <h1>{item.sender.username}</h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <span className="absolute bg-red-600 text-white flex justify-center items-center -top-1 -left-2 w-5 h-5 rounded-full">
        {notificationList.length}
      </span>
    </div>
  );
}
