import FormLogin from 'components/FormLogin/FormLogin'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <> <FormLogin />
            <NavLink to="/register">Sign up</NavLink></>

    )
}

export default Login