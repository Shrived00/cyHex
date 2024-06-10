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


            <div className="">



            </div>


            <div className="">
                <div className="">
                    <div className=""><Progress value={33} />
                    </div>
                    <div className="">Progress</div>
                    <div className="">1234</div>
                </div>
            </div>

        </div>
    )
}

export default SourceComp
