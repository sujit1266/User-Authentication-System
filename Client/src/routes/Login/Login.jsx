import React, { useContext, useState } from 'react';
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiRequest from '../../../lib/ApiRequest';
import { AuthContext } from '../../../Context/AuthContext';

export default function Login() {
     const [error, setErr] = useState("");
     const [isLoading, setisLoading]=useState(false);
     const navigate = useNavigate();
     const {updateUser}=useContext(AuthContext);


     const handleSubmit = async (e) => {
          e.preventDefault();
          setisLoading(true);
          setErr("");
          const formData = new FormData(e.target);

          const username = formData.get("username");
          const password = formData.get("password");

          try {
               const res = await apiRequest.post("/auth/login", {
                    username,
                    password,
               })

               updateUser(res.data);

               navigate("/");
          }catch(err){
               console.log(err);
               setErr(err.response.data.message);
          }finally{
               setisLoading(false)
          }

     }
     return (
          <div className="login">
               <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                         <h1>Welcome back</h1>
                         <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
                         <input name="password" type="password" placeholder="Password" />
                         <button disabled={isLoading}>Login</button>
                         {error && <span>{error}</span>}
                         <Link to="/register">{"Don't"} you have an account?</Link>
                    </form>
               </div>
          </div>
     )
}
