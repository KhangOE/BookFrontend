import React from "react";

export const Home = (props) => {
  return (
    <>
      <header id="header" className="home__header">
        {/* Header top ở đây */}
        <div className="home__top-banner">
          <a href="https://nhanam.vn/">
            <img
              className="home__top-banner--width"
              src="//theme.hstatic.net/200000510041/1000879666/14/hdt_banner_img.png?v=128"
              alt="Header Top Banner"
            />
          </a>
        </div>
        {/* Header middle ở đây */}
        <div className="bg-green-800 grid grid-cols-3 grid-rows-1 flex items-center p-2">
          <div className="flex sm:justify-start md:justify-center">
            <a href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-4 h-4 text-white mr-4 ml-4"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/">
              {/* Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 text-white"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
          <div>
            <marquee className="text-white">
              Chào mừng bạn đến với BookStore. Chúc bạn tìm được cuốn sách phù
              hợp nhất.
            </marquee>
          </div>
          <div className="flex flex-row flex-wrap">
            <a
              href="tel:0988345276"
              className="text-white inline-block whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 inline ml-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              0988345276
            </a>
            <a
              href="mailto:bookstore@gmail.com"
              className="text-white inline-block whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline-block ml-6 mr-1"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              bookstore@gmail.com
            </a>
          </div>
        </div>
        {/* Header bottom ở đây */}
        <div className="grid grid-flow-col grid-cols-8 mt-6">
          <div className="col-span-2">
            <a
              href="https://nhanam.vn/"
              className=" flex sm:flex-row-reverse md:justify-between"
            >
              <img
                className="shrink-0"
                src="//theme.hstatic.net/200000510041/1000879666/14/logo.png?v=128"
                alt="Nhã Nam"
              />
            </a>
          </div>
          {/* Thanh tìm kiếm */}
          <div className="col-span-4 flex flex-row flex-r items-center sm:justify-items-start md:justify-center">
            <input
              maxLength={40}
              className="align-middle border border-black-500 h-10 p-2 w-3/5 shadow-md focus:placeholder-transparent outline-none"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <button
              type="submit"
              className="h-10 p-2 w-auto bg-gray-200 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-2">
            <a href className="whitespace-nowrap sm:mr-2 md:mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Đăng nhập
            </a>
            <a href className="whitespace-nowrap sm:mr-2 md:mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline mr-1"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
              Đăng kí
            </a>
            {/* Giỏ hàng */}
            <div className="inline-block whitespace-nowrap">
              <a href>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 inline md:justify-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-white w-6 h-6 inline-block absolute rounded-xl bg-green-900 text-center">
                  0
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Banner ở đây*/}
      <div className="w-full h-fit mt-4 flex flex-col items-center relative">
        {/* Slider */}
        <div className="swiper w-full absolute top-0 left-0 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper w-full"
            id="swiper-wrapper-119db1edc0266e2e"
            aria-live="off"
            style={{
              "-webkit-transition-duration": "0ms",
              "transition-duration": "0ms",
              "-webkit-transform": "translate3d(-1968px, 0px, 0px)",
              "-ms-transform": "translate3d(-1968px, 0px, 0px)",
              transform: "translate3d(-1968px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 2"
              style={{ width: "984px" }}
            >
              <img
                src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img3.jpg?v=128"
                alt="Sách Nhã Nam"
              />
            </div>
            {/* Slides */}
            <div
              className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 2"
              style={{ width: "984px" }}
            >
              <img
                src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img2.jpg?v=128"
                alt="Sách mới"
              />
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 2"
              style={{ width: "984px" }}
            >
              <img
                src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img3.jpg?v=128"
                alt="Sách Nhã Nam"
              />
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 2"
              style={{ width: "984px" }}
            >
              <img
                src="https://theme.hstatic.net/200000510041/1000879666/14/ms_banner_img2.jpg?v=128"
                alt="Sách mới"
              />
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 1"
            />
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 2"
              aria-current="true"
            />
          </div>
          <div
            className="swiper-button-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-119db1edc0266e2e"
          />
          <div
            className="swiper-button-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-119db1edc0266e2e"
          />
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        <ul className="w-fit h-fit font-medium text-gray-800 text-center flex flex-row box-border bg-green-500 opacity-80 absolute z-10 md:px-6">
          <li className="p-3">
            <a href>SẢN PHẨM ĐÃ XEM</a>
          </li>
          <li className="p-3">
            <a href>SÁCH BÁN CHẠY</a>
          </li>
          <li className="p-3">
            <a href>TẤT CẢ SẢN PHẨM</a>
          </li>
          <li className="p-3">
            <a href>SÁCH MỚI PHÁT HÀNH</a>
          </li>
        </ul>
      </div>
      {/* Nội dung trang */}
      <div className="mt-10 my-10 w-full flex flex-col items-center box-border">
        <div className="lg:w-3/5 sm:w-5/6">
          {/* Danh mục sách*/}
          <div className="w-fit h-fit flex flex-row justify-center box-border">
            <div className="box-border p-5 overflow-hidden">
              <a href>
                <img
                  className="transition transform delay-110 hover:scale-110"
                  src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img1.png?v=128"
                  alt="Sách đạt giải thưởng"
                />
              </a>
            </div>
            <div className="box-border p-5 overflow-hidden">
              <a href>
                <img
                  className="transition transform delay-110 hover:scale-110"
                  src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img2.png?v=128"
                  alt="Sách bán chạy"
                />
              </a>
            </div>
            <div className="box-border p-5 overflow-hidden">
              <a href>
                <img
                  className="transition transform delay-110 hover:scale-110"
                  src="https://theme.hstatic.net/200000510041/1000879666/14/hbanner_img3.png?v=128"
                  alt="Sách thiếu nhi"
                />
              </a>
            </div>
          </div>
          {/* Tiêu đề */}
          <h1 className="text-gray-600 font-bold text-2xl text-center w-fit p-3">
            SÁCH MỚI PHÁT HÀNH
          </h1>
          <h3 className="text-gray-600 text-center w-fit pb-3">
            Sách BookStore mới phát hành. Mời đọc giả chọn đọc.
          </h3>
          {/* Danh mục sách mới phát hành */}
          <div className="w-full box-border border-2">
            <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-rows-1 relative">
              <a href>
                <div className="min-w-5/6 my-1 mx-3 border-2 hover:shadow-2xl relative">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-1 right-1">
                    -20%
                  </div>
                  {/* Ảnh sản phẩm */}
                  <div className="flex justify-center">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cuon_sach_lon_ruc_ro_ve_giac_quan-01_c810f390fd084a15802a1e9b57e16a93_compact.jpg"
                      alt="Ảnh nè"
                    />
                  </div>
                  {/* Tiêu đề và thông tin sản phẩm */}
                  <div className="text-xl font-bold line-clamp-3 p-2">
                    Đây là tựa đề một cuốn sách nào đó bất kì
                  </div>
                  <div className="flex justify-end p-2">
                    <div className="flex mr-auto">
                      172,000 <div className="inline-block underline">đ</div>
                    </div>
                    <div className="flex line-through text-gray-400">
                      215,000 <div className="inline-block underline">đ</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href>
                <div className="min-w-5/6 my-1 mx-3 border-2 hover:shadow-2xl relative">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-1 right-1">
                    -20%
                  </div>
                  {/* Ảnh sản phẩm */}
                  <div className="flex justify-center">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cuon_sach_lon_ruc_ro_ve_giac_quan-01_c810f390fd084a15802a1e9b57e16a93_compact.jpg"
                      alt="Ảnh nè"
                    />
                  </div>
                  {/* Tiêu đề và thông tin sản phẩm */}
                  <div className="text-xl font-bold line-clamp-3 p-2">
                    Đây là tựa đề một cuốn sách nào đó bất kì
                  </div>
                  <div className="flex justify-end p-2">
                    <div className="flex mr-auto">
                      172,000 <div className="inline-block underline">đ</div>
                    </div>
                    <div className="flex line-through text-gray-400">
                      215,000 <div className="inline-block underline">đ</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href>
                <div className="min-w-5/6 my-1 mx-3 border-2 hover:shadow-2xl relative">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-1 right-1">
                    -20%
                  </div>
                  {/* Ảnh sản phẩm */}
                  <div className="flex justify-center">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cuon_sach_lon_ruc_ro_ve_giac_quan-01_c810f390fd084a15802a1e9b57e16a93_compact.jpg"
                      alt="Ảnh nè"
                    />
                  </div>
                  {/* Tiêu đề và thông tin sản phẩm */}
                  <div className="text-xl font-bold line-clamp-3 p-2">
                    Đây là tựa đề một cuốn sách nào đó bất kì
                  </div>
                  <div className="flex justify-end p-2">
                    <div className="flex mr-auto">
                      172,000 <div className="inline-block underline">đ</div>
                    </div>
                    <div className="flex line-through text-gray-400">
                      215,000 <div className="inline-block underline">đ</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href>
                <div className="min-w-5/6 my-1 mx-3 border-2 hover:shadow-2xl relative">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-1 right-1">
                    -20%
                  </div>
                  {/* Ảnh sản phẩm */}
                  <div className="flex justify-center">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cuon_sach_lon_ruc_ro_ve_giac_quan-01_c810f390fd084a15802a1e9b57e16a93_compact.jpg"
                      alt="Ảnh nè"
                    />
                  </div>
                  {/* Tiêu đề và thông tin sản phẩm */}
                  <div className="text-xl font-bold line-clamp-3 p-2">
                    Đây là tựa đề một cuốn sách nào đó bất kì
                  </div>
                  <div className="flex justify-end p-2">
                    <div className="flex mr-auto">
                      172,000 <div className="inline-block underline">đ</div>
                    </div>
                    <div className="flex line-through text-gray-400">
                      215,000 <div className="inline-block underline">đ</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href>
                <div className="min-w-5/6 my-1 mx-3 border-2 hover:shadow-2xl relative">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-1 right-1">
                    -20%
                  </div>
                  {/* Ảnh sản phẩm */}
                  <div className="flex justify-center">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cuon_sach_lon_ruc_ro_ve_giac_quan-01_c810f390fd084a15802a1e9b57e16a93_compact.jpg"
                      alt="Ảnh nè"
                    />
                  </div>
                  {/* Tiêu đề và thông tin sản phẩm */}
                  <div className="text-xl font-bold line-clamp-3 p-2">
                    Đây là tựa đề một cuốn sách nào đó bất kì
                  </div>
                  <div className="flex justify-end p-2">
                    <div className="flex mr-auto">
                      172,000 <div className="inline-block underline">đ</div>
                    </div>
                    <div className="flex line-through text-gray-400">
                      215,000 <div className="inline-block underline">đ</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 mt-6 text-gray-500">
            <div className="flex items-center font-semibold">
              TÁC GIẢ NỔI BẬT
            </div>
            <div className="col-span-3 w-full box-border flex justify-end items-center text-gray-600  font-semibold">
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
            {/* Tác giả nổi bật */}
            <div className="font-semibold text-gray-500">
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
              <a href>
                <div className="flex items-center mt-6 cursor-pointer">
                  <img
                    className="h-12 w-12 rounded-full border-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg"
                    alt=""
                  />
                  <div className="inline-block hover:text-green-800 ml-2">
                    Nguyễn Du
                  </div>
                </div>
              </a>
            </div>
            {/* Sản phẩm tìm kiếm nhiều nhất */}
            <div className="col-span-3 row-span-2">
              <div className="grid gap-8 grid-cols-2">
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="w-full grid grid-cols-2 border-2 hover:shadow-2xl p-4">
                    <div className="relative">
                      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-800 text-white absolute top-0 right-4">
                        -20%
                      </div>
                      <img
                        className="box-border"
                        src="https://product.hstatic.net/200000510041/product/buoc_cham_lai_giua_the_gian_voi_va-01_338b4d266e0d4b1cabe9e968152e1976_0e7784f04e0c4d67a7d9cb31f544fd4a_medium.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center text-black">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end my-1">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                      <div>
                        Chứa mô tả cuốn sách, nhiều nội dung sơ bộ về cuốn sách
                        sẽ được biểu diễn ở đây, nội dung, nội dung nội dung nội
                        dung nội dung nội dung nội dung nội dung nội dung
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center font-semibold mt-6">
                SẢN PHẨM BÁN CHẠY NHẤT
              </div>
              <div className="flex flex-col justify-center items-center">
                <a href>
                  <div className="grid grid-cols-3 p-5 hover:shadow-xl">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cay_cam_ngot_cua_toi-01_b6804b7662784860858e2d440cd61e45_d0efcd04cce34b349e3eb43292340185_small.jpg"
                      alt=""
                    />
                    <div className="col-span-2">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end mt-2">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="grid grid-cols-3 p-5 hover:shadow-xl">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cay_cam_ngot_cua_toi-01_b6804b7662784860858e2d440cd61e45_d0efcd04cce34b349e3eb43292340185_small.jpg"
                      alt=""
                    />
                    <div className="col-span-2">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end mt-2">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="grid grid-cols-3 p-5 hover:shadow-xl">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cay_cam_ngot_cua_toi-01_b6804b7662784860858e2d440cd61e45_d0efcd04cce34b349e3eb43292340185_small.jpg"
                      alt=""
                    />
                    <div className="col-span-2">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end mt-2">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="grid grid-cols-3 p-5 hover:shadow-xl">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cay_cam_ngot_cua_toi-01_b6804b7662784860858e2d440cd61e45_d0efcd04cce34b349e3eb43292340185_small.jpg"
                      alt=""
                    />
                    <div className="col-span-2">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end mt-2">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href>
                  <div className="grid grid-cols-3 p-5 hover:shadow-xl">
                    <img
                      src="https://product.hstatic.net/200000510041/product/cay_cam_ngot_cua_toi-01_b6804b7662784860858e2d440cd61e45_d0efcd04cce34b349e3eb43292340185_small.jpg"
                      alt=""
                    />
                    <div className="col-span-2">
                      <div className="font-semibold">ĐÂY LÀ TÊN CUỐN SÁCH</div>
                      <div className="flex justify-end mt-2">
                        <div className="mr-auto text-green-700 font-semibold">
                          172,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                        <div className="ml-1 line-through text-gray-400">
                          215,000{" "}
                          <div className="inline-block underline">đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chân trang */}
      <hr />
      <div className="grid grid-cols-4 flex flex-row mt-2 mx-8 my-8 gap-y-8">
        <div className="font-semibold">HỖ TRỢ KHÁCH HÀNG</div>
        <div className="flex flex-col">
          <div className="mb-3 font-semibold">VỀ CHÚNG TÔI</div>
          <div className="flex flex-col font-light">
            <a className="my-1 hover:text-green-700" href>
              Giới thiệu công ty
            </a>
            <a className="my-1 hover:text-green-700" href>
              Tìm cửa hàng
            </a>
            <a className="my-1 hover:text-green-700" href>
              Tuyển dụng
            </a>
          </div>
        </div>
        <div className="font-semibold">HỢP TÁC &amp; LIÊN KẾT</div>
        <div className="flex flex-col">
          <div className="mb-3 font-semibold">KẾT NỐI VỚI CHÚNG TÔI</div>
          <div className="flex flex-row font-light items-center">
            <a className="box-border mx-2" href="https://www.facebook.com">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a className="box-border mx-2" href="https://www.instagram.com">
              <svg
                className="h-7 w-7 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="font-semibold">BOOKSTORE</div>
          <div className="mt-4 font-light">
            <div className="mt-1">Địa chỉ: 39 Phổ Quang, Tân Bình, TP.HCM</div>
            <div className="mt-1">
              Số điện thoại:{" "}
              <a
                href="tel:0988345276"
                className="inline-block hover:text-green-700"
              >
                0988345276
              </a>
            </div>
            <div className="mt-1">
              Email:{" "}
              <a
                href="mailto:bookstore@gmail.com"
                className="inline-block hover:text-green-700"
              >
                bookstore@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-semibold">ĐĂNG KÍ NHẬN TIN</div>
          <div className="mt-4 font-light">
            <input
              className="p-2 border-2 box-border inline-block w-3/5 focus:placeholder-transparent outline-none"
              type="text"
              placeholder="Nhập email của bạn..."
            />
            <button
              className="bg-green-700 text-white font-semibold p-2 box-border inline-block hover:bg-green-800"
              type="submit"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
