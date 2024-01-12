/* eslint-disable prettier/prettier */
import { createBrowserRouter } from 'react-router-dom'

import { DashBoard } from './app/dashboard'
import { SignIn } from './auth/sign-in'

export const router = createBrowserRouter([
    { path: '/', element: <DashBoard /> },
    { path: 'sign-in', element: <SignIn /> },
])
