
import { useFormik } from 'formik';



const FormLogin = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));

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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                required
            />

            <input
                id="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            <button type="submit">Sign In</button>

        </form>
    );
};

export default FormLogin