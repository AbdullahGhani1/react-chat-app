import { FaPaperclip, FaRegSmile } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";

import { RiSendPlaneFill } from "react-icons/ri";

const ChatBar = () => {
  return (
    <footer className="flex items-center bg-white p-2  border-gray-200 shadow-sm z-10">
      <button
        className="pl-2 text-gray-500 hover:text-purple-600"
        aria-label="Attach File"
      >
        <FaPaperclip />
      </button>
      <button
        className="pl-2 text-gray-500 hover:text-purple-600"
        aria-label="Date"
      >
        <CgCalendarDates />
      </button>
      <div className="flex-grow flex items-center mx-2 rounded-sm bg-gray-50">
        <input
          type="text"
          placeholder="Type Message here"
          className="flex-grow px-4 py-2 focus:outline-none text-gray-700 bg-transparent"
        />
        <button
          className="p-2 text-gray-500 hover:text-purple-600"
          aria-label="emoji"
        >
          <FaRegSmile />
        </button>
      </div>
      <button
        type="button"
        aria-label="Send Message"
        className="p-2 rounded-full bg-gradient-to-b from-[#D92CC1] to-[#4D72F8] text-white shadow-md hover:shadow-lg transition-shadow"
      >
        <RiSendPlaneFill className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};

export default ChatBar;
