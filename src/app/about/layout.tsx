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
    <div className="xl:h-screen max-xl:min-h-screen">
        <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/starwars.jpg')]">
          <div className="bg-black w-full h-full bg-opacity-40 max-xl:flex flex-col items-center">
          <Nav/>
          <div className='flex flex-col items-center max-xl:p-5'>
          <main>{children}</main>
          <FooterInicial/>
          </div>
          </div>
          </div>
          </div>
      
    </>
  );
};

export default Layout;

