import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',

  initialState: {
    shoppingListIngredients: [],
  },

  reducers: {
    shoppingListGet(state, action) {
      state.shoppingListState = action.payload.value;
    },
  },
});

export const { shoppingListGet } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
