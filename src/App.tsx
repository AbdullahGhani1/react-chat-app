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
    <div className="flex h-screen w-full font-sans antialiased">
      <LeftSidebar
        conversations={conversationsData}
        activeConversationId={activeConversationId}
        onSelectConversation={handleSelectConversation}
      />
      <ChatPanel conversation={activeConversation} messages={messages} />
      <RightSidebar contacts={contactsData} />
    </div>
  );
}

export default App;
