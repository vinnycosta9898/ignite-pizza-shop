/* eslint-disable prettier/prettier */
import { Helmet } from 'react-helmet-async'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import OrderTableFilters from './components/order-table-filters'
import OrderTableRow from './components/order-table-row'


export default function Orders() {
    return (
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <OrderTableFilters />

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Nome do Cliente</TableHead>
                                <TableHead className="w-[140px]">Valor Total</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, index) => {
                                return (
                                    <OrderTableRow key={index} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
