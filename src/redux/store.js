import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { authPersistedReducer } from './auth/authSlice';
import shoppingListSlice from './shoppingList/shoppingListSlice';

const rootReducer = combineReducers({
    auth: authPersistedReducer,
    shoppingList: shoppingListSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
