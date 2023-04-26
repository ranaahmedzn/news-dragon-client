import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category from "../pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/category/:id',
                element: <Category />,
                // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])

export default router;