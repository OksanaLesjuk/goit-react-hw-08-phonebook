import React, { useState } from 'react';
import { useFormik } from 'formik';


const FormRegister = ({ registration }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const formik = useFormik({
        initialValues: {

            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        onSubmit: (values, { setFieldError }) => {
            if (values.password.length < 8) {
                setFieldError('password', 'Password must contain at least 8 characters');
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(values.password)) {
                setFieldError('password', 'Password must contain both letters and numbers');
            } else if (values.password !== values.confirmPassword) {
                setFieldError('confirmPassword', 'Passwords do not match');
                setPasswordMismatch(true);
            } else {
                registration({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                });
                formik.resetForm();
                setPasswordMismatch(false);
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>

            <div>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="User Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    autoComplete="off"
                    required

                />
                <p>Fill out, so we know how to address you</p>
            </div>



            <div>  <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                autoComplete="off"
                required
            />
                <p>Use it as a login to access your personal account</p></div>

            <div>
                <div>
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="new-password"
                        required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide Password' : 'Show Password'}
                    </button>

                </div>
                <p>The password must be at least 8 characters long. It can include Latin letters and numbers</p>
            </div>

            <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
                required
            />


            {formik.errors.password && formik.touched.password ? (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
            {passwordMismatch && (
                <div style={{ color: 'red' }}>Passwords do not match</div>
            )}

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default FormRegister