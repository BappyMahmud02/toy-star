import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Addtoy from "../pages/addtoy/Addtoy";
import Gallery from "../pages/Home/gallery/Gallery";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
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
            element:<Addtoy></Addtoy>
        },
        {
            path:'gallery',
            element:<Gallery></Gallery>
        }
      ]
    },
  ]);

  export default router;