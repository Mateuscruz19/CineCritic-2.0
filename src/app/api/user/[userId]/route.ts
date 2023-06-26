import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

  interface IParams {
    userId?: number;
  }

export async function GET(request: Request, { params }: { params: IParams }) {

    const { userId } = params;
    const id = Number(userId);

    if (!id) {
        throw new Error('Usuario invalido');
      }

     const user = await prisma.user.findFirst({
         where: {
             id,
         },
      });

      return NextResponse.json({user});
}