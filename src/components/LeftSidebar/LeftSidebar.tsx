import React, { useState, useMemo } from "react";
import { type Conversation } from "../../types";
import { FaChevronDown, FaSearch } from "react-icons/fa";

import LeftHeader from "./LeftHeader";
import ConversationItem from "./ConversationItem";

interface LeftSidebarProps {
  conversations: Conversation[];
  activeConversationId: number;
  onSelectConversation: (id: number) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  conversations,
  activeConversationId,
  onSelectConversation,
}) => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const tabs = ["All", "Scheduled", "Broadcast"];

  const filteredConversations = useMemo(() => {
    if (!searchQuery) {
      return conversations;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    return conversations.filter((conversation) =>
      conversation.name.toLowerCase().includes(lowerCaseQuery)
    );
  }, [conversations, searchQuery]);
  return (
    <aside className="w-[360px] bg-[#F7F7F9] flex flex-col h-full border-r border-gray-200">
      <LeftHeader />
      <div className="p-5 flex flex-col space-y-4">
        <button className="w-fit flex justify-between items-center bg-gradient-to-b from-[#D92CC1] to-[#4D72F8] p-2 text-sm gap-4 rounded-full text-white shadow-sm border-none">
          <span>All Numbers</span>
          <FaChevronDown />
        </button>
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white pl-12 pr-4 py-2.5 rounded-full border border-gray-100 shadow-md focus:ring-2 focus:ring-purple-300 focus:outline-none transition-shadow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex p-1 gap-2 rounded-full w-max bg-gray-100">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return isActive ? (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 px-5 text-sm font-semibold rounded-full transition-all duration-300
                       bg-gradient-to-r from-[#D92CC1] to-[#4D72F8] text-white shadow-md"
              >
                {tab}
              </button>
            ) : (
              <div
                key={tab}
                className="flex-1 rounded-full p-[2px] bg-gradient-to-r from-[#D92CC1] to-[#4D72F8]"
              >
                <button
                  onClick={() => setActiveTab(tab)}
                  className="w-full py-2 px-5 text-sm font-semibold rounded-full transition-all duration-300
                         bg-white text-gray-600 hover:bg-gray-50"
                >
                  {tab}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-3 space-y-2 ">
        {filteredConversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeConversationId}
            onClick={() => onSelectConversation(conv.id)}
          />
        ))}

        {searchQuery && filteredConversations.length === 0 && (
          <p className="text-center text-gray-500 text-sm mt-4">
            No conversations found.
          </p>
        )}
      </div>
    </aside>
  );
};

export default LeftSidebar;
