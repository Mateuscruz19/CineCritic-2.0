"use client";

//React
import React, { ReactNode } from 'react';import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { ToastContainer } from 'react-toastify';
import Providers from "@/components/Providers";

export const metadata = {
  title: 'CineCritic - Review de filmes e series.',
  description: 'Em desenvolvimento',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
      <ToastContainer/>
        {children}
        </Providers>
        </body>
    </html>
    </>
  )
}
