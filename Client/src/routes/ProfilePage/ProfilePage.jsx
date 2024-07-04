import React from 'react';
import "./ProfilePage.scss";
import apiRequest from '../../../lib/ApiRequest';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate=useNavigate();

  const handleLogout=async ()=>{
    try{

      const res=await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='ProfilePage'>
    <img src='/user-logo.jpg' alt='user-logo'></img>
        <span>Username : </span>
        <span>email : </span>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
