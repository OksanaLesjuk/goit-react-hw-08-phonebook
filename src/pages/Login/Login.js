import FormLogin from 'components/FormLogin/FormLogin'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { signInUser } from 'redux/operations';
import { getToken } from 'redux/selectors';

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
            <p>If you don't have an account yet

            </p>
            <NavLink to="/register">Sign up</NavLink></>

    )
}

export default Login