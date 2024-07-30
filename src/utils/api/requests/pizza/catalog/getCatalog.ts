import { PizzasResponse } from "src/@types/types";

export const getCatalog = async (): Promise<PizzasResponse> => {
  const response = await fetch(`${process.env.BASE_URL}/pizza/catalog`, {
    next: {
      tags: ["catalog"],
    },
  });
  return response.json();
};
