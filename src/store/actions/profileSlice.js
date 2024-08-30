import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedUser: {
    username: '',
    password: '',
    email: '',
    fullName: '',
    isLogged: false,
    reservedTickets: ""
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    currentData(state, action) {
      return {
        loggedUser: {
          username: action.payload.username,
          password: action.payload.password,
          email: action.payload.email,
          fullName: action.payload.fullName,
          isLogged: true
        }
      };
    },
    resetCurrentData(state, action) {
      return initialState;
    },
    ticketsData(state, action){
      return {
        loggedUser: {
          ...state.loggedUser,
          reservedTickets: action.payload.tickets
        }
      }
    }
  }
});

export const { currentData, resetCurrentData, ticketsData } = profileSlice.actions;
export default profileSlice.reducer;
