import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import Authprovider from './providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl m-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>,
  </div>
)
