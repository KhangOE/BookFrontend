import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-96 flex flex-col mt-5 md:mt-10 gap-5 border p-10 border-gray-300 rounded shadow-lg">
          <h1 className="text-center font-bold text-2xl">Tạo tài khoản</h1>
          <form className="flex flex-col gap-5">
            <input
              name="email"
              type="email"
              placeholder="Email của bạn"
              value={formValues.email}
              className="p-2 rounded border w-full"
            />
            <input
              name="pass"
              type="password"
              value={formValues.pass}
              placeholder="Mật khẩu"
              className="p-2 rounded border w-full"
            />
            <input
              name="re_pass"
              type="password"
              value={formValues.re_pass}
              placeholder="Xác nhận mật khẩu"
              className="p-2 rounded border"
            />
            <input
              name="username"
              type="text"
              value={formValues.username}
              placeholder="Tên người dùng"
              className="p-2 rounded border"
            />
          </form>
          <label className="hover:cursor-pointer">
            <input className="mr-2" type="checkbox" />
            Giữ đăng nhập tài khoản
          </label>
          <label className="hover:cursor-pointer">
            <input className="mr-2" type="checkbox" />
            Gửi thông báo về e-mail!
          </label>
          <button className="w-full py-2 bg-green-600 hover:bg-blue-600 text-white rounded">
            Tạo tài khoản
          </button>
          <hr className="my-5" />
          <Link to="/Login">
            <button className="w-full py-2 border-[2px] rounded hover:bg-gray-200">
              Đăng nhập
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
