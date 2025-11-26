import { createBrowserRouter } from "react-router-dom";

import Feature from "../pages/Feature/Feature";
import Header from "../Layout/components/Header";
import Support from "../pages/Support/Support";
import Faq from "../pages/Faq/Faq";
import Communication from "../pages/Communication/Communication";
import Bank from "../pages/Bank/Bank";

import Login from "../pages/Private/Public/Login";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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
          <Bank/>
        </PrivateRoute>
    )
  },
  {
    path:"/login",
    element:<Login/>
  }
  
]);

export default router;
