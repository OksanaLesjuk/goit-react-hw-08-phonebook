import FormRegister from 'components/FormRegistr/FormRegistr'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from 'redux/operations';



const Register = () => {
    // const registration = async (params) => {
    //     try {
    //         const data = await signUpUser(params);
    //         console.log('data :>> ', data);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    const [errorMessage, setErrorMessage] = useState(null);


    const dispatch = useDispatch()
    const registration = (params) => {
        console.log('params :>> ', params);
        const { name, email, password } = params;

        dispatch(signUpUser({ name, email, password }))
            .unwrap()
            .then(() => setErrorMessage(null))
            .catch(e => {
                console.log(e);
                setErrorMessage(e);
            });
    }

    return (
        <FormRegister registration={registration} />
    )
}

export default Register