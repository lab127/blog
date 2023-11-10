import { useEffect, useState } from "react";

type TMode = "dark" | "light" | "system";

export default function useDarkMode() {
  //   const cekDark = typeof window !== "undefined" && window.localStorage.dark ? true : false;

  const isDark = () => {
    if (typeof window !== "undefined") {
      if (window.localStorage["theme-mode"]) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      return "system";
    }
  };

  const [darkMode, setDarkMode] = useState<TMode>(isDark);

  let colorMode: string;
  switch (darkMode) {
    case "light":
      colorMode = "light";
      break;
    case "dark":
      colorMode = "dark";
      break;
    default:
      colorMode = "system";
  }

  useEffect(() => {
    const htmlClass = window.document.documentElement.classList;
    htmlClass.remove(colorMode);
    htmlClass.add(darkMode);

    localStorage.setItem("theme-mode", darkMode);
    // if (darkMode) {
    //   localStorage.setItem("dark", "true");
    //   document.documentElement.classList.add("dark");
    //   document.title = "Dark App";
    // } else {
    //   localStorage.removeItem("dark");
    //   document.documentElement.classList.remove("dark");
    // }
  }, [darkMode]);

  return [colorMode, setDarkMode] as const;
}
