"use client";

import useGetAllProducts from "@/api/products/useGetAllProducts";
import ProductCard from "@/components/ProductCard";
import React from "react";

const HomeView = () => {
  const { data, isLoading, isError } = useGetAllProducts();

  if (isLoading)
    return <span className="loading loading-spinner loading-xs"></span>;
  if (isError) return <h1>error...</h1>;
  return (
    <>
      <div className=" grid grid-cols-3 gap-8 mx-8 mt-4">
        {data?.length ? (
          data?.map((product, id) => (
            <ProductCard key={`Product_${id}`} product={product} />
          ))
        ) : (
          <h1>No products found</h1>
        )}
      </div>
    </>
  );
};

export default HomeView;
