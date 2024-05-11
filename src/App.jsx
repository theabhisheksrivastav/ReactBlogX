import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.service"
import { login, logout} from "./store/authSlice"
import './App.css'
import Header from './components/Header.jsx'
import FixedFooter from './components/FixedFooter.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    //.catch(() => dispatch(logout()))
    .finally(() => setLoading(false))
  }, [])

  


  return !loading && (
    <div className="App dark:bg-gray-800">
      <header className="App-header">
        <Header />
        <Outlet />
        <FixedFooter />
      </header>
    </div>
  )
}

export default App
