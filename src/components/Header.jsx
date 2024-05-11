import { Button, Avatar, Dropdown, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink } from "react-router-dom";


const loggedIn = false;


function Header() {
  return (
    <Flowbite>
    <Navbar fluid rounded>
      <Navbar.Brand href={import.meta.env.VITE_DOMAIN}>
        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="ReactXBlog" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <DarkThemeToggle />
        {loggedIn ? (<Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar img="/pic.png" rounded status="away" statusPosition="bottom-right" />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Abhishek Srivastav</span>
            <span className="block truncate text-sm font-medium">abhisheksrivastav.sa@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>) : (location.pathname === "/login" ? ( <Button outline gradientDuoTone="greenToBlue">
        "Hello!"
      </Button>) : (<Button gradientMonochrome="success" href="/login">Login / Sign Up</Button>))}
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