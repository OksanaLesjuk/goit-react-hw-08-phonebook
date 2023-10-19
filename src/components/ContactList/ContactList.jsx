import Contact from 'components/Contact/Contact';
import { ContactListStyling } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const filteredContacts = (filter, contacts) => {
    if (!filter) return;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filteredContacts(filter, contacts);

  return (
    <ContactListStyling>
      {(visibleContacts ?? contacts).map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ContactListStyling>
  );
};

export default ContactList;
