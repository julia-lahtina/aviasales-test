import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TicketProps } from '../components/ticketsDashboard/tickets/ticket/Ticket'

export type sort = "" | "Все" | "Без пересадок" | "1 пересадка" | "2 пересадки" | "3 пересадки"

type TicketsState = {
  isChecked: boolean
  sortType: sort
  ticket: Array<any>
}

const initialState: TicketsState = {
    isChecked: false,
    sortType: '',
    ticket: [
      {price: '0 P'},
      {startFlightPlace: ''},
      {flightTime: ''},
      {flightDuration: ''},
      {quantityOfTransfers: 0},
      {transferPlace: ''}
    ]
  }


export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setCheckedStatus: (state, action: PayloadAction<sort>) => {
      state.sortType = action.payload
    },
    }
  },
)


export const { setCheckedStatus } = ticketsSlice.actions

export default ticketsSlice.reducer