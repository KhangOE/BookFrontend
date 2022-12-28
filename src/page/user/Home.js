import React from "react";
import Banner from "./components/Home/Banner";
import Categories from "../../StaticData/DataFrontEnd/Home/Banner.json";
import BestSelling from "../../StaticData/DataFrontEnd/Home/BestSelling.json";
import BestSellingTop from "../../StaticData/DataFrontEnd/Home/BestSellingTop.json";
import Authors from "../../StaticData/DataFrontEnd/Home/Author.json";
import Found from "../../StaticData/DataFrontEnd/Home/Found.json";

export const Home = (props) => {
  return (
    <>
      {/* Banner ở đây*/}
      <Banner />

      {/* ---------------------------------------------------------------------- */}
      {/* Nội dung trang */}
      <div className="mt-10 my-10 w-full flex flex-col items-center box-border">
        <div className="lg:w-2/3 sm:w-5/6">
          {/* Danh mục sách*/}
          <div className="w-fit h-fit flex flex-row justify-center box-border">
            {Categories &&
              Categories.map((category) => {
                return (
                  <div className="box-border p-5 overflow-hidden">
                    <a href>
                      <img
                        className="transition transform delay-110 hover:scale-110 hover:cursor-pointer"
                        src={category.src}
                        alt={category.alt}
                      />
                    </a>
                  </div>
                );
              })}
          </div>

          {/* Tiêu đề */}
          <div className="text-gray-600 font-bold text-2xl text-center p-3 box-border">
            SÁCH MỚI PHÁT HÀNH
          </div>
          <div className="text-gray-600 text-center pb-3 font-light">
            Sách BookStore mới phát hành. Mời đọc giả chọn đọc.
          </div>

          {/* Danh mục sách mới phát hành */}
          <div className="w-full box-border flex flex-row justify-between gap-10 overflow-hidden p-5">
            {BestSelling &&
              BestSelling.map((item) => {
                return (
                  <div className="min-w-[200px] flex flex-col gap-1 p-2 hover:cursor-pointer hover:shadow-xl">
                    {/* Ảnh sản phẩm */}
                    <div className="flex justify-start items-center h-44">
                      <img
                        className="shadow-lg h-full"
                        src={item.imageLink}
                        alt={item.title}
                      />
                    </div>
                    {/* Tiêu đề và thông tin sản phẩm */}
                    <div className="text-lg font-bold h-[60px] line-clamp-2">
                      {item.title}
                    </div>
                    <div className="text-sm line-clamp-1">
                      {"Tác giả: " + item.author}
                    </div>
                    <div className="text-sm line-clamp-1">
                      {"Quốc gia: " + item.country}
                    </div>
                    <div className="text-sm line-clamp-1">
                      {"Ngôn ngữ: " + item.language}
                    </div>
                    <div className="text-sm line-clamp-1">
                      {"Giá bán: " +
                        item.price
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      <sup>đ</sup>
                    </div>
                    <button className="font-bold bg-green-700 text-white rounded-md py-2 whitespace-nowrap">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="grid grid-rows-2 grow min-w-fit">
              <div className="auto-cols-min">
                {/* Tác giả nổi bật */}
                <div className="flex items-center font-semibold">
                  TÁC GIẢ NỔI BẬT
                </div>
                <div className="font-semibold text-gray-500 flex flex-col gap-2">
                  {/* Tác giả nổi bật */}
                  {Authors &&
                    Authors.map((item) => {
                      return (
                        <div className="flex items-center gap-5 mt-6 cursor-pointer">
                          <img
                            className="h-14 w-14 rounded-full border-2"
                            src={item.avatar}
                            alt={item.name}
                          />
                          <div className="inline-block hover:text-green-800">
                            {item.name}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Sản phẩm bán chạy nhất */}
              <div>
                <div className="flex items-center font-semibold mt-6">
                  SẢN PHẨM BÁN CHẠY NHẤT
                </div>
                <div className="flex flex-col">
                  {BestSellingTop &&
                    BestSellingTop.map((item) => {
                      return (
                        <div className="flex w-full gap-2 p-5 cursor-pointer hover:shadow-xl">
                          <img
                            className="max-h-[100px]"
                            src={item.imageLink}
                            alt=""
                          />
                          <div className="flex flex-col justify-between">
                            <div className="line-clamp-2">{item.title}</div>
                            <div className="mb-2">
                              {item.price
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              <sup>đ</sup>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {/* ------------------------------------------- */}
            <div className="flex flex-col gap-5">
              <div className="w-full box-border flex justify-end items-center text-gray-600  font-semibold">
                <div className="mr-auto">ĐƯỢC TÌM KIẾM NHIỀU NHẤT</div>
                <div className="flex grid grid-flow-col lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-3 md:grid-rows-2 md:gap-1">
                  <div className="inline-block hover:text-green-800 hover:underline ml-3 cursor-pointer">
                    Bán chạy nhất
                  </div>
                  <div className="inline-block hover:text-green-800 hover:underline ml-3 cursor-pointer">
                    Kỹ năng - Selfhelp
                  </div>
                  <div className="inline-block hover:text-green-800 hover:underline ml-3 cursor-pointer">
                    Kinh tế
                  </div>
                  <div className="inline-block hover:text-green-800 hover:underline ml-3 cursor-pointer">
                    Kinh điển
                  </div>
                  <div className="inline-block hover:text-green-800 hover:underline ml-3 cursor-pointer">
                    Trinh thám
                  </div>
                </div>
              </div>

              {/* Được tìm kiếm nhiều nhất */}
              <div className="grid gap-8 grid-cols-2">
                {Found &&
                  Found.map((item) => {
                    return (
                      <div className="w-full border flex gap-2 p-2 cursor-pointer hover:shadow-lg">
                        <img
                          className="min-w-[100px] h-[150px] md:h-[250px] md:min-w-[200px] "
                          src={item.thumbnailUrl}
                          alt=""
                        />
                        <div className="flex flex-col gap-2 p-2">
                          <div className="font-semibold line-clamp-2">
                            {item.title}
                          </div>
                          <div className="flex justify-end my-1">
                            <div className="mr-auto text-green-700 font-semibold">
                              {item.price
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              <sup>đ</sup>
                            </div>
                          </div>
                          <div className="line-clamp-6">
                            {item.longDescription}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//  return <>
//    <h1>
//      HOME PAGE
//    </h1>
//  </>
//}
