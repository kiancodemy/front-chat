import { useAllusers } from "../../hooks/Allusers";
import Loading from "../Loading/Loading";
import { UserMenue } from "../../types/type";
import { useUserStore } from "../../store/zustand/userstore";
import InputSearch from "./InputSearch";
import User from "./User";
export default function Chatmenue() {
  const { search } = useUserStore();
  const { isPending, data } = useAllusers(search);

  return (
    <div className="flex border border-gray-400 rounded-md gap-y-5 relative p-2 flex-col basis-1/4">
      {isPending ? (
        <Loading></Loading>
      ) : (
        <div className="flex  flex-col gap-y-2">
          <div className="flex items-center justify-between px-2">
            <h1 className="text-xl  font-semibold capitalize">mychats</h1>
            <button className="bg-red-500 py-2 px-2 rounded-md text-white capitalize">
              add Group+
            </button>
          </div>
          {data?.map((item: UserMenue) => {
            return <User key={item._id} item={item}></User>;
          })}
        </div>
      )}
    </div>
  );
}
