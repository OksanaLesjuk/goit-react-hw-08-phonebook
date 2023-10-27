import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  ContactInput,
  ContactsFormButton,
} from '../ContactForm/ContactForm.styled';

import React from 'react';
// import { getContacts } from 'redux/selectors';
import { updateContacts } from 'redux/operations';
import { Box, ButtonGroup, FormControl, InputLabel } from '@mui/material';

export const ModeContactForm = ({ contact, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();
  //   const { contacts } = useSelector(getContacts);

  const handleInput = e => {
    if (e.target.name === 'name') {
      setName(e.target.value.trim());
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value.trim());
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const dataForm = { name: name, number: number };
    dispatch(updateContacts({ id: contact.id, dataForm }));
    onClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitForm}
      display="flex"
      flexDirection="column"
      gap="30px"

      //   sx={{
      //     width: 100,
      //   }}
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="contact-name-input-md">
          Name
        </InputLabel>

        <ContactInput
          id="contact-name-input-md"
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              width: '100%',
            },
          }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink htmlFor="contact-number-input-md">
          Number
        </InputLabel>
        <ContactInput
          id="contact-number-input-md"
          onChange={handleInput}
          value={number}
          type="tel"
          name="number"
          placeholder="Enter number 0671111111 "
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              width: '100%',
            },
          }}
        />
      </FormControl>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        <ContactsFormButton variant="outlined" type="button" onClick={onClose}>
          Cancel
        </ContactsFormButton>
        <ContactsFormButton variant="outlined" type="submit">
          Update contact
        </ContactsFormButton>
      </Box>
    </Box>
  );
};

export default ModeContactForm;
