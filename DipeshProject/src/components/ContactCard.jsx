import { MdDelete } from "react-icons/md";

const ContactCard = ({ contact }) => {
  const { name, email } = contact;

  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse p-2 bg-slate-400 rounded-md m-2">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {name}
        </p>
        <p className="text-sm text-gray-900 truncate dark:text-gray-400">
          {email}
        </p>
      </div>
      <MdDelete />
    </div>
  );
};

export default ContactCard;
