import React, { useContext } from 'react';
import "./Layout.scss";
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import { AuthContext } from '../../../Context/AuthContext';

function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
          <Navbar/>
      </div>
      <div className='content'>
          <Outlet/>
      </div>
    </div>
  )
}

function AuthRequire() {

  const {currentUser}=useContext(AuthContext);

  // if(!currentUser){
  //      return <Navigate to={"/login"}></Navigate>
  // }

  return (
       !currentUser ? (<Navigate to={"/login"}></Navigate>) : (<div className="layout">
            <div className="navbar">
                 <Navbar />
            </div>
            <div className="content">
                 <Outlet />
            </div>
       </div>)
  )
}

export {Layout, AuthRequire};
