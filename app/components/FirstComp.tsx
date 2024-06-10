import { ArrowBigRightDash, ArrowUpRight, BaggageClaim, EllipsisVertical } from 'lucide-react'
import React from 'react'

const FirstComp = () => {
    return (
        <div className='grid  gap-4 w-full
        grid-cols-2
        sm:grid-cols-2

        
        xl:grid-cols-4
        

        
        '>


            <div className="flex  border items-center px-4 py-3  overflow-hidden rounded-sm bg-white relative">


                <div className="flex items-center justify-center  p-4 rounded-lg mx-3 bg-[#19979b]/50  h-12">
                    <BaggageClaim className='text-[#19979b]' />
                </div>


                <div className=" mr-4">
                    <div className="text-xs">Total Earning</div>
                    <div className="font-semibold">34,123.2</div>
                    <div className="flex items-center gap-2 font-semibold">0 <div className="text-xs">USD</div></div>
                    <div className="bg-green-300/60 p-1  px-2 rounded-md text-[10px] flex items-center"><ArrowUpRight className='w-2 h-2' />2.8% Increase</div>
                </div>
                <div className="flex absolute top-3 right-2 "><EllipsisVertical /></div>
            </div>
            <div className="flex  border items-center px-4 py-3  overflow-hidden rounded-sm bg-white relative">


                <div className="flex items-center justify-center  border p-4 rounded-lg mx-3 bg-[#19979b]/50  h-12">
                    <BaggageClaim className='text-[#19979b]' />
                </div>


                <div className=" mr-4">
                    <div className="text-xs">Total Earning</div>
                    <div className="font-semibold">34,123.2</div>
                    <div className="flex items-center gap-2 font-semibold">0 <div className="text-xs">USD</div></div>
                    <div className="bg-green-300/60 p-1  px-2 rounded-md text-[10px] flex items-center"><ArrowUpRight className='w-2 h-2' />2.8% Increase</div>
                </div>
                <div className="flex absolute top-3 right-2 "><EllipsisVertical /></div>
            </div>
            <div className="flex  border items-center px-4 py-3  overflow-hidden rounded-sm bg-white relative">


                <div className="flex items-center justify-center  border p-4 rounded-lg mx-3 bg-[#19979b]/50  h-12">
                    <BaggageClaim className='text-[#19979b]' />
                </div>


                <div className=" mr-4">
                    <div className="text-xs">Total Earning</div>
                    <div className="font-semibold">34,123.2</div>
                    <div className="flex items-center gap-2 font-semibold">0 <div className="text-xs">USD</div></div>
                    <div className="bg-green-300/60 p-1  px-2 rounded-md text-[10px] flex items-center"><ArrowUpRight className='w-2 h-2' />2.8% Increase</div>
                </div>
                <div className="flex absolute top-3 right-2 "><EllipsisVertical /></div>
            </div>
            <div className="flex  border items-center px-4 py-3  overflow-hidden rounded-sm bg-white relative">


                <div className="flex items-center justify-center  border p-4 rounded-lg mx-3 bg-[#19979b]/50  h-12">
                    <BaggageClaim className='text-[#19979b]' />
                </div>


                <div className=" mr-4">
                    <div className="text-xs">Total Earning</div>
                    <div className="font-semibold">34,123.2</div>
                    <div className="flex items-center gap-2 font-semibold">0 <div className="text-xs">USD</div></div>
                    <div className="bg-green-300/60 p-1  px-2 rounded-md text-[10px] flex items-center"><ArrowUpRight className='w-2 h-2' />2.8% Increase</div>
                </div>
                <div className="flex absolute top-3 right-2 "><EllipsisVertical /></div>
            </div>

        </div>
    )
}

export default FirstComp
