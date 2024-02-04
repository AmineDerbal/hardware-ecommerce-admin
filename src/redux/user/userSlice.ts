import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login`,
        { username, password },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  username: null as string | null,
  email: null as string | null,
  isAdmin: false,
  isLoading: false,
  accessToken: null as string | null,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        username: null,
        email: null,
        isAdmin: false,
        accessToken: null,
        isUserLoggedIn: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      const isLodaing = true;
      const isError = false;
      return { ...state, isLodaing, isError };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const isLodaing = false;
      const isError = false;
      const isUserLoggedIn = true;
      const { username, email, accessToken, isAdmin } = action.payload;
      const currentUser = username;
      return {
        ...state,
        isLodaing,
        isError,
        isUserLoggedIn,
        username,
        currentUser,
        isAdmin,
        email,
        accessToken,
      };
    });
    builder.addCase(login.rejected, (state) => {
      const isLodaing = false;
      const isError = true;
      return { ...state, isLodaing, isError };
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
