import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

const RightHeader = () => {
  return (
    <header className="p-6 border-b border-gray-200 flex items-center justify-end space-x-2 text-gray-500">
      <button className="hover:text-purple-600" aria-label="Help">
        <FaRegCircleQuestion className="w-6 h-6" />
      </button>
      <button className="hover:text-purple-600" aria-label="Settings">
        <IoIosSettings className="w-6 h-6" />
      </button>
    </header>
  );
};

export default RightHeader;
