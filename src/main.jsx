import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './routes/Main';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import AllToys from './pages/AllToys';
import ToysDetails from './pages/ToysDetails';
import AddAToy from './pages/AddAToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toydetails/:id",
        element: <ToysDetails></ToysDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/toydetail/${params.id}`)
       
      },
      {
        path: "/books",
        element: <AddAToy></AddAToy>,
       
      },
     
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
