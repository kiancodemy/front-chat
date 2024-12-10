import { useAllusers } from "../../hooks/Allusers";
import Loading from "../Loading/Loading";
import { UserMenue } from "../../types/type";
import { useUserStore } from "../../store/zustand/userstore";

import UserItem from "./UserItem";
export default function Allusers() {
  const { search } = useUserStore();
  const { isPending, data } = useAllusers(search);

  return (
    <div className="flex border border-gray-400 rounded-md gap-y-5 relative p-2 flex-col h-full overflow-y-auto">
      {isPending ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-col gap-y-2">
          {data?.map((item: UserMenue) => {
            return <UserItem key={item._id} item={item}></UserItem>;
          })}
        </div>
      )}
    </div>
  );
}
