import { useUserStore } from "../../store/zustand/userstore";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { usedeleteGroup } from "../../hooks/DeleteGroup";
import { userenameGroup } from "../../hooks/renameGroup";
import { resultAlert } from "../../utils/toast";
export default function EditeGroup() {
  const { mutate: deleteGroup, isPending: groupPenfing } = usedeleteGroup();
  const { mutate: renameGroup, isPending } = userenameGroup();

  const { editGroup, setselectChat, selectedChat, seteditgroup } =
    useUserStore();
  const [editgroup, changeeditgroupp] = useState("");

  const handleDelete = (id: string) => {
    deleteGroup(id);
    seteditgroup();
    setselectChat(null);
    changeeditgroupp("");
  };
  const handleSubmit = () => {
    if (!editgroup) {
      resultAlert({
        status: "err",
        message: "you have not changed the name yet!",
      });
      return;
    }
    renameGroup({ id: selectedChat._id, name: editgroup });

    seteditgroup();
    setselectChat(null);
    changeeditgroupp("");
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && seteditgroup()}
      className={`${
        editGroup ? "flex" : "hidden"
      } fixed inset-0 p-2 bg-gray-600 z-[1000] bg-opacity-50 justify-center items-center`}
    >
      <div className="flex max-w-[330px] md:max-w-[400px] container p-4 bg-white rounded-md  border-2 flex-col gap-y-2 md:gap-y-6">
        <h1 className="capitalize font-semibold text-center text-2xl">
          edit group chat
        </h1>
        <div className="capitalize flex flex-col gap-y-4">
          <div className="flex justify-end items-center">
            <span
              onClick={() => {
                seteditgroup();
              }}
              className="text-2xl cursor-pointer"
            >
              <TiDeleteOutline></TiDeleteOutline>
            </span>
          </div>
          <input
            defaultValue={selectedChat?.chatName}
            onChange={(e: any) => changeeditgroupp(e.target.value)}
            type="text"
            placeholder="edit group name"
            className="placeholder:capitalize border p-2 placeholder:text-gray-500"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={groupPenfing || isPending}
            onClick={handleSubmit}
            className="bg-blue-500 disabled:bg-gray-500 disabled:text-white hover:bg-blue-700 duration-500 text-white py-2 px-6 rounded-md "
          >
            change
          </button>
          <button
            type="submit"
            disabled={groupPenfing || isPending}
            onClick={() => handleDelete(selectedChat._id)}
            className="bg-red-500 disabled:bg-gray-500 disabled:text-white hover:bg-red-700 duration-500 text-white py-2 px-6 rounded-md "
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
