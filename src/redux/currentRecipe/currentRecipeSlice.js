import { createSlice } from '@reduxjs/toolkit';
import { currentRecipeGet } from './currentRecipeOperations';

const getRecipeFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.currentRecipeSliceState = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  // state.error = action.error.message;
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',

  initialState: {
    currentRecipeSliceState: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(currentRecipeGet.pending, handlePending)
      .addCase(currentRecipeGet.fulfilled, getRecipeFulfilled)
      .addCase(currentRecipeGet.rejected, handleRejected);
  },
});

export default shoppingListSlice.reducer;
