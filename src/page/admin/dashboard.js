import { LineChart } from "../../components/admin/lineChart"
import { PieChart } from "../../components/admin/pieChart"
import { VerticalChart } from "../../components/admin/verticalChart"
import DashboardHeader from "../../components/admin/dashboardHeader"
import { Earningchart } from "../../components/admin/earningchart"
import DashboardTable from "../../components/admin/dashboardTable"
export const Dashboard = () => {
    return (<>

        <div className="p-6">
            <DashboardHeader></DashboardHeader>
            <Earningchart></Earningchart>
            <DashboardTable>    </DashboardTable>
            <div className=" w-full p-4 m-4 rouned-lg rounded-lg min-h-[300px] flex justify-between gap-4 ">
                <div className=" bg-white p-4 rounded-lg w-[60%]">
                    <div className="flex justify-between px-4">
                        <h1 className="font-bold text-lg"> Total sale</h1>
                        <select className="px-4 py-1 font-bold text-lg">
                            <option className="">123</option>
                            <option className="">123</option>
                            <option className="">123</option>
                            <option className="">123</option>
                            <option className="">123</option>
                        </select>
                    </div>
                    <LineChart></LineChart>
                </div>

                <div className=' flex-1 bg-white p-4 rounded-lg'>
                    <PieChart></PieChart>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-[50%] border border-gray-300 rounded-lg bg-white">
                    <div className="border-b border-gray-300 px-4 py-1 font-bold text-lg">
                        titel
                    </div>
                    <div className="p-2">
                        <table className="table-auto w-full ">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap max-w-[25%] overflow-hidden">
                                        <div className="font-semibold w-full over text-left">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap max-w-[25%] overflow-hidden">
                                        <div className="font-semibold w-full over text-left">Email</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap max-w-[25%] overflow-hidden">
                                        <div className="font-semibold w-full over text-left">Spent</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap max-w-[25%] overflow-hidden">
                                        <div className="font-semibold w-full over text-center">Country</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img
                                                    className="rounded-full"
                                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                    width={40}
                                                    height={40}
                                                    alt="Alex Shatov"
                                                />
                                            </div>
                                            <div className="font-medium text-gray-800">
                                                Alex Shatov
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">alexshatov@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">
                                            $2,890.66
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">??</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img
                                                    className="rounded-full"
                                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                    width={40}
                                                    height={40}
                                                    alt="Alex Shatov"
                                                />
                                            </div>
                                            <div className="font-medium text-gray-800">
                                                Alex Shatov
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">alexshatov@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">
                                            $2,890.66
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">??</div>
                                    </td>
                                </tr>

                            </tbody>
                        </table></div>

                </div>
                <div className="w-[50%] border border-gray-300 rounded-lg bg-white">
                    <div className="border-b border-gray-300 px-4 py-1 font-bold text-lg">
                        titel
                    </div>
                    <table className="table-auto w-full ">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap w-[40%] bg-red-200 ">
                                    <div className="font-semibold text-left ">Nam</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Country</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap ">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                width={40}
                                                height={40}
                                                alt="Alex Shatov"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800 w-[200px] overflow-hidden  ">
                                            Alex Shatov   Alex Shatov  Alex Shatov  Alex Shatov
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">alexshatov@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $2,890.66
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>




        </div>
    </>)
}