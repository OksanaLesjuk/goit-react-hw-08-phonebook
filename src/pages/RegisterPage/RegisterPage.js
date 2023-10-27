import FormRegister from 'components/FormRegistr/FormRegistr'
import { useDispatch } from 'react-redux'
import { signUpUser } from 'redux/operations';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link as MuiLink, Typography } from '@mui/material';



const Register = () => {

    const dispatch = useDispatch();

    const registration = (params) => {


        dispatch(signUpUser(params))

    }


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