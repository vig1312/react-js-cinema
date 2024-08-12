import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './actions/profileSlice';


const store = configureStore({
  reducer: {reducers},
  
})
export default store;
