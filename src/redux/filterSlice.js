import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    reducers: {
        filterContacts: {
            reducer(state, action) {

                return { filter: action.payload }
            }
        }

    }
})

export const { filterContacts } = filterSlice.actions
export const filterReducer = filterSlice.reducer;