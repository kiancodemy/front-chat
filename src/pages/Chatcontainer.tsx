import ChatMenue from "../components/chat/ChatMenue";
import ChatHeader from "../components/chat/ChatHeader";
import MessageContainer from "../components/chat/MessageContainer";
export default function Chatcontainer() {
  return (
    <div className="py-10 flex gap-y-3 items-center flex-col min-h-screen md:py-20">
      <div className="max-w-[80%] container">
        <ChatHeader></ChatHeader>
      </div>

      <div className="bg-black *:bg-white  justify-center grow flex gap-x-3 max-w-[80%] p-4 rounded-md container mx-auto">
        <ChatMenue></ChatMenue>
        <MessageContainer />
      </div>
    </div>
  );
}
