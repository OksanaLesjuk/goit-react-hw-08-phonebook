import React from 'react'
import { NavLinkSign } from './HomePage.styled'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const HomePage = () => {
    return (
        <>

            <NavLinkSign to="/login" >
                <ContactPhoneIcon fontSize='large' />
                Your contacts
            </NavLinkSign></>
    )
}

export default HomePage