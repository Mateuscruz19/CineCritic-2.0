import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

  interface Body {
    userId : number;
    movieId: string;
    nota: number;
    review: string;
  }

export async function POST(request: Request) {
    const body: Body = await request.json(); 

    if(!body.userId || !body.movieId || !body.nota || !body.review){
        return NextResponse.json({error: "Dados inválidos!"});
    }

    const review = await prisma.review.create({
        data: {
            userId: body.userId,
            movieId: body.movieId,
            nota: body.nota,
            review: body.review,
        },
      });

      return new Response(JSON.stringify(review));
}
