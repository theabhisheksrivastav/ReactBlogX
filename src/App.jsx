import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.service"
import { login, logout} from "./store/authSlice"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

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
    <div className="App">
      <header className="App-header">
        <Header />
        <h1>ReactBlogX</h1>
        <Footer />
      </header>
    </div>
  )
}

export default App
