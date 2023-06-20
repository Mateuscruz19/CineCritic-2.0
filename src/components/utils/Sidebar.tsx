'use client';

import Image from "next/image";
import { signOut } from "next-auth/react";


export default function Sidebar() {

  return (
   //   <aside id="logo-sidebar"className="bg-[#111827] top-0 z-40 w-64 h-50vh ml-10
   //   " aria-label="Sidebar">
   //      <p>Teste</p>
   //   </aside>
     <>
     <div className="flex justify-center items-center h-screen w-80 mt-20">
     <div className=" z-40 w-64 h-[67rem]">
         <div className="h-full px-3 py-4 overflow-y-aut flex flex-col items-center bg-opacity-40 rounded-lg bg-gray-800">
         <a href="/dashboard/home" className="mr-3 sm:h-7 items-center pl-2.5 mb-5 ">
         <Image src="/images/logos/logo2.png" alt="CineCritic Logo" width="160" height="100" className="bg-opacity-80 bg-gray-800 px-3 rounded-lg"/>
      </a>
      <div className="w-52 h-5/6 mt-20 flex flex-col justify-between">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="w-6 h-6 transition duration-75 text-[#FF5757] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Popular</span>
               <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-white bg-[#FF5757] rounded-full">Novo!</span>
            </a>
         </li>
         <li>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#FF5757] transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Gêneros</span>
            </a>
         </li>
         <li>
         <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Perfil</span>
            </a>
         </li>
         <li>
          <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700" onClick={() => signOut({ callbackUrl: '/' })}>
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#FF5757] transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Deslogar</span>
            </a>
         </li>
      </ul>
      <div>
      <div className="bg-white w-[200px] h-[2px] mb-3"></div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200 ">© 2023 <a  className="hover:underline">CineCritic™</a>. Todos os direitos reservados. 
      </span>
      </div>
      </div>
         </div>
     </div>
     </div>
     </>
  );
}