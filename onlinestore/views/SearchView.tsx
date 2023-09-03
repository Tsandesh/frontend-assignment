"use client";

import useGetAllProducts from "@/api/products/useGetAllProducts";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const SearchView = () => {
  useGetAllProducts();
  const searchParams = useSearchParams();
  const searchText = searchParams.get("q") ?? "";
  const products: IProduct[] =
    useSelector((state: any) => state.productList.products) ?? [];

  return (
    <div>
      <div className=" grid grid-cols-3 gap-8 mx-8 mt-20">
        {products?.length ? (
          products?.map((product, id) => {
            if (
              searchText &&
              searchText.trim() &&
              !product.title.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return null;
            } else {
              return <ProductCard key={`Product_${id}`} product={product} />;
            }
          })
        ) : (
          <h1>No products found</h1>
        )}
      </div>
    </div>
  );
};

export default SearchView;
