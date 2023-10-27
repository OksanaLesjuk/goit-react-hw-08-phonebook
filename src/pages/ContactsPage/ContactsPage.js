import { Button, Typography } from '@mui/material';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import AddContactModal from 'components/AddContactModal/AddContactModal';


const Contacts = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(getContacts);

    const handleAddContactModal = () => {
        setOpen(true);
    };
    const handleCloseModal = () => setOpen(false);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <Button variant="contained" sx={{ mb: '40px' }} type='button' onClick={handleAddContactModal}>Add new contact</Button>
            {/* <ContactForm /> */}
            <Typography variant='h3' mb={'30px'} sx={{ color: 'darkblue' }}>Contacts</Typography>
            <Filter />
            {isLoading && <CircularProgress disableShrink />}
            {error && <b>{error}</b>}
            <ContactList />
            <AddContactModal open={open} onClose={handleCloseModal} />
        </div >
    )
}

export default Contacts