import { combineReducers, configureStore,  } from '@reduxjs/toolkit'
import { api } from '../services/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ticketsReducer } from './ticketsSlice'

const reducers = combineReducers({
  tickets: ticketsReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);