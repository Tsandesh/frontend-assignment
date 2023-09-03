import { useRouter } from "next/navigation";
import React from "react";
import { IProduct } from "@/types";

interface ProductProps {
  product: IProduct;
}

const ProductCard = (props: ProductProps) => {
  const { product } = props;
  const router = useRouter();
  const handleProductDetail = (id: number) => {
    router.push(`product/${id}`);
  };
  return (
    <div className="card w-98  bg-base-100 shadow-xl p-4">
      <figure>
        <img src={product?.image} alt={product?.title} width={"150px"} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <div className="text-[#f85606] text-2xl font-700">
            ${product?.price}
          </div>
        </h2>
        <h2 className="card-title">
          {product?.title?.substring(0, 60) + "..."}
        </h2>
        <div className="flex flex-row">
          <div className="badge badge-warning text-white text-lg font-bold py-2">
            ⭐️ {product.rating.rate}
          </div>{" "}
          |<div className="text-lg font-bold px-2"></div>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn bg-orange-600 text-white"
            onClick={() => handleProductDetail(product?.id)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
