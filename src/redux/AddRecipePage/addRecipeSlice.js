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
} from './AddRecipreOperation';

const initialState = {
  allIngredients: { _id: null, name: null, desc: null, img: null },
  allCategories: null,
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
        console.log(action);
        state.createRecipe = false;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.createRecipe = true;
        } else state.createRecipe = false;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        console.log(action);
        state.createRecipe = false;
        state.createRecipeErrorsMessage = action.payload;
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
