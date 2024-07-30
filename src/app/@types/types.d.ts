export interface ResponseBase {
  success: boolean;
  reason: string;
}

export interface PizzaIngredient {
  name: string;
  cost: number;
  img: string;
}

export interface PizzaSize {
  name: "SMALL" | "MEDIUM" | "LARGE";
  price: number;
}

export interface PizzaDough {
  name: "THIN" | "THICK";
  price: number;
}

export interface Pizza {
  id: string;
  name: string;
  ingredients: PizzaIngredient[];
  toppings: PizzaIngredient[];
  description: string;
  sizes: PizzaSize[];
  doughs: PizzaDough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}

export interface PizzasResponse extends ResponseBase {
  catalog: Pizza[];
}
