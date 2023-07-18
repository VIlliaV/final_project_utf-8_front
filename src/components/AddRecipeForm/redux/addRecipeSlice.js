import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import {
  getCategories,
  getIngredients,
  addIngredientRecipe,
  addСategory,
  addTime,
  addAbout,
  addTitle,
} from './AddRecipreOperation';

const initialState = {
  // documents: URL
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
    addReciepe: (state, action) => {
      state.ingredients = [...state.ingredients, ...action.payload];
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
      .addCase(addAbout.fulfilled, (state, action) => {
        state.description = action.payload;
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
      .addCase(addIngredientRecipe.fulfilled, (state, action) => {
        console.log(state.ingredients);
        console.log(action.payload);
        state.ingredients = action.payload;
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
  whitelist: [],
};

export const AddrecipeReducer = persistReducer(persistConfig, recipeSlice.reducer);

export const { addReciepe } = recipeSlice.actions;
