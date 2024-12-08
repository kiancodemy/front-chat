import { AiOutlineEye } from "react-icons/ai";
export default function MessageContainer() {
  return (
    <div className="grow divide-y-2 border rounded-md border-gray-400 p-2 flex flex-col gap-y-3">
      <div className="flex py-2 items-center justify-between">
        <h1>grouname</h1>
        <button className="text-2xl">
          <AiOutlineEye />
        </button>
      </div>
      <div>d</div>
    </div>
  );
}
