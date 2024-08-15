import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Ticket } from '../types/types'


const initialState: Ticket[] = [
   {
     id: 0,
     price: 0,
     departureTime: '',
     departureAirport: '',
     arrivalTime: '',
     arrivalAirport: '',
     outboundFlightDuration: '',
     returnFlightDuration: '',
     transitionPlace: '',
     transitions: 0
   }
]

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state = action.payload
    },
    filterTickets: (state: Ticket[], action: PayloadAction<number>) => {
      const index = state.findIndex(ticket => ticket.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    sortTickets: (state: Ticket[], action: PayloadAction<'asc' | 'desc'>) => {
     state.sort((a, b) => {
        if(action.payload === 'asc') {
          return a.price - b.price
        } else {
          return b.price - a.price
        }
      })
    }
  }
})


export const { filterTickets, sortTickets, setTickets } = ticketsSlice.actions
export const ticketsReducer = ticketsSlice.reducer