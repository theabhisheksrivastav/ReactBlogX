import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth.service'
import { logout } from '../store/authSlice'
import { Button } from 'flowbite-react'

function LogoutButton() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logoutAccount()
        .then(() => dispatch(logout()))
        .catch((error) => console.error(error))
    }
  return (
    <Button gradientMonochrome="info" onClick={logoutHandler}>Logout</Button>
  )
}

export default LogoutButton