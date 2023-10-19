import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";




//якщо без локалсторадж і персіст в тч для роботи з бекендом 
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});


//якщо треба локалсторадж

// export const reducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// })
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['contacts']
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({ reducer: persistedReducer });
// export const persistor = persistStore(store)
