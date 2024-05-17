
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function FixedFooter() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link to={import.meta.env.VITE_DOMAIN}>
            <Footer.Brand
              src="/logo.svg"
              alt="ReactXBlog"
              name=""
            />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="sitemap" />
              <Footer.LinkGroup col>
                <Link to="/"><Footer.Link>ReactXBlog</Footer.Link></Link>
                <Link to="/about"><Footer.Link>About</Footer.Link></Link>
                <Link to="/contact"><Footer.Link>Contact Us</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/theabhisheksrivastav">Github</Footer.Link>
                <Footer.Link href="https://abhisheksrivastav.site/">Portfolio</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
       
          
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start">
            <Footer.Icon href="https://www.facebook.com/AbhishekSrivastavOfficial" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/abhisheksrivastavofficial" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/Abh1_Srivastav" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/theabhisheksrivastav" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/abh1sheksrivastav" icon={BsLinkedin} />

          </div>
      </div>
    </Footer>
  );
}


export default FixedFooter