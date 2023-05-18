import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
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
        }
      ]
    },
  ]);

  export default router;