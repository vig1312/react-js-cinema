import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    loggedUser: {
      username: '',
      password: '',
      email: '',
      fullName: '',
    },
  },
  reducers: {
    currentData(state, action) {
      return {
        loggedUser: {
          username: action.payload.username,
          password: action.payload.password,
          email: action.payload.email,
          fullName: action.payload.fullName,
        },
      };
    },
  },
});

export const { currentData } = profileSlice.actions;
export default profileSlice.reducer;
