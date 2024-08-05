import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type sort = "" | "Все" | "Без пересадок" | "1 пересадка" | "2 пересадки" | "3 пересадки"

type TicketsState = {
  isChecked: boolean
  sortType: sort
}

const initialState: TicketsState = {
    isChecked: false,
    sortType: ''
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setCheckedStatus: (state, action: PayloadAction<sort>) => {
      state.sortType = action.payload
    }
  },
})


export const { setCheckedStatus } = ticketsSlice.actions

export default ticketsSlice.reducer