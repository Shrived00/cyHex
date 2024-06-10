import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});



interface SeriesData {
    name: string;
    data: number[];
}

interface BarCompProps {
    selectedFilter: string;
}

const BarComp: React.FC<BarCompProps> = ({ selectedFilter }) => {
    const [state, setState] = useState<{
        options: ApexCharts.ApexOptions;
        series: SeriesData[];
    }>({
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 4, // Set the border radius here
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                max: 50
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            colors: ['#19979b', 'rgba(25 151 155 / 0.5)']
        },
        series: []
    });

    useEffect(() => {
        const newSeries = getSeriesData(selectedFilter);
        setState(prevState => ({
            ...prevState,
            series: newSeries
        }));

        // Check if the 'window' object is available before accessing it
        if (typeof window !== 'undefined') {
            // You can access the 'window' object here
            // and perform any operations that require it
        }
    }, [selectedFilter]);

    const getSeriesData = (filter: string): SeriesData[] => {
        switch (filter) {
            case 'Product A':
                return [
                    { name: 'PRODUCT A', data: [10, 20, 10, 5, 5, 10, 10, 5, 5, 5, 10, 10] },
                    { name: 'PRODUCT B', data: [15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
                ];
            case 'Product B':
                return [
                    { name: 'PRODUCT A', data: [5, 10, 5, 10, 5, 5, 5, 5, 5, 5, 5, 5] },
                    { name: 'PRODUCT B', data: [10, 5, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5] }
                ];
            case 'Product C':
                return [
                    { name: 'PRODUCT A', data: [5, 5, 5, 10, 10, 5, 15, 5, 5, 5, 5, 5] },
                    { name: 'PRODUCT B', data: [10, 10, 15, 15, 5, 5, 5, 25, 5, 15, 5, 5] }
                ];
            case '1M':
                return [
                    { name: 'PRODUCT A', data: [5, 10, 15, 10, 12, 10, 5, 10, 15, 20, 25, 30] },
                    { name: 'PRODUCT B', data: [2, 5, 8, 10, 5, 5, 8, 10, 10, 15, 20, 25] }
                ];
            case '6M':
                return [
                    { name: 'PRODUCT A', data: [15, 25, 35, 10, 20, 30, 25, 35, 30, 20, 25, 35] },
                    { name: 'PRODUCT B', data: [10, 15, 25, 20, 10, 15, 25, 30, 35, 25, 20, 15] }
                ];
            case '1Y':
                return [
                    { name: 'PRODUCT A', data: [20, 30, 40, 25, 35, 45, 30, 40, 45, 35, 40, 45] },
                    { name: 'PRODUCT B', data: [15, 20, 25, 30, 25, 20, 25, 30, 35, 40, 35, 30] }
                ];
            default:
                return [
                    { name: 'PRODUCT A', data: [20, 30, 10, 40, 21, 10, 10, 5, 5, 5, 10, 10] },
                    { name: 'PRODUCT B', data: [15, 5, 30, 5, 5, 32, 11, 9, 10, 5, 25, 5] }
                ];
        }
    };


    return (
        <div className="col-span-3 w-[60%]">
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            width='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarComp;