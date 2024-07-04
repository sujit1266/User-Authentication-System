import React from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/logo.jpg' alt='app-logo'></img>
          <span>User Authentication System</span>
        </a>
      </div>
      <div className='right'>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
        <Link to="/contact"><span>Contact</span></Link>
        <Link to="/profile"><span>Profile</span></Link>
        <Link to="/register">
          <button>Login/Register</button>
        </Link>
      </div>
    </nav>
  )
}
