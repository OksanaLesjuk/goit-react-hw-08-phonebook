import { Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';

const Contacts = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>

            <ContactForm />
            <Typography variant='h3' mb={'30px'} sx={{ color: 'darkblue' }}>Contacts</Typography>
            <Filter />
            {isLoading && <CircularProgress disableShrink />}
            {error && <b>{error}</b>}
            <ContactList />
        </div >
    )
}

export default Contacts