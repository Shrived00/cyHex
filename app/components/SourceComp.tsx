import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Progress } from "@/components/ui/progress"


const SourceComp = () => {
    return (
        <div className='col-span-3 xl:col-span-2 bg-white rounded-e-md flex flex-col border  mt-3 p-3'>
            <div className="flex items-baseline">
                <div className="w-[50%] flex-wrap font-semibold">Source of Purchases</div>
                <div className="flex items-center justify-center"><div className="font-semibold">Sort By :</div>Yearly <ChevronDown /></div>
            </div>


            <div className="py-4">
                <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-[#19979b] z-10">

                    <div className="absolute top-0 aspect-square w-full rotate-[calc(82deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
                    <div className="absolute top-0 aspect-square w-full rotate-[calc(82deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-green-500 to-50% transition-transform duration-500"></div>
                    <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                    <div className="absolute bottom-0 w-full truncate text-center leading-1 font-semibold">
                        <div className="">Total Sales</div>
                        <div className="">1234</div>
                    </div>
                </div>
            </div>

            <div className="flex text-center text-xs w-[60%] mx-auto my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel iste </div>


            <div className="flex gap-3 items-center justify-between pt-2">
                <div className="">
                    <div className="">
                        <Progress value={80} className="h-2" indicatorColor="bg-blue-300" />
                    </div>

                    <div className="text-sm pt-2 text-gray-400">Ecommerse</div>
                    <div className="font-semibold">12,034</div>
                </div>
                <div className="">
                    <div className="">
                        <Progress value={80} className="h-2" indicatorColor="bg-green-300" />
                    </div>

                    <div className="text-sm pt-2 text-gray-400">Ecommerse</div>
                    <div className="font-semibold">12,034</div>
                </div>
                <div className="">
                    <div className="">
                        <Progress value={80} className="h-2" indicatorColor="bg-yellow-300" />
                    </div>

                    <div className="text-sm pt-2 text-gray-400">Ecommerse</div>
                    <div className="font-semibold">12,034</div>
                </div>

            </div>

        </div >
    )
}

export default SourceComp
