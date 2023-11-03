import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArtikelLayout({ children }: Props) {
  return (
    <main className={`max-w-3xl lg:max-w-5xl mx-auto pt-9 px-7`}>
      {children}
    </main>
  );
}
