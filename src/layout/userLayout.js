import {
  Outlet
} from "react-router-dom";

import { Header } from "../components/user/header";
import { Footer } from "../components/user/footer";

export const Layout = () => {
    return <>
    <Header/>

    <div className="min-h-screen">
        <Outlet></Outlet>
    </div>
    
    <div>
        
    <Footer/>
    </div>
    </>
}