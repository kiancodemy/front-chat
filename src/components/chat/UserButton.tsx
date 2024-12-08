import React from "react";
import { useUserStore } from "../../store/zustand/userstore";
import { useState } from "react";
import { uselogout } from "../../hooks/logout";

export default function UserButton() {
  const { mutate, isPending } = uselogout();

  const [open, setopen] = useState(false);
  const { user } = useUserStore();
  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white py-2 px-8 rounded-md"
        onClick={() => setopen((prev) => !prev)}
      >
        {user?.username}
      </button>
      {open && (
        <div className="*:capitalize gap-y-3 border-2 absolute px-2 py-4 rounded-md top-full bg-white -inset-x-6 flex flex-col p-1 ">
          <button
            disabled={isPending}
            onClick={() => mutate()}
            className="rounded-md capitalize py-2 px-4 bg-blue-500 text-white"
          >
            logout
          </button>
          <button className="bg-yellow-400 text-white  py-2 rounded-md">
            profile
          </button>
        </div>
      )}
    </div>
  );
}
