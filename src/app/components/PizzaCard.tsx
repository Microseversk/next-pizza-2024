import Image from "next/image";
import { Pizza } from "../@types/types";

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  return (
    <div className="flex flex-col gap-3 h-full w-full p-4 border border-gray-200 rounded-lg shadow-md">
      <Image
        className="object-contain w-full h-52 flex-grow"
        src={`${process.env.BASE_URL}${pizza.img}`}
        alt={pizza.name}
        width={333}
        height={333}
      />
      <strong className="font-semibold text-lg">{pizza.name}</strong>
      <p className="opacity-80">{pizza.description}</p>
      <strong className="font-semibold text-lg">cost</strong>
      <button className="w-full bg-orange-600 rounded-xl py-4 text-white font-semibold hover:bg-orange-700 transition-colors">
        Выбрать
      </button>
    </div>
  );
};
