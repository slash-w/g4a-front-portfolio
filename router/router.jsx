import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layouts/Main";
import App from "../src/App";
import NotAllowed from "../src/componentes/NotAllowed";
import NotAllowedProtected from "./NotAllowedProtected";
import ProtectedLoger from "./ProtectedLoger";
import Games from "../src/componentes/Games";
import ProtectedLogin from "./ProtectedLogin";
import Details from "../src/componentes/Details";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[            
            {
                path:'/',
                element: <App/>
            },
            {
                path: "/not-allow",
                element:  <NotAllowed/> ,
              },
              {
                path:'/games',
                element: <Games/>
            },
            {
                path:'/details',
                element: <Details/>
            },
        ]
    },
          
])
export default router