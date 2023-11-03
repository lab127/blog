import type { Metadata } from "next";
import { Rajdhani, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_serif.variable} ${rajdhani.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
