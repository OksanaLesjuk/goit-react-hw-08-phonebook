import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Form, Input, ContactsFormButton } from './ContactForm.styled';

import React from 'react';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const handleInput = e => {
    if (e.target.name === 'name') setName(e.target.value.trim());
    if (e.target.name === 'phone') setPhone(e.target.value.trim());
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const dataForm = { name: name, phone: phone };
    const existingContact = contacts.find(
      contact => contact.name === dataForm.name
    );
    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }
    dispatch(addContacts(dataForm));

    setName('');
    setPhone('');
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        Name
        <Input
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          onChange={handleInput}
          value={phone}
          type="tel"
          name="phone"
          placeholder="Enter number XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <ContactsFormButton type="submit"> Add contact</ContactsFormButton>
    </Form>
  );
};
