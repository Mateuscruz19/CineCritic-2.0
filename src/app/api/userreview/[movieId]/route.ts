import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";


  interface IParams {
    movieId?: string;
  }

export async function GET(request: Request, { params }: { params: IParams }) {
    
    //   const currentUser = await getCurrentUser();

    //   if (!currentUser) {
    //     return NextResponse.json({error: "Usuário não autenticado!"});
    //   }

    const { movieId } = params;
    

    if (!movieId) {
        throw new Error('MovieId invalido');
      }

     const review = await prisma.review.findMany({
         where: {
             movieId: movieId,
         },
      });

      return NextResponse.json({review});
}

