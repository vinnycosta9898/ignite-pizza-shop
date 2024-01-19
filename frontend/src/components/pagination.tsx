/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
}

export default function Pagination({ pageIndex, perPage, totalCount }: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} items(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">
                    Página {pageIndex + 1} de {pages}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="outline" className="h-8 w-8 p-0">
                    <ChevronsLeft className='w-4 h-4' />
                    <span className="sr-only">Primeira página</span>
                </Button>

                <Button variant="outline" className="h-8 w-8 p-0">
                    <ChevronLeft className='w-4 h-4' />
                    <span className="sr-only">Página anterior</span>
                </Button>

                <Button variant="outline" className="h-8 w-8 p-0">
                    <ChevronRight className='w-4 h-4' />
                    <span className="sr-only">Próxima página</span>
                </Button>

                <Button variant="outline" className="h-8 w-8 p-0">
                    <ChevronsRight className='w-4 h-4' />
                    <span className="sr-only">Última página</span>
                </Button>
            </div>
        </div>
    )
}
