"use client";

//React
import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import Footer from '@/components/dashboard/Footer';
import Sidebar from '@/components/dashboard/Sidebar';
import { getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import Dropdown from '@/components/dashboard/Dropdown';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    const [online, setOnline] = useState(false)
   
  return (
    <>
    <ToastContainer/>
    <Dropdown/>
      <div className='flex'>
        <Sidebar online={online}/>
        
      <div className='flex flex-col items-center w-full  h-full'>
      <main className="flex mt-20">{children}</main>
      <Footer/>
      </div>
      </div>
      
    </>
  );
};

export default Layout;

