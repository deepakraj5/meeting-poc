import { createBrowserRouter } from "react-router-dom";
import { Meet } from "./components/Meet";

export const router = createBrowserRouter([
    {
        path: '/',
        element: null
    },
    {
        path: '/meet',
        element: <Meet />
    }
])
