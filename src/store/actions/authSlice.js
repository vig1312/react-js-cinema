import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentification",
  initialState: {
    auth: {
      isAuth: false
    }
  },
  reducers: {
    changeAuth(state,action) {
      return {
        auth: {
          isAuth: action.payload.auth
        }
      }
    }
  }
})

export const { changeAuth } = authSlice.actions

export default authSlice.reducer