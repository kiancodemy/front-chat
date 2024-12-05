import { tost } from "../../utils/toast";
export default function Login() {
  const sumit = () => {
    tost({ status: "sucess", message: "fuck" });
  };

  return (
    <div className="flex p-4 flex-col gap-y-6 md:gap-y-8">
      <div className="flex flex-col gap-y-2">
        <label className="font-semibold capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
          email
        </label>
        <input type="text" className="border-2 rounded-md py-1 px-2" />
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="font-semibold capitalize after:content-['*'] after:ml-0.5 after:text-red-500">
          password
        </label>
        <input type="password" className="border-2 rounded-md py-1 px-2" />
      </div>
      <button
        onClick={sumit}
        className="bg-blue-500 capitalize hover:bg-blue-700 duration-500 text-white rounded-md py-2"
      >
        login
      </button>
    </div>
  );
}
