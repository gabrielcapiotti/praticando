import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/",
        element: <Sobre />
    },
    
]);

export default function AppRoutes(){
    return <RouterProvider router={router}/>;
}