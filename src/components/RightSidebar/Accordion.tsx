import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <h3 className="font-bold text-gray-800">{title}</h3>
        <FaChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children && <div className="pb-4">{children}</div>}
      </div>
    </div>
  );
};
export default Accordion;
