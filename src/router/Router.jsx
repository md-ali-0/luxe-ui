import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Main";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default Router;