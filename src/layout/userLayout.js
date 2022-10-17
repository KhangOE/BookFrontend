import {
 Link,
  Outlet
} from "react-router-dom";



export const Layout = () => {
    return <>
    <div>
    day la head
    <Link  to="/cart">cart</Link>
    <Link  to="/Detail">detail</Link>
    <Link  to="/">Home</Link>
    </div>
    <div>
        <Outlet></Outlet>
    </div>
    <div>
      
    </div>
    </>
}