import { usesignup } from "../../hooks/signup";
import { AiOutlineEye } from "react-icons/ai";
import Loading from "../Loading/Loading";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export default function Signup() {
  const { mutate, isPending } = usesignup();
  const [showPassword, setshowPassword] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  const submitForm = async () => {
    mutate({
      username,
      email,
      password,
    });
  };
  return (
    <>
      {!isPending ? (
        <div className="flex p-4 flex-col gap-y-4">
          <h1 className="text-center font-semibold capitalize text-2xl">
            signup
          </h1>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
              username
            </label>
            <input
              required
              onChange={(e: any) => setusername(e.target.value)}
              type="text"
              className="border-2 rounded-md py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
              email
            </label>
            <input
              onChange={(e: any) => setemail(e.target.value)}
              type="text"
              className="border-2 rounded-md py-1 px-2"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
              password
            </label>
            <div className="relative  flex">
              <input
                onChange={(e: any) => setpassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="border-2 grow rounded-md py-1 px-2"
              />
              <button
                className="absolute text-2xl bg-red right-2 inset-y-0"
                onClick={() => setshowPassword((prev) => !prev)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>
          <button
            onClick={submitForm}
            className="bg-blue-500 capitalize hover:bg-blue-700 duration-500 text-white rounded-md py-2"
          >
            signup
          </button>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}
