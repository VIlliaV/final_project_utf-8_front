import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, photo: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoginFailed: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {}
});


const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);


