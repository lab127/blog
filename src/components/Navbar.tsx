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
  const [isHidden, setIsHidden] = useState(true);
  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024
  );
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth >= 1024);
      if (isDesktop) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isDesktop]);

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
            {isDesktop ? <div>DESKTOP</div> : <div>MOBILE</div>}
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
                ? `${ref?.current?.getBoundingClientRect().height}px`
                : "0px",
            }}
            className="lg:h-auto transition-all duration-500 overflow-y-hidden overflow-auto my-2"
          >
            <ul
              ref={ref}
              // className={`flex flex-col lg:flex-row bg-red-300 bg-inherit lg:my-3 lg:mx-0 mt-14 mx-2  bg-gradient-to-t drop-shadow-xl`}
            >
              {menu.map((link) => (
                <li key={link.id} className="lg:px-2 px-4 py-1">
                  <Link
                    onClick={() => {
                      setIsHidden(!isHidden);
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
