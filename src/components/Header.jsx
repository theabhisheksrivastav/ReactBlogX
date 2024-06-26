import { Button, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout as authLogout } from '../store/authSlice'
import authService from '../appwrite/auth.service';
import { useEffect, useState } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
    const dispatch = useDispatch()
    const [logoimg, setLogoimg] = useState('/symbol.png')
    const logoutHandler = () => {
        authService.logoutAccount().then(() => {
            dispatch(authLogout())
        })
    }
    useEffect(() => {
      if (window.innerWidth > 540) {
        setLogoimg('/logo.png');
      }
    }, [])
  return (
    
    <>
      <div className="inset-x-0 top-0">
      <Flowbite>
    {/* add longer logo for when big screen view port refactor sign out button */}
    <Navbar fluid >
      <Navbar.Brand href={import.meta.env.VITE_DOMAIN}>
        <img src={logoimg} className="min-w-6 min-h-10 mr-3 h-6 sm:h-9" alt="ReactXBlog" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle className=" mr-2" />
        {authStatus ? (<Link to="/login" ><Button onClick={logoutHandler} outline gradientMonochrome="success">Logout</Button></Link>) : 
      (<Link to="/login" ><Button gradientMonochrome="success">Login</Button></Link>)}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
        to="/"
        className={({isActive})=> `block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${isActive ? "text-green-500 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}
        >
          Home
        </NavLink>
        <NavLink
        to="/about"
        className={({isActive})=> `block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${isActive ? "text-green-500 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}
        >
          About
        </NavLink>
        <NavLink
        to="/Contact"
        className={({isActive})=> `block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${isActive ? "text-green-500 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}
        >
          Contact Us
        </NavLink>
        {authStatus && <NavLink
        to="/new-post"
        className={({isActive})=> `block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${isActive ? "text-green-500 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}
        >
          Add Post
        </NavLink>}
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
      </div>
    </>
  );
}


export default Header