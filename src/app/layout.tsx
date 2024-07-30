import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "64x64",
      url: "/pizza-favicon.png",
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " w-full flex flex-col gap-10 items-center"
        }
      >
        <Header />
        <main className="w-10/12">{children}</main>
      </body>
    </html>
  );
}
