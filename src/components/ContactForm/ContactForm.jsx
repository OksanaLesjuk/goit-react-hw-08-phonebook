import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ContactInput, ContactsFormButton } from './ContactForm.styled';

import React from 'react';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';
import { Box, FormControl, InputLabel } from '@mui/material';

export const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

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
    console.log('submit :>> ');

    const dataForm = { name: name, number: number };

    const existingContact = contacts.find(
      contact => contact.name === dataForm.name
    );
    if (existingContact) {
      alert(`${dataForm.name} is already in contacts`);
    } else {
      dispatch(addContacts(dataForm));
      setName('');
      setNumber('');
      onClose();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitForm}
      display="flex"
      flexDirection="column"
      gap="30px"
      width="300px"
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="contact-name-input">
          Name
        </InputLabel>

        <ContactInput
          id="contact-name-input"
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
              width: '300px',
            },
          }}
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel shrink htmlFor="contact-number-input">
          Number
        </InputLabel>
        <ContactInput
          id="contact-number-input"
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
              width: '500px',
            },
          }}
        />
      </FormControl>
      <ContactsFormButton variant="outlined" type="submit">
        Add contact
      </ContactsFormButton>
    </Box>
  );
};
