/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
    return (
        <div>
            <h1>Autenticacão</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
