import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Route/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
     <React.StrictMode>

<AuthProvider>
  <RouterProvider router={router}></RouterProvider>
</AuthProvider>

</React.StrictMode>,
  </div>
)
