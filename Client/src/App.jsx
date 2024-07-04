import react from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './routes/HomePage/HomePage';
import Layout from './routes/Layout/Layout';
import About from './routes/About/About';
import Contact from "./routes/Contact/Contact.jsx";
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import ProfilePage from './routes/ProfilePage/ProfilePage.jsx';

function App() {

  const router=createBrowserRouter([
    {
      path : "/",
      element : (<Layout/>),
      children : ([
        {
          path : "/",
          element : (<HomePage/>)
        },
        {
          path : "/about",
          element : (<About/>)
        },
        {
          path : "/contact",
          element : (<Contact/>)
        },
        {
          path : "/login",
          element : (<Login/>)
        },
        {
          path : "/register",
          element : (<Register/>)
        },
        {
          path : "/profile",
          element : (<ProfilePage/>)
        }
      ])
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
