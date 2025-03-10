import { useAllchats } from "../../hooks/Allchats";
import Loading from "../Loading/Loading";
import ChatItem from "./ChatItem";
import CreateGroup from "../models/CreateGroup";
import { useUserStore } from "../../store/zustand/userstore";
export const MyChatMenue = () => {
  const { data, isPending } = useAllchats();
  const { selectedChat, setgroupModel } = useUserStore();

  return (
    <div
      className={`relative ${
        selectedChat ? "hidden md:block" : "basis-full"
      }  rounded-md bg-white md:basis-1/4`}
    >
      +
      {isPending ? (
        <Loading></Loading>
      ) : (
        <div className="gap-y-4 divide-y-2  p-2 flex flex-col">
          <div className="flex  justify-between items-center">
            <h1 className="capitalize font-semibold">my chats</h1>
            <button
              onClick={() => setgroupModel()}
              className="capitalize  py-1 md:py-2 px-2 rounded-md duration-500 hover:bg-red-700 bg-red-500 text-white"
            >
              group chat+
            </button>
          </div>
          <div className="flex overflow-y-auto grow flex-col gap-y-2">
            {data?.map((item: any) => {
              return <ChatItem chat={item} key={item?._id}></ChatItem>;
            })}
          </div>
        </div>
      )}
      <CreateGroup></CreateGroup>
    </div>
  );
};
