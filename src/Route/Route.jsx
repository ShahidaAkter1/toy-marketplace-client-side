import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../LoginReg/Login";
import Registration from "../LoginReg/Registration";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Shared/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
 
import ToyDetails from "../Pages/AllToys/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/MyToys/Update";
import View from "../Pages/MyToys/View";

const router=createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://doll-server-mu.vercel.app/toy')
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>,
                loader:()=>fetch('https://doll-server-mu.vercel.app/toy')
            },
            {
                path:'/mytoys',
                element:<MyToys></MyToys>,
                loader:()=>fetch('https://doll-server-mu.vercel.app/toy')
                
               
            },
            {
                path:'/mytoys/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://doll-server-mu.vercel.app/toy/${params.id}`)
            },
            // {
            //     path:'/mytoys/view/:id',
            //     element:<View></View>,
            //     loader:({params})=>fetch(`https://doll-server-mu.vercel.app/toy/${params.id}`)
            // },
 
            {
                path:'/addtoys',
                element:<AddToys></AddToys>
            },
            {
                path:'/allToys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://doll-server-mu.vercel.app/toy/${params.id}`)
            }
     
          
        ]
    },
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Registration></Registration>
            }
        ]
    }
])

export default router;