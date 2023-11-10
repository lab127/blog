"use client";
import React from "react";
import useDarkMode from "@/hooks/useDarkTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkTheme() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      {colorTheme === "light" ? (
        <button onClick={() => setTheme("light")} type="submit">
          <FaSun size={20} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} type="submit">
          <FaMoon size={20} />
        </button>
      )}
    </>
  );
}
