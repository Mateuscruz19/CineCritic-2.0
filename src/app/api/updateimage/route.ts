import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

  interface RequestBody {
    email: string;
    newImage: string;
  }

export async function POST(request: Request) {
    const body: RequestBody = await request.json(); 

    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: body.email,
            },
            data: {
                icon: body.newImage,
            },
        });
        console.log("user", updatedUser);
        return new Response(JSON.stringify({message: `Usuário ${body.email} teve o icone atualizado!`}));;
    } catch (error) {
        return new Response(JSON.stringify({message: `Erro ao atualizar o nome do usuário ${body.email}!`}));;
    }
}