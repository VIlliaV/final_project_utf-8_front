import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const axiosInstance = axios.create({
// baseURL: 'https://final-project-utf-8-backend.onrender.com/';
// })

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// instance.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem('accessToken');
//   config.headers.common.Authorization = `Bearer ${accessToken}`;
//   return config;
// })

// instance.interceptors.response.use(response => response, async (error) => {
//   if (error.response.status === 401) {
//     const refreshToken = localStorage.getItem('refreshToken');
//     try {
//       const { data } = await instance.post('/users/refresh', { refreshToken });
//       setAuthHeader(data.accessToken);
//       localStorage.setItem('refreshToken', refreshToken);
//       return instance(error.config);
//     } catch (error) {
//       return Promise.reject(error)
//     }
//   }
//   return Promise.reject(error);
// });

export const signupUser = createAsyncThunk('users/register', async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await axios.post('/users/register', {
      name,
      email,
      password,
    });
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    // setAuthHeader(response.data.accessToken);
    // localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.message)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


export const logoutUser = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const fetchCurrentUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  setAuthHeader(token);
  try {
    const response = await axios.get('/users/current');

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      clearAuthHeader();
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const themeToggle = createAsyncThunk('users/theme', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { isThemeToggle } = state.auth;
  if (isThemeToggle === false) {
    return { isThemeToggle: true };
  }
  return { isThemeToggle: false };
});


export const updateUser = createAsyncThunk('users/update', async (data, thunkAPI) => {
  const state = thunkAPI.getState();
  const { name: currentName, avatarURL: currentAvatar } = state.auth.user;

  const { name = currentName, avatar = currentAvatar } = data;
  try {
    const response = axios.patch('users/update', { name, avatar });
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
