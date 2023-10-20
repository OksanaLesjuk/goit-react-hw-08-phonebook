// import { useState, useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Layout } from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';

export const App = () => {
  // const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
    /* <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <ContactList />
      </div> */
  );
};
