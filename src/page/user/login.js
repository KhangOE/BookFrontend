import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Login = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-96 flex flex-col mt-5 md:mt-10 gap-3 border p-10 border-gray-300 rounded shadow-lg">
          <h1 className="text-center font-bold text-2xl mb-5">Đăng nhập</h1>
          <form className="flex flex-col gap-5">
            <input
              placeholder="Email của bạn"
              className="p-2 rounded border w-full"
            />
            <input
              placeholder="Mật khẩu"
              className="p-2 rounded border w-full"
            />
          </form>
          <a
            className="opacity-80 text-blue-600 hover:cursor-pointer hover:italic hover:text-blue-700"
            href
          >
            Quên mật khẩu?
          </a>
          <label>
            <input className="mr-2" type="checkbox" />
            Nhớ mật khẩu?
          </label>
          <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded my-5">
            Đăng nhập
          </button>
          <button className="w-full py-1 bg-blue-600 hover:bg-blue-700 text-white rounded flex justify-center items-center gap-2">
            <FcGoogle className="w-7 h-7 bg-white rounded" />
            Đăng nhập bằng Google
          </button>
          <hr className="my-5" />
          <Link to="/register">
            <button className="w-full py-2 border-[2px] rounded font-semibold hover:bg-gray-200">
              Tạo tài khoản
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
