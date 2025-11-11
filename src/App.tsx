import { useState, useEffect } from "react";
import { conversationsData, messagesData } from "./constants/conversation";
import type { Conversation, Message } from "./types";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import ChatPanel from "./components/Chat/Chat";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import { contactsData } from "./constants/contacts";

function App() {
  const [activeConversationId, setActiveConversationId] = useState<number>(1);
  const [activeConversation, setActiveConversation] = useState<
    Conversation | undefined
  >();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setActiveConversation(
      conversationsData.find((c) => c.id === activeConversationId)
    );
    setMessages(messagesData[activeConversationId] || []);
  }, [activeConversationId]);

  const handleSelectConversation = (id: number) => {
    setActiveConversationId(id);
  };

  return (
    <div className="flex h-screen w-full font-sans antialiased overflow-hidden">
      <div
        className={`
      h-full flex-col
      ${activeConversationId ? "hidden" : "flex"} 
      md:flex md:w-[360px] md:flex-shrink-0
      w-full
    `}
      >
        <LeftSidebar
          conversations={conversationsData}
          activeConversationId={activeConversationId}
          onSelectConversation={handleSelectConversation}
        />
      </div>

      <div
        className={`
      h-full flex-col flex-grow
      ${!activeConversationId ? "hidden" : "flex"}
      md:flex
      w-full md:w-auto
    `}
      >
        {activeConversation ? (
          <ChatPanel conversation={activeConversation} messages={messages} />
        ) : (
          <div className="hidden md:flex h-full w-full items-center justify-center bg-gray-100">
            <p className="text-gray-500">
              Select a conversation to start chatting.
            </p>
          </div>
        )}
      </div>

      <div
        className="
      h-full flex-col
      hidden 
      xl:flex xl:w-[360px] xl:flex-shrink-0
    "
      >
        <RightSidebar contacts={contactsData} />
      </div>
    </div>
  );
}

export default App;
