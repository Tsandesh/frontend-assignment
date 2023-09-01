import { BASE_URL } from "..";

export const getAllProduct = async () => {
  const data = fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((json) => console.log(json));
  return data;
};
