import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import {
  getCategories,
  getIngredients,
  addPreparation,
  addСategory,
  addTime,
  addAbout,
  addTitle,
  addRecipe,
  changeStatus,
} from './AddRecipreOperation';

const initialState = {
  allIngredients: { _id: null, name: null, desc: null, img: null },
  allCategories: null,
  createRecipe: false,
};

const recipeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addRecipePhoto: (state, action) => {
      state.documents = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(addTitle.fulfilled, (state, action) => {
        state.title = action.payload;
      })
      .addCase(addRecipe.pending, (state, action) => {
        state.createRecipe = false;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.createRecipe = true;
        console.log(action);
        // state.createRecipe = false;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.createRecipe = false;
      })
      .addCase(addAbout.fulfilled, (state, action) => {
        state.description = action.payload;
      })
      .addCase(addPreparation.fulfilled, (state, action) => {
        state.instructions = action.payload;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.allIngredients = action.payload;
      })
      .addCase(addСategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(addTime.fulfilled, (state, action) => {
        state.time = action.payload;
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

export const { addRecipePhoto } = recipeSlice.actions;
