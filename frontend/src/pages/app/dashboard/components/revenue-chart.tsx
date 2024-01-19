import colors from 'tailwindcss/colors'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'

const data = [
  {date: '01/01', revenue: 1320},
  {date: '02/01', revenue: 900},
  {date: '03/01', revenue: 720},
  {date: '04/01', revenue: 1450},
  {date: '05/01', revenue: 1550},
  {date: '06/01', revenue: 1250},
  {date: '07/01', revenue: 1180},
]


export function RevenueChart(){
  return(
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className='space-y-1'>
          <CardTitle className='test-base font-medium'>Receita do período</CardTitle>
          <CardDescription> 
            Receita diária do período
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12}}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
            <YAxis 
              stroke="#888" 
              axisLine={false} 
              tickLine={false} 
              width={80} 
              tickFormatter={(value : number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}) }/>

            <Line 
              type="linear" 
              strokeWidth={2} 
              dataKey="revenue" 
              stroke={colors.violet['500']} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}