
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';


const FormLogin = ({ loginUser }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            style={{ width: '600px', marginLeft: 'auto', marginRight: 'auto' }}  >

            <TextField
                id="outlined-email"
                name="email"
                type="email"
                title="email"
                label="Email"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                autoComplete="username"
                margin="normal"
                required
            />



            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="current-password"
                    name="password"

                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}

                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>



            <Button type="submit" style={{ marginLeft: 'auto', display: 'block' }}>Log In</Button>

        </Box >
    );
};

export default FormLogin