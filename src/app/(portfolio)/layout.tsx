import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Personal Web",
  description: "Blog, Porfolio, Anything about work",
};

type Props = {
  children: ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  return <body className={inter.className}>{children}</body>;
}
