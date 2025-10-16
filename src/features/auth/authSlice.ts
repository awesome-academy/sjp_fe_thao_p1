import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userId: null as string | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.userId = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
