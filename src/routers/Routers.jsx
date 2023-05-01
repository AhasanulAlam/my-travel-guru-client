import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Booking from '../pages/Booking/Booking';
import Hotels from '../pages/Hotels/Hotels';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Terms from '../pages/Terms/Terms';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/destinations/:city_id',
                element: <Booking></Booking>,
                loader: ({params}) => fetch(`https://my-travel-guru-server-ahasanulalam.vercel.app/destinations/${params.city_id}`)
            },
            {
                path: '/hotels/:city_id',
                element: <PrivateRoute><Hotels></Hotels></PrivateRoute>,
                loader: ({params}) => fetch(`https://my-travel-guru-server-ahasanulalam.vercel.app/hotels/${params.city_id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
        ]
    },
]);

export default router;