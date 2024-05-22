import { Button, Avatar, Dropdown, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "../store/store";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logout as authLogout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth.service';



function Header() {
  const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/theabhisheksrivastav")
    .then(response => response.json())
    .then(data => setData(data))
    }, [])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const logout = async(data) => {
        try {
            const session = await authService.logoutAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogout(userData));
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Flowbite>
    <Navbar fluid >
      <Navbar.Brand href={import.meta.env.VITE_DOMAIN}>
        <img src="/symbol.png" className="min-w-6 min-h-10 mr-3 h-6 sm:h-9" alt="ReactXBlog" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle className=" mr-2" />
        {!store.auth ? (<Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar img={data.avatar_url} rounded status="away" statusPosition="bottom-right" />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{data.name}</span>
            <span className="block truncate text-sm font-medium">{data.login}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSubmit(logout)}>Sign out</Dropdown.Item>
        </Dropdown>) : 
      //   (location.pathname === "/login" ? ( <Button outline gradientDuoTone="greenToBlue">
      //   "Hello!"
      // </Button>) : 
      (<Link to="/login" ><Button gradientMonochrome="success">Login / Sign Up</Button></Link>)}
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
        <NavLink
        to="/post"
        className={({isActive})=> `block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white ${isActive ? "text-green-500 dark:text-white" : "text-gray-700 dark:text-gray-400"}`}
        >
          Posts
        </NavLink>
        {/* <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/for-you">FYP</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
    </Flowbite>
  );
}


export default Header