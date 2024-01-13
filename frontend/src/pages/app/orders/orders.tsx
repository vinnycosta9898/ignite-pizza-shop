/* eslint-disable prettier/prettier */
import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


export default function Orders() {
    return (
        <>
            <Helmet title="Pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros</span>
                    <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
                </form>

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
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Button variant='outline' size='xs'>
                                                <Search className="w-3 h-3" />
                                                <span className='sr-only' >Detalhes do pedido</span>
                                            </Button>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs font-medium">
                                            31215454513225
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">
                                            Há 15 minutos
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                                <span className='font-medium text-muted-foreground'>Pendente</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Vinicius Costa de Almeida
                                        </TableCell>
                                        <TableCell className='font-medium'>
                                            R$ 246,50
                                        </TableCell>

                                        <TableCell>
                                            <Button variant="outline" size="xs">
                                                <ArrowRight className="w-3 h-3 mr-2" />
                                                Aprovar
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="xs">
                                                <X className="w-3 h-3 mr-2" />
                                                Cancelar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
