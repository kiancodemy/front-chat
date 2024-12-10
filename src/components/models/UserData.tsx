import { useUserStore } from "../../store/zustand/userstore";
export default function UserData() {
  const { user, userModel, setUserModel } = useUserStore();

  return (
    <div
      className={`${
        userModel ? "flex" : "hidden"
      } fixed inset-0 p-2 bg-gray-600  z-[1000] bg-opacity-80 justify-center items-center`}
    >
      <div className="flex max-w-[400px] container p-4 bg-white rounded-md  border-2 flex-col gap-y-3">
        <h1 className="capitalize font-bold text-xl">user info</h1>
        <h1 className="capitalize p-2 border-2 flex gap-x-3">
          <span className="font-bold">uername:</span>
          <span>{user?.username}</span>{" "}
        </h1>
        <h1 className="capitalize p-2 border-2 flex gap-x-3">
          <span className="font-bold">email:</span>
          <span>{user?.email}</span>
        </h1>
        <button
          onClick={() => setUserModel()}
          className="bg-blue-500 text-white py-2 px-6 rounded-md self-end "
        >
          close
        </button>
      </div>
    </div>
  );
}
