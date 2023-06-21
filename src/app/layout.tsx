"use client";

//React
import React, { ReactNode } from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Providers from "@/components/Providers";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import FooterInicial from "@/components/ui/Footer";

export const metadata = {
  title: "CineCritic - Review de filmes e series.",
  description: "Em desenvolvimento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <ToastContainer/>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
