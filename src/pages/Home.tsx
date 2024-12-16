import { useState } from "react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

export default function Home() {
  const [login, setlogin] = useState(true);

  return (
    <div className="flex justify-center items-center py-10 md:py-20 h-screen">
      <div className="max-w-[90%] flex flex-col gap-y-3 md:max-w-[400px] mx-auto container rounded-md p-4 bg-white">
        <div className="rounded-md p-2 space-x-1 *:capitalize flex">
          <button
            onClick={() => setlogin(false)}
            className={`grow ${
              !login ? "bg-black" : "bg-blue-400"
            } rounded-full py-2 duration-500 font-semibold text-white`}
          >
            signup
          </button>
          <button
            onClick={() => setlogin(true)}
            className={`grow ${
              login ? "bg-black" : "bg-blue-400"
            } rounded-full py-2 duration-500 font-semibold text-white`}
          >
            login
          </button>
        </div>
        <div>{login ? <Login></Login> : <Signup></Signup>}</div>
      </div>
    </div>
  );
}
