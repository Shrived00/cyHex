"use client"
import React from "react"
import WorldMap from "react-svg-worldmap";
const MapComp = () => {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];
    return (
        <div className='col-span-6 md:col-span-2 bg-white border p-4 flex-col gap-3 items-center  '>


            <div className="flex items-center justify-between mb-10">
                <div className="font-semibold">Live Users by Country</div>
                <div className="text-xs p-1 rounded-sm bg-[#19979b]/50">Export Report</div>
            </div>


            <div className=" flex items-center justify-center">   <WorldMap
                color="blue"
                valueSuffix="people"
                data={data}
                size="md"
            /></div>
        </div>
    )
}

export default MapComp
