import { createSlice } from '@reduxjs/toolkit';

// {
//   _id: { $oid: '' },
//   name: '',
//   desc: '',
//   img: '',
// },

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingListIngredients: [],
  },
  reducers: {
    addIngredient(state, action) {
      const ingredient = action.payload;
      state.shoppingListIngredients.push(ingredient);
    },
    removeIngredient(state, action) {
      const ingredientId = action.payload;
      state.shoppingListIngredients = state.shoppingListIngredients.filter(
        ingredient => ingredient._id !== ingredientId
      );
    },
  },
});

export const { getShoppingList, addIngredient, removeIngredient } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
