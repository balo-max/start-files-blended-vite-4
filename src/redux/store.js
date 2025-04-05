import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoSlice';
import filterReducer from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const todosPersistConfig = {
    key: 'todos',
    storage,
    whitelist: ['items'],
};

const todosPersistedReducer = persistReducer(todosPersistConfig, todosReducer);

export const store = configureStore({
    reducer: {
        todos: todosPersistedReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistor = persistStore(store);