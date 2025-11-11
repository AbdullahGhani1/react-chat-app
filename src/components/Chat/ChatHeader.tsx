import type { Conversation } from "../../types";
import { MdMoreVert } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

interface ChatHeaderProps {
  conversation: Conversation;
}
const ChatHeader = ({ conversation }: ChatHeaderProps) => {
  return (
    <header className="flex items-center p-3 border-b border-gray-200 bg-white shadow-sm z-10">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br from-purple-500 to-indigo-600 mr-4">
        <img
          src={`https://picsum.photos/seed/${conversation.name}/48/48`}
          alt={conversation.name}
          className="rounded-full"
        />
      </div>
      <div className="flex-grow">
        <h2 className="font-bold text-lg text-gray-800">{conversation.name}</h2>
        <p className="text-sm text-gray-500">Last seen at 2:34 PM</p>
      </div>
      <div className="flex items-center space-x-4 text-gray-500">
        <button className="hover:text-purple-600">
          <LuPhone />{" "}
        </button>
        <button className="hover:text-purple-600">
          <MdMoreVert />{" "}
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
