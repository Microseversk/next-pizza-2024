import { getCatalog } from "@/requests/pizza/catalog/getCatalog";
import { PizzaCard } from "./components/PizzaCard";

export const metadata = {
  title: "Каталог",
  description: "Каталог пицц",
};

const CatalogPage = async () => {
  const { catalog } = await getCatalog();
  return (
    <div className="grid  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {catalog.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default CatalogPage;
