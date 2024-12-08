import { UserMenue } from "../../types/type";
export default function User({ item }: { item: UserMenue }) {
  return (
    <div className="flex cursor-pointer hover:bg-blue-700 duration-700  items-center bg-blue-500 text-white p-2 justify-between rounded-md">
      <h1 className="self-start">{item.username}</h1>
      <img
        className="w-10 h-10 border-white border-2 rounded-full"
        src={item.picture}
        alt="kian"
      />
    </div>
  );
}
