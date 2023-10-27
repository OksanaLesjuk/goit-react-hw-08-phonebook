import { useDispatch } from 'react-redux';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { deleteContacts } from 'redux/operations';
import {
  Avatar,
  Box,
  ButtonGroup,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

import ContactModal from 'components/ContactModal/ContactModal';

const Contact = ({ contact }) => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));

  const handleMode = () => {
    setOpen(true);
  };

  return (
    <ListItem
      secondaryAction={
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <IconButton edge="end" aria-label="mode-contact" onClick={handleMode}>
            <ModeIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete-contact"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
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
      <ContactModal contact={contact} open={open} onClose={handleCloseModal} />
    </ListItem>
  );
};

export default Contact;
