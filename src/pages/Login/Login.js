import { Typography } from '@mui/material';
import FormLogin from 'components/FormLogin/FormLogin'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { signInUser } from 'redux/operations';
import { getToken } from 'redux/selectors';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(getToken);
    const navigate = useNavigate();

    const loginUser = (params) => {
        dispatch(signInUser(params))
    }

    useEffect(() => {
        isAuth && navigate('/contacts')
    }, [isAuth, navigate])

    return (
        <> <FormLogin loginUser={loginUser} />
            <Box variant="body2"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginLeft='auto'
                marginRight='auto'
                gap='10px'
                style={{ width: '500px' }}>
                <Typography>If you don't have an account yet

                </Typography>
                <MuiLink component={RouterLink} color="inherit" style={{ fontSize: '18px', cursor: 'pointer' }} to="/register">Sign up</MuiLink>
            </Box>
        </>

    )
}

export default Login