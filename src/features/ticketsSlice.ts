import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Tickets } from '../types/types'


const initialState: Tickets = {
 tickets: []
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    filterTickets: (state, action: PayloadAction<number>) => {
      const newTickets = state.tickets.filter(ticket => ticket.id !== action.payload)
      state.tickets = newTickets
    }
  }
})


// Action creators are generated for each case reducer function
export const {  } = ticketsSlice.actions

export default ticketsSlice.reducer