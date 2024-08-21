import { configureStore } from '@reduxjs/toolkit';

import profileSlice from './actions/profileSlice';
import authSlice from './actions/authSlice';


const store = configureStore({
  reducer: {
    profile: profileSlice,
    auth: authSlice
  }
})

export default store;
