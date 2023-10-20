import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>

            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && <b>Loading contacts...</b>}
            {error && <b>{error}</b>}
            <ContactList />
        </div>
    )
}

export default Contacts