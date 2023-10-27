import React from 'react'
import { NavLinkSign } from './HomePage.styled'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Typography } from '@mui/material';

const HomePage = () => {
    return (
        <>
            <Typography variant='body1' sx={{ fontSize: '60px', textAlign: 'center', marginBottom: '40px', color: 'gray' }}>Here you can record, save and edit personal contacts.</Typography>
            <NavLinkSign to="/login" >
                <ContactPhoneIcon fontSize='large' />
                Your contacts
            </NavLinkSign></>
    )
}

export default HomePage