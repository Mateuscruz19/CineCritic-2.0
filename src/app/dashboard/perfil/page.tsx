'use client';

import EditProfileTab from "@/components/PerfilComponent";
import prisma from "@/lib/prismadb";
import { useSession, getSession } from 'next-auth/react';
import PopularMovies from "@/components/movieComponents/popularMovies";

export default function Perfil() {
    const { data: session } = useSession();
    const user = session?.user;
   
    console.log(user)

    return(<>
    <div className= "bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <EditProfileTab user={user}/>
        <p className="text-2xl font-bold mt-5 text-white">Pode te Interessar:</p>
        <PopularMovies/>
    </div>
    </>)
};

