"use client";

import React from "react";
import { usePathname } from "next/navigation";
import useGetSingleProduct from "@/api/products/useGetSingleProduct";

const ProductDetailView = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { data, isLoading, isError } = useGetSingleProduct(id);
  console.log({ data });

  return (
    <>
      <div className=" grid grid-cols-2 p-8 mt-20">
        <div>
          <img src={data?.image} alt={data?.title} width={"80%"} />
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-4">{data?.title}</h2>
          <div className="text-[#f85606] text-3xl font-semibold mb-4">
            ${data?.price}
          </div>
          <p className="text-xl font-normal mb-4 ">{data?.description}</p>
          <div className="flex justify-between text-2xl font-bold p-4 mb-4">
            <div className="flex flex-1">
              <div className="badge badge-warning text-white  text-2xl font-bold mr-4 p-4">
                ⭐️ {data?.rating.rate}
              </div>
              <div>| Sold {data?.rating.count}</div>
            </div>
            <div className="badge outline p-4">{data?.category}</div>
          </div>
          <div className="float-right">
            <button className="btn bg-orange-600 text-white">Buy Now</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
