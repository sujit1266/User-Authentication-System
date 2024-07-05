import React, { useContext } from 'react';
import "./ProfilePage.scss";
import apiRequest from '../../../lib/ApiRequest';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {

      const res = await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='ProfilePage'>
      <img src='/user-logo.jpg' alt='user-logo'></img>
      <span>Username : {currentUser ? currentUser.username : ""}</span>
      <span>email : {currentUser ? currentUser.email : ""}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
