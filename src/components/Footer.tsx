import dynamic from "next/dynamic";

const DarkModeBtnSSR = dynamic(() => import("@/components/DarkModeBtn"), {
  ssr: false,
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-300 dark:bg-black my-0">
      <div className="max-w-3xl lg:max-w-5xl mx-auto py-4 px-7">
        <div className="flex justify-between items-center">
          <p>Copyright &copy; {currentYear}. All rights are reserved</p>
          <DarkModeBtnSSR />
        </div>
      </div>
    </footer>
  );
}
