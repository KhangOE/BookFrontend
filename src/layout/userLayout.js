import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Header } from "../components/user/header";
import { Footer } from "../components/user/footer";
import { AiOutlineUp } from "react-icons/ai";

export const Layout = () => {
  const [isBackToTop, setIsBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-[#f5f5f5] min-h-screen flex flex-col justify-between">
        <div className="relative">
          <div className="sticky top-0 z-20 shadow-xl">
            <Header />
          </div>
          <div className="z-0">
            <Outlet></Outlet>
          </div>
          <div className="z-0 mt-10">
            <Footer />
          </div>
          {isBackToTop && (
            <div className="flex justify-end pr-10 sticky top-0 z-10 bottom-20 collapse">
              <button
                className="rounded-full p-2 text-xl md:p-3 md:text-3xl text-gray-400 bg-gray-200 opacity-60"
                onClick={scrollTop}
              >
                <AiOutlineUp />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
