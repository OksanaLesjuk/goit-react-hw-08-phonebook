
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FormLogin from 'components/FormLogin/FormLogin'
import { signInUser } from 'redux/operations';


const LoginPage = () => {
    const dispatch = useDispatch();

    const loginUser = (params) => {
        dispatch(signInUser(params))
    }



    return (
        <> <FormLogin loginUser={loginUser} />
            <Box variant="body2"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                marginLeft='auto'
                marginRight='auto'
                gap='10px'
                style={{ width: '400px' }}>
                <Typography>If you don't have an account yet

                </Typography>
                <MuiLink component={RouterLink} color="inherit" style={{ fontSize: '18px', cursor: 'pointer' }} to="/register">Sign up</MuiLink>
            </Box>
        </>

    )
}

export default LoginPage