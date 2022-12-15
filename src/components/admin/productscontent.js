import React, { useEffect, useState } from "react";
import './productscontent.css'
import { books } from "../../StaticData/book";
export const ProductsContent = () => {
    const [bookl, setBookl] = useState([])
    useEffect(() => {
        setBookl(books)
    })
    return (<>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 w-full mt-4">
            {
                bookl.map(item => {
                    return (<div>
                        <div className="bg-white ">
                            <div className="max-h-[160px] overflow-hidden">

                                <img className="mx-auto " src={`${item.img || 'https://product.hstatic.net/200000510041/product/1cm_giua_anh_va_em-01_ec9d8ac6c8d34b809a8786179d59154b_846151d3ff3248d29c542385953db6cd_compact.jpg'}`}></img>
                            </div>

                            <div className="p-2">
                                <p className="text-sm font-bold h-[32px] leading-[16px] twoline ">
                                    {item.name || <div>name</div>}
                                </p>

                                <div className="flex justify-between font-bold mt-2">
                                    <span className="text-[#4B49AC]">{item.price}₫ </span>
                                    <span className="text-gray-500">{item.sale}đ</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    </>)
}