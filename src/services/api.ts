import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Ticket } from '../types/types'
import { setTickets } from '../store/ticketsSlice'


const BASE_URL = 'http://localhost:3000'

export const api = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getTickets: builder.query<Ticket[], void>({
      keepUnusedDataFor: 0,
      query: () => `/tickets`,

      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled
          const data = result.data
          dispatch(setTickets(data))
        } catch(error) {
          console.log(error)
        }
      },
    }),
  }),
})


export const { useGetTicketsQuery } = api
