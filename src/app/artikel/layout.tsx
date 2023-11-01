import { Metadata } from "next";
import { ReactNode } from "react";
import { Rajdhani, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-rajdhani",
});

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Blog Artikel",
  description: "Tutorial, Tips & Trik, Hack",
};

export default function ArtikelLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main
        className={`${roboto_serif.variable} ${rajdhani.variable} max-w-[700px] lg:max-w-[960px] mx-auto pt-9 px-7`}
      >
        {children}
      </main>
    </>
  );
}
