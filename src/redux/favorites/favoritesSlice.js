import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorites, deleteFavorite } from './favoritesOperations';

const favoritesSlice = createSlice({
  name: 'favorites',

  initialState: {
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
        state.error = null;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
        state.error = null;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.error = null;
      });
  },
});

export default favoritesSlice.reducer;
