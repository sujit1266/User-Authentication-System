import React from 'react';
import "./About.scss";

function About() {
  return (
    <div className='About'>
      <img src='/about-page-image.jpg' alt='about-image'></img>
      <div>
        Approach to implement User Authentication in MERN Stack :
        js for password hashing to ensure security. Generate JSON Web Tokens (JWT) for authentication. Restrict access to protected routes for authenticated users. Display appropriate messages for successful registration and login.
      </div>
    </div>
  )
}

export default About
