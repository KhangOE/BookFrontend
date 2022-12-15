import { LineChart } from "../../components/admin/lineChart"
import { PieChart } from "../../components/admin/pieChart"
import { VerticalChart } from "../../components/admin/verticalChart"
export const Dashboard = () => {
    return (<>
        <div className='w-[15%]'>
            <PieChart></PieChart>

        </div>
        <LineChart></LineChart>
        <VerticalChart></VerticalChart>
    </>)
}