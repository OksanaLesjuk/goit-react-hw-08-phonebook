import FormRegister from 'components/FormRegistr/FormRegistr'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { signUpUser } from 'redux/operations';
import { getToken } from 'redux/selectors';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link as MuiLink, Typography } from '@mui/material';



const Register = () => {
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registration = (params) => {


        dispatch(signUpUser(params))

    }
    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])

    return (

        <>
            <FormRegister registration={registration} />
            <Box variant="body2"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"

                gap='10px'
                style={{ width: '500px' }}>
                <Typography >If you are already registered</Typography>
                <MuiLink component={RouterLink} color="inherit" style={{ fontSize: '18px', cursor: 'pointer' }} to="/login">Log in</MuiLink>
            </Box>
        </>
    )
}

export default Register