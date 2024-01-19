import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function DayOrderAmountCard(){
  return(
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
            Pedidos (dia)
        </CardTitle>
        <DollarSign className="w-4 h-4 text-muted-foreground"/>
      </CardHeader>
     <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
            348
        </span>

        <p className='text-xs text-muted-foreground'>
            <span className='text-rose-500 dark:text-rose-400'> - 2% </span> em relacão a ontem
        </p>
     </CardContent>
  </Card>
  )
}