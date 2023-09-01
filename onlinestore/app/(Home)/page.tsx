"use client";

import useGetAllProducts from "@/api/products/useGetAllProducts";
import Image from "next/image";

export default function Home() {
  const { data, isLoading, isError } = useGetAllProducts();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>error...</h1>;
  return (
    <>
      {data?.length ? (
        data?.map((product, id) => <p key={`product_${id}`}>{product.title}</p>)
      ) : (
        <h1>No products found</h1>
      )}
    </>
  );
}
