"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const menu = [
    {
      id: 1,
      url: "/",
      name: "Home",
    },
    {
      id: 2,
      url: "#about",
      name: "About",
    },
    {
      id: 3,
      url: "/artikel",
      name: "Artikel",
    },
    {
      id: 4,
      url: "#contact",
      name: "Contact",
    },
  ];

  console.log(isHidden);
  return (
    <>
      <nav className="bg-gray-100 text-neutral-500 dark:text-neutral-300 dark:bg-black dark:border-b-[1px] dark:border-gray-800">
        <div className="max-w-3xl lg:max-w-5xl mx-auto px-7 py-4 flex justify-between">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            className="dark:invert md:w-1/4"
            width={100}
            height={24}
            priority
          />
          <button
            className="md:w-3/4 md:hidden"
            type="submit"
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          >
            {isHidden ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>
      <div className="flex justify-end max-w-[700px] lg:max-w-[960px] mx-auto">
        <ul
          className={`${
            isHidden && "hidden"
          } md:flex absolute bg-gray-200 md:bg-gray-100 md:mt-4 mt-8 top-0`}
        >
          {menu.map((link) => (
            <li key={link.id} className="px-2">
              <Link href={link.url}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
