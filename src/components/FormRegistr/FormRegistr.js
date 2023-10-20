import React from 'react';
import { useFormik } from 'formik';

const FormRegister = ({ registration }) => {
    const formik = useFormik({
        initialValues: {

            name: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            registration({
                name: values.name,
                email: values.email,
                password: values.password,
            });
            console.log('values :>> ', values);


        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>

            <input
                id="name"
                name="name"
                type="text"
                placeholder="User Name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />



            <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <input
                id="password"
                type='password'
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default FormRegister