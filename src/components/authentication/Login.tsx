import { uselogin } from "../../hooks/Login";
import Loading from "../Loading/Loading";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
export default function Login() {
  const { mutate, isPending } = uselogin();
  const [showPassword, setshowPassword] = useState(true);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const submitForm = async () => {
    mutate({
      email,
      password,
    });
  };

  return (
    <>
      {!isPending ? (
        <div className="flex p-4 flex-col gap-y-4">
          <h1 className="text-center font-semibold capitalize text-2xl">
            login
          </h1>
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
            disabled={isPending}
            onClick={submitForm}
            className="bg-blue-500 capitalize hover:bg-blue-700 duration-500 text-white rounded-md py-2"
          >
            login
          </button>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}
