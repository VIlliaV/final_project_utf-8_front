import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

import {
  signupUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
  themeToggle,
  updateUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  isLoggedIn: false,
  isRefreshing: false,
  isThemeToggle: false,
  errorMessage: null,
  emailMessage: null,
  verificationError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrorMessage: state => {
      state.errorMessage = null;
    },
    clearVerificationError: state => {
      state.verificationError = false;
    },
    clearEmailMessage: state => {
      state.emailMessage = null;
    },
    setEmailMessage: (state,action) => {
      state.emailMessage = action.payload;
    }
  },

  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.isRefreshing = true;
        state.errorMessage = null;
        state.emailMessage = null;
        state.verificationError = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.emailMessage = 'Verification code was sent to your email, please check.';
        state.errorMessage = null;
        state.verificationError = false;
        localStorage.removeItem('authInitialValues');
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.errorMessage = action.payload;
        if (action.payload === 'Please check your email inbox.' || state.emailMessage) {
          state.verificationError = true;
        }
      })
      .addCase(loginUser.pending, state => {
        state.isRefreshing = true;
        state.errorMessage = null;
        state.verificationError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.errorMessage = null;
        state.verificationError = false;
        localStorage.removeItem('authInitialValues');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.errorMessage = action.payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.errorMessage = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.errorMessage = action.payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.errorMessage = null;
        state.emailMessage = null;
        state.verificationError = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.errorMessage = null;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user.name = action.payload.name;
        if (action.payload.avatarURL) {
          state.user.avatarURL = action.payload.avatarURL;
        }
        toast.success('New user information sent');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error('Ups, something went wrong, try again later');
      })
      .addCase(themeToggle.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(themeToggle.fulfilled, (state, action) => {
        state.isRefreshing = false;

        state.isThemeToggle = action.payload.isThemeToggle;
      })
      .addCase(themeToggle.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addDefaultCase(state => state);
  },
});

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['isLoggedIn', 'isThemeToggle'],
};

export const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const { clearErrorMessage, clearVerificationError, clearEmailMessage, setEmailMessage } = authSlice.actions;