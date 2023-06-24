'use client';

import EditProfileTab from "@/components/dashboard/PerfilComponent";
import prisma from "@/lib/prisma";
import { useSession, getSession } from 'next-auth/react';

export default function page() {
    return(<>
    <div className= "bg-opacity-70 bg-gray-800 rounded-md flex flex-col w-full h-fit mb-16 p-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <EditProfileTab/>
    </div>
    </>)
};

