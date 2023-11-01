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
    <nav className="bg-gray-100 text-neutral-500 dark:text-neutral-300 dark:bg-neutral-300">
      <div className="max-w-[700px] lg:max-w-[960px] mx-auto px-7 ">Navbar</div>
    </nav>
  );
}
