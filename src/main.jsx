import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Post, About, AuthLayout} from './components'
import {Login, Home, EditPost, AddPost} from './pages'
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} >
      <Route path="/" element={<Home />} />
      <Route path="post/:slug" element={<Post/>} />
      <Route path="about" element={<About/>} />
      <Route path="new-post" element={<AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>} />
      <Route path="login" element={<AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="edit-post/:slug" element={<AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>} />
    </Route>
  ]),
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
