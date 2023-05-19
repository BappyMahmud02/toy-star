import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Addtoy from "../pages/addtoy/Addtoy";
import Gallery from "../pages/Home/gallery/Gallery";
import Mytoy from "../pages/mytoy/Mytoy";
import Alltoy from "../pages/alltoy/Alltoy";
import Privateroute from "./Privateroute";
import Details from "../pages/details/Details";
import Errorpage from "../pages/errorpage/Errorpage";
import Mytoyrow from "../pages/mytoy/Mytoyrow";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'registration',
            element: <Registration></Registration>
        },
        {
            path:'addtoy',
            element:<Privateroute><Addtoy></Addtoy></Privateroute>
        },
        {
            path:'gallery',
            element:<Gallery></Gallery>
        },
        {
            path:'mytoy',
            element: <Privateroute><Mytoy></Mytoy></Privateroute>,
            
        },
        
        {
            path:'alltoy',
            element:<Alltoy></Alltoy>,
            
        },
        {
            path:'details/:id',
            element:<Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
       
      ]
    },
  ]);

  export default router;