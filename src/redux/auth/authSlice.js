import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import {
    signupUser,
    loginUser,
    logoutUser,
    // fetchCurrentUser
} from './authOperations';

const initialState = {
    user: { name: null, email: null, avatarURL: null, shoppingList: [] },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoginFailed: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(signupUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoginFailed = false;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.isLoginFailed = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoginFailed = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoginFailed = true;
            })
            .addCase(logoutUser.fulfilled, state => {
                state.user = initialState.user;
                state.token = null;
                state.isLoggedIn = false;
            });
    },
});

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
};

export const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);
