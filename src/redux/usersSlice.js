import { createSlice } from "@reduxjs/toolkit";
import { getStatusUser, logOutUser, signInUser, signUpUser } from "./operations";


const initialState = {
    user: { name: null, email: null },
    token: null,


};

const handleAuthFulfilled = (state, { payload }) => {

    state.user = payload.user;
    state.token = payload.token;

}

const usersSlice = createSlice({
    name: 'authUser',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.fulfilled, handleAuthFulfilled)
            .addCase(getStatusUser.fulfilled, (state, { payload }) => {

                state.user = payload;


            }
            )
            .addCase(signInUser.fulfilled, handleAuthFulfilled)
            .addCase(logOutUser.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;


            })
    }

})

export const { signUpUsers, signInUsers, logOutUsers } = usersSlice.actions;
export const authUserReducer = usersSlice.reducer;