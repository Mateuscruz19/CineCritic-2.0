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
import ToasterProvider from "./providers/ToasterProvider";


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
            <ToasterProvider />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
