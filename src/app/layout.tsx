import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Personal Web",
  description: "Blog, Porfolio, Anything about work",
};

const encode_sans = Encode_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={encode_sans.className}>{children}</body>
    </html>
  );
}
