import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


export const signUpUser = createAsyncThunk(
    "user/signUpUser",
    async (user, thunkAPI) => {
        console.log(user)
        try {
            const response = await axios.post("/users/signup", user);
            console.log('response.data :>> ', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name: name, number: phone });
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
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);