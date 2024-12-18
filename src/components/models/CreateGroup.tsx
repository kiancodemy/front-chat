import { useUserStore } from "../../store/zustand/userstore";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { resultAlert } from "../../utils/toast";
import { useNewGroup } from "../../hooks/NewGroup";
import { useAllusers } from "../../hooks/Allusers";
export default function CreateGroup() {
  const { isPending: groupPenfing, mutate } = useNewGroup();
  const { groupModel, setgroupModel } = useUserStore();
  const [selectMember, setselectMember] = useState<any>([]);
  const [groupName, setgroupName] = useState("");
  const [search, setsearch] = useState("");
  const [item, setitem] = useState("");
  const { data, isPending } = useAllusers(item);

  useEffect(() => {
    if (search) {
      var timer = setTimeout(() => {
        setitem(search);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [search, setitem]);
  const AddMember = (member: any) => {
    if (selectMember.includes(member)) {
      resultAlert({ status: "err", message: "it is already exist" });
      return true;
    }

    setselectMember([...selectMember, member]);
  };
  const handleDelete = (item: any) => {
    const filter = selectMember.filter((items: any) => items._id !== item._id);
    setselectMember(filter);
  };
  const handleSubmit = () => {
    if (!groupName) {
      resultAlert({ status: "err", message: "choose group name" });
      return;
    } else if (selectMember.length < 2) {
      resultAlert({
        status: "err",
        message: "you should choose atleast two member",
      });
      return;
    }

    mutate({ name: groupName, users: selectMember });
    setgroupModel();
    setsearch("");
    setselectMember([]);
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && setgroupModel()}
      className={`${
        groupModel ? "flex" : "hidden"
      } fixed inset-0 p-2 bg-gray-600 z-[1000] bg-opacity-50 justify-center items-center`}
    >
      <div className="flex max-w-[330px] md:max-w-[400px] container p-4 bg-white rounded-md  border-2 flex-col gap-y-2 md:gap-y-6">
        <h1 className="capitalize font-semibold text-center text-2xl">
          create group chat
        </h1>
        <div className="capitalize flex flex-col gap-y-4">
          <div className="flex justify-end items-center">
            <span
              onClick={() => {
                setgroupModel(), setsearch("");
                setselectMember([]);
              }}
              className="text-2xl cursor-pointer"
            >
              <TiDeleteOutline></TiDeleteOutline>
            </span>
          </div>
          <input
            value={groupName}
            onChange={(e: any) => setgroupName(e.target.value)}
            type="text"
            placeholder="set group name"
            className="placeholder:capitalize border p-2 placeholder:text-gray-500"
          />
        </div>
        <div className="capitalize flex flex-col gap-y-4">
          <input
            value={search}
            onChange={(e: any) => setsearch(e.target.value)}
            type="text"
            placeholder="selet members"
            className="placeholder:capitalize border p-2 placeholder:text-gray-500"
          />
        </div>
        {selectMember.length > 0 && (
          <div className="flex gap-x-2 flex-wrap">
            {selectMember.map((item: any) => (
              <span
                key={item._id}
                className="bg-purple-600 py-2 px-6 flex gap-x-2 rounded-full text-white "
              >
                <span>{item.username}</span>
                <button onClick={() => handleDelete(item)} className="text-xl">
                  <TiDeleteOutline></TiDeleteOutline>
                </button>
              </span>
            ))}
          </div>
        )}
        {search && !isPending && (
          <div className="max-h-[150px] flex flex-col gap-y-2 overflow-y-auto">
            {!isPending && data.length === 0 ? (
              <span className="text-center capitalize">
                no such user! try again
              </span>
            ) : (
              data.map((item: any) => (
                <div
                  onClick={() => AddMember(item)}
                  className="flex cursor-pointer  gap-x-3 hover:bg-blue-700 duration-700  items-center bg-gray-300 hover:text-white p-2 rounded-md"
                  key={item._id}
                >
                  <img
                    className="w-10 h-10 border-white  border-2 rounded-full"
                    src={item.picture}
                    alt="kian"
                  />
                  <div className="flex flex-col">
                    <h1>{item.username}</h1>
                    <h1>
                      <span className="capitalize font-bold">email:</span>
                      {item.email}
                    </h1>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        <div>
          {isPending && <h1 className="text-center capitalize">loading!!</h1>}
        </div>

        <button
          type="submit"
          disabled={isPending || groupPenfing}
          onClick={handleSubmit}
          className="bg-blue-500 disabled:bg-gray-500 disabled:text-white hover:bg-blue-700 duration-500 text-white py-2 px-6 rounded-md "
        >
          create
        </button>
      </div>
    </div>
  );
}
