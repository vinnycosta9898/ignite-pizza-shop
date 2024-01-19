/* eslint-disable prettier/prettier */
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { DashBoard } from './app/dashboard/dashboard'
import { SignIn } from './auth/sign-in'
import { SignUp } from './auth/sign-up'
import { NotFound } from './_layouts/404'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound/>,
        children: [
            { path: '/', element: <DashBoard /> },
        ]
    },

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SignIn /> },
            { path: '/sign-up', element: <SignUp /> },
        ]
    },

])
