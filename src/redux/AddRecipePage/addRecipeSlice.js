import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import { getCategories, getIngredients, addRecipe, changeStatus } from './AddRecipreOperation';

const initialState = {
  allIngredients: [],
  allCategories: null,
  createRecipe: false,
};

const recipeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })

      .addCase(addRecipe.pending, (state, action) => {
        state.createRecipe = false;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.createRecipe = true;
        // state.createRecipe = false;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.createRecipe = false;
      })

      .addCase(getIngredients.fulfilled, (state, action) => {
        state.allIngredients = action.payload;
      })
      .addCase(changeStatus.fulfilled, (state, action) => {
        state.createRecipe = false;
      })
      .addDefaultCase(state => state);
  },
});

const persistConfig = {
  key: 'add',

  version: 1,
  storage,
  whitelist: [],
};

export const AddrecipeReducer = persistReducer(persistConfig, recipeSlice.reducer);
