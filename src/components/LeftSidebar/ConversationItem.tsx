import { ConversationStatus, type Conversation } from "../../types";
import { FaPhone } from "react-icons/fa6";

const ConversationItem: React.FC<{
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}> = ({ conversation, isActive, onClick }) => {
  const getStatusIcon = (status: ConversationStatus) => {
    switch (status) {
      case ConversationStatus.Incoming:
        return <FaPhone className="w-3 h-3 text-gray-400" />;
      case ConversationStatus.Outgoing:
        return <FaPhone className="w-3 h-3 text-gray-400" />;
      case ConversationStatus.Missed:
        return <FaPhone className="w-3 h-3 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors duration-200 bg-white shadow-lg"`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-b from-[#D92CC1] to-[#4D72F8] mr-3`}
      >
        {conversation.avatar}
      </div>
      <div className="flex-grow">
        <p
          className={`font-semibold ${
            isActive ? "text-gray-800" : "text-gray-600"
          }`}
        >
          {conversation.name}
        </p>
        <div className="flex items-center text-xs text-gray-400 pt-1">
          {getStatusIcon(conversation.status)}
          <p className="ml-1 truncate">{conversation.lastMessage}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">{conversation.time}</p>
        {conversation.unreadCount > 0 && (
          <div className="mt-1 w-5 h-5 bg-gradient-to-br from-[#D92CC1] to-[#4D72F8] text-white text-xs rounded-full flex items-center justify-center">
            {conversation.unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};
export default ConversationItem;
