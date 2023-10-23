import FormRegister from 'components/FormRegistr/FormRegistr'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpUser } from 'redux/operations';
import { getToken, getUserLoginStatus } from 'redux/selectors';




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
            <p>If you are already registered</p>
            <NavLink to="/login">Log in</NavLink>
        </>
    )
}

export default Register