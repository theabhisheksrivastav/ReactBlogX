import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Test from './components/Test.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Signup from './pages/SignUp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} >
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="post" element={<h1>Posts</h1>} />
      <Route path="login" element={<Login/>} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="test" element={<Test/>} />
      <Route path="signup" element={<Signup/>} />
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
