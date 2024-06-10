import React from 'react'
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react'
const pendingProducts = [
    { label: "Product Pending", count1: 17233, count2: 1233 },
    { label: "Product Canclled", count1: 16234, count2: 1144 },
    { label: "Product Delivered", count1: 15235, count2: 1055 },
];

const SalesStat = () => {
    return (

        <Card className='mt-3 col-span-4 xl:col-span-2'>
            <CardHeader className="px-7">
                <CardTitle className='flex items-center justify-between'>
                    <div className="">Sales Statistics</div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="text-lg text-black/70">Today</div>
                        <ChevronDown />
                    </div>
                </CardTitle>
                <CardDescription>
                    <div className="text-lg mt-3 mb-2">725,800</div>
                    <div className="flex items-center  gap-2">
                        <div className="bg-green-300/60 p-1  px-2 rounded-md text-[10px] flex items-center"><ArrowUpRight className='w-2 h-2' />2.8% </div>vs. previous month

                    </div>






                </CardDescription>
                <div className=" h-5 bg-black border rounded-lg">hi</div>
            </CardHeader>

            <CardContent>
                <div className="flex items-center justify-between font-semibold mb-2 w-full">
                    <div className="w-[50%]">Order Status </div>
                    <div className="w-[25%]">Order</div>
                    <div className="w-[25%]">Return</div>

                </div>
                <Separator />


                {pendingProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between mt-3">
                        <div className="w-[50%]">{product.label}</div>
                        <div className="w-[25%]">{product.count1}</div>
                        <div className="w-[25%]">{product.count2}</div>
                    </div>
                ))}
            </CardContent>
        </Card >
    )
}

export default SalesStat
