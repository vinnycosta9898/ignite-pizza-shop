/* eslint-disable prettier/prettier */
import { Helmet } from 'react-helmet-async'

import Orders from './orders/orders'

export function DashBoard() {
    return (
        <>
            <Helmet title="dashboard" />
            <h1>Dashboard</h1>
            <Orders />
        </>
    )
}
