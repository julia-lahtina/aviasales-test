import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Ticket } from '../types/types'


export type TicketsState = {
  tickets: Ticket[]
}

const initialState: TicketsState = {
  tickets: []
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload
    },
/*     filterTickets: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(ticket => ticket.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }, */
    sortTickets: (state, action: PayloadAction<'asc' | 'desc'>) => {
     state.tickets.sort((a, b) => {
        if(action.payload === 'asc') {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
    }
  }
})


export const { sortTickets, setTickets } = ticketsSlice.actions
export const ticketsReducer = ticketsSlice.reducer