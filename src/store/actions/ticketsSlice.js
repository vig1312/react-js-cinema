import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking: {
    reservedTickets: {}
  }
}

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {}
})

