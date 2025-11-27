import { createBrowserRouter } from "react-router-dom";

import Feature from "../pages/Feature/Feature";

import Support from "../pages/Support/Support";
import Faq from "../pages/Faq/Faq";
import Communication from "../pages/Communication/Communication";
import Login from "../pages/Private/Public/Login";
import PrivateRoute from "./PrivateRoute";

import Root from "./Root";
import Header from "../Layout/components/Header";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path: "/feature",
    element: <Feature />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/communication",
    element: <Communication />,
  },
  {
    path:"/bank",
    element:(
        <PrivateRoute>
           <Root/>
        </PrivateRoute>
    )
  },
  {
    path:"/login",
    element:<Login/>
  }
  
]);

export default router;
