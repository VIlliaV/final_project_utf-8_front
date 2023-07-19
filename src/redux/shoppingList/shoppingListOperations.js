import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

function checkToken(thunkAPI) {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
}

//* FETCH: get current shopping list
export const shoppingListGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
  checkToken(thunkAPI);

  try {
    const response = await axiosInstance.get('/shopping-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: add to shopping list
export const shoppingListAdd = createAsyncThunk('shopping/add', async (addIngredient, thunkAPI) => {
  checkToken(thunkAPI);

  try {
    const {
      id: { _id: ingredientId },
      measure,
      uniqId,
      recipeId,
    } = addIngredient;

    const requestBody = {
      ingredientId,
      measure,
      uniqId,
      recipeId,
    };

    await axiosInstance.post(`/shopping-list`, requestBody);
    return addIngredient;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: remove from shopping list
export const shoppingListRemove = createAsyncThunk('shopping/remove', async (uniqId, thunkAPI) => {
  checkToken(thunkAPI);

  try {
    await axiosInstance.patch(`/shopping-list`, { uniqId });
    return uniqId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
