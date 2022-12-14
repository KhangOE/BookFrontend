import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './page/user/Home';
import { Cart } from './page/user/Cart';
import { Detail } from './page/user/Detail';
import { Layout } from './layout/userLayout';
import { AdminLayout } from './layout/AdminLayout';
import { Product } from './page/user/Product';
import { ListUser } from './page/admin/listUser';
import { ProfileUSer } from './page/admin/profileuser';
import { Login } from './page/user/login';
import { Register } from './page/user/register';
import { Addproduct } from './page/admin/addproduct';
import { Products } from './page/admin/listProduct';
import { Dashboard } from './page/admin/dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="Detail" element={<Detail></Detail>}></Route>
          <Route path="Cart" element={<Cart />} />
          <Route path="Product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />} >
          <Route path="users/:id" element={<ProfileUSer />} />
          <Route path="users" element={<ListUser />} />
          <Route path="products" element={<Products />} />
          <Route path="addproduct" element={<Addproduct />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route index element={< ListUser />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
