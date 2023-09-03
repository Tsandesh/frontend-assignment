import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getSingleProduct } from ".";

const useGetSingleProduct = (id: string) => {
  return useQuery(["get-single-product"], () => getSingleProduct(id), {
    onSuccess: (data) => {
      // show success toast
      console.log("Data ayo");
    },
  });
};

export default useGetSingleProduct;
