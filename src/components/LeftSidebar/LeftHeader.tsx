import { LuPhone } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";

const LeftHeader = () => {
  return (
    <div className="p-6 border-b border-gray-200 flex items-center justify-end text-gray-500">
      <div className="flex items-center space-x-4">
        <MdOutlineMessage className="w-7 h-7 text-[#4D72F8]" />
        <LuPhone className="w-7 h-7" />
      </div>
    </div>
  );
};

export default LeftHeader;
