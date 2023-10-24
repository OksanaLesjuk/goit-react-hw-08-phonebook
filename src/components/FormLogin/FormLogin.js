
import { useFormik } from 'formik';
import { useState } from 'react';


const FormLogin = ({ loginUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {

            loginUser({
                email: values.email,
                password: values.password,

            })

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>


            <input
                id="email"
                name="email"
                type="email"
                title="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                autoComplete="new-password"
                required
            />

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
                {/* <button
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button> */}
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                </button>
            </div>

            <button type="submit">Log In</button>

        </form>
    );
};

export default FormLogin