import { createBrowserRouter } from "react-router-dom";
import { Meet } from "./components/Meet";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: null
    },
    {
        path: '/:id',
        element: <Meet />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: 'login',
        element: <Login />
    }
])
