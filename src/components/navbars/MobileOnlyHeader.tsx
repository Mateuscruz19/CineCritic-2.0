'use client';

import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-800 xl:hidden">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/images/logos/logo2.png" alt="CineCritic Logo" width="160" height="100" className="bg-opacity-80 bg-gray-800 px-3 rounded-lg"/>
        </div>
        <div className="block sm:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3a3 3 0 016 0h8a3 3 0 110 6H6a3 3 0 01-3-3V3zm0 6a1 1 0 100 2h8a1 1 0 100-2H6zm0 4a1 1 0 100 2h8a1 1 0 100-2H6z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } sm:block sm:flex-grow`}
        >
          <div className="text-sm sm:flex-grow">
            <a
              href="/dashboard/home"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:bg-gray-700 mr-4"
            >
              Dashboard
            </a>
            <a
              href="/dashboard/popular"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:bg-gray-700 mr-4"
            >
              Popular
            </a>
            <a
              href="/dashboard/gender"
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:bg-gray-700 mr-4"
            >
              Gêneros
            </a>
            <a
              onClick={() => signOut({ callbackUrl: "/" })}
              className="block mt-4 sm:inline-block sm:mt-0 text-white hover:bg-gray-700 mr-4"
            >
              Deslogar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}