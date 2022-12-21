import React from 'react'
import { VerticalChart } from './verticalChart'
import { PieChart } from './pieChart'
export const Earningchart = () => {
    return (<>
        <div className='flex gap-6 mt-4 flex-row '>
            <div className='w-[70%] bg-white shadow-md p-4'>
                <div className='font-bold px-4 py-2 flex justify-between'>
                    <div>Revenue</div>
                    <select className='border border-gray-300 rounded-md px-2 py-2 text-sm font-semi text-gray-500'>
                        <option>This month</option>
                    </select>
                </div>
                <VerticalChart></VerticalChart>
            </div>

            <div className='flex-1 bg-white flex items-center shadow-lg '>
                <PieChart></PieChart>
            </div>

        </div>
    </>

    )
}
