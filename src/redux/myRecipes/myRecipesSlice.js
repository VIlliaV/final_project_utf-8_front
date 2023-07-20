import { createSlice } from '@reduxjs/toolkit';
import { fetchMyRecipes, deleteMyRecipes } from './myRecipesOperations';

const myRecipesSlice = createSlice({
  name: 'myRecipes',

  initialState: {
    myRecipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myRecipes = action.payload;
        state.error = null;
      })
      .addCase(fetchMyRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteMyRecipes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myRecipes = action.payload;
        state.error = null;
      })
      .addCase(deleteMyRecipes.rejected, (state, action) => {
        state.error = null;
      });
  },
});

export default myRecipesSlice.reducer;
