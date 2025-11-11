import type { Contact } from "../../types";
const ContactItem: React.FC<{ contact: Contact }> = ({ contact }) => (
  <div className="flex items-center py-2 ">
    <div className="rounded-full p-[2px] bg-gradient-to-r from-[#D92CC1] to-[#4D72F8] mr-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-purple-600 font-bold bg-white">
        {contact.avatar}
      </div>
    </div>
    <div>
      <p className="font-semibold text-gray-700">{contact.name}</p>
      <p className="text-sm text-gray-500">{contact.phone}</p>
    </div>
  </div>
);

export default ContactItem;
