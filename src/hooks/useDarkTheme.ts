"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage["my-theme"]
      ? "dark"
      : "light"
  );

  console.log("theme", theme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const htmlClass = window.document.documentElement.classList;

    htmlClass.remove(colorTheme);
    htmlClass.add(theme);

    localStorage.setItem("my-theme", theme);
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
