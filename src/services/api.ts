import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Tickets } from '../types/types'


export const api = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getTickets: builder.query<Tickets, void>({
      query: () => `/tickets`,
    }),
  }),
})


export const { useGetTicketsQuery } = api
