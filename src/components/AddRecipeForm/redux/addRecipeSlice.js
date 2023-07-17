import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import { getCategories } from './AddRecipreOperation';

const initialState = {
  // documents: URL
  title: null,
  description: null,
  category: null,
  time: null,
  ingredients: { id: null, name: null, measure: null },
  instructions: null,
};

const recipeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isRefreshing = true;
      })
      // .addCase(loginUser.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      //   state.errorMessage = null;
      // })
      // .addCase(loginUser.rejected, (state, action) => {
      //   state.isRefreshing = false;
      //   state.errorMessage = action.payload.response.data.message;
      // })
      .addDefaultCase(state => state);
  },
});

const persistConfig = {
  key: 'add',
  version: 1,
  storage,
  whitelist: ['token', 'isLoggedIn', 'isThemeToggle'],
};

export const AddrecipeReducer = persistReducer(persistConfig, recipeSlice.reducer);
