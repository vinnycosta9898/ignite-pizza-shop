/* eslint-disable prettier/prettier */
import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './components/month-revenue-card'
import { MonthOrderAmountCard } from './components/month-orders-amount-card'
import { DayOrderAmountCard } from './components/day-orders-amount-card'
import { MonthCancelledAmountCard } from './components/month-canceled-orders-amoun'

export function DashBoard() {
    return (
        <>
            <Helmet title="dashboard" />
            <div className="flex flex-col gap-4">
                <h1 className="text3xl font-bold tracking-tight">
                    Dashboard
                </h1>

                <div className='grid grid-cols-4 gap-4'>
                    <MonthRevenueCard/>
                    <MonthOrderAmountCard/>
                    <DayOrderAmountCard/>
                    <MonthCancelledAmountCard/>
                </div>
            </div>
        </>
    )
}
