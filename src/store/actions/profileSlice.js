import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedUser : {
		username: "",
		password: "",
		email: "",
		fullName: "",
		isLoggedIn: false
	}		
}

const profileSlice = createSlice({
		name: "profile",
		initialState,
		reducers: {
		currentData(state, action) {
			return {
				loggedUser: {
					username: action.payload.username,
					password: action.payload.password,
					email: action.payload.email,
					fullName: action.payload.fullName,
					isLoggedIn: true
				}
			}
		},
		resetCurrentData(state,action) {
			return initialState
		}
	}
})

export const { currentData, resetCurrentData } = profileSlice.actions;
export default profileSlice.reducer



