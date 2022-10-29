import {
  Outlet
} from "react-router-dom";

import { Header } from "../components/user/header";
import { Footer } from "../components/user/footer";

export const Layout = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] min-h-screen flex flex-col justify-between">
        <div>
          <Header />

          <div className="">
            <Outlet></Outlet>
         </div>
        </div>
        <Footer className="" />
      </div>
    </>
  );
}