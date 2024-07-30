import { PizzasResponse } from "src/app/@types/types";

export const getCatalog = async (): Promise<PizzasResponse> => {
  const response = await fetch(`${process.env.BASE_URL}/pizza/catalog`);
  return response.json();
};
