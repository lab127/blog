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
      url: "/#about",
      name: "About",
    },
    {
      id: 3,
      url: "#portfolio",
      name: "Porfolio",
    },
    {
      id: 4,
      url: "/blog",
      name: "Blog",
    },
    {
      id: 5,
      url: "#contact",
      name: "Contact",
    },
  ];

  return (
    <>
      {/* <nav className="bg-gray-100 text-neutral-500 dark:text-neutral-300 dark:bg-black dark:border-b-[1px] dark:border-gray-800"> */}
      <nav className="z-10 fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="max-w-3xl lg:max-w-5xl lg:flex lg:justify-between items-center mx-auto">
          <div className="px-7 py-4 flex justify-between">
            <Link href={`/`}>
              <Image
                src="/lab127.svg"
                alt="Lab 127 logo"
                className="dark:invert"
                width="0"
                height="0"
                style={{ width: "100px", height: "auto" }}
                priority
              />
            </Link>
            <button
              className="lg:hidden"
              type="submit"
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
              {isHidden ? (
                <AiOutlineMenu size="20" />
              ) : (
                <AiOutlineClose size="20" />
              )}
            </button>
          </div>
          <div className="flex justify-end lg:px-7">
            <ul
              className={`${
                isHidden && "hidden"
              } lg:flex absolute bg-inherit lg:my-3 lg:mx-0 mt-14 mx-2 top-0 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none drop-shadow-xl`}
            >
              {menu.map((link) => (
                <li key={link.id} className="lg:px-2 px-4 py-1">
                  <Link
                    className="text-zinc-800 dark:text-zinc-400 hover:text-pink-700"
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
