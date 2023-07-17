// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

// // const setAuthHeader = token => {
// //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // };

// // FETCH: get current shopping list
// export const currentRecipeGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const { token } = state.auth;
//   if (token === null) {
//     return thunkAPI.rejectWithValue();
//   }
//   // setAuthHeader(token);

//   // if (state.shoppingList.shoppingListSliceState.length <= 0) {
//   // console.log('shoppingListSliceState.length <= 0');
//   try {
//     const response = await axios.get('/shopping-list');
//     return response.data; // [] - масив з бекенду (він не пустий)
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
//   // } else {
//   // console.log('shoppingListSliceState.length > 0!!!');
//   // return state.shoppingList.shoppingListSliceState; // масив з редакс-стор
//   // }
// });
