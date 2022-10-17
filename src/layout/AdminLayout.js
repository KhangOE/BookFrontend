import {
  Outlet
} from "react-router-dom";

import { Footer } from "../components/admin/footer";
import { Header } from "../components/admin/header";
import { AdminSide } from "../components/admin/sideBar";
export const AdminLayout = () => {
    return <>
    <div>
    <Header/>
    </div>

    <div className='flex w-full'>

    <div className='hidden md:block'>
        <AdminSide/>
    </div >


    <div className='flex-1 bg-[#F7F7F7]'>
     <Outlet></Outlet>
    </div>
    
    </div>
    <div>
        <Footer/>
    </div>
    </>
}