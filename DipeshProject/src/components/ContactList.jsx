import { MdDelete } from "react-icons/md";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div className="rounded">
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700  ">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
