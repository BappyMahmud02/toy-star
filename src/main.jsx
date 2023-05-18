import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl m-auto'>
    <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)
