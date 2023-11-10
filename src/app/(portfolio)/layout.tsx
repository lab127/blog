import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab127 - Aris",
  description: "Blog, Porfolio, Anything about work",
};

type Props = {
  children: ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  return (
    <body className={inter.className}>
      <Navbar />
      {children}
    </body>
  );
}
