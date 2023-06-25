import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
     
interface User {
    accessToken: string;
    createdAt: string;
    email: string;
    exp: number;
    iat: number;
    icon: string;
    id: number;
    jti: string;
    name: string;
    sub: string;
  };

  interface RequestBody {
    user: User;
    newName: string;
  }

export async function POST(request: Request) {
    const body: RequestBody = await request.json(); 

    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: body.user.email,
            },
            data: {
                name: body.newName,
            },
        });
        console.log("user", updatedUser);
        return new Response(JSON.stringify({message: `Usuário ${body.user.email}teve o nome atualizado para ${body.newName}!`}));;
    } catch (error) {
        return new Response(JSON.stringify({message: `Erro ao atualizar o nome do usuário ${body.user.email}!`}));;
    }
}