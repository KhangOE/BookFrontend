import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
    Link,
  
   } from "react-router-dom";
export const Header=() => {
    return <>
    <div>
    <div>
        đây là header
    </div>
    <div className="flex  justify-between w-[300px]">
    <Link  to="/cart">cart</Link>
    <Link  to="/Detail">detail</Link>
    <Link  to="/Login">Login</Link>
    <Link  to="/register">register</Link>
    <Link className="flex items-center"  to="/">Home <AiFillHome/> </Link>
    </div>
    
    </div>
    </>
}