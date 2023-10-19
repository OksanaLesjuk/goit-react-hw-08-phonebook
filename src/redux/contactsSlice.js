import { createSlice } from "@reduxjs/toolkit";
import { deleteContacts, addContacts, fetchContacts } from './operations'

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {

        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(addContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            },
            )
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)

            },)
            .addMatcher(action => action.type.endsWith('pending'), handlePending)
            .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
    }
})



export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;