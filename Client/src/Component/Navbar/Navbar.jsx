import React, { useContext } from 'react';
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../../Context/AuthContext';

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (currentUser) {
      navigate("/contact")
    } else {
      navigate("/login")
    }
  }
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
        <span onClick={handleClick}>Contact</span>
        {
          currentUser ? (<Link to="/profile"><span>Profile</span></Link>) : null
        }
        <Link to="/register">
          <button>Login/Register</button>
        </Link>
      </div>
    </nav>
  )
}
