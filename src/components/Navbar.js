import { Container } from "postcss";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import livre from "../../public/livre.png";
import burger from "../../public/burger.png";
import Link from "next/link";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function toogleMenu() {
    setToggleMenu;
    console.log(toggleMenu);
  }
  return (
    <>
      <div href="top" className="flex gap-10" aria-label="Page d'acceuil">
        <nav
          className="bg-white maw-w-5Xl mx-auto font-poppins p-6 flex items-center justify-between gap
        text-black"
        >
          <Image
            className="w-10 p-0 hidden md:w-7 md:inline md:mr-4"
            src={livre}
            alt="logo livre"
          />
          <span className="inline text-lg lg:text -xl">La Biblio</span>
        </nav>
        <button
          onClick={toogleMenu}
          aria-label="toggle button"
          aria-expanded="false"
          className="cursor-pointer w-7 md:hidden"
        >
          <Image src={burger} alt="menu"></Image>
        </button>
        <ul
          className="w-full absolute top-full left-0 -translate-full -z-10
        text-black border-b border-gray-200 flex flex-col items-center md:static
        md:z-10 :w-min md:transform-none md:border-none md:flex-row"
        >
          <li className="py-4 md:py-0 md:mr-6">
            <Link
              href={"/SubscribePage"}
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Inscription
            </Link>
          </li>

          <li className="py-4 md:py-0 md:mr-6">
            <Link
              href={""}
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              fred
            </Link>
          </li>
          <li className="py-4 md:py-0 md:mr-6">
            <Link
              href={"#"}
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              fred
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
