import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

  return (
    <nav className="bg-gray-100 text-neutral-500 dark:text-neutral-300 dark:bg-black border-b-[1px] border-gray-800">
      <div className="max-w-[700px] lg:max-w-[960px] mx-auto px-7 py-3 flex flex-col sm:flex-row sm:justify-between">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          className="dark:invert sm:w-1/4"
          width={100}
          height={24}
          priority
        />
        <div className="sm:w-3/4">
          <ul className="flex flex-col items-end sm:flex-row sm:justify-end">
            {menu.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
