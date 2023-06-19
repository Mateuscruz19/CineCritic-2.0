"use client";

//React
import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import Footer from '@/components/dashboard/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import Dropdown from '@/components/dashboard/Dropdown';
import Sidebar from "@/components/utils/Sidebar"
import Nav from '@/components/utils/Nav';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
   
  return (
    <>
    <ToastContainer/>
      <div className='flex'>
        <Sidebar />
      <div className='flex flex-col items-center w-full  h-full'>
        <Nav/>
      <main className="flex mt-20">{children}</main>
      <Footer/>
      </div>
      </div>
      
    </>
  );
};

export default Layout;

