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
  addImage,
} from './AddRecipreOperation';

const initialState = {
  documents: null,
  title: null,
  description: null,
  category: null,
  time: null,
  ingredients: [],
  instructions: null,
  allIngredients: { _id: null, name: null, desc: null, img: null },
  allCategories: null,
};

const recipeSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    // addReciepe: (state, action) => {
    //   state.ingredients = [...state.ingredients, ...action.payload];
    // },
    addRecipePhoto: (state, action) => {
      state.documents = action.payload;
    }
  },

  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(addTitle.fulfilled, (state, action) => {
        state.title = action.payload;
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
      .addCase(addImage.fulfilled, (state, action) => {
        console.log(action);
        state.documents = action;
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

export const { addReciepe } = recipeSlice.actions;
