import { useEffect, useState } from "react";
import { useUserStore } from "../../store/zustand/userstore";

export default function InputSearch() {
  const { setsearch } = useUserStore();
  const [User, setUser] = useState("");

  useEffect(() => {
    return () => {
      setsearch("");
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setsearch(User);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [User, setsearch]);

  return (
    <div className="flex">
      <input
        className="border capitalize duration-1000 placeholder:transition-all placeholder:ease-out focus:placeholder:translate-x-4 focus:outline-gray-400 py-2 grow rounded-md px-2"
        onChange={(e: any) => {
          setUser(e.target.value);
        }}
        type="text"
        placeholder="search the user"
      />
    </div>
  );
}
