import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.service"
import { login, logout} from "./store/authSlice"
import './App.css'
import Header from './components/Header.jsx'
import FixedFooter from './components/FixedFooter.jsx'
import { Outlet } from 'react-router-dom'
import { Spinner } from 'flowbite-react'

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

  


  return !loading ? (
    <div className=" dark:bg-gray-800">
      <header className="App-header">
        <Header />
        <Outlet />
        <FixedFooter />
      </header>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen dark:bg-gray-800">
    <div className='text-center'>
        <Spinner size="xl" />
    </div>
</div>
  )
}

export default App
