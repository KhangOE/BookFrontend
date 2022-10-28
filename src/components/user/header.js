import React from "react";
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
    <Link  to="/">Home</Link>
    </div>
    
    </div>
    </>
}