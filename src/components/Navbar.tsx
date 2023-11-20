"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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

export default function Navbar() {
  const [isHidden, setIsHidden] = useState<boolean>();
  const [isDesktop, setIsDesktop] = useState<boolean>();
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setIsHidden(window.innerWidth < 1024);
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  return (
    <header>
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
          <div
            style={{
              height: !isHidden
                ? `${
                    ref.current && ref.current.getBoundingClientRect().height
                  }px`
                : "0px",
            }}
            className="transition-all duration-500 overflow-y-hidden overflow-auto my-2"
          >
            <ul ref={ref} className={`h-auto flex flex-col lg:flex-row`}>
              {menu.map((link) => (
                <li key={link.id} className="lg:px-2 px-4 py-1">
                  <Link
                    onClick={() => {
                      if (isDesktop) {
                        setIsHidden(false);
                      } else {
                        setIsHidden(!isHidden);
                      }
                    }}
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
    </header>
  );
}
