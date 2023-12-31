import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ProtectedLoger from "./ProtectedLoger";
import NotFound from "../src/componentes/NotFound";
import ProtectedLogin from "./ProtectedLogin";
import Cart from "../src/pages/Cart";

import Market from "../src/componentes/Market";
import Register from "../src/componentes/Register";
import SignIn from "../src/pages/SignIn";
import VerifyCode from "../src/componentes/VerifyCode";
import ProtectedRouteUser from "../router/protectedUser";
import ProtectedRouteNotUser from "../router/protectedNotUser";

import AdminPanel from "../src/componentes/AdminPanel";
import Detail from "../src/pages/Detail";
import Index from "../src/pages/index";
import Games from "../src/pages/Games";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/details/:id",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/register",
        element: (
          <ProtectedRouteUser>
            <Register />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/verifyAccount",
        element: (
          <ProtectedRouteUser>
            <VerifyCode />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/signin",
        element: (
          <ProtectedRouteUser>
            <SignIn />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/adminPanel",
        element: (
          <ProtectedRouteNotUser>
            <AdminPanel />
          </ProtectedRouteNotUser>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/NotAllow",
    element: <NotAllowed />,
  },
]);
export default router;
