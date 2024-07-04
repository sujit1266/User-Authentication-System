import React from 'react';
import "./Layout.scss";
import { Outlet } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';

export default function Layout() {
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
