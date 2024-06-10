"use client"
import React, { useState } from 'react'
import FirstComp from './FirstComp'
import BarComp from './BarComp'
import DonutComp from './DonoutComp'
import TransactionComp from './TransactionComp'
import TopUser from './TopUser'
import SalesStat from './SalesStat'
import SourceComp from './SourceComp'
import MapComp from './MapComp'
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const Dashboard = () => {
    const [selectedFilter, setSelectedFilter] = useState('ALL');

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
    };

    return (
        <div className=''>
            <FirstComp />

            <div className="grid gap-3 grid-cols-6 mt-3 ">
                <div className="col-span-6 md:col-span-4 bg-white p-4 border ">
                    <div className="flex items-center justify-between">
                        <div className="font-semibold">Audiences Metric</div>
                        <div className="flex gap-3 items-center justify-center text-sm">
                            <div className={`bg-muted p-1 rounded-sm w-10 text-center ${selectedFilter === 'ALL' ? 'bg-slate-500/50 shadow-md' : ''}`} onClick={() => handleFilterChange('ALL')}>ALL</div>
                            <div className={`bg-muted p-1 rounded-sm w-10 text-center ${selectedFilter === '1M' ? 'bg-slate-500/50 shadow-md' : ''}`} onClick={() => handleFilterChange('1M')}>1M</div>
                            <div className={`bg-muted p-1 rounded-sm w-10 text-center ${selectedFilter === '6M' ? 'bg-slate-500/50 shadow-md' : ''}`} onClick={() => handleFilterChange('6M')}>6M</div>
                            <div className={`bg-muted p-1 rounded-sm w-10 text-center ${selectedFilter === '1Y' ? 'bg-slate-500/50 shadow-md' : ''}`} onClick={() => handleFilterChange('1Y')}>1Y</div>
                            <div className="bg-muted p-1 rounded-sm w-16 text-center border border-gray-800 hover:bg-slate-500/60">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <div className="flex ">
                                            <div className="">Filter</div>
                                            <ChevronDown />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuRadioGroup value={selectedFilter} onValueChange={handleFilterChange}>
                                            <DropdownMenuRadioItem value="Product A">Product A</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Product B">Product B</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="Product C">Product C</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 w-full">
                        <BarComp selectedFilter={selectedFilter} />
                        <DonutComp selectedFilter={selectedFilter} />
                    </div>
                </div>
                <MapComp />
            </div>

            <div className="grid grid-cols-7 gap-3 ">
                <SourceComp />
                <SalesStat />
                <TopUser />
            </div>
            <TransactionComp />
        </div>
    )
}

export default Dashboard
