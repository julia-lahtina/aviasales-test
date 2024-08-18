import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/errorPage/ErrorPage.tsx'
import { MainPage } from './components/mainPage/MainPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/main-page",
    element: <MainPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
