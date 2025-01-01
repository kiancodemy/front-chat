import { useUserStore } from "../../../store/zustand/userstore";
import { useState } from "react";
import Notification from "../../notification/Notification";
import { uselogout } from "../../../hooks/logout";
import UserData from "../../models/UserData";
export default function UserButton() {
  const { mutate, isPending } = uselogout();
  const { setUserModel, user } = useUserStore();

  const [open, setopen] = useState(false);

  return (
    <div className="relative items-center flex gap-x-2">
      <Notification></Notification>
      <button
        className="bg-blue-500 text-white py-2 px-8 rounded-md"
        onClick={() => setopen((prev) => !prev)}
      >
        {user?.username}
      </button>
      {open && (
        <div className="*:capitalize z-[500] gap-y-3 border-2 absolute px-2 py-4 rounded-md top-full bg-white -inset-x-6 flex flex-col p-1 ">
          <button
            disabled={isPending}
            onClick={() => mutate()}
            className="rounded-md capitalize py-2 px-4 bg-blue-500 text-white"
          >
            logout
          </button>
          <button
            onClick={() => setUserModel()}
            className="bg-yellow-400 text-white  py-2 rounded-md"
          >
            profile
          </button>
        </div>
      )}
      <UserData></UserData>
    </div>
  );
}
