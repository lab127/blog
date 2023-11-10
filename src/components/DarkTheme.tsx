"use client";
import useDarkMode from "@/hooks/useDarkMode";
import {
  HiOutlineDesktopComputer,
  HiDesktopComputer,
  HiSun,
  HiOutlineSun,
  HiMoon,
  HiOutlineMoon,
} from "react-icons/hi";

export default function DarkTheme() {
  const [colorMode, setDarkMode] = useDarkMode();

  return (
    <>
      <button onClick={() => setDarkMode("light")} type="submit">
        {colorMode === "light" ? <HiSun /> : <HiOutlineSun />}
      </button>
      <button onClick={() => setDarkMode("dark")} type="submit">
        {colorMode === "dark" ? <HiMoon /> : <HiOutlineMoon />}
      </button>
      <button onClick={() => setDarkMode("system")} type="submit">
        {colorMode === "system" ? (
          <HiDesktopComputer />
        ) : (
          <HiOutlineDesktopComputer />
        )}
      </button>
    </>
  );
}
