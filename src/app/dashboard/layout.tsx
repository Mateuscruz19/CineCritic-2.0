//React
import React, { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from "@/components/navbars/Sidebar"
import Nav from '@/components/navbars/DashboardNavbar';

import Header from '@/components/navbars/MobileOnlyHeader';
import getCurrentUser from '@/app/actions/getCurrentUser';


type LayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <>
        <ToastContainer/>
        <div className="min-h-screen">
          <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover" style={{ backgroundImage: "url('/images/spiderbanner5.jpg')" }}>
            <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
              <div className="container mx-auto flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/4">
                  <Sidebar />
                </div>
                <div className="w-full sm:w-3/4">
                  <div className="h-95vh mt-10">
                  <Nav currentUser={currentUser} />
                  <Header/>
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

