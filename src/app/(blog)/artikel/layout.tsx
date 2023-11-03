import { ReactNode } from "react";
import { Rajdhani, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

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
export const metadata: Metadata = {
  title: "My Blog",
  description: "Tutorial, Tips & Trik, Hack",
};

type Props = {
  children: ReactNode;
};

export default function ArtikelLayout({ children }: Props) {
  return (
    <body className={`${roboto_serif.variable} ${rajdhani.variable}`}>
      <Navbar />
      <main className={`max-w-3xl lg:max-w-5xl mx-auto pt-9 px-7`}>
        {children}
      </main>
    </body>
  );
}
