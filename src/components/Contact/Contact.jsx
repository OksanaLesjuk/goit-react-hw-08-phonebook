import { useDispatch } from 'react-redux';
import { ContactsItem, DeleteButton } from './Contact.styled';

import { deleteContacts } from 'redux/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <ContactsItem>
      <li>
        {contact.name}: {contact.phone}
      </li>
      <DeleteButton onClick={handleDelete} type="button">
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};

export default Contact;
