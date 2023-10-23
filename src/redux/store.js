import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authUserReducer } from "./usersSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'




//якщо без локалсторадж і персіст в тч для роботи з бекендом 
// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//         user: userReducer
//     },
// });


//якщо треба локалсторадж


const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['token']
}

const authPersistedReducer = persistReducer(persistConfig, authUserReducer)



export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    authUser: authPersistedReducer,

})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store)
