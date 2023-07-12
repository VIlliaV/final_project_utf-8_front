import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',

  initialState: {
    shoppingListIngredients: [
      // {
      //   _id: { $oid: '' },
      //   name: '',
      //   desc: '',
      //   img: '',
      // },
    ],
  },

  reducers: {
    shoppingListGet(state, action) {
      state.shoppingListState = action.payload.value;
    },
  },
});

export const { shoppingListGet } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
