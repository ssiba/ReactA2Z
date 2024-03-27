import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestudentMenu from "./components/RestudentMenu";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const AppLayout=()=>(
<div>
<Header/>
<Outlet />
</div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
            path:"/",
            element:<Body/>,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restudents/:resId",
                element:<RestudentMenu />,
            },
        ],
        errorElement:<Error />,
    },
   
])
//rendig functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

