'use client';

import Image from "next/image";
import Search from "../dashboard/Search";

export default function Nav() {
    return (<>
        <div className="bg-white h-10 mt-10 w-[90%] flex justify-between">
        <div className="flex ">
            <div className="bg-blue-400 w-15 h-full mr-5 flex items-center rounded-md">
                <p className="text-white">Bem-Vindo!</p>
            </div>
            <Search/>
        </div>
        <div className="bg-blue-400 w-5 h-10"></div>
        </div>
    </>)
}