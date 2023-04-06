import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Summary from "./components/Summary";
import Form from "./components/Form";
const AppLayout = () => {
    return(
        <>
             <Header/>
             <Outlet/>
             <Footer/>
        </>
        
        
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/summary",
                element:<Summary />,
            },
            {
                path:"form",
                element:<Form/>
            }
            
        ],
    }

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);