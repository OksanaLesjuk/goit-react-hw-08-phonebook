import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./operations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,

};

const usersSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.user = payload.user;
                state.token = payload.token;
            },)
    }

})

export const { signUpUsers } = usersSlice.actions;
export const userReducer = usersSlice.reducer;