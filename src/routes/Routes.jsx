import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/Home/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/category/0' ></Navigate>
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/category',
        element: <MainLayout />,
        children: [
            {
                path: ':id',
                element: <Category />,
                // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <News />,
                // loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;