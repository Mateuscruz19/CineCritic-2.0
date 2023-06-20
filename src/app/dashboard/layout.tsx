"use client";

//React
import React, { ReactNode, useState } from 'react';
import Footer from '@/components/dashboard/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from "@/components/utils/Sidebar"
import Nav from '@/components/utils/Nav';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
  return (
    <>
     <ToastContainer/>
     <div className="min-h-screen">
  <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover" style={{ backgroundImage: "url('/images/spiderbanner5.jpg')" }}>
    <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
      <div className="container mx-auto flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <div className="h-95vh mt-10">
            <Nav />
            <div className="mt-9">
              <main className="flex flex-col">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Layout;

