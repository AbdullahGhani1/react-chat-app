import React from "react";
import type { Conversation, Message } from "../../types";
import MessageBubble from "./MessageBubble";
import ChatHeader from "./ChatHeader";
import ChatBar from "./ChatBar";

interface ChatPanelProps {
  conversation: Conversation | undefined;
  messages: Message[];
}

const ChatPanel: React.FC<ChatPanelProps> = ({ conversation, messages }) => {
  if (!conversation) {
    return (
      <div className="flex-grow flex items-center justify-center bg-white text-gray-500">
        Select a conversation to start chatting
      </div>
    );
  }

  return (
    <main className="flex-grow flex flex-col bg-white h-full">
      <ChatHeader conversation={conversation} />

      <div className="flex-grow p-6 overflow-y-auto space-y-4">
        <div className="text-center text-xs text-gray-400">Today 12:34 PM</div>
        {messages.map((msg, index) => {
          const nextMessage = messages[index + 1];
          const isSentByMe = msg.sender === "me";
          const showReadReceipt =
            isSentByMe && (!nextMessage || nextMessage.sender === "them");

          return (
            <MessageBubble
              key={msg.id}
              message={msg}
              showReadReceipt={showReadReceipt}
            />
          );
        })}
      </div>
      <ChatBar />
    </main>
  );
};

export default ChatPanel;
