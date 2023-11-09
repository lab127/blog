"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

// tugas: buat key: theme, value: dark | light | system

export default function DarkModeBtn() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage.dark) {
      return true;
    } else {
      return false;
    }
  });

  function darkClick() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("dark", "true");
      document.documentElement.classList.add("dark");
      document.title = "Dark App";
    } else {
      localStorage.removeItem("dark");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button onClick={darkClick} type="submit">
      {darkMode ? <FaSun size="20" /> : <FaMoon size="20" />}
    </button>
  );
}
