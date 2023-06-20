'use client';

import Image from "next/image";
import Search from "../dashboard/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SheetDemo } from "./Sheet";

export default function Nav() {
    return (
    <>
        <div className="h-20 w-full flex items-center justify-between bg-opacity-80 bg-gray-800 rounded-md">
        <div className="ml-3 flex items-center justify-between">
            <Search/>
        </div>
        <div className="w-fit mr-3 flex items-center justify-center rounded-md  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-white mr-2">Fulaninho</p>
        <Avatar className="mr-8">
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SheetDemo/>
        </div>
        </div>
    </>)
}