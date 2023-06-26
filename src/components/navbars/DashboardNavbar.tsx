'use client';

import Image from "next/image";
import Search from "./Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatars/avatar"
import { useSession } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null;
  }

const Nav: React.FC<NavbarProps> = ({
    currentUser,
}) => {
    const { data: session } = useSession();
    const user = session?.user;


    return (
    <>
        <div className="h-20 w-full flex items-center justify-between bg-opacity-70 bg-gray-800 rounded-md">
        <div className="ml-3 flex items-center justify-between">
            <Search/>
        </div>
        <div className="w-fit mr-3 flex items-center justify-center rounded-md  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-white mr-2">{user ? currentUser?.name : 'Usuario'}</p>
        <Avatar className="mr-8">
         <AvatarImage src={currentUser?.icon} />
         <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        </div>
    </>)
}

export default Nav;