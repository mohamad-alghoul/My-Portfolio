import React from 'react';
import "./navbar.css"
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { Link } from 'react-scroll';
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
        <Link activeClass='active' to="home" spy={true} offset={-100} duration={500} >Home</Link>
          </li>
          <li>
          <Link activeClass='active' to="about" spy={true} offset={-100} duration={500} >About</Link>
          </li>
          <li>
          <Link  activeClass='active' to="services" spy={true} offset={-100} duration={500} >Services</Link>
          </li>
          <li>
          <Link activeClass='active' to="portfolio" spy={true} offset={-100} duration={500} >Portfolio</Link>
          </li>
        </ul>
        <button className='signin-btn' onClick={()=>{
          document.getElementById("contact").scrollIntoView();
        }}>Contact As</button>
      </div>
    </nav>
  );
};

export default Navbar;
