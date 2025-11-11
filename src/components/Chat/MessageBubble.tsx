import { FaCheckDouble } from "react-icons/fa";
import type { Message } from "../../types";

const MessageBubble: React.FC<{
  message: Message;
  showReadReceipt: boolean;
}> = ({ message, showReadReceipt }) => {
  const isSent = message.sender === "me";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div>
        <div
          className={`max-w-md p-3 rounded-2xl flex flex-wrap items-baseline gap-2 ${
            isSent
              ? "bg-gradient-to-b from-[#D92CC1] to-[#4D72F8] text-white rounded-tr-2xl rounded-br-none"
              : "bg-gray-200 text-gray-800 rounded-full"
          }`}
        >
          <p className="text-md mr-2">{message.text}</p>

          <div
            className={`flex items-center ml-auto flex-shrink-0 ${
              isSent ? "" : "justify-start"
            }`}
          >
            <span
              className={`text-xs ${
                isSent ? "text-purple-200" : "text-gray-500"
              }`}
            >
              {message.timestamp}
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          {showReadReceipt && (
            <FaCheckDouble
              className={`w-3 h-3 mt-1 ${
                message.read ? "text-blue-300" : "text-gray-300"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
