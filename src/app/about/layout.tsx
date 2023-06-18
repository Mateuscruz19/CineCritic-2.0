"use client";

//React
import React, { ReactNode } from 'react';

//Components
import Nav from '@/components/home/Nav';
import FooterInicial from '@/components/ui/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
   
  return (
    <>
    <div className="h-screen">
        <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/starwars.jpg')]">
          <div className="bg-black w-full h-full lg:bg-opacity-40 ">
          <Nav/>
          <div className='flex flex-col items-center'>
          <main>{children}</main>
          </div>
          <FooterInicial/>
          </div>
          </div>
          </div>
      
    </>
  );
};

export default Layout;

