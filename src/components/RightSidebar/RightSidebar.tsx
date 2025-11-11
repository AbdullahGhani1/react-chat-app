import { useState, useMemo } from "react";
import type { Contact } from "../../types";
import { ALPHABET } from "../../constants/conversation";
import { FaPlus, FaSearch } from "react-icons/fa";
import Accordion from "./Accordion";
import ContactItem from "./ContactItem";
import RightHeader from "./RightHeader";

interface RightSidebarProps {
  contacts: { [key: string]: Contact[] };
}

const RightSidebar: React.FC<RightSidebarProps> = ({ contacts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredContacts = useMemo(() => {
    if (!searchQuery) {
      return contacts;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const newFilteredContacts: { [key: string]: Contact[] } = {};

    for (const [letter, contactList] of Object.entries(contacts)) {
      const filteredList = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(lowerCaseQuery)
      );

      if (filteredList.length > 0) {
        newFilteredContacts[letter] = filteredList;
      }
    }

    return newFilteredContacts;
  }, [contacts, searchQuery]);

  return (
    <aside className="w-[360px] bg-white flex flex-col h-full border-l border-gray-200">
      <RightHeader />
      <div className="p-5 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
          <button
            aria-label="Add new contact"
            className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-[#D92CC1] to-[#4D72F8] text-white rounded-full shadow-lg"
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Contact"
            className="w-full bg-white pl-12 pr-4 py-2.5 rounded-full border border-gray-100 shadow-md focus:ring-2 focus:ring-purple-300 focus:outline-none transition-shadow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto px-5 relative">
        <div className="absolute right-0 top-0 h-full flex flex-col justify-center items-center space-y-0.5 pr-1">
          {ALPHABET.map((letter) => (
            <a
              key={letter}
              href={`#contact-${letter}`}
              className="text-xs text-gray-400 hover:text-purple-600"
            >
              {letter}
            </a>
          ))}
        </div>
        <div className="pr-6">
          {Object.entries(filteredContacts).map(
            ([letter, contactList]: [string, Contact[]]) => (
              <div key={letter} id={`contact-${letter}`} className="mb-4">
                <p className="font-bold text-purple-600 mb-2">{letter}</p>
                {contactList.map((contact) => (
                  <ContactItem key={contact.id} contact={contact} />
                ))}
              </div>
            )
          )}

          {searchQuery && Object.keys(filteredContacts).length === 0 && (
            <p className="text-gray-500 text-sm text-center">
              No contacts found.
            </p>
          )}

          <Accordion title="Recent">
            <p className="text-gray-500 text-sm">No recent contacts.</p>
          </Accordion>
          <Accordion title="Favourites">
            <p className="text-gray-500 text-sm">No favourite contacts.</p>
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
