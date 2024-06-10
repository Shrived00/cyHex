import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});


interface DonutProps {
    selectedFilter: string;
}

const Donut: React.FC<DonutProps> = ({ selectedFilter }) => {
    const [chartOptions, setChartOptions] = useState<{
        series: number[];
        options: ApexCharts.ApexOptions;
    }>({
        series: [53, 20, 27],
        options: {
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: false // Hide series labels
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false // Set dataLabels to false
            },
            legend: {
                show: true, // Show the legend
                position: 'bottom' // Position the legend at the bottom
            },
            colors: ['#19979b', '#4bcdd1', '#b6ddde'], // Change colors
            labels: ['Lorem A', 'Lorem B', 'Lorem C'] // Change legend names
        }
    });

    useEffect(() => {
        // Update chart data based on selected filter
        const newSeries = getSeriesData(selectedFilter);
        setChartOptions(prevState => ({
            ...prevState,
            series: newSeries
        }));
    }, [selectedFilter]);

    const getSeriesData = (filter: string): number[] => {
        switch (filter) {
            case 'Product A':
                return [53, 20, 27]; // Update series data for Product A
            case 'Product B':
                return [30, 40, 50]; // Update series data for Product B
            case 'Product C':
                return [10, 20, 30]; // Update series data for Product C
            case '1M':
                return [10, 20, 30];
            case '6M':
                return [10, 24, 10];
            case '1Y':
                return [60, 20, 30];
            default:
                return [53, 20, 27]; // Default series data
        }
    };

    return (
        <div className="relative">
            <Chart options={chartOptions.options} series={chartOptions.series} type="donut" width='100%' />
            <div className="absolute top-[40%]  left-[50%] -translate-x-[50%] -translate-y-[50%]
                text-[6px] sm:text-sm md:text-md
            ">
                <div className="">Total Value</div>
                <div className="">$7654</div>
            </div>
        </div>
    );
}

export default Donut;
