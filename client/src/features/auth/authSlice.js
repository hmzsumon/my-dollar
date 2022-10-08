import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: null,
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

// login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// load user
export const loadUser = createAsyncThunk('auth/loadUser', async (thunkAPI) => {
  try {
    return await authService.loadUser();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.success;
        state.user = action.payload.user;
        state.isError = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.message = action.payload;
        state.isSuccess = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loadUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = action.payload.success;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isError = false;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.message = action.payload;
        state.isSuccess = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { reset, logoutUser } = authSlice.actions;
export default authSlice.reducer;
