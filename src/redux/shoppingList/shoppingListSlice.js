import { createSlice } from '@reduxjs/toolkit';
import { shoppingListGet, shoppingListAdd, shoppingListRemove } from './shoppingListOperations';

// & Fulfilled
const getShoppingListFulfilled = (state, action) => {
  handleFulfilled(state);
  // console.log('getFulfilled >> action.payload:', action.payload);

  state.shoppingListSliceState = action.payload;
};

const addFulfilled = (state, action) => {
  handleFulfilled(state);
  // console.log('addFulfilled >> action.payload:', action.payload);
  state.shoppingListSliceState.push(action.payload);
};

const removeFulfilled = (state, action) => {
  handleFulfilled(state);
  const index = state.shoppingListSliceState.findIndex(ingredient => {
    return ingredient.uniqId === action.payload;
  });
  console.log('index >> index:', index);

  state.shoppingListSliceState.splice(index, 1);
};

// & identic in all "fulFilled" states:
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

// & identic in all "pending"
const handlePending = state => {
  state.isLoading = true;
};

// & identic in all "rejected"
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  // state.error = action.error.message;
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',

  initialState: {
    shoppingListSliceState: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    // toggleIngredient: (state, action) => {
    //   const ingredientUniqId = action.payload._id;
    //   console.log('action.payload:', action.payload);
    //   const index = state.shoppingListSliceState.indexOf(ingredientUniqId);
    //   console.log('index:', index);
    //   if (index !== -1) {
    //     state.shoppingListSliceState.splice(index, 1); // Видаляємо інгредієнт зі списку, якщо він вже присутній
    //   } else {
    //     state.shoppingListSliceState.push(action.payload); // Додаємо інгредієнт до списку, якщо його немає
    //   }
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(shoppingListGet.pending, handlePending)
      .addCase(shoppingListGet.fulfilled, getShoppingListFulfilled)
      .addCase(shoppingListGet.rejected, handleRejected)

      .addCase(shoppingListAdd.pending, handlePending)
      .addCase(shoppingListAdd.fulfilled, addFulfilled)
      .addCase(shoppingListAdd.rejected, handleRejected)

      .addCase(shoppingListRemove.pending, handlePending)
      .addCase(shoppingListRemove.fulfilled, removeFulfilled)
      .addCase(shoppingListRemove.rejected, handleRejected);
  },
});

// export const { toggleIngredient } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
