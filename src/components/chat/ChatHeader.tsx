import InputSearch from "./InputSearch";
import UserButton from "./UserButton";
export default function ChatHeader() {
  return (
    <div className="p-2  rounded-md  bg-white flex items-center justify-between ">
      <InputSearch></InputSearch>
      <UserButton></UserButton>
    </div>
  );
}
