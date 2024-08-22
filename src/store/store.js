import { configureStore } from '@reduxjs/toolkit';

import authSlice from './actions/authSlice';
import profileSlice from './actions/profileSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice
  }
})

export default store;
