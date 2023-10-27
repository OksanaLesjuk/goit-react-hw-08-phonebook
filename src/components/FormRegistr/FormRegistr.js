import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';



const FormRegister = ({ registration }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                console.log('valuesRegistr :>> ', values);
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
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}  >


            <Box>
                <Box
                    display="flex"
                    flexDirection='row'
                    flexWrap='wrap'
                    gap='20px'
                    alignItems='center'
                >
                    <TextField
                        id="outlined-name"
                        name="name"
                        type="text"
                        label="User Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        autoComplete="off"
                        margin="normal"
                        style={{ width: '360px' }}
                        required

                    />
                    <Typography variant="caption">Fill out, so we know how to address you.</Typography>
                </Box>



                <Box
                    display="flex"
                    flexDirection='row'
                    flexWrap='wrap'
                    gap='20px'
                    alignItems='center'
                >
                    <TextField
                        id="outlined-email"
                        name="email"
                        type="email"
                        title="email"
                        label="Email"
                        style={{ width: '360px' }}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        autoComplete="username"
                        margin="normal"
                        required
                    />
                    <Typography variant="caption">Use it as a login to access your personal account.</Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection='row'
                    flexWrap='wrap'
                    gap='20px'
                    alignItems='center'>

                    <FormControl variant="outlined" margin="normal">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="new-password"
                            name="password"
                            style={{ width: '360px' }}
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



                    <Typography variant="caption">The password must be at least 8 characters long. It can include Latin letters and numbers.</Typography>
                </Box>

                <FormControl variant="outlined" margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        name="confirmPassword"
                        style={{ width: '360px' }}
                        id="outlined-adornment-confirm-password"
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
                        label="Confirm Password"
                    />
                </FormControl>



                {formik.errors.password && formik.touched.password ? (
                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                ) : null}
                {passwordMismatch && (
                    <div style={{ color: 'red' }}>Passwords do not match</div>
                )}
            </Box>

            <Button style={{ fontSize: '18px' }} type="submit">Sign Up</Button>
        </Box>
    );
};

export default FormRegister