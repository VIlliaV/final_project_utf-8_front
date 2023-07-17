import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import { getCategories, getIngredients, addСategory, addTime } from './AddRecipreOperation';

const initialState = {
  // documents: URL
  title: null,
  description: null,
  category: null,
  time: null,
  ingredients: { id: null, name: null, measure: null },
  instructions: null,
  allingredients: { _id: null, name: null, desc: null, img: null },
};

const recipeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.allingredients = action.payload;
      })
      // .addCase(addСategory.fulfilled, (state, action) => {
      //   state.category = action.payload;
      // })
      // .addCase(addTime.fulfilled, (state, action) => {
      //   state.time = action.payload;
      // })

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
