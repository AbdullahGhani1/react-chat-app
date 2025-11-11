import { FaCheckDouble } from "react-icons/fa";
import type { Message } from "../../types";

const MessageBubble: React.FC<{
  message: Message;
  showReadReceipt: boolean;
  isFirstInBlock: boolean;
  isLastInBlock: boolean;
}> = ({ message, showReadReceipt, isFirstInBlock, isLastInBlock }) => {
  const isSent = message.sender === "me";
  const getBubbleRounding = () => {
    if (isSent) {
      if (isLastInBlock && !isFirstInBlock) {
        return "rounded-2xl rounded-tr-none";
      }
      if (!isLastInBlock && !isFirstInBlock) {
        return "rounded-l-2xl rounded-r-none";
      }
      return "rounded-2xl rounded-br-none";
    } else {
      if (isLastInBlock && !isFirstInBlock) {
        return "rounded-2xl rounded-tl-none";
      }
      if (!isLastInBlock && !isFirstInBlock) {
        return "rounded-r-2xl rounded-l-none";
      }
      return "rounded-2xl rounded-bl-none";
    }
  };

  const bubbleClasses = getBubbleRounding();

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div>
        <div
          className={`max-w-md p-3 flex flex-wrap items-baseline gap-2 ${bubbleClasses} ${
            isSent
              ? "bg-gradient-to-r from-[#D92CC1] to-[#4D72F8] text-white"
              : "bg-gray-200 text-gray-800"
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
