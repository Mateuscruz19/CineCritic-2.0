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
     
      <div className='flex items-center flex-col h-full w-full'>
        <div className='w-[93%] h-screen flex'>
          <Sidebar/>
          <div className='h-full w-[80%] mt-9'>
            <Nav/>
            <div className='mt-9 w-full'>
            <main className="flex">{children}</main>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      {/* <div className='flex w-full  h-full'>
      <Sidebar />
        <div className='mt-9 w-[74.5%]'>
         <main className="flex">{children}</main>
        </div>
      
      </div>
       */}
    </>
  );
};

export default Layout;

