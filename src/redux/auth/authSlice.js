import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import { signupUser, loginUser, logoutUser, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
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
      .addCase(signupUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoginFailed = false;
      })
      .addCase(signupUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoginFailed = true;
      })
      .addCase(loginUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoginFailed = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoginFailed = true;
      })
      .addCase(logoutUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;

        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addDefaultCase(state => state);
  },
});

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);
