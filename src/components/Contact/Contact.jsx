import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { deleteContacts } from 'redux/operations';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete-contact"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Box style={{ display: 'flex', width: '250px' }}>
        <ListItemAvatar>
          <Avatar>
            <ContactPageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={` ${contact.name}`} />
      </Box>

      <Box style={{ display: 'flex', width: '250px' }}>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<a href={`tel:+38${contact.number}`}>+38{contact.number}</a>}
        />
      </Box>
    </ListItem>
  );
};

export default Contact;
