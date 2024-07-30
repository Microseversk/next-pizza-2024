import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-center font-semibold text-[#344051] border-b-[2px] border-b-gray-300 pt-6 pb-6">
      <div className="flex w-10/12  justify-between">
        <ul className="flex gap-8 ">
          <li>
            <Link href="/">Лого</Link>
          </li>
          <li>
            <Link href="/profile">Профиль</Link>
          </li>
          <li>
            <Link href="/orders">Заказы</Link>
          </li>
        </ul>
        <ul className="flex gap-8">
          <li>
            <Link href="/basket">Корзина</Link>
          </li>
          <Link href="/login">Выйти</Link>
        </ul>
      </div>
    </header>
  );
};
