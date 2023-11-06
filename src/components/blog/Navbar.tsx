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
      url: "/blog",
      name: "Blog",
    },
    {
      id: 4,
      url: "#contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <nav className="bg-gray-100 text-neutral-500 dark:text-neutral-300 dark:bg-black dark:border-b-[1px] dark:border-gray-800">
        <div className="max-w-3xl lg:max-w-5xl mx-auto px-7 py-4 flex justify-between">
          <Link href={`/`}>
            <Image
              src="/next.svg"
              alt="Next.js logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <button
            className="md:hidden"
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
          } md:flex absolute bg-gray-200 md:bg-gray-100 md:my-3 md:mx-0 mt-10 mx-2 top-0`}
        >
          {menu.map((link) => (
            <li key={link.id} className="md:px-2 px-4 py-1">
              <Link href={link.url}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
