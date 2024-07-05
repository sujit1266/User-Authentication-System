import react from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './routes/HomePage/HomePage';
import { Layout, AuthRequire } from './routes/Layout/Layout.jsx';
import About from './routes/About/About';
import Contact from "./routes/Contact/Contact.jsx";
import Login from './routes/Login/Login.jsx';
import Register from './routes/Register/Register.jsx';
import ProfilePage from './routes/ProfilePage/ProfilePage.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: ([
        {
          path: "/",
          element: (<HomePage />)
        },
        {
          path: "/about",
          element: (<About />)
        },
        {
          path: "/login",
          element: (<Login />)
        },
        {
          path: "/register",
          element: (<Register />)
        },
      ])
    },
    {
      path: "/",
      element: <AuthRequire />,
      children: [
        {
          path: "/profile",
          element: (<ProfilePage />)
        },
        {
          path: "/contact",
          element: (<Contact />)
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
