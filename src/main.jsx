import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} >
      <Route path="about" element={<h1>About</h1>} />
      <Route path="for-you" element={<h1>ForYou</h1>} />
      <Route path="login" element={<Login/>} />
      <Route path="contact" element={<h1>Contact</h1>} />
    </Route>
  ]),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
