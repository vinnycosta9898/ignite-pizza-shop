/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

export function Header() {
    return (
        <div className="border-b">
            <div className="h-16 flex items-center gap-6 px-6">
                <Pizza className="w-6 h-6" />
                <Separator orientation="vertical" className="h-6" />
                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to='/'>
                        <Home className="h-4 w-4" />
                        Inicio
                    </NavLink>

                    <NavLink to='/orders'>
                        <UtensilsCrossed className="h-4 w-4" />
                        Pedidos
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
