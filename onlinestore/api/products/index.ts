import { IProduct } from "@/types";
import { BASE_URL } from "..";

export const getAllProduct = async (): Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProduct[] = await response.json();
  return data;
};

export const getSingleProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProduct = await response.json();
  return data;
};
