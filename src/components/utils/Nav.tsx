'use client';

import Image from "next/image";
import Search from "../dashboard/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SheetDemo } from "./Sheet";

export default function Nav() {
    return (
    <>
        <div className="mt-10 w-[90%] flex justify-between">
            <div className="w-[60%] p-6 h-full bg-opacity-80 rounded-md bg-gray-800">
            <Search/>
            </div>
        <div className="w-fit p-3 h-28 flex flex-col items-center justify-center bg-opacity-80 rounded-md bg-gray-800">
        <div className="flex mb-3">
        <p className="text-white mr-2 mt-2">Fulaninho</p>
        <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        </div>
        <SheetDemo/>
        </div>
        </div>
    </>)
}