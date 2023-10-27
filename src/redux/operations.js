import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const myAxios = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
})

const setToken = (token) => {
    myAxios.defaults.headers.common['Authorization'] = token;
    console.log('Token set:', token);
};


export const deleteToken = (token) => {
    delete myAxios.defaults.headers.common['Authorization']

};
// const setToken = (token) => myAxios.defaults.headers.common['Authorization'] = token;


export const signUpUser = createAsyncThunk(
    "authUser/signUpUser",
    async (user, thunkAPI) => {

        try {
            const { data } = await myAxios.post("/users/signup", user);
            setToken(data.token)
            return data;
        } catch (e) {

            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const getStatusUser = createAsyncThunk(
    "authUser/getStatusUser",
    async (_, thunkAPI) => {

        const state = thunkAPI.getState();


        setToken(state.authUser.token);
        console.log('Sending request with token getStatusUser:', myAxios.defaults.headers.common['Authorization']);
        try {
            const { data } = await myAxios.get("/users/current");
            console.log('datagetStatusUser :>> ', data);
            return data;
        } catch (e) {

            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const signInUser = createAsyncThunk(
    "authUser/signInUser",
    async (user, thunkAPI) => {
        console.log('Sending request with token signInUser:', myAxios.defaults.headers.common['Authorization']);
        try {
            const { data } = await myAxios.post("/users/login", user);
            setToken(data.token)
            return data;
        } catch (e) {

            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logOutUser = createAsyncThunk(
    "authUser/logOutUser",
    async (_, thunkAPI) => {
        console.log('Sending request with token:', myAxios.defaults.headers.common['Authorization']);
        try {

            const { data } = await myAxios.post("/users/logout");

            return data;
        } catch (e) {
            console.error("Logout error:", e.response.data);

            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();


        setToken(state.authUser.token);
        console.log('Sending request with token fetchContacts:  ', myAxios.defaults.headers.common['Authorization']);
        try {
            const response = await myAxios.get("/contacts");
            console.log('response.data.refresh :>> ', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({ name, number }, thunkAPI) => {
        console.log('Sending request with token addContacts:', myAxios.defaults.headers.common['Authorization']);
        try {
            const response = await myAxios.post("/contacts", { name: name, number: number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactsId, thunkAPI) => {
        try {
            const response = await myAxios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateContacts = createAsyncThunk(
    "contacts/updateContacts",
    async ({ id, dataForm: { name, number } }, thunkAPI) => {
        try {
            const response = await myAxios.patch(`/contacts/${id}`, { name: name, number: number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);