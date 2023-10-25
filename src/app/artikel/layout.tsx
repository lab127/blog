import { Metadata } from "next";
import { ReactNode } from "react";
import { Rajdhani, Roboto_Serif } from "next/font/google";

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
      <nav>NavBar</nav>
      <main className={`${roboto_serif.variable} ${rajdhani.variable}`}>
        {children}
      </main>
    </>
  );
}
