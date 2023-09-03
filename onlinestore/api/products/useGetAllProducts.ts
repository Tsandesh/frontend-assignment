import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from ".";
import { useDispatch } from "react-redux";
import { addProducts } from "@/redux/reducers/productListSlice";

const useGetAllProducts = () => {
  const dispatch = useDispatch();
  return useQuery(["get-all-product"], () => getAllProduct(), {
    onSuccess: (data) => {
      dispatch(addProducts(data));
    },
  });
};

export default useGetAllProducts;
