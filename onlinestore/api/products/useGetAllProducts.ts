import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from ".";

const useGetAllProducts = () => {
  return useQuery(["get-all-product"], () => getAllProduct(), {
    onSuccess: (data) => {
      // show success toast
      console.log(data);
    },
  });
};

export default useGetAllProducts;
