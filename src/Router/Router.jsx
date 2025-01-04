import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../pages/Home';
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import AboutPage from "../pages/AboutPage";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<AboutPage></AboutPage>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        }
        ,{
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/projects/:id',
            element:<ProjectDetails></ProjectDetails>
        }
      ]
    },
  ]);
  export default router;