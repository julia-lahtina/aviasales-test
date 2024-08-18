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
    filterTickets: (state, action: PayloadAction<number | 'all'>) => {
      if(action.payload === 'all') {
        state.tickets = [...state.tickets]
      } else {
        state.tickets = state.tickets.filter(ticket => ticket.transitions === action.payload)
      }
    },
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


export const { sortTickets, setTickets, filterTickets } = ticketsSlice.actions
export const ticketsReducer = ticketsSlice.reducer